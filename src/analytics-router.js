import app from './app-router.js';

const appendSources=(policy,directive,sources)=>{
  const pattern=new RegExp(`(^|;\\s*)${directive}\\s+([^;]*)`);
  const match=policy.match(pattern);
  if(!match)return `${policy.replace(/;?\s*$/,'')}; ${directive} ${sources.join(' ')}`;
  const existing=new Set(match[2].trim().split(/\s+/).filter(Boolean));
  sources.forEach(source=>existing.add(source));
  return policy.replace(pattern,`${match[1]}${directive} ${[...existing].join(' ')}`);
};

const GTM_ID='GTM-PKC69D3L';
const GTM_HEAD=`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');</script>
<!-- End Google Tag Manager -->`;
const GTM_BODY=`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

const BASE_CONTENT_SECURITY_POLICY="default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'";

const allowAnalyticsProviders=policy=>{
  let next=policy;
  next=appendSources(next,'script-src',[
    'https://www.googletagmanager.com',
    'https://static.cloudflareinsights.com'
  ]);
  next=appendSources(next,'frame-src',['https://www.googletagmanager.com']);
  next=appendSources(next,'connect-src',[
    'https://www.google-analytics.com',
    'https://analytics.google.com',
    'https://region1.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://cloudflareinsights.com',
    'https://pagead2.googlesyndication.com'
  ]);
  next=appendSources(next,'img-src',['https://pagead2.googlesyndication.com','https://teyfikgokdemir.com']);
  return next;
};

const secureHtmlResponse=async response=>{
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
  const html=await response.text();
  const taggedHtml=html
    .replace(/<head(\s[^>]*)?>/i,match=>`${match}${GTM_HEAD}`)
    .replace(/<body(\s[^>]*)?>/i,match=>`${match}${GTM_BODY}`);
  return new Response(taggedHtml,{status:response.status,statusText:response.statusText,headers});
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

const stripLegacyLocale=pathname=>pathname.toLowerCase().replace(/^\/(?:en|gr|el|de|fr|es|it)(?=\/|$)/,'')||'/';

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
    return cacheStaticAssetResponse(await secureHtmlResponse(response),url);
  }
};

