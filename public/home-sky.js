(()=>{
  const card=document.querySelector('[data-home-sky]');
  if(!card)return;
  const locale=window.MYTHBORN_LOCALE||'tr';
  const prefix=locale==='tr'?'':locale==='en'?'/en':'/gr';
  const t={
    tr:{eye:'BUGÜNÜN GÖKYÜZÜ',sun:'Güneş',moon:'Ay',aspect:'Öne çıkan açı',all:'Tüm konumları gör',error:'Güncel gökyüzü verisi şu anda alınamıyor.'},
    en:{eye:'TODAY’S SKY',sun:'Sun',moon:'Moon',aspect:'Featured aspect',all:'View all positions',error:'Current sky data is temporarily unavailable.'},
    el:{eye:'Ο ΣΗΜΕΡΙΝΟΣ ΟΥΡΑΝΟΣ',sun:'Ήλιος',moon:'Σελήνη',aspect:'Κύρια όψη',all:'Προβολή όλων των θέσεων',error:'Τα τρέχοντα δεδομένα του ουρανού δεν είναι προσωρινά διαθέσιμα.'}
  }[locale];
  const maps={
    en:{'Güneş':'Sun','Ay':'Moon','Merkür':'Mercury','Venüs':'Venus','Mars':'Mars','Jüpiter':'Jupiter','Satürn':'Saturn','Uranüs':'Uranus','Neptün':'Neptune','Plüton':'Pluto','Koç':'Aries','Boğa':'Taurus','İkizler':'Gemini','Yengeç':'Cancer','Aslan':'Leo','Başak':'Virgo','Terazi':'Libra','Akrep':'Scorpio','Yay':'Sagittarius','Oğlak':'Capricorn','Kova':'Aquarius','Balık':'Pisces','Kavuşum':'conjunction','Karşıt':'opposition','Üçgen':'trine','Kare':'square','Sekstil':'sextile'},
    el:{'Güneş':'Ήλιος','Ay':'Σελήνη','Merkür':'Ερμής','Venüs':'Αφροδίτη','Mars':'Άρης','Jüpiter':'Δίας','Satürn':'Κρόνος','Uranüs':'Ουρανός','Neptün':'Ποσειδώνας','Plüton':'Πλούτωνας','Koç':'Κριός','Boğa':'Ταύρος','İkizler':'Δίδυμοι','Yengeç':'Καρκίνος','Aslan':'Λέων','Başak':'Παρθένος','Terazi':'Ζυγός','Akrep':'Σκορπιός','Yay':'Τοξότης','Oğlak':'Αιγόκερως','Kova':'Υδροχόος','Balık':'Ιχθύες','Kavuşum':'σύνοδος','Karşıt':'αντίθεση','Üçgen':'τρίγωνο','Kare':'τετράγωνο','Sekstil':'εξάγωνο'}
  };
  const term=value=>locale==='tr'?value:(maps[locale][value]||value);
  const escape=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  fetch(`/api/astrology/current-sky?locale=${locale}`).then(response=>response.json()).then(data=>{
    if(data.error)throw new Error();
    const sun=data.planets?.find(planet=>planet.name==='Güneş'),moon=data.planets?.find(planet=>planet.name==='Ay'),top=data.aspects?.[0];
    const headline=locale==='tr'?data.headline:locale==='en'?`${t.sun} in ${term(sun?.sign)} · ${t.moon} in ${term(moon?.sign)}`:`${t.sun} στον ${term(sun?.sign)} · ${t.moon} στον ${term(moon?.sign)}`;
    const summary=locale==='tr'?data.summary:locale==='en'?'A concise view of today’s calculated planetary positions and strongest major aspect.':'Συνοπτική εικόνα των σημερινών υπολογισμένων πλανητικών θέσεων και της ισχυρότερης κύριας όψης.';
    card.innerHTML=`<p class="eyebrow">${t.eye}</p><h2>${escape(headline)}</h2><p>${escape(summary)}</p>${top?`<p><strong>${t.aspect}:</strong> ${escape(term(top.from))}–${escape(term(top.to))} ${escape(term(top.type))}, orb ${escape(top.orb)}°</p>`:''}<a class="btn btn-ghost" href="${prefix}/bugunun-gokyuzu">${t.all}</a>`;
  }).catch(()=>{card.querySelector('h2').textContent=t.error;card.querySelector('p:last-child')?.remove()});
})();
