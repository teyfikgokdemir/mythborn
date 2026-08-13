import {spanishContent} from './spanish-content-data.js';

export const spanishContentRoutes=[
  '/',
  '/gunluk-kart',
  '/tarot',
  '/ask',
  '/kariyer',
  '/otuz-gun',
  '/katina',
  '/astroloji',
  '/haftalik-burc',
  '/bugunun-gokyuzu',
  '/sinastri',
  '/ay-takvimi',
  '/kadim-gokyuzu',
  '/maya-zaman-donguleri',
  '/mezopotamya-astrolojisi',
  '/doga-gokyuzu-donguleri'
];

export const spanishStaticPages={
  '/gizlilik':{title:'Política de privacidad — Mythborn',description:'Principios de privacidad y tratamiento de datos personales de Mythborn.'},
  '/kvkk':{title:'Aviso turco de protección de datos — Mythborn',description:'Información sobre el tratamiento de datos sujeto a la Ley turca n.º 6698 (KVKK).'},
  '/kullanim-kosullari':{title:'Términos de uso — Mythborn',description:'Términos de uso y límites de interpretación de Mythborn.'},
  '/cerezler':{title:'Política de cookies — Mythborn',description:'Uso de cookies esenciales y gestión de preferencias en Mythborn.'}
};

export const spanishRoutes=[...spanishContentRoutes,...Object.keys(spanishStaticPages)];
export const spanishRouteSet=new Set(spanishRoutes);
export const spanishAssetName=path=>path==='/'?'home':path.slice(1).replaceAll('/','--');
export const spanishAssetPath=path=>`/es-content/${spanishAssetName(path)}.json`;

export function loadSpanishPage(path){
  if(!spanishRouteSet.has(path))return null;
  const staticPage=spanishStaticPages[path];
  if(staticPage)return {path,...staticPage,main:'<main></main>'};
  const page=spanishContent[path];
  if(page?.path!==path||typeof page.title!=='string'||typeof page.description!=='string'||typeof page.main!=='string'||!page.main.startsWith('<main')||!page.main.includes('</main>'))return null;
  return page;
}
