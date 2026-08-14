(()=>{
  const locale=window.MYTHBORN_LOCALE;
  if(!['en','el','es'].includes(locale))return;
  const lang={en:'en-GB',el:'el-GR',es:'es-ES'}[locale];
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const terms={
    en:{'Güneş':'Sun','Ay':'Moon','Merkür':'Mercury','Venüs':'Venus','Mars':'Mars','Jüpiter':'Jupiter','Satürn':'Saturn','Uranüs':'Uranus','Neptün':'Neptune','Plüton':'Pluto','Koç':'Aries','Boğa':'Taurus','İkizler':'Gemini','Yengeç':'Cancer','Aslan':'Leo','Başak':'Virgo','Terazi':'Libra','Akrep':'Scorpio','Yay':'Sagittarius','Oğlak':'Capricorn','Kova':'Aquarius','Balık':'Pisces','Kavuşum':'conjunction','Sekstil':'sextile','Kare':'square','Üçgen':'trine','Karşıt':'opposition','Ateş':'Fire','Toprak':'Earth','Hava':'Air','Su':'Water'},
    el:{'Güneş':'Ήλιος','Ay':'Σελήνη','Merkür':'Ερμής','Venüs':'Αφροδίτη','Mars':'Άρης','Jüpiter':'Δίας','Satürn':'Κρόνος','Uranüs':'Ουρανός','Neptün':'Ποσειδώνας','Plüton':'Πλούτωνας','Koç':'Κριός','Boğa':'Ταύρος','İkizler':'Δίδυμοι','Yengeç':'Καρκίνος','Aslan':'Λέων','Başak':'Παρθένος','Terazi':'Ζυγός','Akrep':'Σκορπιός','Yay':'Τοξότης','Oğlak':'Αιγόκερως','Kova':'Υδροχόος','Balık':'Ιχθύες','Kavuşum':'σύνοδος','Sekstil':'εξάγωνο','Kare':'τετράγωνο','Üçgen':'τρίγωνο','Karşıt':'αντίθεση','Ateş':'Φωτιά','Toprak':'Γη','Hava':'Αέρας','Su':'Νερό'},
    es:{'Güneş':'Sol','Ay':'Luna','Merkür':'Mercurio','Venüs':'Venus','Mars':'Marte','Jüpiter':'Júpiter','Satürn':'Saturno','Uranüs':'Urano','Neptün':'Neptuno','Plüton':'Plutón','Koç':'Aries','Boğa':'Tauro','İkizler':'Géminis','Yengeç':'Cáncer','Aslan':'Leo','Başak':'Virgo','Terazi':'Libra','Akrep':'Escorpio','Yay':'Sagitario','Oğlak':'Capricornio','Kova':'Acuario','Balık':'Piscis','Kavuşum':'conjunción','Sekstil':'sextil','Kare':'cuadratura','Üçgen':'trígono','Karşıt':'oposición','Ateş':'Fuego','Toprak':'Tierra','Hava':'Aire','Su':'Agua'}
  }[locale];
  const term=value=>terms[value]||value;
  const copy={
    en:{
      sky:['PLANETARY POSITIONS','MAJOR ASPECTS','dominant element','No major aspect is exact within today’s narrow orb.','Calculated with Astronomy Engine from real planetary longitudes.'],
      moon:['TODAY’S MOON','Approximate illumination','The current phase supports noticing rhythm before forcing a result.','Calculated from the astronomical synodic cycle; it is independent of a personal birth chart.'],
      phases:[['New Moon','intention and beginnings'],['Waxing Crescent','taking the first step'],['First Quarter','decision and movement'],['Waxing Gibbous','refinement and preparation'],['Full Moon','visibility and completion'],['Waning Gibbous','release and simplification'],['Last Quarter','review and redirection'],['Balsamic Moon','rest and closure']],
      numbers:['NUMEROLOGY PROFILE','Life Path','Expression Number'],
      dream:['SYMBOLIC DREAM MAP','Central emotional theme','The dream is read through its emotional tone and your current waking-life context. It is not a prediction or psychological diagnosis.','Reflection prompt','Where has this feeling appeared most strongly in your waking life this week?'],
      compatibility:['COMPATIBILITY PATTERN','Shared element creates an instinctive rhythm.','Compatible elements can support exchange while still requiring clear communication.','Different elements invite learning and conscious adjustment.','This is a symbolic comparison, not a verdict on a relationship.'],
      syn:['Calculating two real birth charts…','SYNASTRY PROFILE','Strongest planetary connections','significant aspects','Real planetary longitudes are calculated with Astronomy Engine. The number of aspects is not a relationship score and does not determine relationship quality or future.','The charts could not be calculated.']
    },
    el:{
      sky:['ΠΛΑΝΗΤΙΚΕΣ ΘΕΣΕΙΣ','ΚΥΡΙΕΣ ΟΨΕΙΣ','κυρίαρχο στοιχείο','Δεν υπάρχει κύρια όψη με πολύ στενή ανοχή σήμερα.','Υπολογισμός με Astronomy Engine από πραγματικά πλανητικά μήκη.'],
      moon:['Η ΣΗΜΕΡΙΝΗ ΣΕΛΗΝΗ','Κατά προσέγγιση φωτισμός','Η παρούσα φάση υποστηρίζει την παρατήρηση του ρυθμού πριν πιέσεις ένα αποτέλεσμα.','Υπολογίζεται από τον αστρονομικό συνοδικό κύκλο, ανεξάρτητα από προσωπικό γενέθλιο χάρτη.'],
      phases:[['Νέα Σελήνη','πρόθεση και αρχές'],['Αύξουσα Ημισέληνος','το πρώτο βήμα'],['Πρώτο Τέταρτο','απόφαση και κίνηση'],['Αύξουσα Αμφίκυρτη','βελτίωση και προετοιμασία'],['Πανσέληνος','ορατότητα και ολοκλήρωση'],['Φθίνουσα Αμφίκυρτη','απελευθέρωση και απλοποίηση'],['Τελευταίο Τέταρτο','επανεξέταση και αλλαγή πορείας'],['Βαλσαμική Σελήνη','ανάπαυση και κλείσιμο']],
      numbers:['ΑΡΙΘΜΟΛΟΓΙΚΟ ΠΡΟΦΙΛ','Διαδρομή Ζωής','Αριθμός Έκφρασης'],
      dream:['ΣΥΜΒΟΛΙΚΟΣ ΧΑΡΤΗΣ ΟΝΕΙΡΟΥ','Κεντρικό συναισθηματικό θέμα','Το όνειρο διαβάζεται μέσα από το συναίσθημα και το πλαίσιο της καθημερινής ζωής. Δεν είναι πρόβλεψη ή ψυχολογική διάγνωση.','Ερώτηση στοχασμού','Πού εμφανίστηκε εντονότερα αυτό το συναίσθημα στην καθημερινότητά σου αυτή την εβδομάδα;'],
      compatibility:['ΜΟΤΙΒΟ ΣΥΜΒΑΤΟΤΗΤΑΣ','Το κοινό στοιχείο δημιουργεί έναν φυσικό ρυθμό.','Τα συμβατά στοιχεία υποστηρίζουν την ανταλλαγή, με ανάγκη για καθαρή επικοινωνία.','Τα διαφορετικά στοιχεία προσκαλούν μάθηση και συνειδητή προσαρμογή.','Πρόκειται για συμβολική σύγκριση, όχι για ετυμηγορία μιας σχέσης.'],
      syn:['Υπολογίζονται δύο πραγματικοί γενέθλιοι χάρτες…','ΠΡΟΦΙΛ ΣΥΝΑΣΤΡΙΑΣ','Ισχυρότερες πλανητικές συνδέσεις','σημαντικές όψεις','Τα πλανητικά μήκη υπολογίζονται με Astronomy Engine. Ο αριθμός όψεων δεν είναι βαθμολογία σχέσης και δεν καθορίζει την ποιότητα ή το μέλλον της σχέσης.','Δεν ήταν δυνατός ο υπολογισμός των χαρτών.']
    },
    es:{
      sky:['POSICIONES PLANETARIAS','ASPECTOS PRINCIPALES','elemento dominante','No hay un aspecto mayor exacto dentro del orbe estrecho de hoy.','Calculado con Astronomy Engine a partir de longitudes planetarias reales.'],
      moon:['LA LUNA DE HOY','Iluminación aproximada','La fase actual invita a observar el ritmo antes de forzar un resultado.','Se calcula a partir del ciclo sinódico astronómico y es independiente de una carta natal personal.'],
      phases:[['Luna nueva','intención y comienzos'],['Luna creciente','dar el primer paso'],['Cuarto creciente','decisión y movimiento'],['Gibosa creciente','refinamiento y preparación'],['Luna llena','visibilidad y culminación'],['Gibosa menguante','liberación y simplificación'],['Cuarto menguante','revisión y redirección'],['Luna balsámica','descanso y cierre']],
      numbers:['PERFIL NUMEROLÓGICO','Camino de vida','Número de expresión'],
      dream:['MAPA SIMBÓLICO DEL SUEÑO','Tema emocional central','El sueño se interpreta a través de su tono emocional y de tu contexto actual de vida. No es una predicción ni un diagnóstico psicológico.','Pregunta para reflexionar','¿Dónde ha aparecido con más fuerza esta sensación en tu vida cotidiana esta semana?'],
      compatibility:['PATRÓN DE COMPATIBILIDAD','Un elemento compartido crea un ritmo instintivo.','Los elementos compatibles pueden favorecer el intercambio, aunque siguen requiriendo comunicación clara.','Los elementos distintos invitan al aprendizaje y a un ajuste consciente.','Esta es una comparación simbólica, no un veredicto sobre una relación.'],
      syn:['Calculando dos cartas natales reales…','PERFIL DE SINASTRÍA','Conexiones planetarias más destacadas','aspectos significativos','Las longitudes planetarias se calculan con Astronomy Engine. La cantidad de aspectos no es una puntuación de relación ni determina su calidad o futuro.','No se pudieron calcular las cartas.']
    }
  }[locale];
  const style=document.createElement('style');
  style.textContent='.sky-columns{display:grid;grid-template-columns:1.3fr .7fr;gap:18px;margin-top:28px}.sky-columns>section,.synastry-box{padding:20px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:rgba(255,255,255,.025)}.sky-planets{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.sky-planets article,.sky-aspects article{display:grid;gap:5px;padding:14px;border:1px solid rgba(255,255,255,.09);border-radius:14px}.sky-aspects,.synastry-aspects{display:grid;gap:10px}.synastry-evidence{display:inline-grid;margin:16px 0;padding:16px 20px;border:1px solid rgba(232,200,131,.35);border-radius:16px;place-items:center}.synastry-evidence strong{font:400 38px Georgia,serif;color:#e8c883}@media(max-width:760px){.sky-columns,.sky-planets{grid-template-columns:1fr}}';
  document.head.appendChild(style);
  const sky=document.querySelector('[data-current-sky]');
  if(sky)fetch(`/api/astrology/current-sky?locale=${locale}`).then(response=>response.json()).then(data=>{
    const date=new Intl.DateTimeFormat(lang,{dateStyle:'long',timeStyle:'short'}).format(new Date(data.calculatedAt));
    sky.innerHTML=`<p class="eyebrow">${date}</p><h2>${term(data.planets.find(planet=>planet.name==='Güneş')?.sign)} · ${term(data.planets.find(planet=>planet.name==='Ay')?.sign)}</h2><div class="result-metric"><strong>${term(data.dominantElement)}</strong><span>${copy.sky[2]}</span></div><div class="sky-columns"><section><h3>${copy.sky[0]}</h3><div class="sky-planets">${data.planets.map(planet=>`<article><small>${term(planet.name)}</small><strong>${term(planet.sign)}</strong><span>${Number(planet.degree).toFixed(2)}° · ${term(planet.element)}</span></article>`).join('')}</div></section><section><h3>${copy.sky[1]}</h3><div class="sky-aspects">${data.aspects.length?data.aspects.map(aspect=>`<article><strong>${term(aspect.from)} ${term(aspect.type)} ${term(aspect.to)}</strong><span>orb ${aspect.orb}°</span></article>`).join(''):`<p>${copy.sky[3]}</p>`}</div></section></div><p class="provider-note">${copy.sky[4]}</p>`;
  }).catch(()=>{});
  const moon=document.querySelector('[data-moon-calendar]');
  if(moon){
    const cycle=29.530588853,age=((((Date.now()-Date.UTC(2000,0,6,18,14))/86400000)%cycle)+cycle)%cycle,index=Math.round(age/(cycle/8))%8,phase=copy.phases[index],illum=Math.round((1-Math.cos(2*Math.PI*age/cycle))/2*100);
    moon.innerHTML=`<p class="eyebrow">${copy.moon[0]}</p><h2>${phase[0]}</h2><div class="result-metric"><strong>${illum}%</strong><span>${copy.moon[1]}</span></div><p>${phase[1]}. ${copy.moon[2]}</p><p class="provider-note">${copy.moon[3]}</p>`;
  }
  const reduce=number=>{while(number>9&&![11,22,33].includes(number))number=String(number).split('').reduce((sum,value)=>sum+Number(value),0);return number};
  const numberForm=document.querySelector('[data-numerology-form]');
  numberForm?.addEventListener('submit',event=>{
    event.preventDefault();event.stopImmediatePropagation();
    const form=new FormData(numberForm),life=reduce(String(form.get('birthDate')).replace(/\D/g,'').split('').reduce((sum,value)=>sum+Number(value),0)),alphabet={en:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',el:'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',es:'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'}[locale],name=String(form.get('name')).toLocaleUpperCase(lang),expression=reduce([...name].reduce((sum,char)=>{const index=alphabet.indexOf(char);return sum+(index<0?0:index%9+1)},0)),root=document.querySelector('[data-numerology-result]');
    root.hidden=false;root.innerHTML=`<p class="eyebrow">${copy.numbers[0]}</p><div class="result-grid"><article><strong>${life}</strong><h3>${copy.numbers[1]}</h3></article><article><strong>${expression}</strong><h3>${copy.numbers[2]}</h3></article></div>`;
  },{capture:true});
  const dreamForm=document.querySelector('[data-dream-form]');
  dreamForm?.addEventListener('submit',event=>{
    event.preventDefault();event.stopImmediatePropagation();
    const form=new FormData(dreamForm),emotion=esc(form.get('emotion')),context=esc(form.get('wakingContext')),root=document.querySelector('[data-dream-result]');
    root.hidden=false;root.innerHTML=`<p class="eyebrow">${copy.dream[0]}</p><h2>${copy.dream[1]} · ${emotion}</h2><p>${copy.dream[2]}</p>${context?`<p><strong>${copy.dream[3]}:</strong> ${context}</p>`:''}<p>${copy.dream[4]}</p>`;
  },{capture:true});
  const signNames={en:['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],el:['Κριός','Ταύρος','Δίδυμοι','Καρκίνος','Λέων','Παρθένος','Ζυγός','Σκορπιός','Τοξότης','Αιγόκερως','Υδροχόος','Ιχθύες'],es:['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis']}[locale],elements=[0,1,2,3,0,1,2,3,0,1,2,3];
  const compatibility=document.querySelector('[data-compatibility-form]');
  if(compatibility){
    compatibility.querySelectorAll('select').forEach(select=>select.innerHTML=signNames.map((name,index)=>`<option value="${index}">${name}</option>`).join(''));
    compatibility.addEventListener('submit',event=>{
      event.preventDefault();event.stopImmediatePropagation();
      const first=Number(compatibility.elements.first.value),second=Number(compatibility.elements.second.value),distance=Math.abs(elements[first]-elements[second]),summary=distance===0?copy.compatibility[1]:distance===1||distance===3?copy.compatibility[2]:copy.compatibility[3],root=document.querySelector('[data-compatibility-result]');
      root.hidden=false;root.innerHTML=`<p class="eyebrow">${copy.compatibility[0]}</p><h2>${signNames[first]} × ${signNames[second]}</h2><p>${summary}</p><p class="provider-note">${copy.compatibility[4]}</p>`;
    },{capture:true});
  }
  const synastry=document.querySelector('[data-synastry-form]');
  synastry?.addEventListener('submit',async event=>{
    event.preventDefault();event.stopImmediatePropagation();
    const payload=name=>({birthDate:synastry.elements[`${name}BirthDate`].value,birthTime:synastry.elements[`${name}BirthTime`].value,birthPlace:synastry.elements[`${name}BirthPlace`].value.trim(),timeUnknown:synastry.elements[`${name}TimeUnknown`].checked,locale}),message=document.querySelector('[data-synastry-message]'),root=document.querySelector('[data-synastry-result]');
    message.textContent=copy.syn[0];
    try{
      const response=await fetch('/api/astrology/synastry',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({first:payload('first'),second:payload('second')})}),data=await response.json();
      if(!response.ok)throw new Error();
      root.hidden=false;root.innerHTML=`<p class="eyebrow">${copy.syn[1]}</p><div class="synastry-evidence"><strong>${data.counts.total}</strong><span>${copy.syn[3]}</span></div><h2>${copy.syn[2]}</h2><div class="synastry-aspects">${data.aspects.slice(0,8).map(aspect=>`<article class="synastry-box"><strong>${term(aspect.first)} — ${term(aspect.second)}</strong><p>${term(aspect.type)} · orb ${aspect.orb}°</p></article>`).join('')}</div><p class="provider-note">${copy.syn[4]}</p>`;
      message.textContent='';
    }catch{message.textContent=copy.syn[5]}
  },{capture:true});
})();
