import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../src/app-router.js';
import {culturalPage} from '../src/cultural-platform.js';

const env={ENVIRONMENT:'production',ASSETS:{fetch:async request=>{
  const pathname=new URL(request.url).pathname;
  try{return new Response(await readFile(new URL(`../public${pathname}`,import.meta.url)),{status:200});}
  catch{return new Response('',{status:404});}
}}};

const locales=[['','tr',false],['/en','en',false],['/gr','el',false],['/es','es',false],['/ar','ar',true]];
for(const [prefix,lang,rtl] of locales){
  const response=await worker.fetch(new Request(`https://mythborn.co${prefix||'/'}`),env,{});
  assert.equal(response.status,200,`${prefix||'/'} should be public`);
  const html=await response.text();
  assert.equal(response.headers.get('content-language'),lang,`${prefix||'/'} must set its content-language header`);
  assert(html.includes(`lang="${lang}"`),`${prefix||'/'} must declare ${lang}`);
  assert.equal(html.includes('Maya Vanga'),true,`${prefix||'/'} must identify the public persona`);
  assert.equal(html.includes('Temsili görsel')||lang!=='tr',true,`${prefix||'/'} must not present a representative silhouette as a real photo`);
  assert.equal(html.includes('mailto:'),false,`${prefix||'/'} must not expose an unverified email`);
  assert.equal(html.includes('wa.me'),false,`${prefix||'/'} must not expose an unverified WhatsApp number`);
  assert.equal(/(?:price|fiyat|checkout|reservation|booking|payment|ödeme)/i.test(html),false,`${prefix||'/'} must not market commercial flows`);
  assert.equal(html.includes('hreflang="ar"'),true,`${prefix||'/'} must include Arabic alternate`);
  if(rtl)assert(html.includes('dir="rtl"'),'/ar must use RTL direction');
}

for(const route of ['/hakkinda','/kutuphane','/iletisim','/en/about','/gr/about','/es/about','/ar/about']){
  const response=await worker.fetch(new Request(`https://mythborn.co${route}`),env,{});
  assert.equal(response.status,200,`${route} should be public`);
  const html=await response.text();
  assert((html.match(/class="topic"/g)||[]).length >= 3,`${route} should contain substantive editorial sections`);
  assert(html.includes('class="topic-grid"'),`${route} should have a structured inner page`);
}

for(const route of ['/tarot-sembolizm','/bioenerji-kulturu','/nazar-ritueller','/tilsimlar-semboller','/meditasyon-farkindalik',...['/en','/gr','/es','/ar'].flatMap(prefix=>['/tarot-symbolism','/bioenergy-culture','/evil-eye-rituals','/talismans-symbols','/meditation-mindfulness'].map(path=>`${prefix}${path}`))]){
  const response=await worker.fetch(new Request(`https://mythborn.co${route}`),env,{});
  assert.equal(response.status,200,`${route} should be a public editorial route`);
  const html=await response.text();
  assert(html.includes('article-body'),`${route} should contain long-form editorial content`);
  assert(!html.includes('mailto:')&&!html.includes('wa.me'),`${route} must not add contact sales CTAs`);
  assert(html.includes('application/ld+json')&&html.includes('"inLanguage"'),`${route} must include language-aware structured data`);
  assert(html.includes('og:image')&&html.includes('maya-vanga-hero.webp'),`${route} must provide a representative social image`);
  assert(html.includes('/refinement.js')&&html.includes('window.MYTHBORN_LOCALE'),`${route} must retain consent and locale infrastructure`);
}

const responsiveHtml=culturalPage('/ar');
assert(responsiveHtml.includes('@media(max-width:700px)'), 'cultural shell must include a mobile layout');
assert(responsiveHtml.includes('aria-label='), 'representative visual must have an accessible text alternative');
assert(responsiveHtml.includes('<details class="mobile-nav">'), 'cultural shell must include keyboard-accessible mobile navigation');
assert(responsiveHtml.includes('prefers-reduced-motion'), 'cultural shell must respect reduced-motion preferences');

const sitemap=await worker.fetch(new Request('https://mythborn.co/sitemap.xml'),env,{});
const xml=await sitemap.text();
for(const path of ['/ar','/hakkinda','/en/about','/gr/about','/es/about','/ar/about','/tarot-sembolizm','/ar/meditation-mindfulness','/yorumcu-basvuru','/en/apply','/gr/apply','/es/apply','/ar/apply'])assert(xml.includes(`https://mythborn.co${path}`),`sitemap missing ${path}`);
console.log('Maya Vanga five-locale, SEO, RTL, and legal-gate audit passed.');

// Temporary public splash gate is reversible and keeps all five locales.
for (const [path, lang] of [['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar'],['/iletisim','tr'],['/tarot-sembolizm','tr']]) {
  const response=await worker.fetch(new Request('https://mythborn.co'+path), {...env,COMING_SOON_ENABLED:'true'}, {});
  assert.equal(response.status,200);
  assert.equal(response.headers.get('cache-control'),'no-store');
  const html=await response.text();
  assert(html.includes('MYTHBORN'));
  assert(html.includes('name="robots" content="noindex,follow"'));
  assert(html.includes('lang="'+lang+'"'));
  assert(!html.includes('class="topic-grid"'));
  if(lang==='ar')assert(html.includes('dir="rtl"'));
}
console.log('Coming-soon gated public surface checks passed.');

// Reversible Gözde full platform & 5-language reader application pages:
for (const [path,language] of [['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar']]) {
 const response=await worker.fetch(new Request('https://mythborn.co'+path),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
 assert.equal(response.status,200);
 assert.equal(response.headers.get('content-language'),language);
 const html=await response.text();
 assert(html.includes(({tr:'Kartların Gözde’si',en:'Gözde of the Cards',el:'Η Gözde των Καρτών',es:'Gözde, la voz de las cartas',ar:'Gözde قارئة البطاقات'})[language]));
 assert(html.includes('/images/gozde-tarot-hero.webp'));
 assert(html.includes('gozdeli_'));
 assert(html.includes('id="mobile-drawer"'), `${path} must include mobile drawer menu`);
 assert(html.includes('data-open-drawer'), `${path} must include mobile menu toggle button`);
 assert(html.includes('class="trust-bar"'));
 assert((html.match(/class="area-card"/g)||[]).length===8, `${path} must render all 8 service area cards`);
 assert(html.includes('id="blog-onizleme"'), `${path} must render blog preview section`);
 assert(html.includes('id="video-vitrin"'), `${path} must render homepage video spotlight section`);
 assert(html.includes('id="video-promo-toast"') && html.includes('popover="manual"'), `${path} must include 1s video announcement toast`);
 for (const m of html.matchAll(/<script(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi)) {
   new Function(m[1]);
 }
 assert(html.includes('id="gozde-inquiry-form"'));
 assert(html.includes('id="cookie-consent-banner"'), `${path} must include KVKK/GDPR cookie consent banner`);
 assert(html.includes('data-cookie-choice="accepted"') && html.includes('data-cookie-choice="essential"'), `${path} must include both Accept All and Essential Only options`);
 assert(html.includes('data-open-cookie-banner'), `${path} must include footer trigger to reopen cookie preferences`);
 assert(html.includes('href="https://qctcommerce.com/"') && html.includes('QCT Commerce'), `${path} must include QCT Commerce footer signature`);
 assert(html.includes('id="exit-intent-dialog"') && html.includes('closedby="any"'), `${path} must include exit-intent retention dialog`);
 assert(html.includes('name="mythborn-faq"'));
 assert(html.includes('class="aeo-dl"'));
 assert(html.includes('SpeakableSpecification'));
 assert(html.includes('#essential-paths'));
 assert(html.includes('ai-fact-sheet.txt'));
 assert(!html.includes('step-num'), `${path} must not render card numbers`);
 assert(!html.includes('Maya Vanga'));
 assert(!html.includes('gozde-landing'));
 assert(!/(?:price|fiyat|checkout|reservation|booking|payment|ödeme|mailto:|wa\.me)/i.test(html), `${path} must remain free of commercial/prohibited terms`);
 if(language==='ar') assert(html.includes('dir="rtl"'));
}

// Standalone menu pages, legal pages (KVKK, Gizlilik, Kullanım Koşulları), and 10 blog articles:
for (const subPath of [
  '/kesif-alanlari','/yaklasim','/videolar','/blog','/iletisim','/kvkk','/gizlilik','/kullanim-kosullari',
  '/en/areas','/en/approach','/en/videos','/en/blog','/en/contact','/en/kvkk','/en/privacy','/en/terms',
  '/gr/areas','/gr/videos','/es/videos','/es/blog','/ar/videos','/ar/kvkk',
  '/blog/merkur-ve-gezegen-retrolari-rehberi',
  '/blog/tutulma-mevsimi-ve-kader-kavsagi',
  '/blog/katina-ask-acilimi-ve-iliski-dinamikleri',
  '/blog/tarot-major-arkana-kader-karti-sifreleri',
  '/blog/kahve-fali-sembolizmi-fincandaki-isaretler',
  '/blog/dogum-haritasinda-7-ev-venus-ve-juno',
  '/blog/saturn-dongusu-ve-hayat-sinavlari',
  '/blog/numeroloji-ve-kisisel-yil-hesaplama',
  '/blog/yildizname-gelenegi-ve-dort-element-mizaci',
  '/blog/duru-goru-ve-sezgisel-farkindalik-rehberi'
]) {
  const response=await worker.fetch(new Request('https://mythborn.co'+subPath),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
  assert.equal(response.status,200, `${subPath} must return HTTP 200`);
  const html=await response.text();
  assert(html.includes('id="mobile-drawer"'), `${subPath} must include mobile drawer menu`);
  assert(!/(?:price|fiyat|checkout|reservation|booking|payment|ödeme|mailto:|wa\.me)/i.test(html), `${subPath} must remain free of commercial/prohibited terms`);
  if(subPath.startsWith('/blog/')){
    assert(html.includes('"@type":"Article"'), `${subPath} must include Article schema`);
    assert(html.includes('"@type":"FAQPage"'), `${subPath} must include FAQPage schema`);
    assert(html.includes('class="article-meta"'), `${subPath} must include editorial meta`);
  }
  if(subPath.endsWith('/videolar')||subPath.endsWith('/videos')){
    assert(html.includes('"@type":"VideoObject"'), `${subPath} must include VideoObject schema`);
    assert(html.includes('/videos/28-ekim-5-kasim-tarot.mp4'), `${subPath} must reference the featured weekly tarot video`);
    assert(html.includes('preload="none"') && html.includes('width="1280" height="720"'), `${subPath} must use on-demand preload="none" and explicit dimensions`);
    assert((html.match(/class="zodiac-week-card"/g)||[]).length===12, `${subPath} must render all 12 zodiac sign weekly cards`);
  }
}

for (const [applyPath,language] of [['/yorumcu-basvuru','tr'],['/en/apply','en'],['/gr/apply','el'],['/es/apply','es'],['/ar/apply','ar']]) {
 const response=await worker.fetch(new Request('https://mythborn.co'+applyPath),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
 assert.equal(response.status,200);
 assert.equal(response.headers.get('content-language'),language);
 const html=await response.text();
 assert(html.includes(`lang="${language}"`));
 assert(html.includes('id="gozde-apply-form"'));
 assert(html.includes('hreflang="ar"'));
 assert(html.includes('BreadcrumbList'));
 assert((html.match(/name="specialties"/g)||[]).length===8, `${applyPath} must include 8 specialty checkboxes`);
 assert(!/(?:price|fiyat|checkout|reservation|booking|payment|ödeme|mailto:|wa\.me)/i.test(html));
 if(language==='ar') assert(html.includes('dir="rtl"'));
}

// Verify API validation and submission handling for both inquiry and application forms
const badInquiry=await worker.fetch(new Request('https://mythborn.co/api/gozde-inquiry',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({locale:'tr',name:'A',contact:'',message:'short',consent:false})
}),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(badInquiry.status,400);

const goodInquiry=await worker.fetch(new Request('https://mythborn.co/api/gozde-inquiry',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({locale:'tr',name:'Ayşe K.',contact:'ayse@example.com',topic:'Katina',format:'Sesli Kayıt & Analiz',message:'İlişki dinamiğimiz ve önümüzdeki süreç hakkında bilgi almak istiyorum.',consent:'yes'})
}),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(goodInquiry.status,200);
const goodInquiryData=await goodInquiry.json();
assert.equal(goodInquiryData.ok,true);

const badApply=await worker.fetch(new Request('https://mythborn.co/api/gozde-apply',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({locale:'en',fullName:'J',email:'invalid',phone:'123',specialties:[],bio:'too short',consent:false})
}),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(badApply.status,400);

const goodApply=await worker.fetch(new Request('https://mythborn.co/api/gozde-apply',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({
    locale:'ar',
    fullName:'Nour Al-Huda',
    email:'nour@example.com',
    phone:'+905551234567',
    specialties:['التاروت','قراءة القهوة'],
    experience:'5–10 سنوات',
    modality:'تسجيل صوتي',
    languages:'العربية، التركية، الإنجليزية',
    social:'https://tiktok.com/@nour',
    bio:'أقدم قراءات رمزية عميقة تركز على الوضوح والوعي الذاتي مع احترام كامل للخصوصية.',
    consent:'yes'
  })
}),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(goodApply.status,200);
const goodApplyData=await goodApply.json();
assert.equal(goodApplyData.ok,true);

// Verify password protection on /yonetim/formlar and /api/gozde-submissions
const adminPageRes=await worker.fetch(new Request('https://mythborn.co/yonetim/formlar'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(adminPageRes.status,200);
const adminPageHtml=await adminPageRes.text();
for (const m of adminPageHtml.matchAll(/<script(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi)) {
  new Function(m[1]);
}
assert(adminPageHtml.includes('id="admin-login-form"'),'Admin page must include password login form');
assert(adminPageHtml.includes('autocomplete="current-password"'),'Admin password input must use autocomplete="current-password"');

const unauthSubRes=await worker.fetch(new Request('https://mythborn.co/api/gozde-submissions'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(unauthSubRes.status,401,'Unauthenticated /api/gozde-submissions must return 401');

const wrongPassSubRes=await worker.fetch(new Request('https://mythborn.co/api/gozde-submissions',{
  headers:{'x-admin-password':'wrong-password'}
}),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(wrongPassSubRes.status,401,'Wrong password on /api/gozde-submissions must return 401');

const authSubRes=await worker.fetch(new Request('https://mythborn.co/api/gozde-submissions',{
  headers:{'x-admin-password':'teyfikgokdemir'}
}),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(authSubRes.status,200,'Authenticated /api/gozde-submissions must return 200');
const authSubData=await authSubRes.json();
assert.equal(authSubData.ok,true);

console.log('Gözde 5-language platform, reader application pages, and API audits passed.');
