const V = 'kcal-v7';
const SHELL = ['./', 'index.html', 'css/app.css', 'js/lunar.js', 'js/engine.js', 'js/readings.js', 'js/app.js', 'Reading/Saints.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];
// Dữ liệu bài đọc (~1MB sau nén): tải sẵn khi cài để dùng offline ngay lần đầu.
const DATA = ['Reading/readingdata.js', 'Reading/meditationLinks.js', 'Reading/eucharisticAdoration.js', 'Reading/Sunday.js', 'Reading/DailySeason.js', 'Reading/readings_year_1.js', 'Reading/readings_year_2.js', 'Reading/SaintsBible.js', 'Reading/Optionsaint.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => Promise.all(SHELL.concat(DATA).map(u => fetch(new Request(u, { cache: 'reload' })).then(r => r.ok && c.put(u, r)).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Ưu tiên mạng (luôn lấy bản mới khi online), rơi về cache khi offline.
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) {
    if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) e.respondWith(caches.open(V).then(c => c.match(r).then(m => m || fetch(r).then(x => { c.put(r, x.clone()); return x; }).catch(() => m))));
    return;
  }
  e.respondWith(caches.open(V).then(c => fetch(r, { cache: 'no-cache' }).then(x => { if (x.ok) c.put(r, x.clone()); return x; }).catch(() => c.match(r, { ignoreSearch: true }))));
});
