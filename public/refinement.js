(()=>{
  const locale=window.MYTHBORN_LOCALE||((location.pathname==='/en'||location.pathname.startsWith('/en/'))?'en':(location.pathname==='/gr'||location.pathname.startsWith('/gr/'))?'el':'tr');
  document.querySelectorAll('h1').forEach(title=>{if(title.textContent.trim().length>46)title.classList.add('is-long-title')});

  document.querySelectorAll('[data-tarot-filter]').forEach(button=>button.addEventListener('click',()=>{
    const group=button.dataset.tarotFilter;
    document.querySelectorAll('[data-tarot-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    document.querySelectorAll('[data-tarot-group]').forEach(card=>{card.hidden=group!=='all'&&card.dataset.tarotGroup!==group;card.style.display=card.hidden?'none':''});
    document.querySelectorAll('.tarot-section').forEach(section=>{section.hidden=![...section.querySelectorAll('[data-tarot-group]')].some(card=>!card.hidden);section.style.display=section.hidden?'none':''});
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
  document.querySelectorAll('[data-password-toggle]').forEach(button=>button.addEventListener('click',()=>{
    const input=button.closest('.password-field')?.querySelector('input');
    if(!input)return;
    const reveal=input.type==='password';
    input.type=reveal?'text':'password';
    button.setAttribute('aria-pressed',String(reveal));
    button.setAttribute('aria-label',locale==='tr'?(reveal?'Şifreyi gizle':'Şifreyi göster'):locale==='en'?(reveal?'Hide password':'Show password'):(reveal?'Απόκρυψη κωδικού':'Εμφάνιση κωδικού'));
    input.focus({preventScroll:true});
  }));

  document.querySelectorAll('[data-library-search]').forEach(input=>input.addEventListener('input',()=>{
    const query=input.value.trim().toLocaleLowerCase(document.documentElement.lang);
    document.querySelectorAll('[data-library-item]').forEach(card=>{card.hidden=query&&!card.textContent.toLocaleLowerCase(document.documentElement.lang).includes(query)});
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

  document.querySelectorAll('.consent-banner,[data-consent-banner],.cookie-banner').forEach(node=>node.remove());
  const key='mythborn-consent-v2';
  const GA4_ID='G-RW928SX37X';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  let analyticsLoaded=false;
  const setAnalyticsConsent=granted=>{
    window[`ga-disable-${GA4_ID}`]=!granted;
    window.gtag('consent','update',{analytics_storage:granted?'granted':'denied'});
  };
  const loadAnalytics=()=>{
    if(analyticsLoaded||document.querySelector('script[data-mythborn-ga4]'))return;
    analyticsLoaded=true;
    setAnalyticsConsent(true);
    const script=document.createElement('script');
    script.async=true;
    script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
    script.dataset.mythbornGa4='true';
    document.head.appendChild(script);
    window.gtag('js',new Date());
    window.gtag('config',GA4_ID,{send_page_view:true,anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});
  };
  const copy={
    tr:{eye:'GİZLİLİK TERCİHLERİ',title:'Kontrol sende.',body:'Zorunlu çerezler güvenli oturum ve tercihlerin için gereklidir. İsteğe bağlı analitik yalnız izninle etkinleşir.',essential:'Zorunlu çerezler · her zaman açık',analytics:'Anonim kullanım analitiğine izin ver',accept:'Tümünü kabul et',reject:'Yalnız zorunlu',save:'Tercihi kaydet'},
    en:{eye:'PRIVACY PREFERENCES',title:'You are in control.',body:'Essential cookies support secure sessions and saved preferences. Optional analytics is enabled only with your permission.',essential:'Essential cookies · always on',analytics:'Allow anonymous usage analytics',accept:'Accept all',reject:'Essential only',save:'Save preference'},
    el:{eye:'ΠΡΟΤΙΜΗΣΕΙΣ ΑΠΟΡΡΗΤΟΥ',title:'Εσύ έχεις τον έλεγχο.',body:'Τα απαραίτητα cookies υποστηρίζουν ασφαλείς συνεδρίες και αποθηκευμένες προτιμήσεις. Τα προαιρετικά analytics ενεργοποιούνται μόνο με άδεια.',essential:'Απαραίτητα cookies · πάντα ενεργά',analytics:'Να επιτρέπονται ανώνυμα analytics χρήσης',accept:'Αποδοχή όλων',reject:'Μόνο απαραίτητα',save:'Αποθήκευση προτίμησης'}
  }[locale];
  const dialog=document.createElement('div');
  dialog.className='consent-dialog';
  dialog.hidden=true;
  dialog.setAttribute('role','dialog');
  dialog.setAttribute('aria-modal','true');
  dialog.setAttribute('aria-labelledby','consent-title');
  dialog.setAttribute('aria-describedby','consent-description');
  dialog.innerHTML=`<div class="consent-panel"><p class="eyebrow">${copy.eye}</p><h2 id="consent-title">${copy.title}</h2><p id="consent-description">${copy.body}</p><p><strong>${copy.essential}</strong></p><label><span>${copy.analytics}</span><input type="checkbox" data-consent-analytics></label><div class="consent-actions"><button class="btn btn-primary" type="button" data-consent-accept>${copy.accept}</button><button class="btn btn-ghost" type="button" data-consent-reject>${copy.reject}</button><button class="btn btn-secondary" type="button" data-consent-save>${copy.save}</button></div></div>`;
  document.body.appendChild(dialog);
  const read=()=>{
    try{const stored=JSON.parse(localStorage.getItem(key)||'null');if(stored)return stored}catch{}
    const cookie=document.cookie.match(/(?:^|;\s*)mythborn_consent=(all|essential)(?:;|$)/)?.[1];
    return cookie?{essential:true,analytics:cookie==='all'}:null;
  };
  let consentPreviousFocus=null;
  let backgroundState=[];
  const restoreBackground=()=>{
    backgroundState.forEach(({node,inert,inertAttribute,ariaHidden})=>{
      node.inert=inert;
      if(!inertAttribute)node.removeAttribute('inert');
      if(ariaHidden===null)node.removeAttribute('aria-hidden');
      else node.setAttribute('aria-hidden',ariaHidden);
    });
    backgroundState=[];
  };
  const closeConsent=()=>{
    dialog.hidden=true;
    document.body.classList.remove('has-open-consent');
    restoreBackground();
    if(consentPreviousFocus instanceof HTMLElement)consentPreviousFocus.focus({preventScroll:true});
  };
  const persist=analytics=>{
    const value={essential:true,analytics,updatedAt:new Date().toISOString()};
    try{localStorage.setItem(key,JSON.stringify(value))}catch{}
    document.cookie=`mythborn_consent=${analytics?'all':'essential'}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
    if(analytics)loadAnalytics();
    else setAnalyticsConsent(false);
    closeConsent();
    window.dispatchEvent(new CustomEvent('mythborn:consent',{detail:value}));
  };
  const open=()=>{
    consentPreviousFocus=document.activeElement;
    dialog.querySelector('[data-consent-analytics]').checked=Boolean(read()?.analytics);
    backgroundState=[...document.body.children].filter(node=>node!==dialog).map(node=>({node,inert:node.inert,inertAttribute:node.hasAttribute('inert'),ariaHidden:node.getAttribute('aria-hidden')}));
    backgroundState.forEach(({node})=>{node.inert=true;node.setAttribute('inert','');node.setAttribute('aria-hidden','true')});
    dialog.hidden=false;
    document.body.classList.add('has-open-consent');
    requestAnimationFrame(()=>dialog.querySelector('button').focus());
  };
  dialog.querySelector('[data-consent-accept]').addEventListener('click',()=>persist(true));
  dialog.querySelector('[data-consent-reject]').addEventListener('click',()=>persist(false));
  dialog.querySelector('[data-consent-save]').addEventListener('click',()=>persist(dialog.querySelector('[data-consent-analytics]').checked));
  document.querySelectorAll('[data-consent-manage]').forEach(button=>button.addEventListener('click',open));
  dialog.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&read()){event.preventDefault();closeConsent();return}
    if(event.key!=='Tab')return;
    const items=[...dialog.querySelectorAll('button,input')],first=items[0],last=items.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  });
  const currentConsent=read();
  if(currentConsent?.analytics)loadAnalytics();
  else setAnalyticsConsent(false);
  if(!currentConsent)open();
})();
