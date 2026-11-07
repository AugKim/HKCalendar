const path=require('path'); const load=require('./load.js'); const D=load(path.join(__dirname,'..'));
const P=require('../js/engine.js'); P.setSanctoral(D.SAINTS_DATA);
const u=P.util;
const list=process.argv.slice(2).map(s=>s.split('-').map(Number));
for (const [y,m,d] of list) { const i=P.day(u.mk(y,m,d));
 console.log(i.iso, i.dowName, '|', i.primary.name, '|', i.primary.gradeLabel, i.primary.color+(i.primary.altColor?'/'+i.primary.altColor:''), '| code', i.code, 'sanct', i.sanctoralCode, '|', i.week, '| cyc', i.cycle, i.weekdayCycle);
 if(i.others.length) console.log('    others:', i.others.map(o=>o.role+':'+o.name).join(' ; '));
 if(i.optionals.length) console.log('    optional:', i.optionals.map(o=>o.name).join(' ; '));
 if(i.notes.length) console.log('    notes:', i.notes.join(' | '));
 console.log('    disc:', i.discipline.map(x=>x.label).join(', '), '| lunar', i.lunar.label);
}
