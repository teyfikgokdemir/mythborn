import {readFile} from 'node:fs/promises';

const stripComments=text=>text
  .replace(/\/\*[\s\S]*?\*\//g,'')
  .replace(/^\s*\/\/.*$/gm,'');

const readJsonc=async path=>JSON.parse(stripComments(await readFile(new URL(path,import.meta.url),'utf8')));

const prod=await readJsonc('../wrangler.jsonc');
const preview=await readJsonc('../wrangler.preview.jsonc');

const errors=[];
const prodDb=prod.d1_databases?.find(item=>item.binding==='DB');
const previewDb=preview.d1_databases?.find(item=>item.binding==='DB');

if(prod.vars?.ENVIRONMENT!=='production')errors.push('Production config ENVIRONMENT must be production');
if(preview.vars?.ENVIRONMENT!=='preview')errors.push('Preview config ENVIRONMENT must be preview');
if(prodDb?.database_name!=='mythborn-membership')errors.push('Production DB must be mythborn-membership');
if(prodDb?.database_id!=='99490fbd-8f6c-4bf9-b5ed-bffdfdbd8771')errors.push('Production DB id mismatch');
if(previewDb?.database_name!=='mythborn-membership-preview')errors.push('Preview DB must be mythborn-membership-preview');
if(previewDb?.database_id!=='82d3d933-282d-4369-b68e-cee26b66349b')errors.push('Preview DB id mismatch');
if(prodDb?.database_id===previewDb?.database_id)errors.push('Production and preview must never share the same D1 database');
if(prod.name===preview.name)errors.push('Production and preview Worker names must differ');

if(errors.length){
  console.error(errors.map(item=>`- ${item}`).join('\n'));
  process.exit(1);
}

console.log('Runtime config isolation audit passed: production and preview use separate Worker environments and D1 databases.');
