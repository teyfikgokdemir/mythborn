import {longitudePoint,normalizeLongitude,strongestAspect,visualPlanetRadii} from './live-sky-model.js';

const root=document.querySelector('[data-home-sky]');
if(root){
  const locale=window.MYTHBORN_LOCALE||'tr';
  const prefix=locale==='tr'?'':locale==='en'?'/en':locale==='es'?'/es':'/gr';
  const translations={
    tr:{
      eye:'BUGÜNÜN GÖKYÜZÜ',updated:'Gerçek veri',sun:'Güneş',moon:'Ay',
      aspect:'En güçlü açı',none:'Dar orb içinde majör açı yok',
      summary:(sun,moon,aspect)=>`Bugünün gökyüzünde Güneş ${sun}, Ay ${moon}. ${aspect}`,
      aspectSummary:(from,to,type)=>`En güçlü açı ${from} ile ${to} arasındaki ${type}.`,
      all:'Tüm konumları gör',context:'BU GÖKYÜZÜNÜ KENDİ HARİTANLA BAĞLA',chart:'Doğum haritamda gör',weekly:'Bu haftanın ritmi',retry:'Yeniden dene',fallbackDaily:'Günlük kartı aç',fallbackChart:'Doğum haritasını çıkar',
      error:'Güncel gökyüzü şu anda görüntülenemiyor. Diğer Mythborn deneyimleri kullanılabilir.'
    },
    en:{
      eye:'TODAY’S SKY',updated:'Live data',sun:'Sun',moon:'Moon',
      aspect:'Strongest aspect',none:'No major aspect within the defined orb',
      summary:(sun,moon,aspect)=>`In today’s sky, the Sun is in ${sun} and the Moon is in ${moon}. ${aspect}`,
      aspectSummary:(from,to,type)=>`The strongest aspect is the ${type} between ${from} and ${to}.`,
      all:'View all positions',context:'PLACE THIS SKY IN CONTEXT',chart:'See it in my birth chart',weekly:'Read the week ahead',retry:'Try again',fallbackDaily:'Draw today’s card',fallbackChart:'Calculate a birth chart',
      error:'The current sky cannot be displayed right now. Other Mythborn experiences remain available.'
    },
    el:{
      eye:'Ο ΣΗΜΕΡΙΝΟΣ ΟΥΡΑΝΟΣ',updated:'Ζωντανά δεδομένα',sun:'Ήλιος',moon:'Σελήνη',
      aspect:'Ισχυρότερη όψη',none:'Δεν υπάρχει κύρια όψη εντός του καθορισμένου ορίου',
      summary:(sun,moon,aspect)=>`Στον σημερινό ουρανό, ο Ήλιος βρίσκεται ${sun} και η Σελήνη ${moon}. ${aspect}`,
      aspectSummary:(from,to,type)=>`Η ισχυρότερη όψη είναι ${type} μεταξύ ${from} και ${to}.`,
      all:'Προβολή όλων των θέσεων',context:'ΒΑΛΕ ΤΟΝ ΟΥΡΑΝΟ ΣΤΟ ΠΡΟΣΩΠΙΚΟ ΣΟΥ ΠΛΑΙΣΙΟ',chart:'Δες τον στον γενέθλιο χάρτη μου',weekly:'Δες τον ρυθμό της εβδομάδας',retry:'Νέα προσπάθεια',fallbackDaily:'Τράβηξε την κάρτα της ημέρας',fallbackChart:'Υπολόγισε γενέθλιο χάρτη',
      error:'Ο σημερινός ουρανός δεν μπορεί να εμφανιστεί αυτή τη στιγμή. Οι υπόλοιπες εμπειρίες του Mythborn παραμένουν διαθέσιμες.'
    },
    es:{
      eye:'EL CIELO DE HOY',updated:'Datos en directo',sun:'Sol',moon:'Luna',
      aspect:'Aspecto más destacado',none:'No hay un aspecto mayor dentro del orbe definido',
      summary:(sun,moon,aspect)=>`En el cielo de hoy, el Sol está en ${sun} y la Luna en ${moon}. ${aspect}`,
      aspectSummary:(from,to,type)=>`El aspecto más destacado es ${type} entre ${from} y ${to}.`,
      all:'Ver todas las posiciones',context:'LLEVA ESTE CIELO A TU CONTEXTO',chart:'Verlo en mi carta natal',weekly:'Leer el ritmo de la semana',retry:'Intentarlo de nuevo',fallbackDaily:'Sacar la carta del día',fallbackChart:'Calcular una carta natal',
      error:'El cielo actual no puede mostrarse en este momento. Las demás experiencias de Mythborn siguen disponibles.'
    }
  };
  const greekSignPhrase={'Koç':'στον Κριό','Boğa':'στον Ταύρο','İkizler':'στους Διδύμους','Yengeç':'στον Καρκίνο','Aslan':'στον Λέοντα','Başak':'στην Παρθένο','Terazi':'στον Ζυγό','Akrep':'στον Σκορπιό','Yay':'στον Τοξότη','Oğlak':'στον Αιγόκερω','Kova':'στον Υδροχόο','Balık':'στους Ιχθύες'};
  const greekPlanetCase={'Güneş':'Ήλιου','Ay':'Σελήνης','Merkür':'Ερμή','Venüs':'Αφροδίτης','Mars':'Άρη','Jüpiter':'Δία','Satürn':'Κρόνου','Uranüs':'Ουρανού','Neptün':'Ποσειδώνα','Plüton':'Πλούτωνα'};
  const greekAspectPhrase={conjunction:'η σύνοδος',opposition:'η αντίθεση',square:'το τετράγωνο',trine:'το τρίγωνο',sextile:'το εξάγωνο'};
  const names={
    en:{'Güneş':'Sun','Ay':'Moon','Merkür':'Mercury','Venüs':'Venus','Mars':'Mars','Jüpiter':'Jupiter','Satürn':'Saturn','Uranüs':'Uranus','Neptün':'Neptune','Plüton':'Pluto','Koç':'Aries','Boğa':'Taurus','İkizler':'Gemini','Yengeç':'Cancer','Aslan':'Leo','Başak':'Virgo','Terazi':'Libra','Akrep':'Scorpio','Yay':'Sagittarius','Oğlak':'Capricorn','Kova':'Aquarius','Balık':'Pisces',conjunction:'conjunction',opposition:'opposition',square:'square',trine:'trine',sextile:'sextile'},
    el:{'Güneş':'Ήλιος','Ay':'Σελήνη','Merkür':'Ερμής','Venüs':'Αφροδίτη','Mars':'Άρης','Jüpiter':'Δίας','Satürn':'Κρόνος','Uranüs':'Ουρανός','Neptün':'Ποσειδώνας','Plüton':'Πλούτωνας','Koç':'Κριός','Boğa':'Ταύρος','İkizler':'Δίδυμοι','Yengeç':'Καρκίνος','Aslan':'Λέων','Başak':'Παρθένος','Terazi':'Ζυγός','Akrep':'Σκορπιός','Yay':'Τοξότης','Oğlak':'Αιγόκερως','Kova':'Υδροχόος','Balık':'Ιχθύες',conjunction:'σύνοδο',opposition:'αντίθεση',square:'τετράγωνο',trine:'τρίγωνο',sextile:'εξάγωνο'},
    es:{'Güneş':'Sol','Ay':'Luna','Merkür':'Mercurio','Venüs':'Venus','Mars':'Marte','Jüpiter':'Júpiter','Satürn':'Saturno','Uranüs':'Urano','Neptün':'Neptuno','Plüton':'Plutón','Koç':'Aries','Boğa':'Tauro','İkizler':'Géminis','Yengeç':'Cáncer','Aslan':'Leo','Başak':'Virgo','Terazi':'Libra','Akrep':'Escorpio','Yay':'Sagitario','Oğlak':'Capricornio','Kova':'Acuario','Balık':'Piscis',conjunction:'conjunción',opposition:'oposición',square:'cuadratura',trine:'trígono',sextile:'sextil'}
  };
  const symbols={'Güneş':'☉','Ay':'☽','Merkür':'☿','Venüs':'♀','Mars':'♂','Jüpiter':'♃','Satürn':'♄','Uranüs':'♅','Neptün':'♆','Plüton':'♇'};
  const signs=['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
  const t=translations[locale];
  const term=value=>locale==='tr'?value:(names[locale][value]||value);
  const escape=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const sectorPath=index=>{
    const outerStart=longitudePoint(index*30,142),outerEnd=longitudePoint((index+1)*30,142);
    const innerEnd=longitudePoint((index+1)*30,119),innerStart=longitudePoint(index*30,119);
    return `M ${outerStart.x} ${outerStart.y} A 142 142 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A 119 119 0 0 0 ${innerStart.x} ${innerStart.y} Z`;
  };
  const render=data=>{
    const planets=(data.planets||[]).filter(planet=>Number.isFinite(Number(planet.longitude)));
    if(planets.length<2)throw new Error('invalid sky data');
    const aspect=strongestAspect(planets),radii=visualPlanetRadii(planets);
    const sun=planets.find(planet=>planet.name==='Güneş'),moon=planets.find(planet=>planet.name==='Ay');
    if(!sun||!moon)throw new Error('missing luminaries');
    const date=new Intl.DateTimeFormat(locale==='tr'?'tr-TR':locale==='en'?'en-GB':locale==='es'?'es-ES':'el-GR',{dateStyle:'medium',timeStyle:'short',timeZone:'Europe/Istanbul'}).format(new Date(data.calculatedAt));
    const aspectText=aspect?t.aspectSummary(
      locale==='el'?(greekPlanetCase[aspect.from.name]||term(aspect.from.name)):term(aspect.from.name),
      locale==='el'?(greekPlanetCase[aspect.to.name]||term(aspect.to.name)):term(aspect.to.name),
      locale==='el'?greekAspectPhrase[aspect.key]:term(aspect.key)
    ):t.none;
    const accessible=t.summary(
      locale==='el'?(greekSignPhrase[sun.sign]||term(sun.sign)):term(sun.sign),
      locale==='el'?(greekSignPhrase[moon.sign]||term(moon.sign)):term(moon.sign),
      aspectText
    );
    const aspectLine=aspect?(()=>{
      const from=longitudePoint(aspect.from.longitude,78),to=longitudePoint(aspect.to.longitude,78);
      return `<line class="sky-aspect-line sky-aspect-${aspect.key}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"></line>`;
    })():'';
    const sectors=signs.map((symbol,index)=>{
      const label=longitudePoint(index*30+15,130);
      return `<path data-zodiac-sector="${index}" d="${sectorPath(index)}"></path><text x="${label.x}" y="${label.y}">${symbol}</text>`;
    }).join('');
    const points=planets.map((planet,index)=>{
      const point=longitudePoint(normalizeLongitude(planet.longitude),radii[index]);
      return `<g class="sky-planet"><circle cx="${point.x}" cy="${point.y}" r="11"></circle><text x="${point.x}" y="${point.y}">${symbols[planet.name]||'•'}</text></g>`;
    }).join('');
    root.innerHTML=`<div class="live-sky-heading"><div><p class="eyebrow">${t.eye}</p><p class="live-sky-time">${escape(t.updated)} · <time datetime="${escape(data.calculatedAt)}">${escape(date)}</time></p></div><a href="${prefix}/bugunun-gokyuzu">${t.all} →</a></div><div class="live-sky-frame"><svg class="live-sky-wheel" viewBox="0 0 320 320" width="320" height="320" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><circle class="sky-orbit" cx="160" cy="160" r="142"></circle><g class="sky-sectors">${sectors}</g><circle class="sky-inner" cx="160" cy="160" r="111"></circle>${aspectLine}<g class="sky-planets">${points}</g><circle class="sky-core" cx="160" cy="160" r="54"></circle><text class="sky-core-sun" x="160" y="153">${symbols['Güneş']}</text><text class="sky-core-date" x="160" y="177">${escape(new Intl.DateTimeFormat(locale==='tr'?'tr-TR':locale==='en'?'en-GB':locale==='es'?'es-ES':'el-GR',{day:'2-digit',month:'short',timeZone:'Europe/Istanbul'}).format(new Date(data.calculatedAt)))}</text></svg></div><div class="live-sky-copy"><h2>${escape(term(sun.sign))} · ${escape(term(moon.sign))}</h2><p>${escape(accessible)}</p><p class="live-sky-aspect"><strong>${t.aspect}:</strong> ${escape(aspectText)}${aspect?` · orb ${aspect.exactOrb.toFixed(2)}°`:''}</p></div><div class="sky-context"><p>${t.context}</p><nav aria-label="${t.context}"><a href="${prefix}/astroloji">${t.chart}<span aria-hidden="true">→</span></a><a href="${prefix}/haftalik-burc">${t.weekly}<span aria-hidden="true">→</span></a></nav></div>`;
    root.setAttribute('aria-busy','false');
  };
  const showError=()=>{
    root.innerHTML=`<div class="live-sky-error" role="status"><p class="eyebrow">${t.eye}</p><h2>${t.error}</h2><div class="actions"><button class="btn btn-ghost" type="button" data-sky-retry>${t.retry}</button><a class="btn btn-secondary" href="${prefix}/gunluk-kart">${t.fallbackDaily}</a><a class="btn btn-tertiary" href="${prefix}/astroloji">${t.fallbackChart}</a></div></div>`;
    root.setAttribute('aria-busy','false');
    root.querySelector('[data-sky-retry]')?.addEventListener('click',()=>location.reload(),{once:true});
  };
  fetch('/api/astrology/current-sky',{headers:{accept:'application/json'}})
    .then(async response=>{if(!response.ok)throw new Error();return response.json()})
    .then(data=>{if(data.error)throw new Error();render(data)})
    .catch(showError);
}
