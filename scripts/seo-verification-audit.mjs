import worker from '../src/app-router.js';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const publicDir = join(__dirname, '../public');
const mockAssetsFetch = async (request) => {
  const pathname = new URL(request.url).pathname;
  const localPath = join(publicDir, pathname);
  if (existsSync(localPath)) return new Response(await readFile(localPath), { status: 200 });
  return new Response('Asset Not Found', { status: 404 });
};
const env = {
  ENVIRONMENT: 'production',
  ASTROLOGY_PLATFORM_ENABLED: 'true',
  COMING_SOON_ENABLED: 'false',
  ASSETS: { fetch: mockAssetsFetch }
};

async function fetchPath(path, init = {}) {
  const response = await worker.fetch(new Request(`https://mythborn.co${path}`, init), env, {});
  return {
    status: response.status,
    headers: response.headers,
    body: await response.text(),
    location: response.headers.get('location')
  };
}

const errors = [];
const add = (condition, message) => { if (!condition) errors.push(message); };
const sitemapRes = await fetchPath('/sitemap.xml');
add(sitemapRes.status === 200, `/sitemap.xml returned HTTP ${sitemapRes.status}`);

const sitemapUrls = [...new Set([...sitemapRes.body.matchAll(/<loc>(https:\/\/mythborn\.co[^<]*)<\/loc>/g)].map(match => match[1]))];
console.log(`Running current-router SEO verification across ${sitemapUrls.length} sitemap URLs...`);

for (const url of sitemapUrls) {
  const path = new URL(url).pathname;
  const result = await fetchPath(path);
  add(result.status === 200, `[Sitemap 200] ${path} returned HTTP ${result.status}`);
  if (result.status !== 200) continue;
  const canonical = [...result.body.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map(match => match[1]);
  add(canonical.length === 1, `[Canonical Count] ${path} has ${canonical.length} canonical tags`);
  if (canonical.length === 1) add(canonical[0] === url, `[Canonical Mismatch] ${path} canonical is ${canonical[0]}, expected ${url}`);
  add(!result.body.includes('name="robots" content="noindex'), `[Sitemap Noindex Leak] ${path} contains noindex`);
  add(!/\bundefined\b/i.test(result.body), `[Undefined Render] ${path} contains undefined`);
}

const coreRoutes = [
  '/', '/en', '/gr', '/es', '/ar',
  '/yaklasim', '/en/approach', '/gr/prosegisi', '/es/enfoque', '/ar/al-manhaj',
  '/dogum-haritasi', '/en/birth-chart', '/burclar', '/en/zodiac-signs',
  '/gokyuzu-takvimi', '/en/sky-calendar', '/transitler', '/en/transits',
  '/astroloji-sozlugu', '/en/astrology-glossary'
];
for (const path of coreRoutes) {
  const result = await fetchPath(path);
  add(result.status === 200, `[Core Route] ${path} returned HTTP ${result.status}`);
  if (result.status !== 200) continue;
  add(!/\bundefined\b/i.test(result.body), `[Undefined Render] ${path} contains undefined`);
  add(result.body.includes('<link rel="canonical"'), `[Canonical Missing] ${path}`);
  add(result.body.includes('hreflang="en"'), `[Hreflang Missing] ${path} has no English alternate`);
}

for (const [path, expectedHeading] of [
  ['/en/approach', 'DIRECT ANSWER'],
  ['/en/birth-chart', 'DIRECT ANSWER'],
  ['/en/zodiac-signs', 'DIRECT ANSWER']
]) {
  const result = await fetchPath(path);
  add(result.body.includes(expectedHeading), `[Answer Block] ${path} is missing ${expectedHeading}`);
  add(result.body.includes('"@type":"FAQPage"'), `[FAQ Schema] ${path} is missing FAQPage markup`);
  add(result.body.includes('class="seo-faq-item"'), `[Visible FAQ] ${path} is missing visible FAQ items`);
}

for (const path of ['/.well-known/ai-catalog.json', '/.well-known/agent-manifest.json', '/ai-fact-sheet.json']) {
  const result = await fetchPath(path);
  add(result.status === 200, `[AI Discovery] ${path} returned HTTP ${result.status}`);
  add(result.body.includes('Methodology') || result.body.includes('methodology'), `[AI Discovery] ${path} omits methodology resource`);
  add(result.body.includes('Birth Chart') || result.body.includes('birth chart'), `[AI Discovery] ${path} omits birth-chart resource`);
}

const notFound = await fetchPath('/non-existent-random-page-12345');
add(notFound.status === 404, `[404 Status] returned HTTP ${notFound.status}`);
add(notFound.body.includes('noindex'), '[404 Robots] 404 page is missing noindex');

const robots = await fetchPath('/robots.txt');
add(robots.status === 200, `[robots.txt Status] returned HTTP ${robots.status}`);
add(robots.body.includes('Sitemap: https://mythborn.co/sitemap.xml'), '[robots.txt Sitemap] missing Sitemap directive');
add(robots.body.includes('Disallow: /api/'), '[robots.txt Disallow] missing Disallow: /api/');

if (errors.length) {
  console.error(`SEO verification failed with ${errors.length} errors:`);
  errors.forEach(error => console.error('  ', error));
  process.exit(1);
}
console.log('SEO verification passed for the current production app-router, sitemap, answer blocks and AI discovery manifests.');
