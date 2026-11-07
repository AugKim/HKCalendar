// Kiểm thử giao diện trên trình duyệt thật (Playwright): mở popup từng ngày, kiểm bài đọc, lỗi console.
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8123/index.html';
const Y = +process.argv[2] || 2026;
(async () => {
  const b = await chromium.launch(); const c = await b.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await c.newPage(); const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/ERR_TUNNEL|fonts\.g/.test(m.text())) errs.push('console: ' + m.text()); });
  p.on('requestfailed', r => { if (!/fonts\.g/.test(r.url())) errs.push('requestfailed: ' + r.url()); });
  p.on('response', r => { if (r.status() >= 400 && !/fonts\.g/.test(r.url())) errs.push(r.status() + ' ' + r.url()); });
  await p.goto(BASE + '#' + Y + '-01-01'); await p.waitForTimeout(1200);
  const res = await p.evaluate(async (Y) => {
    const u = KCal.P.util, out = { days: 0, noBlock: [], missNote: [], empty: [], slow: [] };
    const wait = ms => new Promise(r => setTimeout(r, ms));
    for (let n = u.mk(Y, 1, 1); n <= u.mk(Y, 12, 31); n++) {
      KCal.select(n, { open: true });
      let el = null, t = 0;
      for (; t < 80; t++) { await wait(15); el = document.querySelector('#readings'); if (el && !el.querySelector('.rd-loading')) break; }
      out.days++;
      const iso = u.iso(n);
      if (t >= 79) { out.slow.push(iso); continue; }
      const blocks = el.querySelectorAll('.rd-block').length, miss = el.querySelector('.rd-miss'), refs = el.querySelector('.refs');
      if (!blocks && !refs) out.noBlock.push(iso + ' ' + (miss ? miss.textContent.slice(0, 50) : '(trống)'));
      else if (miss) out.missNote.push(iso);
      const title = document.querySelector('#detail .d-title'); if (!title || !title.textContent.trim()) out.empty.push(iso);
      // nội dung rác
      if (/undefined|NaN|\[object/.test(document.querySelector('#detail').innerText)) out.empty.push(iso + ' chứa undefined/NaN');
    }
    return out;
  }, Y);
  console.log(`E2E ${Y}: ${res.days} ngày | không có bài đọc: ${res.noBlock.length} | chỉ có trích dẫn: ${res.missNote.length} | tiêu đề/nội dung lỗi: ${res.empty.length} | chậm: ${res.slow.length}`);
  ['noBlock', 'empty', 'slow', 'missNote'].forEach(k => res[k].slice(0, 15).forEach(x => console.log(' -', k, x)));
  console.log(errs.length ? 'LỖI TRÌNH DUYỆT:\n' + [...new Set(errs)].slice(0, 20).join('\n') : 'Không có lỗi console/mạng.');
  await b.close();
})();
