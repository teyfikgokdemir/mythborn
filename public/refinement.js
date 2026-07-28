(()=>{
  const locale=window.MYTHBORN_LOCALE||((location.pathname==='/en'||location.pathname.startsWith('/en/'))?'en':(location.pathname==='/gr'||location.pathname.startsWith('/gr/'))?'el':'tr');
  document.querySelectorAll('h1').forEach(title=>{if(title.textContent.trim().length>46)title.classList.add('is-long-title')});

  document.querySelectorAll('[data-tarot-filter]').forEach(button=>button.addEventListener('click',()=>{
    const group=button.dataset.tarotFilter;
    document.querySelectorAll('[data-tarot-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    document.querySelectorAll('[data-tarot-group]').forEach(card=>{card.hidden=group!=='all'&&card.dataset.tarotGroup!==group});
    document.querySelectorAll('.tarot-section').forEach(section=>{section.hidden=![...section.querySelectorAll('[data-tarot-group]')].some(card=>!card.hidden)});
  }));

  document.querySelectorAll('[data-password-reset]').forEach(form=>form.addEventListener('submit',async event=>{
    event.preventDefault();
    const message=form.querySelector('[data-reset-message]'),button=form.querySelector('button');
    button.disabled=true;
    try{
      await fetch('/api/auth/request-password-reset',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:new FormData(form).get('email')})});
      message.textContent=message.dataset.success;
    }catch{
      message.textContent=locale==='tr'?'İstek şu anda gönderilemedi. Lütfen tekrar dene.':locale==='en'?'The request could not be sent. Please try again.':'Το αίτημα δεν στάλθηκε. Δοκίμασε ξανά.';
    }finally{button.disabled=false}
  }));

  const sky=document.querySelector('[data-current-sky]');
  if(sky&&/hesap|calculat|υπολογ/i.test(sky.textContent)){
    const status=locale==='tr'?'Güncel gezegen konumları hesaplanıyor…':locale==='en'?'Calculating current planetary positions…':'Υπολογίζονται οι τρέχουσες πλανητικές θέσεις…';
    sky.innerHTML=`<div class="sky-skeleton" role="status"><span></span><span></span><span></span><span></span><p>${status}</p></div>`;
    setTimeout(()=>{
      if(!sky.querySelector('.sky-skeleton'))return;
      const label=locale==='tr'?'Hesaplama uzun sürüyor. Yeniden dene':locale==='en'?'Calculation is taking longer. Try again':'Ο υπολογισμός καθυστερεί. Δοκίμασε ξανά';
      sky.querySelector('p').innerHTML=`${label} <button class="btn btn-ghost" type="button" data-sky-retry>${locale==='tr'?'Yeniden dene':locale==='en'?'Retry':'Επανάληψη'}</button>`;
      sky.querySelector('[data-sky-retry]').addEventListener('click',()=>location.reload());
    },8000);
  }

  document.querySelectorAll('.consent-banner,[data-consent-banner]').forEach(node=>node.remove());
  const key='mythborn-consent-v2';
  const copy={
    tr:{eye:'GİZLİLİK TERCİHLERİ',title:'Kontrol sende.',body:'Zorunlu çerezler güvenli oturum ve tercihlerin için gereklidir. İsteğe bağlı analitik yalnız izninle etkinleşir.',essential:'Zorunlu çerezler · her zaman açık',analytics:'Anonim kullanım analitiğine izin ver',accept:'Tümünü kabul et',reject:'Yalnız zorunlu',save:'Tercihi kaydet'},
    en:{eye:'PRIVACY PREFERENCES',title:'You are in control.',body:'Essential cookies support secure sessions and saved preferences. Optional analytics is enabled only with your permission.',essential:'Essential cookies · always on',analytics:'Allow anonymous usage analytics',accept:'Accept all',reject:'Essential only',save:'Save preference'},
    el:{eye:'ΠΡΟΤΙΜΗΣΕΙΣ ΑΠΟΡΡΗΤΟΥ',title:'Εσύ έχεις τον έλεγχο.',body:'Τα απαραίτητα cookies υποστηρίζουν ασφαλείς συνεδρίες και αποθηκευμένες προτιμήσεις. Τα προαιρετικά analytics ενεργοποιούνται μόνο με άδεια.',essential:'Απαραίτητα cookies · πάντα ενεργά',analytics:'Να επιτρέπονται ανώνυμα analytics χρήσης',accept:'Αποδοχή όλων',reject:'Μόνο απαραίτητα',save:'Αποθήκευση προτίμησης'}
  }[locale];
  const dialog=document.createElement('div');
  dialog.className='consent-dialog';
  dialog.hidden=true;
  dialog.innerHTML=`<section class="consent-panel" role="dialog" aria-modal="true" aria-labelledby="consent-title"><p class="eyebrow">${copy.eye}</p><h2 id="consent-title">${copy.title}</h2><p>${copy.body}</p><p><strong>${copy.essential}</strong></p><label><span>${copy.analytics}</span><input type="checkbox" data-consent-analytics></label><div class="consent-actions"><button class="btn btn-primary" type="button" data-consent-accept>${copy.accept}</button><button class="btn btn-ghost" type="button" data-consent-reject>${copy.reject}</button><button class="btn btn-secondary" type="button" data-consent-save>${copy.save}</button></div></section>`;
  document.body.appendChild(dialog);
  const read=()=>{try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}};
  const persist=analytics=>{
    const value={essential:true,analytics,updatedAt:new Date().toISOString()};
    try{localStorage.setItem(key,JSON.stringify(value))}catch{}
    document.cookie=`mythborn_consent=${analytics?'all':'essential'}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
    dialog.hidden=true;
    window.dispatchEvent(new CustomEvent('mythborn:consent',{detail:value}));
  };
  const open=()=>{
    dialog.querySelector('[data-consent-analytics]').checked=Boolean(read()?.analytics);
    dialog.hidden=false;
    requestAnimationFrame(()=>dialog.querySelector('button').focus());
  };
  dialog.querySelector('[data-consent-accept]').addEventListener('click',()=>persist(true));
  dialog.querySelector('[data-consent-reject]').addEventListener('click',()=>persist(false));
  dialog.querySelector('[data-consent-save]').addEventListener('click',()=>persist(dialog.querySelector('[data-consent-analytics]').checked));
  document.querySelectorAll('[data-consent-manage]').forEach(button=>button.addEventListener('click',open));
  if(!read())open();
})();
