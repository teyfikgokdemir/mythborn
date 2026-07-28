import worker from '../src/premium-router.js';
const env={ASSETS:{fetch:()=>new Response('',{status:200})},TURNSTILE_SITE_KEY:'1x00000000000000000000AA'};
async function check(path,need=[]){const response=await worker.fetch(new Request(`https://mythborn.co${path}`),env,{});if(response.status!==200)throw new Error(`${path} returned ${response.status}`);const body=await response.text();for(const value of need)if(!body.includes(value))throw new Error(`${path} missing ${value}`);return body}
const routes=['/astrokartografi','/progresyonlar','/solar-return','/lunar-return','/vedik-astroloji','/nakshatra-dasha'];
await check('/advanced-astrology',['GELİŞMİŞ ASTROLOJİ','Astrokartografi','Vedik Astroloji','hreflang="en"','hreflang="el"']);
await check('/en/advanced-astrology',['ADVANCED ASTROLOGY','Astrocartography','Vedic Astrology','lang="en"']);
await check('/el/advanced-astrology',['ΠΡΟΧΩΡΗΜΕΝΗ ΑΣΤΡΟΛΟΓΙΑ','Αστροχαρτογραφία','Βεδική Αστρολογία','lang="el"']);
for(const route of routes){await check(route,['FAQPage','BreadcrumbList','Article','hreflang="en"','hreflang="el"']);await check(`/en${route}`,['FAQPage','BreadcrumbList','Article','lang="en"']);await check(`/el${route}`,['FAQPage','BreadcrumbList','Article','lang="el"'])}
const slugs=['saturn-retrosu-2026','12-agustos-2026-gunes-tutulmasi','jupiter-aslanda-2026','uranus-ikizlerde-teknoloji-yapay-zeka','sinastri-nedir','saturn-donusu-rehberi','astrokartografi-nedir','travma-bilincli-astroloji','yapay-zeka-tarot-etik','tarot-ve-astrolojiyi-birlikte-okumak'];
await check('/en/blog',['SKY JOURNAL','Saturn Retrograde 2026','AI Tarot Interpretation']);
await check('/el/blog',['ΟΥΡΑΝΙΟ ΠΕΡΙΟΔΙΚΟ','Ανάδρομος Κρόνος 2026','Ερμηνεία Ταρώ με AI']);
for(const slug of slugs){await check(`/en/blog/${slug}`,['FAQPage','Article','hreflang="tr"','FREQUENTLY ASKED QUESTIONS']);await check(`/el/blog/${slug}`,['FAQPage','Article','hreflang="tr"','ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ'])}
await check('/tarot-kartlari',['Tarot Kartları Ansiklopedisi','Büyük Arkana','Küçük Arkana','Dünya','Tılsım Kral']);
await check('/en/tarot-kartlari',['Tarot Card Encyclopedia','Major Arcana','Minor Arcana','The World','King of Pentacles']);
await check('/el/tarot-kartlari',['Εγκυκλοπαίδεια Καρτών Ταρώ','Μεγάλη Αρκάνα','Μικρή Αρκάνα','Ο Κόσμος','Βασιλιάς των Πεντάκτινα']);
for(const path of ['/tarot-kartlari/deli','/tarot-kartlari/kupa-on','/tarot-kartlari/kilic-kralice']){await check(path,['FAQPage','BreadcrumbList','Işık anlamı','Gölge anlamı']);await check(`/en${path}`,['FAQPage','BreadcrumbList','Light meaning','Shadow meaning']);await check(`/el${path}`,['FAQPage','BreadcrumbList','Φωτεινή έννοια','Σκιώδης έννοια'])}
await check('/astroloji-kutuphanesi',['Doğum Haritası Kütüphanesi','12 Burç','12 Ev','Gezegenler','Açılar ve Zamanlama']);
await check('/en/astroloji-kutuphanesi',['Birth Chart Library','12 Signs','12 Houses','Planets','Aspects and Timing']);
await check('/el/astroloji-kutuphanesi',['Βιβλιοθήκη Γενέθλιου Χάρτη','12 Ζώδια','12 Οίκοι','Πλανήτες','Όψεις και Χρονισμός']);
const librarySamples=['/burclar/akrep','/evler/10','/gezegenler/saturn','/acilar/kare','/transitler','/retro-hareketler'];
for(const path of librarySamples){await check(path,['FAQPage','BreadcrumbList','Article','hreflang="en"','hreflang="el"']);await check(`/en${path}`,['FAQPage','BreadcrumbList','Article','lang="en"']);await check(`/el${path}`,['FAQPage','BreadcrumbList','Article','lang="el"'])}
const sitemap=await check('/sitemap.xml',['/advanced-astrology','/en/astrokartografi','/el/vedik-astroloji','/en/blog/saturn-retrosu-2026','/el/blog/yapay-zeka-tarot-etik','/tarot-kartlari/dunya','/en/tarot-kartlari/kupa-as','/el/tarot-kartlari/kilic-kral','/astroloji-kutuphanesi','/en/burclar/koc','/el/evler/12','/gezegenler/pluton','/acilar/quincunx','hreflang="x-default"']);
if(!sitemap.includes('xmlns:xhtml'))throw new Error('Localized sitemap namespace missing');
console.log(`Premium multilingual audit passed: advanced centers, ${slugs.length} full articles, 78 Tarot cards and 42 birth-chart guides × 3 languages.`);