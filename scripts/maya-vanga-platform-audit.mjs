import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../src/app-router.js';
import analyticsWorker from '../src/analytics-router.js';
import {culturalPage} from '../src/cultural-platform.js';

const env={ENVIRONMENT:'production',ASSETS:{fetch:async request=>{
  const pathname=new URL(request.url).pathname;
  try{return new Response(await readFile(new URL(`../public${pathname}`,import.meta.url)),{status:200});}
  catch{return new Response('',{status:404});}
}}};
const culturalEnv = { ...env, ASTROLOGY_PLATFORM_ENABLED: 'false' };
const astroEnv = { ...env, ASTROLOGY_PLATFORM_ENABLED: 'true' };

const locales=[['','tr',false],['/en','en',false],['/gr','el',false],['/es','es',false],['/ar','ar',true]];
for(const [prefix,lang,rtl] of locales){
  const response=await worker.fetch(new Request(`https://mythborn.co${prefix||'/'}`),culturalEnv,{});
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
for(const path of ['/ar','/hakkinda','/en/about','/gr/about','/es/about','/ar/about','/tarot-sembolizm','/ar/meditation-mindfulness','/burclar','/dogum-haritasi','/gokyuzu-takvimi','/burc-yorumlari'])assert(xml.includes(`https://mythborn.co${path}`),`sitemap missing ${path}`);
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

// 5-language Mythborn Astrology Platform & zero-Gözde guarantee:
for (const [path,language] of [['/','tr'],['/en','en'],['/gr','el'],['/es','es'],['/ar','ar']]) {
 const response=await worker.fetch(new Request('https://mythborn.co'+path),astroEnv,{});
 assert.equal(response.status,200);
 assert.equal(response.headers.get('content-language'),language);
 const html=await response.text();
 assert(html.includes('MYTHBORN'));
 assert(html.includes('astro-shell'));
 assert(!html.includes('Kartların Gözde’si'));
 assert(!html.includes('gozdeli_'));
 assert(!html.includes('/images/gozde-salon-portrait.jpg'));
 assert(!html.includes('Gözde bu videoda'));
 if(language==='ar') assert(html.includes('dir="rtl"'));
}
console.log('5-language astrology platform & zero-Gözde audit passed.');

// Legacy Gözde and Video route 301 redirects to modern astrology platform:
for (const [subPath, expectedRedirect] of [
  ['/videolar', '/burclar'],
  ['/en/videos', '/en/zodiac-signs'],
  ['/gr/videos', '/gr/zodia'],
  ['/es/videos', '/es/signos-del-zodiaco'],
  ['/ar/videos', '/ar/al-abraj'],
  ['/kartlarin-gozdesi', '/burclar'],
  ['/gozde', '/burclar'],
  ['/yorumcu-basvuru', '/burclar'],
  ['/en/apply', '/en/zodiac-signs']
]) {
  const response=await worker.fetch(new Request('https://mythborn.co'+subPath),env,{});
  assert.equal(response.status,301, `${subPath} must return 301 redirect`);
  assert(response.headers.get('location').includes(expectedRedirect), `${subPath} must redirect to ${expectedRedirect}`);
}
console.log('Legacy Gözde 301 redirects verified.');

// Verify retired API endpoints return 410:
const retiredInquiry=await worker.fetch(new Request('https://mythborn.co/api/gozde-inquiry',{method:'POST'}),env,{});
assert.equal(retiredInquiry.status,410);

const retiredApply=await worker.fetch(new Request('https://mythborn.co/api/gozde-apply',{method:'POST'}),env,{});
assert.equal(retiredApply.status,410);

const retiredSubmissions=await worker.fetch(new Request('https://mythborn.co/api/gozde-submissions'),env,{});
assert.equal(retiredSubmissions.status,410);
console.log('Retired Gözde API endpoints verified returning 410.');

// AI Bot Access, Manifests, ARD, llms.txt, llms-full.txt, and Video Sitemap Audits
const robotsRes=await analyticsWorker.fetch(new Request('https://mythborn.co/robots.txt'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(robotsRes.status,200);
const robotsTxt=await robotsRes.text();
for(const bot of ['GPTBot','ClaudeBot','Claude-Web','PerplexityBot','Google-Extended','Applebot-Extended','Meta-ExternalAgent','FacebookBot','Amazonbot','cohere-ai','DuckAssistBot','Bingbot']){
  assert(robotsTxt.includes(`User-agent: ${bot}`),`robots.txt must explicitly grant access to ${bot}`);
}
assert(robotsTxt.includes('Allow: /llms.txt'));
assert(robotsTxt.includes('Allow: /llms-full.txt'));
assert(robotsTxt.includes('Allow: /.well-known/'));
assert(robotsTxt.includes('Sitemap: https://mythborn.co/sitemap-video.xml'));
assert(robotsTxt.includes('Agentmap: https://mythborn.co/.well-known/ard.json'), 'robots.txt must declare ARD Agentmap');
assert(robotsTxt.includes('Agentmap: https://mythborn.co/.well-known/ai-catalog.json'), 'robots.txt must declare ai-catalog Agentmap');

// 5-Language llms.txt & llms-full.txt
for(const [route, langKey] of [
  ['/llms.txt','Açık Kaynak Efemeris'],
  ['/llms.en.txt','Precision Astronomy'],
  ['/llms.gr.txt','Αστρονομίας Ακριβείας'],
  ['/llms.es.txt','Astronomía de Precisión'],
  ['/llms.ar.txt','الحسابات الفلكية']
]){
  const res=await worker.fetch(new Request(`https://mythborn.co${route}`),env,{});
  assert.equal(res.status,200,`${route} must return 200`);
  assert(res.headers.get('content-type').includes('text/plain'),`${route} must be text/plain`);
  assert(res.headers.get('access-control-allow-origin')==='*',`${route} must allow CORS`);
  const body=await res.text();
  assert(body.includes(langKey),`${route} must contain expected content`);
}

for(const [route, langKey] of [
  ['/llms-full.txt','Açık Kaynak Efemeris'],
  ['/llms-full.en.txt','Precision Astronomy'],
  ['/llms-full.gr.txt','Αστρονομίας Ακριβείας'],
  ['/llms-full.es.txt','Astronomía de Precisión'],
  ['/llms-full.ar.txt','الحسابات الفلكية']
]){
  const res=await worker.fetch(new Request(`https://mythborn.co${route}`),env,{});
  assert.equal(res.status,200,`${route} must return 200`);
  assert(res.headers.get('content-type').includes('text/plain'),`${route} must be text/plain`);
  const body=await res.text();
  assert(body.includes(langKey),`${route} must contain expected full content`);
}

// Redirects
const elRedirect=await worker.fetch(new Request('https://mythborn.co/llms.el.txt'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(elRedirect.status,301);
assert.equal(elRedirect.headers.get('location'),'https://mythborn.co/llms.gr.txt');

const elFullRedirect=await worker.fetch(new Request('https://mythborn.co/llms-full.el.txt'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(elFullRedirect.status,301);
assert.equal(elFullRedirect.headers.get('location'),'https://mythborn.co/llms-full.gr.txt');

// AI Catalogs & Manifests
const aiPluginRes=await worker.fetch(new Request('https://mythborn.co/.well-known/ai-plugin.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(aiPluginRes.status,200);
const aiPlugin=await aiPluginRes.json();
assert.equal(aiPlugin.schema_version,'v1');
assert(aiPlugin.name_for_model.includes('mythborn'));

const agentManifestRes=await worker.fetch(new Request('https://mythborn.co/.well-known/agent-manifest.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(agentManifestRes.status,200);
const agentManifest=await agentManifestRes.json();
assert.equal(agentManifest.specVersion,'1.0');
assert(Array.isArray(agentManifest.entries) && agentManifest.entries.length >= 7,'ArdManifest must contain entries array');
for(const entry of agentManifest.entries){
  assert(entry.identifier && entry.displayName && entry.type && entry.url, 'Every catalog entry must have identifier, displayName, type, and url');
  assert(/^urn:air:[a-zA-Z0-9.-]+(:[a-zA-Z0-9._-]+)+$/.test(entry.identifier), `${entry.identifier} must match RFC 8141 URN pattern urn:air:...`);
  assert(Array.isArray(entry.representativeQueries) && entry.representativeQueries.length >= 2, `${entry.identifier} must have representativeQueries`);
  if(entry.type.startsWith('text/markdown')){
    assert(entry.type.includes('profile="urn:air:agent-skills"'), `${entry.identifier} must specify profile="urn:air:agent-skills"`);
  }
}

const aiCatalogWellKnownRes=await worker.fetch(new Request('https://mythborn.co/.well-known/ai-catalog.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(aiCatalogWellKnownRes.status,200);
const aiCatalogData=await aiCatalogWellKnownRes.json();
assert.equal(aiCatalogData.specVersion,'1.0');
assert(Array.isArray(aiCatalogData.entries));

const aiCatalogRootRes=await worker.fetch(new Request('https://mythborn.co/ai-catalog.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(aiCatalogRootRes.status,200);

const ardAliasRes=await worker.fetch(new Request('https://mythborn.co/.well-known/ard.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(ardAliasRes.status,200);

const openapiRes=await worker.fetch(new Request('https://mythborn.co/.well-known/openapi.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(openapiRes.status,200);
const openapi=await openapiRes.json();
assert.equal(openapi.openapi,'3.1.0');

const factSheetRes=await worker.fetch(new Request('https://mythborn.co/ai-fact-sheet.json'),{...env,GOZDE_LAUNCH_ENABLED:'true'},{});
assert.equal(factSheetRes.status,200);
const factSheet=await factSheetRes.json();
assert.equal(factSheet.mainEntity.name,'MYTHBORN');

// Video Sitemap & Multilingual Sitemap
const videoSitemapRes=await worker.fetch(new Request('https://mythborn.co/sitemap-video.xml'),env,{});
assert.equal(videoSitemapRes.status,200);
const videoSitemapXml=await videoSitemapRes.text();
assert(!videoSitemapXml.includes('gozde'));

// Legacy 301 Redirect Audits
const legacyRedirectChecks = [
  ['/tarot-kartlari/deli', 'https://mythborn.co/burclar'],
  ['/tarot', 'https://mythborn.co/burclar'],
  ['/astroloji-kutuphanesi/koc', 'https://mythborn.co/burclar'],
  ['/vedik-astroloji', 'https://mythborn.co/burclar'],
  ['/haftalik-burc', 'https://mythborn.co/burc-yorumlari'],
  ['/ruya-sembolleri/deniz', 'https://mythborn.co/burclar'],
  ['/en/tarot-kartlari/the-fool', 'https://mythborn.co/en/zodiac-signs'],
  ['/en/astroloji', 'https://mythborn.co/en/zodiac-signs'],
  ['/en/weekly-horoscope', 'https://mythborn.co/en/horoscopes'],
  ['/giris', 'https://mythborn.co/'],
  ['/en/account/login', 'https://mythborn.co/en'],
  ['/videolar', 'https://mythborn.co/burc-yorumlari'],
  ['/en/videos', 'https://mythborn.co/en/horoscopes']
];

for (const [from, target] of legacyRedirectChecks) {
  const redirRes = await analyticsWorker.fetch(new Request('https://mythborn.co' + from), env, {});
  assert.equal(redirRes.status, 301, `${from} must return HTTP 301`);
  assert.equal(redirRes.headers.get('location'), target, `${from} must redirect to ${target}`);
}

const sitemapRes=await worker.fetch(new Request('https://mythborn.co/sitemap.xml'),env,{});
assert.equal(sitemapRes.status,200);
assert(sitemapRes.headers.get('content-type').includes('application/xml'), 'sitemap.xml must be application/xml');
const sitemapXml=await sitemapRes.text();
assert(sitemapXml.startsWith('<?xml'), 'sitemap.xml must start with XML declaration');
assert(sitemapXml.trim().endsWith('</urlset>'), 'sitemap.xml must close urlset');
assert(!sitemapXml.includes('<html'), 'sitemap.xml must not contain HTML tags');
assert(sitemapXml.includes('https://mythborn.co/burclar'));
assert(sitemapXml.includes('https://mythborn.co/dogum-haritasi'));
assert(sitemapXml.includes('https://mythborn.co/gokyuzu-takvimi'));
assert(sitemapXml.includes('https://mythborn.co/sinastri'));

console.log('Mythborn Astrology Platform, legacy redirects, and API audits passed.');
