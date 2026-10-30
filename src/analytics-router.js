import app from './app-router.js';

const appendSources=(policy,directive,sources)=>{
  const pattern=new RegExp(`(^|;\\s*)${directive}\\s+([^;]*)`);
  const match=policy.match(pattern);
  if(!match)return `${policy.replace(/;?\s*$/,'')}; ${directive} ${sources.join(' ')}`;
  const existing=new Set(match[2].trim().split(/\s+/).filter(Boolean));
  sources.forEach(source=>existing.add(source));
  return policy.replace(pattern,`${match[1]}${directive} ${[...existing].join(' ')}`);
};

const BASE_CONTENT_SECURITY_POLICY="default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://cansu.teyfikgokdemir.com https://teyfikgokdemir.com https://cansu-umami.onrender.com; connect-src 'self' https://challenges.cloudflare.com https://cansu.teyfikgokdemir.com https://teyfikgokdemir.com https://cansu-umami.onrender.com; frame-src https://challenges.cloudflare.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'";

const allowAnalyticsProviders=policy=>{
  let next=policy;
  next=appendSources(next,'script-src',[
    'https://www.googletagmanager.com',
    'https://www.clarity.ms',
    'https://scripts.clarity.ms',
    'https://static.cloudflareinsights.com',
    'https://cansu.teyfikgokdemir.com',
    'https://teyfikgokdemir.com',
    'https://cansu-umami.onrender.com'
  ]);
  next=appendSources(next,'frame-src',['https://www.googletagmanager.com']);
  next=appendSources(next,'connect-src',[
    'https://www.google-analytics.com',
    'https://analytics.google.com',
    'https://region1.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://cloudflareinsights.com',
    'https://*.clarity.ms',
    'https://pagead2.googlesyndication.com',
    'https://cansu.teyfikgokdemir.com',
    'https://teyfikgokdemir.com',
    'https://cansu-umami.onrender.com'
  ]);
  next=appendSources(next,'img-src',['https://www.googletagmanager.com','https://www.google-analytics.com','https://pagead2.googlesyndication.com','https://www.clarity.ms','https://*.clarity.ms','https://cansu.teyfikgokdemir.com','https://teyfikgokdemir.com']);
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
  return new Response(html,{status:response.status,statusText:response.statusText,headers});
};

const cacheStaticAssetResponse=(response,url)=>{
  const contentType=response.headers.get('content-type')||'';
  const isAiReferenceFile=/^\/(?:llms(?:\.[a-z]{2})?\.txt|llms-full(?:\.[a-z]{2})?\.txt|ai-fact-sheet\.(?:txt|json)|(?:ai-catalog|\.well-known\/(?:ai-catalog|ai-plugin|agent-manifest|ard|openapi))\.json|sitemap(?:-video)?\.xml)$/.test(url.pathname);
  const isStaticAsset=response.ok&&(isAiReferenceFile||/^(text\/css|text\/javascript|application\/javascript|image\/|font\/|application\/font)/i.test(contentType));
  if(!isStaticAsset)return response;
  const headers=new Headers(response.headers);
  if(isAiReferenceFile){
    headers.set('cache-control','public, max-age=60, s-maxage=60, must-revalidate');
    headers.set('access-control-allow-origin','*');
  }else{
    headers.set('cache-control','public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
  }
  headers.set('x-content-type-options','nosniff');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
};

const resolveLegacyRedirect=(pathname)=>{
  const lower=pathname.toLowerCase();
  if(
    lower==='/'||lower.startsWith('/api/')||lower.startsWith('/yonetim')||
    lower.startsWith('/.well-known/')||lower.startsWith('/images/')||lower.startsWith('/videos/')||
    /\.[a-z0-9]{2,8}$/i.test(lower)
  ) return null;

  let locale='tr';
  let clean=lower;
  const m=lower.match(/^\/(en|gr|el|es|ar)(?=\/|$)/);
  if(m){
    locale=m[1]==='el'?'gr':m[1];
    clean=lower.slice(m[0].length)||'/';
  }

  const prefix=locale==='tr'?'':'/'+locale;
  const areasTarget=locale==='tr'?'/kesif-alanlari':prefix+'/areas';
  const videosTarget=locale==='tr'?'/videolar#burclar':prefix+'/videos#burclar';
  const blogTarget=locale==='tr'?'/blog':prefix+'/blog';
  const homeTarget=locale==='tr'?'/':prefix;
  const privacyTarget=locale==='tr'?'/gizlilik':prefix+'/privacy';
  const termsTarget=locale==='tr'?'/kullanim-kosullari':prefix+'/terms';
  const kvkkTarget=locale==='tr'?'/kvkk':prefix+'/kvkk';

  const activeRoutes=new Set([
    '/','/kesif-alanlari','/areas','/yaklasim','/approach',
    '/videolar','/videos','/blog','/iletisim','/contact',
    '/yorumcu-basvuru','/apply','/kvkk','/gizlilik','/privacy',
    '/kullanim-kosullari','/terms'
  ]);
  if(activeRoutes.has(clean)) return null;
  if(clean.startsWith('/blog/')) return null;

  if(clean==='/haftalik-burc'||clean==='/weekly-horoscope') return videosTarget;
  if(clean==='/tarot'||clean==='/gunluk-kart'||clean==='/otuz-gun'||clean==='/kariyer'||clean==='/deneyim'||clean==='/tarot-kartlari'||clean.startsWith('/tarot-kartlari/')||clean==='/tarot-cards'||clean.startsWith('/tarot-cards/')) return areasTarget;
  if(clean==='/katina'||clean==='/ask'||clean==='/sinastri'||clean==='/burc-uyumu') return areasTarget;
  if(clean==='/astroloji'||clean==='/vedik-astroloji'||clean==='/nakshatra-dasha'||clean==='/kadim-gokyuzu'||clean==='/bugunun-gokyuzu'||clean==='/ay-takvimi'||clean==='/dogum-haritasi'||clean==='/astroloji-kutuphanesi'||clean.startsWith('/astroloji-kutuphanesi/')||clean==='/astroloji-sozlugu'||clean.startsWith('/astroloji-sozlugu/')||clean==='/advanced-astrology'||clean.startsWith('/advanced-astrology/')||clean==='/astrology-library'||clean.startsWith('/astrology-library/')) return areasTarget;
  if(clean==='/ruya-yorumlari'||clean==='/ruya-sembolleri'||clean.startsWith('/ruya-sembolleri/')||clean==='/numeroloji'||clean==='/dream-symbols'||clean.startsWith('/dream-symbols/')) return areasTarget;
  if(clean==='/maya-zaman-donguleri'||clean==='/mezopotamya-astrolojisi'||clean==='/doga-gokyuzu-donguleri'||clean==='/travma-bilincli-astroloji') return blogTarget;
  if(clean==='/search') return locale==='tr'?'/arama':prefix+'/arama';
  if(clean==='/giris'||clean==='/kayit'||clean==='/hesabim'||clean==='/account'||clean.startsWith('/account/')||clean==='/login'||clean==='/register') return homeTarget;
  if(clean.startsWith('/pages/cookie')) return '/cerezler';
  if(clean==='/cerezler'||clean.startsWith('/pages/privacy')) return privacyTarget;
  if(clean.startsWith('/pages/terms')) return termsTarget;
  if(clean.startsWith('/pages/kvkk')) return kvkkTarget;
  if(clean.startsWith('/pages/contact')) return locale==='tr'?'/iletisim':prefix+'/contact';
  if(clean.startsWith('/pages/about')) return locale==='tr'?'/yaklasim':prefix+'/approach';

  return null;
};

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

const robotsResponse=()=>new Response(
  `User-agent: *
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt
Allow: /ai-catalog.json
Allow: /.well-known/
Disallow: /api/
Disallow: /yonetim

User-agent: GPTBot
Allow: /
Disallow: /api/

User-agent: OAI-SearchBot
Allow: /
Disallow: /api/

User-agent: ChatGPT-User
Allow: /
Disallow: /api/

User-agent: ClaudeBot
Allow: /
Disallow: /api/

User-agent: Claude-Web
Allow: /
Disallow: /api/

User-agent: anthropic-ai
Allow: /
Disallow: /api/

User-agent: PerplexityBot
Allow: /
Disallow: /api/

User-agent: Perplexity-Search
Allow: /
Disallow: /api/

User-agent: Google-Extended
Allow: /
Disallow: /api/

User-agent: GoogleOther
Allow: /
Disallow: /api/

User-agent: Applebot-Extended
Allow: /
Disallow: /api/

User-agent: Meta-ExternalAgent
Allow: /
Disallow: /api/

User-agent: FacebookBot
Allow: /
Disallow: /api/

User-agent: Amazonbot
Allow: /
Disallow: /api/

User-agent: cohere-ai
Allow: /
Disallow: /api/

User-agent: DuckAssistBot
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /api/

Sitemap: https://mythborn.co/sitemap.xml
Sitemap: https://mythborn.co/sitemap-video.xml
Agentmap: https://mythborn.co/.well-known/ard.json
Agentmap: https://mythborn.co/.well-known/ai-catalog.json

# LLM Contexts (llmstxt.org):
# https://mythborn.co/llms.txt
# https://mythborn.co/llms-full.txt
# https://mythborn.co/llms.en.txt
# https://mythborn.co/llms-full.en.txt
# https://mythborn.co/llms.gr.txt
# https://mythborn.co/llms-full.gr.txt
# https://mythborn.co/llms.es.txt
# https://mythborn.co/llms-full.es.txt
# https://mythborn.co/llms.ar.txt
# https://mythborn.co/llms-full.ar.txt

# Agent Resource Discovery (ARD) & AI Manifests:
# https://mythborn.co/.well-known/ai-catalog.json
# https://mythborn.co/ai-catalog.json
# https://mythborn.co/.well-known/agent-manifest.json
# https://mythborn.co/.well-known/ard.json
# https://mythborn.co/.well-known/ai-plugin.json
# https://mythborn.co/.well-known/openapi.json
# https://mythborn.co/ai-fact-sheet.txt
# https://mythborn.co/ai-fact-sheet.json
`,
  {
    headers:{
      'content-type':'text/plain; charset=utf-8',
      'cache-control':'public, max-age=3600',
      'access-control-allow-origin':'*'
    }
  }
);

const DORMANT_PRODUCTION_API_PREFIXES=['/api/auth/','/api/account/','/api/admin/'];
const DORMANT_PRODUCTION_API_EXACT=new Set(['/api/results','/api/webhooks/payment']);
const isDormantProductionApi=pathname=>
  DORMANT_PRODUCTION_API_EXACT.has(pathname)||
  DORMANT_PRODUCTION_API_PREFIXES.some(prefix=>pathname.startsWith(prefix));

const dormantApiResponse=()=>new Response(JSON.stringify({error:'Not found'}),{
  status:404,
  headers:{
    'content-type':'application/json; charset=utf-8',
    'cache-control':'no-store',
    'x-content-type-options':'nosniff',
    'referrer-policy':'no-referrer'
  }
});

export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url);
    const cfVisitor=request.headers.get('cf-visitor')||'';
    const originalSchemeIsHttp=url.protocol!=='https:'||/"scheme"\s*:\s*"http"/i.test(cfVisitor);
    if(originalSchemeIsHttp||url.hostname==='www.mythborn.co'){
      url.protocol='https:';
      url.hostname='mythborn.co';
      return Response.redirect(url.toString(),301);
    }
    if(url.pathname.length>1&&url.pathname.endsWith('/')){
      url.pathname=url.pathname.slice(0,-1);
      return Response.redirect(url.toString(),301);
    }
    if(url.pathname==='/robots.txt')return robotsResponse();
    if(env.ENVIRONMENT==='production'&&isDormantProductionApi(url.pathname))return dormantApiResponse();
    const legacyTarget=resolveLegacyRedirect(url.pathname);
    if(legacyTarget)return Response.redirect(`https://mythborn.co${legacyTarget}`,301);
    if(isLegacyShopifyPath(url.pathname))return goneResponse();

    const response=await app.fetch(request,env,ctx);
    return cacheStaticAssetResponse(await secureHtmlResponse(response),url);
  }
};
