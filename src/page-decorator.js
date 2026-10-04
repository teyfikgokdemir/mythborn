import {corePage,coreMeta} from './core-pages.js';
import {discoveryPage,discoveryMeta,discoverySchema} from './discovery-core.js';
import {earlyAccessBanner} from './premium-access.js';
import {spanishRouteSet} from './spanish-edition.js';
import {vedicMeta,vedicSchema} from './vedic-pages.js';
import {SITE_ORIGIN,LOCALES,searchRoute,searchAlternates} from './site-config.js';
import {socialImageAlt,labels} from './localized-shell-content.js';
import {toolGuides} from './tool-guides.js';
import {desktopNav,headerLanguage,mobileNav,knowledgeHub,homePathwaysSchema,footer} from './localized-navigation.js';
import {legalMain} from './localized-static-pages.js';
import {intentMetadata} from './intent-metadata.js';

const SITE=SITE_ORIGIN;
const localeInfo=LOCALES;
const socialImage=`${SITE}/images/cinematic/social/mythborn-social-celestial.jpg`;
const href=(locale,path)=>{
  if(path==='/arama')return searchRoute(locale);
  const clean=path==='/'?'':path;
  if(locale==='es'&&path!=='/arama'&&!spanishRouteSet.has(path))return `/en${clean}`||'/en';
  return `${localeInfo[locale].prefix}${clean}`||'/';
};
const toolGuide=(locale,path)=>toolGuides[locale]?.[path]||null;
const toolGuideMeta=(locale,path)=>{const guide=toolGuide(locale,path);return guide?{title:guide.meta[0],description:guide.meta[1]}:null};
const toolGuideSchema=(locale,path)=>{const guide=toolGuide(locale,path);if(!guide)return [];return [{'@context':'https://schema.org','@type':'FAQPage',mainEntity:guide.faq.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))}];};
const toolGuideSection=(locale,path)=>{const guide=toolGuide(locale,path);if(!guide)return '';const label=locale==='tr'?'KISA YANITLAR':locale==='en'?'QUICK ANSWERS':'ΣΥΝΤΟΜΕΣ ΑΠΑΝΤΗΣΕΙΣ';const explore=locale==='tr'?'İlgili rehberleri keşfet':locale==='en'?'Explore related guides':'Εξερεύνησε σχετικούς οδηγούς';return `<section class="section tool-answer-guide" data-tool-answer-guide><div class="tool-answer-intro"><p class="eyebrow">${label}</p><h2>${guide.title}</h2><p class="lead left-lead">${guide.intro}</p></div><div class="tool-answer-grid">${guide.faq.map(([question,answer])=>`<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div><nav class="tool-answer-links" aria-label="${explore}">${guide.links.map(([label,url])=>`<a href="${href(locale,url)}">${label} <span aria-hidden="true">→</span></a>`).join('')}</nav></section>`;};
const escapeMetaContent=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const upsertMetaDescription=(html,description)=>{
  const tag=`<meta name="description" content="${escapeMetaContent(description)}">`;
  return /<meta name="description" content="[^"]*">/.test(html)
    ?html.replace(/<meta name="description" content="[^"]*">/,tag)
    :html.replace('</head>',`${tag}</head>`);
};

export function decorate(html,locale,path,accessState,localizedPage=null){
  const t=labels[locale];
  if(localizedPage){
    const localizedMain=localizedPage.main.replace(/(href|action)="\/en(\/[^"?#]*)?(["?#][^"]*)?"/g,(_match,attribute,route='',suffix='')=>`${attribute}="${href('es',route||'/')}${suffix}"`);
    html=html.replace(/<title>[\s\S]*?<\/title>/i,`<title>${escapeMetaContent(localizedPage.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*">/i,`<meta name="description" content="${escapeMetaContent(localizedPage.description)}">`)
      .replace(/<main\b[\s\S]*?<\/main>/i,localizedMain)
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'')
      .replace(/window\.MYTHBORN_LOCALE=[^;]*;/g,`window.MYTHBORN_LOCALE=${JSON.stringify(locale)};`);
  }
  html=html.replace(/\/el(?=\/|["?#])/g,'/gr').replaceAll('>EL<','>GR<');
  html=html.replace(/<a\b([^>]*class="(?:brand|site-footer-logo)"[^>]*)>/g,(_match,attributes)=>`<a${attributes.replace(/href="[^"]*"/,`href="${href(locale,'/')}"`)}>`);
  html=html.replace(/<html lang="[^"]*"/,`<html lang="${localeInfo[locale].html}"`);
  html=html.replace(/<nav class="nav(?: [^"]*)?"[\s\S]*?<\/nav>/,desktopNav(locale));
  html=html.replace(/<footer\b[\s\S]*?<\/footer>/,footer(locale));
  const localizedMain=locale==='es'?null:(corePage(locale,path)||discoveryPage(locale,path));
  if(localizedMain&&!html.includes('data-premium-paywall'))html=html.replace(/<main\b[\s\S]*?<\/main>/,localizedMain);
  if(['/gizlilik','/kvkk','/kullanim-kosullari','/cerezler'].includes(path))html=html.replace(/<main\b[\s\S]*?<\/main>/,legalMain(locale,path));
  if(!html.includes('<header')){
    const sharedHeader=`<div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}${headerLanguage(locale,path)}<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,path)}`;
    html=html.replace(/<body([^>]*)>/,`<body$1>${sharedHeader}`).replace('</body>','</div></body>');
  }
  if(!html.includes('desktop-nav'))html=html.replace('</header>',`${desktopNav(locale)}</header>`);
  if(!html.includes('header-language'))html=html.replace('</header>',`${headerLanguage(locale,path)}</header>`);
  if(!html.includes('mobile-menu-button'))html=html.replace('</header>',`<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,path)}`);
  if(!html.includes('site-footer'))html=html.replace('</main>',`</main>${footer(locale)}`);
  html=html.replace(/<nav class="(?:language-switcher|lang)"[\s\S]*?<\/nav>/g,'');
  if(!html.includes('skip-link'))html=html.replace(/<body([^>]*)>/,`<body$1><a class="skip-link" href="#ana-icerik">${locale==='tr'?'Ana içeriğe geç':locale==='en'?'Skip to main content':locale==='el'?'Μετάβαση στο κύριο περιεχόμενο':'Saltar al contenido principal'}</a>`);
  html=html.replace(/<body([^>]*)>/,`<body$1 data-route="${path}">`);
  if(!html.includes('name="robots"'))html=html.replace('</head>','<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"></head>');
  const accessBanner=earlyAccessBanner(locale,accessState);
  if(accessBanner&&!html.includes('data-early-access'))html=html.replace(/<body([^>]*)>/,`<body$1>${accessBanner}`);
  html=html.replace(/<main(?![^>]*\bid=)([^>]*)>/,`<main id="ana-icerik"$1>`);
  if(path==='/'&&!html.includes('knowledge-hub'))html=html.replace('</main>',`${knowledgeHub(locale)}</main>`);
  const answerGuide=toolGuideSection(locale,path);
  if(answerGuide&&!html.includes('data-tool-answer-guide'))html=html.replace('</main>',`${answerGuide}</main>`);
  // Mythborn remains an independent consumer brand; cross-portfolio promotion is intentionally omitted from the global shell.
  const canonical=`${SITE}${href(locale,path)}`;
  const localizedMeta=locale==='es'?null:(toolGuideMeta(locale,path)||coreMeta(locale,path)||discoveryMeta(locale,path));
  const vedicPageMeta=vedicMeta(locale,path);
  const existingMeta=vedicPageMeta||localizedMeta||(localizedPage?{title:localizedPage.title,description:localizedPage.description}:null);
  const intentMeta=intentMetadata(locale,path,existingMeta?.title||html.match(/<title>([^<]*)<\/title>/)?.[1]||'Mythborn',existingMeta?.description||html.match(/<meta name="description" content="([^"]*)">/)?.[1]||labels[locale].knowledgeCopy);
  const pageMeta=existingMeta;
  if(pageMeta){
    html=html.replace(/<title>[^<]*<\/title>/,`<title>${pageMeta.title}</title>`);
    html=upsertMetaDescription(html,pageMeta.description);
    const localizedSchema={'@context':'https://schema.org','@type':'WebPage',name:pageMeta.title,headline:pageMeta.title,description:pageMeta.description,url:canonical,inLanguage:localeInfo[locale].html,isPartOf:{'@type':'WebSite',name:'Mythborn',url:SITE}};
    const extraSchemas=[...(discoverySchema(locale,path)||[]),...toolGuideSchema(locale,path),...(path==='/'?[homePathwaysSchema(locale)]:[]),...((path==='/vedik-astroloji'||path==='/nakshatra-dasha')?vedicSchema(locale):[])];
    html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace('</head>',`<script type="application/ld+json">${JSON.stringify(localizedSchema)}</script>${extraSchemas.map(schema=>`<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`);
  }
  if(intentMeta){
    html=html.replace(/<title>[^<]*<\/title>/,`<title>${escapeMetaContent(intentMeta.title)}</title>`);
    html=upsertMetaDescription(html,intentMeta.description);
  }
  const documentTitle=html.match(/<title>([^<]*)<\/title>/)?.[1]||'Mythborn';
  const documentDescription=html.match(/<meta name="description" content="([^"]*)">/)?.[1]||labels[locale].knowledgeCopy;
  const pageTitle=locale==='tr'&&!intentMeta?(html.match(/<meta property="og:title" content="([^"]*)">/)?.[1]||documentTitle):documentTitle;
  const pageDescription=locale==='tr'&&!intentMeta?(html.match(/<meta property="og:description" content="([^"]*)">/)?.[1]||documentDescription):documentDescription;
  const heroPreload=path==='/'?'<link rel="preload" as="image" type="image/avif" href="/images/cinematic/home/hero-celestial-1440.avif" imagesrcset="/images/cinematic/home/hero-celestial-640.avif 640w, /images/cinematic/home/hero-celestial-960.avif 960w, /images/cinematic/home/hero-celestial-1440.avif 1440w" imagesizes="100vw" fetchpriority="high">':'';
  const criticalAccessCss=`<style>html{scrollbar-gutter:stable}${path==='/'?'.premium-home-hero{display:grid!important;grid-template-columns:minmax(0,.82fr) minmax(390px,1.18fr)!important;gap:34px;align-items:center!important}.premium-home-hero>.hero-sky-card{min-height:744px;align-self:start}@media(max-width:1000px){.premium-home-hero{grid-template-columns:1fr!important}.premium-home-hero>.hero-sky-card{min-height:0}}':''}</style>`;
  const hasSpanish=path==='/arama'||spanishRouteSet.has(path);
  const alternateLinks=path==='/arama'?`${searchAlternates().map(alt=>`<link rel="alternate" hreflang="${alt.locale}" href="${alt.href}">`).join('')}<link rel="alternate" hreflang="x-default" href="${SITE}${searchRoute('tr')}">`:`<link rel="alternate" hreflang="tr" href="${SITE}${href('tr',path)}"><link rel="alternate" hreflang="en" href="${SITE}${href('en',path)}"><link rel="alternate" hreflang="el" href="${SITE}${href('el',path)}">${hasSpanish?`<link rel="alternate" hreflang="es" href="${SITE}${href('es',path)}">`:''}<link rel="alternate" hreflang="x-default" href="${SITE}${href('tr',path)}">`;
  html=html
    .replace(/<link rel="canonical" href="[^"]*">/g,'')
    .replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]*">/g,'')
    .replace(/<meta (?:property|name)="(?:og:title|og:description|og:url|og:type|og:image(?::(?:width|height|alt))?|og:locale|twitter:card|twitter:image(?::alt)?|twitter:title|twitter:description)"[^>]*>/g,'')
    .replace('</head>',`${criticalAccessCss}<link rel="canonical" href="${canonical}">${alternateLinks}<link rel="stylesheet" href="/mobile-menu-clean.css"><link rel="stylesheet" href="/cinematic.css">${path==='/'?'<link rel="stylesheet" href="/home-experience.css">':''}${heroPreload}<meta property="og:locale" content="${locale==='tr'?'tr_TR':locale==='en'?'en_US':locale==='el'?'el_GR':'es_ES'}"><meta property="og:type" content="${path.startsWith('/blog/')?'article':'website'}"><meta property="og:url" content="${canonical}"><meta property="og:title" content="${pageTitle}"><meta property="og:description" content="${pageDescription}"><meta property="og:image" content="${socialImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${socialImageAlt[locale]}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${pageTitle}"><meta name="twitter:description" content="${pageDescription}"><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="${socialImageAlt[locale]}"></head>`);
  if(!html.includes('SearchAction'))html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}})}</script></head>`);
  html=html.replace('</head>',`<script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script></head>`);
  const needsDiscoveryClient=locale==='es'
    ?['/bugunun-gokyuzu','/ay-takvimi','/sinastri','/ruya-yorumlari','/numeroloji','/burc-uyumu'].includes(path)
    :Boolean(discoveryPage(locale,path));
  if(locale!=='tr'&&needsDiscoveryClient){
    html=html.replace(/<script src="\/(?:discover|sky|synastry)\.js" defer><\/script>/g,'');
    html=html.replace('</body>','<script src="/discovery-localized.js" defer></script></body>');
  }
  if(!html.includes('/shell.js'))html=html.replace('</body>','<script src="/shell.js" defer></script></body>');
  if(path==='/'&&!html.includes('/home-sky.js'))html=html.replace('</body>','<script type="module">(()=>{const load=()=>{const s=document.createElement("script");s.type="module";s.src="/home-sky.js";document.body.appendChild(s)};window.requestIdleCallback?window.requestIdleCallback(load,{timeout:1400}):window.setTimeout(load,900)})();</script></body>');
  if(!html.includes('/cinematic.js'))html=html.replace('</body>','<script src="/cinematic.js" defer></script></body>');
  if(!html.includes('/refinement.css'))html=html.replace('</head>','<style>@media(max-width:560px){.tarot-lib .tarot-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}</style><link rel="stylesheet" href="/refinement.css?v=0607f92"><link rel="stylesheet" href="/premium-free.css"></head>');
  if(!html.includes('/refinement.js'))html=html.replace('</body>','<script src="/refinement.js" defer></script></body>');
  html=html.replace(/<img src="\/images\/mythborn-emblem\.png" alt=""(?:\s+[^>]*)?>/g,'<img src="/images/mythborn-emblem.png" alt="" width="275" height="257" decoding="async">');
  return html;
}

