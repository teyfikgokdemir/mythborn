import worker from '../src/router.js';

const env={ASSETS:{fetch:()=>new Response('',{status:200})}};
async function check(path,expectedStatus,includes=[],init={}){
  const response=await worker.fetch(new Request(`https://mythborn.co${path}`,init),env,{});
  if(response.status!==expectedStatus)throw new Error(`${path} returned ${response.status}; expected ${expectedStatus}`);
  const body=await response.text();
  for(const value of includes)if(!body.includes(value))throw new Error(`${path} is missing required value: ${value}`);
  return{response,body};
}
function count(body,value){return body.split(value).length-1}

const home=await check('/',200,['lang="tr"','On soru. Kırk ihtimal. Sekiz arketip.','SİMYACI','115 TL','platform.css','platform.js','final.css','final.js','FAQPage','SoftwareApplication','canonical','max-image-preview:large']);
if(count(home.body,'rel="canonical"')!==1)throw new Error('Home must contain exactly one canonical');
if(!home.body.includes('href="https://mythborn.co/"'))throw new Error('Home canonical is incorrect');
if(count(home.body,'application/ld+json')!==1)throw new Error('Home must contain one JSON-LD graph');
const homeHeaders=home.response.headers;
for(const header of ['content-security-policy','strict-transport-security','x-content-type-options','referrer-policy','permissions-policy','cross-origin-opener-policy'])if(!homeHeaders.get(header))throw new Error(`Missing security header: ${header}`);

const experience=await check('/deneyim',200,['id="experienceBody"','İÇGÜDÜSEL SEÇ','Doğru cevap yok','Arzu Motoru — Mythborn Deneyimi','https://mythborn.co/deneyim','SoftwareApplication']);
if(count(experience.body,'rel="canonical"')!==1)throw new Error('Experience must contain exactly one canonical');
await check('/arketipler',200,['Sekiz arzu. Sekiz gölge.','HÜKÜMDAR','KAÇAK','TAÇ','YANKI','MİMAR','GEZGİN','ATEŞ','SİMYACI','https://mythborn.co/arketipler']);
await check('/manifesto',200,['İnsan istediği şeyi satın almaz.','Arzu bir kusur değildir.','https://mythborn.co/manifesto']);
await check('/uyelik',200,['MYTHBORN ÜYELİĞİ','115 TL','Tüm mevcut ve yeni deneyimler','https://mythborn.co/uyelik']);
await check('/kayit',200,['data-auth-form="kayit"','KVKK','noindex,nofollow']);
await check('/giris',200,['data-auth-form="giris"','noindex,nofollow']);
await check('/hesabim',200,['data-account','SONUÇ GEÇMİŞİ','platform.js','noindex,nofollow']);
await check('/gizlilik',200,['Gizlilik Politikası','Toplanan bilgiler']);
await check('/kvkk',200,['KVKK Aydınlatma Metni','İlgili kişi hakları']);
await check('/kullanim-kosullari',200,['Kullanım Koşulları','Eğlence ve öz keşif']);
await check('/cerezler',200,['Çerez Politikası','Zorunlu çerezler']);
await check('/mesafeli-satis',200,['Mesafeli Satış Sözleşmesi','Dijital hizmet']);
await check('/on-bilgilendirme',200,['Ön Bilgilendirme Formu','Aylık bedel']);
await check('/iptal-iade',200,['İptal ve İade Politikası','Üyelik iptali']);
await check('/llms.txt',200,['# Mythborn','Dil: Türkçe','psikolojik teşhis','Hükümdar, Kaçak, Taç']);
await check('/robots.txt',200,['Disallow: /api/','Disallow: /hesabim','Sitemap: https://mythborn.co/sitemap.xml']);
const sitemap=await check('/sitemap.xml',200,['<loc>https://mythborn.co/uyelik</loc>','<changefreq>','<priority>']);
for(const privatePath of ['/giris','/kayit','/hesabim'])if(sitemap.body.includes(`<loc>https://mythborn.co${privatePath}</loc>`))throw new Error(`Private route leaked into sitemap: ${privatePath}`);
await check('/final.css',200);
await check('/final.js',200);
await check('/api/auth/me',503,['veritabanı']);
await check('/api/auth/register',503,['veritabanı'],{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:'test@example.com',password:'guvenli-sifre-123'})});
await check('/api/auth/request-verification',503,['veritabanı'],{method:'POST'});
await check('/api/auth/request-password-reset',503,['veritabanı'],{method:'POST'});
await check('/api/account/cancel-membership',503,['veritabanı'],{method:'POST'});
await check('/api/account/delete',503,['veritabanı'],{method:'DELETE'});
await check('/api/webhooks/payment',503,['veritabanı'],{method:'POST'});
await check('/not-a-real-page',404,['Bu kapı henüz açılmadı.']);
console.log('Mythborn SEO, GEO, AEO, AIO, mobil, erişilebilirlik, güvenlik, üyelik ve route audit’i geçti.');