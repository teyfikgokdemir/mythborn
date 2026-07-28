(()=>{
  const locale=window.MYTHBORN_LOCALE||'tr',prefix=locale==='tr'?'':locale==='en'?'/en':'/gr';
  const names={
    tr:{empty:'Aradığınız içerik bulunamadı.',all:'Tüm sonuçlar',cards:'Tarot kartı',sign:'Burç',house:'Ev',guide:'Rehber'},
    en:{empty:'No matching content was found.',all:'All results',cards:'Tarot card',sign:'Sign',house:'House',guide:'Guide'},
    el:{empty:'Δεν βρέθηκε σχετικό περιεχόμενο.',all:'Όλα τα αποτελέσματα',cards:'Κάρτα Ταρώ',sign:'Ζώδιο',house:'Οίκος',guide:'Οδηγός'}
  }[locale];
  const tarot=['deli','buyucu','basrahibe','imparatorice','imparator','aziz','asiklar','savas-arabasi','guc','ermit','kader-carki','adalet','asilan-adam','olum','denge','seytan','kule','yildiz','ay','gunes','mahkeme','dunya'];
  const signs=['koc','boga','ikizler','yengec','aslan','basak','terazi','akrep','yay','oglak','kova','balik'];
  const guides=[['astroloji-kutuphanesi','astrology'],['advanced-astrology','astrology'],['transitler','astrology'],['retro-hareketler','astrology'],['ruya-sembolleri','dream'],['astroloji-sozlugu','astrology'],['blog','journal'],['tarot-kartlari','tarot']];
  const title=slug=>slug.split('-').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
  const items=[
    ...tarot.map(slug=>({title:title(slug),description:names.cards,category:'tarot',url:`/tarot-kartlari/${slug}`})),
    ...signs.map(slug=>({title:title(slug),description:names.sign,category:'astrology',url:`/burclar/${slug}`})),
    ...Array.from({length:12},(_,i)=>({title:`${i+1}. ${names.house}`,description:names.house,category:'astrology',url:`/evler/${i+1}-ev`})),
    ...guides.map(([slug,category])=>({title:title(slug),description:names.guide,category,url:`/${slug}`}))
  ];
  const form=document.querySelector('[data-site-search]'),output=document.querySelector('[data-search-results]');
  const render=()=>{
    const data=new FormData(form),q=String(data.get('q')||'').trim().toLocaleLowerCase(),category=String(data.get('category')||'');
    const found=items.filter(item=>(!category||item.category===category)&&(!q||`${item.title} ${item.description}`.toLocaleLowerCase().includes(q)));
    output.innerHTML=found.length?`<p>${found.length} ${names.all}</p><div class="search-result-grid">${found.map(item=>`<a href="${prefix}${item.url}"><strong>${item.title}</strong><span>${item.description}</span></a>`).join('')}</div>`:`<p class="search-empty">${names.empty}</p>`;
  };
  form?.addEventListener('submit',event=>{event.preventDefault();render()});
  form?.addEventListener('input',render);
  const query=new URLSearchParams(location.search).get('q');
  if(query){form.elements.q.value=query}
  render();
})();
