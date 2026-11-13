(()=>{
'use strict';
const form=document.querySelector('#ebced-form'),out=document.querySelector('#result'),compare=document.querySelector('#compare'),second=document.querySelector('#second');
if(!form)return;
const $=name=>form.elements.namedItem(name);
const values={ا:1,أ:1,إ:1,آ:1,ب:2,ج:3,د:4,ه:5,ة:5,و:6,ز:7,ح:8,ط:9,ي:10,ى:10,ك:20,ک:20,گ:20,ل:30,م:40,ن:50,س:60,ع:70,ف:80,ص:90,ق:100,ر:200,ش:300,ت:400,ث:500,خ:600,ذ:700,ض:800,ظ:900,غ:1000,پ:2,چ:3,ژ:7,ڤ:80};
const special={'teyfik':'توفيق','gökdemir':'گوكدمير','gülten':'گولتن','cansu':'جانسو','gür':'گور','emine':'امينه'};
const letters={'b':'ب','c':'ج','ç':'چ','d':'د','f':'ف','g':'گ','ğ':'غ','h':'ه','ı':'ي','i':'ي','j':'ژ','k':'ك','l':'ل','m':'م','n':'ن','o':'و','ö':'و','p':'پ','r':'ر','s':'س','ş':'ش','t':'ت','u':'و','ü':'و','v':'و','y':'ي','z':'ز','a':'ا','e':''};
const normalize=s=>s.toLocaleLowerCase('tr-TR').trim().replace(/\s+/g,' ');
function suggested(name){return normalize(name).split(' ').map(word=>special[word]||[...word].map((ch,i)=>ch==='a'&&i>0?'':letters[ch]??'').join('')).join(' ')}
function fill(id){
const latin=$(id+'Name'),arabic=$(id+'Arabic'),mother=$(id+'Mother'),mArabic=$(id+'MotherArabic');
let previous=suggested(latin.value),prevMom=suggested(mother.value);
latin.addEventListener('input',()=>{const next=suggested(latin.value);if(!arabic.value||arabic.value===previous)arabic.value=next;previous=next});
mother.addEventListener('input',()=>{const next=suggested(mother.value);if(!mArabic.value||mArabic.value===prevMom)mArabic.value=next;prevMom=next});
}
fill('a');fill('b');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const reduce=n=>{while(n>9)n=String(n).split('').reduce((a,b)=>a+Number(b),0);return n};
const digits=s=>[...s.replace(/\D/g,'')].reduce((a,c)=>a+Number(c),0);
const nameNumerology=s=>[...s.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/İ/g,'I').replace(/ı/g,'I').replace(/Ç/g,'C').replace(/Ğ/g,'G').replace(/Ö/g,'O').replace(/Ş/g,'S').replace(/Ü/g,'U')].reduce((sum,ch)=>{const n=ch.charCodeAt(0)-65;return sum+(n>=0&&n<26?(n%9)+1:0)},0);
function abjad(s){const parts=[...s.normalize('NFKC')].filter(c=>Object.hasOwn(values,c)).map(c=>({letter:c,value:values[c]}));return {parts,total:parts.reduce((a,p)=>a+p.value,0)}}
function person(id){
const name=$(id+'Name').value.trim(),mother=$(id+'Mother').value.trim(),arabic=$(id+'Arabic').value.trim(),motherArabic=$(id+'MotherArabic').value.trim(),date=$(id+'Date').value;
if(!name||!arabic)throw Error('Ad ve Arap harfli yazım gereklidir. / Name and Arabic spelling are required.');
if((mother&&!motherArabic)||(!mother&&motherArabic))throw Error('Anne adı ile Arap harfli karşılığı birlikte girilmelidir. / Complete both maternal name fields.');
if(date&&(!/^\d{4}-\d{2}-\d{2}$/.test(date)||Number.isNaN(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date))throw Error('Geçerli bir doğum tarihi gir. / Enter a valid birth date.');
const a=abjad(arabic),m=abjad(motherArabic);if(!a.parts.length)throw Error('Arap harfli yazımda geçerli harf bulunamadı.');
return {name,mother,arabic,motherArabic,date,a,m,full:a.total+m.total,expression:nameNumerology(name),life:date?digits(date):null};
}
function rendering(p){
const letters=p.a.parts.map(x=>esc(x.letter)+' ('+x.value+')').join(' + ');
const mom=p.m.parts.map(x=>esc(x.letter)+' ('+x.value+')').join(' + ');
return '<article class="result-card"><h2>'+esc(p.name)+'</h2><div class="summary"><div class="stat">Ebced<strong>'+p.a.total+'</strong></div><div class="stat">İfade / Expression<strong>'+reduce(p.expression)+'</strong></div><div class="stat">Yaşam yolu / Life path<strong>'+(p.life===null?'—':reduce(p.life))+'</strong></div>'+(p.m.parts.length?'<div class="stat">Anne adıyla / With mother<strong>'+p.full+'</strong></div>':'')+'</div><p class="letters" dir="auto">'+esc(p.arabic)+' = '+letters+'</p>'+(p.m.parts.length?'<p class="letters" dir="auto">'+esc(p.motherArabic)+' = '+mom+'</p>':'')+'<p class="muted">İsim numerolojisi: '+p.expression+' → '+reduce(p.expression)+(p.life!==null?' · Doğum tarihi rakamları: '+p.life+' → '+reduce(p.life):'')+'</p></article>';
}
const themes={1:'başlangıç / initiative',2:'işbirliği / partnership',3:'ifade / expression',4:'düzen / structure',5:'değişim / change',6:'sorumluluk / care',7:'içe dönüş / reflection',8:'hedefler / ambition',9:'tamamlanma / integration'};
compare.addEventListener('change',()=>{second.classList.toggle('hidden',!compare.checked);[...second.querySelectorAll('input')].forEach(i=>{if(i.name==='bName')i.required=compare.checked})});
form.addEventListener('submit',event=>{
event.preventDefault();
try{
const a=person('a'),b=compare.checked?person('b'):null;
let html=rendering(a)+(b?rendering(b):'');
if(b){
const total=a.a.total+b.a.total,root=reduce(total),motherTotal=a.full+b.full;
html+='<article class="result-card"><h2>İki kişi / Comparison</h2><div class="summary"><div class="stat">Ebced toplamı / Combined<strong>'+total+'</strong></div><div class="stat">İndirgeme / Reduction<strong>'+root+'</strong></div>'+(a.m.parts.length&&b.m.parts.length?'<div class="stat">Anne adlarıyla / With mothers<strong>'+motherTotal+'</strong></div>':'')+'</div><p>Sembolik tema / Symbolic theme: <strong>'+themes[root]+'</strong>.</p><p class="muted">Bu değer bir ilişki uyum yüzdesi değildir. Yeniden birleşme, ayrılık, sadakat ya da başka birinin gerçek duygularını göstermez.</p></article>';
}else html+='<article class="result-card"><h2>Sembolik tema / Symbolic theme</h2><p>'+themes[reduce(a.a.total)]+'</p></article>';
out.innerHTML=html;
out.scrollIntoView({behavior:'smooth',block:'start'});
}catch(error){out.innerHTML='<p class="error" role="alert">'+esc(error.message)+'</p>'}
});
})();