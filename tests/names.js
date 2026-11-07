const path=require('path'); const D=require('./load.js')(path.join(__dirname,'..'));
const P=require('../js/engine.js'); P.setSanctoral(D.SAINTS_DATA);
// in tất cả tên sau khi làm sạch cho từng ngày 2027 (năm thường) để rà lỗi dữ liệu
const u=P.util; const seen=new Set();
for(let n=u.mk(2027,1,1);n<=u.mk(2027,12,31);n++){ const i=P.day(n); const list=[i.primary,...i.optionals,...i.others]; list.forEach(x=>{ if(x.name && !seen.has(x.name)){seen.add(x.name);} }); }
console.log([...seen].filter(x=>!/^(Thánh|Đức|Chúa|Lễ|Thứ|Mùng|Các Thánh|Cầu|Khởi|Bảy|Trái|Cung|Danh|Kỷ|Dâng|Lập|Suy|Truyền|Sinh|Tử|Thánh nữ)/.test(x)).join('\n'));
console.log('---- sample long/odd');
console.log([...seen].filter(x=>/[A-ZÀ-Ỹ]{4,}|\(|\)|\./.test(x)||x.length>70).join('\n'));
