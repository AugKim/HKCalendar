// Nạp dữ liệu Reading/*.js vào Node (các file là script trình duyệt dùng const/window).
const fs = require('fs'), path = require('path'), vm = require('vm');
module.exports = function loadData(root) {
  const R = path.join(root, 'Reading');
  const sandbox = { window: {}, console };
  sandbox.window = sandbox; vm.createContext(sandbox);
  const files = ['readingdata.js','readings_year_1.js','readings_year_2.js','Sunday.js','DailySeason.js','Saints.js','SaintsBible.js','Optionsaint.js','eucharisticAdoration.js','meditationLinks.js'];
  const names = ['READINGS_DATA','READINGS_SUNDAY','READINGS_SEASONAL','READINGS_ORDINARY_Y1','READINGS_ORDINARY_Y2','READINGS_SPECIAL','SAINTS_DATA','OptionsaintReadings','eucharisticAdoration','MEDITATION_LINKS','MEDITATION_BY_CODE'];
  let src = files.map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n;\n');
  src += '\n;' + names.map(n => `globalThis.__${n}=typeof ${n}!=='undefined'?${n}:(window.${n});`).join('');
  vm.runInContext(src, sandbox);
  const out = {}; names.forEach(n => out[n] = sandbox['__' + n]);
  return out;
};
