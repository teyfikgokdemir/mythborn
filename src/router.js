import app from './index.js';
import { register, login, logout, me, saveResult, resultHistory } from './auth.js';
import { requestVerification, verifyEmail, requestPasswordReset, cancelMembership, deleteAccount, paymentWebhook } from './account.js';
import { adminOverview, adminUsers, adminSetSubscription, adminPage } from './admin.js';
import { rateLimit, verifyTurnstile } from './abuse.js';

const SITE='https://mythborn.co';
const routes=new Set(['/','/deneyim','/uyelik','/giris','/kayit','/hesabim','/yonetim','/arketipler','/manifesto','/hakkinda','/gizlilik','/kvkk','/kullanim-kosullari','/cerezler','/mesafeli-satis','/on-bilgilendirme','/iptal-iade','/dogrula','/sifremi-unuttum','/sifre-yenile']);
const meta={
  '/':{title:'Mythborn — Türkçe Arzu ve Arketip Deneyimi',description:'Sembolik seçimlerle arzunun altındaki yönü keşfet. Üç ücretsiz seçim, sekiz arketip ve üyelikle açılan kişisel sonuç arşivi.'},
  '/deneyim':{title:'Arzu Motoru — Mythborn Deneyimi',description:'On sembolik seçimle baskın arketipini, ikincil izini, gölge yönünü ve gerçek ihtiyacını keşfet.'},
  '/arketipler':{title:'Sekiz Mythborn Arketipi',description:'Hükümdar, Kaçak, Taç, Yankı, Mimar, Gezgin, Ateş ve Simyacı arketiplerini keşfet.'},
  '/manifesto':{title:'Mythborn Manifestosu — Arzunun Adını Koy',description:'İnsan nesneleri değil; kontrol, görünürlük, aidiyet, kaçış, özgürlük ve seçilme hissini satın almaya çalışır.'},
  '/uyelik':{title:'Mythborn Üyeliği — Aylık 115 TL',description:'Tüm Mythborn deneyimleri, tam arketip sonuçları, kişisel arşiv ve paylaşılabilir sonuç kartları için tek üyelik.'},
  '/hakkinda':{title:'Mythborn Nedir?',description:'Mythborn, arzuları oynanabilir seçimlere ve sembolik arketiplere dönüştüren bağımsız Türkçe dijital deneyim platformudur.'}
};
const noindex=new Set(['/giris','/kayit','/hesabim','/yonetim','/dogrula','/sifremi-unuttum','/sifre-yenile']);
const llms=`# Mythborn\n\n> Mythborn, arzuları oynanabilir seçimlere, arketiplere ve kişisel sonuçlara dönüştüren Türkçe dijital deneyim platformudur.\n\n## Temel bilgiler\n- Resmî site: ${SITE}/\n- Dil: Türkçe\n- Ana deneyim: Arzu Motoru\n- Ücretsiz erişim: İlk 3 seçim ve gerçek ön iz\n- Tam deneyim: 10 seçim, 8 arketip, ikincil iz, gölge yön ve gerçek ihtiyaç\n- Üyelik: Aylık 115 TL olarak planlanmıştır\n- İletişim: info@mythborn.co\n\n## Arketipler\nHükümdar, Kaçak, Taç, Yankı, Mimar, Gezgin, Ateş ve Simyacı.\n\n## Önemli açıklama\nMythborn psikolojik teşhis, terapi, sağlık hizmeti veya klinik kişilik testi değildir. Eğlence, öz farkındalık ve dijital anlatı deneyimidir.\n`;
const publicRoutes=[...routes].filter(x=>!noindex.has(x));
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicRoutes.map(x=>`<url><loc>${SITE}${x}</loc><changefreq>${x==='/'?'weekly':'monthly'}</changefreq><priority>${x==='/'?'1.0':x==='/deneyim'?'0.9':'0.6'}</priority></url>`).join('')}</urlset>`;
const security=(h=new Headers())=>{h.set('strict-transport-security','max-age=31536000; includeSubDomains; preload');h.set('x-content-type-options','nosniff');h.set('referrer-policy','strict-origin-when-cross-origin');h.set('permissions-policy','camera=(), microphone=(), geolocation=(), payment=(self)');h.set('cross-origin-opener-policy','same-origin');h.set('x-frame-options','DENY');h.set('content-security-policy',"default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests");return h};
const text=(body,status,type)=>new Response(body,{status,headers:security(new Headers({'content-type':type,'cache-control':'public, max-age=300'}))});
const methodNotAllowed=()=>text(JSON.stringify({error:'Bu yöntem desteklenmiyor.'}),405,'application/json; charset=utf-8');

const abusePolicies={
  '/api/auth/register':{scope:'register',limit:5,windowSeconds:3600,turnstile:true},
  '/api/auth/login':{scope:'login',limit:12,windowSeconds:900,turnstile:true},
  '/api/auth/request-password-reset':{scope:'password_reset',limit:5,windowSeconds:3600,turnstile:true},
  '/api/auth/request-verification':{scope:'email_verification',limit:8,windowSeconds:3600},
  '/api/auth/verify-email':{scope:'verify_email_token',limit:15,windowSeconds:3600},
  '/api/results':{scope:'results',limit:60,windowSeconds:3600},
  '/api/webhooks/payment':{scope:'payment_webhook',limit:180,windowSeconds:60},
  '/api/admin/overview':{scope:'admin_overview',limit:120,windowSeconds:60},
  '/api/admin/users':{scope:'admin_users',limit:120,windowSeconds:60},
  '/api/admin/subscription':{scope:'admin_subscription',limit:30,windowSeconds:60}
};

async function protect(request,env,path){
  const policy=abusePolicies[path];if(!policy)return null;
  const limited=await rateLimit(request,env,policy);if(limited)return limited;
  if(policy.turnstile){const challenged=await verifyTurnstile(request,env);if(challenged)return challenged}
  return null;
}

async function api(request,env,path){
  if(!env.DB)return text(JSON.stringify({error:'Üyelik veritabanı henüz bağlanmadı.'}),503,'application/json; charset=utf-8');
  const blocked=await protect(request,env,path);if(blocked)return blocked;
  if(path==='/api/auth/register')return request.method==='POST'?register(request,env):methodNotAllowed();
  if(path==='/api/auth/login')return request.method==='POST'?login(request,env):methodNotAllowed();
  if(path==='/api/auth/logout')return request.method==='POST'?logout(request,env):methodNotAllowed();
  if(path==='/api/auth/me')return request.method==='GET'?me(request,env):methodNotAllowed();
  if(path==='/api/auth/request-verification')return request.method==='POST'?requestVerification(request,env):methodNotAllowed();
  if(path==='/api/auth/verify-email')return request.method==='POST'?verifyEmail(request,env):methodNotAllowed();
  if(path==='/api/auth/request-password-reset')return request.method==='POST'?requestPasswordReset(request,env):methodNotAllowed();
  if(path==='/api/account/cancel-membership')return request.method==='POST'?cancelMembership(request,env):methodNotAllowed();
  if(path==='/api/account/delete')return request.method==='DELETE'?deleteAccount(request,env):methodNotAllowed();
  if(path==='/api/webhooks/payment')return request.method==='POST'?paymentWebhook(request,env):methodNotAllowed();
  if(path==='/api/admin/overview')return request.method==='GET'?adminOverview(request,env):methodNotAllowed();
  if(path==='/api/admin/users')return request.method==='GET'?adminUsers(request,env):methodNotAllowed();
  if(path==='/api/admin/subscription')return request.method==='POST'?adminSetSubscription(request,env):methodNotAllowed();
  if(path==='/api/results'){
    if(request.method==='POST')return saveResult(request,env);
    if(request.method==='GET')return resultHistory(request,env);
    return methodNotAllowed();
  }
  return text(JSON.stringify({error:'API yolu bulunamadı.'}),404,'application/json; charset=utf-8');
}

function schemaFor(path,title,description){
  const graph=[
    {'@type':'Organization','@id':`${SITE}/#organization`,name:'Mythborn',url:`${SITE}/`,logo:`${SITE}/images/mythborn-emblem.png`,email:'info@mythborn.co'},
    {'@type':'WebSite','@id':`${SITE}/#website`,url:`${SITE}/`,name:'Mythborn',inLanguage:'tr-TR',publisher:{'@id':`${SITE}/#organization`}},
    {'@type':'WebPage','@id':`${SITE}${path}#webpage`,url:`${SITE}${path}`,name:title,description,inLanguage:'tr-TR',isPartOf:{'@id':`${SITE}/#website`}}
  ];
  if(path==='/deneyim'||path==='/')graph.push({'@type':'SoftwareApplication',name:'Mythborn Arzu Motoru',applicationCategory:'EntertainmentApplication',operatingSystem:'Web',inLanguage:'tr-TR',description:'Sembolik seçimleri sekiz arzu yönü üzerinden yorumlayan Türkçe dijital deneyim.',offers:{'@type':'Offer',price:'115',priceCurrency:'TRY',category:'subscription'}});
  if(path==='/')graph.push({'@type':'FAQPage',mainEntity:[
    {'@type':'Question',name:'Mythborn bir kişilik testi mi?',acceptedAnswer:{'@type':'Answer',text:'Hayır. Mythborn sembolik seçimleri sekiz arzu yönü üzerinden yorumlayan dijital bir deneyimdir; psikolojik teşhis veya klinik değerlendirme değildir.'}},
    {'@type':'Question',name:'Mythborn ücretsiz mi?',acceptedAnswer:{'@type':'Answer',text:'İlk üç seçim ve gerçek bir ön iz ücretsizdir. Tam arketip, ikincil iz, gölge yön ve kişisel arşiv üyelikle açılır.'}},
    {'@type':'Question',name:'Mythborn üyeliği ne kadar?',acceptedAnswer:{'@type':'Answer',text:'Üyelik aylık 115 TL olarak planlanmıştır ve hesap alanından iptal edilebilir.'}}
  ]});
  return JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c');
}

async function enhanceHtml(response,path){
  let html=await response.text();
  const data=meta[path]||{title:`${path.slice(1).replaceAll('-',' ')||'Mythborn'} — Mythborn`,description:'Mythborn Türkçe dijital deneyim platformu hakkında bilgilendirme.'};
  const canonical=`${SITE}${path==='/'?'/':path}`;
  html=html.replace(/<link rel="canonical"[^>]*>/g,'').replace(/<meta name="description"[^>]*>/g,'').replace(/<meta property="og:title"[^>]*>/g,'').replace(/<meta property="og:description"[^>]*>/g,'').replace(/<meta property="og:url"[^>]*>/g,'');
  const head=`<meta name="description" content="${data.description}"><link rel="canonical" href="${canonical}"><meta name="robots" content="${noindex.has(path)?'noindex,nofollow':'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}"><meta property="og:locale" content="tr_TR"><meta property="og:site_name" content="Mythborn"><meta property="og:title" content="${data.title}"><meta property="og:description" content="${data.description}"><meta property="og:url" content="${canonical}"><meta name="twitter:title" content="${data.title}"><meta name="twitter:description" content="${data.description}"><link rel="stylesheet" href="/platform.css"><link rel="stylesheet" href="/final.css"><script type="application/ld+json">${schemaFor(path,data.title,data.description)}</script>`;
  html=html.replace('</head>',`${head}</head>`).replace('</body>','<script src="/platform.js" defer></script><script src="/final.js" defer></script></body>');
  return new Response(html,{status:response.status,headers:response.headers});
}

export default{async fetch(request,env,ctx){
  const url=new URL(request.url);
  if(url.hostname==='www.mythborn.co'){url.hostname='mythborn.co';return Response.redirect(url.toString(),301)}
  let response;
  if(url.pathname.startsWith('/api/'))response=await api(request,env,url.pathname);
  else if(url.pathname==='/llms.txt')response=text(llms,200,'text/plain; charset=utf-8');
  else if(url.pathname==='/robots.txt')response=text(`User-agent: *\nAllow: /\nDisallow: /giris\nDisallow: /kayit\nDisallow: /hesabim\nDisallow: /yonetim\nDisallow: /api/\nSitemap: ${SITE}/sitemap.xml\n`,200,'text/plain; charset=utf-8');
  else if(url.pathname==='/sitemap.xml')response=text(sitemap,200,'application/xml; charset=utf-8');
  else if(url.pathname.startsWith('/images/')||['/app.css','/paywall.css','/legal.css','/platform.css','/platform.js','/final.css','/final.js','/admin.css','/admin.js','/app.js','/favicon.svg','/consent.js'].includes(url.pathname))response=await env.ASSETS.fetch(request);
  else if(url.pathname==='/yonetim')response=adminPage();
  else if(!routes.has(url.pathname))response=text('<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="robots" content="noindex"><title>404 — Mythborn</title><body><h1>Bu kapı henüz açılmadı.</h1><a href="/">Mythborn’a dön</a></body></html>',404,'text/html; charset=utf-8');
  else response=await enhanceHtml(await app.fetch(request,env,ctx),url.pathname);
  const headers=security(new Headers(response.headers));
  if(!url.pathname.startsWith('/api/'))headers.set('content-language','tr');
  if(url.pathname.startsWith('/api/')||url.pathname==='/yonetim')headers.set('cache-control','no-store');
  return new Response(response.body,{status:response.status,headers});
}};
