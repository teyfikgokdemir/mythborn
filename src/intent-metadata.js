// Keep route names and editorial content intact; distinguish reference-page intents.
const families={
  acilar:{tr:'Doğum haritasında açılar',en:'Birth chart aspects',el:'Όψεις γενέθλιου χάρτη',es:'Aspectos de la carta natal'},
  'astroloji-sozlugu':{tr:'Astroloji sözlüğü',en:'Astrology glossary',el:'Αστρολογικό λεξικό',es:'Glosario de astrología'},
  burclar:{tr:'Burç rehberi',en:'Zodiac sign guide',el:'Οδηγός ζωδίων',es:'Guía de signos del zodiaco'},
  gezegenler:{tr:'Doğum haritasında gezegenler',en:'Planets in the birth chart',el:'Πλανήτες στον γενέθλιο χάρτη',es:'Planetas en la carta natal'},
  'tarot-kartlari':{tr:'Tarot kartı rehberi',en:'Tarot card guide',el:'Οδηγός καρτών ταρώ',es:'Guía de cartas del tarot'},
  'ruya-sembolleri':{tr:'Rüya sembolleri',en:'Dream symbols',el:'Σύμβολα ονείρων',es:'Símbolos de los sueños'}
};
const dasha={
  tr:['Nakshatra ve Dasha: Vedik zamanlama rehberi | Mythborn','Nakshatra ve Dasha dönemlerinin Vedik astrolojideki yerini, Ay konaklarıyla ilişkisini ve kişisel yorumların sınırlarını keşfedin.'],
  en:['Nakshatra and Dasha: a Vedic timing guide | Mythborn','Explore lunar mansions and Dasha periods, their role in Vedic astrology and the limits of personal timing interpretations.'],
  el:['Nakshatra και Dasha: οδηγός βεδικού χρονισμού | Mythborn','Γνωρίστε τους σεληνιακούς οίκους και τις περιόδους Dasha, τη θέση τους στη βεδική αστρολογία και τα όρια της προσωπικής ερμηνείας.'],
  es:['Nakshatra y Dasha: guía de ciclos védicos | Mythborn','Descubre las mansiones lunares y los periodos Dasha, su papel en la astrología védica y los límites de la interpretación personal.']
};
const affectedSlugs={
  acilar:['kare','karsit','kavusum','sekstil','ucgen'],
  'astroloji-sozlugu':['kare','karsit','kavusum','sekstil','ucgen','element','lunar-return','orb','solar-return','transit','ev'],
  burclar:['aslan','basak','koc','terazi'],
  gezegenler:['mars','venus','ay','gunes'],
  'tarot-kartlari':['ay','gunes'],
  'ruya-sembolleri':['cenaze','hastane','tren','ev']
};
const legalDescriptions={
  '/gizlilik':'Mythborn gizlilik politikası: hesap ve güvenlik verilerinin işlenmesi, kişisel verilerinizle ilgili haklarınız ve iletişim bilgileri.',
  '/kvkk':'Mythborn KVKK aydınlatma metni: 6698 sayılı Kanun kapsamında işlenen veriler, işleme amaçları ve kişisel veri hakları.',
  '/kullanim-kosullari':'Mythborn kullanım koşulları: içeriklerin kapsamı, kullanıcı sorumlulukları ve eğlence ile kişisel farkındalık amaçlı kullanım sınırları.',
  '/cerezler':'Mythborn çerez politikası: oturum, güvenlik ve tercih çerezlerinin kullanımı ile tarayıcınız üzerinden çerez tercihlerini yönetme.'
};
export function intentMetadata(locale,path,title,description){
  if(path==='/nakshatra-dasha'){const [title,description]=dasha[locale]||dasha.en;return {title,description};}
  if(locale==='tr'&&legalDescriptions[path])return {title,description:legalDescriptions[path]};
  const [,family,slug]=path.split('/');
  if(!slug||!affectedSlugs[family]?.includes(slug))return null;
  const label=families[family][locale];
  let name=title.replace(/\s*\|\s*Mythborn\s*$/i,'');
  if(locale==='en'&&family==='ruya-sembolleri')name=({cenaze:'Dreaming of a funeral',hastane:'Dreaming of a hospital',tren:'Dreaming of a train',ev:'Dreaming of a house'})[slug]||name;
  if(locale==='es'&&family==='ruya-sembolleri'){
    const names={cenaze:'Soñar con un funeral',hastane:'Soñar con un hospital',tren:'Soñar con un tren',ev:'Soñar con una casa'};
    name=names[slug]||name;
    if(slug==='ev')description='La casa en los sueños puede reflejar seguridad, intimidad o cambios personales. Explora su significado según el contexto de tu sueño.';
  }
  return {title:`${name} — ${label} | Mythborn`,description};
}
