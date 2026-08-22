import app from './app-router.js';

const HOME_EXPERIENCE_OVERRIDE="/* ResponsiveHeroBanner adaptation for Mythborn: cinematic, multilingual and data-led. */\n.mythborn-hero-banner{position:relative;isolation:isolate;overflow:hidden;min-height:clamp(650px,78vh,820px);padding:clamp(42px,7vw,92px) clamp(22px,5vw,76px)!important;grid-template-columns:minmax(0,.9fr) minmax(360px,1.1fr)!important;gap:clamp(28px,5vw,72px)!important;align-items:center!important;background:linear-gradient(90deg,rgba(8,8,18,.98) 0%,rgba(8,8,18,.92) 38%,rgba(8,8,18,.62) 70%,rgba(8,8,18,.35) 100%),url('/images/cinematic/home/hero-celestial-1440.webp') center/cover no-repeat!important;border:1px solid rgba(232,200,131,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 30px 90px rgba(0,0,0,.18)}\n.mythborn-hero-banner::before{content:\"\";position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 74% 28%,rgba(166,137,255,.22),transparent 24%),radial-gradient(circle at 90% 76%,rgba(239,173,125,.12),transparent 29%);pointer-events:none}\n.mythborn-hero-banner::after{content:\"\";position:absolute;inset:10px;z-index:-1;border:1px solid rgba(255,244,234,.08);pointer-events:none}\n.mythborn-hero-copy{position:relative;z-index:2;max-width:720px!important}\n.mythborn-hero-copy .eyebrow{margin-top:22px;color:var(--myth-copper,#efad7d)}\n.mythborn-hero-copy h1{max-width:760px;margin:15px 0 20px;font-size:clamp(54px,7vw,108px)!important;line-height:.9!important;letter-spacing:-.045em!important}\n.mythborn-hero-copy h1 em{display:block;color:#f4eee5;font-style:italic}\n.mythborn-hero-copy .lead{max-width:660px;color:#d0c7d5;font-size:clamp(16px,1.45vw,20px)!important;line-height:1.65!important}\n.mythborn-hero-copy .actions{margin-top:32px;justify-content:flex-start;flex-wrap:wrap}\n.mythborn-hero-badge{display:inline-flex;align-items:center;gap:10px;padding:9px 13px;border:1px solid rgba(232,200,131,.26);border-radius:999px;background:rgba(8,8,18,.42);color:#f4eee5;font:800 10px/1 system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;backdrop-filter:blur(10px)}\n.mythborn-hero-badge-dot{width:7px;height:7px;border-radius:50%;background:#efad7d;box-shadow:0 0 0 5px rgba(239,173,125,.12),0 0 18px rgba(239,173,125,.7)}\n.mythborn-hero-sky{position:relative;z-index:2;width:100%;max-width:620px!important;justify-self:end;padding:clamp(20px,3vw,34px)!important;border-color:rgba(232,200,131,.28)!important;background:linear-gradient(145deg,rgba(13,13,32,.78),rgba(8,8,18,.92))!important;box-shadow:0 24px 80px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.08);backdrop-filter:blur(12px)}\n.mythborn-hero-sky::before{content:\"\";position:absolute;inset:12px;border:1px solid rgba(166,137,255,.18);border-radius:22px;pointer-events:none}\n.mythborn-hero-scroll-hint{position:absolute;right:clamp(22px,4vw,56px);bottom:22px;display:flex;align-items:center;gap:10px;color:rgba(244,238,229,.56);font:800 9px/1 system-ui,sans-serif;letter-spacing:.18em;writing-mode:vertical-rl}\n.mythborn-hero-scroll-hint span{display:block;width:1px;height:38px;background:linear-gradient(#efad7d,transparent)}\n.mythborn-partner-strip{padding-top:clamp(32px,5vw,58px)!important;padding-bottom:clamp(32px,5vw,58px)!important;border-block:1px solid rgba(232,200,131,.14);background:linear-gradient(100deg,rgba(14,11,28,.7),rgba(31,18,35,.36))}\n.mythborn-partner-intro{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.8fr);gap:30px;align-items:end;margin-bottom:26px}\n.mythborn-partner-intro h2{max-width:620px;margin:10px 0 0;font-size:clamp(30px,4vw,54px);line-height:.98}\n.mythborn-partner-intro>p{margin:0;color:#aaa2b0;font-size:13px;line-height:1.7}\n.mythborn-partner-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}\n.mythborn-partner-grid>a{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:12px;align-items:center;min-height:86px;padding:16px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(255,255,255,.035);transition:transform .18s var(--ease-out,cubic-bezier(.23,1,.32,1)),border-color .18s var(--ease-out,cubic-bezier(.23,1,.32,1)),background .18s var(--ease-out,cubic-bezier(.23,1,.32,1))}\n.mythborn-partner-grid>a:hover,.mythborn-partner-grid>a:focus-visible{transform:translateY(-3px);border-color:rgba(239,173,125,.46);background:rgba(239,173,125,.08)}\n.mythborn-partner-mark{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(232,200,131,.36);border-radius:50%;color:#f4eee5;background:rgba(232,200,131,.08);font:24px Georgia,serif}\n.mythborn-partner-copy{display:grid;gap:4px;min-width:0}.mythborn-partner-copy strong{font:22px Georgia,serif;color:#f4eee5}.mythborn-partner-copy small{overflow:hidden;color:#aaa2b0;font-size:11px;line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.mythborn-partner-arrow{color:#efad7d;font-size:20px}\n@media(max-width:1000px){.mythborn-hero-banner{min-height:0;grid-template-columns:1fr!important;background-position:64% center!important}.mythborn-hero-copy{max-width:780px!important}.mythborn-hero-sky{justify-self:stretch;max-width:none!important}.mythborn-partner-intro{grid-template-columns:1fr}.mythborn-hero-scroll-hint{display:none}}\n@media(max-width:640px){.mythborn-hero-banner{min-height:0;padding:38px 18px 54px!important;background-position:68% center!important}.mythborn-hero-banner::after{inset:7px}.mythborn-hero-copy h1{font-size:clamp(48px,15vw,74px)!important}.mythborn-hero-copy .lead{font-size:15px!important}.mythborn-hero-copy .actions{display:grid;gap:10px;margin-top:26px}.mythborn-hero-copy .actions .btn{width:100%;justify-content:center}.mythborn-hero-sky{padding:16px!important}.mythborn-partner-grid{grid-template-columns:1fr}.mythborn-partner-grid>a{min-height:72px}.mythborn-partner-copy strong{font-size:20px}.mythborn-partner-intro h2{font-size:38px}}\n@media(prefers-reduced-motion:reduce){.mythborn-partner-grid>a{transition:none}}\n";

const appendSources=(policy,directive,sources)=>{
  const pattern=new RegExp(`(^|;\\s*)${directive}\\s+([^;]*)`);
  const match=policy.match(pattern);
  if(!match)return `${policy.replace(/;?\s*$/,'')}; ${directive} ${sources.join(' ')}`;
  const existing=new Set(match[2].trim().split(/\s+/).filter(Boolean));
  sources.forEach(source=>existing.add(source));
  return policy.replace(pattern,`${match[1]}${directive} ${[...existing].join(' ')}`);
};

const HOME_HERO_CRITICAL_STYLE="<style id=\"mythborn-hero-critical\">.localized-home .mythborn-hero-banner{background-color:#080812!important;background-image:linear-gradient(90deg,rgba(8,8,18,.98) 0%,rgba(8,8,18,.92) 38%,rgba(8,8,18,.62) 70%,rgba(8,8,18,.35) 100%),url('/images/cinematic/home/hero-celestial-1440.webp')!important;background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important}.localized-home .mythborn-hero-banner h1{letter-spacing:-.045em!important}</style>";

const BASE_CONTENT_SECURITY_POLICY="default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'";

const allowAnalyticsProviders=policy=>{
  let next=policy;
  next=appendSources(next,'script-src',[
    'https://www.googletagmanager.com',
    'https://static.cloudflareinsights.com'
  ]);
  next=appendSources(next,'connect-src',[
    'https://www.google-analytics.com',
    'https://analytics.google.com',
    'https://region1.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://cloudflareinsights.com',
    'https://pagead2.googlesyndication.com'
  ]);
  next=appendSources(next,'img-src',['https://pagead2.googlesyndication.com']);
  return next;
};

const secureHtmlResponse=response=>{
  const contentType=response.headers.get('content-type')||'';
  if(!contentType.includes('text/html'))return response;
  const headers=new Headers(response.headers);
  const policy=headers.get('content-security-policy')||BASE_CONTENT_SECURITY_POLICY;
  headers.set('content-security-policy',allowAnalyticsProviders(policy));
  headers.set('strict-transport-security','max-age=31536000; includeSubDomains; preload');
  headers.set('x-content-type-options','nosniff');
  headers.set('x-frame-options','DENY');
  headers.set('referrer-policy','strict-origin-when-cross-origin');
  headers.set('permissions-policy','camera=(), microphone=(), payment=(), geolocation=()');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
};

const cacheStaticAssetResponse=(response,url)=>{
  const contentType=response.headers.get('content-type')||'';
  const isAiReferenceFile=/^\/(?:llms\.txt|ai-fact-sheet\.txt)$/.test(url.pathname);
  const isStaticAsset=response.ok&&(isAiReferenceFile||/^(text\/css|text\/javascript|application\/javascript|image\/|font\/|application\/font)/i.test(contentType));
  if(!isStaticAsset)return response;
  const headers=new Headers(response.headers);
  headers.set('cache-control',isAiReferenceFile?'public, max-age=60, s-maxage=60, must-revalidate':'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
  headers.set('x-content-type-options','nosniff');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
};

const LEGACY_EXACT_REDIRECTS=new Map([
  ['/search','/arama'],
  ['/en/search','/en/arama'],
  ['/gr/search','/gr/arama'],
  ['/el/search','/gr/arama'],
  ['/es/search','/es/arama'],
  ['/account/login','/'],
  ['/account/register','/'],
  ['/account','/'],
  ['/giris','/'],
  ['/kayit','/'],
  ['/hesabim','/'],
  ['/en/giris','/en'],
  ['/en/kayit','/en'],
  ['/en/hesabim','/en'],
  ['/gr/giris','/gr'],
  ['/gr/kayit','/gr'],
  ['/gr/hesabim','/gr'],
  ['/pages/privacy','/gizlilik'],
  ['/pages/privacy-policy','/gizlilik'],
  ['/pages/terms','/kullanim-kosullari'],
  ['/pages/terms-of-service','/kullanim-kosullari'],
  ['/pages/terms-and-conditions','/kullanim-kosullari'],
  ['/pages/cookies','/cerezler'],
  ['/pages/cookie-policy','/cerezler'],
  ['/pages/kvkk','/kvkk'],
  ['/pages/kvkk-aydinlatma-metni','/kvkk']
]);

const LEGACY_SHOPIFY_PREFIXES=[
  '/products/',
  '/collections/',
  '/blogs/',
  '/pages/',
  '/web-pixels@',
  '/cdn/shop/',
  '/checkouts/',
  '/checkout/',
  '/customer_authentication/',
  '/account/login/multipass/',
  '/apps/shop/',
  '/recommendations/products'
];

const LEGACY_SHOPIFY_EXACT=new Set([
  '/products',
  '/collections',
  '/blogs',
  '/pages',
  '/cart',
  '/password',
  '/checkout',
  '/checkouts',
  '/customer_authentication',
  '/account/login/multipass'
]);

const stripLegacyLocale=pathname=>pathname.toLowerCase().replace(/^\/(?:de|fr|es|it)(?=\/|$)/,'')||'/';

const isLegacyShopifyPath=pathname=>{
  const normalized=stripLegacyLocale(pathname.replace(/\/+$/,'')||'/');
  return LEGACY_SHOPIFY_EXACT.has(normalized)||LEGACY_SHOPIFY_PREFIXES.some(prefix=>normalized.startsWith(prefix));
};

const goneResponse=()=>new Response('Gone',{status:410,headers:{
  'content-type':'text/plain; charset=utf-8',
  'cache-control':'public, max-age=86400',
  'x-robots-tag':'noindex, nofollow',
  'x-content-type-options':'nosniff',
  'referrer-policy':'no-referrer'
}});

const robotsResponse=()=>new Response('User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /yonetim\nSitemap: https://mythborn.co/sitemap.xml\n',{headers:{
  'content-type':'text/plain; charset=utf-8',
  'cache-control':'public, max-age=3600'
}});

export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url);
    if(url.hostname==='www.mythborn.co'){
      url.hostname='mythborn.co';
      return Response.redirect(url.toString(),301);
    }
    if(url.pathname.length>1&&url.pathname.endsWith('/')){
      url.pathname=url.pathname.slice(0,-1);
      return Response.redirect(url.toString(),301);
    }
    if(url.pathname==='/robots.txt')return robotsResponse();
    if(LEGACY_EXACT_REDIRECTS.has(url.pathname)){
      return Response.redirect(`https://mythborn.co${LEGACY_EXACT_REDIRECTS.get(url.pathname)}`,301);
    }
    if(isLegacyShopifyPath(url.pathname))return goneResponse();

    if(url.pathname==='/home-experience.css'&&env.ASSETS){
      const asset=await env.ASSETS.fetch(request);
      if(asset.ok){
        const headers=new Headers(asset.headers);
        headers.set('cache-control','public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
        return new Response((await asset.text())+'\n'+HOME_EXPERIENCE_OVERRIDE,{status:asset.status,statusText:asset.statusText,headers});
      }
    }
    let response=await app.fetch(request,env,ctx);
    if(url.pathname==='/' && (response.headers.get('content-type')||'').includes('text/html')){
      const headers=new Headers(response.headers);
      const html=(await response.text()).replace('</head>',HOME_HERO_CRITICAL_STYLE+'</head>');
      response=new Response(html,{status:response.status,statusText:response.statusText,headers});
    }
    return cacheStaticAssetResponse(secureHtmlResponse(response),url);
  }
};

