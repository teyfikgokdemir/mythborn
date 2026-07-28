import {access,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {tarotArtManifest,tarotLibraryPage} from '../src/tarot-library.js';

const failures=[];
const unique=(values)=>new Set(values).size===values.length;
const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');
const hamming=(first,second)=>{let distance=0;for(let index=0;index<first.length;index++){let value=Number.parseInt(first[index],16)^Number.parseInt(second[index],16);distance+=(value&1)+((value>>1)&1)+((value>>2)&1)+((value>>3)&1)}return distance};
if(tarotArtManifest.length!==78)failures.push(`expected 78 manifest entries, received ${tarotArtManifest.length}`);
if(tarotArtManifest.filter(card=>card.arcana==='major').length!==22)failures.push('expected 22 Major Arcana entries');
if(tarotArtManifest.filter(card=>card.arcana==='minor').length!==56)failures.push('expected 56 Minor Arcana entries');
if(!unique(tarotArtManifest.map(card=>card.slug)))failures.push('duplicate card slug');
if(!unique(tarotArtManifest.map(card=>`${card.arcana}/${card.assetSlug}`)))failures.push('duplicate asset path');
if(tarotArtManifest.some(card=>card.artStatus!=='final'))failures.push('all 78 cards must use final art; fallback is forbidden');
for(const suit of ['wands','cups','swords','pentacles'])if(tarotArtManifest.filter(card=>card.assetSlug.startsWith(`${suit}/`)).length!==14)failures.push(`${suit}: expected 14 cards`);

for(const locale of ['tr','en','el']){
  const html=tarotLibraryPage(locale,'/tarot-kartlari');
  if((html.match(/data-art-status="final"/g)||[]).length!==78)failures.push(`${locale}: expected 78 final art renderings`);
  if(html.includes('data-art-status="fallback"'))failures.push(`${locale}: fallback rendering remains`);
  if((html.match(/<picture class="tarot-card-art"/g)||[]).length!==78)failures.push(`${locale}: expected 78 responsive picture elements`);
  if((html.match(/(?:alt|aria-label)="[^"]+"/g)||[]).length<78)failures.push(`${locale}: incomplete localized art alternatives`);
}

const registry=JSON.parse(await readFile(new URL('../docs/assets/tarot-asset-registry.json',import.meta.url),'utf8'));
if(registry.entries?.length!==78)failures.push(`asset registry must contain 78 entries, received ${registry.entries?.length||0}`);
const registryByAsset=new Map((registry.entries||[]).map(entry=>[entry.asset,entry]));
if(!unique((registry.entries||[]).map(entry=>entry.master.sha256)))failures.push('duplicate master SHA-256');
let minimumPerceptualDistance=Infinity,minimumPair='';
for(let first=0;first<(registry.entries||[]).length;first++)for(let second=first+1;second<registry.entries.length;second++){
  const distance=hamming(registry.entries[first].master.dhash256,registry.entries[second].master.dhash256);
  if(distance<minimumPerceptualDistance){minimumPerceptualDistance=distance;minimumPair=`${registry.entries[first].asset} / ${registry.entries[second].asset}`}
  if(distance<32)failures.push(`perceptual duplicate (${distance}/256): ${registry.entries[first].asset} and ${registry.entries[second].asset}`);
}

const hashes=new Map();
for(const card of tarotArtManifest){
  const asset=`${card.arcana}/${card.assetSlug}`,entry=registryByAsset.get(asset);
  if(!entry){failures.push(`${card.slug}: missing asset registry entry`);continue}
  if(entry.master.size[0]!==1600||entry.master.size[1]!==2800)failures.push(`${card.slug}: master must be 1600x2800`);
  const master=new URL(`../docs/assets/tarot-masters/${asset}/master.webp`,import.meta.url);
  try{const bytes=await readFile(master);if(sha256(bytes)!==entry.master.sha256)failures.push(`${card.slug}: master hash does not match registry`)}catch{failures.push(`${card.slug}: missing master.webp`)}
  const root=new URL(`../public/images/tarot/${asset}/`,import.meta.url);
  for(const name of ['grid-480.avif','grid-480.webp','grid-960.avif','grid-960.webp','detail-480.avif','detail-480.webp','detail-960.avif','detail-960.webp']){
    const file=new URL(name,root);
    try{
      const bytes=await readFile(file);
      if(bytes.length<1024||bytes.length>900000)failures.push(`${card.slug}: ${name} outside size budget`);
      const hash=sha256(bytes),registered=entry.derivatives[name],expected=name.includes('-480.')?[480,840]:[960,1680];
      if(!registered)failures.push(`${card.slug}: ${name} missing from registry`);
      else{
        if(registered.sha256!==hash)failures.push(`${card.slug}: ${name} hash does not match registry`);
        if(registered.size[0]!==expected[0]||registered.size[1]!==expected[1])failures.push(`${card.slug}: ${name} has invalid dimensions`);
        if(registered.size[0]*7!==registered.size[1]*4)failures.push(`${card.slug}: ${name} is not 4:7`);
      }
      if(hashes.has(hash))failures.push(`${card.slug}: duplicate image with ${hashes.get(hash)}`);
      hashes.set(hash,`${card.slug}/${name}`);
    }catch{failures.push(`${card.slug}: missing ${name}`)}
  }
}

const deckSource=await readFile(new URL('../public/tarot-deck.js',import.meta.url),'utf8'),oracleSource=await readFile(new URL('../public/oracle.js',import.meta.url),'utf8');
if(!deckSource.includes('assetPath:`minor/${suitAssetSlugs[suitIndex]}/${rankAssetSlugs[i]}`'))failures.push('daily deck does not map Minor Arcana canonical assets');
if(!deckSource.includes('card.assetPath=`major/${majorAssetSlugs[index]}`'))failures.push('daily deck does not map Major Arcana canonical assets');
if(!oracleSource.includes('readingCardArt(card,{detail:true,eager:true})'))failures.push('daily card does not render its final detail asset');

for(const doc of ['mythborn-tarot-art-sources.md','mythborn-major-arcana-production.md','mythborn-minor-arcana-production.md']){
  try{await access(new URL(`../docs/${doc}`,import.meta.url))}catch{failures.push(`missing docs/${doc}`)}
}

if(failures.length)throw new Error(`Tarot art audit failed:\n${[...new Set(failures)].join('\n')}`);
const finalCount=tarotArtManifest.filter(card=>card.artStatus==='final').length;
console.log(`Tarot art audit passed: ${finalCount} final assets, 0 fallbacks, 78 unique masters; minimum perceptual distance ${minimumPerceptualDistance}/256 (${minimumPair}).`);
