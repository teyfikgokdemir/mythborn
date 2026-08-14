import worker from '../src/analytics-router.js';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const publicDir = join(__dirname, '../public');

const mockAssetsFetch = async (req) => {
  const url = new URL(req.url);
  const localPath = join(publicDir, url.pathname);
  if (existsSync(localPath)) {
    return new Response(await readFile(localPath), { status: 200 });
  }
  return new Response('Asset Not Found', { status: 404 });
};

const env = { ASSETS: { fetch: mockAssetsFetch } };

async function fetchPath(path, init = {}) {
  const req = new Request(`https://mythborn.co${path}`, init);
  const res = await worker.fetch(req, env, {});
  const body = await res.text();
  return { status: res.status, headers: res.headers, body, location: res.headers.get('location') };
}

console.log('Running Strict SEO Verification Audit...');

const errors = [];

// 1. Audit Sitemap URLs
const sitemapRes = await fetchPath('/sitemap.xml');
if (sitemapRes.status !== 200) {
  errors.push(`/sitemap.xml returned status ${sitemapRes.status}`);
}

const sitemapUrls = [...new Set([...sitemapRes.body.matchAll(/<loc>(https:\/\/mythborn\.co[^<]*)<\/loc>/g)].map(m => m[1]))];
console.log(`Auditing ${sitemapUrls.length} sitemap URLs...`);

for (const urlStr of sitemapUrls) {
  const path = new URL(urlStr).pathname;
  const res = await fetchPath(path);

  if (res.status !== 200) {
    errors.push(`[Sitemap 200] ${path} returned HTTP ${res.status}`);
    continue;
  }

  // Canonical tag check
  const canonMatches = [...res.body.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map(m => m[1]);
  if (canonMatches.length === 0) {
    errors.push(`[Canonical Missing] ${path} has no canonical tag`);
  } else if (canonMatches.length > 1) {
    errors.push(`[Canonical Duplicate] ${path} has multiple canonical tags: ${canonMatches.join(', ')}`);
  } else if (canonMatches[0] !== urlStr) {
    errors.push(`[Canonical Mismatch] ${path} canonical is ${canonMatches[0]}, expected ${urlStr}`);
  }

  // Noindex leak check
  if (res.body.includes('noindex')) {
    errors.push(`[Sitemap Noindex Leak] ${path} is in sitemap but contains noindex`);
  }

  // Obsolete /el path check in hreflang
  const altLinks = [...res.body.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)];
  for (const [, lang, href] of altLinks) {
    if (href.includes('/el/') || href.endsWith('/el')) {
      errors.push(`[Hreflang Obsolete /el] ${path} hreflang="${lang}" uses /el instead of /gr: ${href}`);
    }
  }
}

// 2. Home-page discovery architecture schema audit
for (const path of ['/', '/en', '/gr', '/es']) {
  const res = await fetchPath(path);
  const canonical = `https://mythborn.co${path}`;
  if (res.status !== 200) {
    errors.push(`[Home ItemList Status] ${path} returned HTTP ${res.status}`);
    continue;
  }
  if (!res.body.includes('"@type":"ItemList"') || !res.body.includes(`"@id":"${canonical}#essential-paths"`)) {
    errors.push(`[Home ItemList Schema] ${path} is missing its essential discovery-path ItemList`);
  }
  const itemListCount = (res.body.match(/"@type":"ListItem"/g) || []).length;
  if (itemListCount < 4) errors.push(`[Home ItemList Contents] ${path} exposes fewer than four essential paths`);
}

// 3. High-intent tool page answer-layer audit
const toolAnswerRoutes = [
  ['/astroloji', 'Doğum haritası hakkında kısa yanıtlar'],
  ['/tarot', '3 kart Tarot açılımı hakkında kısa yanıtlar'],
  ['/sinastri', 'Sinastri hakkında kısa yanıtlar'],
  ['/en/astroloji', 'Birth chart: quick answers'],
  ['/en/tarot', '3-card Tarot: quick answers'],
  ['/en/sinastri', 'Synastry: quick answers'],
  ['/gr/astroloji', 'Γενέθλιος χάρτης: σύντομες απαντήσεις'],
  ['/gr/tarot', 'Ταρώ 3 καρτών: σύντομες απαντήσεις'],
  ['/gr/sinastri', 'Συναστρία: σύντομες απαντήσεις']
];

for (const [path, expectedHeading] of toolAnswerRoutes) {
  const res = await fetchPath(path);
  if (res.status !== 200) {
    errors.push(`[Tool Answer Status] ${path} returned HTTP ${res.status}`);
    continue;
  }
  if (!res.body.includes('data-tool-answer-guide') || !res.body.includes(expectedHeading)) {
    errors.push(`[Tool Answer Content] ${path} is missing its visible answer guide`);
  }
  if (!res.body.includes('"@type":"FAQPage"')) {
    errors.push(`[Tool Answer Schema] ${path} is missing FAQPage markup`);
  }
  if (!res.body.includes('tool-answer-links')) {
    errors.push(`[Tool Answer Links] ${path} is missing its internal guide links`);
  }
}

// 4. Multilingual blog answer-layer, editorial trust and freshness audit
const sitemapBlogRoutes = sitemapUrls.map(urlStr => new URL(urlStr).pathname).filter(path => path.startsWith('/blog/'));
for (const path of sitemapBlogRoutes) {
  if (!sitemapRes.body.includes(`<loc>https://mythborn.co${path}</loc><lastmod>`)) {
    errors.push(`[Blog Sitemap Freshness] ${path} is missing a real lastmod value`);
  }
  const res = await fetchPath(path);
  if (res.status !== 200) {
    errors.push(`[Blog Article Status] ${path} returned HTTP ${res.status}`);
    continue;
  }
  const isTurkish = !path.startsWith('/en/') && !path.startsWith('/gr/');
  if (!res.body.includes('class="article-meta"')) {
    errors.push(`[Blog Editorial Trust] ${path} is missing its visible editorial date/byline`);
  }
  if (isTurkish && !res.body.includes('MYTHBORN EDITORIAL DESK')) {
    errors.push(`[Blog Editorial Trust] ${path} is missing the Turkish editorial desk label`);
  }
  if (!isTurkish && !res.body.includes('MYTHBORN EDITORIAL DESK') && !res.body.includes('ΣΥΝΤΑΚΤΙΚΗ ΟΜΑΔΑ MYTHBORN')) {
    errors.push(`[Blog Editorial Trust] ${path} is missing its localized editorial desk label`);
  }
  if (!res.body.includes('class="article-faq"') || !res.body.includes('"@type":"FAQPage"')) {
    errors.push(`[Blog FAQ Alignment] ${path} is missing visible FAQ or FAQPage markup`);
  }
  if (!res.body.includes('"@type":"Article"') || !res.body.includes('"author":') || !res.body.includes('"datePublished":') || !res.body.includes('"dateModified":')) {
    errors.push(`[Blog Article Schema] ${path} is missing Article author/date metadata`);
  }
  if (res.body.includes('href="/el/') || res.body.includes('href="https://mythborn.co/el/')) {
    errors.push(`[Blog Locale Leakage] ${path} contains an obsolete /el public link`);
  }
}

// 4. Audit Legacy Shopify Paths (410 & 301 with Target & Single-Step Validation)
const legacy410Paths = [
  '/products/test-item',
  '/products',
  '/collections/all',
  '/collections',
  '/blogs/news/post-1',
  '/blogs',
  '/cart',
  '/checkout',
  '/checkouts/session-123',
  '/customer_authentication/login',
  '/account/login/multipass',
  '/web-pixels@1',
  '/cdn/shop/files/asset.png',
  '/apps/shop/store',
  '/recommendations/products',
  '/pages/unmapped-legacy-page'
];

for (const path of legacy410Paths) {
  const res = await fetchPath(path);
  if (res.status !== 410) {
    errors.push(`[Legacy 410] ${path} returned HTTP ${res.status}, expected 410 Gone`);
  }
}

const legacyRedirects = [
  ['/search', '/arama'],
  ['/en/search', '/en/arama'],
  ['/gr/search', '/gr/arama'],
  ['/account/login', '/'],
  ['/account/register', '/'],
  ['/account', '/'],
  ['/pages/privacy-policy', '/gizlilik'],
  ['/pages/terms-of-service', '/kullanim-kosullari'],
  ['/pages/cookie-policy', '/cerezler']
];

for (const [fromPath, expectedToPath] of legacyRedirects) {
  const res = await fetchPath(fromPath);
  if (res.status !== 301) {
    errors.push(`[Legacy 301 Status] ${fromPath} returned HTTP ${res.status}, expected 301`);
    continue;
  }
  const expectedLocation = `https://mythborn.co${expectedToPath}`;
  if (res.location !== expectedLocation) {
    errors.push(`[Legacy 301 Target Mismatch] ${fromPath} Location header was ${res.location}, expected ${expectedLocation}`);
  }

  // Fetch destination and verify HTTP 200 & no chain
  const targetRes = await fetchPath(expectedToPath);
  if (targetRes.status !== 200) {
    errors.push(`[Legacy 301 Destination Failure] Target ${expectedToPath} for ${fromPath} returned HTTP ${targetRes.status}, expected 200 OK`);
  }
  if (targetRes.status >= 300 && targetRes.status < 400) {
    errors.push(`[Legacy 301 Redirect Chain] Target ${expectedToPath} for ${fromPath} resulted in a redirect chain`);
  }
}

// 5. Trailing Slash & Normalization Audit
const trailingSlashPaths = ['/astroloji/', '/en/astroloji/', '/blog/saturn-retrosu-2026/'];
for (const path of trailingSlashPaths) {
  const res = await fetchPath(path);
  if (res.status !== 301) {
    errors.push(`[Trailing Slash 301 Status] ${path} returned HTTP ${res.status}, expected 301`);
    continue;
  }
  const expectedTarget = path.slice(0, -1);
  const expectedLocation = `https://mythborn.co${expectedTarget}`;
  if (res.location !== expectedLocation) {
    errors.push(`[Trailing Slash Target Mismatch] ${path} Location was ${res.location}, expected ${expectedLocation}`);
  }

  // Verify target status is 200 and no chain
  const targetRes = await fetchPath(expectedTarget);
  if (targetRes.status !== 200) {
    errors.push(`[Trailing Slash Destination Failure] Target ${expectedTarget} returned HTTP ${targetRes.status}, expected 200 OK`);
  }
}

// 6. Custom 404 Status Audit
const nonExistentRes = await fetchPath('/non-existent-random-page-12345');
if (nonExistentRes.status !== 404) {
  errors.push(`[Custom 404 Status] /non-existent-page returned HTTP ${nonExistentRes.status}, expected 404`);
}
if (!nonExistentRes.body.includes('noindex')) {
  errors.push(`[Custom 404 Robots] 404 page missing noindex meta tag`);
}

// 7. robots.txt Audit
const robotsRes = await fetchPath('/robots.txt');
if (robotsRes.status !== 200) {
  errors.push(`[robots.txt Status] /robots.txt returned HTTP ${robotsRes.status}`);
}
if (!robotsRes.body.includes('Sitemap: https://mythborn.co/sitemap.xml')) {
  errors.push(`[robots.txt Sitemap] /robots.txt missing Sitemap directive`);
}
if (!robotsRes.body.includes('Disallow: /api/')) {
  errors.push(`[robots.txt Disallow] /robots.txt missing Disallow: /api/`);
}
if (robotsRes.body.includes('Disallow: /giris')) {
  errors.push(`[robots.txt Disallow Conflict] /robots.txt disallows /giris which prevents Googlebot from reading noindex tag`);
}

if (errors.length > 0) {
  console.error(`❌ SEO Verification Audit failed with ${errors.length} errors:`);
  errors.forEach(e => console.error('  ', e));
  process.exit(1);
}

console.log('✅ Strict SEO Verification Audit passed cleanly!');
