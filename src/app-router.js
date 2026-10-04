import platform from './premium-router.js';
import {tarotSearchItems} from './tarot-library.js';
import {dreamSearchItems,glossarySearchItems} from './dream-glossary.js';
import {astrologySearchItems} from './astrology-library.js';
import {localizedBlogSearchItems} from './localized-blog.js';
import {premiumGuideSearchItems} from './premium-guides.js';
import {blogMeta,blogDates} from './blog.js';
import {paywallPage,premiumState,routeRequiresPremium} from './premium-access.js';
import {spanishRouteSet,spanishRoutes,loadSpanishPage} from './spanish-edition.js';
import {libraryRoutes,libraryPage} from './astrology-library.js';
import {tarotCardSlugs,tarotLibraryPage} from './tarot-library.js';
import {dreamSlugs,glossarySlugs,dreamPage,glossaryPage} from './dream-glossary.js';
import {localizedBlogSlugs,localizedBlogPage} from './localized-blog.js';
import {premiumGuideRoutes,premiumGuidePage,advancedAstrologyIndex} from './premium-guides.js';
import {vedicPage,vedicDocument} from './vedic-pages.js';
import {SITE_ORIGIN,LOCALES,localeFromPath,cleanLocalePath,searchRoute} from './site-config.js';
import {labels,llms} from './localized-shell-content.js';
import {notFoundPage,searchPage} from './localized-static-pages.js';
import {decorate} from './page-decorator.js';
import {discoveryPage,discoveryMeta} from './discovery-core.js';

const SITE=SITE_ORIGIN;
const localeInfo=LOCALES;
const spanishDiscoveryDocument=path=>{
  const main=discoveryPage('es',path);
  const meta=discoveryMeta('es',path)||{title:'Mythborn',description:'Mythborn'};
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${meta.title}</title><meta name="description" content="${meta.description}"><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/oracle.css"><link rel="stylesheet" href="/final.css"></head><body>${main}</body></html>`;
};
const spanishPageDocument=path=>{
  if(libraryRoutes.includes(path))return libraryPage(path,'es');
  if(path==='/tarot-kartlari'||tarotCardSlugs.some(slug=>path===`/tarot-kartlari/${slug}`))return tarotLibraryPage('es',path);
  if(path==='/ruya-sembolleri'||dreamSlugs.some(slug=>path===`/ruya-sembolleri/${slug}`))return dreamPage('es',path);
  if(path==='/astroloji-sozlugu'||glossarySlugs.some(slug=>path===`/astroloji-sozlugu/${slug}`))return glossaryPage('es',path);
  if(path==='/blog'||localizedBlogSlugs.some(slug=>path===`/blog/${slug}`))return localizedBlogPage('es',path);
  if(path==='/advanced-astrology'||premiumGuideRoutes.includes(path))return path==='/advanced-astrology'?advancedAstrologyIndex('es'):premiumGuidePage(path,'es');
  if(['/ruya-yorumlari','/numeroloji','/burc-uyumu'].includes(path))return spanishDiscoveryDocument(path);
  return null;
};
const localeFrom=localeFromPath;
const cleanPath=cleanLocalePath;
const href=(locale,path)=>{
  if(path==='/arama')return searchRoute(locale);
  const clean=path==='/'?'':path;
  if(locale==='es'&&path!=='/arama'&&!spanishRouteSet.has(path))return `/en${clean}`||'/en';
  return `${localeInfo[locale].prefix}${clean}`||'/';
};
const turkishBlogSearchItems=()=>Object.entries(blogMeta).filter(([path])=>path.startsWith('/blog/')).map(([path,[title,description]])=>({title,description,category:'journal',path}));
const searchItems=locale=>{
  const sourceLocale=locale;
  return [
    ...tarotSearchItems(sourceLocale),
    ...astrologySearchItems(sourceLocale),
    {title:labels[locale].vedic,description:locale==='tr'?'Lahiri ayanamsha, sidereal zodyak, nakshatra ve Vimshottari dasha ile Vedik doğum haritası.':locale==='en'?'Sidereal birth chart, Lahiri ayanamsa, nakshatra and Vimshottari dasha.':locale==='el'?'Αστρικός γενέθλιος χάρτης, Lahiri ayanamsa, nakshatra και Vimshottari dasha.':'Carta natal sideral, ayanamsha Lahiri, nakshatra y Vimshottari dasha.',category:'astrology',path:'/vedik-astroloji'},
    ...dreamSearchItems(sourceLocale),
    ...glossarySearchItems(sourceLocale),
    ...(sourceLocale==='tr'?turkishBlogSearchItems():localizedBlogSearchItems(sourceLocale)),
    ...premiumGuideSearchItems(sourceLocale)
  ].map(item=>({...item,url:href(locale,item.path)}));
};

export default {
  async fetch(request,env,ctx){
    const incoming=new URL(request.url);
    if(incoming.pathname==='/el'||incoming.pathname.startsWith('/el/')){
      incoming.pathname='/gr'+incoming.pathname.slice(3);
      return Response.redirect(incoming.toString(),301);
    }
    if(incoming.pathname==='/llms.el.txt')return Response.redirect(`${SITE}/llms.gr.txt`,301);
    if(incoming.pathname==='/llms.txt')return new Response(llms.tr,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    if(incoming.pathname==='/llms.en.txt')return new Response(llms.en,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    if(incoming.pathname==='/llms.gr.txt')return new Response(llms.el,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    if(incoming.pathname==='/llms.es.txt')return new Response(llms.es,{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600','x-content-type-options':'nosniff'}});
    const accessState=premiumState(env,new Date());
    if(incoming.pathname==='/api/search-index'){
      const requested=incoming.searchParams.get('locale'),locale=requested==='en'?'en':requested==='el'||requested==='gr'?'el':requested==='es'?'es':'tr';
      return new Response(JSON.stringify({locale,count:searchItems(locale).length,items:searchItems(locale)}),{headers:{'content-type':'application/json; charset=utf-8','cache-control':'public, max-age=3600'}});
    }
    const indexNowKeyPath=/^\/[A-Za-z0-9-]{8,128}\.txt$/.test(incoming.pathname);
    if(indexNowKeyPath||['/shell.js','/search.js','/home-sky.js','/live-sky-model.js','/home-experience.css','/premium-access.js','/premium-access.css','/paywall.css','/discovery-localized.js','/mobile-menu-clean.css','/cinematic.js','/cinematic.css','/refinement.js','/refinement.css','/premium-free.css'].includes(incoming.pathname))return env.ASSETS.fetch(request);
    if(incoming.pathname==='/weekly.js'){
      const asset=await env.ASSETS.fetch(request);
      return new Response((await asset.text()).replaceAll("startsWith('/el')","startsWith('/gr')"),{status:asset.status,headers:asset.headers});
    }
    if(incoming.pathname==='/menu.js'){
      const asset=await env.ASSETS.fetch(request);
      const script=(await asset.text())
        .replace("if(nav&&!nav.querySelector('[href=\"/bugunun-gokyuzu\"]'))","if(false&&nav&&!nav.querySelector('[href=\"/bugunun-gokyuzu\"]'))")
        .replace("if(mobile&&!mobile.querySelector('[href=\"/bugunun-gokyuzu\"]'))","if(false&&mobile&&!mobile.querySelector('[href=\"/bugunun-gokyuzu\"]'))")
        .replace("const home=document.querySelector('main.home');if(home){","const home=document.querySelector('main.home:not([data-server-home])');if(home){");
      return new Response(script,{status:asset.status,headers:asset.headers});
    }
    const locale=localeFrom(incoming.pathname),clean=cleanPath(incoming.pathname,locale);
    const spanishDocument=locale==='es'&&clean!=='/arama'?spanishPageDocument(clean):null;
    if(locale==='es'&&clean!=='/arama'&&!spanishRouteSet.has(clean))return Response.redirect(`${SITE}/en${clean}`,302);
    if(spanishDocument){
      let spanishHtml=decorate(spanishDocument,locale,clean,accessState);
      const spanishTitle=spanishHtml.match(/<title>([^<]*)<\/title>/)?.[1]||'Mythborn';
      const spanishDescription=spanishHtml.match(/<meta name="description" content="([^"]*)">/)?.[1]||'Mythborn';
      if(!spanishHtml.includes('window.MYTHBORN_LOCALE'))spanishHtml=spanishHtml.replace('</head>','<script>window.MYTHBORN_LOCALE="es"</script></head>');
      if(!spanishHtml.includes('"inLanguage":"es"'))spanishHtml=spanishHtml.replace('</head>',`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:spanishTitle,description:spanishDescription,url:`${SITE}${href('es',clean)}`,inLanguage:'es'})}</script></head>`);
      return new Response(spanishHtml,{status:200,headers:{'content-type':'text/html; charset=utf-8','content-language':'es','cache-control':'public, max-age=300'}});
    }
    if(clean==='/arama')return new Response(decorate(searchPage(locale),locale,clean,accessState),{headers:{'content-type':'text/html; charset=utf-8','content-language':localeInfo[locale].html}});
    if(clean==='/vedik-astroloji'||clean==='/nakshatra-dasha')return new Response(decorate(vedicDocument(locale,clean),locale,clean,accessState),{headers:{'content-type':'text/html; charset=utf-8','content-language':localeInfo[locale].html,'cache-control':'public, max-age=300'}});
    if(await routeRequiresPremium(clean,accessState))return new Response(decorate(paywallPage(locale,clean),locale,clean,accessState),{status:200,headers:{'content-type':'text/html; charset=utf-8','content-language':localeInfo[locale].html,'cache-control':'private, no-store'}});
    let forwarded=request;
    if(locale==='el'||locale==='es'){
      const internal=new URL(request.url);
      internal.pathname=`/${locale==='el'?'el':'en'}${clean}`;
      forwarded=new Request(internal.toString(),request);
    }
    const response=await platform.fetch(forwarded,env,ctx);
    const type=response.headers.get('content-type')||'';
    if(!type.includes('text/html')){
      if(incoming.pathname==='/sitemap.xml'){
        const xml=(await response.text()).replace(/\/el(?=\/|["<])/g,'/gr');
        const spanishEntries=spanishRoutes.filter(path=>!['/vedik-astroloji','/nakshatra-dasha'].includes(path)).map(path=>`<url><loc>${SITE}${href('es',path)}</loc>${blogDates[path]?`<lastmod>${blogDates[path]}</lastmod>`:''}<xhtml:link rel="alternate" hreflang="tr" href="${SITE}${href('tr',path)}"/><xhtml:link rel="alternate" hreflang="en" href="${SITE}${href('en',path)}"/><xhtml:link rel="alternate" hreflang="el" href="${SITE}${href('el',path)}"/><xhtml:link rel="alternate" hreflang="es" href="${SITE}${href('es',path)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${href('tr',path)}"/></url>`).join('');
        return new Response(xml.replace('</urlset>',`${spanishEntries}</urlset>`),{status:response.status,headers:response.headers});
      }
      return response;
    }
    const headers=new Headers(response.headers);
    headers.set('content-language',localeInfo[locale].html);
    if(request.method==='GET'&&!['/hesabim','/giris','/kayit'].includes(clean)&&!headers.has('set-cookie')) headers.set('cache-control','public, max-age=300, stale-while-revalidate=86400');
    const source=response.status===404?notFoundPage(locale):await response.text();
    const localizedPage=locale==='es'?loadSpanishPage(clean):null;
    return new Response(decorate(source,locale,clean,accessState,localizedPage),{status:response.status,headers});
  }
};
