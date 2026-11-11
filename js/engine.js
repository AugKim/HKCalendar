/*
 * engine.js — Lõi tính toán Lịch Phụng Vụ Công Giáo (Việt Nam).
 * Thuần logic, không đụng DOM. Dùng được trong trình duyệt (window.Phungvu) và Node.
 *
 * Mọi phép so sánh ngày dùng "số ngày" nguyên (UTC) nên không bị lệch múi giờ/giờ mùa hè.
 * Bậc ưu tiên theo Bảng các ngày phụng vụ (Quy tắc chung về Năm Phụng Vụ & Lịch, số 59), 1 = cao nhất.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./lunar.js'));
  else root.Phungvu = factory(root.Lunar);
})(typeof self !== 'undefined' ? self : this, function (Lunar) {
  'use strict';

  // ------------------------------------------------------------------ tiện ích ngày
  const DAY = 86400000;
  const mk = (y, m, d) => Math.round(Date.UTC(y, m - 1, d) / DAY);
  const civ = n => { const t = new Date(n * DAY); return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate() }; };
  const dow = n => (((n + 4) % 7) + 7) % 7;               // 0 = Chúa Nhật
  const sunOnOrBefore = n => n - dow(n);
  const fromDate = dt => mk(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
  const toDate = n => { const c = civ(n); return new Date(c.y, c.m - 1, c.d); };
  const pad2 = x => String(x).padStart(2, '0');
  const iso = n => { const c = civ(n); return c.y + '-' + pad2(c.m) + '-' + pad2(c.d); };
  const fmtDM = n => { const c = civ(n); return c.d + '/' + c.m; };

  const DOW = ['Chúa Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const DOW_SHORT = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  function roman(n) {
    const t = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let s = ''; for (const [v, r] of t) while (n >= v) { s += r; n -= v; } return s;
  }

  // Thuật toán Meeus/Jones/Butcher
  function easterOf(y) {
    const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
    const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
    return mk(y, month, day);
  }

  // ------------------------------------------------------------------ hằng số
  const RANK = { TRIDUUM: 1, HIGH: 2, TET: 2.5, SOLEMNITY: 3, LORD_FEAST: 5, SUNDAY: 6, FEAST: 7, STRONG_WEEKDAY: 9, MEMORIAL: 10, OPTIONAL: 12, WEEKDAY: 13 };
  const GRADE_LABEL = {
    TRIDUUM: 'Tam Nhật Vượt Qua', SOLEMNITY: 'Lễ Trọng', FEAST: 'Lễ Kính', MEMORIAL: 'Lễ Nhớ', OPTIONAL: 'Lễ Nhớ tùy ý',
    SUNDAY: 'Chúa Nhật', WEEKDAY: 'Ngày thường', HIGH: 'Đại lễ'
  };
  const SEASON_NAME = { advent: 'Mùa Vọng', christmas: 'Mùa Giáng Sinh', lent: 'Mùa Chay', triduum: 'Tam Nhật Vượt Qua', easter: 'Mùa Phục Sinh', ordinary: 'Mùa Thường Niên' };
  const SEASON_COLOR = { advent: 'purple', christmas: 'white', lent: 'purple', triduum: 'white', easter: 'white', ordinary: 'green' };
  const COLOR_NAME = { green: 'Xanh', purple: 'Tím', white: 'Trắng', red: 'Đỏ', rose: 'Hồng' };

  // Lễ Kính của Chúa (bậc 5, thắng Chúa Nhật Thường Niên). Khóa "tháng-ngày".
  const LORD_FEASTS = { '2-2': 1, '8-6': 1, '9-14': 1, '11-9': 1 };
  // Lễ Trọng đã có ngày riêng trong phụng vụ mùa — không đưa vào danh sách "dời" chung
  const FORCE_RANK = { '12-25': RANK.HIGH };
  // Mã bài đọc 7DDMM cho các lễ trọng được cử hành ngày khác ngày gốc
  const OWN_CODES = { martyrs: '72411', joseph: '71903', annunciation: '72503', immaculate: '70812' };

  // ------------------------------------------------------------------ bảng lễ thánh cố định
  const sanctoral = new Map();      // "m-d" -> { items:[...], solemnity: item|null }
  let sanctoralReady = false;

  const TITLE_SMALL = new Set(['và', 'của', 'cho', 'trong', 'ở', 'tại', 'với', 'đến', 'từ', 'là', 'một', 'hay', 'các']);
  function titleCase(s) {
    return s.toLocaleLowerCase('vi').split(/(\s+)/).map((w, i) => {
      if (!w.trim()) return w;
      if (i > 0 && TITLE_SMALL.has(w)) return w;
      return w.charAt(0).toLocaleUpperCase('vi') + w.slice(1);
    }).join('');
  }
  const isUpper = s => { const L = s.replace(/[^A-Za-zÀ-ỹ]/g, ''); return L.length > 2 && L === L.toLocaleUpperCase('vi'); };
  // Sửa lỗi chính tả/thiếu chữ trong dữ liệu gốc (Saints.js)
  const NAME_FIX = {
    'Lucia trinh nữ, tử đạo': 'Thánh Lucia, trinh nữ, tử đạo',
    'Các Tổng Lãnh Thiên Thần: Thánh Michaêl, GABRIEL và RAPHAEL': 'Các Tổng Lãnh Thiên Thần Micae, Gabriel và Raphael',
    'Kỷ Niệm Cung Hiến Nhà Thờ Chính Tòa Giáo Phận. (1983)': 'Kỷ niệm cung hiến Nhà thờ chính tòa giáo phận (1983)',
    'DÂNG CHÚA GIÊSU TRONG ĐỀN THÁNH (Lễ Nến)': 'Dâng Chúa Giêsu trong Đền Thánh (Lễ Nến)'
  };
  const COLOR_CODE = { 'Tr': 'white', 'Đ': 'red', 'T': 'purple', 'Tm': 'purple', 'X': 'green', 'H': 'rose' };

  /** Tách một dòng dữ liệu thành tên sạch + màu + ghi chú. */
  function cleanEntry(raw, chasuble) {
    let color = chasuble ? COLOR_CODE[chasuble] : null;
    let s = String(raw).trim();
    const m = s.match(/\((Tr|Đ|Tm|T|X|H)\)/);
    if (!color && m) color = COLOR_CODE[m[1]];
    let note = '';
    s = s.replace(/\s*\((Tr|Đ|Tm|T|X|H)\)/g, '')
      .replace(/\s*\((Lễ Trọng|Lễ Kính|Lễ Nhớ|NATIVITY OF THE LORD)\)/gi, '')
      .replace(/\s*\(Thiên Thần Truyền Tin cho Đức Mẹ\)/i, '')
      .replace(/\s*\(Lễ Kính\/Lễ Trọng tại VN[^)]*\)/i, () => { note = 'Tại Việt Nam, thường được cử hành vào Chúa Nhật.'; return ''; });
    // phần phụ ("Lễ trọng. Lễ cầu cho giáo dân (Lễ họ)." / "Bổn mạng ...")
    const bm = s.match(/,?\s*(Bổn mạng[^.]*)\.?$/i);
    if (bm) { note = bm[1].trim(); s = s.slice(0, bm.index); }
    const dot = s.search(/\.\s+(?=[A-ZÀ-Ỹa-zà-ỹ])/);
    if (dot > 0) { note = (note ? note + ' ' : '') + s.slice(dot + 1).trim(); s = s.slice(0, dot); }
    s = s.replace(/[.\s]+$/, '').trim();
    // viết hoa đầu từ nếu cả tên in hoa; mô tả sau dấu phẩy thì viết thường
    if (NAME_FIX[s]) return { name: NAME_FIX[s], color: color || 'white', note: note };
    const parts = s.split(/,\s*/);
    s = parts.map((p, i) => {
      if (!isUpper(p)) return p;
      return i === 0 ? titleCase(p) : p.toLocaleLowerCase('vi').replace(/hội thánh/g, 'Hội Thánh').replace(/mẹ thiên chúa/g, 'Mẹ Thiên Chúa').replace(/thiên chúa/g, 'Thiên Chúa');
    }).join(', ');
    s = s.replace(/Đức Đức/g, 'Đức').replace(/\bmaria\b/g, 'Maria').replace(/\bgiuse\b/g, 'Giuse');
    if (/^Cầu cho/i.test(s)) s = s.charAt(0) + s.slice(1).toLocaleLowerCase('vi');
    if (NAME_FIX[s]) s = NAME_FIX[s];
    if (s.length > 1 && /^[a-zà-ỹ]/.test(s)) s = s.charAt(0).toLocaleUpperCase('vi') + s.slice(1);
    note = note.replace(/[.\s]+$/, '');
    return { name: s, color: color || 'white', note: note };
  }

  function splitOptional(raw) {
    // "Thánh A, linh mục (Tr). Thánh B, tử đạo (Đ)." -> 2 mục
    const pieces = String(raw).split(/\.\s+(?=(?:Thánh|Đức Mẹ|Bảy|Các|Cung|Danh)\b)/);
    return pieces.map(p => p.trim()).filter(Boolean);
  }

  /** Nạp SAINTS_DATA (Reading/Saints.js). */
  function setSanctoral(data) {
    sanctoral.clear();
    (data || []).forEach(item => {
      const parts = item.date.split(/[\/-]/);
      const d = parseInt(parts[0], 10), m = parseInt(parts[1], 10), key = m + '-' + d;
      const grade = { S: 'SOLEMNITY', F: 'FEAST', M: 'MEMORIAL', O: 'OPTIONAL' }[item.type] || 'OPTIONAL';
      const entry = sanctoral.get(key) || { key, m, d, items: [] };
      const rawList = grade === 'OPTIONAL' ? splitOptional(item.feast) : [item.feast];
      rawList.forEach((rw, i) => {
        const c = cleanEntry(rw, i === 0 ? item.chasuble : null);
        const rankNum = FORCE_RANK[key] || { SOLEMNITY: RANK.SOLEMNITY, FEAST: RANK.FEAST, MEMORIAL: RANK.MEMORIAL, OPTIONAL: RANK.OPTIONAL }[grade];
        entry.items.push({
          key, id: 'S' + key + (i ? '#' + i : ''), kind: 'sanctoral', name: c.name, note: c.note, grade,
          rank: (grade === 'FEAST' && LORD_FEASTS[key]) ? RANK.LORD_FEAST : rankNum,
          lord: !!LORD_FEASTS[key] || /^Chúa\b/i.test(c.name) || /Giáng Sinh/i.test(c.name),
          color: c.color, code: '7' + pad2(d) + pad2(m), raw: rw
        });
      });
      sanctoral.set(key, entry);
    });
    sanctoralReady = true;
    yearCache.clear(); dayCache.clear();
  }

  // ------------------------------------------------------------------ dữ liệu từng năm dương lịch
  const yearCache = new Map();
  function yearData(y) {
    let Y = yearCache.get(y);
    if (Y) return Y;
    const easter = easterOf(y);
    Y = {
      y, easter, ash: easter - 46, palm: easter - 7, holyThu: easter - 3, goodFri: easter - 2, holySat: easter - 1,
      octaveEnd: easter + 7, ascension: easter + 42, pentecost: easter + 49, trinity: easter + 56,
      corpus: easter + 63, sacredHeart: easter + 68, immHeart: easter + 69
    };
    const dec25 = mk(y, 12, 25);
    Y.dec25 = dec25;
    Y.advent4 = dec25 - (dow(dec25) || 7);
    Y.adventStart = Y.advent4 - 21;
    Y.christKing = Y.adventStart - 7;
    // Hiển Linh: Chúa Nhật từ 2 đến 8/1 (Việt Nam)
    const jan1 = mk(y, 1, 1);
    Y.epiphany = jan1 + (((7 - dow(jan1)) % 7) || 7);
    Y.baptism = Y.epiphany + (civ(Y.epiphany).d >= 7 ? 1 : 7);
    Y.holyFamily = dow(dec25) === 0 ? mk(y, 12, 30) : dec25 + (7 - dow(dec25));
    // Thông báo HĐGMVN 01/01/1992: lễ 24/11 (Các Thánh Tử Đạo VN, quan thầy Giáo hội VN, lễ trọng) "được kính trọng thể
    // vào Chúa Nhật trước ngày 24/11". Nếu Chúa Nhật đó trùng lễ Chúa Kitô Vua (bậc cao hơn) thì dùng Chúa Nhật liền trước.
    const nov24 = mk(y, 11, 24);
    Y.vnMartyrs = nov24 - (dow(nov24) || 7);
    if (Y.vnMartyrs === Y.christKing) Y.vnMartyrs -= 7;
    const oct1 = mk(y, 10, 1);
    Y.rosary = oct1 + ((7 - dow(oct1)) % 7);
    const oct31 = mk(y, 10, 31);
    Y.mission = oct31 - dow(oct31) - 7;
    Y.maryMother = Y.pentecost + 1;
    // Tết & Lễ Tro
    const al = Lunar.get(civ(Y.ash).y, civ(Y.ash).m, civ(Y.ash).d);
    Y.ashCelebration = Y.ash; Y.ashTransferred = false; Y.ashNote = null;
    if (al.month === 1 && !al.leap && al.day >= 1 && al.day <= 3) {
      Y.ashCelebration = Y.ash + (4 - al.day); Y.ashTransferred = true;
      Y.ashNote = 'Theo HĐGMVN: Lễ Tro (' + fmtDM(Y.ash) + ') trùng Mùng ' + al.day + ' Tết, nên việc cử hành và ăn chay, kiêng thịt dời sang Mùng 4 Tết (' + fmtDM(Y.ashCelebration) + '). Mùa Chay vẫn bắt đầu từ ' + fmtDM(Y.ash) + '.';
    }
    // dời các Lễ Trọng cố định
    Y.moveAway = new Map(); Y.moveTo = new Map();
    if (sanctoralReady) {
      sanctoral.forEach(e => e.items.forEach(it => {
        if (it.grade !== 'SOLEMNITY') return;
        const n = mk(y, e.m, e.d), t = transferTarget(Y, n, e.key);
        if (t !== n) {
          Y.moveAway.set(n, { item: it, to: t });
          Y.moveTo.set(t, { item: it, from: n });
        }
      }));
    }
    yearCache.set(y, Y);
    return Y;
  }

  function inAdventSunday(Y, n) { return dow(n) === 0 && n >= Y.adventStart && n <= Y.advent4; }
  function inLentSunday(Y, n) { return dow(n) === 0 && n > Y.ash && n < Y.palm; }
  function inEasterSunday(Y, n) { return dow(n) === 0 && n > Y.easter && n <= Y.pentecost; }

  /** Ngày thực sự cử hành một Lễ Trọng cố định (có thể dời). */
  function transferTarget(Y, n, key) {
    if (n >= Y.palm && n <= Y.octaveEnd) {                      // Tuần Thánh hoặc Bát Nhật Phục Sinh
      if (key === '3-19' && n < Y.easter) return Y.palm - 1;   // Thánh Giuse: Thứ Bảy trước Chúa Nhật Lễ Lá
      return Y.octaveEnd + 1;                                   // Thứ Hai sau Chúa Nhật II Phục Sinh
    }
    if (inAdventSunday(Y, n) || inLentSunday(Y, n) || inEasterSunday(Y, n)) return n + 1;
    if (key === '11-2' && dow(n) === 0) return n + 1;           // Cầu cho các tín hữu qua đời trùng Chúa Nhật
    if (n === Y.sacredHeart && key === '6-24') return n - 1;    // trùng Thánh Tâm
    if (n === Y.sacredHeart && key === '6-29') return n + 1;
    return n;
  }

  // ------------------------------------------------------------------ cử hành theo mùa (temporal)
  function pickSeason(Y, n) {
    if (n >= Y.ash && n < Y.holyThu) return 'lent';
    if (n >= Y.holyThu && n <= Y.easter) return 'triduum';
    if (n > Y.easter && n <= Y.pentecost) return 'easter';
    if (n >= Y.adventStart && n < Y.dec25) return 'advent';
    if (n >= Y.dec25 && n < Y.baptism + 0) return 'christmas';
    if (n === Y.baptism) return 'christmas';
    if (n < Y.baptism) return 'christmas';
    return 'ordinary';
  }

  function T(season, o) {
    return Object.assign({ kind: 'temporal', id: 'T', season, grade: 'WEEKDAY', lord: false, color: SEASON_COLOR[season], altColor: null, note: '', sunday: false }, o);
  }

  function temporal(n) {
    const c = civ(n), y = c.y, Y = yearData(y), w = dow(n), dn = DOW[w];
    const code2 = (a, b, k) => String(a) + pad2(b) + k;

    // ---- Mùa Giáng Sinh (đầu năm dương lịch, tới Chúa chịu phép rửa)
    if (n <= Y.baptism) {
      if (n === Y.baptism) return T('christmas', { code: '5010', name: 'Lễ Chúa Giêsu chịu phép rửa', rank: RANK.LORD_FEAST, grade: 'FEAST', lord: true, week: 'Lễ Chúa Giêsu chịu phép rửa', sunday: w === 0, ot1: true });
      if (n === Y.epiphany) return T('christmas', { code: '2030', name: 'Lễ Hiển Linh', rank: RANK.HIGH, grade: 'SOLEMNITY', lord: true, week: 'Lễ Hiển Linh', sunday: true });
      if (n > Y.epiphany) {
        const k = n - Y.epiphany;
        return T('christmas', { code: '600' + k, name: dn + ' sau Lễ Hiển Linh', rank: RANK.WEEKDAY, week: 'Sau Lễ Hiển Linh' });
      }
      if (c.m === 1 && c.d === 1) return T('christmas', { code: '20101', name: 'Ngày thứ tám trong Bát Nhật Giáng Sinh', rank: RANK.STRONG_WEEKDAY, week: 'Bát Nhật Giáng Sinh', sunday: w === 0 });
      return T('christmas', { code: code2(2, c.d, '01'), name: dn + ' ngày ' + c.d + ' tháng 1', rank: RANK.WEEKDAY, week: 'Mùa Giáng Sinh – ' + c.d + '/1' });
    }

    // ---- Mùa Thường Niên phần I
    if (n > Y.baptism && n < Y.ash) {
      const wk = Math.floor((sunOnOrBefore(n) - sunOnOrBefore(Y.baptism)) / 7) + 1;
      return ordinary(n, wk);
    }

    // ---- Mùa Chay
    if (n >= Y.ash && n < Y.holyThu) {
      if (n === Y.ash) {
        if (Y.ashTransferred) return T('lent', { code: '3004', name: 'Khởi đầu Mùa Chay (Lễ Tro dời sang Mùng 4 Tết)', rank: RANK.WEEKDAY, week: 'Khởi đầu Mùa Chay', ashStart: true });
        return T('lent', { code: '3004', name: 'Thứ Tư Lễ Tro', rank: RANK.HIGH, grade: 'HIGH', week: 'Lễ Tro', ashDay: true });
      }
      if (Y.ashTransferred && n === Y.ashCelebration) return T('lent', { code: '3004', name: 'Thứ Tư Lễ Tro (cử hành dời)', rank: RANK.HIGH, grade: 'HIGH', week: 'Lễ Tro', ashDay: true, note: Y.ashNote });
      const first = Y.ash + 4;
      if (n < first) return T('lent', { code: '300' + (4 + (n - Y.ash)), name: dn + ' sau Lễ Tro', rank: RANK.STRONG_WEEKDAY, week: 'Sau Lễ Tro' });
      if (n >= Y.palm) {
        if (n === Y.palm) return T('lent', { code: '3060', name: 'Chúa Nhật Lễ Lá – Cuộc Thương Khó của Chúa', rank: RANK.HIGH, grade: 'SUNDAY', color: 'red', lord: true, week: 'Tuần Thánh', sunday: true, holyWeek: true });
        return T('lent', { code: '306' + w, name: dn + ' Tuần Thánh', rank: RANK.HIGH, week: 'Tuần Thánh', holyWeek: true });
      }
      const wk = Math.floor((sunOnOrBefore(n) - first) / 7) + 1;
      if (w === 0) return T('lent', { code: '30' + wk + '0', name: 'Chúa Nhật ' + roman(wk) + ' Mùa Chay', rank: RANK.HIGH, grade: 'SUNDAY', lord: true, week: 'Tuần ' + roman(wk) + ' Mùa Chay', sunday: true, altColor: wk === 4 ? 'rose' : null, note: wk === 4 ? 'Chúa Nhật Laetare – có thể dùng áo lễ màu hồng.' : '' });
      return T('lent', { code: '30' + wk + w, name: dn + ' tuần ' + roman(wk) + ' Mùa Chay', rank: RANK.STRONG_WEEKDAY, week: 'Tuần ' + roman(wk) + ' Mùa Chay' });
    }

    // ---- Tam Nhật Vượt Qua + Chúa Nhật Phục Sinh
    if (n >= Y.holyThu && n <= Y.easter) {
      if (n === Y.holyThu) return T('triduum', { code: '3064', name: 'Thứ Năm Tuần Thánh – Tiệc Ly', rank: RANK.TRIDUUM, grade: 'TRIDUUM', lord: true, week: 'Tam Nhật Vượt Qua', note: 'Sáng: Thánh lễ Truyền Dầu (nếu có). Chiều: Thánh lễ Tiệc Ly.' });
      if (n === Y.goodFri) return T('triduum', { code: '3065', name: 'Thứ Sáu Tuần Thánh – Tưởng niệm Cuộc Thương Khó', rank: RANK.TRIDUUM, grade: 'TRIDUUM', lord: true, color: 'red', week: 'Tam Nhật Vượt Qua' });
      if (n === Y.holySat) return T('triduum', { code: '3066', name: 'Thứ Bảy Tuần Thánh – Canh thức Vượt Qua', rank: RANK.TRIDUUM, grade: 'TRIDUUM', lord: true, week: 'Tam Nhật Vượt Qua', note: 'Ban ngày không cử hành Thánh lễ; Canh thức Vượt Qua cử hành vào đêm.' });
      return T('triduum', { code: '4010', name: 'Chúa Nhật Phục Sinh – Chúa sống lại', rank: RANK.TRIDUUM, grade: 'HIGH', lord: true, week: 'Chúa Nhật Phục Sinh', sunday: true, season: 'easter' });
    }

    // ---- Mùa Phục Sinh
    if (n > Y.easter && n <= Y.pentecost) {
      const wk = Math.floor((sunOnOrBefore(n) - Y.easter) / 7) + 1;
      if (n === Y.pentecost) return T('easter', { code: '5001', name: 'Chúa Thánh Thần hiện xuống', rank: RANK.HIGH, grade: 'SOLEMNITY', lord: true, color: 'red', week: 'Lễ Hiện Xuống', sunday: true });
      if (n === Y.ascension) return T('easter', { code: '4080', name: 'Lễ Chúa Thăng Thiên', rank: RANK.HIGH, grade: 'SOLEMNITY', lord: true, week: 'Lễ Chúa Thăng Thiên', sunday: true, note: 'Tại Việt Nam, lễ Thăng Thiên cử hành vào Chúa Nhật VII Phục Sinh.' });
      if (n < Y.octaveEnd) return T('easter', { code: '401' + w, name: dn + ' trong Bát Nhật Phục Sinh', rank: RANK.HIGH, grade: 'HIGH', week: 'Bát Nhật Phục Sinh' });
      if (w === 0) return T('easter', { code: '40' + wk + '0', name: 'Chúa Nhật ' + roman(wk) + ' Mùa Phục Sinh' + (wk === 2 ? ' – Chúa Nhật Lòng Thương Xót' : ''), rank: RANK.HIGH, grade: 'SUNDAY', lord: true, week: 'Tuần ' + roman(wk) + ' Mùa Phục Sinh', sunday: true });
      const vigil = n === Y.pentecost - 1;
      return T('easter', { code: vigil ? '4089' : '40' + wk + w, name: dn + ' tuần ' + roman(wk) + ' Mùa Phục Sinh' + (vigil ? ' – Vọng Hiện Xuống' : ''), rank: RANK.WEEKDAY, week: 'Tuần ' + roman(wk) + ' Mùa Phục Sinh', vigilOf: vigil ? 'pentecost' : null });
    }

    // ---- Mùa Vọng
    if (n >= Y.adventStart && n < Y.dec25) {
      const wk = Math.floor((sunOnOrBefore(n) - Y.adventStart) / 7) + 1;
      if (w === 0) return T('advent', { code: '10' + wk + '0', name: 'Chúa Nhật ' + roman(wk) + ' Mùa Vọng', rank: RANK.HIGH, grade: 'SUNDAY', lord: true, week: 'Tuần ' + roman(wk) + ' Mùa Vọng', sunday: true, altColor: wk === 3 ? 'rose' : null, note: wk === 3 ? 'Chúa Nhật Gaudete – có thể dùng áo lễ màu hồng.' : '' });
      if (c.m === 12 && c.d >= 17) return T('advent', { code: code2(2, c.d, '12'), name: dn + ' ngày ' + c.d + ' tháng 12', rank: RANK.STRONG_WEEKDAY, week: 'Mùa Vọng ngày ' + c.d + '/12', eve: c.d === 24 });
      return T('advent', { code: '10' + wk + w, name: dn + ' tuần ' + roman(wk) + ' Mùa Vọng', rank: RANK.WEEKDAY, week: 'Tuần ' + roman(wk) + ' Mùa Vọng' });
    }

    // ---- Giáng Sinh – Bát Nhật (25–31/12)
    if (n >= Y.dec25) {
      if (n === Y.holyFamily) return T('christmas', { code: '2010', name: 'Lễ Thánh Gia – Chúa Giêsu, Đức Maria và Thánh Giuse', rank: RANK.LORD_FEAST, grade: 'FEAST', lord: true, week: 'Bát Nhật Giáng Sinh', sunday: w === 0 });
      if (n === Y.dec25) return T('christmas', { code: '22512', name: 'Lễ Giáng Sinh', rank: RANK.STRONG_WEEKDAY, week: 'Bát Nhật Giáng Sinh' });
      return T('christmas', { code: code2(2, c.d, '12'), name: dn + ' trong Bát Nhật Giáng Sinh', rank: RANK.STRONG_WEEKDAY, week: 'Bát Nhật Giáng Sinh', sunday: w === 0 });
    }

    // ---- Mùa Thường Niên phần II (sau Hiện Xuống)
    const wk2 = 34 - (Y.christKing - sunOnOrBefore(n)) / 7;
    if (n === Y.trinity) return T('ordinary', { code: '5002', name: 'Lễ Chúa Ba Ngôi', rank: RANK.SOLEMNITY, grade: 'SOLEMNITY', lord: true, color: 'white', week: 'Lễ Chúa Ba Ngôi', sunday: true });
    if (n === Y.corpus) return T('ordinary', { code: '5003', name: 'Lễ Mình và Máu Thánh Chúa Kitô', rank: RANK.SOLEMNITY, grade: 'SOLEMNITY', lord: true, color: 'white', week: 'Lễ Mình Máu Thánh Chúa', sunday: true });
    if (n === Y.sacredHeart) return T('ordinary', { code: '5004', name: 'Lễ Thánh Tâm Chúa Giêsu', rank: RANK.SOLEMNITY, grade: 'SOLEMNITY', lord: true, color: 'white', week: 'Lễ Thánh Tâm' });
    if (n === Y.christKing) return T('ordinary', { code: '5340', name: 'Lễ Chúa Kitô Vua Vũ Trụ', rank: RANK.SOLEMNITY, grade: 'SOLEMNITY', lord: true, color: 'white', week: 'Tuần XXXIV Thường Niên', sunday: true });
    return ordinary(n, wk2);
  }

  function ordinary(n, wk) {
    const w = dow(n), dn = DOW[w], code = '5' + pad2(wk) + w;
    const week = 'Tuần ' + roman(wk) + ' Thường Niên';
    if (w === 0) return T('ordinary', { code, name: 'Chúa Nhật ' + roman(wk) + ' Thường Niên', rank: RANK.SUNDAY, grade: 'SUNDAY', lord: true, week, sunday: true, wk });
    return T('ordinary', { code, name: dn + ' tuần ' + roman(wk) + ' Thường Niên', rank: RANK.WEEKDAY, week, wk });
  }

  // ------------------------------------------------------------------ cử hành di động / đặc biệt khác ngoài bảng thánh
  function movableCandidates(Y, n) {
    const out = [];
    if (n === Y.maryMother) out.push({ id: 'M-maryMother', kind: 'movable', name: 'Đức Maria, Mẹ Hội Thánh', grade: 'MEMORIAL', rank: RANK.MEMORIAL, color: 'white', lord: false, mary: true, code: '8411', note: 'Lễ nhớ buộc từ năm 2018 (Thứ Hai sau Hiện Xuống).' });
    if (n === Y.immHeart) out.push({ id: 'M-immHeart', kind: 'movable', name: 'Trái Tim Vô Nhiễm Đức Mẹ', grade: 'MEMORIAL', rank: RANK.MEMORIAL, color: 'white', lord: false, mary: true, code: '8441', note: '' });
    return out;
  }

  // ------------------------------------------------------------------ kỷ luật phụng vụ
  const HOLY_DAYS = { '1-1': 1, '12-25': 1, '8-15': 1, '11-1': 1 };
  function discipline(Y, n, tem, winner) {
    const c = civ(n), out = [];
    const ashDay = Y.ashCelebration === n;
    if (ashDay || n === Y.goodFri) out.push({ type: 'fast', label: 'Ăn chay' }, { type: 'abstinence', label: 'Kiêng thịt' });
    else if (dow(n) === 5 && n > Y.ash && n < Y.easter) out.push({ type: 'abstinence', label: 'Kiêng thịt' });
    if (dow(n) === 0 || HOLY_DAYS[c.m + '-' + c.d] || n === Y.ascension || n === Y.easter) {
      if (!(winner && winner.movedAwayOf)) out.push({ type: 'obligation', label: 'Lễ buộc' });
    }
    if (n >= Y.holyThu && n <= Y.easter) out.push({ type: 'triduum', label: 'Tam Nhật Vượt Qua' });
    return out;
  }

  // ------------------------------------------------------------------ Tết Nguyên Đán
  const TET = {
    1: { name: 'Mùng Một Tết – Tân Niên', short: 'Mùng 1 Tết', color: 'white', code: '70001', note: 'Theo HĐGMVN: Thánh lễ Tân Niên, cầu bình an năm mới.' },
    2: { name: 'Mùng Hai Tết – Kính nhớ Tổ Tiên', short: 'Mùng 2 Tết', color: 'white', code: '70002', note: 'Theo HĐGMVN: Thánh lễ kính nhớ Tổ Tiên và Ông Bà Cha Mẹ.' },
    3: { name: 'Mùng Ba Tết – Thánh hóa công ăn việc làm', short: 'Mùng 3 Tết', color: 'white', code: '70003', note: 'Theo HĐGMVN: Thánh lễ thánh hóa công ăn việc làm.' }
  };

  function tetInfo(n) {
    const c = civ(n), l = Lunar.get(c.y, c.m, c.d);
    const nx = civ(n + 1), ln = Lunar.get(nx.y, nx.m, nx.d);
    const info = { lunar: l, day: 0, eve: false, midAutumn: false };
    if (l.month === 1 && !l.leap && l.day >= 1 && l.day <= 3) info.day = l.day;
    if (l.month === 12 && !l.leap && ln.month === 1 && ln.day === 1 && !ln.leap) info.eve = true;
    if (l.month === 8 && !l.leap && l.day === 15) info.midAutumn = true;
    return info;
  }

  // ------------------------------------------------------------------ ghép lại thành thông tin một ngày
  const dayCache = new Map();

  function categoryOrder(c) { return c.lord ? 0 : c.mary ? 1 : 2; }
  const MARY_RE = /Đức Mẹ|Đức Maria|Maria|Mân Côi|Vô Nhiễm|Mẹ /;

  function compose(n) {
    const c = civ(n), y = c.y, Y = yearData(y), w = dow(n), key = c.m + '-' + c.d;
    const tem = temporal(n);
    const lunar = Lunar.get(c.y, c.m, c.d);
    const tet = tetInfo(n);
    const notes = [];
    const cands = [];
    const moved = [];     // lễ trọng dời đi khỏi hôm nay
    const prefer = [];    // nhãn "dời đến hôm nay"

    // 1. cử hành mùa
    const temC = Object.assign({}, tem);
    cands.push(temC);

    // 2. lễ thánh cố định
    const entry = sanctoral.get(key);
    if (entry) {
      entry.items.forEach(it => {
        if (it.grade === 'SOLEMNITY') {
          const mv = Y.moveAway.get(n);
          if (mv && mv.item === it) { moved.push({ name: it.name, to: mv.to }); return; }
        }
        const copy = Object.assign({}, it);
        if (MARY_RE.test(copy.name)) copy.mary = true;
        cands.push(copy);
      });
    }
    const mt = Y.moveTo.get(n);
    if (mt) {
      const it = Object.assign({}, mt.item, { rank: RANK.SOLEMNITY, movedFrom: mt.from, id: mt.item.id + '@moved', note: 'Dời từ ' + fmtDM(mt.from) + '.' });
      const own = { '3-19': OWN_CODES.joseph, '3-25': OWN_CODES.annunciation, '12-8': OWN_CODES.immaculate }[mt.item.key];
      if (own) it.code = own;
      if (MARY_RE.test(it.name)) it.mary = true;
      cands.push(it);
    }
    // 3. lễ di động / bổ sung
    movableCandidates(Y, n).forEach(m => cands.push(m));

    // 4. Tết (ưu tiên cao: thắng mọi cử hành mùa trừ Tam Nhật)
    let tetCand = null;
    if (tet.day) {
      const t = TET[tet.day];
      tetCand = { id: 'TET' + tet.day, kind: 'tet', name: t.name, grade: 'SOLEMNITY', rank: RANK.TET, color: t.color, lord: false, code: t.code, note: t.note, tetDay: tet.day };
      if (n >= Y.holyThu && n <= Y.easter) tetCand = null;
      else cands.push(tetCand);
    }

    // --- Lễ nhớ/Lễ kính trong tuần thánh, bát nhật phục sinh: bậc cao hơn đã tự loại.
    // Chọn cử hành chính
    const order = cands.slice().sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      const ca = categoryOrder(a), cb = categoryOrder(b);
      if (ca !== cb) return ca - cb;
      return (a.kind === 'temporal' ? 0 : 1) - (b.kind === 'temporal' ? 0 : 1);
    });

    // Lễ nhớ tùy ý không thay thế ngày thường (chỉ là lựa chọn); lễ nhớ buộc thì thay.
    let winner = order[0];
    if (winner.grade === 'OPTIONAL') winner = temC;

    const others = [];
    const optionals = [];
    const weekdayWin = winner === temC && winner.rank >= RANK.WEEKDAY;          // ngày thường: được chọn lễ nhớ tùy ý
    const lentLikeWin = winner === temC && winner.rank === RANK.STRONG_WEEKDAY;  // Chay/Vọng 17-24/12/Bát Nhật: chỉ kỷ niệm
    cands.forEach(cd => {
      if (cd === winner) return;
      if (cd.grade === 'OPTIONAL') { if (weekdayWin) optionals.push(cd); return; }
      let role = 'displaced';
      if (cd.kind === 'temporal') role = 'season';
      else if (cd.grade === 'MEMORIAL') {
        if (lentLikeWin) role = 'commemoration';
        else if (winner.grade === 'MEMORIAL' && winner.kind !== 'temporal') role = 'peer';
        else return;                                   // bị bậc cao hơn loại hẳn
      }
      others.push({ name: cd.name, grade: cd.grade, role, color: cd.color, rank: cd.rank, kind: cd.kind, code: cd.code || null, note: cd.note || '' });
    });
    moved.forEach(m => others.push({ name: m.name, grade: 'SOLEMNITY', role: 'moved', moveTo: m.to, note: 'Dời sang ' + fmtDM(m.to) + '.' }));

    // Thứ tự cho Thánh lễ hai lễ nhớ cùng bậc: nhớ cái đầu, cái sau để tùy ý
    // (không đổi winner, chỉ ghi chú)
    if (winner.kind !== 'temporal' && winner.grade === 'MEMORIAL') {
      const peers = others.filter(o => o.role === 'peer');
      if (peers.length) notes.push('Có hai lễ nhớ trùng ngày: có thể chọn một trong hai.');
    }

    // Màu áo lễ
    let color = winner.color || tem.color, altColor = winner.altColor || null;
    if (winner.kind === 'temporal') { color = tem.color; altColor = tem.altColor; }
    // Lễ nhớ/kính thánh trong Mùa Chay/Vọng giữ màu của lễ (trắng/đỏ), ngày thường giữ màu mùa.

    // Cờ phụ
    const flags = [];
    if (n === Y.mission) flags.push('Khánh nhật Truyền giáo');
    if (tet.midAutumn) flags.push('Tết Trung Thu');
    if (tet.eve) { flags.push('Đêm Giao Thừa'); notes.push('Đêm Giao Thừa (30 Tết): Thánh lễ tạ ơn cuối năm theo HĐGMVN.'); }
    if (Y.ashTransferred && n === Y.ash) notes.push(Y.ashNote);
    if (Y.ashTransferred && n === Y.ashCelebration) notes.push(Y.ashNote);
    if (winner.note && !notes.includes(winner.note)) notes.push(winner.note);
    if (tem.note && winner !== temC && !notes.includes(tem.note)) notes.push(tem.note);
    if (tet.midAutumn) notes.push('Tết Trung Thu (15/8 âm lịch): có thể cử hành Thánh lễ cầu cho thiếu nhi.');

    // Chu kỳ
    const cycleYear = (n >= Y.adventStart) ? y + 1 : y;
    const cycle = ['C', 'A', 'B'][cycleYear % 3];
    const weekdayCycle = (y % 2) ? '1' : '2';          // theo năm dương lịch (đúng theo Sách Bài Đọc)

    // Mã bài đọc
    const sanctoralCode = (winner.kind === 'sanctoral' || winner.kind === 'movable' || winner.movedFrom) && winner.code
      ? winner.code
      : (entry ? '7' + pad2(c.d) + pad2(c.m) : null);
    const optCode = '8' + pad2(c.d) + pad2(c.m);

    // Lễ vọng
    // Lễ vọng có bài đọc riêng cử hành chiều hôm nay: chỉ có Vọng Giáng Sinh (24/12).
    // (Canh thức Vượt Qua = bài đọc Thứ Bảy Tuần Thánh 3066; Vọng Hiện Xuống = mã 4089 của Thứ Bảy tuần VII — đã nằm trong cử hành mùa.)
    let vigil = null;
    if (n === Y.dec25 - 1) vigil = { name: 'Lễ Vọng Giáng Sinh (chiều 24/12)', code: '224122' };

    const info = {
      n, iso: iso(n), y, m: c.m, d: c.d, dow: w, dowName: DOW[w], date: toDate(n),
      lunar: { day: lunar.day, month: lunar.month, year: lunar.year, leap: !!lunar.leap, label: lunar.day + '/' + lunar.month + (lunar.leap ? 'N' : ''), first: lunar.day === 1 },
      season: tem.season, seasonName: SEASON_NAME[tem.season],
      week: tem.week, code: tem.code, sanctoralCode, optionCode: optCode, weekdayCycle, cycle,
      sunday: w === 0,
      primary: {
        name: winner.name, grade: winner.grade, gradeLabel: GRADE_LABEL[winner.grade] || '', rank: winner.rank, kind: winner.kind,
        color, altColor, colorName: COLOR_NAME[color], lord: !!winner.lord, tet: winner.kind === 'tet', tetDay: winner.tetDay || 0,
        id: winner.id, code: winner.code || tem.code, short: shortName(winner.name)
      },
      temporal: { name: tem.name, code: tem.code, week: tem.week, rank: tem.rank, grade: tem.grade },
      optionals: optionals.map(o => ({ name: o.name, color: o.color, code: o.code, short: shortName(o.name) })),
      others, notes: notes.filter(Boolean),
      flags, vigil, tet,
      discipline: null,
      holyDay: !!(w === 0 || HOLY_DAYS[key] || n === Y.ascension || n === Y.easter),
      moved: moved.length ? moved : null,
      ashTransferred: Y.ashTransferred && (n === Y.ash || n === Y.ashCelebration)
    };
    info.discipline = discipline(Y, n, tem, winner);
    // Được phép kính trọng thể vào Chúa Nhật (để giáo dân tham dự): Chúa Nhật vẫn là cử hành chính.
    if (w === 0 && winner === temC) {
      if (n === Y.vnMartyrs) info.solemnOption = { name: 'Các Thánh Tử Đạo Việt Nam (kính trọng thể)', code: OWN_CODES.martyrs, color: 'red', colorName: COLOR_NAME.red, note: 'Kính trọng thể Các Thánh Tử Đạo Việt Nam (lễ Quan Thầy Giáo hội Việt Nam, 24/11) vào Chúa Nhật trước ngày 24/11 [HĐGM Việt Nam, khóa họp tháng 4-1991; Thông báo 01/01/1992]. Phụng vụ Lời Chúa: chọn trong số lễ chung kính các thánh tử đạo.' };
      else if (n === Y.rosary) info.solemnOption = { name: 'Đức Mẹ Mân Côi (kính trọng thể)', code: '70710', optionCode: '80710', color: 'white', colorName: COLOR_NAME.white, note: 'Theo Thông báo HĐGMVN 01/01/1992, Chúa Nhật đầu tháng Mân Côi (tháng 10) được kính trọng thể Lễ Đức Mẹ Mân Côi (lễ nhớ 7/10): được cử hành trọng thể để giáo dân tham dự.' };
      if (info.solemnOption) info.notes.push(info.solemnOption.note);
    }
    return info;
  }

  function shortName(name) {
    return name.replace(/^Chúa Nhật\s+/, 'CN ').replace(/^Thánh nữ\s+/, 'T.nữ ').replace(/^Thánh\s+/, 'T. ').replace(/^Các Thánh\s+/, 'Các T. ').replace(/^Đức Mẹ\s+/, 'ĐM. ').replace(/^Đức Maria\s+/, 'ĐM ').replace(/\s*[–-]\s*.*$/, '');
  }

  function day(input) {
    const n = typeof input === 'number' ? input : fromDate(input);
    let v = dayCache.get(n);
    if (!v) { v = compose(n); dayCache.set(n, v); if (dayCache.size > 4000) dayCache.delete(dayCache.keys().next().value); }
    return v;
  }

  /** Lưới một tháng: mảng các tuần, mỗi tuần 7 ô (null nếu ngoài tháng). Tuần bắt đầu Chúa Nhật. */
  function monthGrid(y, m) {
    const first = mk(y, m, 1), len = civ(mk(m === 12 ? y + 1 : y, m === 12 ? 1 : m + 1, 1) - 1).d;
    const cells = [];
    for (let i = 0; i < dow(first); i++) cells.push(null);
    for (let d = 1; d <= len; d++) cells.push(day(mk(y, m, d)));
    while (cells.length % 7) cells.push(null);
    const weeks = []; for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }

  /** Số thứ tự Chúa Nhật trong năm dương lịch (cho lịch Chầu Thánh Thể). */
  function sundayIndex(n) {
    const c = civ(n), jan1 = mk(c.y, 1, 1), firstSun = jan1 + ((7 - dow(jan1)) % 7);
    if (n < firstSun) { // thuộc tuần cuối năm trước
      const pj = mk(c.y - 1, 1, 1), pf = pj + ((7 - dow(pj)) % 7);
      return Math.floor((mk(c.y, 1, 1) - 1 - pf) / 7) + 1;
    }
    return Math.floor((n - firstSun) / 7) + 1;
  }

  function weekKey(n) { return n; }

  return {
    setSanctoral, day, monthGrid, yearData, sundayIndex,
    util: { mk, civ, dow, fromDate, toDate, iso, fmtDM, roman, pad2, DOW, DOW_SHORT, easterOf, sunOnOrBefore },
    consts: { RANK, GRADE_LABEL, SEASON_NAME, COLOR_NAME, TET }
  };
});
