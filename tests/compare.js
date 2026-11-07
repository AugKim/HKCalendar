// Đối chiếu engine mới với bản cũ (legacy controller.js) cho từng ngày.
process.env.OLD_ROOT = process.env.OLD_ROOT || path_old();
function path_old(){ return require('path').join(__dirname,'..','..','Calendar'); }
const path=require('path');
const O=require('./oldharness.js');
const D=require('./load.js')(path.join(__dirname,'..'));
const P=require('../js/engine.js'); P.setSanctoral(D.SAINTS_DATA);
const u=P.util;
const Y0=+process.argv[2]||2025, Y1=+process.argv[3]||2032;
const colorOld=c=>/purple/.test(c)?'purple':/red/.test(c)?'red':/white/.test(c)?'white':/rose/.test(c)?'rose':'green';
const cats={};
function add(cat,msg){ (cats[cat]=cats[cat]||[]).push(msg); }
let total=0;
for(let y=Y0;y<=Y1;y++){
  const ld=O.getLiturgicalData(y);
  for(let n=u.mk(y,1,1);n<=u.mk(y,12,31);n++){
    total++;
    const dt=u.toDate(n); const nw=P.day(n);
    let od; try{ od=O.getDayLiturgicalInfo(dt,ld);}catch(e){ add('OLD-CRASH',nw.iso+' '+e.message); continue; }
    const oc=String(od.dayCode).startsWith('7')?O.getLiturgicalDayCode(dt,ld,{includeSanctoral:false}):od.dayCode;
    const tag=nw.iso+' '+nw.dowName;
    if(oc!==nw.code) add('temporal-code', `${tag}: cũ ${oc} | mới ${nw.code} (${nw.temporal.name})`);
    if(od.cycle!==nw.cycle) add('cycle-ABC', `${tag}: cũ ${od.cycle} mới ${nw.cycle}`);
    if(od.weekdayCycle!==nw.weekdayCycle) add('weekday-cycle', `${tag}: cũ ${od.weekdayCycle} mới ${nw.weekdayCycle}`);
    const oCol=colorOld(od.info.color), nCol=nw.primary.color;
    const oldOptionalWon = od.info.rankCode==='NHOKB';
    if(oCol!==nCol && !oldOptionalWon) add('color', `${tag}: cũ ${oCol} mới ${nCol} | "${(od.info.special||od.info.saints[0]&&od.info.saints[0].name||od.detailedWeek||'').slice(0,40)}" → "${nw.primary.name.slice(0,40)}"`);
    const og=od.info.rankCode, ng=nw.primary.grade;
    const map={TRONG:'SOLEMNITY',KINH:'FEAST',NHO:'MEMORIAL',NHOKB:'OPTIONAL',CHUA_NHAT:'SUNDAY',NGAY_THUONG:'WEEKDAY'};
    const ogm=map[og]||og;
    const comparable = (ogm===ng) || (ogm==='SUNDAY'&&(ng==='SUNDAY'||ng==='HIGH')) || (ogm==='WEEKDAY'&&(ng==='WEEKDAY'||ng==='HIGH'||ng==='TRIDUUM'));
    if(!comparable && !oldOptionalWon) add('grade', `${tag}: cũ ${og} "${(od.info.special||'').slice(0,40)}" | mới ${ng} "${nw.primary.name.slice(0,40)}"`);
    // tên lễ chính khác loại (thánh vs mùa)
    const oldIsSaint=od.info._winnerKey==='SANCTORAL';
    if(String(od.dayCode).startsWith('7') !== (nw.primary.kind==='sanctoral'||nw.primary.kind==='movable') && !(nw.primary.kind==='temporal')) {}
  }
}
console.log('Tổng số ngày so sánh:', total);
for(const k of Object.keys(cats)) { console.log('\n=== '+k+': '+cats[k].length+' ngày khác biệt'); cats[k].slice(0,+process.argv[4]||12).forEach(x=>console.log('  '+x)); }
