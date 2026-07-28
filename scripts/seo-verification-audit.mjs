import worker from '../src/analytics-router.js';

const env = { ASSETS: { fetch: () => new Response('', { status: 200 }) } };

async function fetchPath(path, init = {}) {
  const req = new Request(`https://mythborn.co${path}`, init);
  const res = await worker.fetch(req, env, {});
  const body = await res.text();
  return { status: res.status, headers: res.headers, body };
}

console.log('Running SEO Verification Audit...');

const errors = [];

// 1. Audit Sitemap
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

// 2. Audit Legacy Shopify Paths (410 & 301)
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
  ['/account/login', '/giris'],
  ['/account/register', '/kayit'],
  ['/account', '/hesabim'],
  ['/pages/privacy-policy', '/gizlilik'],
  ['/pages/terms-of-service', '/kullanim-kosullari'],
  ['/pages/cookie-policy', '/cerezler']
];

for (const [fromPath, expectedToPath] of legacyRedirects) {
  const res = await fetchPath(fromPath);
  if (res.status !== 301) {
    errors.push(`[Legacy 301] ${fromPath} returned HTTP ${res.status}, expected 301`);
  }
}

// 3. Trailing Slash & Normalization Audit
const trailingSlashPaths = ['/astroloji/', '/en/astroloji/', '/blog/saturn-retrosu-2026/'];
for (const path of trailingSlashPaths) {
  const res = await fetchPath(path);
  if (res.status !== 301) {
    errors.push(`[Trailing Slash 301] ${path} returned HTTP ${res.status}, expected 301`);
  }
}

// 4. Custom 404 Status Audit
const nonExistentRes = await fetchPath('/non-existent-random-page-12345');
if (nonExistentRes.status !== 404) {
  errors.push(`[Custom 404 Status] /non-existent-page returned HTTP ${nonExistentRes.status}, expected 404`);
}
if (!nonExistentRes.body.includes('noindex')) {
  errors.push(`[Custom 404 Robots] 404 page missing noindex meta tag`);
}

// 5. robots.txt Audit
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

console.log('✅ SEO Verification Audit passed cleanly!');
