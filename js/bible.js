/*
 * bible.js — Đọc trích dẫn Kinh Thánh kiểu Sách Bài Đọc (ví dụ "Is 63, 16b-17; 64, 1. 3b-8")
 * và lấy các câu tương ứng trong một bản dịch khác (Reading/translation_*.json).
 *
 * Bản dịch dạng: { "<số sách 1-73>": { "<chương>": [ { s: <câu>, c: "<nội dung>" }, ... ] } }
 * Số sách theo thứ tự Reading/books.json (Kinh Thánh Công giáo, 73 sách).
 *
 * Sách Bài Đọc tiếng Việt đánh số câu theo bản Vulgata ở vài chỗ (Thánh vịnh, Mc 9, Ga 6, Mk 5, Ml 4, Ge 3…),
 * còn các bản dịch hiện đại theo bản Híp-ri. Phần QUY ĐỔI bên dưới chuyển về cách đánh số Híp-ri.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Bible = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Chữ viết tắt (viết thường) → số sách. Sách có số đứng trước (1 Cr, 2 Sm…) tra theo "số + chữ".
  const BOOK = {
    'st': 1, 'xh': 2, 'lv': 3, 'ds': 4, 'đnl': 5, 'gs': 6, 'tl': 7, 'judic': 7, 'r': 8, 'rt': 8,
    '1 sm': 9, 'sm': 9, '2 sm': 10, '1 v': 11, 'v': 11, '2 v': 12, '1 sb': 13, 'sb': 13, '2 sb': 14,
    'er': 15, 'esd': 15, 'nkm': 16, 'tb': 17, 'tob': 17, 'gđt': 18, 'gdt': 18, 'et': 19, 'est': 19,
    '1 mcb': 20, '2 mcb': 21, 'g': 22, 'gb': 22, 'tv': 23, 'cn': 24, 'gv': 25, 'dc': 26, 'kn': 27, 'hc': 28,
    'is': 29, 'gr': 30, 'ac': 31, 'br': 32, 'ed': 33, 'đn': 34, 'hs': 35, 'ge': 36, 'am': 37, 'ôv': 38, 'ov': 38,
    'gn': 39, 'mk': 40, 'nk': 41, 'kb': 42, 'xp': 43, 'kg': 44, 'dcr': 45, 'ml': 46,
    'mt': 47, 'mc': 48, 'lc': 49, 'ga': 50, 'jo': 50, 'cv': 51, 'rm': 52,
    '1 cr': 53, 'cr': 53, '1 cor': 53, '2 cr': 54, '2 cor': 54, 'gl': 55, 'ep': 56, 'pl': 57, 'cl': 58,
    '1 tx': 59, '2 tx': 60, 'tx': 60, '1 tm': 61, '2 tm': 62, 'tt': 63, 'plm': 64, 'dt': 65, 'hr': 65,
    'gc': 66, '1 pr': 67, '2 pr': 68, '1 ga': 69, '2 ga': 70, '3 ga': 71, 'gđ': 72, 'kh': 73
  };
  const SINGLE_CHAPTER = new Set([38, 64, 70, 71, 72]);   // Ô-va-đi-a, Phi-lê-môn, 2 Ga, 3 Ga, Giu-đa

  const norm = s => String(s == null ? '' : s).replace(/Ð/g, 'Đ').replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim();

  // Các trích dẫn đánh số theo Vulgata mà dữ liệu không ghi kèm số Híp-ri → ghi rõ số tương ứng.
  const OVERRIDE = {
    'Ga 6, 41-52': 'Ga 6, 41-51', 'Ga 6, 51-59': 'Ga 6, 51-58', 'Ga 6, 61-70': 'Ga 6, 60-69',
    'Mc 9, 1-9': 'Mc 9, 2-10', 'Mc 9, 1-12': 'Mc 9, 2-13', 'Mc 9, 29-36': 'Mc 9, 30-37',
    'Mc 9, 37-42. 44. 46-47': 'Mc 9, 38-43. 45. 47-48',
    'Mk 5, 2-5a': 'Mk 5, 1-4a', 'Ml 4, 1-2a': 'Ml 3, 19-20a', 'Ml 3, 13 – 4, 2a': 'Ml 3, 13-20a',
    'Ge 3, 12-21': 'Ge 4, 12-21', 'Nk 1, 15; 2, 2; 3, 1-3. 6-7': 'Nk 2, 1. 3; 3, 1-3. 6-7',
    'Hs 2, 14. 15-16. 19-20': 'Hs 2, 16. 17-18. 21-22', 'Hs 2, 14b. 15b. 19-20': 'Hs 2, 16. 17. 21-22',
    'Dcr 2, 1-5. 10-11a': 'Dcr 2, 5-9. 14-15a', 'Is 9, 2-4. 6-7': 'Is 9, 1-3. 5-6'
  };

  const OVR = {};
  Object.keys(OVERRIDE).forEach(k => { OVR[norm(k)] = OVERRIDE[k]; });

  // Thánh vịnh: số Vulgata (Sách Bài Đọc) → số Híp-ri. Số câu trong Sách Bài Đọc đã theo Híp-ri.
  function psalm(ch, v) {
    if (ch <= 8 || ch >= 148) return [ch, v];
    if (ch === 9) return v <= 21 ? [9, v] : [10, v - 21];
    if (ch <= 112) return [ch + 1, v];
    if (ch === 113) return v <= 8 ? [114, v] : [115, v - 8];
    if (ch === 114 || ch === 115) return [116, v];
    if (ch <= 145) return [ch + 1, v];
    return [147, v];                                         // 146, 147
  }

  /**
   * Trả về { book, psalm, parts: [{ch, v1, ch2, v2}] } hoặc null nếu không đọc được.
   * opts.hebrew: số Thánh vịnh đã theo Híp-ri (trích dẫn tóm tắt trong readingdata.js); mặc định theo Vulgata (các file toàn văn).
   */
  function parse(cite, opts) {
    let s = norm(cite);
    if (/\((?:A|B|C)\)/.test(s)) return null;                 // nhiều lựa chọn theo năm A/B/C trong một dòng
    s = s.replace(/^\s*\([^)]*\)\s*/, '');                    // "(Năm I) …"
    if (OVR[s]) s = norm(OVR[s]);
    s = s.replace(/(Tv\.?\s*)113A\b/i, '$1113 (114)').replace(/(Tv\.?\s*)113B\b/i, '$1113 (115)');  // Tân Vulgata chia đôi Tv 113
    const alt = s.match(/\((?:Hr|Gr|Hl)\s+([^)]*)\)/);         // số chuẩn ghi kèm trong ngoặc
    const plainPs = s.match(/^(.*?Tv\.?\s*)\d+\s*\((\d+)\)/i); // "Tv 86 (87) 1-2…"
    s = s.replace(/\{[^}]*\}/g, ' ').replace(/\[[^\]]*\]/g, ' ');
    while (/\([^()]*\)/.test(s)) s = s.replace(/\([^()]*\)/g, ' ');
    s = s.replace(/[()]/g, ' ').replace(/\s+hoặc\s[\s\S]*$/i, '');  // "… hoặc Mt 8, 23-27": lấy lựa chọn đầu
    const m = s.match(/^\s*(.*?)([A-Za-zÀ-ỹĐđ]+)\.?\s*(\d[\s\S]*)$/);
    if (!m) return null;
    const pre = (m[1].match(/[1-3]\s*$/) || [''])[0].trim();
    const abbr = m[2].toLowerCase();
    const book = BOOK[(pre ? pre + ' ' : '') + abbr] || BOOK[abbr];
    if (!book) return null;
    const isPs = book === 23 && !plainPs && !(opts && opts.hebrew);                  // "Tv 86 (87)": số trong ngoặc đã là số Híp-ri
    let rest = m[3];
    if (plainPs) rest = rest.replace(/^\d+/, '');
    rest = rest.replace(/[.,]?\s*(?:Tv|TV)\.?\s+(?=\d)/g, '; ')       // "Tv 41, 2. 3, và Tv 42, 3. 4"
      .replace(/,?\s*và\s*/g, '. ').replace(/(\d)[a-z]+/g, '$1').replace(/(^|[.,\s])[a-z]+(?=[.,\s]|$)/g, '$1')
      .replace(/^(\d+)\s*:\s*/, '$1, ').replace(/^(\d+)\s+(?=\d)/, '$1, ')
      .replace(/[.;,:\s]+$/, '').trim();
    if (plainPs) rest = plainPs[2] + ', ' + rest.replace(/^[,\s]+/, '');
    if (alt) {
      const a = alt[1].replace(/(\d)[a-z]+/g, '$1');
      rest = /,/.test(a) ? a : (rest.match(/^\d+/) || [''])[0] + ', ' + a;
    }
    // "14, 1 - 15. 47" (dấu chấm thay dấu phẩy ở bài Thương Khó)
    rest = rest.replace(/^(\d+),\s*(\d+)\s+-\s+(\d+)\.\s*(\d+)$/, (x, c, a, b, d) => (+b === +c + 1 ? c + ', ' + a + ' - ' + b + ', ' + d : x));
    rest = rest.replace(/(\d)\s+(?=\d)/g, '$1. ');            // "3 4" thiếu dấu phân cách

    const parts = [];
    let lastCh = null;
    const groups = SINGLE_CHAPTER.has(book) ? ['1, ' + rest] : rest.split(';');
    for (let g of groups) {
      g = g.trim().replace(/^[A-Za-zÀ-ỹĐđ]+\.?\s+/, '');      // "; Tv 42, 3" nhắc lại tên sách
      if (!g) continue;
      let ch, spec;
      const gm = g.match(/^(\d+)\s*,\s*([\s\S]*)$/);
      if (gm) { ch = +gm[1]; spec = gm[2]; } else if (/^\d+$/.test(g) && lastCh === null) { ch = +g; spec = ''; } else if (lastCh) { ch = lastCh; spec = g; } else return null;
      if (!spec.trim()) { parts.push({ ch, v1: 1, ch2: ch, v2: 999 }); lastCh = ch; continue; }
      for (let p of spec.split('.')) {
        p = p.trim(); if (!p) continue;
        const cross = p.match(/^(\d+)\s*-\s*(\d+)\s*,\s*(\d+)$/);
        if (cross && +cross[2] > ch && +cross[2] <= ch + 2) { parts.push({ ch, v1: +cross[1], ch2: +cross[2], v2: +cross[3] }); ch = +cross[2]; continue; }
        for (let q of p.split(',')) {
          q = q.trim(); if (!q) continue;
          const r = q.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
          if (!r) return null;
          const v1 = +r[1], v2 = r[2] ? +r[2] : v1;
          if (v2 < v1) return null;
          parts.push({ ch, v1, ch2: ch, v2 });
        }
      }
      lastCh = ch;
    }
    return parts.length ? { book, psalm: isPs, parts } : null;
  }

  /**
   * Lấy các câu trong bản dịch T. Trả về { ok, stanzas: [[{ch, v, text}]] } — mỗi đoạn trích (ngăn bởi dấu chấm) là một khổ.
   * ok = false khi không đọc được trích dẫn, sách không có trong bản dịch, hoặc không tìm thấy câu nào.
   */
  function lookup(T, cite, opts) {
    const p = parse(cite, opts);
    if (!p) return { ok: false, reason: 'cite' };
    const B = T && T[String(p.book)];
    if (!B) return { ok: false, reason: 'book', book: p.book };
    const stanzas = [];
    for (const part of p.parts) {
      const out = [];
      for (let c = part.ch; c <= part.ch2; c++) {
        const from = c === part.ch ? part.v1 : 1, to = c === part.ch2 ? part.v2 : 999;
        for (let v = from; v <= to; v++) {
          const [hc, hv] = p.psalm ? psalm(c, v) : [c, v];
          const verse = (B[String(hc)] || []).find(x => x.s === hv);
          if (verse && verse.c && verse.c.trim()) out.push({ ch: hc, v: hv, text: verse.c.trim() });
          else if (to === 999 && !(B[String(hc)] || []).some(x => x.s > hv)) break;
        }
      }
      if (out.length) stanzas.push(out);
    }
    if (!stanzas.length) return { ok: false, reason: 'verses' };
    return { ok: true, stanzas, book: p.book };
  }

  /** Các phương án của một trích dẫn: bản chính và các bản "{hoặc …}", "[hoặc …]", "(… hoặc …)". */
  function variants(cite) {
    const s = norm(cite), out = [s];
    const head = s.replace(/^\s*\([^)]*\)\s*/, '').match(/^\s*((?:[1-3]\s*)?[A-Za-zÀ-ỹĐđ]+\.?)\s*(\d+)/);
    const re = /[{\[(][^{}\[\]()]*?hoặc\s+([^{}\[\]()]+)[}\])]/gi;
    let m;
    while ((m = re.exec(s)) && head) {
      let alt = m[1].trim().replace(/[.;\s]+$/, '');
      const am = alt.match(/^((?:[1-3]\s*)?[A-Za-zÀ-ỹĐđ]+\.?)\s*([\s\S]*)$/);
      if (am) alt = /,/.test(am[2]) ? alt : am[1] + ' ' + head[2] + ', ' + am[2];   // "Lc 1-12…" thiếu số chương
      else alt = /^\d+\s*,/.test(alt) ? head[1] + ' ' + alt : head[1] + ' ' + head[2] + ', ' + alt;
      out.push(alt);
    }
    return out;
  }

  /**
   * Như lookup(), nhưng nếu trích dẫn có bản dài/ngắn thì chọn bản có độ dài gần với bản văn tiếng Việt refText nhất.
   * RATIO: số chữ tiếng Việt / số chữ bản dịch (đo trên dữ liệu hiện có ≈ 1,2).
   */
  const RATIO = 1.19;
  function lookupBest(T, cite, opts, refText) {
    const vs = variants(cite);
    if (vs.length === 1 || !refText) return lookup(T, vs[0], opts);
    const ref = String(refText).split(/\s+/).length / RATIO;
    let best = null, bestScore = Infinity;
    for (const v of vs) {
      const r = lookup(T, v, opts);
      if (!r.ok) continue;
      const n = r.stanzas.reduce((a, st) => a + st.reduce((b, x) => b + x.text.split(/\s+/).length, 0), 0);
      const score = Math.abs(Math.log(n / ref));
      if (score < bestScore) { best = r; bestScore = score; }
    }
    return best || lookup(T, vs[0], opts);
  }

  return { parse, lookup, lookupBest, variants, psalm, BOOK };
});
