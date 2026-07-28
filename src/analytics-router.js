import app from './app-router.js';

const appendSources=(policy,directive,sources)=>{
  const pattern=new RegExp(`(^|;\\s*)${directive}\\s+([^;]*)`);
  const match=policy.match(pattern);
  if(!match)return `${policy.replace(/;?\s*$/,'')}; ${directive} ${sources.join(' ')}`;
  const existing=new Set(match[2].trim().split(/\s+/).filter(Boolean));
  sources.forEach(source=>existing.add(source));
  return policy.replace(pattern,`${match[1]}${directive} ${[...existing].join(' ')}`);
};

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
    'https://cloudflareinsights.com'
  ]);
  return next;
};

const LEGACY_EXACT_REDIRECTS=new Map([
  ['/search','/arama'],
  ['/en/search','/en/arama'],
  ['/gr/search','/gr/arama'],
  ['/el/search','/gr/arama'],
  ['/account/login','/giris'],
  ['/account/register','/kayit'],
  ['/account','/hesabim'],
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

    const response=await app.fetch(request,env,ctx);
    const policy=response.headers.get('content-security-policy');
    if(!policy)return response;
    const headers=new Headers(response.headers);
    headers.set('content-security-policy',allowAnalyticsProviders(policy));
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};

