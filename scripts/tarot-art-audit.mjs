import {access,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {tarotArtManifest,tarotLibraryPage} from '../src/tarot-library.js';

const failures=[];
const unique=(values)=>new Set(values).size===values.length;
if(tarotArtManifest.length!==78)failures.push(`expected 78 manifest entries, received ${tarotArtManifest.length}`);
if(tarotArtManifest.filter(card=>card.arcana==='major').length!==22)failures.push('expected 22 Major Arcana entries');
if(!unique(tarotArtManifest.map(card=>card.slug)))failures.push('duplicate card slug');
if(!unique(tarotArtManifest.map(card=>`${card.arcana}/${card.assetSlug}`)))failures.push('duplicate asset path');
if(tarotArtManifest.some(card=>!['final','fallback'].includes(card.artStatus)))failures.push('invalid artStatus');

for(const locale of ['tr','en','el']){
  const html=tarotLibraryPage(locale,'/tarot-kartlari');
  if((html.match(/data-art-status="(?:final|fallback)"/g)||[]).length!==78)failures.push(`${locale}: incomplete art status rendering`);
  if((html.match(/(?:alt|aria-label)="[^"]+"/g)||[]).length<78)failures.push(`${locale}: incomplete localized art alternatives`);
}

const hashes=new Map();
for(const card of tarotArtManifest.filter(card=>card.artStatus==='final')){
  const root=new URL(`../public/images/tarot/${card.arcana}/${card.assetSlug}/`,import.meta.url);
  for(const name of ['grid-480.avif','grid-480.webp','detail-480.avif','detail-480.webp','detail-960.avif','detail-960.webp']){
    const file=new URL(name,root);
    try{
      await access(file);
      const bytes=await readFile(file);
      if(bytes.length<1024||bytes.length>900000)failures.push(`${card.slug}: ${name} outside size budget`);
      const hash=createHash('sha256').update(bytes).digest('hex');
      if(hashes.has(hash))failures.push(`${card.slug}: duplicate image with ${hashes.get(hash)}`);
      hashes.set(hash,`${card.slug}/${name}`);
    }catch{failures.push(`${card.slug}: missing ${name}`)}
  }
}

for(const doc of ['mythborn-tarot-art-sources.md','mythborn-major-arcana-production.md','mythborn-minor-arcana-production.md']){
  try{await access(new URL(`../docs/${doc}`,import.meta.url))}catch{failures.push(`missing docs/${doc}`)}
}

if(failures.length)throw new Error(`Tarot art audit failed:\n${failures.join('\n')}`);
const finalCount=tarotArtManifest.filter(card=>card.artStatus==='final').length;
console.log(`Tarot art audit passed: ${finalCount} final assets, ${78-finalCount} safe fallbacks, 78 unique asset destinations.`);
