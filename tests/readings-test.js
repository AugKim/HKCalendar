const path=require('path');
const D=require('./load.js')(path.join(__dirname,'..'));
const P=require('../js/engine.js'); P.setSanctoral(D.SAINTS_DATA);
const R=require('../js/readings.js').make(D);
const u=P.util;
const Y0=+process.argv[2]||2025, Y1=+process.argv[3]||2032;
let total=0, none=[], summaryOnly=[], noFirstFull=[];
const ex=s=>s&&s.firstReading&&s.firstReading.excerpt||s&&s.gospel&&s.gospel.excerpt;
for(let n=u.mk(Y0,1,1);n<=u.mk(Y1,12,31);n++){
  const i=P.day(n); total++;
  const b=R.build(i);
  if(!b.tabs.length){ none.push(i.iso+' '+i.dowName+' code '+i.code+' '+i.primary.name); continue; }
  if(!b.tabs[0].full) summaryOnly.push(i.iso+' '+i.dowName+' code '+i.code+' tab0='+b.tabs[0].kind+' | '+i.primary.name);
}
console.log('ngày:',total,'| không có bài đọc:',none.length,'| tab đầu chỉ có trích dẫn:',summaryOnly.length);
console.log(none.slice(0,30).join('\n')); console.log('--- summary only'); console.log(summaryOnly.slice(0,60).join('\n'));
