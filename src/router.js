import app from './index.js';
import { register, login, logout, me, saveResult, resultHistory } from './auth.js';

const SITE='https://mythborn.co';
const routes=new Set(['/','/deneyim','/uyelik','/giris','/kayit','/hesabim','/arketipler','/manifesto','/hakkinda','/gizlilik','/kvkk','/kullanim-kosullari','/cerezler','/mesafeli-satis','/on-bilgilendirme','/iptal-iade']);
const llms=`# Mythborn\n\n> Mythborn, arzuları oynanabilir seçimlere, arketiplere ve kişisel sonuçlara dönüştüren Türkçe dijital deneyim platformudur.\n\n- Resmî site: ${SITE}/\n- Dil: Türkçe\n- Üyelik: Aylık 115 TL\n- İletişim: info@mythborn.co\n`;
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...routes].filter(x=>!['/giris','/kayit','/hesabim'].includes(x)).map(x=>`<url><loc>${SITE}${x}</loc></url>`).join('')}</urlset>`;
const security=(h=new Headers())=>{h.set('strict-transport-security','max-age=31536000');h.set('x-content-type-options','nosniff');h.set('referrer-policy','strict-origin-when-cross-origin');h.set('permissions-policy','camera=(), microphone=(), geolocation=()');h.set('content-security-policy',"default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");return h};
const text=(body,status,type)=>new Response(body,{status,headers:security(new Headers({'content-type':type,'cache-control':'public, max-age=300'}))});
const methodNotAllowed=()=>text(JSON.stringify({error:'Bu yöntem desteklenmiyor.'}),405,'application/json; charset=utf-8');

async function api(request,env,path){
  if(path==='/api/auth/register')return request.method==='POST'?register(request,env):methodNotAllowed();
  if(path==='/api/auth/login')return request.method==='POST'?login(request,env):methodNotAllowed();
  if(path==='/api/auth/logout')return request.method==='POST'?logout(request,env):methodNotAllowed();
  if(path==='/api/auth/me')return request.method==='GET'?me(request,env):methodNotAllowed();
  if(path==='/api/results'){
    if(request.method==='POST')return saveResult(request,env);
    if(request.method==='GET')return resultHistory(request,env);
    return methodNotAllowed();
  }
  return text(JSON.stringify({error:'API yolu bulunamadı.'}),404,'application/json; charset=utf-8');
}

export default{async fetch(request,env,ctx){
  const url=new URL(request.url);
  if(url.hostname==='www.mythborn.co'){url.hostname='mythborn.co';return Response.redirect(url.toString(),301)}
  let response;
  if(url.pathname.startsWith('/api/'))response=await api(request,env,url.pathname);
  else if(url.pathname==='/llms.txt')response=text(llms,200,'text/plain; charset=utf-8');
  else if(url.pathname==='/robots.txt')response=text(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`,200,'text/plain; charset=utf-8');
  else if(url.pathname==='/sitemap.xml')response=text(sitemap,200,'application/xml; charset=utf-8');
  else if(url.pathname.startsWith('/images/')||['/app.css','/app.js','/favicon.svg','/consent.js'].includes(url.pathname))response=await env.ASSETS.fetch(request);
  else if(!routes.has(url.pathname))response=text('<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="robots" content="noindex"><title>404 — Mythborn</title><body><h1>Bu kapı henüz açılmadı.</h1><a href="/">Mythborn’a dön</a></body></html>',404,'text/html; charset=utf-8');
  else response=await app.fetch(request,env,ctx);
  const headers=security(new Headers(response.headers));
  if(!url.pathname.startsWith('/api/'))headers.set('content-language','tr');
  return new Response(response.body,{status:response.status,headers});
}};
