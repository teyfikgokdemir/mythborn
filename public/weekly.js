(()=>{
const root=document.querySelector('[data-weekly-zodiac]');
const result=document.querySelector('[data-weekly-result]');
if(!root||!result)return;
const signs=[
{name:'Koç',symbol:'♈',element:'Ateş',quality:'Öncü'},
{name:'Boğa',symbol:'♉',element:'Toprak',quality:'Sabit'},
{name:'İkizler',symbol:'♊',element:'Hava',quality:'Değişken'},
{name:'Yengeç',symbol:'♋',element:'Su',quality:'Öncü'},
{name:'Aslan',symbol:'♌',element:'Ateş',quality:'Sabit'},
{name:'Başak',symbol:'♍',element:'Toprak',quality:'Değişken'},
{name:'Terazi',symbol:'♎',element:'Hava',quality:'Öncü'},
{name:'Akrep',symbol:'♏',element:'Su',quality:'Sabit'},
{name:'Yay',symbol:'♐',element:'Ateş',quality:'Değişken'},
{name:'Oğlak',symbol:'♑',element:'Toprak',quality:'Öncü'},
{name:'Kova',symbol:'♒',element:'Hava',quality:'Sabit'},
{name:'Balık',symbol:'♓',element:'Su',quality:'Değişken'}
];
const pools={
general:[
'Bu hafta bir süredir ertelediğin konuyu daha net görmeye başlıyorsun. Hızlı karar vermek yerine önce şartları sadeleştirmen, gerçek önceliğini görünür kılacak.',
'Haftanın ana teması düzen kurmak ve dağınık enerjiyi tek bir hedefte toplamak. Küçük ama sürdürülebilir adımlar büyük bir rahatlama sağlayabilir.',
'Beklenmedik bir konuşma ya da haber, bakış açını değiştirebilir. Eski plana bağlı kalmak yerine yeni bilgiyi hesaba katman daha verimli olacak.',
'Duygusal hassasiyetin yükselirken sezgilerin de güçleniyor. Her his gerçeğin tamamı değil; ancak hangi konuda daha dikkatli olman gerektiğini gösterebilir.',
'Kapanması gereken bir döngü kendini yeniden hatırlatabilir. Bitirmeyi ertelediğin şey, yeni başlangıcın önündeki asıl engel olabilir.',
'Görünür olma, fikirlerini ifade etme ve kendi alanını sahiplenme zamanı. Aşırı açıklama yapmak yerine net ve sakin duruş daha etkili olacak.'
],
love:[
'Aşk hayatında ima yerine açık iletişim öne çıkıyor. Beklentini yumuşak ama doğrudan ifade etmen, yanlış anlaşılmaları azaltabilir.',
'Geçmişten gelen bir duygu yeniden canlanabilir. Bu, mutlaka geri dönüş anlamına gelmez; hangi ihtiyacın hâlâ kapanmadığını fark etmen için bir işaret olabilir.',
'İlişkisi olanlar için ortak planlar ve güven duygusu önem kazanıyor. Bekârlar ise alışılmış tiplerinden farklı birine karşı merak hissedebilir.',
'Duygusal sınırlar bu hafta belirleyici. Fazla yük almak ya da karşındakinin sorumluluğunu üstlenmek yerine karşılıklılığı gözlemle.',
'Romantik alanda acele sonuç aramak yerine ilişkinin ritmini dinle. Küçük bir jest ya da dürüst bir konuşma, büyük sözlerden daha etkili olabilir.',
'Kalp ile mantık arasında seçim yapmak zorunda değilsin. Hem duygunu hem de gerçek koşulları birlikte değerlendirdiğinde daha sağlıklı bir yön ortaya çıkacak.'
],
career:[
'İş hayatında görünmeyen emeğin fark edilmeye başlayabilir. Sonuçlarını somutlaştırmak ve yaptıklarını doğru kişilere anlatmak önemli.',
'Yeni bir sorumluluk ya da proje gündeme gelebilir. Her şeye aynı anda evet demek yerine sana gerçekten değer katacak olanı seç.',
'Bir görüşme, başvuru veya teklif için hazırlık yapmak adına güçlü bir hafta. Detayları kontrol etmen ve sorularını önceden belirlemen avantaj sağlar.',
'Ekip içindeki iletişimde rol ve beklentileri netleştirmek gerekebilir. Belirsiz bırakılan işler sonradan yük oluşturabilir.',
'Kariyer yönünle ilgili daha cesur düşünmeye başlıyorsun. Hemen büyük bir değişim yapmak zorunda değilsin; önce seçeneklerini araştır.',
'Eski bir bağlantı ya da daha önce yarım kalan bir iş yeniden gündeme gelebilir. Bu kez şartları daha bilinçli belirleme şansın var.'
],
money:[
'Para alanında küçük kaçakları fark etmek önemli. Büyük bir kısıtlama yerine düzenli giderleri gözden geçirmek daha kalıcı sonuç verir.',
'Beklenen bir ödeme, geri dönüş veya maddi haber gelebilir; ancak kesinleşmeden yeni harcama planı yapmamak daha güvenli.',
'Gelir artırma fikri öne çıkıyor. Mevcut becerini farklı bir kanalda değerlendirmek ya da ek bir hizmet sunmak mümkün olabilir.',
'Ortak para, borç, kredi veya paylaşılmış giderler konusunda açık konuşmak gerekebilir. Rakamları varsayım yerine kayıt üzerinden ele al.',
'Duygusal harcamalara dikkat. Kendini iyi hissetmek için yapılan plansız alışveriş, kısa süreli rahatlama sağlayıp sonradan baskı yaratabilir.',
'Uzun vadeli birikim hedefin varsa bu hafta sistemi sadeleştir. Otomatik ve küçük tutarlı bir düzen, motivasyona bağlı plandan daha güçlüdür.'
],
warning:[
'Her şeyi aynı gün çözmeye çalışma; acele, iyi başlayan bir süreci gereksiz yere zorlayabilir.',
'Karşındaki kişinin suskunluğunu kendi korkularınla doldurma. Net bilgi gelmeden kesin hüküm verme.',
'Fazla sorumluluk alıp sonra kırgınlık biriktirmemeye dikkat et. Sınırını baştan söylemek daha sağlıklı.',
'Detaylara takılırken ana hedefi kaybetme. Mükemmel yerine tamamlanmış olanı seçmen gerekebilir.',
'Geçici bir duyguyu kalıcı kararın temeli yapma. Kendine en az bir gece düşünme alanı bırak.',
'Kontrol edemediğin alanlara enerji harcamak yerine etkileyebildiğin tek adıma odaklan.'
]
};
const days=['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];
const colors=['Altın','Lacivert','Zümrüt','Bordo','Gümüş','Mor','Toprak tonları'];
const startOfWeek=date=>{const d=new Date(date);const day=(d.getDay()+6)%7;d.setHours(0,0,0,0);d.setDate(d.getDate()-day);return d};
const weekStart=startOfWeek(new Date());
const weekEnd=new Date(weekStart);weekEnd.setDate(weekEnd.getDate()+6);
const weekKey=Math.floor(weekStart.getTime()/604800000);
const hash=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,2166136261);
const choose=(pool,seed)=>pool[Math.abs(seed)%pool.length];
const format=d=>new Intl.DateTimeFormat('tr-TR',{day:'numeric',month:'long'}).format(d);
const title=document.createElement('p');title.className='weekly-date';title.textContent=`${format(weekStart)} – ${format(weekEnd)}`;root.before(title);
root.innerHTML=signs.map((sign,index)=>`<button class="zodiac-button" type="button" data-sign="${index}" aria-pressed="false"><span>${sign.symbol}</span><strong>${sign.name}</strong><small>${sign.element}</small></button>`).join('');
const render=index=>{
 const sign=signs[index];
 const seed=hash(`${weekKey}:${sign.name}`);
 const strongDay=days[(seed+index)%days.length];
 const color=colors[(seed>>>3)%colors.length];
 const energy=62+((seed>>>5)%34);
 result.innerHTML=`<div class="weekly-heading"><div><p class="eyebrow">${format(weekStart)} – ${format(weekEnd)}</p><h2>${sign.symbol} ${sign.name} haftalık yorumu</h2><p>${sign.element} elementi ve ${sign.quality.toLowerCase()} nitelik üzerinden bu haftanın sembolik rehberi.</p></div><div class="energy-ring"><strong>%${energy}</strong><span>ENERJİ</span></div></div><div class="weekly-grid"><article><small>GENEL ENERJİ</small><p>${choose(pools.general,seed)}</p></article><article><small>AŞK & İLİŞKİLER</small><p>${choose(pools.love,seed>>>2)}</p></article><article><small>KARİYER</small><p>${choose(pools.career,seed>>>4)}</p></article><article><small>PARA</small><p>${choose(pools.money,seed>>>6)}</p></article><article><small>DİKKAT NOKTASI</small><p>${choose(pools.warning,seed>>>8)}</p></article><article><small>HAFTANIN ANAHTARI</small><p><strong>Güçlü gün:</strong> ${strongDay}<br><strong>Destekleyici renk:</strong> ${color}<br><strong>Niyet:</strong> Enerjimi gerçekten sonuç üreten alana yönlendiriyorum.</p></article></div><p class="provider-note">Haftalık yorumlar sembolik ve kişisel farkındalık amaçlıdır; kesin gelecek bilgisi değildir.</p>`;
 result.hidden=false;
 root.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
 result.scrollIntoView({behavior:'smooth',block:'start'});
};
root.addEventListener('click',event=>{const button=event.target.closest('[data-sign]');if(button)render(Number(button.dataset.sign))});
const style=document.createElement('style');style.textContent=`.weekly-date{margin:28px 0 12px;color:var(--gold);font-weight:800;letter-spacing:.12em}.zodiac-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:18px}.zodiac-button{min-height:116px;padding:18px 10px;border:1px solid var(--line);border-radius:18px;background:var(--panel);color:var(--ink);display:grid;place-items:center;gap:4px;cursor:pointer}.zodiac-button span{font-size:32px;color:var(--gold)}.zodiac-button strong{font-size:15px}.zodiac-button small{color:var(--muted)}.zodiac-button:hover,.zodiac-button[aria-pressed="true"]{border-color:rgba(232,200,131,.65);background:rgba(232,200,131,.08);transform:translateY(-2px)}.weekly-result{margin-top:34px;padding:clamp(24px,5vw,48px);border:1px solid var(--line);border-radius:28px;background:radial-gradient(circle at 90% 0,rgba(156,124,255,.14),transparent 34%),var(--panel)}.weekly-heading{display:flex;justify-content:space-between;gap:24px;align-items:center}.weekly-heading h2{margin:8px 0;font-family:Georgia,serif;font-size:clamp(38px,6vw,68px);font-weight:400}.weekly-heading p{color:var(--muted);line-height:1.6}.energy-ring{width:120px;height:120px;flex:0 0 120px;border:1px solid rgba(232,200,131,.45);border-radius:50%;display:grid;place-content:center;text-align:center}.energy-ring strong{font-size:28px}.energy-ring span{color:var(--gold);font-size:10px;letter-spacing:.15em}.weekly-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:30px}.weekly-grid article{padding:24px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.025)}.weekly-grid small{display:block;margin-bottom:12px;color:var(--gold);font-weight:900;letter-spacing:.13em}.weekly-grid p{margin:0;color:var(--muted);line-height:1.75}@media(max-width:900px){.zodiac-grid{grid-template-columns:repeat(4,1fr)}}@media(max-width:680px){.zodiac-grid{grid-template-columns:repeat(3,1fr)}.weekly-heading{align-items:flex-start}.energy-ring{width:88px;height:88px;flex-basis:88px}.weekly-grid{grid-template-columns:1fr}}`;
document.head.appendChild(style);
})();
