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

const emblem = `<svg class="mythborn-marquee__emblem" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M32 5l5.6 21.4L59 32l-21.4 5.6L32 59l-5.6-21.4L5 32l21.4-5.6L32 5Z" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M14 14l12.8 12.8M50 14L37.2 26.8M14 50l12.8-12.8M50 50L37.2 37.2" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="32" cy="32" r="3" fill="currentColor"/>
</svg>`;

const marqueeItem = `${emblem}<span>MYTHBORN</span>`;
const marquee = `<div class="mythborn-marquee" aria-hidden="true"><div class="mythborn-marquee__track">${marqueeItem}${marqueeItem}${marqueeItem}${marqueeItem}</div></div>`;

const marqueeStyles = `<style>
  .mythborn-marquee {
    width: min(1180px, 100%);
    height: clamp(5.5rem, 8vw, 7rem);
    margin: 0 auto clamp(2.2rem, 4vw, 3.5rem);
    display: flex;
    align-items: center;
    overflow: hidden;
    color: rgba(196, 176, 255, .13);
    pointer-events: none;
    user-select: none;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
  .mythborn-marquee__track {
    display: flex;
    width: max-content;
    align-items: center;
    gap: clamp(2.2rem, 5vw, 5.5rem);
    animation: mythbornMarquee 50s linear infinite;
    will-change: transform;
  }
  .mythborn-marquee__track > span {
    color: transparent;
    -webkit-text-stroke: 1px rgba(196, 176, 255, .16);
    text-shadow: 0 0 24px rgba(166, 137, 255, .055);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.8rem, 6vw, 5.8rem);
    font-weight: 400;
    line-height: .9;
    letter-spacing: .08em;
    white-space: nowrap;
  }
  .mythborn-marquee__emblem {
    width: clamp(2.8rem, 5vw, 5rem);
    height: clamp(2.8rem, 5vw, 5rem);
    flex: 0 0 auto;
    filter: drop-shadow(0 0 16px rgba(166, 137, 255, .07));
  }
  @keyframes mythbornMarquee { to { transform: translateX(calc(-25% - 1.4rem)); } }
  @media (max-width: 760px) {
    .mythborn-marquee { height: 5.5rem; margin-bottom: 2rem; }
    .mythborn-marquee__track { animation: none; transform: translateX(-7%); gap: 2rem; }
    .mythborn-marquee__track > span { font-size: clamp(2.4rem, 12vw, 4rem); }
  }
  @media (prefers-reduced-motion: reduce) {
    .mythborn-marquee__track { animation: none; transform: translateX(-7%); }
  }
</style>`;

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
    html = html.replace('</head>', `${metadata}\n${marqueeStyles}\n</head>`);
    html = html.replace('    <footer>', `    ${marquee}\n\n    <footer>`);

    const headers = securityHeaders(new Headers(response.headers));
    headers.set('content-security-policy', "default-src 'self'; style-src 'unsafe-inline'; script-src 'self'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
    return new Response(html, { status: 200, headers });
  }
};