import app from './index.js';
import { discoveryPage } from './discover.js';
import { register,login,logout,me,saveResult,resultHistory } from './auth.js';
import { requestVerification,verifyEmail,requestPasswordReset,cancelMembership,deleteAccount,paymentWebhook } from './account.js';
import { adminOverview,adminUsers,adminSetSubscription,adminReadiness,adminPage } from './admin.js';
import { rateLimit,verifyTurnstile } from './abuse.js';
import { calculateNatalChart } from './astrology.js';
const SITE='https://mythborn.co';
const discoveryRoutes=new Set(['/ruya-yorumlari','/burc-uyumu','/numeroloji','/ay-takvimi']);
const routes=new Set(['/','/gunluk-kart','/deneyim','/tarot','/ask','/kariyer','/otuz-gun','/katina','/astroloji','/haftalik-burc','/ruya-yorumlari','/burc-uyumu','/numeroloji','/ay-takvimi','/giris','/kayit','/hesabim','/yonetim','/gizlilik','/kvkk','/kullanim-kosullari','/cerezler']);
const publicRoutes=['/','/gunluk-kart','/tarot','/ask','/kariyer','/otuz-gun','/katina','/astroloji','/haftalik-burc','/ruya-yorumlari','/burc-uyumu','/numeroloji','/ay-takvimi','/gizlilik','/kvkk','/kullanim-kosullari','/cerezler'];
const noindex=new Set(['/giris','/kayit','/hesabim','/yonetim']);
const metadata={
'/':['Ücretsiz Tarot, Doğum Haritası ve Astroloji — Mythborn','Günlük Tarot kartı, gerçek doğum haritası, haftalık burç, Katina ve astroloji deneyimleri.'],
'/gunluk-kart':['Günlük Ücretsiz Tarot Kartı — Mythborn','Üye olmadan her gün tek Tarot kartını aç ve günün sembolik mesajını gör.'],
'/tarot':['Ücretsiz 3 Kart Tarot — Mythborn','Ücretsiz üyelikle geçmiş, şimdi ve yakın gelecek için üç kart Tarot açılımı.'],
'/katina':['Ücretsiz Katina Aşk Falı — Mythborn','Ücretsiz üyelikle ilişki dinamikleri ve duygusal bağlar için Katina açılımı.'],
'/astroloji':['Gerçek Doğum Haritası Hesaplama — Mythborn','Doğum tarihi, saati ve yerine göre Güneş, Ay, Yükselen, MC, gezegenler, evler ve açılar.'],
'/haftalik-burc':['Haftalık Burç Yorumları — Mythborn','12 burç için haftalık aşk, kariyer, para, enerji ve dikkat noktaları.'],
'/ruya-yorumlari':['Rüya Yorumları — Mythborn','Rüyandaki sembolleri, duyguları ve tekrar eden temaları yapılandırılmış biçimde yorumla.'],
'/burc-uyumu':['Burç Uyumu — Mythborn','İki burcun element, nitelik ve ilişki dinamiklerini karşılaştır.'],
'/numeroloji':['Numeroloji Hesaplama — Mythborn','Doğum tarihinden yaşam yolu, isimden ifade sayısı hesapla.'],
'/ay-takvimi':['Ay Takvimi ve Ay Fazı — Mythborn','Bugünkü Ay fazını, aydınlanma oranını ve döngünün temasını gör.']};
const security=(h=new Headers())=>{h.set('strict-transport-security','max-age=31536000; includeSubDomains; preload');h.set('x-content-type-options','nosniff');h.set('x-frame-options','DENY');h.set('referrer-policy','strict-origin-when-cross-origin');h.set('permissions-policy','camera=(), microphone=(), geolocation=(), payment=()');h.set('content-security-policy',"default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'");return h};
const response=(body,status=200,type='text/plain; charset=utf-8')=>new Response(body,{status,headers:security(new Headers({'content-type':type,'cache-control':status===200?'public, max-age=300':'no-store'}))});
const json=(data,status=200)=>response(JSON.stringify(data),status,'application/json; charset=utf-8');
const method=()=>json({error:'Bu yöntem desteklenmiyor.'},405);
const policies={
'/api/auth/register':{scope:'register',limit:5,windowSeconds:3600,turnstile:true},
'/api/auth/login':{scope:'login',limit:12,windowSeconds:900,turnstile:true},
'/api/auth/request-password-reset':{scope:'password_reset',limit:5,windowSeconds:3600,turnstile:true},
'/api/astrology/chart':{scope:'natal_chart',limit:20,windowSeconds:3600},
'/api/results':{scope:'results',limit:60,windowSeconds:3600},
'/api/admin/overview':{scope:'admin',limit:120,windowSeconds:60},
'/api/admin/users':{scope:'admin',limit:120,windowSeconds:60},
'/api/admin/subscription':{scope:'admin',limit:30,windowSeconds:60}};
async function protect(request,env,path){const p=policies[path];if(!p)return null;const limited=await rateLimit(request,env,p);if(limited)return limited;if(p.turnstile){const checked=await verifyTurnstile(request,env);if(checked)return checked}return null}
async function api(request,env,path){
const blocked=await protect(request,env,path);if(blocked)return blocked;
if(path==='/api/astrology/chart')return request.method==='POST'?calculateNatalChart(request):method();
if(!env.DB)return json({error:'Üyelik veritabanı henüz bağlanmadı.'},503);
if(path==='/api/auth/register')return request.method==='POST'?register(request,env):method();
if(path==='/api/auth/login')return request.method==='POST'?login(request,env):method();
if(path==='/api/auth/logout')return request.method==='POST'?logout(request,env):method();
if(path==='/api/auth/me')return request.method==='GET'?me(request,env):method();
if(path==='/api/auth/request-verification')return request.method==='POST'?requestVerification(request,env):method();
if(path==='/api/auth/verify-email')return request.method==='POST'?verifyEmail(request,env):method();
if(path==='/api/auth/request-password-reset')return request.method==='POST'?requestPasswordReset(request,env):method();
if(path==='/api/account/cancel-membership')return request.method==='POST'?cancelMembership(request,env):method();
if(path==='/api/account/delete')return request.method==='DELETE'?deleteAccount(request,env):method();
if(path==='/api/webhooks/payment'){if(String(env.PAYMENTS_ENABLED||'false')!=='true')return json({error:'Ödeme sistemi kapalı.'},503);return request.method==='POST'?paymentWebhook(request,env):method()}
if(path==='/api/admin/overview')return request.method==='GET'?adminOverview(request,env):method();
if(path==='/api/admin/readiness')return request.method==='GET'?adminReadiness(request,env):method();
if(path==='/api/admin/users')return request.method==='GET'?adminUsers(request,env):method();
if(path==='/api/admin/subscription')return request.method==='POST'?adminSetSubscription(request,env):method();
if(path==='/api/results'){if(request.method==='POST')return saveResult(request,env);if(request.method==='GET')return resultHistory(request,env);return method()}
return json({error:'API yolu bulunamadı.'},404)}
function enhance(html,path,env){const [title,description]=metadata[path]||[`${path.slice(1).replaceAll('-',' ')||'Mythborn'} — Mythborn`,'Mythborn ücretsiz Tarot ve gerçek astroloji hesaplama platformu.'];const canonical=`${SITE}${path==='/'?'/':path}`;const turnstile=env.TURNSTILE_SITE_KEY&&['/giris','/kayit'].includes(path)?`<meta name="turnstile-site-key" content="${env.TURNSTILE_SITE_KEY}"><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`:'';const graph=JSON.stringify({'@context':'https://schema.org','@graph':[{'@type':'Organization',name:'Mythborn',url:SITE,email:'info@mythborn.co'},{'@type':'WebSite',name:'Mythborn',url:SITE,inLanguage:'tr-TR'},{'@type':'WebPage',name:title,url:canonical,description,inLanguage:'tr-TR'},{'@type':'SoftwareApplication',name:'Mythborn Tarot ve Astroloji',applicationCategory:'EntertainmentApplication',operatingSystem:'Web',isAccessibleForFree:true,offers:{'@type':'Offer',price:'0',priceCurrency:'TRY'}}]});const head=`<link rel="canonical" href="${canonical}"><meta name="robots" content="${noindex.has(path)?'noindex,nofollow':'index,follow,max-image-preview:large,max-snippet:-1'}"><meta property="og:type" content="website"><meta property="og:site_name" content="Mythborn"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary_large_image">${turnstile}<script type="application/ld+json">${graph}</script>`;return html.replace('</head>',`${head}</head>`).replace('</body>','<script src="/menu.js" defer></script></body>')}
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicRoutes.map(p=>`<url><loc>${SITE}${p}</loc><changefreq>${p==='/'?'weekly':'daily'}</changefreq><priority>${p==='/'?'1.0':'0.7'}</priority></url>`).join('')}</urlset>`;
const llms=`# Mythborn\n\nMythborn, ücretsiz Tarot ve gerçek astronomik verilerle doğum haritası hesaplama platformudur.\n\n- Günlük tek kart: 78 kartlık klasik Tarot destesi\n- Doğum haritası: gezegen konumları, Güneş, Ay, Yükselen, MC, eşit evler ve açılar\n- Konum: doğum yerinden koordinat ve tarihsel zaman dilimi çözümleme\n- Haftalık burç, Katina ve ilişki açılımları\n- Rüya yorumları, burç uyumu, numeroloji ve Ay takvimi\n- Amaç: eğlence ve kişisel farkındalık; kesin gelecek, sağlık, hukuk veya finans tavsiyesi değildir.\n`;
export default{async fetch(request,env,ctx){const url=new URL(request.url);if(url.hostname==='www.mythborn.co'){url.hostname='mythborn.co';return Response.redirect(url.toString(),301)}let out;if(url.pathname.startsWith('/api/'))out=await api(request,env,url.pathname);else if(url.pathname==='/robots.txt')out=response(`User-agent: *\nAllow: /\nDisallow: /giris\nDisallow: /kayit\nDisallow: /hesabim\nDisallow: /yonetim\nDisallow: /api/\nSitemap: ${SITE}/sitemap.xml\n`);else if(url.pathname==='/sitemap.xml')out=response(sitemap,200,'application/xml; charset=utf-8');else if(url.pathname==='/llms.txt')out=response(llms);else if(url.pathname.startsWith('/images/')||['/app.css','/app.js','/final.css','/final.js','/oracle.css','/oracle.js','/tarot-deck.js','/discover.js','/menu.js','/favicon.svg'].includes(url.pathname))out=await env.ASSETS.fetch(request);else if(url.pathname==='/yonetim')out=adminPage();else if(!routes.has(url.pathname))out=response('<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="robots" content="noindex"><title>404 — Mythborn</title><body><h1>Bu kapı henüz açılmadı.</h1><a href="/">Ana sayfaya dön</a></body></html>',404,'text/html; charset=utf-8');else if(discoveryRoutes.has(url.pathname)){out=response(enhance(discoveryPage(url.pathname),url.pathname,env),200,'text/html; charset=utf-8')}else{const page=await app.fetch(request,env,ctx);out=new Response(enhance(await page.text(),url.pathname,env),{status:page.status,headers:page.headers})}const headers=security(new Headers(out.headers));if(url.pathname.startsWith('/api/')||url.pathname==='/yonetim')headers.set('cache-control','no-store');return new Response(out.body,{status:out.status,headers})}};