import {labels} from './localized-shell-content.js';
import {spanishRouteSet} from './spanish-edition.js';
import {SITE_ORIGIN,LOCALES} from './site-config.js';

const SITE=SITE_ORIGIN;
const localeInfo=LOCALES;
const href=(locale,path)=>{
  const clean=path==='/'?'':path;
  if(locale==='es'&&path!=='/arama'&&!spanishRouteSet.has(path))return `/en${clean}`||'/en';
  return `${localeInfo[locale].prefix}${clean}`||'/';
};

const signsHref=locale=>href(locale,'/astroloji-kutuphanesi')+'#library-group-1';
const zodiacLabel=locale=>labels[locale]?.signs||({tr:'Burçlar',en:'Zodiac Signs',el:'Ζώδια',es:'Signos'}[locale]||'Zodiac Signs');
const trendingLabel=locale=>labels[locale]?.trendingGroup||({tr:'Trend',en:'Trending',el:'Τάσεις',es:'Tendencias'}[locale]||'Trending');
function exploreLinks(locale){
  const t=labels[locale];
  return [
    ['/astroloji',t.astroCentre],['/ruya-yorumlari',t.dreams],['/vedik-astroloji',t.vedic],['/astroloji-kutuphanesi',t.library],
    ['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/ay-takvimi',t.moon],['/numeroloji',t.numerology],
    ['/kadim-gokyuzu',t.ancient],['/advanced-astrology',t.advanced],['/astroloji-sozlugu',t.glossary],['/blog',t.blog]
  ].map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('')+'<a href="/bugunun-gokyuzu" hidden aria-hidden="true" tabindex="-1"></a>';
}
export function desktopNav(locale){
  const t=labels[locale];
  return `<nav class="nav desktop-nav" aria-label="${t.menu}">
    <a class="nav-layer nav-layer-reading" href="${href(locale,'/gunluk-kart')}"><span>${t.daily}</span></a>
    <a class="nav-layer nav-layer-reading" href="${href(locale,'/tarot')}"><span>${t.tarot}</span></a>
    <a class="nav-layer nav-layer-sky" href="${signsHref(locale)}"><span>${zodiacLabel(locale)}</span></a>
    <a class="nav-layer nav-layer-sky" href="${href(locale,'/haftalik-burc')}"><span>${t.weeklyLong}</span></a>
    <a class="nav-layer nav-layer-sky nav-layer-secondary" href="${href(locale,'/bugunun-gokyuzu')}"><span>${t.sky}</span></a>
    <a class="nav-layer nav-layer-sky nav-layer-secondary" href="${href(locale,'/sinastri')}"><span>${t.synastry}</span></a>
    <details class="desktop-explore nav-layer nav-layer-archive"><summary aria-haspopup="true" aria-expanded="false" aria-controls="desktop-explore-panel"><span>${t.explore}</span><i class="nav-chevron" aria-hidden="true"></i></summary><div class="desktop-explore-panel" id="desktop-explore-panel" role="menu"><div class="desktop-explore-intro"><small>${t.knowledge}</small><strong>${t.exploreIntro}</strong></div><div class="desktop-explore-links">${exploreLinks(locale)}</div></div></details>
  </nav>`;
}
export function headerLanguage(locale,path){
  const t=locale==='tr'?'Dil':locale==='en'?'Language':locale==='el'?'Γλώσσα':'Idioma',labelsForLocale=labels[locale];
  const languageName=code=>code==='tr'?'Türkçe':code==='en'?'English':code==='el'?'Ελληνικά':'Español';
  const codeLabel=code=>code==='el'?'GR':code.toUpperCase();
  const linkFor=code=>code==='es'&&!spanishRouteSet.has(path)?href('en',path):href(code,path);
  const suffix=code=>code==='es'&&!spanishRouteSet.has(path)?` · ${labelsForLocale.availableEnglish}`:'';
  return `<details class="header-language"><summary aria-label="${t}"><span aria-hidden="true">◎</span><strong>${codeLabel(locale)}</strong></summary><div class="header-language-panel">${['tr','en','el','es'].map(code=>`<a href="${linkFor(code,path)}"${code===locale?' aria-current="page"':''}${code==='es'&&!spanishRouteSet.has(path)?` aria-label="${languageName(code)} — ${labelsForLocale.availableEnglish}"`:''}><span>${codeLabel(code)}</span> <small>${languageName(code)}</small>${suffix(code)?`<em class="language-note">${suffix(code)}</em>`:''}</a>`).join('')}</div></details>`;
}
function group(title,links,locale,key,order){
  const id=`mobile-group-${key}`;
  return `<section class="mobile-nav-group"><button class="mobile-group-toggle" type="button" aria-expanded="true" aria-controls="${id}"><span class="mobile-group-title">${title}</span><span class="mobile-group-indicator" aria-hidden="true">−</span></button><div class="mobile-nav-grid" id="${id}">${links.map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('')}</div></section>`;
}
function mobileLanguage(locale,path){
  const languageLabel=locale==='tr'?'Dil':locale==='en'?'Language':locale==='el'?'Γλώσσα':'Idioma',labelsForLocale=labels[locale];
  const languageName=code=>code==='tr'?'Türkçe':code==='en'?'English':code==='el'?'Ελληνικά':'Español';
  const codeLabel=code=>code==='el'?'GR':code.toUpperCase();
  const linkFor=code=>code==='es'&&!spanishRouteSet.has(path)?href('en',path):href(code,path);
  const suffix=code=>code==='es'&&!spanishRouteSet.has(path)?` · ${labelsForLocale.availableEnglish}`:'';
  return `<section class="mobile-language" aria-label="${languageLabel}"><div class="mobile-language-heading"><span aria-hidden="true">◎</span><strong>${languageLabel}</strong><small>MYTHBORN / GLOBAL</small></div><div class="mobile-language-grid">${['tr','en','el','es'].map(code=>`<a href="${linkFor(code,path)}"${code===locale?' aria-current="page"':''}${code==='es'&&!spanishRouteSet.has(path)?` aria-label="${languageName(code)} — ${labelsForLocale.availableEnglish}"`:''}><span>${codeLabel(code)}</span><small>${languageName(code)}${suffix(code)}</small></a>`).join('')}</div></section>`;
}
export function mobileNav(locale,path='/'){
  const t=labels[locale];
  return `<div class="mobile-menu-backdrop" data-mobile-backdrop hidden></div><nav class="mobile-nav" id="mobile-nav" aria-label="${t.menu}" aria-hidden="true"><a href="/bugunun-gokyuzu" hidden aria-hidden="true" tabindex="-1"></a>
    <div class="mobile-nav-head"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><button class="mobile-nav-close" type="button" aria-label="${t.close}" data-mobile-close><span aria-hidden="true">×</span></button></div>
    <p class="mobile-nav-kicker">MYTHBORN · ${t.menu}</p>
    ${mobileLanguage(locale,path)}
    ${group(t.tarotGroup,[['/gunluk-kart',t.daily],['/tarot',t.three],['/ask',t.love],['/kariyer',t.career],['/otuz-gun',t.month],['/katina',t.katina]],locale,'tarot','01')}
    <section class="mobile-nav-group"><button class="mobile-group-toggle" type="button" aria-expanded="true" aria-controls="mobile-group-trending"><span class="mobile-group-title">${trendingLabel(locale)}</span><span class="mobile-group-indicator" aria-hidden="true">−</span></button><div class="mobile-nav-grid" id="mobile-group-trending"><a href="${href(locale,'/haftalik-burc')}">${t.weeklyLong}</a><a href="${signsHref(locale)}">${zodiacLabel(locale)}</a><a href="${href(locale,'/bugunun-gokyuzu')}">${t.sky}</a><a href="${href(locale,'/sinastri')}">${t.synastry}</a></div></section>
    ${group(t.astroGroup,[['/astroloji',t.astroCentre],['/vedik-astroloji',t.vedic],['/ay-takvimi',t.moon],['/astroloji-kutuphanesi',t.library]],locale,'astrology','02')}
    ${group(t.exploreGroup,[['/ruya-yorumlari',t.dreams],['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/numeroloji',t.numerology],['/kadim-gokyuzu',t.ancient],['/advanced-astrology',t.advanced],['/astroloji-sozlugu',t.glossary],['/blog',t.blog]],locale,'explore','03')}
  </nav>`;
}
export function knowledgeHub(locale){
  const t=labels[locale],items={
    tr:[['78 KARTLIK ARŞİV',t.tarotLibrary,'/tarot-kartlari','Kartların anlamlarını ve sembolik katmanlarını keşfet.'],['42 ASTROLOJİ REHBERİ',t.library,'/astroloji-kutuphanesi','Güneş, Ay, evler ve açılar için açık rehberler.'],['51 RÜYA SEMBOLÜ',t.dreamSymbols,'/ruya-sembolleri','Rüyalardaki imgeleri duygu ve bağlamla birlikte oku.'],['25 TEMEL KAVRAM',t.glossary,'/astroloji-sozlugu','Astrolojinin temel dilini sade biçimde öğren.'],['YÖNTEM VE UYGULAMA',t.vedic,'/vedik-astroloji','Sidereal harita, nakshatra ve dasha yaklaşımını incele.'],['İLERİ ASTROLOJİ',t.advanced,'/advanced-astrology','İleri düzey harita okumaları için daha derin bir çerçeve.']],
    en:[['78-CARD ARCHIVE',t.tarotLibrary,'/tarot-kartlari','Explore the meanings and symbolic layers of every card.'],['42 ASTROLOGY GUIDES',t.library,'/astroloji-kutuphanesi','Clear guides to the Sun, Moon, houses and aspects.'],['51 DREAM SYMBOLS',t.dreamSymbols,'/ruya-sembolleri','Read dream images through feeling, context and memory.'],['25 CORE TERMS',t.glossary,'/astroloji-sozlugu','Learn the essential language of astrology without the fog.'],['METHOD & PRACTICE',t.vedic,'/vedik-astroloji','A closer look at sidereal charts, nakshatras and dashas.'],['ADVANCED ASTROLOGY',t.advanced,'/advanced-astrology','A deeper framework for reading the architecture of a chart.']],
    el:[['ΑΡΧΕΙΟ 78 ΚΑΡΤΩΝ',t.tarotLibrary,'/tarot-kartlari','Ανακάλυψε τα νοήματα και τα συμβολικά επίπεδα κάθε κάρτας.'],['42 ΟΔΗΓΟΙ ΑΣΤΡΟΛΟΓΙΑΣ',t.library,'/astroloji-kutuphanesi','Καθαροί οδηγοί για Ήλιο, Σελήνη, οίκους και όψεις.'],['51 ΣΥΜΒΟΛΑ ΟΝΕΙΡΩΝ',t.dreamSymbols,'/ruya-sembolleri','Διάβασε τις εικόνες των ονείρων μέσα από συναίσθημα και πλαίσιο.'],['25 ΒΑΣΙΚΟΙ ΟΡΟΙ',t.glossary,'/astroloji-sozlugu','Μάθε τη βασική γλώσσα της αστρολογίας με απλό τρόπο.'],['ΜΕΘΟΔΟΣ ΚΑΙ ΠΡΑΚΤΙΚΗ',t.vedic,'/vedik-astroloji','Μια πιο κοντινή ματιά σε sidereal χάρτες, nakshatra και dasha.'],['ΠΡΟΧΩΡΗΜΕΝΗ ΑΣΤΡΟΛΟΓΙΑ',t.advanced,'/advanced-astrology','Ένα βαθύτερο πλαίσιο για την ανάγνωση ενός χάρτη.']],
    es:[['ARCHIVO DE 78 CARTAS',t.tarotLibrary,'/tarot-kartlari','Explora los significados y las capas simbólicas de cada carta.'],['42 GUÍAS DE ASTROLOGÍA',t.library,'/astroloji-kutuphanesi','Guías claras sobre el Sol, la Luna, las casas y los aspectos.'],['51 SÍMBOLOS DE SUEÑOS',t.dreamSymbols,'/ruya-sembolleri','Lee las imágenes de los sueños con emoción y contexto.'],['25 CONCEPTOS CLAVE',t.glossary,'/astroloji-sozlugu','Aprende el lenguaje esencial de la astrología sin complicaciones.'],['MÉTODO Y PRÁCTICA',t.vedic,'/vedik-astroloji','Una mirada más cercana a la carta sideral, nakshatras y dashas.'],['ASTROLOGÍA AVANZADA',t.advanced,'/advanced-astrology','Un marco más profundo para leer la arquitectura de una carta.']]
  }[locale];
  return `<section class="section knowledge-hub" data-layer="archive"><p class="eyebrow">${t.knowledge}</p><h2>${t.knowledgeTitle}</h2><p class="lead left-lead">${t.knowledgeCopy}</p><div class="knowledge-hub-grid">${items.map(([tag,title,path,description])=>{const englishOnly=locale==='es'&&!spanishRouteSet.has(path);return `<a class="knowledge-hub-card" href="${href(locale,path)}"><small>${tag}</small><h3>${title}</h3><p class="knowledge-hub-card-copy">${description}</p>${englishOnly?`<em class="locale-note" lang="es">${t.availableEnglish}</em>`:''}<span>${t.explore} →</span></a>`}).join('')}</div></section>`;
}
export function homePathwaysSchema(locale){
  const items={
    tr:[['Bugünün Gökyüzü','Gerçek zamanlı gezegen konumları ve günün belirgin açıları.','/bugunun-gokyuzu'],['Doğum Haritası','Gerçek astronomik verilerle doğum haritası hesaplama.','/astroloji'],['3 Kart Tarot','Geçmiş, şimdi ve yakın gelecek için ücretsiz sembolik açılım.','/tarot'],['Haftalık Burç','On iki burç için haftalık enerji ve farkındalık rehberi.','/haftalik-burc']],
    en:[['Today’s Sky','Real-time planetary positions and the day’s notable aspects.','/bugunun-gokyuzu'],['Birth Chart','Birth-chart calculation based on real astronomical data.','/astroloji'],['3-Card Tarot','A free symbolic reading for past, present and near future.','/tarot'],['Weekly Horoscope','Weekly energy and reflection guidance for all twelve signs.','/haftalik-burc']],
    el:[['Ο Σημερινός Ουρανός','Θέσεις πλανητών σε πραγματικό χρόνο και οι κύριες όψεις της ημέρας.','/bugunun-gokyuzu'],['Γενέθλιος Χάρτης','Υπολογισμός γενέθλιου χάρτη με πραγματικά αστρονομικά δεδομένα.','/astroloji'],['Ταρώ 3 Καρτών','Δωρεάν συμβολική ανάγνωση για παρελθόν, παρόν και κοντινό μέλλον.','/tarot'],['Εβδομαδιαίο Ωροσκόπιο','Εβδομαδιαία καθοδήγηση ενέργειας και στοχασμού για τα δώδεκα ζώδια.','/haftalik-burc']],
    es:[['El cielo de hoy','Posiciones planetarias en tiempo real y aspectos destacados del día.','/bugunun-gokyuzu'],['Carta natal','Cálculo de carta natal basado en datos astronómicos reales.','/astroloji'],['Tarot de 3 cartas','Lectura simbólica gratuita para pasado, presente y futuro cercano.','/tarot'],['Horóscopo semanal','Guía semanal de energía y reflexión para los doce signos.','/haftalik-burc']]
  }[locale];
  return {'@context':'https://schema.org','@type':'ItemList','@id':`${SITE}${href(locale,'/')}#essential-paths`,name:locale==='tr'?'Mythborn başlangıç yolları':locale==='en'?'Mythborn essential paths':locale==='el'?'Βασικές διαδρομές Mythborn':'Rutas esenciales de Mythborn',numberOfItems:items.length,itemListElement:items.map(([name,description,path],position)=>({'@type':'ListItem',position:position+1,item:{'@type':'Thing',name,description,url:`${SITE}${href(locale,path)}`}}))};
}

export function footer(locale){
  const copy={
    tr:{tag:'Tarot, astroloji ve sembolik farkındalık için etik ve ücretsiz bir keşif alanı.',readings:'Açılımlar',learn:'Bilgi Merkezi',search:'Sitede ara',legal:'Yasal',privacy:'Gizlilik Politikası',terms:'Kullanım Koşulları',cookies:'Çerez Politikası',manage:'Çerez tercihlerini yönet',notice:'KVKK Aydınlatma Metni',rights:'Tüm hakları saklıdır.',note:'Eğlence, eğitim ve kişisel farkındalık amaçlıdır.',top:'Sayfa başına dön',collabEye:'REKLAM & İŞ BİRLİĞİ',collabTitle:'Mythborn ile çalışmak ister misiniz?',collabCopy:'Reklam, marka iş birlikleri, sponsorluk ve ticari proje teklifleri için bize ulaşın.',collabCta:'İletişime geç',credit:'Digital experience by QCT Commerce'},
    en:{tag:'An ethical, free space for Tarot, astrology and symbolic self-reflection.',readings:'Readings',learn:'Knowledge Centre',search:'Search the site',legal:'Legal',privacy:'Privacy Policy',terms:'Terms of Use',cookies:'Cookie Policy',manage:'Manage cookie preferences',notice:'Turkish Data Protection Notice',rights:'All rights reserved.',note:'For entertainment, education and personal reflection.',top:'Back to top',collabEye:'ADVERTISING & PARTNERSHIPS',collabTitle:'Work with Mythborn',collabCopy:'For advertising, brand partnerships, sponsorships and commercial project proposals, contact us directly.',collabCta:'Get in touch',credit:'Digital experience by QCT Commerce'},
    el:{tag:'Ένας δωρεάν και δεοντολογικός χώρος για Ταρώ, αστρολογία και συμβολικό αυτοστοχασμό.',readings:'Αναγνώσεις',learn:'Κέντρο Γνώσης',search:'Αναζήτηση στον ιστότοπο',legal:'Νομικά',privacy:'Πολιτική Απορρήτου',terms:'Όροι Χρήσης',cookies:'Πολιτική Cookies',manage:'Διαχείριση προτιμήσεων cookies',notice:'Ενημέρωση Προστασίας Δεδομένων Τουρκίας',rights:'Με επιφύλαξη παντός δικαιώματος.',note:'Για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό.',top:'Επιστροφή στην κορυφή',collabEye:'ΔΙΑΦΗΜΙΣΗ & ΣΥΝΕΡΓΑΣΙΕΣ',collabTitle:'Συνεργαστείτε με το Mythborn',collabCopy:'Για διαφήμιση, συνεργασίες με brands, χορηγίες και εμπορικές προτάσεις, επικοινωνήστε απευθείας μαζί μας.',collabCta:'Επικοινωνία',credit:'Ψηφιακή εμπειρία από την QCT Commerce'},
    es:{tag:'Un espacio ético y gratuito para el Tarot, la astrología y la reflexión simbólica.',readings:'Lecturas',learn:'Centro de conocimiento',search:'Buscar en el sitio',legal:'Legal',privacy:'Política de privacidad',terms:'Términos de uso',cookies:'Política de cookies',manage:'Gestionar preferencias de cookies',notice:'Aviso turco de protección de datos',rights:'Todos los derechos reservados.',note:'Para entretenimiento, educación y reflexión personal.',top:'Volver arriba',collabEye:'PUBLICIDAD & COLABORACIONES',collabTitle:'Colabora con Mythborn',collabCopy:'Para publicidad, colaboraciones de marca, patrocinios y propuestas comerciales, contáctanos directamente.',collabCta:'Contactar',credit:'Experiencia digital por QCT Commerce'}
  }[locale],t=labels[locale];
  const links=(items)=>items.map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('');
  const backToTopBtn=`<button class="mythborn-back-to-top" type="button" aria-label="${copy.top}" title="${copy.top}" aria-hidden="true" tabindex="-1" data-back-to-top><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M12 19V5m0 0-6 6m6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
  return `<footer class="site-footer"><div class="site-footer-grid"><div class="site-footer-brand"><a class="site-footer-logo" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><p>${copy.tag}</p><a href="mailto:info@mythborn.co">info@mythborn.co</a></div><div class="site-footer-column"><h2 id="footer-readings">${copy.readings}</h2><nav aria-labelledby="footer-readings">${links([['/gunluk-kart',t.daily],['/tarot',t.three],['/ask',t.love],['/katina',t.katina]])}</nav></div><div class="site-footer-column"><h2 id="footer-learn">${copy.learn}</h2><nav aria-labelledby="footer-learn">${links([['/astroloji-kutuphanesi',t.library],['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/astroloji-sozlugu',t.glossary],['/blog',t.blog],['/arama',copy.search]])}</nav></div><div class="site-footer-column"><h2 id="footer-legal">${copy.legal}</h2><nav aria-labelledby="footer-legal">${links([['/gizlilik',copy.privacy],['/kullanim-kosullari',copy.terms],['/cerezler',copy.cookies],['/kvkk',copy.notice]])}<button type="button" data-consent-manage>${copy.manage}</button></nav></div><figure class="site-footer-guardian" aria-hidden="true"><img src="/images/mikael_angel.png" width="1254" height="1254" loading="lazy" decoding="async" alt=""></figure></div><aside class="site-footer-collab" aria-labelledby="footer-collab-title"><div><p class="eyebrow">${copy.collabEye}</p><h2 id="footer-collab-title">${copy.collabTitle}</h2><p>${copy.collabCopy}</p></div><a class="site-footer-collab-mail" href="mailto:info@mythborn.co"><span>${copy.collabCta}</span><strong>info@mythborn.co</strong><b aria-hidden="true">→</b></a></aside><div class="site-footer-bottom"><span>© 2026 Mythborn. ${copy.rights}</span><a class="site-footer-credit" href="https://qctcommerce.com/" target="_blank" rel="noopener noreferrer">${copy.credit}</a><span>${copy.note}</span></div></footer>${backToTopBtn}`;
}
