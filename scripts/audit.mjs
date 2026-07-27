import { access } from 'node:fs/promises';
import worker from '../src/router.js';

const env={ASSETS:{fetch:()=>new Response('',{status:200})},TURNSTILE_SITE_KEY:'1x00000000000000000000AA'};

async function check(path,status,includes=[],init={}){
  const response=await worker.fetch(new Request(`https://mythborn.co${path}`,init),env,{});
  if(response.status!==status)throw new Error(`${path} returned ${response.status}; expected ${status}`);
  const body=await response.text();
  for(const value of includes)if(!body.includes(value))throw new Error(`${path} missing ${value}`);
  return{response,body};
}

for(const file of [
  'public/oracle.css','public/oracle.js','public/tarot-deck.js',
  'src/auth.js','src/account.js','src/astrology.js'
])await access(new URL(`../${file}`,import.meta.url));

await check('/',200,['Günlük Tek Kart','Katina','Doğum Haritası','Haftalık Burç Yorumları','ÖDEME KAPALI','price":"0']);
await check('/gunluk-kart',200,['ÜYELİK GEREKTİRMEZ','data-daily-deck','Bugünün kartı']);

for(const [path,title,type] of [
  ['/tarot','3 Kart Tarot','tarot'],
  ['/ask','Aşk & Geri Dönüş','ask'],
  ['/kariyer','Kariyer & Para','kariyer'],
  ['/otuz-gun','30 Gün Açılımı','otuz-gun'],
  ['/katina','Katina Aşk Falı','katina']
])await check(path,200,[title,'ÜCRETSİZ ÜYELİKLE AÇILIR',`data-member-reading="${type}"`,'data-reading-workspace']);

await check('/ask',200,['İlişki durumun','Odaklandığın soru']);
await check('/kariyer',200,['Odak alanın','İş değişikliği']);
await check('/astroloji',200,['ÜCRETSİZ DOĞUM HARİTASI','Doğum tarihi','Doğum saati','Doğum yeri','data-member-reading="astroloji"','Güneş Burcu','Yükselen','Gezegenler','Açılar']);
await check('/haftalik-burc',200,['12 BURÇ','data-weekly-zodiac','data-weekly-result']);
await check('/kayit',200,['Ücretsiz hesap oluştur','noindex,nofollow']);
await check('/giris',200,['Giriş yap','noindex,nofollow']);
await check('/hesabim',200,['GEÇMİŞ','Doğum haritam','noindex,nofollow']);
await check('/robots.txt',200,['Disallow: /api/','Sitemap: https://mythborn.co/sitemap.xml']);

const sitemap=await check('/sitemap.xml',200,[
  'https://mythborn.co/gunluk-kart',
  'https://mythborn.co/katina',
  'https://mythborn.co/astroloji',
  'https://mythborn.co/haftalik-burc'
]);
if(sitemap.body.includes('/giris')||sitemap.body.includes('/kayit'))throw new Error('Private routes leaked into sitemap');

await check('/llms.txt',200,['78 kartlık klasik Tarot destesi','gerçek astronomik veriler','Yükselen']);
await check('/api/astrology/chart',405,['Bu yöntem desteklenmiyor.']);
await check('/api/auth/me',503,['veritabanı']);
await check('/api/webhooks/payment',503,['veritabanı'],{method:'POST'});
await check('/not-found',404,['Bu kapı henüz açılmadı.']);

console.log('Mythborn 78 kart Tarot, doğum haritası motoru, haftalık burç, üyelik, SEO ve route audit’i geçti.');
