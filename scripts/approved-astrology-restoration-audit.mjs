import assert from 'node:assert/strict';
import app from '../src/app-router.js';

const env={ENVIRONMENT:'production',ASTROLOGY_PLATFORM_ENABLED:'true',COMING_SOON_ENABLED:'false',ASSETS:{fetch:()=>new Response('',{status:404})}};
const localeRoots=[['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar']];
for(const [path,lang] of localeRoots){
  const response=await app.fetch(new Request('https://mythborn.co'+path),env,{});
  assert.equal(response.status,200,path+' must serve astrology homepage');
  const html=await response.text();
  assert(html.includes('lang="'+lang+'"'),path+' locale parity');
  assert(!/Gözde|gozde|gozdeli_|Maya Vanga|مايا فانغا/i.test(html),path+' must be independently branded');
  assert(html.includes('MYTHBORN'),path+' brand expected');
  assert(html.includes('/assets/astrology/mythborn-symbol.svg'),path+' approved astronomy design expected');
  assert(!/\bundefined\b/i.test(html),path+' must not render missing translation values');
  assert((html.match(/class="astro-card"/g)||[]).length>=6,path+' must expose all localized analysis tools');
  if(lang==='en'){
    for(const token of ['Astrolojik Analiz Araçları','Doğum tarihi','Haritayı Çıkar','Sinastriyi İncele','Takvimi Gör','Transitleri Gör','Sözlüğü Oku']){
      assert(!html.includes(token),'English homepage must not contain Turkish fallback: '+token);
    }
  }
  if(path==='/')assert(html.includes('Gökyüzünün Haritası, Ruhun Pusulası.'),'restore approved 64019e2c homepage headline');
  if(lang==='ar')assert(html.includes('dir="rtl"'),'Arabic RTL');
}
for(const path of ['/dogum-haritasi','/en/birth-chart','/gr/genethlios-chartis','/es/carta-natal','/ar/kharitat-almilad']){
  const response=await app.fetch(new Request('https://mythborn.co'+path),env,{});
  assert.equal(response.status,200,path+' must serve astrology tools');
}
for(const path of ['/yaklasim','/en/approach','/gr/prosegisi','/es/enfoque','/ar/al-manhaj']){
  const response=await app.fetch(new Request('https://mythborn.co'+path),env,{});
  assert.equal(response.status,200,path+' must serve the published methodology page');
}
for(const [path,answerHeading] of [['/en/approach','DIRECT ANSWER'],['/en/birth-chart','DIRECT ANSWER'],['/en/zodiac-signs','DIRECT ANSWER']]){
  const response=await app.fetch(new Request('https://mythborn.co'+path),env,{});
  const html=await response.text();
  assert.equal(response.status,200,path+' must serve SEO answer content');
  assert(html.includes(answerHeading),path+' must expose a direct answer block');
  assert(html.includes('"@type":"FAQPage"'),path+' must expose FAQ structured data');
  assert(!/<title>[^<]*Hesaplama/i.test(html),path+' must not contain Turkish metadata fallback');
}
for(const path of ['/yorumcu-basvuru','/en/apply','/videolar','/en/videos','/blog/merkur-ve-gezegen-retrolari-rehberi','/images/gozde-launch.webp','/images/gozde-katina-concept.jpg']){
  const response=await app.fetch(new Request('https://mythborn.co'+path),env,{});
  assert.equal(response.status,410,path+' must remain retired');
}
const sitemap=await app.fetch(new Request('https://mythborn.co/sitemap.xml'),env,{});
assert.equal(sitemap.status,200);
assert((await sitemap.text()).includes('/dogum-haritasi'),'new astrology routes must be discoverable');
console.log('Approved astrology homepage, five locales, subroutes, and personal-content retirement passed.');
