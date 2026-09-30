import worker from '../src/app-router.js';
import {readFile} from 'node:fs/promises';
const env={ASSETS:{fetch:()=>new Response('',{status:200})},TURNSTILE_SITE_KEY:'1x00000000000000000000AA'};
async function check(path,need=[]){const response=await worker.fetch(new Request(`https://mythborn.co${path}`),env,{});if(response.status!==200)throw new Error(`${path} returned ${response.status}`);const body=await response.text();for(const value of need)if(!body.includes(value))throw new Error(`${path} missing ${value}`);return body}
await check('/gunluk-kart',['data-daily-deck','/oracle.js']);
const daily=await readFile(new URL('../public/oracle.js',import.meta.url),'utf8');
for(const value of ['mythborn_daily_v3_','localDayKey','dailyButton.hidden=true','localStorage.getItem(dailyStorageKey())'])if(!daily.includes(value))throw new Error(`daily-card persistence missing ${value}`);
const oauthClient=await readFile(new URL('../public/social-auth.js',import.meta.url),'utf8');
for(const value of ["prefix+'/hesabim'","/api/auth/oauth/google/start","Continue with Google","Συνέχεια με Google"])if(!oauthClient.includes(value))throw new Error(`localized OAuth client missing ${value}`);
await check('/',['knowledge-hub','Tarot Ansiklopedisi','Astroloji Kütüphanesi','Rüya Sembolleri','Astroloji Sözlüğü','desktop-explore','mobile-nav-close','mobile-menu-backdrop','/shell.js']);
await check('/en',['KNOWLEDGE CENTRE','Tarot Encyclopedia','Birth Chart Library','Explore','Close menu']);
await check('/gr',['ΚΕΝΤΡΟ ΓΝΩΣΗΣ','Εγκυκλοπαίδεια Ταρώ','Βιβλιοθήκη Γενέθλιου Χάρτη','Εξερεύνηση','Κλείσιμο μενού','GR']);
await check('/llms.en.txt',['78-card Tarot encyclopedia','Birth-chart library','Dream-symbol encyclopedia']);
await check('/llms.gr.txt',['Εγκυκλοπαίδεια 78 καρτών Ταρώ','Βιβλιοθήκη γενέθλιου χάρτη','Εγκυκλοπαίδεια συμβόλων ονείρων']);

const zodiacSlugs=['koc','boga','ikizler','yengec','aslan','basak','terazi','akrep','yay','oglak','kova','balik'];
const localePrefixes={tr:'',en:'/en',el:'/gr',es:'/es'};
const zodiacSectionTokens={
 tr:['Hızlı profil','Aşk ve ilişkiler','Kariyer ve çalışma biçimi','Para ve kaynak yönetimi','İletişim tarzı','Güneş, Ay ve Yükselen farkı','Doğum haritasında nasıl okunur?'],
 en:['Quick profile','Love and relationships','Career and work style','Money and resources','Communication style','Sun, Moon and Rising','How to read it in a birth chart'],
 el:['Γρήγορο προφίλ','Αγάπη και σχέσεις','Καριέρα και τρόπος εργασίας','Χρήματα και πόροι','Τρόπος επικοινωνίας','Ήλιος, Σελήνη και Ωροσκόπος','Πώς διαβάζεται στον γενέθλιο χάρτη'],
 es:['Perfil rápido','Amor y relaciones','Carrera y estilo de trabajo','Dinero y recursos','Estilo de comunicación','Sol, Luna y Ascendente','Cómo leerlo en la carta natal']
};
for(const [locale,prefix] of Object.entries(localePrefixes)){
  const home=await check(prefix||'/',[]);
  if(home.includes('>undefined<')||home.includes('${title}'))throw new Error(`${locale} navigation contains unresolved template text`);
  for(const slug of zodiacSlugs){
    const body=await check(`${prefix}/burclar/${slug}`,['FAQPage','BreadcrumbList','Article',...zodiacSectionTokens[locale]]);
    if(body.includes('${title}')||body.includes('>undefined<'))throw new Error(`${locale}/burclar/${slug} contains unresolved template text`);
    if(!body.includes('class="article-faq"'))throw new Error(`${locale}/burclar/${slug} missing visible FAQ accordion`);
  }
}
const trLibrary=await check('/astroloji-kutuphanesi',['id="library-group-1"','12 Burç']);
if(!trLibrary.includes('/burclar/koc')||!trLibrary.includes('/burclar/balik'))throw new Error('Zodiac library index is incomplete');

console.log('Final UX, navigation, 12-sign multilingual content, FAQ, schema and knowledge-hub audit passed.');
