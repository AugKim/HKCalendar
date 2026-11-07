// So bài đọc chính (tab đầu) của engine mới với getFullReadings() của bản cũ cho từng ngày.
const path=require('path');
process.env.OLD_ROOT=path.join(__dirname,'..','..','Calendar');
const O=require('./oldharness.js');
const D=require('./load.js')(path.join(__dirname,'..'));
const P=require('../js/engine.js'); P.setSanctoral(D.SAINTS_DATA);
const R=require('../js/readings.js').make(D);
const u=P.util; const Y0=+process.argv[2]||2025, Y1=+process.argv[3]||2028;
const ex=s=>{ if(!s) return ''; if(s.options) return 'OPT:'+s.options.map(o=>ex(o.data)).join('|'); return [s.firstReading&&s.firstReading.excerpt, s.gospel&&s.gospel.excerpt, s.reading1,s.gospel&&typeof s.gospel==='string'?s.gospel:''].filter(Boolean).join(' / '); };
const norm=x=>String(x||'').replace(/\s+/g,'').toLowerCase();
const diffs=[]; let total=0;
for(let y=Y0;y<=Y1;y++){ const ld=O.getLiturgicalData(y);
 for(let n=u.mk(y,1,1);n<=u.mk(y,12,31);n++){ total++;
  const dt=u.toDate(n), i=P.day(n); const od=O.getDayLiturgicalInfo(dt,ld);
  const seasonalCode=String(od.dayCode).startsWith('7')?O.getLiturgicalDayCode(dt,ld,{includeSanctoral:false}):od.dayCode;
  let old; try{ old=O.getFullReadings(seasonalCode,od.sanctoralCode,od.specialCode,dt.getDay(),od.cycle,od.weekdayCycle,od.tetCode, od.vigilInfo||od.vigilEveInfo);}catch(e){continue;}
  const oldSeasonal=old.find(x=>x.type==='seasonal'); const oldS=ex(oldSeasonal&&oldSeasonal.data);
  const b=R.build(i); const nt=b.tabs.find(t=>t.kind==='temporal'); const newS=nt?nt.sets.map(s=>ex(s.data)).join('|'):'';
  if(norm(oldS)!==norm(newS) && !(i.code!==seasonalCode)) diffs.push(i.iso+' '+i.dowName+' code '+i.code+'\n     cũ : '+oldS.slice(0,110)+'\n     mới: '+newS.slice(0,110));
 }}
console.log('so sánh',total,'ngày; khác biệt bài đọc theo mùa (cùng mã):',diffs.length); console.log(diffs.slice(0,+process.argv[4]||25).join('\n'));
