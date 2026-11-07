const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8123/index.html';
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, serviceWorkers: 'allow' });
  const p = await ctx.newPage(); const errs = []; const log = (ok, m) => console.log((ok ? 'PASS ' : 'FAIL ') + m);
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error' && !/ERR_TUNNEL|fonts\.g|Failed to load resource/.test(m.text())) errs.push(m.text()); });
  for (const h of ['', '#abc', '#2026-13-45', '#1800-02-30', '#2026-02-30/year', '#9999-01-01']) {
    await p.goto(BASE + h); await p.waitForTimeout(500);
    const t = await p.textContent('#periodTitle'); log(!!t && !/NaN|undefined/.test(t), `hash "${h}" → "${t}"`);
  }
  await p.goto(BASE + '#2026-11-02'); await p.waitForTimeout(800);
  // chuyển chế độ
  for (const v of ['year', 'list', 'month']) { await p.click(`#viewSwitch [data-view="${v}"]`); await p.waitForTimeout(200); log(await p.locator('#calendar *').count() > 20, 'chế độ ' + v); }
  // điều hướng tháng, qua năm
  await p.click('#nextPeriod'); await p.click('#nextPeriod'); await p.click('#nextPeriod'); await p.waitForTimeout(200);
  log((await p.textContent('#periodTitle')).includes('2027'), 'sang năm khi bấm › : ' + await p.textContent('#periodTitle'));
  await p.click('#btnToday'); await p.waitForTimeout(200); log((await p.textContent('#periodTitle')).includes('2026'), 'nút Hôm nay');
  // bàn phím
  await p.locator('.day[aria-pressed="true"]').focus(); await p.keyboard.press('ArrowRight'); await p.keyboard.press('ArrowDown'); await p.waitForTimeout(200);
  log((await p.locator('#peek .pk-date b').textContent()) === String(await p.evaluate(() => KCal.P.util.civ(KCal.state.sel).d)), 'phím mũi tên: ' + await p.locator('#peek .pk-date b').textContent());
  await p.keyboard.press('PageDown'); await p.waitForTimeout(200); log((await p.textContent('#periodTitle')).includes('12'), 'PageDown: ' + await p.textContent('#periodTitle'));
  // popup mở/đóng
  await p.click('#peekOpen'); await p.waitForTimeout(600); log(await p.locator('#detail').isVisible(), 'mở popup');
  await p.keyboard.press('Escape'); await p.waitForTimeout(200); log(!(await p.locator('#detail').isVisible()), 'Esc đóng popup');
  await p.dblclick('.day:not(.out) >> nth=5'); await p.waitForTimeout(500); log(await p.locator('#detail').isVisible(), 'nhấp đúp mở popup');
  await p.click('#scrim', { position: { x: 5, y: 5 } }); await p.waitForTimeout(200); log(!(await p.locator('#detail').isVisible()), 'bấm nền đóng popup');
  // tiện ích
  await p.click('#fontInc'); await p.click('#fontInc'); const fs = await p.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--fs').trim()); log(parseFloat(fs) > 1.1, 'tăng cỡ chữ --fs=' + fs);
  await p.click('#btnTheme'); const th = await p.evaluate(() => document.documentElement.dataset.theme); log(!!th, 'đổi giao diện → ' + th);
  await p.fill('#jumpDate', '2027-02-06'); await p.waitForTimeout(400); log((await p.locator('#peek h2').textContent()).includes('Tết'), 'nhảy tới 6/2/2027: ' + await p.locator('#peek h2').textContent());
  // xuất JSON
  await p.click('#btnExport'); await p.waitForTimeout(300);
  const [dl] = await Promise.all([p.waitForEvent('download', { timeout: 15000 }).catch(() => null), p.click('#exJson')]);
  if (dl) { const path = await dl.path(); const j = JSON.parse(require('fs').readFileSync(path, 'utf8')); log(j.thang && j.thang[0].ngay.length >= 28, `xuất JSON ${dl.suggestedFilename()} (${j.thang[0].ngay.length} ngày, có amLich=${!!j.thang[0].ngay[0].amLich})`); } else log(false, 'xuất JSON không tải được');
  // xuất JSON năm + toàn văn
  await p.click('#btnExport'); await p.check('input[name=range][value=year]'); await p.check('#exText');
  const [dl2] = await Promise.all([p.waitForEvent('download', { timeout: 60000 }).catch(() => null), p.click('#exJson')]);
  if (dl2) { const t = require('fs').readFileSync(await dl2.path(), 'utf8'); const j = JSON.parse(t); const n = j.thang.reduce((a, m) => a + m.ngay.length, 0); const withText = j.thang.flatMap(m => m.ngay).filter(d => d.baiDoc && d.baiDoc.some(x => x.noiDung)).length; log(n >= 365 && withText > 340, `xuất cả năm toàn văn: ${n} ngày, ${withText} ngày có văn bản, ${(t.length / 1e6).toFixed(1)}MB`); } else log(false, 'xuất năm thất bại');
  // PDF (cửa sổ in)
  await p.click('#btnExport'); await p.check('input[name=range][value=month]');
  const [pop] = await Promise.all([p.waitForEvent('popup', { timeout: 8000 }).catch(() => null), p.click('#exPdf')]);
  log(!!pop, 'cửa sổ in/PDF mở' + (pop ? ' (' + (await pop.content()).length + ' byte)' : ''));
  // offline
  await p.goto(BASE + '#2026-12-25'); await p.waitForTimeout(2500);
  const sw = await p.evaluate(async () => (await navigator.serviceWorker.getRegistration()) ? 'có' : 'không'); log(sw === 'có', 'service worker đã đăng ký');
  await p.evaluate(() => KCal.select(KCal.P.util.mk(2026, 12, 25), { open: true })); await p.waitForTimeout(1200);
  await ctx.setOffline(true); await p.reload(); await p.waitForTimeout(1800);
  log((await p.locator('#calendar .day').count()) > 20, 'offline: trang vẫn tải');
  await p.evaluate(() => KCal.select(KCal.P.util.mk(2026, 12, 25), { open: true })); await p.waitForTimeout(1200);
  const rd = await p.locator('#readings .rd-block').count(); log(rd > 0, 'offline: bài đọc ngày đã xem hiển thị (' + rd + ' khối)');
  await p.evaluate(() => KCal.select(KCal.P.util.mk(2026, 3, 11), { open: true })); await p.waitForTimeout(1500);
  const rd2 = await p.locator('#readings .rd-block, #readings .refs').count(); const msg = await p.locator('#readings').innerText();
  log(rd2 > 0, 'offline: ngày chưa xem → ' + (rd2 > 0 ? 'có dữ liệu' : msg.slice(0, 70)));
  console.log(errs.length ? 'LỖI: ' + [...new Set(errs)].join(' || ') : 'Không có lỗi JS.');
  await b.close();
})();
