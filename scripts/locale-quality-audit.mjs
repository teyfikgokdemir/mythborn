import worker from '../src/app-router.js';
import {readFile} from 'node:fs/promises';
import {spanishRoutes,spanishRouteSet} from '../src/spanish-edition.js';
import {localizedBlogMissingTranslations} from '../src/localized-blog.js';

const env={ASSETS:{fetch:async request=>{const pathname=new URL(request.url).pathname;try{return new Response(await readFile(new URL(`../public${pathname}`,import.meta.url)),{status:200})}catch{return new Response('',{status:200})}}}};
const routes=['/','/gunluk-kart','/tarot','/ask','/kariyer','/otuz-gun','/katina','/astroloji','/haftalik-burc','/bugunun-gokyuzu','/sinastri','/ay-takvimi','/ruya-yorumlari','/numeroloji','/burc-uyumu','/kadim-gokyuzu','/giris','/kayit','/hesabim'];
const forbidden=/\b(?:Ücretsiz|Üyelik|Günlük|Doğum|Gökyüzü|Şifre|Hesabına|Burcunu|İlişki durumun|Odaklandığın|TARİH|Gelenekleri|Rüyanı|Hesapla|Yorumla)\b/;
for(const locale of ['en','gr']){
  for(const route of routes){
    const response=await worker.fetch(new Request(`https://mythborn.co/${locale}${route==='/'?'':route}`),env,{});
    if(response.status!==200)throw new Error(`/${locale}${route} returned ${response.status}`);
    const html=await response.text(),main=html.match(/<main\b[\s\S]*?<\/main>/)?.[0]||'';
    if(forbidden.test(main))throw new Error(`/${locale}${route} contains a Turkish fallback: ${main.match(forbidden)?.[0]}`);
    if(!html.includes(`window.MYTHBORN_LOCALE="${locale==='gr'?'el':'en'}"`))throw new Error(`/${locale}${route} has no stable locale bootstrap`);
    if(!html.includes(`"inLanguage":"${locale==='gr'?'el':'en'}"`))throw new Error(`/${locale}${route} has no localized structured-data language`);
  }
}
for(const route of spanishRoutes){
  const response=await worker.fetch(new Request(`https://mythborn.co/es${route==='/'?'':route}`),env,{});
  if(response.status!==200)throw new Error(`/es${route} returned ${response.status}`);
  const html=await response.text(),main=html.match(/<main\b[\s\S]*?<\/main>/)?.[0]||'';
  if(forbidden.test(main))throw new Error(`/es${route} contains a Turkish fallback: ${main.match(forbidden)?.[0]}`);
  if(!html.includes('window.MYTHBORN_LOCALE="es"'))throw new Error(`/es${route} has no stable locale bootstrap`);
  if(!html.includes('"inLanguage":"es"'))throw new Error(`/es${route} has no localized structured-data language`);
  for(const match of main.matchAll(/href=["']\/en(\/[^"'?#]*)/g)){
    const target=match[1]||'/';
    if(spanishRouteSet.has(target)||target==='/arama')throw new Error(`/es${route} leaks to English even though a Spanish target exists: /en${target}`);
  }
}
for(const route of ['/astroloji-kutuphanesi','/retro-hareketler','/transitler','/evler/10','/burclar/akrep']){
  const response=await worker.fetch(new Request('https://mythborn.co/es'+route),env,{});
  if(response.status!==200)throw new Error('/es'+route+' returned '+response.status);
  const html=await response.text();
  const main=html.match(/<main\b[\s\S]*?<\/main>/)?.[0]||'';
  if(/[Α-ωΆ-ώ]/u.test(main))throw new Error('/es'+route+' contains Greek fallback content');
  if(!html.includes('lang="es"')||!html.includes('"inLanguage":"es"'))throw new Error('/es'+route+' is missing Spanish language metadata');
}
const weekly=await readFile(new URL('../public/weekly.js',import.meta.url),'utf8');
for(const token of ["'aries'","'pisces'",'history.replaceState','aria-pressed','WEEKLY ADVICE','ΣΥΜΒΟΥΛΗ ΕΒΔΟΜΑΔΑΣ','HAFTANIN TAVSİYESİ'])if(!weekly.includes(token))throw new Error(`Weekly implementation missing ${token}`);
const shell=await readFile(new URL('../public/shell.js',import.meta.url),'utf8');
for(const token of ['aria-expanded','ArrowDown','mouseenter','mouseleave','mobile-group-toggle'])if(!shell.includes(token))throw new Error(`Navigation behaviour missing ${token}`);
console.log('Core SSR locale isolation, Spanish content isolation, weekly state and accessible navigation audit passed.');


// Blog translation parity: no silent English fallback is allowed for localized editions.
for(const locale of ['en','el','es']){
  const missing=localizedBlogMissingTranslations(locale);
  if(missing.length)throw new Error('Blog translation parity failed for '+locale+': '+missing.join(', '));
}

// Core page structural parity across all public languages.
const parity={
  '/tarot':['data-member-reading="tarot"','data-reading-workspace','data-tool-answer-guide'],
  '/astroloji':['data-member-reading="astroloji"','data-tool-answer-guide'],
  '/sinastri':['data-synastry-form','data-tool-answer-guide'],
  '/gunluk-kart':['data-daily-deck'],
  '/haftalik-burc':['data-weekly-zodiac','data-weekly-result']
};
for(const [route,tokens] of Object.entries(parity)){
  for(const prefix of ['', '/en', '/gr', '/es']){
    const response=await worker.fetch(new Request('https://mythborn.co'+prefix+route),env,{});
    if(response.status!==200)throw new Error((prefix||'/tr')+route+' returned '+response.status);
    const html=await response.text();
    for(const token of tokens)if(!html.includes(token))throw new Error((prefix||'/tr')+route+' missing parity token: '+token);
  }
}

// Spanish pages must not advertise an English fallback when the Spanish target exists.
const spanishNativeTargets=['/es/tarot-kartlari','/es/ruya-sembolleri','/es/astroloji-kutuphanesi','/es/astroloji-sozlugu','/es/advanced-astrology','/es/arama'];
for(const route of ['/tarot','/astroloji','/sinastri','/']){
  const response=await worker.fetch(new Request('https://mythborn.co/es'+(route==='/'?'':route)),env,{});
  const html=await response.text();
  for(const target of spanishNativeTargets){
    const pos=html.indexOf('href="'+target+'"');
    if(pos>=0&&html.slice(pos,pos+260).includes('Disponible en inglés'))throw new Error('/es'+route+' shows obsolete English fallback label for '+target);
  }
}
