(()=>{
  document.querySelectorAll('[data-cookie-consent],.cookie-consent,#cookie-consent,.cookie-banner').forEach(node=>node.remove());
  const locale=location.pathname==='/en'||location.pathname.startsWith('/en/')?'en':location.pathname==='/gr'||location.pathname.startsWith('/gr/')?'el':'tr';
  const prefix=locale==='tr'?'':locale==='en'?'/en':'/gr';
  const text={
    tr:{label:'Çerez tercihleri',title:'Çerezler',copy:'Zorunlu çerezleri oturum ve güvenlik için kullanıyoruz.',details:'Detaylar',reject:'Reddet',accept:'Kabul et'},
    en:{label:'Cookie preferences',title:'Cookies',copy:'We use essential cookies for sessions and security.',details:'Details',reject:'Reject',accept:'Accept'},
    el:{label:'Προτιμήσεις cookies',title:'Cookies',copy:'Χρησιμοποιούμε απαραίτητα cookies για σύνδεση και ασφάλεια.',details:'Λεπτομέρειες',reject:'Απόρριψη',accept:'Αποδοχή'}
  }[locale];
  const consentKey='mythborn-consent-v2';
  let consent=null;
  try{consent=JSON.parse(localStorage.getItem(consentKey)||'null')}catch{}
  if(consent)return;
  const box=document.createElement('aside');
  box.className='cookie-banner';
  box.setAttribute('role','dialog');
  box.setAttribute('aria-label',text.label);
  box.innerHTML=`<p><strong>${text.title}</strong> ${text.copy} <a href="${prefix}/cerezler">${text.details}</a></p><div><button type="button" data-reject>${text.reject}</button><button type="button" data-accept>${text.accept}</button></div>`;
  document.body.appendChild(box);
  const save=analytics=>{
    try{localStorage.setItem(consentKey,JSON.stringify({necessary:true,analytics,updatedAt:new Date().toISOString()}))}catch{}
    box.remove();
  };
  box.querySelector('[data-reject]').addEventListener('click',()=>save(false));
  box.querySelector('[data-accept]').addEventListener('click',()=>save(true));
})();
