/*
 * readings.js — Tra bài đọc cho một ngày phụng vụ.
 * Nhận `info` từ Phungvu.day() và các bảng dữ liệu (Reading/*.js), trả về danh sách "tab" bài đọc.
 * Chạy được trong trình duyệt (window.Readings) và Node (truyền bảng dữ liệu vào).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Readings = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Các mã mùa đặc biệt → mã tương ứng trong Sunday.js (theo cycle A/B/C)
  const SUNDAY_ALIAS = { '2030': '6000', '4080': '4080', '5001': '5410', '5002': '5420', '5003': '5430', '5004': '5440' };
  const SUNDAY_DIRECT = new Set(['2010', '5010', '5340', '4010', '3060']);

  const isSet = d => !!(d && (d.firstReading || d.gospel || d.psalms || d.secondReading));
  const hasFull = d => {
    if (!d) return false;
    if (d.options) return d.options.some(o => hasFull(o.data));
    return !!((d.firstReading && d.firstReading.content) || (d.gospel && d.gospel.content) || (d.psalms && d.psalms.verses && d.psalms.verses.length));
  };

  function pickCycle(obj, cycle) {
    if (!obj) return null;
    if (isSet(obj)) return obj;
    return obj[cycle] || obj.A || null;
  }

  /** Chuyển một dòng READINGS_DATA (chỉ có trích dẫn) thành bộ bài đọc chuẩn. */
  function fromSummary(r) {
    if (!r) return null;
    const ex = x => (x ? { excerpt: x } : null);
    return { firstReading: ex(r.reading1), psalms: ex(r.psalm), secondReading: ex(r.reading2), gospel: ex(r.gospel), summaryOnly: true };
  }

  function make(T) {
    const g = n => T[n] || {};
    const summaryRows = (code, years) => (T.READINGS_DATA || []).filter(r => String(r.code) === String(code) && (!years || years.includes(r.year)));
    const summaryOne = (code, years) => summaryRows(code, years)[0] || null;

    function sundaySet(code, cycle) {
      const S = g('READINGS_SUNDAY');
      const alias = SUNDAY_ALIAS[code] || code;
      return pickCycle(S[alias], cycle) || pickCycle(S[code], cycle);
    }

    /** Bài đọc theo mùa của ngày (cử hành của mùa). Trả về { sets:[{label,data}] }. */
    function temporalSets(info) {
      const code = info.code, cycle = info.cycle, wc = info.weekdayCycle;
      const D = T.READINGS_DATA;
      // Giáng Sinh 25/12: ba lễ
      if (code === '22512') {
        const SP = g('READINGS_SPECIAL');
        const defs = [['D', 'Lễ Đêm', '22512D'], ['B', 'Lễ Rạng Đông', '22512'], ['R', 'Lễ Ban Ngày', '22512R']];
        const sets = defs.map(([yr, label, key]) => ({ label, data: SP[key] || fromSummary(summaryOne(22512, [yr])) })).filter(s => s.data);
        return { sets };
      }
      let data = null;
      if (info.sunday || SUNDAY_ALIAS[code] || SUNDAY_DIRECT.has(code)) data = sundaySet(code, cycle);
      if (!data && code === '8441') data = g('OptionsaintReadings')['8441'] || g('READINGS_SPECIAL')['8441'];
      if (!data && code[0] === '5' && code.length === 4 && Number(code.slice(1, 3)) <= 34 && code[3] !== '0') {
        data = (wc === '1' ? g('READINGS_ORDINARY_Y1') : g('READINGS_ORDINARY_Y2'))[code];
      }
      if (!data) data = g('READINGS_SEASONAL')[code];
      if (!data) data = g('READINGS_SPECIAL')[code];
      if (!data && D) {
        const yrs = info.sunday ? [cycle, '0'] : [wc, '0'];
        data = fromSummary(summaryOne(code, yrs));
      }
      return { sets: data ? [{ label: null, data }] : [] };
    }

    function sanctoralSet(code, sunday, cycle) {
      if (!code) return null;
      const SP = g('READINGS_SPECIAL');
      let data = SP[code];
      if (data && hasFull(data)) return data;
      const row = summaryOne(code, sunday ? [cycle, '0'] : ['0']) || summaryOne(code, null);
      return data || fromSummary(row);
    }

    function optionSet(code) {
      const O = g('OptionsaintReadings');
      return O[code] || null;
    }

    /** Xây danh sách tab bài đọc. */
    function build(info) {
      const tabs = [];
      const push = (id, kind, label, sets, extra) => {
        sets = (sets || []).filter(s => s.data);
        if (!sets.length) return;
        // bỏ trùng bộ bài đọc giống hệt đã có
        const dup = tabs.some(t => t.sets.length === sets.length && t.sets.every((s, i) => s.data === sets[i].data));
        if (dup) return;
        tabs.push(Object.assign({ id, kind, label, sets, full: sets.some(s => hasFull(s.data)) }, extra || {}));
      };

      const prim = info.primary;
      const tem = temporalSets(info);
      // Khóa tra gợi ý suy niệm (Reading/meditations.js)
      const tc = info.code, sundayLike = info.sunday || SUNDAY_ALIAS[tc] || SUNDAY_DIRECT.has(tc);
      const otWeekday = /^5\d{2}[1-6]$/.test(tc) && Number(tc.slice(1, 3)) <= 34;
      const temKey = 'T' + tc + (sundayLike ? '-' + info.cycle : otWeekday ? '-' + info.weekdayCycle : '');
      const mk = (pre, code) => (code ? { medKey: pre + code } : {});
      const one = data => (data ? [{ label: null, data }] : null);   // một bộ bài đọc, không nhãn
      const temLabel = 'Bài đọc theo mùa';
      const SP = g('READINGS_SPECIAL');

      // 1. Tết
      const tetCode = info.tet && info.tet.day ? ({ 1: '70001', 2: '70002', 3: '70003' })[info.tet.day] : (info.tet && info.tet.midAutumn ? '70815' : null);
      const tetTab = tetCode ? one(SP[tetCode] || fromSummary(summaryOne(tetCode, ['0']))) : null;

      // 2. Lễ thánh (7DDMM) — bậc cao thì đặt trước; lễ dời dùng mã riêng
      const sancWins = (prim.kind === 'sanctoral' || prim.kind === 'movable') && !!prim.code && prim.code !== info.code;
      const sancCode = sancWins ? prim.code : (prim.kind === 'movable' ? null : info.sanctoralCode);
      const sanc = one(sanctoralSet(sancCode, info.sunday, info.cycle));

      const ownOpt = optionSet(info.optionCode);
      const optData = ownOpt || (prim.code === '8441' ? optionSet('8441') : null);
      const optKey = ownOpt ? info.optionCode : '8441';
      const opt = one(optData);

      const vigilSets = info.vigil ? [{ label: info.vigil.name, data: SP[info.vigil.code] || fromSummary(summaryOne(info.vigil.code, ['V', '0'])) }] : null;

      if (prim.kind === 'tet' && tetTab) push('tet', 'tet', 'Thánh lễ Tết', tetTab, mk('S', tetCode));
      const gl = prim.grade === 'SOLEMNITY' ? 'trọng' : prim.grade === 'FEAST' ? 'kính' : 'nhớ';
      const optLeads = sancWins && !sanc && !!opt;
      if (sancWins) push('sanctoral', 'sanctoral', 'Bài đọc lễ ' + gl, sanc || (optLeads ? opt : null), sanc ? mk('S', sancCode) : mk('O', optKey));
      push('temporal', 'temporal', temLabel, tem.sets, { medKey: temKey });
      // Lễ trọng của ngày đã dời đi (ví dụ Truyền Tin trùng Tuần Thánh) và không còn lễ thánh nào khác: không hiện bài đọc của nó ở ngày gốc
      const onlyMovedAway = !!info.moved && !info.optionals.length && !info.others.some(o => o.kind === 'sanctoral' && o.role !== 'moved');
      if (!sancWins && sanc && !onlyMovedAway && (info.others.length || info.optionals.length || sancCode)) {
        const hasFullSanc = sanc[0] && hasFull(sanc[0].data);
        if (hasFullSanc || info.optionals.length || info.sanctoralCode) push('sanctoral', 'sanctoral', 'Bài đọc lễ thánh trong ngày', sanc, mk('S', sancCode));
      }
      if (info.solemnOption) {
        const so = info.solemnOption, d = sanctoralSet(so.code, false, info.cycle) || optionSet(so.optionCode);
        if (d) push('solemn', 'option', 'Kính trọng thể', [{ label: so.name, data: d }], mk('S', so.code));
      }
      if (opt && !optLeads) push('option', 'option', 'Bài đọc tùy chọn', opt, mk('O', optKey));
      if (prim.kind !== 'tet' && tetTab && tetCode) push('tet', 'tet', tetCode === '70815' ? 'Tết Trung Thu' : 'Thánh lễ Tết', tetTab, mk('S', tetCode));
      if (vigilSets) push('vigil', 'vigil', info.vigil.name, vigilSets, mk('S', info.vigil.code));

      return { tabs, summary: summaryFor(info) };
    }

    function summaryFor(info) {
      const first = info.sunday ? [info.cycle, '0'] : [info.weekdayCycle, '0'];
      const r = summaryOne(info.code, first) || summaryOne(info.sanctoralCode, ['0', info.cycle]);
      return r ? { first: r.reading1, psalm: r.psalm, second: r.reading2, gospel: r.gospel } : null;
    }

    function meditationLink(info) {
      const L = T.MEDITATION_LINKS || (T.window && T.window.MEDITATION_LINKS) || {};
      const C = T.MEDITATION_BY_CODE || {};
      const v = L[info.iso];
      if (v) return typeof v === 'string' ? { url: v, label: 'Suy niệm' } : v;
      const c = C[info.code]; if (c) return c;
      const sp = g('READINGS_SPECIAL')[info.code]; if (sp && sp.meditationUrl) return { url: sp.meditationUrl, label: 'Suy niệm' };
      return null;
    }

    /** Gợi ý suy niệm cho một tab (và bộ bài đọc thứ setIdx nếu tab có nhiều bộ). */
    function meditationFor(tab, setIdx) {
      const M = T.MEDITATIONS || {};
      if (!tab || !tab.medKey) return null;
      return M[tab.medKey + '#' + (setIdx || 0)] || M[tab.medKey] || null;
    }

    return { build, temporalSets, meditationLink, meditationFor, summaryFor };
  }

  // Các tệp dữ liệu lớn cần nạp cho một ngày (đường dẫn tương đối thư mục Reading/)
  function filesNeeded(info) {
    const code = info.code, files = new Set();
    const ot = /^5\d{2}[1-6]$/.test(code) && Number(code.slice(1, 3)) <= 34;
    if (info.sunday || SUNDAY_ALIAS[code] || SUNDAY_DIRECT.has(code)) files.add('Sunday.js');
    if (ot && !info.sunday) files.add(info.weekdayCycle === '1' ? 'readings_year_1.js' : 'readings_year_2.js');
    if (!ot && !info.sunday && !SUNDAY_ALIAS[code]) files.add('DailySeason.js');
    if (code === '22512' || code === '20101' || code === '8441') { files.add('SaintsBible.js'); files.add('Optionsaint.js'); }
    if (info.primary.kind !== 'temporal' || info.sanctoralCode || info.optionals.length || info.tet.day || info.tet.midAutumn || info.vigil) {
      files.add('SaintsBible.js'); files.add('Optionsaint.js');
    }
    if (info.vigil) files.add('DailySeason.js');
    return Array.from(files);
  }

  return { make, filesNeeded, hasFull, isSet, fromSummary };
});
