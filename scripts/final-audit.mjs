import worker from '../src/hotfix-router.js';
const env={ASSETS:{fetch:()=>new Response('',{status:200})},TURNSTILE_SITE_KEY:'1x00000000000000000000AA'};
async function check(path,need=[]){const response=await worker.fetch(new Request(`https://mythborn.co${path}`),env,{});if(response.status!==200)throw new Error(`${path} returned ${response.status}`);const body=await response.text();for(const value of need)if(!body.includes(value))throw new Error(`${path} missing ${value}`);return body}
await check('/gunluk-kart',['mythborn_daily_v3_','data-daily-deck','aria-hidden']);
await check('/',['knowledge-hub','Tarot Ansiklopedisi','Doğum Haritası Kütüphanesi','Rüya Ansiklopedisi','Astroloji Sözlüğü','desktop-explore','mobile-nav-close','mobile-menu-backdrop','Escape']);
await check('/en',['KNOWLEDGE CENTRE','Tarot Encyclopedia','Birth Chart Library','Explore','Close menu']);
await check('/el',['ΚΕΝΤΡΟ ΓΝΩΣΗΣ','Εγκυκλοπαίδεια Ταρώ','Βιβλιοθήκη Γενέθλιου Χάρτη','Εξερεύνηση','Κλείσιμο μενού','GR']);
await check('/llms.en.txt',['78-card Tarot encyclopedia','Birth-chart library','Dream-symbol encyclopedia']);
await check('/llms.el.txt',['Εγκυκλοπαίδεια 78 καρτών Ταρώ','Βιβλιοθήκη γενέθλιου χάρτη','Εγκυκλοπαίδεια συμβόλων ονείρων']);
console.log('Final UX, compact desktop navigation, closable mobile menu, daily-card persistence, knowledge-hub and multilingual llms audit passed.');