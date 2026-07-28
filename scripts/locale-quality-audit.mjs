import worker from '../src/app-router.js';
import {readFile} from 'node:fs/promises';

const env={ASSETS:{fetch:()=>new Response('',{status:200})}};
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
const weekly=await readFile(new URL('../public/weekly.js',import.meta.url),'utf8');
for(const token of ["'aries'","'pisces'",'history.replaceState','aria-pressed','WEEKLY ADVICE','ΣΥΜΒΟΥΛΗ ΕΒΔΟΜΑΔΑΣ','HAFTANIN TAVSİYESİ'])if(!weekly.includes(token))throw new Error(`Weekly implementation missing ${token}`);
const shell=await readFile(new URL('../public/shell.js',import.meta.url),'utf8');
for(const token of ['aria-expanded','ArrowDown','mouseenter','mouseleave','mobile-group-toggle'])if(!shell.includes(token))throw new Error(`Navigation behaviour missing ${token}`);
console.log('Core SSR locale isolation, weekly state and accessible navigation audit passed.');
