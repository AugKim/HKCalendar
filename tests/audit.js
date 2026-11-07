// Kiểm tra bất biến của engine + bài đọc trên nhiều năm. Chạy: node tests/audit.js [từ] [đến]
const path = require('path');
const D = require('./load.js')(path.join(__dirname, '..'));
const P = require('../js/engine.js'); P.setSanctoral(D.SAINTS_DATA);
const R = require('../js/readings.js').make(D);
const L = require('../js/lunar.js');
const u = P.util;
const Y0 = +process.argv[2] || 1990, Y1 = +process.argv[3] || 2100;
const errs = []; const bad = (m) => { if (errs.length < 80) errs.push(m); errs.total = (errs.total || 0) + 1; };
const EASTER = { 2000: '4-23', 2010: '4-4', 2019: '4-21', 2020: '4-12', 2021: '4-4', 2022: '4-17', 2023: '4-9', 2024: '3-31', 2025: '4-20', 2026: '4-5', 2027: '3-28', 2028: '4-16', 2029: '4-1', 2030: '4-21', 2031: '4-13', 2032: '3-28', 2035: '3-25', 2038: '4-25' };
const TET = { 2020: '1-25', 2021: '2-12', 2022: '2-1', 2023: '1-22', 2024: '2-10', 2025: '1-29', 2026: '2-17', 2027: '2-6', 2028: '1-26', 2029: '2-13', 2030: '2-2', 2031: '1-23', 2032: '2-11', 2033: '1-31' };
let days = 0, t0 = Date.now();
for (let y = Y0; y <= Y1; y++) {
  const yd = P.yearData ? null : null;
  let easter = null, ash = null, pent = null, adv = null, xmas = null;
  const cnt = { sunTriduum: 0 };
  for (let n = u.mk(y, 1, 1); n <= u.mk(y, 12, 31); n++) {
    days++;
    let i;
    try { i = P.day(n); } catch (e) { bad(y + ' ' + u.iso(n) + ' EXCEPTION ' + e.message); continue; }
    const p = i.primary;
    if (!p || !p.name || /undefined|NaN|\[object/.test(p.name)) bad(i.iso + ' tên lạ: ' + (p && p.name));
    if (!['green', 'white', 'red', 'purple', 'rose'].includes(p.color)) bad(i.iso + ' màu lạ: ' + p.color);
    if (i.dow !== (new Date(Date.UTC(i.y, i.m - 1, i.d)).getUTCDay())) bad(i.iso + ' sai thứ');
    if (i.sunday !== (i.dow === 0)) bad(i.iso + ' sunday flag');
    if (!i.week || !/\S/.test(i.week)) bad(i.iso + ' thiếu tuần');
    if (!['A', 'B', 'C'].includes(i.cycle)) bad(i.iso + ' chu kỳ ' + i.cycle);
    if (i.code == null || i.code === '') bad(i.iso + ' thiếu mã bài đọc');
    const lu = L.get(i.y, i.m, i.d);
    if (!(lu.day >= 1 && lu.day <= 30 && lu.month >= 1 && lu.month <= 12)) bad(i.iso + ' âm lịch lạ');
    // Chúa Nhật luôn là Chúa Nhật hoặc lễ trọng/lễ Chúa
    if (i.dow === 0 && p.rank > 6) bad(i.iso + ' Chúa Nhật bị cử hành bậc thấp: ' + p.name);
    // Chúa Nhật Mùa Vọng/Chay/Phục Sinh không bị lễ nhớ/kính thay
    if (i.dow === 0 && ['advent', 'lent', 'easter'].includes(i.season) && p.rank > 3 && p.rank !== 1 && p.kind !== 'temporal') bad(i.iso + ' Chúa Nhật mùa bị thay: ' + p.name);
    if (/Phục Sinh/.test(p.name) && i.dow === 0 && p.rank === 1 && !easter) easter = n;
    if (!ash && /Thứ Tư Lễ Tro/i.test(p.name)) ash = n;
    if (p.name === 'Thứ Tư Lễ Tro' || /^Thứ Tư Lễ Tro/.test(p.name)) ash = ash || n;
    if (n === u.mk(y, 12, 25) && !/Giáng Sinh/.test(p.name)) bad(i.iso + ' 25/12 không phải Giáng Sinh: ' + p.name);
    if (n === u.mk(y, 8, 15) && !/Lên Trời/.test(p.name)) bad(i.iso + ' 15/8: ' + p.name);
    if (n === u.mk(y, 11, 1) && !/Các Thánh/.test(p.name) && !i.tet.day) bad(i.iso + ' 1/11: ' + p.name);
    if (n === u.mk(y, 12, 8) && i.dow !== 0 && !/Vô Nhiễm/.test(p.name)) bad(i.iso + ' 8/12: ' + p.name);
    if (i.dow === 0 && n === u.mk(y, 12, 8)) { /* chuyển sang thứ Hai 9/12 */ }
    // bài đọc: phải có tab, có nội dung hoặc trích dẫn
    let b; try { b = R.build(i); } catch (e) { bad(i.iso + ' readings EXCEPTION ' + e.message); continue; }
    if (!b.tabs.length) bad(i.iso + ' không có bài đọc (' + p.name + ' code ' + i.code + ')');
    else {
      const t0t = b.tabs[0], sets = t0t.sets;
      sets.forEach(s => { const d = s.data; if (!d) return; if (!(d.firstReading || d.gospel || d.psalms)) bad(i.iso + ' bộ bài đọc rỗng ' + t0t.id); });
    }
    // Tết & kỷ luật
    if (i.discipline.some(x => x.type === 'fast') && !(n === P.day(n).ashDay || /Tro|Thương Khó/.test(p.name) || /Tro/.test(i.temporal.name))) { /* chấp nhận Thứ Sáu Tuần Thánh / Lễ Tro */ }
  }
}
// Phục Sinh & Tết đã biết
for (const [y, md] of Object.entries(EASTER)) {
  const [m, d] = md.split('-').map(Number); const i = P.day(u.mk(+y, m, d));
  if (!/Phục Sinh/.test(i.primary.name) || i.dow !== 0) bad('Phục Sinh ' + y + ' không ở ' + md + ': ' + i.primary.name);
  const ashN = u.mk(+y, m, d) - 46, ai = P.day(ashN);
  const ashNote = /Tro/.test(ai.primary.name) || /Tro/.test(ai.temporal.name) || ai.ashTransferred;
  if (!ashNote) bad('Thứ Tư Lễ Tro ' + y + ' ' + u.iso(ashN) + ' = ' + ai.primary.name);
  const pi = P.day(u.mk(+y, m, d) + 49); if (!/hiện xuống/i.test(pi.primary.name)) bad('Hiện Xuống ' + y + ': ' + pi.primary.name);
  const ai2 = P.day(u.mk(+y, m, d) + 42); // CN VII PS (Thăng Thiên)
  if (!/Thăng Thiên/.test(ai2.primary.name)) bad('Thăng Thiên ' + y + ' ' + ai2.iso + ': ' + ai2.primary.name);
}
for (const [y, md] of Object.entries(TET)) {
  const [m, d] = md.split('-').map(Number); const i = P.day(u.mk(+y, m, d));
  if (!(i.tet && i.tet.day === 1) || !(i.lunar.day === 1 && i.lunar.month === 1)) bad('Tết ' + y + ' không ở ' + md + ' (âm ' + i.lunar.label + ')');
  const e = P.day(u.mk(+y, m, d) - 1); if (!(e.lunar.day >= 29 && e.lunar.month === 12) && !e.tet.eve) bad('Giao thừa ' + y + ': ' + e.lunar.label);
}
console.log(`Đã kiểm ${days} ngày (${Y0}–${Y1}) trong ${((Date.now() - t0) / 1000).toFixed(1)}s. Lỗi: ${errs.total || 0}`);
errs.forEach(e => console.log(' -', e));
