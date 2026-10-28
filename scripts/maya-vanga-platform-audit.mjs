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
for(const path of ['/ar','/hakkinda','/en/about','/gr/about','/es/about','/ar/about','/tarot-sembolizm','/ar/meditation-mindfulness'])assert(xml.includes(`https://mythborn.co${path}`),`sitemap missing ${path}`);
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

// Reversible Gözde launch screen: full editorial routes remain available when switch is off.
for (const [path,language] of [['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar'],['/iletisim','tr']]) {
 const response=await worker.fetch(new Request('https://mythborn.co'+path),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
 assert.equal(response.status,200);
 assert.equal(response.headers.get('content-language'),language);
 const html=await response.text();
 assert(html.includes('Kartların Gözde’si'));
 assert(html.includes('/images/gozde-tarot-hero.webp'));
 assert(html.includes('gozdeli_'));
 assert(!html.includes('Maya Vanga'));
 if(language==='ar') assert(html.includes('dir="rtl"'));
}
console.log('Gözde coming-soon 5-language mode passed.');
