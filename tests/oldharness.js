// Nạp bản cũ (legacy/controller.js hoặc Calendar/js/controller.js) vào Node với DOM giả, để dùng làm "chuẩn đối chiếu".
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = process.env.OLD_ROOT;
const CTRL = process.env.OLD_CONTROLLER || path.join(ROOT, 'js/controller.js');
const noop = () => {};
const elStub = () => new Proxy(function () {}, {
  get: (t, p) => {
    if (p === 'classList') return { add: noop, remove: noop, contains: () => false, toggle: noop };
    if (p === 'style' || p === 'dataset') return {};
    if (p === Symbol.toPrimitive) return () => '';
    if (p === 'querySelectorAll') return () => [];
    if (p === 'querySelector') return () => elStub();
    return noop;
  }, set: () => true, apply: () => elStub()
});
const sandbox = { console, setTimeout, clearTimeout, setInterval: noop, requestAnimationFrame: noop, Intl, Date, Math, JSON, Map, Set, Object, Array, String, Number, parseInt, parseFloat, isNaN, RegExp, Boolean, Error };
sandbox.window = sandbox; sandbox.self = sandbox;
sandbox.localStorage = { getItem: () => null, setItem: noop, removeItem: noop, key: () => null, length: 0 };
sandbox.document = { getElementById: () => elStub(), querySelector: () => elStub(), querySelectorAll: () => [], createElement: () => elStub(), addEventListener: noop, body: elStub(), documentElement: elStub(), readyState: 'complete' };
sandbox.addEventListener = noop; sandbox.matchMedia = () => ({ matches: false, addEventListener: noop, addListener: noop });
sandbox.navigator = { serviceWorker: undefined }; sandbox.location = { href: '' }; sandbox.getComputedStyle = () => ({ getPropertyValue: () => '' });
vm.createContext(sandbox);
const files = ['readingdata.js', 'readings_year_1.js', 'readings_year_2.js', 'Sunday.js', 'DailySeason.js', 'Saints.js', 'SaintsBible.js', 'Optionsaint.js', 'eucharisticAdoration.js', 'meditationLinks.js'].map(f => 'Reading/' + f);
let src = files.map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n;\n') + '\n;\n' + fs.readFileSync(CTRL, 'utf8');
src += `
;globalThis.__old={getLiturgicalData,getLiturgicalDayCode,getLiturgicalCycle,getDayInfo,getDayLiturgicalInfo,getFullReadings,getDetailedLiturgicalWeek,getLiturgicalDiscipline,getVigilInfo,LUNAR_CALENDAR,getEasterDate,FIXED_DATA_LOOKUP,getSundayNumberOfYear};
`;
vm.runInContext(src, sandbox, { filename: 'old-bundle.js' });
module.exports = sandbox.__old;
