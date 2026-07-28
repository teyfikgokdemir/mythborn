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
console.log('Final UX, compact desktop navigation, closable mobile menu, daily-card persistence, knowledge-hub and multilingual llms audit passed.');
