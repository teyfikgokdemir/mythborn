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

const LEGACY_SHOPIFY_PREFIXES=[
  '/products/',
  '/collections/',
  '/blogs/',
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
  '/cart',
  '/password',
  '/checkout',
  '/checkouts',
  '/customer_authentication',
  '/account/login/multipass'
]);

const stripLegacyLocale=pathname=>pathname.replace(/^\/(?:de|fr)(?=\/|$)/,'')||'/';

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

const robotsResponse=()=>new Response('User-agent: *\nAllow: /\n\nSitemap: https://mythborn.co/sitemap.xml\n',{headers:{
  'content-type':'text/plain; charset=utf-8',
  'cache-control':'public, max-age=3600'
}});

export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url);
    if(url.pathname==='/robots.txt')return robotsResponse();
    if(isLegacyShopifyPath(url.pathname))return goneResponse();

    const response=await app.fetch(request,env,ctx);
    const policy=response.headers.get('content-security-policy');
    if(!policy)return response;
    const headers=new Headers(response.headers);
    headers.set('content-security-policy',allowAnalyticsProviders(policy));
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};
