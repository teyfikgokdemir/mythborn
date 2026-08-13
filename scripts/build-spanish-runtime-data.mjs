import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const sourceDir='/home/ubuntu/mythborn/public/es-content';
const target='/home/ubuntu/mythborn/src/spanish-content-data.js';
const content={};
for(const name of (await readdir(sourceDir)).filter(name=>name.endsWith('.json')).sort()){
  const page=JSON.parse(await readFile(join(sourceDir,name),'utf8'));
  content[page.path]=page;
}
await writeFile(target,`// Generated from public/es-content. Run npm run spanish:build after editorial updates.\nexport const spanishContent=${JSON.stringify(content)};\n`);
console.log(`Wrote ${Object.keys(content).length} Spanish runtime pages to ${target}`);
