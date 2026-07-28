import worker from '../src/app-router.js';
import {access,readFile,stat} from 'node:fs/promises';

const env={ASSETS:{fetch:()=>new Response('',{status:200})}};
const variants={
  'home/hero-celestial':[640,960,1440],
  'daily/daily-card-altar':[480,720,960],
  'tarot/tarot-three-card':[480,720,960],
  'katina/katina-relationship':[480,720,960],
  'astrology/birth-chart-observatory':[640,960,1440],
  'membership/personal-celestial-archive':[640,960,1440],
  'knowledge/celestial-knowledge-library':[640,960,1440],
  'social/mythborn-social-celestial':[600,1200]
};

for(const [stem,widths] of Object.entries(variants)){
  for(const width of widths){
    for(const extension of ['avif','webp']){
      const file=new URL(`../public/images/cinematic/${stem}-${width}.${extension}`,import.meta.url);
      await access(file);
      if((await stat(file)).size<5000)throw new Error(`Cinematic asset is unexpectedly small: ${file.pathname}`);
    }
  }
}
await access(new URL('../public/images/cinematic/social/mythborn-social-celestial.jpg',import.meta.url));

const client=await readFile(new URL('../public/cinematic.js',import.meta.url),'utf8');
for(const token of [
  'type="image/avif"','type="image/webp"','width="${asset.width}"','height="${asset.height}"',
  "loading=\"${key === 'hero' ? 'eager' : 'lazy'}\"",'fetchpriority="high"',
  'Hilal, yıldız haritası','Night observatory illuminated','Νυχτερινό παρατηρητήριο',
  'Altın ışık bağıyla','thread of golden light','λεπτή χρυσή ακτίνα'
])if(!client.includes(token))throw new Error(`Cinematic client missing ${token}`);

for(const path of ['/','/en','/gr','/gunluk-kart','/en/tarot','/gr/katina','/astroloji']){
  const response=await worker.fetch(new Request(`https://mythborn.co${path}`),env,{});
  if(response.status!==200)throw new Error(`${path} returned ${response.status}`);
  const html=await response.text();
  for(const token of ['/cinematic.css','/cinematic.js','mythborn-social-celestial.jpg','og:image:width','twitter:image:alt']){
    if(!html.includes(token))throw new Error(`${path} missing ${token}`);
  }
}
const english=await (await worker.fetch(new Request('https://mythborn.co/en'),env,{})).text();
const greek=await (await worker.fetch(new Request('https://mythborn.co/gr'),env,{})).text();
for(const token of ['Mythborn — Tarot, Astrology and Symbolic Reflection','A free platform for real astronomical data, daily Tarot and weekly horoscope guidance.']){
  if(!english.includes(`<meta property="og:${token.startsWith('Mythborn')?'title':'description'}" content="${token}`))throw new Error(`English social metadata missing ${token}`);
}
for(const token of ['Mythborn — Ταρώ, Αστρολογία και Συμβολικός Στοχασμός','Δωρεάν πλατφόρμα με πραγματικά αστρονομικά δεδομένα, ημερήσιο Ταρώ και εβδομαδιαίες αστρολογικές τάσεις.']){
  if(!greek.includes(`<meta property="og:${token.startsWith('Mythborn')?'title':'description'}" content="${token}`))throw new Error(`Greek social metadata missing ${token}`);
}
console.log('Cinematic assets, responsive sources, localized alternatives and social metadata audit passed.');
