import platform from './premium-router.js';
import {tarotSearchItems} from './tarot-library.js';
import {dreamSearchItems,glossarySearchItems} from './dream-glossary.js';
import {astrologySearchItems} from './astrology-library.js';
import {localizedBlogSearchItems} from './localized-blog.js';
import {premiumGuideSearchItems} from './premium-guides.js';
import {blogMeta,blogDates} from './blog.js';
import {corePage,coreMeta} from './core-pages.js';
import {discoveryPage,discoveryMeta,discoverySchema} from './discovery-core.js';
import {earlyAccessBanner,paywallPage,premiumState,routeRequiresPremium} from './premium-access.js';
import {spanishRouteSet,spanishRoutes,loadSpanishPage} from './spanish-edition.js';
import {libraryRoutes,libraryPage} from './astrology-library.js';
import {tarotCardSlugs,tarotLibraryPage} from './tarot-library.js';
import {dreamSlugs,glossarySlugs,dreamPage,glossaryPage} from './dream-glossary.js';
import {localizedBlogSlugs,localizedBlogPage} from './localized-blog.js';
import {premiumGuideRoutes,premiumGuidePage,advancedAstrologyIndex} from './premium-guides.js';
import {vedicPage,vedicDocument,vedicMeta,vedicSchema} from './vedic-pages.js';
import {SITE_ORIGIN,LOCALES,localeFromPath,cleanLocalePath} from './site-config.js';
import {socialImageAlt,labels,llms} from './localized-shell-content.js';
import {toolGuides} from './tool-guides.js';
import {desktopNav,headerLanguage,mobileNav,knowledgeHub,homePathwaysSchema,footer} from './localized-navigation.js';

const SITE=SITE_ORIGIN;
const localeInfo=LOCALES;
const socialImage=`${SITE}/images/cinematic/social/mythborn-social-celestial.jpg`;
const toolGuide=(locale,path)=>toolGuides[locale]?.[path]||null;
const spanishPageDocument=path=>{
  if(libraryRoutes.includes(path))return libraryPage(path,'es');
  if(path==='/tarot-kartlari'||tarotCardSlugs.some(slug=>path===`/tarot-kartlari/${slug}`))return tarotLibraryPage('es',path);
  if(path==='/ruya-sembolleri'||dreamSlugs.some(slug=>path===`/ruya-sembolleri/${slug}`))return dreamPage('es',path);
  if(path==='/astroloji-sozlugu'||glossarySlugs.some(slug=>path===`/astroloji-sozlugu/${slug}`))return glossaryPage('es',path);
  if(path==='/blog'||localizedBlogSlugs.some(slug=>path===`/blog/${slug}`))return localizedBlogPage('es',path);
  if(path==='/advanced-astrology'||premiumGuideRoutes.includes(path))return path==='/advanced-astrology'?advancedAstrologyIndex('es'):premiumGuidePage(path,'es');
  return null;
};
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
const localeFrom=localeFromPath;
const cleanPath=cleanLocalePath;
const href=(locale,path)=>{
  const clean=path==='/'?'':path;
  if(locale==='es'&&path!=='/arama'&&!spanishRouteSet.has(path))return `/en${clean}`||'/en';
  return `${localeInfo[locale].prefix}${clean}`||'/';
};
const turkishBlogSearchItems=()=>Object.entries(blogMeta).filter(([path])=>path.startsWith('/blog/')).map(([path,[title,description]])=>({title,description,category:'journal',path}));
const searchItems=locale=>{
  const sourceLocale=locale==='es'?'en':locale;
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

function legalMain(locale,path){
  const content={
    tr:{
      '/gizlilik':['Gizlilik Politikası','Mythborn, hesap ve güvenlik için gerekli verileri yalnız belirtilen amaçlarla işler. Veriler üçüncü taraflara reklam amacıyla satılmaz. Erişim, düzeltme veya silme talebi için info@mythborn.co adresine yazabilirsiniz.'],
      '/kvkk':['KVKK Aydınlatma Metni','Bu metin, Türkiye’de 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki veri işleme faaliyetlerini açıklar. Kimlik ve iletişim verileri üyelik, güvenlik ve yasal yükümlülükler için sınırlı biçimde işlenir.'],
      '/kullanim-kosullari':['Kullanım Koşulları','Mythborn içerikleri eğlence, eğitim ve kişisel farkındalık amaçlıdır. Kesin gelecek bilgisi, tıbbi, hukuki veya finansal tavsiye sunmaz. Hizmeti hukuka uygun ve başkalarının haklarına saygılı biçimde kullanmanız gerekir.'],
      '/cerezler':['Çerez Politikası','Zorunlu çerezler oturum, güvenlik ve tercihlerin korunması için kullanılır. İsteğe bağlı analitik çerezler yalnız açık tercihinizle etkinleşir; tercihinizi tarayıcınızdan istediğiniz zaman sıfırlayabilirsiniz.']
    },
    en:{
      '/gizlilik':['Privacy Policy','Mythborn processes only the data needed for accounts, security and the purposes described here. Personal data is not sold for advertising. You may request access, correction or deletion at info@mythborn.co.'],
      '/kvkk':['Turkish Data Protection Notice','This notice explains processing governed by Turkey’s Personal Data Protection Law No. 6698 (KVKK). It is not presented as local UK, EU or US law. Identity and contact data are processed only for membership, security and legal obligations.'],
      '/kullanim-kosullari':['Terms of Use','Mythborn content is for entertainment, education and personal reflection. It does not provide deterministic predictions or medical, legal or financial advice. You must use the service lawfully and respect the rights of others.'],
      '/cerezler':['Cookie Policy','Essential cookies support sessions, security and saved preferences. Optional analytics cookies are enabled only with your choice, which you can reset in your browser at any time.']
    },
    el:{
      '/gizlilik':['Πολιτική Απορρήτου','Το Mythborn επεξεργάζεται μόνο τα δεδομένα που απαιτούνται για λογαριασμούς, ασφάλεια και τους σκοπούς που περιγράφονται εδώ. Τα προσωπικά δεδομένα δεν πωλούνται για διαφήμιση. Για πρόσβαση, διόρθωση ή διαγραφή επικοινωνήστε στο info@mythborn.co.'],
      '/kvkk':['Ενημέρωση Προστασίας Δεδομένων Τουρκίας','Η παρούσα ενημέρωση αφορά την επεξεργασία βάσει του τουρκικού Νόμου 6698 περί Προστασίας Προσωπικών Δεδομένων (KVKK). Δεν παρουσιάζεται ως ελληνική ή ενωσιακή νομοθεσία.'],
      '/kullanim-kosullari':['Όροι Χρήσης','Το περιεχόμενο προορίζεται για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό. Δεν παρέχει βέβαιες προβλέψεις ούτε ιατρικές, νομικές ή οικονομικές συμβουλές.'],
      '/cerezler':['Πολιτική Cookies','Τα απαραίτητα cookies υποστηρίζουν συνεδρίες, ασφάλεια και αποθηκευμένες προτιμήσεις. Τα προαιρετικά αναλυτικά cookies ενεργοποιούνται μόνο με την επιλογή σας.']
    },
    es:{
      '/gizlilik':['Política de privacidad','Mythborn procesa únicamente los datos necesarios para las cuentas, la seguridad y los fines descritos. Los datos personales no se venden con fines publicitarios. Puedes solicitar acceso, corrección o eliminación en info@mythborn.co.'],
      '/kvkk':['Aviso turco de protección de datos','Este aviso explica el tratamiento regido por la Ley turca de Protección de Datos Personales n.º 6698 (KVKK). No se presenta como legislación local española o latinoamericana.'],
      '/kullanim-kosullari':['Términos de uso','El contenido de Mythborn es para entretenimiento, educación y reflexión personal. No ofrece predicciones deterministas ni asesoramiento médico, jurídico o financiero.'],
      '/cerezler':['Política de cookies','Las cookies esenciales respaldan las sesiones, la seguridad y las preferencias guardadas. Las cookies analíticas opcionales solo se activan con tu elección.']
    }
  }[locale][path];
  return `<main id="ana-icerik"><section class="section legal-page"><p class="eyebrow">MYTHBORN</p><h1>${content[0]}</h1><p class="lead left-lead">${content[1]}</p><h2>${locale==='tr'?'İletişim':locale==='en'?'Contact':locale==='el'?'Επικοινωνία':'Contacto'}</h2><p><a href="mailto:info@mythborn.co">info@mythborn.co</a></p></section></main>`;
}
function notFoundPage(locale){
  const t={
    tr:['Sayfa bulunamadı','Aradığınız sayfa burada değil.','Ana sayfaya dön'],
    en:['Page not found','The page you requested is not here.','Return home'],
    el:['Η σελίδα δεν βρέθηκε','Η σελίδα που ζητήσατε δεν υπάρχει εδώ.','Επιστροφή στην αρχική'],
    es:['Página no encontrada','La página solicitada no está disponible aquí.','Volver al inicio']
  }[locale];
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 — Mythborn</title><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}</header><main id="ana-icerik"><section class="section"><h1>${t[0]}</h1><p>${t[1]}</p><a class="btn btn-primary" href="${href(locale,'/')}">${t[2]}</a></section></main>${footer(locale)}</div></body></html>`;
}
function searchPage(locale){
  const t=labels[locale],title=t.search;
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}});
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — Mythborn</title><meta name="description" content="${t.knowledgeCopy}"><link rel="canonical" href="${SITE}${href(locale,'/arama')}"><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"><link rel="stylesheet" href="/mobile-menu-clean.css"><script type="application/ld+json">${schema}</script></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}${headerLanguage(locale,'/arama')}<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,'/arama')}<main id="ana-icerik"><section class="section search-page"><p class="eyebrow">${t.knowledge}</p><h1>${title}</h1><form role="search" data-site-search><label>${title}<input type="search" name="q" autocomplete="off"></label><label>${t.exploreGroup}<select name="category"><option value="">${t.exploreGroup}</option><option value="tarot">${t.tarot}</option><option value="astrology">${t.astrology}</option><option value="dream">${t.dreams}</option><option value="journal">${t.blog}</option></select></label><button class="btn btn-primary" type="submit">${title}</button></form><div class="search-results" aria-live="polite" data-search-results></div></section></main>${footer(locale)}</div><script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script><script src="/search.js" defer></script><script src="/shell.js" defer></script></body></html>`;
}
function decorate(html,locale,path,accessState,localizedPage=null){
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
    html=html.replace(/<body([^>]*)>/,`<body$1>${sharedHeader}`).replace('</body>',`<script src="/cansu-source-beacon.js" data-site="mythborn" defer></script>`+'</div></body>');
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
  const pageMeta=vedicPageMeta||localizedMeta||(localizedPage?{title:localizedPage.title,description:localizedPage.description}:null);
  if(pageMeta){
    html=html.replace(/<title>[^<]*<\/title>/,`<title>${pageMeta.title}</title>`);
    html=upsertMetaDescription(html,pageMeta.description);
    const localizedSchema={'@context':'https://schema.org','@type':'WebPage',name:pageMeta.title,headline:pageMeta.title,description:pageMeta.description,url:canonical,inLanguage:localeInfo[locale].html,isPartOf:{'@type':'WebSite',name:'Mythborn',url:SITE}};
    const extraSchemas=[...(discoverySchema(locale,path)||[]),...toolGuideSchema(locale,path),...(path==='/'?[homePathwaysSchema(locale)]:[]),...((path==='/vedik-astroloji'||path==='/nakshatra-dasha')?vedicSchema(locale):[])];
    html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace('</head>',`<script type="application/ld+json">${JSON.stringify(localizedSchema)}</script>${extraSchemas.map(schema=>`<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`);
  }
  const documentTitle=html.match(/<title>([^<]*)<\/title>/)?.[1]||'Mythborn';
  const documentDescription=html.match(/<meta name="description" content="([^"]*)">/)?.[1]||labels[locale].knowledgeCopy;
  const pageTitle=locale==='tr'?(html.match(/<meta property="og:title" content="([^"]*)">/)?.[1]||documentTitle):documentTitle;
  const pageDescription=locale==='tr'?(html.match(/<meta property="og:description" content="([^"]*)">/)?.[1]||documentDescription):documentDescription;
  const heroPreload=path==='/'?'<link rel="preload" as="image" type="image/avif" href="/images/cinematic/home/hero-celestial-1440.avif" imagesrcset="/images/cinematic/home/hero-celestial-640.avif 640w, /images/cinematic/home/hero-celestial-960.avif 960w, /images/cinematic/home/hero-celestial-1440.avif 1440w" imagesizes="100vw" fetchpriority="high">':'';
  const criticalAccessCss=`<style>html{scrollbar-gutter:stable}${path==='/'?'.premium-home-hero{display:grid!important;grid-template-columns:minmax(0,.82fr) minmax(390px,1.18fr)!important;gap:34px;align-items:center!important}.premium-home-hero>.hero-sky-card{min-height:744px;align-self:start}@media(max-width:1000px){.premium-home-hero{grid-template-columns:1fr!important}.premium-home-hero>.hero-sky-card{min-height:0}}':''}</style>`;
  const hasSpanish=spanishRouteSet.has(path);
  const alternateLinks=`<link rel="alternate" hreflang="tr" href="${SITE}${href('tr',path)}"><link rel="alternate" hreflang="en" href="${SITE}${href('en',path)}"><link rel="alternate" hreflang="el" href="${SITE}${href('el',path)}">${hasSpanish?`<link rel="alternate" hreflang="es" href="${SITE}${href('es',path)}">`:''}<link rel="alternate" hreflang="x-default" href="${SITE}${href('tr',path)}">`;
  html=html
    .replace(/<link rel="canonical" href="[^"]*">/g,'')
    .replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]*">/g,'')
    .replace(/<meta (?:property|name)="(?:og:title|og:description|og:image(?::(?:width|height|alt))?|og:locale|twitter:image(?::alt)?|twitter:title|twitter:description)"[^>]*>/g,'')
    .replace('</head>',`${criticalAccessCss}<link rel="canonical" href="${canonical}">${alternateLinks}<link rel="stylesheet" href="/mobile-menu-clean.css"><link rel="stylesheet" href="/cinematic.css">${path==='/'?'<link rel="stylesheet" href="/home-experience.css">':''}${heroPreload}<meta property="og:locale" content="${locale==='tr'?'tr_TR':locale==='en'?'en_US':locale==='el'?'el_GR':'es_ES'}"><meta property="og:title" content="${pageTitle}"><meta property="og:description" content="${pageDescription}"><meta property="og:image" content="${socialImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${socialImageAlt[locale]}"><meta name="twitter:title" content="${pageTitle}"><meta name="twitter:description" content="${pageDescription}"><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="${socialImageAlt[locale]}"></head>`);
  if(!html.includes('SearchAction'))html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}})}</script></head>`);
  html=html.replace('</head>',`<script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script></head>`);
  const needsDiscoveryClient=locale==='es'
    ?['/bugunun-gokyuzu','/ay-takvimi','/sinastri'].includes(path)
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
  if(!html.includes('/cansu-source-beacon.js'))html=html.replace('</body>','<script src="/cansu-source-beacon.js" data-site="mythborn" defer></script></body>');
  html=html.replace(/<img src="\/images\/mythborn-emblem\.png" alt=""(?:\s+[^>]*)?>/g,'<img src="/images/mythborn-emblem.png" alt="" width="275" height="257" decoding="async">');
  return html;
}

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
        const spanishEntries=spanishRoutes.map(path=>`<url><loc>${SITE}${href('es',path)}</loc>${blogDates[path]?`<lastmod>${blogDates[path]}</lastmod>`:''}<xhtml:link rel="alternate" hreflang="tr" href="${SITE}${href('tr',path)}"/><xhtml:link rel="alternate" hreflang="en" href="${SITE}${href('en',path)}"/><xhtml:link rel="alternate" hreflang="el" href="${SITE}${href('el',path)}"/><xhtml:link rel="alternate" hreflang="es" href="${SITE}${href('es',path)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${href('tr',path)}"/></url>`).join('');
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
