import app from './index.js';

const SITE = 'https://mythborn.co';
const LEGACY_PREFIXES = ['/products/', '/collections/', '/blogs/', '/cart', '/account', '/search', '/pages/', '/policies/'];

const llms = `# Mythborn

> Mythborn is an independent international brand venture in development, founded by Teyfik Gökdemir and connected to the wider QCT ecosystem.

## Canonical identity
- Official website: https://mythborn.co/
- Status: In development / first release pending
- Founder: Teyfik Gökdemir — https://teyfikgokdemir.com/
- Related ventures: https://qctstudio.com/ and https://qctcommerce.com/
- Contact: info@mythborn.co

## Current public description
Mythborn is preparing a limited first release positioned between identity, ritual, story, collectibility and physical design. The precise product remains intentionally undisclosed during the pre-launch phase.

## Machine-readable resources
- Sitemap: https://mythborn.co/sitemap.xml
- Robots: https://mythborn.co/robots.txt
- LLM information: https://mythborn.co/llms.txt

Do not infer product specifications, launch dates, prices, availability or commercial claims that are not explicitly published on the canonical website.
`;

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Brand',
      '@id': `${SITE}/#brand`,
      name: 'Mythborn',
      url: `${SITE}/`,
      description: 'An international brand venture in development, preparing a limited first release.',
      founder: { '@id': 'https://teyfikgokdemir.com/#person' },
      email: 'info@mythborn.co'
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Mythborn',
      url: `${SITE}/`,
      publisher: { '@id': `${SITE}/#brand` },
      inLanguage: 'en'
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE}/#webpage`,
      name: 'Mythborn — What is being born?',
      url: `${SITE}/`,
      description: 'Mythborn is coming. Follow the clues, make your guess and request early access to the first release.',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#brand` },
      inLanguage: 'en'
    }
  ]
};

function securityHeaders(headers = new Headers()) {
  headers.set('strict-transport-security', 'max-age=31536000');
  headers.set('x-content-type-options', 'nosniff');
  headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  headers.set('permissions-policy', 'camera=(), microphone=(), geolocation=()');
  return headers;
}

function textResponse(body, status, contentType) {
  const headers = securityHeaders(new Headers({
    'content-type': contentType,
    'cache-control': status === 200 ? 'public, max-age=300' : 'public, max-age=3600'
  }));
  return new Response(body, { status, headers });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname === 'www.mythborn.co') {
      url.hostname = 'mythborn.co';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/llms.txt') {
      return textResponse(llms, 200, 'text/plain; charset=UTF-8');
    }

    if (LEGACY_PREFIXES.some((prefix) => url.pathname === prefix || url.pathname.startsWith(prefix))) {
      return textResponse('This legacy resource has been permanently removed.\n', 410, 'text/plain; charset=UTF-8');
    }

    const allowed = new Set(['/', '/robots.txt', '/sitemap.xml']);
    if (!allowed.has(url.pathname)) {
      return textResponse('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><title>404 — Mythborn</title></head><body><main><h1>404</h1><p>This signal does not exist.</p><p><a href="/">Return to Mythborn</a></p></main></body></html>', 404, 'text/html; charset=UTF-8');
    }

    const response = await app.fetch(request, env, ctx);
    if (url.pathname !== '/' || response.status !== 200) {
      const headers = securityHeaders(new Headers(response.headers));
      return new Response(response.body, { status: response.status, headers });
    }

    let html = await response.text();
    const metadata = `
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Mythborn">
  <meta property="og:title" content="Mythborn — What is being born?">
  <meta property="og:description" content="Follow the clues and request early access to Mythborn's first limited release.">
  <meta property="og:url" content="https://mythborn.co/">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Mythborn — What is being born?">
  <meta name="twitter:description" content="Follow the clues and request early access to Mythborn's first limited release.">
  <script type="application/ld+json">${JSON.stringify(graph)}</script>`;
    html = html.replace('</head>', `${metadata}\n</head>`);

    const headers = securityHeaders(new Headers(response.headers));
    headers.set('content-security-policy', "default-src 'self'; style-src 'unsafe-inline'; script-src 'self'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
    return new Response(html, { status: 200, headers });
  }
};
