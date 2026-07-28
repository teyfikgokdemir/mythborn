import platform from './premium-router.js';
import {tarotSearchItems} from './tarot-library.js';
import {dreamSearchItems,glossarySearchItems} from './dream-glossary.js';
import {astrologySearchItems} from './astrology-library.js';
import {localizedBlogSearchItems} from './localized-blog.js';
import {premiumGuideSearchItems} from './premium-guides.js';
import {blogMeta} from './blog.js';
import {corePage,coreMeta} from './core-pages.js';
import {discoveryPage,discoveryMeta} from './discovery-core.js';

const SITE='https://mythborn.co';
const localeInfo={
  tr:{prefix:'',html:'tr',label:'TR'},
  en:{prefix:'/en',html:'en',label:'EN'},
  el:{prefix:'/gr',html:'el',label:'GR'}
};
const socialImage=`${SITE}/images/cinematic/social/mythborn-social-celestial.jpg`;
const socialImageAlt={
  tr:'Altın göksel halkalar içindeki hilal ve gece ufkunda mor kristal',
  en:'A crescent moon within golden celestial rings above a violet crystal on the night horizon',
  el:'Ημισέληνος μέσα σε χρυσούς ουράνιους δακτυλίους πάνω από μωβ κρύσταλλο στον νυχτερινό ορίζοντα'
};
const labels={
  tr:{
    daily:'Günlük Kart',tarot:'Tarot',astrology:'Astroloji',weekly:'Haftalık',explore:'Keşfet',account:'Hesabım',
    close:'Menüyü kapat',open:'Menüyü aç',menu:'Ana menü',tarotGroup:'Tarot',astroGroup:'Astroloji',exploreGroup:'Keşfet',accountGroup:'Hesap',
    login:'Giriş Yap',register:'Üye Ol',astroCentre:'Astroloji Merkezi',weeklyLong:'Haftalık Burç',sky:'Bugünün Gökyüzü',
    synastry:'Sinastri',moon:'Ay Takvimi',library:'Astroloji Kütüphanesi',ancient:'Kadim Gökyüzü',dreams:'Rüya Yorumları',
    numerology:'Numeroloji',blog:'Blog',tarotLibrary:'Tarot Ansiklopedisi',advanced:'Gelişmiş Astroloji',
    dreamSymbols:'Rüya Sembolleri',glossary:'Astroloji Sözlüğü',three:'3 Kart Tarot',love:'Aşk & Geri Dönüş',
    career:'Kariyer & Para',month:'30 Gün',katina:'Katina',knowledge:'BİLGİ MERKEZİ',
    knowledgeTitle:'Sembolleri ve gökyüzünü derinlemesine keşfet.',
    knowledgeCopy:'Tarot kartları, doğum haritası, rüya sembolleri ve astroloji kavramları için kapsamlı rehberler.',
    search:'Sitede ara'
  },
  en:{
    daily:'Daily Card',tarot:'Tarot',astrology:'Astrology',weekly:'Weekly',explore:'Explore',account:'My Account',
    close:'Close menu',open:'Open menu',menu:'Main menu',tarotGroup:'Tarot',astroGroup:'Astrology',exploreGroup:'Explore',accountGroup:'Account',
    login:'Sign In',register:'Join Free',astroCentre:'Astrology Centre',weeklyLong:'Weekly Horoscope',sky:'Today’s Sky',
    synastry:'Synastry',moon:'Moon Calendar',library:'Birth Chart Library',ancient:'Ancient Sky',dreams:'Dream Interpretation',
    numerology:'Numerology',blog:'Journal',tarotLibrary:'Tarot Encyclopedia',advanced:'Advanced Astrology',
    dreamSymbols:'Dream Symbols',glossary:'Astrology Glossary',three:'3-Card Tarot',love:'Love & Reconnection',
    career:'Career & Money',month:'30-Day Reading',katina:'Katina',knowledge:'KNOWLEDGE CENTRE',
    knowledgeTitle:'Explore symbols and the sky in depth.',
    knowledgeCopy:'Comprehensive guides to Tarot cards, birth charts, dream symbols and astrology concepts.',
    search:'Search the site'
  },
  el:{
    daily:'Ημερήσια Κάρτα',tarot:'Ταρώ',astrology:'Αστρολογία',weekly:'Εβδομαδιαίο',explore:'Εξερεύνηση',account:'Ο Λογαριασμός μου',
    close:'Κλείσιμο μενού',open:'Άνοιγμα μενού',menu:'Κύριο μενού',tarotGroup:'Ταρώ',astroGroup:'Αστρολογία',exploreGroup:'Εξερεύνηση',accountGroup:'Λογαριασμός',
    login:'Σύνδεση',register:'Δωρεάν Εγγραφή',astroCentre:'Κέντρο Αστρολογίας',weeklyLong:'Εβδομαδιαίο Ωροσκόπιο',sky:'Ο Σημερινός Ουρανός',
    synastry:'Συναστρία',moon:'Σεληνιακό Ημερολόγιο',library:'Βιβλιοθήκη Γενέθλιου Χάρτη',ancient:'Αρχαίος Ουρανός',dreams:'Ερμηνεία Ονείρων',
    numerology:'Αριθμολογία',blog:'Περιοδικό',tarotLibrary:'Εγκυκλοπαίδεια Ταρώ',advanced:'Προχωρημένη Αστρολογία',
    dreamSymbols:'Σύμβολα Ονείρων',glossary:'Γλωσσάρι Αστρολογίας',three:'Ταρώ 3 Καρτών',love:'Αγάπη & Επανασύνδεση',
    career:'Καριέρα & Χρήματα',month:'Άνοιγμα 30 Ημερών',katina:'Κατίνα',knowledge:'ΚΕΝΤΡΟ ΓΝΩΣΗΣ',
    knowledgeTitle:'Εξερεύνησε σε βάθος τα σύμβολα και τον ουρανό.',
    knowledgeCopy:'Αναλυτικοί οδηγοί για κάρτες Ταρώ, γενέθλιους χάρτες, σύμβολα ονείρων και έννοιες αστρολογίας.',
    search:'Αναζήτηση στον ιστότοπο'
  }
};
const llms={
  en:`# Mythborn\n\nMythborn is a free multilingual Tarot, birth-chart and symbolic self-reflection platform.\n\n## Knowledge libraries\n- 78-card Tarot encyclopedia\n- Birth-chart library\n- Dream-symbol encyclopedia\n- Astrology glossary\n\nContent supports entertainment, education and personal reflection. It is not medical, legal, financial or deterministic advice.\n`,
  el:`# Mythborn\n\nΤο Mythborn είναι μια δωρεάν πολύγλωσση πλατφόρμα Ταρώ, γενέθλιου χάρτη και συμβολικού αυτοστοχασμού.\n\n## Βιβλιοθήκες γνώσης\n- Εγκυκλοπαίδεια 78 καρτών Ταρώ\n- Βιβλιοθήκη γενέθλιου χάρτη\n- Εγκυκλοπαίδεια συμβόλων ονείρων\n- Γλωσσάρι αστρολογίας\n\nΤο περιεχόμενο προορίζεται για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό.\n`
};
const localeFrom=path=>path==='/en'||path.startsWith('/en/')?'en':path==='/gr'||path.startsWith('/gr/')?'el':'tr';
const cleanPath=(path,locale)=>locale==='tr'?path:(path===localeInfo[locale].prefix?'/':path.slice(localeInfo[locale].prefix.length)||'/');
const href=(locale,path)=>`${localeInfo[locale].prefix}${path==='/'?'':path}`||'/';
const turkishBlogSearchItems=()=>Object.entries(blogMeta).filter(([path])=>path.startsWith('/blog/')).map(([path,[title,description]])=>({title,description,category:'journal',path}));
const searchItems=locale=>[
  ...tarotSearchItems(locale),
  ...astrologySearchItems(locale),
  ...dreamSearchItems(locale),
  ...glossarySearchItems(locale),
  ...(locale==='tr'?turkishBlogSearchItems():localizedBlogSearchItems(locale)),
  ...premiumGuideSearchItems(locale)
].map(item=>({...item,url:href(locale,item.path)}));

function exploreLinks(locale){
  const t=labels[locale];
  return [
    ['/bugunun-gokyuzu',t.sky],['/sinastri',t.synastry],['/kadim-gokyuzu',t.ancient],['/ruya-yorumlari',t.dreams],
    ['/numeroloji',t.numerology],['/ay-takvimi',t.moon],['/blog',t.blog],['/tarot-kartlari',t.tarotLibrary],
    ['/astroloji-kutuphanesi',t.library],['/advanced-astrology',t.advanced],['/ruya-sembolleri',t.dreamSymbols],
    ['/astroloji-sozlugu',t.glossary]
  ].map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('')+'<a href="/bugunun-gokyuzu" hidden aria-hidden="true" tabindex="-1"></a>';
}
function desktopNav(locale){
  const t=labels[locale];
  return `<nav class="nav desktop-nav" aria-label="${t.menu}">
    <a href="${href(locale,'/gunluk-kart')}">${t.daily}</a>
    <a href="${href(locale,'/tarot')}">${t.tarot}</a>
    <a href="${href(locale,'/astroloji')}">${t.astrology}</a>
    <a href="${href(locale,'/haftalik-burc')}">${t.weekly}</a>
    <details class="desktop-explore"><summary aria-haspopup="true" aria-expanded="false" aria-controls="desktop-explore-panel">${t.explore}<span class="nav-chevron" aria-hidden="true"></span></summary><div class="desktop-explore-panel" id="desktop-explore-panel" role="menu">${exploreLinks(locale)}</div></details>
    <a class="desktop-account" href="${href(locale,'/hesabim')}">${t.account}</a>
  </nav>`;
}
function group(title,links,locale,key){
  const id=`mobile-group-${key}`;
  return `<section class="mobile-nav-group"><button class="mobile-group-toggle" type="button" aria-expanded="false" aria-controls="${id}">${title}<span aria-hidden="true">＋</span></button><div class="mobile-nav-grid" id="${id}" hidden>${links.map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('')}</div></section>`;
}
function mobileNav(locale){
  const t=labels[locale];
  return `<div class="mobile-menu-backdrop" data-mobile-backdrop hidden></div><nav class="mobile-nav" id="mobile-nav" aria-label="${t.menu}" aria-hidden="true"><a href="/bugunun-gokyuzu" hidden aria-hidden="true" tabindex="-1"></a>
    <div class="mobile-nav-head"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><button class="mobile-nav-close" type="button" aria-label="${t.close}" data-mobile-close><span aria-hidden="true">×</span></button></div>
    ${group(t.tarotGroup,[['/gunluk-kart',t.daily],['/tarot',t.three],['/ask',t.love],['/kariyer',t.career],['/otuz-gun',t.month],['/katina',t.katina]],locale,'tarot')}
    ${group(t.astroGroup,[['/astroloji',t.astroCentre],['/haftalik-burc',t.weeklyLong],['/bugunun-gokyuzu',t.sky],['/sinastri',t.synastry],['/ay-takvimi',t.moon],['/astroloji-kutuphanesi',t.library]],locale,'astrology')}
    ${group(t.exploreGroup,[['/kadim-gokyuzu',t.ancient],['/ruya-yorumlari',t.dreams],['/numeroloji',t.numerology],['/blog',t.blog],['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/astroloji-sozlugu',t.glossary]],locale,'explore')}
    ${group(t.accountGroup,[['/giris',t.login],['/kayit',t.register],['/hesabim',t.account]],locale,'account')}
  </nav>`;
}
function knowledgeHub(locale){
  const t=labels[locale],items=[
    ['78',t.tarotLibrary,'/tarot-kartlari'],['42',t.library,'/astroloji-kutuphanesi'],['51',t.dreamSymbols,'/ruya-sembolleri'],
    ['25',t.glossary,'/astroloji-sozlugu'],['✦',t.advanced,'/advanced-astrology'],['⌕',t.search,'/arama']
  ];
  return `<section class="section knowledge-hub"><p class="eyebrow">${t.knowledge}</p><h2>${t.knowledgeTitle}</h2><p class="lead left-lead">${t.knowledgeCopy}</p><div class="knowledge-hub-grid">${items.map(([tag,title,path])=>`<a class="knowledge-hub-card" href="${href(locale,path)}"><small>${tag}</small><h3>${title}</h3><span>${t.explore} →</span></a>`).join('')}</div></section>`;
}
function languageSwitcher(locale,path){
  return `<nav class="language-switcher" aria-label="Language"><a href="${href('tr',path)}"${locale==='tr'?' aria-current="page"':''}>TR</a><a href="${href('en',path)}"${locale==='en'?' aria-current="page"':''}>EN</a><a href="${href('el',path)}"${locale==='el'?' aria-current="page"':''}>GR</a></nav>`;
}
function footer(locale){
  const copy={
    tr:{tag:'Tarot, astroloji ve sembolik farkındalık için etik ve ücretsiz bir keşif alanı.',readings:'Açılımlar',learn:'Bilgi Merkezi',legal:'Yasal',privacy:'Gizlilik Politikası',terms:'Kullanım Koşulları',cookies:'Çerez Politikası',notice:'KVKK Aydınlatma Metni',rights:'Tüm hakları saklıdır.',note:'Eğlence, eğitim ve kişisel farkındalık amaçlıdır.'},
    en:{tag:'An ethical, free space for Tarot, astrology and symbolic self-reflection.',readings:'Readings',learn:'Knowledge Centre',legal:'Legal',privacy:'Privacy Policy',terms:'Terms of Use',cookies:'Cookie Policy',notice:'Turkish Data Protection Notice',rights:'All rights reserved.',note:'For entertainment, education and personal reflection.'},
    el:{tag:'Ένας δωρεάν και δεοντολογικός χώρος για Ταρώ, αστρολογία και συμβολικό αυτοστοχασμό.',readings:'Αναγνώσεις',learn:'Κέντρο Γνώσης',legal:'Νομικά',privacy:'Πολιτική Απορρήτου',terms:'Όροι Χρήσης',cookies:'Πολιτική Cookies',notice:'Ενημέρωση Προστασίας Δεδομένων Τουρκίας',rights:'Με επιφύλαξη παντός δικαιώματος.',note:'Για ψυχαγωγία, εκπαίδευση και προσωπικό στοχασμό.'}
  }[locale],t=labels[locale];
  const links=(items)=>items.map(([path,text])=>`<a href="${href(locale,path)}">${text}</a>`).join('');
  return `<footer class="site-footer"><div class="site-footer-grid"><div class="site-footer-brand"><a class="site-footer-logo" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a><p>${copy.tag}</p><a href="mailto:info@mythborn.co">info@mythborn.co</a></div><div class="site-footer-column"><h3>${copy.readings}</h3><nav>${links([['/gunluk-kart',t.daily],['/tarot',t.three],['/ask',t.love],['/katina',t.katina]])}</nav></div><div class="site-footer-column"><h3>${copy.learn}</h3><nav>${links([['/astroloji-kutuphanesi',t.library],['/tarot-kartlari',t.tarotLibrary],['/ruya-sembolleri',t.dreamSymbols],['/astroloji-sozlugu',t.glossary],['/blog',t.blog]])}</nav></div><div class="site-footer-column"><h3>${copy.legal}</h3><nav>${links([['/gizlilik',copy.privacy],['/kullanim-kosullari',copy.terms],['/cerezler',copy.cookies],['/kvkk',copy.notice]])}</nav></div></div><div class="site-footer-bottom"><span>© 2026 Mythborn. ${copy.rights}</span><span>${copy.note}</span></div></footer>`;
}
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
    }
  }[locale][path];
  return `<main id="ana-icerik"><section class="section legal-page"><p class="eyebrow">MYTHBORN</p><h1>${content[0]}</h1><p class="lead left-lead">${content[1]}</p><h2>${locale==='tr'?'İletişim':locale==='en'?'Contact':'Επικοινωνία'}</h2><p><a href="mailto:info@mythborn.co">info@mythborn.co</a></p></section></main>`;
}
function notFoundPage(locale){
  const t={
    tr:['Sayfa bulunamadı','Aradığınız sayfa burada değil.','Ana sayfaya dön'],
    en:['Page not found','The page you requested is not here.','Return home'],
    el:['Η σελίδα δεν βρέθηκε','Η σελίδα που ζητήσατε δεν υπάρχει εδώ.','Επιστροφή στην αρχική']
  }[locale];
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 — Mythborn</title><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}</header><main id="ana-icerik"><section class="section"><h1>${t[0]}</h1><p>${t[1]}</p><a class="btn btn-primary" href="${href(locale,'/')}">${t[2]}</a></section></main>${footer(locale)}</div></body></html>`;
}
function searchPage(locale){
  const t=labels[locale],title=t.search;
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}});
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — Mythborn</title><meta name="description" content="${t.knowledgeCopy}"><link rel="canonical" href="${SITE}${href(locale,'/arama')}"><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"><link rel="stylesheet" href="/mobile-menu-clean.css"><script type="application/ld+json">${schema}</script></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale)}<main id="ana-icerik"><section class="section search-page"><p class="eyebrow">${t.knowledge}</p><h1>${title}</h1><form role="search" data-site-search><label>${title}<input type="search" name="q" autocomplete="off"></label><label>${t.exploreGroup}<select name="category"><option value="">${t.exploreGroup}</option><option value="tarot">${t.tarot}</option><option value="astrology">${t.astrology}</option><option value="dream">${t.dreams}</option><option value="journal">${t.blog}</option></select></label><button class="btn btn-primary" type="submit">${title}</button></form><div class="search-results" aria-live="polite" data-search-results></div></section></main></div>${languageSwitcher(locale,'/arama')}<script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script><script src="/search.js" defer></script><script src="/shell.js" defer></script></body></html>`;
}
function decorate(html,locale,path){
  const t=labels[locale];
  html=html.replace(/\/el(?=\/|["?#])/g,'/gr').replaceAll('>EL<','>GR<');
  html=html.replace(/<html lang="[^"]*"/,`<html lang="${localeInfo[locale].html}"`);
  html=html.replace(/<nav class="nav">[\s\S]*?<\/nav>/,desktopNav(locale));
  html=html.replace(/<footer\b[\s\S]*?<\/footer>/,footer(locale));
  const localizedMain=corePage(locale,path)||discoveryPage(locale,path);
  if(localizedMain)html=html.replace(/<main\b[\s\S]*?<\/main>/,localizedMain);
  if(['/gizlilik','/kvkk','/kullanim-kosullari','/cerezler'].includes(path))html=html.replace(/<main\b[\s\S]*?<\/main>/,legalMain(locale,path));
  if(!html.includes('mobile-menu-button'))html=html.replace('</header>',`<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale)}`);
  if(path==='/'&&!html.includes('knowledge-hub'))html=html.replace('</main>',`${knowledgeHub(locale)}</main>`);
  const canonical=`${SITE}${href(locale,path)}`;
  const localizedMeta=coreMeta(locale,path)||discoveryMeta(locale,path);
  if(localizedMeta){
    html=html.replace(/<title>[^<]*<\/title>/,`<title>${localizedMeta.title}</title>`);
    html=html.replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${localizedMeta.description}">`);
    const localizedSchema={'@context':'https://schema.org','@type':'WebPage',name:localizedMeta.title,headline:localizedMeta.title,description:localizedMeta.description,url:canonical,inLanguage:localeInfo[locale].html,isPartOf:{'@type':'WebSite',name:'Mythborn',url:SITE},...(path==='/haftalik-burc'?{dateModified:new Date().toISOString().slice(0,10)}:{})};
    html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace('</head>',`<script type="application/ld+json">${JSON.stringify(localizedSchema)}</script></head>`);
  }
  const documentTitle=html.match(/<title>([^<]*)<\/title>/)?.[1]||'Mythborn';
  const documentDescription=html.match(/<meta name="description" content="([^"]*)">/)?.[1]||labels[locale].knowledgeCopy;
  const pageTitle=locale==='tr'?(html.match(/<meta property="og:title" content="([^"]*)">/)?.[1]||documentTitle):documentTitle;
  const pageDescription=locale==='tr'?(html.match(/<meta property="og:description" content="([^"]*)">/)?.[1]||documentDescription):documentDescription;
  const heroPreload=path==='/'?'<link rel="preload" as="image" type="image/avif" href="/images/cinematic/home/hero-celestial-1440.avif" imagesrcset="/images/cinematic/home/hero-celestial-640.avif 640w, /images/cinematic/home/hero-celestial-960.avif 960w, /images/cinematic/home/hero-celestial-1440.avif 1440w" imagesizes="100vw" fetchpriority="high">':'';
  html=html
    .replace(/<link rel="canonical" href="[^"]*">/g,'')
    .replace(/<meta (?:property|name)="(?:og:title|og:description|og:image(?::(?:width|height|alt))?|og:locale|twitter:image(?::alt)?|twitter:title|twitter:description)"[^>]*>/g,'')
    .replace('</head>',`<link rel="canonical" href="${canonical}"><link rel="stylesheet" href="/mobile-menu-clean.css"><link rel="stylesheet" href="/cinematic.css">${heroPreload}<meta property="og:locale" content="${locale==='tr'?'tr_TR':locale==='en'?'en_US':'el_GR'}"><meta property="og:title" content="${pageTitle}"><meta property="og:description" content="${pageDescription}"><meta property="og:image" content="${socialImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${socialImageAlt[locale]}"><meta name="twitter:title" content="${pageTitle}"><meta name="twitter:description" content="${pageDescription}"><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="${socialImageAlt[locale]}"></head>`);
  if(!html.includes('SearchAction'))html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}})}</script></head>`);
  if(!html.includes('language-switcher'))html=html.replace('</body>',`${languageSwitcher(locale,path)}</body>`);
  html=html.replace('</head>',`<script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script></head>`);
  if(locale!=='tr'&&discoveryPage(locale,path)){
    html=html.replace(/<script src="\/(?:discover|sky|synastry)\.js" defer><\/script>/g,'');
    html=html.replace('</body>','<script src="/discovery-localized.js" defer></script></body>');
  }
  if(!html.includes('/shell.js'))html=html.replace('</body>','<script src="/shell.js" defer></script></body>');
  if(path==='/'&&!html.includes('/home-sky.js'))html=html.replace('</body>','<script src="/home-sky.js" defer></script></body>');
  if(!html.includes('/cinematic.js'))html=html.replace('</body>','<script src="/cinematic.js" defer></script></body>');
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
    if(incoming.pathname==='/llms.en.txt')return new Response(llms.en,{headers:{'content-type':'text/plain; charset=utf-8'}});
    if(incoming.pathname==='/llms.gr.txt')return new Response(llms.el,{headers:{'content-type':'text/plain; charset=utf-8'}});
    if(incoming.pathname==='/api/search-index'){
      const requested=incoming.searchParams.get('locale'),locale=requested==='en'?'en':requested==='el'||requested==='gr'?'el':'tr';
      return new Response(JSON.stringify({locale,count:searchItems(locale).length,items:searchItems(locale)}),{headers:{'content-type':'application/json; charset=utf-8','cache-control':'public, max-age=3600'}});
    }
    if(['/shell.js','/search.js','/home-sky.js','/discovery-localized.js','/mobile-menu-clean.css','/cinematic.js','/cinematic.css'].includes(incoming.pathname))return env.ASSETS.fetch(request);
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
    if(clean==='/arama')return new Response(searchPage(locale),{headers:{'content-type':'text/html; charset=utf-8','content-language':localeInfo[locale].html}});
    let forwarded=request;
    if(locale==='el'){
      const internal=new URL(request.url);
      internal.pathname='/el'+clean;
      forwarded=new Request(internal.toString(),request);
    }
    const response=await platform.fetch(forwarded,env,ctx);
    const type=response.headers.get('content-type')||'';
    if(!type.includes('text/html')){
      if(incoming.pathname==='/sitemap.xml'){
        const xml=(await response.text()).replace(/\/el(?=\/|["<])/g,'/gr');
        return new Response(xml,{status:response.status,headers:response.headers});
      }
      return response;
    }
    const headers=new Headers(response.headers);
    headers.set('content-language',localeInfo[locale].html);
    const source=response.status===404?notFoundPage(locale):await response.text();
    return new Response(decorate(source,locale,clean),{status:response.status,headers});
  }
};
