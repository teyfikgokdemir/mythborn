import {labels} from './localized-shell-content.js';
import {SITE_ORIGIN,LOCALES} from './site-config.js';
import {spanishRouteSet} from './spanish-edition.js';
import {desktopNav,headerLanguage,mobileNav,footer} from './localized-navigation.js';

const SITE=SITE_ORIGIN;
const localeInfo=LOCALES;
const href=(locale,path)=>{
  const clean=path==='/'?'':path;
  if(locale==='es'&&path!=='/arama'&&!spanishRouteSet.has(path))return `/en${clean}`||'/en';
  return `${localeInfo[locale].prefix}${clean}`||'/';
};

export function legalMain(locale,path){
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
export function notFoundPage(locale){
  const t={
    tr:['Sayfa bulunamadı','Aradığınız sayfa burada değil.','Ana sayfaya dön'],
    en:['Page not found','The page you requested is not here.','Return home'],
    el:['Η σελίδα δεν βρέθηκε','Η σελίδα που ζητήσατε δεν υπάρχει εδώ.','Επιστροφή στην αρχική'],
    es:['Página no encontrada','La página solicitada no está disponible aquí.','Volver al inicio']
  }[locale];
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 — Mythborn</title><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}</header><main id="ana-icerik"><section class="section"><h1>${t[0]}</h1><p>${t[1]}</p><a class="btn btn-primary" href="${href(locale,'/')}">${t[2]}</a></section></main>${footer(locale)}</div></body></html>`;
}
export function searchPage(locale){
  const t=labels[locale],title=t.search;
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Mythborn',url:SITE,potentialAction:{'@type':'SearchAction',target:`${SITE}${href(locale,'/arama')}?q={search_term_string}`,'query-input':'required name=search_term_string'}});
  return `<!doctype html><html lang="${localeInfo[locale].html}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — Mythborn</title><meta name="description" content="${t.knowledgeCopy}"><link rel="canonical" href="${SITE}${href(locale,'/arama')}"><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"><link rel="stylesheet" href="/mobile-menu-clean.css"><script type="application/ld+json">${schema}</script></head><body><div class="shell"><header class="topbar"><a class="brand" href="${href(locale,'/')}"><img src="/images/mythborn-emblem.png" alt=""><span>MYTHBORN</span></a>${desktopNav(locale)}${headerLanguage(locale,'/arama')}<button class="mobile-menu-button" type="button" aria-label="${t.open}" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></header>${mobileNav(locale,'/arama')}<main id="ana-icerik"><section class="section search-page"><p class="eyebrow">${t.knowledge}</p><h1>${title}</h1><form role="search" data-site-search><label>${title}<input type="search" name="q" autocomplete="off"></label><label>${t.exploreGroup}<select name="category"><option value="">${t.exploreGroup}</option><option value="tarot">${t.tarot}</option><option value="astrology">${t.astrology}</option><option value="dream">${t.dreams}</option><option value="journal">${t.blog}</option></select></label><button class="btn btn-primary" type="submit">${title}</button></form><div class="search-results" aria-live="polite" data-search-results></div></section></main>${footer(locale)}</div><script>window.MYTHBORN_LOCALE=${JSON.stringify(locale)}</script><script src="/search.js" defer></script><script src="/shell.js" defer></script></body></html>`;
}
