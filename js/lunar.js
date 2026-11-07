/*
 * lunar.js — Âm lịch Việt Nam (múi giờ +7), thuật toán Hồ Ngọc Đức.
 * Dùng được cả trong trình duyệt (window.Lunar) lẫn Node (module.exports).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Lunar = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const PI = Math.PI;
  const TZ = 7;

  function jdFromDate(dd, mm, yy) {
    const a = Math.floor((14 - mm) / 12);
    const y = yy + 4800 - a;
    const m = mm + 12 * a - 3;
    let jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    if (jd < 2299161) jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
    return jd;
  }

  function newMoonDay(k, tz) {
    const T = k / 1236.85, T2 = T * T, T3 = T2 * T, dr = PI / 180;
    let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
    const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
    const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
    const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
    let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
    C1 -= 0.4068 * Math.sin(Mpr * dr);
    C1 += 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 -= 0.0004 * Math.sin(dr * 3 * Mpr);
    C1 += 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
    C1 += -0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
    C1 += -0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
    C1 += 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
    const dt = T < -11
      ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
      : -0.000278 + 0.000265 * T + 0.000262 * T2;
    return Math.floor(Jd1 + C1 - dt + 0.5 + tz / 24);
  }

  function sunLongitude(jdn, tz) {
    const T = (jdn - 2451545.5 - tz / 24) / 36525, T2 = T * T, dr = PI / 180;
    const M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    let DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);
    let L = (L0 + DL) * dr;
    L -= PI * 2 * Math.floor(L / (PI * 2));
    return Math.floor(L / PI * 6);
  }

  function lunarMonth11(yy, tz) {
    const off = jdFromDate(31, 12, yy) - 2415021;
    const k = Math.floor(off / 29.530588853);
    let nm = newMoonDay(k, tz);
    if (sunLongitude(nm, tz) >= 9) nm = newMoonDay(k - 1, tz);
    return nm;
  }

  function leapMonthOffset(a11, tz) {
    const k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    let last = 0, i = 1;
    let arc = sunLongitude(newMoonDay(k + i, tz), tz);
    do { last = arc; i++; arc = sunLongitude(newMoonDay(k + i, tz), tz); } while (arc !== last && i < 14);
    return i - 1;
  }

  function solarToLunar(dd, mm, yy) {
    const dayNumber = jdFromDate(dd, mm, yy);
    let k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
    // Ước lượng k theo trăng trung bình có thể lệch ±1: dò lại để monthStart là ngày sóc gần nhất không sau dayNumber.
    while (newMoonDay(k + 1, TZ) <= dayNumber) k++;
    while (newMoonDay(k, TZ) > dayNumber) k--;
    const monthStart = newMoonDay(k, TZ);
    let a11 = lunarMonth11(yy, TZ), b11 = a11, lunarYear;
    if (a11 >= monthStart) { lunarYear = yy; a11 = lunarMonth11(yy - 1, TZ); }
    else { lunarYear = yy + 1; b11 = lunarMonth11(yy + 1, TZ); }
    const lunarDay = dayNumber - monthStart + 1;
    const diff = Math.floor((monthStart - a11) / 29);
    let leap = 0, lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
      const lm = leapMonthOffset(a11, TZ);
      if (diff >= lm) { lunarMonth = diff + 10; if (diff === lm) leap = 1; }
    }
    if (lunarMonth > 12) lunarMonth -= 12;
    if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
    return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: leap };
  }

  const cache = new Map();
  /** Âm lịch của ngày dương (y, m 1-12, d). */
  function get(y, m, d) {
    const key = y * 10000 + m * 100 + d;
    let v = cache.get(key);
    if (!v) { v = solarToLunar(d, m, y); cache.set(key, v); }
    return v;
  }

  const MONTH_NAMES = ['Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Một', 'Chạp'];
  const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  function yearName(ly) { return CAN[(ly + 6) % 10] + ' ' + CHI[(ly + 8) % 12]; }
  function monthName(m, leap) { return (leap ? 'nhuận ' : '') + 'tháng ' + MONTH_NAMES[m - 1].toLowerCase(); }

  return { get: get, solarToLunar: solarToLunar, yearName: yearName, monthName: monthName, MONTH_NAMES: MONTH_NAMES };
});
