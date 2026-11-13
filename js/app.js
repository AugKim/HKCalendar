/*
 * app.js — Giao diện Lịch Phụng Vụ (xem tháng / năm / danh sách, chi tiết ngày, bài đọc, xuất lịch).
 */
(function () {
  'use strict';
  const P = window.Phungvu, L = window.Lunar, u = P.util;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k) { try { return localStorage.getItem('kcal.' + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem('kcal.' + k, v); } catch (e) { /* bỏ qua */ } }
  };

  // Các bảng dữ liệu khai báo bằng const/let không nằm trên window → đọc qua typeof
  const G = n => { try { return (0, eval)('typeof ' + n + " !== 'undefined' ? " + n + ' : undefined'); } catch (e) { return undefined; } };
  P.setSanctoral(G('SAINTS_DATA'));
  let todayN = u.fromDate(new Date());
  const state = { view: 'month', y: 0, m: 0, sel: todayN, fs: 1, tab: null, setIdx: 0, tr: 'vn' };

  // Các bản dịch có thể chọn khi xem bài đọc. 'vn' = bản văn có sẵn trong dữ liệu Sách Bài Đọc.
  // Muốn thêm bản dịch: đặt file cùng định dạng với Reading/translation_2.json và thêm một dòng ở đây.
  const TRANSLATIONS = [
    { id: 'vn', label: 'Sách Bài Đọc' },
    { id: 't2', label: 'English', file: 'Reading/translation_2.json', lang: 'en' }
  ];
  const trData = new Map(), trLoading = new Map();
  function loadTranslation(id) {
    const t = TRANSLATIONS.find(x => x.id === id);
    if (!t || !t.file) return Promise.resolve(null);
    if (trData.has(id)) return Promise.resolve(trData.get(id));
    if (!trLoading.has(id)) {
      const p = fetch(t.file).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(j => { trData.set(id, j); return j; })
        .finally(() => trLoading.delete(id));
      trLoading.set(id, p);
    }
    return trLoading.get(id);
  }
  const YEAR_MIN = 1583, YEAR_MAX = 9000;   // lịch Gregory
  const MONTHS = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
  const daysIn = (y, m) => u.civ(u.mk(m === 12 ? y + 1 : y, m === 12 ? 1 : m + 1, 1) - 1).d;
  const isHigh = p => p.rank <= 5 || p.rank === 7 || p.tet;          // in đậm trên lịch: lễ trọng, lễ kính, Tết…
  const SKELETON = '<div class="rd-loading"><div class="skeleton" style="width:40%"></div><div class="skeleton"></div><div class="skeleton" style="width:85%"></div></div>';

  // ------------------------------------------------------------------ nạp dữ liệu bài đọc (trì hoãn)
  const loaded = new Map();
  function loadFile(name) {
    if (loaded.has(name)) return loaded.get(name);
    const p = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'Reading/' + name; s.async = true;
      s.onload = () => res(); s.onerror = () => rej(new Error('Không tải được ' + name));
      document.head.appendChild(s);
    });
    p.catch(() => loaded.delete(name));
    loaded.set(name, p);
    return p;
  }
  const ensure = names => Promise.all(names.map(loadFile));
  const TABLES = ['READINGS_DATA', 'READINGS_SUNDAY', 'READINGS_SEASONAL', 'READINGS_ORDINARY_Y1', 'READINGS_ORDINARY_Y2',
    'READINGS_SPECIAL', 'OptionsaintReadings', 'MEDITATION_LINKS', 'MEDITATION_BY_CODE', 'MEDITATIONS'];
  const tables = () => TABLES.reduce((o, n) => { o[n] = G(n); return o; }, {});
  // Các file dữ liệu cần cho một ngày (bài đọc + phần phụ)
  const filesFor = (i, extra) => window.Readings.filesNeeded(i).concat(['readingdata.js', 'meditations.js'], extra || []);
  const readingsApi = () => window.Readings.make(tables());

  // ------------------------------------------------------------------ định dạng
  const fmtLong = i => i.dowName + ', ' + i.d + ' tháng ' + i.m + ', ' + i.y;
  const cellName = n => String(n).split(/,\s/)[0];
  function weekShort(w) {
    return String(w || '').replace('Thường Niên', 'TN').replace('Mùa Phục Sinh', 'Phục Sinh').replace('Mùa Chay', 'Chay').replace('Mùa Vọng', 'Vọng').replace('Mùa Giáng Sinh', 'Giáng Sinh');
  }
  function colorLabel(p) { return 'Màu ' + p.colorName.toLowerCase() + (p.altColor ? ' hoặc ' + ({ rose: 'hồng', purple: 'tím' }[p.altColor] || p.altColor) : ''); }
  const cycleLabel = i => 'Năm ' + i.cycle + ' · ' + (i.weekdayCycle === '1' ? 'năm lẻ' : 'năm chẵn');
  function chipsHTML(i, withFlags) {
    const p = i.primary, chips = ['<span class="chip c-' + p.color + '"><i class="dot c-' + p.color + '"></i>' + esc(colorLabel(p)) + '</span>'];
    if (p.gradeLabel && p.grade !== 'WEEKDAY') chips.push('<span class="chip c-' + p.color + '">' + esc(p.gradeLabel) + '</span>');
    chips.push('<span class="chip neutral">' + esc(cycleLabel(i)) + '</span>');
    i.discipline.forEach(d => chips.push('<span class="chip ' + (d.type === 'fast' || d.type === 'abstinence' ? 'c-purple' : 'c-red') + '">' + esc(d.label) + '</span>'));
    if (withFlags) i.flags.forEach(f => chips.push('<span class="chip neutral">' + esc(f) + '</span>'));
    return chips.join('');
  }
  // Dòng "Chầu Thánh Thể tại: …" (dữ liệu eucharisticAdoration.js theo số Chúa Nhật trong năm)
  function adorationHTML(n) {
    const ad = (G('eucharisticAdoration') || {})[u.pad2(P.sundayIndex(n))], c = ad && ad.content ? String(ad.content) : '';
    return c ? '<div><b>' + esc(c.split(':')[0]) + ':</b> ' + esc(c.split(':').slice(1).join(':').trim()) + '</div>' : '';
  }
  function ariaDay(i) {
    return i.dowName + ' ' + i.d + ' tháng ' + i.m + ', ' + i.primary.name + ', ' + i.primary.colorName.toLowerCase() + (i.holyDay && !i.sunday ? ', lễ buộc' : '');
  }

  // ------------------------------------------------------------------ lịch tháng
  function cellHTML(i) {
    if (!i) return '<div class="day out" aria-hidden="true"></div>';
    const p = i.primary;
    const hi = isHigh(p);
    const ferial = p.kind === 'temporal' && p.rank >= 9 && !i.sunday && p.grade === 'WEEKDAY';
    let name = '';
    if (!ferial) name = '<span class="nm' + (p.rank <= 3 || p.tet ? ' sol' : '') + '">' + esc(i.sunday && p.kind === 'temporal' ? p.short : cellName(p.name)) + '</span>';
    let sub = '';
    if (i.optionals.length) sub = '<span class="sub">' + esc(i.optionals.map(o => o.short).join(', ')) + '</span>';
    else if (i.solemnOption) sub = '<span class="sub sol">Kính trọng thể: ' + esc(i.solemnOption.name.replace(/ \(kính trọng thể\)/, '')) + '</span>';
    else if (i.flags.length) sub = '<span class="sub">' + esc(i.flags[0]) + '</span>';
    const marks = [];
    if (i.holyDay && !i.sunday) marks.push('<span class="mk ob">Lễ buộc</span>');
    if (i.discipline.some(d => d.type === 'fast')) marks.push('<span class="mk fast">Chay</span>');
    else if (i.discipline.some(d => d.type === 'abstinence')) marks.push('<span class="mk fast">Kiêng</span>');
    if (p.tet) marks.push('<span class="mk tet">Tết</span>');
    if (i.solemnOption) marks.push('<span class="mk sol c-' + i.solemnOption.color + '">Trọng thể</span>');
    i.optionals.slice(0, 3).forEach(o => marks.push('<i class="sw c-' + o.color + '"></i>'));
    const cls = ['day', 'c-' + p.color];
    if (hi) cls.push('rank-hi'); if (i.sunday) cls.push('sunday'); if (i.n === todayN) cls.push('today');
    const lun = i.lunar.first ? i.lunar.day + '/' + i.lunar.month + (i.lunar.leap ? 'N' : '') : i.lunar.day;
    return '<button type="button" class="' + cls.join(' ') + '" data-n="' + i.n + '" aria-pressed="' + (i.n === state.sel) + '" tabindex="' + (i.n === state.sel ? 0 : -1) + '" aria-label="' + esc(ariaDay(i)) + '">' +
      '<span class="top"><span class="num">' + i.d + '</span><span class="lunar' + (i.lunar.first ? ' first' : '') + '" title="Âm lịch">' + lun + '</span></span>' +
      name + sub + '<span class="marks">' + marks.join('') + '</span></button>';
  }

  function renderMonth(root) {
    const weeks = P.monthGrid(state.y, state.m);
    let h = '<div class="mgrid" role="group" aria-label="' + MONTHS[state.m - 1] + ' ' + state.y + '"><div class="hd wkh">Tuần</div>';
    u.DOW_SHORT.forEach((d, k) => { h += '<div class="hd' + (k === 0 ? ' sun' : '') + '">' + d + '</div>'; });
    weeks.forEach(w => {
      const ref = w.find(x => x && x.dow === 3) || w.find(Boolean);
      h += '<div class="wk">' + esc(weekShort(ref.week)) + '</div>';
      w.forEach(c => { h += cellHTML(c); });
    });
    root.innerHTML = h + '</div>';
  }

  function renderYear(root) {
    let h = '<div class="ygrid">';
    for (let m = 1; m <= 12; m++) {
      const weeks = P.monthGrid(state.y, m);
      h += '<section class="mini"><h3><button type="button" data-month="' + m + '">' + MONTHS[m - 1] + '</button></h3><div class="mini-g">';
      u.DOW_SHORT.forEach(d => { h += '<div class="mh">' + d + '</div>'; });
      weeks.forEach(w => w.forEach(i => {
        if (!i) { h += '<span></span>'; return; }
        const p = i.primary, hi = isHigh(p);
        h += '<button type="button" class="md c-' + p.color + (hi ? ' hi' : '') + (i.sunday ? ' sunday' : '') + (i.n === todayN ? ' today' : '') + '" data-n="' + i.n + '" aria-pressed="' + (i.n === state.sel) + '" title="' + esc(i.dowName + ' ' + i.d + '/' + i.m + ' — ' + p.name) + '" aria-label="' + esc(ariaDay(i)) + '">' + i.d + '</button>';
      }));
      h += '</div></section>';
    }
    root.innerHTML = h + '</div>';
  }

  function renderList(root) {
    const first = u.mk(state.y, state.m, 1), last = u.mk(state.y, state.m, daysIn(state.y, state.m));
    let h = '<ul class="lst">';
    for (let n = first; n <= last; n++) {
      const i = P.day(n), p = i.primary;
      const sub = [p.kind === 'temporal' ? '' : i.temporal.name, i.week].filter(Boolean)[0];
      const gradeChip = (p.grade === 'WEEKDAY' || (p.grade === 'SUNDAY' && p.kind === 'temporal')) ? '' : '<span class="chip c-' + p.color + '">' + esc(p.gradeLabel) + '</span>';
      h += '<li><button type="button" class="row c-' + p.color + (i.sunday ? ' sunday' : '') + (n === todayN ? ' today' : '') + '" data-n="' + n + '" aria-pressed="' + (n === state.sel) + '">' +
        '<span class="rd"><b>' + i.d + '</b><small>' + i.dowName.replace('Chúa Nhật', 'CN').replace('Thứ ', 'T') + '</small></span>' +
        '<span class="rt"><strong>' + esc(p.name) + '</strong><span>' + esc(sub || '') + ' · âm ' + i.lunar.label + '</span></span>' + gradeChip + '</button></li>';
    }
    root.innerHTML = h + '</ul>';
  }

  function render() {
    const cal = $('#calendar');
    $('#periodTitle').textContent = state.view === 'year' ? 'Năm ' + state.y : MONTHS[state.m - 1] + ', ' + state.y;
    if (state.view === 'month') renderMonth(cal); else if (state.view === 'year') renderYear(cal); else renderList(cal);
    $$('#viewSwitch button').forEach(b => b.setAttribute('aria-selected', b.dataset.view === state.view));
    renderPeek();
  }

  // ------------------------------------------------------------------ chọn ngày
  let token = 0;
  function select(n, opts) {
    opts = opts || {};
    const c = u.civ(n);
    const monthChanged = c.y !== state.y || c.m !== state.m;
    state.sel = n; state.tab = null; state.setIdx = 0;
    if (monthChanged) { state.y = c.y; state.m = c.m; }
    if (monthChanged || opts.rerender) render();
    else {
      $$('[data-n][aria-pressed]').forEach(b => { const on = Number(b.dataset.n) === n; b.setAttribute('aria-pressed', on); b.tabIndex = on ? 0 : -1; });
      renderPeek();
    }
    if (isOpen()) renderDetail();
    syncHash();
    if (opts.focus) { const b = $('[data-n="' + n + '"]', $('#calendar')); if (b) b.focus({ preventScroll: false }); }
    if (opts.open) openSheet();
  }

  const isOpen = () => !$('#detail').hidden;
  // Phần nền phía sau khung chi tiết không nhận focus/nhấp khi khung đang mở
  const setBackdropInert = on => $$('.skip, .topbar, #main').forEach(el => { el.inert = on; });
  function openSheet() { const d = $('#detail'); d.hidden = false; $('#scrim').hidden = false; setBackdropInert(true); document.body.style.overflow = 'hidden'; renderDetail(); d.scrollTop = 0; const c = $('#dClose'); if (c) c.focus(); }
  function closeSheet() { if (!isOpen()) return; $('#detail').hidden = true; $('#scrim').hidden = true; setBackdropInert(false); document.body.style.overflow = ''; token++; const b = $('[data-n="' + state.sel + '"]', $('#calendar')); if (b) b.focus({ preventScroll: true }); }

  let peekToken = 0;
  function refsFor(info, R) {
    const b = R.build(info), ex = x => x && x.excerpt;
    const t = b.tabs[0], set = t && expandSets(t.sets)[0];
    if (set && set.data) {
      const d = set.data, r = { first: ex(d.firstReading), psalm: ex(d.psalms), second: ex(d.secondReading), gospel: ex(d.gospel) };
      if (r.first || r.gospel) return r;
    }
    return b.summary || null;
  }
  function refsHTML(r) {
    if (!r) return '<div class="rd-miss" style="margin:0">Chưa có dữ liệu bài đọc cho ngày này.</div>';
    const rows = [['Bài đọc I', r.first], ['Đáp ca', r.psalm], ['Bài đọc II', r.second], ['Tin Mừng', r.gospel]].filter(x => x[1]);
    return rows.map(x => '<dt>' + x[0] + '</dt><dd>' + esc(x[1]) + '</dd>').join('');
  }
  function renderPeek() {
    const my = ++peekToken, i = P.day(state.sel), p = i.primary, el = $('#peek');
    el.className = 'peek c-' + p.color;
    const lun = L.get(i.y, i.m, i.d);
    const solemn = i.solemnOption ? '<div class="pk-week" style="color:var(--red);font-weight:600">Kính trọng thể: ' + esc(i.solemnOption.name.replace(/ \(kính trọng thể\)/, '')) + ' (' + esc(i.solemnOption.colorName.toLowerCase()) + ')</div>' : '';
    const extra = solemn + (i.optionals.length ? '<div class="pk-week">Nhớ tùy ý: ' + esc(i.optionals.map(o => o.name).join(' · ')) + '</div>' : '');
    el.innerHTML =
      '<div class="pk-date"><small>' + esc(i.dowName) + '</small><b>' + i.d + '</b><span>Tháng ' + i.m + ' · ' + i.y + '</span><em>Âm lịch ' + i.lunar.label + ' · ' + esc(L.yearName(lun.year)) + '</em></div>' +
      '<div class="pk-main"><div class="chips">' + chipsHTML(i) + '</div><h2>' + esc(p.name) + '</h2><div class="pk-week">' + esc(i.week) + ' · ' + esc(i.seasonName) + '</div>' + extra +
      '<dl class="pk-refs" id="pkRefs"><dt>Bài đọc</dt><dd><div class="skeleton"></div></dd></dl></div>' +
      '<div class="pk-act"><button type="button" class="btn btn-primary pk-open" id="peekOpen">Xem đầy đủ &amp; bài đọc</button><div class="pk-nav"><button type="button" class="icon-btn" data-pstep="-1" aria-label="Ngày trước">‹</button><button type="button" class="icon-btn" data-pstep="1" aria-label="Ngày sau">›</button></div></div>';
    ensure(filesFor(i)).then(() => {
      if (my !== peekToken) return;
      const R = readingsApi();
      const box = $('#pkRefs'); if (box) box.innerHTML = refsHTML(refsFor(i, R));
      const med = R.meditationFor(R.build(i).tabs[0], 0);
      if (med && med.theme && box) box.insertAdjacentHTML('beforebegin', '<p class="pk-med"><b>Ý chính:</b> ' + esc(med.theme) + '</p>');
    }).catch(() => { const box = $('#pkRefs'); if (my === peekToken && box) box.innerHTML = '<dt></dt><dd class="rd-miss" style="margin:0">Không tải được dữ liệu bài đọc.</dd>'; });
  }

  // ------------------------------------------------------------------ chi tiết ngày
  function renderDetail() {
    const my = ++token, n = state.sel, i = P.day(n), p = i.primary;
    const lun = L.get(i.y, i.m, i.d);

    let body = '';
    i.notes.forEach(t => { body += '<p class="note">' + esc(t) + '</p>'; });

    // các cử hành khác trong ngày
    const rows = [];
    if (p.kind !== 'temporal') rows.push(['Theo mùa', i.temporal.name]);
    i.optionals.forEach(o => rows.push(['Nhớ tùy ý', o.name]));
    i.others.forEach(o => {
      if (o.role === 'season') return;
      const tag = { commemoration: 'Có thể kỷ niệm', peer: 'Lễ nhớ cùng ngày (tùy chọn)', displaced: 'Không cử hành', moved: 'Dời ngày' }[o.role] || '';
      rows.push([tag, o.name + (o.role === 'moved' ? ' → ' + u.fmtDM(o.moveTo) : '')]);
    });
    if (rows.length) body += '<div class="sec"><h4>Trong ngày</h4><ul class="oth">' + rows.map(r => '<li><span class="tag">' + esc(r[0]) + '</span><span>' + esc(r[1]) + '</span></li>').join('') + '</ul></div>';

    // Âm lịch + Chầu Thánh Thể (nếu dữ liệu đã nạp)
    const adHere = adorationHTML(n);
    body += '<div class="sec"><h4>Thông tin</h4><div class="kv"><div><b>Âm lịch:</b> ngày ' + lun.day + ' ' + L.monthName(lun.month, lun.leap) + ' năm ' + L.yearName(lun.year) + '</div>' + adHere + '</div></div>';

    // bài đọc
    body += '<div class="sec"><h4>Bài đọc</h4><div id="readings">' + SKELETON + '</div></div>';
    body += '<div class="sec" id="medSec" hidden><h4>Gợi ý suy niệm</h4><div id="meditation"></div></div>';

    $('#detail').innerHTML =
      '<div class="d-head c-' + p.color + '"><div class="d-top"><div class="d-date"><b>' + esc(i.dowName) + '</b>, ' + i.d + ' tháng ' + i.m + ', ' + i.y + '</div>' +
      '<div class="d-nav"><button class="icon-btn" data-step="-1" aria-label="Ngày trước">‹</button><button class="icon-btn" data-step="1" aria-label="Ngày sau">›</button><button class="icon-btn d-close" id="dClose" aria-label="Đóng">✕</button></div></div>' +
      '<h3 class="d-title">' + esc(p.name) + '</h3><div class="chips">' + chipsHTML(i, true) + '</div>' +
      '<div class="d-week">' + esc(i.week) + ' · ' + esc(i.seasonName) + ' · Âm lịch ' + i.lunar.label + '</div></div>' +
      '<div class="d-body">' + body + '</div>';

    ensure(filesFor(i, ['meditationLinks.js', 'eucharisticAdoration.js'])).then(() => {
      if (my !== token) return;
      renderReadings(i);
      if (!adHere) { const a = adorationHTML(n), kvEl = $('.kv'); if (a && kvEl) kvEl.insertAdjacentHTML('beforeend', a); }   // vừa nạp xong
    }).catch(err => {
      if (my !== token) return;
      const el = $('#readings'); if (el) el.innerHTML = '<div class="rd-miss">Không tải được dữ liệu bài đọc (' + esc(err.message) + '). Kiểm tra kết nối rồi thử lại.</div>';
    });
  }

  // ------------------------------------------------------------------ hiển thị bài đọc
  // Dòng trống hoặc chỉ có dấu chấm, "\ r" lạc trong dữ liệu
  const junkLine = l => /^[\s.]*(\\\s*r)?[\s.]*$/.test(l);
  const lines = t => String(t == null ? '' : t).split(/[\r\n]+/).map(l => l.trim()).filter(l => !junkLine(l));
  function textHTML(t) {
    return lines(t).map(l => /^Đó là [Ll]ời Chúa\.?$/.test(l) ? '<div class="rd-end">' + esc(l) + '</div>' : '<p>' + esc(l) + '</p>').join('');
  }

  // Bài đọc thay thế nằm chung trong bản văn: "…Hoặc đọc: 2 Mcb 7, 1. 20-23 ⏎ “Câu tóm ý” ⏎ Trích sách… ⏎ Nội dung…".
  // Chỉ tách ở chữ "Hoặc:" / "Hoặc đọc:" viết hoa, đứng đầu dòng hoặc ngay sau "Alleluia." (chữ "hoặc" viết thường có trong lời Kinh Thánh).
  const ALT_RE = /(?:(?<=^|[\r\n][\s.\\r]*)|(?<=lleluia[.!]?\)?\s*))\(?\s*Hoặc(?:\s+đọc)?\s*:\s*\)?/g;
  const splitAlt = t => String(t == null ? '' : t).split(ALT_RE);
  function altReading(part) {
    const ls = lines(part), o = { cite: '', intro: '', title: '', body: '' };
    if (!ls.length) return o;
    const first = ls.shift(), q = first.search(/[“"]/);
    o.cite = (q > 0 ? first.slice(0, q) : first).trim();
    if (q > 0) o.intro = first.slice(q).trim();
    if (!o.intro && ls.length && /^[“"]/.test(ls[0])) o.intro = ls.shift();
    if (ls.length && /^(Bài trích|Trích|Tin Mừng)/i.test(ls[0])) o.title = ls.shift();
    o.body = ls.join('\n');
    return o;
  }
  // Khối "Hoặc đọc": bodyHTML = bản văn đã dựng sẵn (bản dịch khác); không có thì dùng bản Sách Bài Đọc
  function altHTML(a, bodyHTML, attrs) {
    return '<div class="rd-alt"' + (attrs || '') + '><div class="rd-alt-label">Hoặc đọc</div>' + (a.cite ? '<div class="rd-cite">' + esc(a.cite) + '</div>' : '') +
      (bodyHTML ? bodyHTML : (a.title ? '<div class="rd-title">' + esc(a.title) + '</div>' : '') + (a.intro ? '<div class="rd-intro">' + esc(a.intro) + '</div>' : '') +
        '<div class="rd-text">' + textHTML(a.body) + '</div>') + '</div>';
  }
  function contentHTML(t) {
    const parts = splitAlt(t);
    return '<div class="rd-text">' + textHTML(parts[0]) + '</div>' + parts.slice(1).map(p => altHTML(altReading(p))).join('');
  }
  // Câu đáp / câu tung hô có hai lựa chọn: hiện từng câu, ngăn bởi chữ "hoặc"
  const OR_RE = /\(?\s*Hoặc(?:\s+đọc)?\s*:\s*\)?/g;   // câu ngắn: tách ở mọi chữ "Hoặc:" viết hoa
  const orJoin = (t, wrap) => String(t == null ? '' : t).split(OR_RE).map(x => x.replace(/\)\s*$/, '').trim()).filter(Boolean).map(wrap).join('<div class="rd-or">hoặc</div>');
  function readingBlock(label, d) {
    if (!d) return '';
    let h = '<div class="rd-block"><div class="rd-label">' + esc(label) + '</div>';
    if (d.excerpt) h += '<div class="rd-cite">' + esc(d.excerpt) + '</div>';
    if (d.title) h += '<div class="rd-title">' + esc(d.title) + '</div>';
    if (d.info) h += '<div class="rd-intro">' + esc(d.info) + '</div>';
    if (d.content) h += contentHTML(d.content);
    if (d.end) h += '<div class="rd-end">' + esc(d.end) + '</div>';
    return h + '</div>';
  }
  function psalmBlock(d) {
    if (!d) return '';
    let h = '<div class="rd-block"><div class="rd-label">Đáp ca</div>';
    if (d.excerpt) h += '<div class="rd-cite">' + esc(d.excerpt) + '</div>';
    if (d.response) h += orJoin(d.response, r => '<div class="rd-resp">' + esc(r) + '</div>');
    if (d.verses && d.verses.length) h += d.verses.map(v => '<p class="rd-verse">' + esc(v) + '</p>').join('');
    return h + '</div>';
  }
  function setHTML(data) {
    if (!data) return '';
    if (data.summaryOnly) {
      const rows = [['Bài đọc I', data.firstReading], ['Đáp ca', data.psalms], ['Bài đọc II', data.secondReading], ['Tin Mừng', data.gospel]].filter(r => r[1] && r[1].excerpt);
      return '<dl class="refs" style="margin-top:14px">' + rows.map(r => '<dt>' + r[0] + '</dt><dd>' + esc(r[1].excerpt) + '</dd>').join('') + '</dl>' +
        '<div class="rd-miss">Bản văn đầy đủ của ngày này chưa có trong dữ liệu; hiện chỉ có phần trích dẫn.</div>';
    }
    let h = readingBlock('Bài đọc I', data.firstReading) + psalmBlock(data.psalms);
    if (data.secondReading) h += readingBlock('Bài đọc II', data.secondReading);
    if (data.alleluia) h += '<div class="rd-alle"><div class="rd-label">Tung hô Tin Mừng</div>' + (data.alleluia.verse ? '<div class="rd-cite">' + esc(data.alleluia.verse) + '</div>' : '') + '<div class="rd-text">' + orJoin(data.alleluia.content, textHTML) + '</div></div>';
    h += readingBlock('Tin Mừng', data.gospel);
    return h;
  }
  // Bài đọc theo bản dịch khác: lấy câu theo trích dẫn. Phần nào không tìm được thì giữ bản Sách Bài Đọc.
  function setHTMLTr(data, T, tr, cycle) {
    if (!data) return { html: '', plain: '' };
    const opts = data.summaryOnly ? { hebrew: true } : null;   // trích dẫn tóm tắt đánh số Thánh vịnh theo Híp-ri
    const lang = tr.lang ? ' lang="' + tr.lang + '"' : '';
    const html = [], plain = [], miss = [];
    const one = (label, d, isPs) => {
      if (!d || !d.excerpt) return;
      const parts = d.content ? splitAlt(d.content) : [];
      const ref = parts.length ? parts[0] : (d.verses || []).join(' ');   // chỉ bài chính, không gồm bài thay thế
      let cite = d.excerpt;
      const byYear = cite.match(new RegExp('\\(' + cycle + '\\)\\s*([^;:()]+)'));   // "(A)Mt 28, 1-10; (B) Mc 16,1-8: (C)…"
      if (byYear) cite = byYear[1].trim();
      const r = window.Bible.lookupBest(T, cite, opts, byYear ? '' : ref);
      if (!r.ok) {
        miss.push(label);
        html.push(isPs ? psalmBlock(d) : readingBlock(label, d));
        return;
      }
      const verse = x => '<sup class="vno">' + x.v + '</sup>' + esc(x.text);
      const textOf = res => '<div class="rd-text">' + res.stanzas.map(st => '<p>' + st.map(verse).join(' ') + '</p>').join('') + '</div>';
      const plainOf = res => res.stanzas.map(st => st.map(x => x.text).join(' ')).join('\n');
      const body = isPs ? r.stanzas.map(st => '<p class="rd-verse">' + st.map(verse).join(' ') + '</p>').join('') : textOf(r);
      // Bài đọc thay thế ("Hoặc đọc: …"): lấy theo bản dịch; không tìm được thì giữ bản Sách Bài Đọc
      let alts = '', altPlain = '';
      parts.slice(1).map(altReading).forEach(a => {
        const ar = a.cite ? window.Bible.lookupBest(T, a.cite, opts, a.body) : { ok: false };
        if (ar.ok) { alts += altHTML(a, textOf(ar)); altPlain += '\n\nHOẶC ĐỌC: ' + a.cite + '\n' + plainOf(ar); }
        else { alts += altHTML(a, '', ' lang="vi"'); miss.push(label + ' (bài thay thế)'); altPlain += '\n\nHOẶC ĐỌC: ' + a.cite + '\n' + lines(a.body).join('\n'); }
      });
      html.push('<div class="rd-block"' + lang + '><div class="rd-label">' + label + '</div><div class="rd-cite">' + esc(cite) + '</div>' + body + alts + '</div>');
      plain.push(label.toUpperCase() + ' — ' + cite + '\n' + plainOf(r) + altPlain);
    };
    one('Bài đọc I', data.firstReading);
    one('Đáp ca', data.psalms, true);
    one('Bài đọc II', data.secondReading);
    one('Tin Mừng', data.gospel);
    let note = '<div class="tr-note">Bản dịch: ' + esc(tr.label) + '. Số câu đã quy đổi theo cách đánh số của bản dịch này; phần Đáp ca chỉ có các câu Thánh vịnh, không có câu đáp.</div>';
    if (miss.length) note += '<div class="rd-miss">Chưa tìm được trong bản dịch này nên đang hiện theo Sách Bài Đọc: ' + esc(miss.join(', ')) + '.</div>';
    return { html: note + html.join(''), plain: plain.join('\n\n') };
  }

  const plainContent = t => splitAlt(t).map((p, k) => (k ? 'HOẶC ĐỌC: ' : '') + lines(p).join('\n')).join('\n\n');
  function plainText(data) {
    const parts = [];
    const blk = (l, d) => { if (d) parts.push([l + (d.excerpt ? ' — ' + d.excerpt : ''), d.title, d.info, d.content && plainContent(d.content), d.end].filter(Boolean).join('\n')); };
    blk('BÀI ĐỌC I', data.firstReading);
    if (data.psalms) parts.push(['ĐÁP CA' + (data.psalms.excerpt ? ' — ' + data.psalms.excerpt : ''), data.psalms.response && lines(data.psalms.response.replace(OR_RE, '\nHoặc: ')).join('\n')].concat(data.psalms.verses || []).filter(Boolean).join('\n'));
    blk('BÀI ĐỌC II', data.secondReading);
    if (data.alleluia) parts.push(['TUNG HÔ TIN MỪNG', data.alleluia.verse, data.alleluia.content && lines(data.alleluia.content.replace(OR_RE, '\nHoặc: ')).join('\n')].filter(Boolean).join('\n'));
    blk('TIN MỪNG', data.gospel);
    return parts.join('\n\n');
  }

  function meditationHTML(med, data) {
    const cite = k => { const d = data && data[k]; return d && d.excerpt ? ' <span class="med-cite">' + esc(d.excerpt.replace(/[:.\s]+$/, '')) + '</span>' : ''; };
    const parts = [['Bài đọc I', 'first', 'firstReading'], ['Đáp ca', 'psalm', 'psalms'], ['Bài đọc II', 'second', 'secondReading'], ['Tin Mừng', 'gospel', 'gospel']]
      .filter(x => med[x[1]]).map(x => '<dt>' + x[0] + cite(x[2]) + '</dt><dd>' + esc(med[x[1]]) + '</dd>').join('');
    const box = (cls, title, text) => text ? '<div class="med-box ' + cls + '"><h5>' + title + '</h5><p>' + esc(text) + '</p></div>' : '';
    return (med.theme ? '<p class="med-theme">' + esc(med.theme) + '</p>' : '') +
      (parts ? '<dl class="med-parts">' + parts + '</dl>' : '') +
      box('med-connect', 'Nối kết các bài đọc', med.connect) +
      box('', 'Câu hỏi gợi suy', med.question) +
      box('', 'Sống Lời Chúa', med.action) +
      '<p class="med-foot">Gợi ý mang tính hỗ trợ cầu nguyện cá nhân, không thay thế bài giảng.</p>';
  }

  function meditationPlain(med, data) {
    const cite = k => (data && data[k] && data[k].excerpt ? ' (' + data[k].excerpt.replace(/[:.\s]+$/, '') + ')' : '');
    return [med.theme,
      ...[['Bài đọc I', 'first', 'firstReading'], ['Đáp ca', 'psalm', 'psalms'], ['Bài đọc II', 'second', 'secondReading'], ['Tin Mừng', 'gospel', 'gospel']]
        .filter(x => med[x[1]]).map(x => x[0].toUpperCase() + cite(x[2]) + '\n' + med[x[1]]),
      med.connect && 'NỐI KẾT CÁC BÀI ĐỌC\n' + med.connect,
      med.question && 'CÂU HỎI GỢI SUY\n' + med.question,
      med.action && 'SỐNG LỜI CHÚA\n' + med.action].filter(Boolean).join('\n\n');
  }

  // Chia sẻ qua bảng chia sẻ của máy (Zalo, Messenger…); máy không hỗ trợ thì sao chép để dán.
  const dayLink = n => location.href.split('#')[0] + '#' + u.iso(n);
  async function shareText(heading, text, okMsg) {
    const i = P.day(state.sel), title = i.primary.name + ' — ' + fmtLong(i);
    const full = title + (heading ? '\n' + heading : '') + '\n\n' + text + '\n\n' + dayLink(state.sel);
    if (navigator.share) {
      try { await navigator.share({ title, text: full }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(full); toast(okMsg || 'Đã sao chép, bạn có thể dán để chia sẻ.'); } catch (e) { toast('Không sao chép được.'); }
  }

  function expandSets(sets) {
    const out = [];
    sets.forEach(s => {
      if (s.data && s.data.options) s.data.options.forEach(o => out.push({ label: o.label || s.label, data: o.data }));
      else out.push(s);
    });
    return out;
  }

  function renderReadings(info) {
    const box = $('#readings'); if (!box) return;
    const R = readingsApi(), res = R.build(info);
    const med = R.meditationLink(info);
    const tabs = res.tabs.map(t => Object.assign({}, t, { sets: expandSets(t.sets) }));
    if (!tabs.length) { box.innerHTML = '<div class="rd-miss">Chưa có dữ liệu bài đọc cho ngày này.</div>'; return; }
    if (!state.tab || !tabs.some(t => t.id === state.tab)) state.tab = tabs[0].id;
    const cur = tabs.find(t => t.id === state.tab);
    if (state.setIdx >= cur.sets.length) state.setIdx = 0;
    const set = cur.sets[state.setIdx];

    const tr = TRANSLATIONS.find(t => t.id === state.tr) || TRANSLATIONS[0];
    let h = '<div class="opts tr-switch" role="group" aria-label="Chọn bản dịch"><span>Bản dịch:</span>' +
      TRANSLATIONS.map(t => '<button type="button" data-tr="' + t.id + '" aria-pressed="' + (t.id === tr.id) + '">' + esc(t.label) + '</button>').join('') + '</div>';
    if (tabs.length > 1) h += '<div class="tabs" role="tablist">' + tabs.map(t => '<button role="tab" data-tab="' + t.id + '" aria-selected="' + (t.id === state.tab) + '">' + esc(t.label) + '</button>').join('') + '</div>';
    if (cur.sets.length > 1) h += '<div class="opts">' + cur.sets.map((s, k) => '<button data-set="' + k + '" aria-pressed="' + (k === state.setIdx) + '">' + esc(s.label || ('Lựa chọn ' + (k + 1))) + '</button>').join('') + '</div>';
    let plainTr = null;
    if (tr.file && !trData.has(tr.id)) {
      h += SKELETON;
      const n = info.n;
      loadTranslation(tr.id).then(() => { if (state.sel === n && state.tr === tr.id) renderReadings(info); })
        .catch(() => { toast('Không tải được bản dịch ' + tr.label + '.'); if (state.tr === tr.id) { state.tr = 'vn'; renderReadings(info); } });
    } else if (tr.file) {
      const out = setHTMLTr(set.data, trData.get(tr.id), tr, info.cycle);
      h += out.html; plainTr = out.plain;
    } else h += setHTML(set.data);
    const sugg = R.meditationFor(cur, state.setIdx);
    h += '<div class="rd-tools">' + (sugg ? '<button class="btn" id="btnMed">Gợi ý suy niệm ↓</button>' : '') +
      '<button class="btn" id="btnShare">Chia sẻ</button><button class="btn" id="btnCopy">Sao chép</button>' +
      (med ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(med.url) + '">' + esc(med.label || 'Suy niệm') + '</a>' : '') + '</div>';
    box.innerHTML = h;
    box._plain = plainTr != null ? plainTr : (set.data && !set.data.summaryOnly ? plainText(set.data) : '');
    const ms = $('#medSec');
    if (ms) {
      ms.hidden = !sugg;
      const mbox = $('#meditation');
      mbox.innerHTML = sugg ? meditationHTML(sugg, set.data) + '<div class="rd-tools"><button class="btn" id="btnShareMed">Chia sẻ suy niệm</button></div>' : '';
      mbox._plain = sugg ? meditationPlain(sugg, set.data) : '';
    }
  }

  // ------------------------------------------------------------------ xuất lịch
  function monthRange() {
    const sel = $('input[name="range"]:checked').value;
    if (sel === 'month') return [state.y, state.m, state.y, state.m];
    if (sel === 'year') return [state.y, 1, state.y, 12];
    const parse = v => { const mt = /^(\d{4})-(\d{2})$/.exec(v || ''); return mt ? [+mt[1], +mt[2]] : null; };
    let f = parse($('#exFrom').value), t = parse($('#exTo').value);
    if (!f || !t) throw new Error('Hãy chọn đủ tháng bắt đầu và kết thúc.');
    if (f[0] * 12 + f[1] > t[0] * 12 + t[1]) [f, t] = [t, f];
    if (f[0] < YEAR_MIN || t[0] > YEAR_MAX) throw new Error('Chỉ xuất được từ năm ' + YEAR_MIN + ' đến ' + YEAR_MAX + '.');
    if ((t[0] * 12 + t[1]) - (f[0] * 12 + f[1]) >= EXPORT_MAX_MONTHS) throw new Error('Mỗi lần xuất tối đa ' + EXPORT_MAX_MONTHS / 12 + ' năm.');
    return [f[0], f[1], t[0], t[1]];
  }
  const EXPORT_MAX_MONTHS = 120;
  const monthsIn = r => { const out = []; for (let k = r[0] * 12 + r[1] - 1; k <= r[2] * 12 + r[3] - 1; k++) out.push([Math.floor(k / 12), k % 12 + 1]); return out; };
  async function buildExport(range, opts) {
    if (opts.text) await ensure(['Sunday.js', 'DailySeason.js', 'readings_year_1.js', 'readings_year_2.js', 'SaintsBible.js', 'Optionsaint.js', 'readingdata.js']);
    else await ensure(['readingdata.js']);
    const R = readingsApi(), months = [];
    monthsIn(range).forEach(([y, m]) => {
      const days = [], len = daysIn(y, m);
      for (let d = 1; d <= len; d++) {
        const i = P.day(u.mk(y, m, d)), p = i.primary;
        const o = { ngay: i.iso, thu: i.dowName, le: p.name, bac: p.gradeLabel, mau: p.colorName, tuan: i.week, mua: i.seasonName, nam: i.cycle, namChanLe: i.weekdayCycle === '1' ? 'lẻ' : 'chẵn', maBaiDoc: i.code };
        if (opts.lunar) o.amLich = i.lunar.day + '/' + i.lunar.month + (i.lunar.leap ? ' nhuận' : '');
        if (opts.saints) { const ex = i.optionals.map(x => x.name).concat(i.others.filter(x => x.role !== 'season').map(x => x.name)); if (ex.length) o.khac = ex; }
        if (i.discipline.length) o.kyLuat = i.discipline.map(x => x.label);
        if (opts.refs || opts.text) {
          const b = R.build(i);
          if (opts.refs && b.summary) o.thamChieu = b.summary;
          if (opts.text && b.tabs[0]) o.baiDoc = expandSets(b.tabs[0].sets).map(s => ({ nhan: s.label, noiDung: s.data && !s.data.summaryOnly ? plainText(s.data) : null }));
        }
        days.push(o);
      }
      months.push({ nam: y, thang: m, ngay: days });
    });
    const out = { nam: range[0], taoLuc: new Date().toISOString(), thang: months };
    if (range[2] !== range[0]) out.denNam = range[2];
    return out;
  }
  function download(name, text, type) {
    const a = document.createElement('a'), blob = new Blob([text], { type });
    a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function printHTML(data, opts) {
    const colors = { 'Xanh': '#3f8d5c', 'Tím': '#7352ad', 'Trắng': '#d4b85c', 'Đỏ': '#c4433a', 'Hồng': '#e0809f' };
    const yrs = data.nam + (data.denNam ? '–' + data.denNam : '');
    let h = '<!doctype html><meta charset="utf-8"><title>Lịch Phụng Vụ ' + yrs + '</title><style>body{font:12px/1.4 system-ui,sans-serif;margin:18px;color:#111}h1{font-size:18px}h2{font-size:15px;margin:18px 0 6px;break-after:avoid}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:3px 6px;vertical-align:top;text-align:left}th{background:#f1eee6}.d{white-space:nowrap}.c{width:8px;padding:0}.s{color:#c4433a;font-weight:600}tr{break-inside:avoid}small{color:#666}</style><h1>Lịch Phụng Vụ Công Giáo — ' + yrs + '</h1>';
    data.thang.forEach(mo => {
      h += '<h2>Tháng ' + mo.thang + (data.denNam ? ', ' + mo.nam : '') + '</h2><table><tr><th></th><th>Ngày</th>' + (opts.lunar ? '<th>Âm</th>' : '') + '<th>Cử hành</th><th>Tuần</th>' + (opts.refs ? '<th>Bài đọc</th>' : '') + '</tr>';
      mo.ngay.forEach(o => {
        const d = o.ngay.slice(8), sun = o.thu === 'Chúa Nhật';
        const refs = o.thamChieu ? [o.thamChieu.first, o.thamChieu.psalm, o.thamChieu.second, o.thamChieu.gospel].filter(Boolean).join(' · ') : '';
        h += '<tr><td class="c" style="background:' + (colors[o.mau] || '#999') + '"></td><td class="d' + (sun ? ' s' : '') + '">' + o.thu.replace('Chúa Nhật', 'CN').replace('Thứ ', 'T') + ' ' + Number(d) + '</td>' + (opts.lunar ? '<td>' + (o.amLich || '') + '</td>' : '') +
          '<td><b>' + esc(o.le) + '</b>' + (o.bac && o.bac !== 'Ngày thường' ? ' <small>(' + esc(o.bac) + ')</small>' : '') + (o.khac ? '<br><small>' + esc(o.khac.join('; ')) + '</small>' : '') + (o.kyLuat ? '<br><small>' + esc(o.kyLuat.join(', ')) + '</small>' : '') + '</td><td>' + esc(o.tuan) + '</td>' + (opts.refs ? '<td>' + esc(refs) + '</td>' : '') + '</tr>';
      });
      h += '</table>';
    });
    return h + '<script>window.onload=function(){setTimeout(function(){window.print()},300)}<\/script>';
  }
  async function doExport(kind) {
    const opts = { lunar: $('#exLunar').checked, saints: $('#exSaints').checked, refs: $('#exRefs').checked, text: $('#exText').checked && kind === 'json' };
    let r;
    try { r = monthRange(); } catch (e) { toast(e.message); return; }
    toast('Đang chuẩn bị…');
    try {
      const data = await buildExport(r, opts);
      const base = 'lich-phung-vu-' + (r[0] === r[2]
        ? r[0] + (r[1] === r[3] ? '-thang-' + r[1] : (r[1] === 1 && r[3] === 12 ? '' : '-thang-' + r[1] + '-den-' + r[3]))
        : r[0] + '-' + u.pad2(r[1]) + '-den-' + r[2] + '-' + u.pad2(r[3]));
      if (kind === 'json') { download(base + '.json', JSON.stringify(data, null, 2), 'application/json;charset=utf-8'); toast('Đã tải ' + base + '.json'); }
      else {
        const w = window.open('', '_blank');
        if (!w) { toast('Trình duyệt chặn cửa sổ in. Hãy cho phép cửa sổ bật lên.'); return; }
        w.document.write(printHTML(data, opts)); w.document.close(); toast('Chọn "Lưu thành PDF" trong hộp thoại in.');
      }
    } catch (e) { toast('Lỗi khi xuất: ' + e.message); }
  }
  let toastTimer;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 3200); }

  // ------------------------------------------------------------------ tìm lễ theo tên
  // So khớp không dấu: "phero" khớp "Phêrô", "le tro" khớp "Lễ Tro".
  const fold = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/-/g, '').toLowerCase();
  const searchIndex = new Map();   // năm → [{ n, items: [{ name, note, key }] }]
  function yearIndex(y) {
    if (searchIndex.has(y)) return searchIndex.get(y);
    const out = [];
    for (let n = u.mk(y, 1, 1), end = u.mk(y, 12, 31); n <= end; n++) {
      const i = P.day(n), items = [];
      const add = (name, note) => { if (name && !items.some(x => x.name === name)) items.push({ name, note: note || '', words: fold(name).split(/[^a-z0-9]+/).filter(Boolean) }); };
      add(i.primary.name, i.primary.gradeLabel !== 'Ngày thường' ? i.primary.gradeLabel : '');
      if (i.primary.kind !== 'temporal') add(i.temporal.name, 'Theo mùa');
      i.optionals.forEach(o => add(o.name, 'Nhớ tùy ý'));
      i.others.forEach(o => { if (o.role === 'moved') add(o.name, 'Dời sang ' + u.fmtDM(o.moveTo)); else if (o.role !== 'season') add(o.name, ''); });
      if (i.solemnOption) add(i.solemnOption.name, 'Kính trọng thể');
      i.flags.forEach(f => add(f, ''));
      if (i.ashTransferred && i.primary.kind === 'temporal') add(i.temporal.name, '');
      out.push({ n, items });
    }
    searchIndex.set(y, out);
    return out;
  }
  let searchYear = 0;
  function runSearch() {
    const q = fold($('#searchQ').value).trim(), words = q.split(/\s+/).filter(Boolean), res = $('#searchRes');
    $('#searchYear').textContent = 'Năm ' + searchYear;
    if (!words.length) { res.innerHTML = '<li class="srch-hint">Gõ tên lễ, tên thánh hoặc mùa: Phêrô, Tết, Lễ Tro, Mân Côi…</li>'; return; }
    // Mỗi từ gõ vào phải là đầu của một từ trong tên lễ. Nếu có kết quả khớp trọn từ ("le tro" → "Lễ Tro") thì chỉ hiện những kết quả đó,
    // để không lẫn với "Lễ Trọng"; còn khi đang gõ dở ("phe") thì hiện mọi kết quả khớp đầu từ.
    const match = (it, exact) => words.every(w => it.words.some(x => (exact ? x === w : x.startsWith(w))));
    const find = exact => { const out = []; for (const d of yearIndex(searchYear)) { const it = d.items.find(x => match(x, exact)); if (it) out.push({ n: d.n, it }); } return out; };
    let hits = find(true);
    if (!hits.length) hits = find(false);
    hits = hits.slice(0, 60);
    res.innerHTML = hits.length ? hits.map(h => {
      const c = u.civ(h.n), i = P.day(h.n);
      return '<li><button type="button" class="srch-item c-' + i.primary.color + '" data-goto="' + h.n + '"><span class="srch-date"><b>' + c.d + '/' + c.m + '</b><small>' + esc(i.dowName) + '</small></span>' +
        '<span class="srch-name">' + esc(h.it.name) + (h.it.note ? '<small>' + esc(h.it.note) + '</small>' : '') + '</span></button></li>';
    }).join('') : '<li class="srch-hint">Không tìm thấy trong năm ' + searchYear + '.</li>';
  }
  function openSearch() {
    const dlg = $('#searchDlg');
    if (dlg.open) return;
    searchYear = state.y;
    dlg.showModal();
    runSearch();
    $('#searchQ').focus(); $('#searchQ').select();
  }

  // ------------------------------------------------------------------ sự kiện
  function step(delta) {
    if (state.view === 'year') { state.y += delta; render(); return; }
    let m = state.m + delta, y = state.y;
    while (m < 1) { m += 12; y--; } while (m > 12) { m -= 12; y++; }
    state.y = y; state.m = m;
    select(u.mk(y, m, Math.min(u.civ(state.sel).d, daysIn(y, m))), { rerender: true });
  }
  function syncHash() { try { history.replaceState(null, '', '#' + u.iso(state.sel) + (state.view !== 'month' ? '/' + state.view : '')); } catch (e) { /* file:// */ } }
  function setView(v) { state.view = v; store.set('view', v); render(); syncHash(); }
  function goToday() { const c = u.civ(todayN); state.y = c.y; state.m = c.m; select(todayN, { rerender: true }); }

  // Vuốt ngang để đổi ngày/tháng. Bỏ qua khi vuốt trên thanh tab cuộn ngang, ô nhập, hoặc đang bôi đen chữ.
  function onSwipe(el, cb) {
    let x0 = null, y0 = 0, t0 = 0;
    el.addEventListener('touchstart', e => {
      if (e.touches.length !== 1 || e.target.closest('.tabs, .opts, input, select, textarea')) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now();
    }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 == null) return;
      const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      x0 = null;
      if (Date.now() - t0 > 700 || Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx) * 0.6) return;
      if (window.getSelection && String(window.getSelection()).trim()) return;
      cb(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
  // Hiệu ứng trượt nhẹ khi đổi ngày trong khung chi tiết
  function stepDay(d) {
    select(state.sel + d);
    const el = $('#detail .d-head');
    if (el) { el.classList.remove('slide-l', 'slide-r'); void el.offsetWidth; el.classList.add(d > 0 ? 'slide-l' : 'slide-r'); }
  }

  function bind() {
    onSwipe($('#detail'), stepDay);
    onSwipe($('#peek'), d => select(state.sel + d));
    onSwipe($('#calendar'), step);
    $('#calendar').addEventListener('click', e => {
      const mb = e.target.closest('[data-month]');
      if (mb) { state.m = Number(mb.dataset.month); setView('month'); return; }
      const b = e.target.closest('[data-n]'); if (!b) return;
      select(Number(b.dataset.n));
    });
    $('#calendar').addEventListener('keydown', e => {
      const b = e.target.closest('[data-n]'); if (!b) return;
      const n = Number(b.dataset.n); let t = null;
      if (e.key === 'ArrowLeft') t = n - 1; else if (e.key === 'ArrowRight') t = n + 1;
      else if (e.key === 'ArrowUp') t = n - 7; else if (e.key === 'ArrowDown') t = n + 7;
      else if (e.key === 'PageUp') { step(-1); e.preventDefault(); return; } else if (e.key === 'PageDown') { step(1); e.preventDefault(); return; }
      if (t != null) { e.preventDefault(); select(t, { focus: true }); }
    });
    $('#peek').addEventListener('click', e => {
      const st = e.target.closest('[data-pstep]'); if (st) { select(state.sel + Number(st.dataset.pstep)); return; }
      if (e.target.closest('#peekOpen')) openSheet();
    });
    $('#calendar').addEventListener('dblclick', e => { const b = e.target.closest('[data-n]'); if (b) select(Number(b.dataset.n), { open: true }); });
    $('#scrim').addEventListener('click', closeSheet);
    $('#detail').addEventListener('click', e => {
      const st = e.target.closest('[data-step]'); if (st) { stepDay(Number(st.dataset.step)); return; }
      if (e.target.closest('#dClose')) { closeSheet(); return; }
      const tb = e.target.closest('[data-tab]'); if (tb) { state.tab = tb.dataset.tab; state.setIdx = 0; renderReadings(P.day(state.sel)); return; }
      const trb = e.target.closest('[data-tr]');
      if (trb) { state.tr = trb.dataset.tr; store.set('tr', state.tr); renderReadings(P.day(state.sel)); return; }
      const sb = e.target.closest('[data-set]'); if (sb) { state.setIdx = Number(sb.dataset.set); renderReadings(P.day(state.sel)); return; }
      if (e.target.closest('#btnMed')) { const ms = $('#medSec'); if (ms) ms.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
      if (e.target.closest('#btnCopy')) {
        const t = $('#readings')._plain; if (!t) { toast('Chưa có bản văn để sao chép.'); return; }
        const i = P.day(state.sel);
        const full = i.primary.name + ' — ' + fmtLong(i) + '\n\n' + t;
        (navigator.clipboard ? navigator.clipboard.writeText(full) : Promise.reject()).then(() => toast('Đã sao chép bài đọc'), () => toast('Không sao chép được'));
        return;
      }
      if (e.target.closest('#btnShare')) {
        const t = $('#readings')._plain;
        if (!t) { toast('Chưa có bản văn để chia sẻ.'); return; }
        shareText('', t);
        return;
      }
      if (e.target.closest('#btnShareMed')) { const t = $('#meditation')._plain; if (t) shareText('Gợi ý suy niệm', t); }
    });
    $('#prevPeriod').addEventListener('click', () => step(-1));
    $('#nextPeriod').addEventListener('click', () => step(1));
    $('#btnToday').addEventListener('click', goToday);
    $('#viewSwitch').addEventListener('click', e => { const b = e.target.closest('[data-view]'); if (b) setView(b.dataset.view); });
    $('#jumpDate').addEventListener('change', e => {
      const mt = /^(\d{4,})-(\d{2})-(\d{2})$/.exec(e.target.value); if (!mt) return;
      const y = +mt[1], m = +mt[2], d = +mt[3];
      if (y < YEAR_MIN || y > YEAR_MAX) { toast('Chỉ xem được từ năm ' + YEAR_MIN + ' đến ' + YEAR_MAX + '.'); return; }
      select(u.mk(y, m, d), { rerender: true });
    });
    $('#fontInc').addEventListener('click', () => setFont(state.fs + 0.1));
    $('#fontDec').addEventListener('click', () => setFont(state.fs - 0.1));
    $('#btnTheme').addEventListener('click', () => {
      const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = cur === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = next; store.set('theme', next);
    });
    $('#btnSearch').addEventListener('click', openSearch);
    $('#searchQ').addEventListener('input', runSearch);
    $('#searchQ').addEventListener('keydown', e => { if (e.key === 'Enter') { const b = $('#searchRes [data-goto]'); if (b) b.click(); e.preventDefault(); } });
    $('#searchDlg').addEventListener('click', e => {
      if (e.target === e.currentTarget || e.target.closest('#searchClose')) { e.currentTarget.close(); return; }   // bấm ra ngoài hoặc nút ✕
      const sy = e.target.closest('[data-sy]'); if (sy) { searchYear = Math.max(YEAR_MIN, Math.min(YEAR_MAX, searchYear + Number(sy.dataset.sy))); runSearch(); return; }
      const g = e.target.closest('[data-goto]'); if (g) { e.currentTarget.close(); select(Number(g.dataset.goto), { rerender: true }); }
    });
    $('#btnExport').addEventListener('click', () => {
      const cur = state.y + '-' + u.pad2(state.m);
      $('#exFrom').value = cur; $('#exTo').value = cur;
      $('#exportDlg').showModal();
    });
    $('#exJson').addEventListener('click', e => { e.preventDefault(); $('#exportDlg').close(); doExport('json'); });
    $('#exPdf').addEventListener('click', e => { e.preventDefault(); $('#exportDlg').close(); doExport('pdf'); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSheet();
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'select' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (isOpen() && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); stepDay(e.key === 'ArrowRight' ? 1 : -1); return; }
      if (e.key === '/' && !isOpen()) { e.preventDefault(); openSearch(); return; }
      if ((e.key === 't' || e.key === 'T') && !isOpen()) goToday();
    });
    window.addEventListener('hashchange', readHash);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshToday(); });
    window.addEventListener('focus', refreshToday);
    setInterval(refreshToday, 60000);
  }

  // Khi để trang mở qua nửa đêm: cập nhật ô "hôm nay"
  function refreshToday() {
    const n = u.fromDate(new Date());
    if (n === todayN) return;
    todayN = n; render();
  }

  function setFont(v) { state.fs = Math.max(0.9, Math.min(1.4, Math.round(v * 10) / 10)); document.documentElement.style.setProperty('--fs', state.fs); store.set('fs', state.fs); }

  function readHash() {
    const m = location.hash.match(/^#(\d{4})-(\d{2})-(\d{2})(?:\/(month|year|list))?/);
    if (!m) return false;
    const hy = +m[1], hm = +m[2], hd = +m[3];
    if (hm < 1 || hm > 12 || hd < 1 || hd > daysIn(hy, hm) || hy < YEAR_MIN || hy > YEAR_MAX) return false;
    const n = u.mk(hy, hm, hd);
    if (m[4]) state.view = m[4];
    if (n === state.sel && state.y === +m[1]) return true;
    const c = u.civ(n); state.y = c.y; state.m = c.m;
    select(n, { rerender: true });
    return true;
  }

  // ------------------------------------------------------------------ khởi động
  function init() {
    const fs = parseFloat(store.get('fs')); if (fs) setFont(fs);
    const tr = store.get('tr'); if (TRANSLATIONS.some(t => t.id === tr)) state.tr = tr;
    const v = store.get('view'); if (v === 'year' || v === 'list') state.view = v;
    const c = u.civ(todayN); state.y = c.y; state.m = c.m;
    bind();
    if (!readHash() || !$('#calendar').firstChild) render();
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(() => { /* bỏ qua */ });
    }
  }
  init();

  // Dành cho kiểm thử/gỡ lỗi từ Console
  window.KCal = { state, select, render, P };
})();
