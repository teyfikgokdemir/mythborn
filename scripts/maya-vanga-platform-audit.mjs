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
}

const responsiveHtml=culturalPage('/ar');
assert(responsiveHtml.includes('@media(max-width:760px)'), 'cultural shell must include a mobile layout');
assert(responsiveHtml.includes('aria-label='), 'representative visual must have an accessible text alternative');

const sitemap=await worker.fetch(new Request('https://mythborn.co/sitemap.xml'),env,{});
const xml=await sitemap.text();
for(const path of ['/ar','/hakkinda','/en/about','/gr/about','/es/about','/ar/about'])assert(xml.includes(`https://mythborn.co${path}`),`sitemap missing ${path}`);
console.log('Maya Vanga five-locale, SEO, RTL, and legal-gate audit passed.');
