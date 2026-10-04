export const SITE_ORIGIN='https://mythborn.co';
export const CANONICAL_HOST='mythborn.co';

export const LOCALES=Object.freeze({
  tr:Object.freeze({prefix:'',html:'tr',contentLanguage:'tr-TR',label:'TR'}),
  en:Object.freeze({prefix:'/en',html:'en',contentLanguage:'en',label:'EN'}),
  el:Object.freeze({prefix:'/gr',html:'el',contentLanguage:'el',label:'GR',legacyPrefix:'/el'}),
  es:Object.freeze({prefix:'/es',html:'es',contentLanguage:'es',label:'ES'})
});

export const PUBLIC_LOCALE_CODES=Object.freeze(Object.keys(LOCALES));

export const localeFromPath=pathname=>{
  if(pathname==='/en'||pathname.startsWith('/en/'))return 'en';
  if(pathname==='/gr'||pathname.startsWith('/gr/')||pathname==='/el'||pathname.startsWith('/el/'))return 'el';
  if(pathname==='/es'||pathname.startsWith('/es/'))return 'es';
  return 'tr';
};

export const cleanLocalePath=(pathname,locale)=>{
  if(locale==='tr')return pathname;
  const config=LOCALES[locale];
  const prefix=pathname===config.legacyPrefix||pathname.startsWith(`${config.legacyPrefix}/`)
    ?config.legacyPrefix
    :config.prefix;
  if(pathname===prefix)return '/';
  return pathname.slice(prefix.length)||'/';
};

export const localizedPath=(pathname,locale)=>{
  const clean=pathname==='/'?'':pathname;
  return `${LOCALES[locale].prefix}${clean}`||'/';
};

// Search exists in every public locale even though it is not a Spanish editorial route.
export const searchRoute=locale=>localizedPath('/arama',locale);
export const searchAlternates=()=>PUBLIC_LOCALE_CODES.map(locale=>({locale,href:`${SITE_ORIGIN}${searchRoute(locale)}`}));
