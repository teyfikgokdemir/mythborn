(()=>{
  const locale=window.MYTHBORN_LOCALE||((location.pathname==='/en'||location.pathname.startsWith('/en/'))?'en':(location.pathname==='/gr'||location.pathname.startsWith('/gr/'))?'el':(location.pathname==='/es'||location.pathname.startsWith('/es/'))?'es':'tr');
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
      message.textContent=locale==='tr'?'İstek şu anda gönderilemedi. Lütfen tekrar dene.':locale==='en'?'The request could not be sent. Please try again.':locale==='es'?'La solicitud no se pudo enviar. Inténtalo de nuevo.':'Το αίτημα δεν στάλθηκε. Δοκίμασε ξανά.';
    }finally{button.disabled=false}
  }));
  document.querySelectorAll('[data-password-toggle]').forEach(button=>button.addEventListener('click',()=>{
    const input=button.closest('.password-field')?.querySelector('input');
    if(!input)return;
    const reveal=input.type==='password';
    input.type=reveal?'text':'password';
    button.setAttribute('aria-pressed',String(reveal));
    button.setAttribute('aria-label',locale==='tr'?(reveal?'Şifreyi gizle':'Şifreyi göster'):locale==='en'?(reveal?'Hide password':'Show password'):locale==='es'?(reveal?'Ocultar contraseña':'Mostrar contraseña'):(reveal?'Απόκρυψη κωδικού':'Εμφάνιση κωδικού'));
    input.focus({preventScroll:true});
  }));

  document.querySelectorAll('[data-library-search]').forEach(input=>input.addEventListener('input',()=>{
    const query=input.value.trim().toLocaleLowerCase(document.documentElement.lang);
    document.querySelectorAll('[data-library-item]').forEach(card=>{card.hidden=query&&!card.textContent.toLocaleLowerCase(document.documentElement.lang).includes(query)});
  }));

  const sky=document.querySelector('[data-current-sky]');
  if(sky&&/hesap|calculat|υπολογ/i.test(sky.textContent)){
    const status=locale==='tr'?'Güncel gezegen konumları hesaplanıyor…':locale==='en'?'Calculating current planetary positions…':locale==='es'?'Calculando las posiciones planetarias actuales…':'Υπολογίζονται οι τρέχουσες πλανητικές θέσεις…';
    sky.innerHTML=`<div class="sky-skeleton" role="status"><span></span><span></span><span></span><span></span><p>${status}</p></div>`;
    setTimeout(()=>{
      if(!sky.querySelector('.sky-skeleton'))return;
      const label=locale==='tr'?'Hesaplama uzun sürüyor. Yeniden dene':locale==='en'?'Calculation is taking longer. Try again':locale==='es'?'El cálculo está tardando más. Inténtalo de nuevo':'Ο υπολογισμός καθυστερεί. Δοκίμασε ξανά';
      sky.querySelector('p').innerHTML=`${label} <button class="btn btn-ghost" type="button" data-sky-retry>${locale==='tr'?'Yeniden dene':locale==='en'?'Retry':locale==='es'?'Reintentar':'Επανάληψη'}</button>`;
      sky.querySelector('[data-sky-retry]').addEventListener('click',()=>location.reload());
    },8000);
  }

  document.querySelectorAll('.consent-banner,[data-consent-banner],.cookie-banner').forEach(node=>node.remove());
  const key='mythborn-consent-v2';
  const GA4_ID='G-RW928SX37X';
  const GTM_ID='GTM-PKC69D3L';
  const ADS_ID='AW-18090583790';
  const CLARITY_ID='';
  const safeClarityId=/^[a-z0-9]{5,20}$/.test(CLARITY_ID);
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  let gaLoaded=!!document.querySelector('script[data-mythborn-ga4]'),gtmLoaded=false,clarityLoaded=false;
  const consentState=analytics=>({
    analytics_storage: 'granted',
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied'
  });
  const applyGoogleConsent=analytics=>{
    window[`ga-disable-${GA4_ID}`]=false;
    window.gtag('consent','update',consentState(analytics));
  };
  const applyClarityConsent=analytics=>{
    if(window.clarity)window.clarity('consentv2',{analytics_Storage:'granted',ad_Storage:'denied'});
  };
  const clearAnalyticsCookies=()=>{
    const names=document.cookie.split(';').map(item=>item.trim().split('=')[0]).filter(name=>name==='_ga'||name.startsWith('_ga_')||name==='_clck'||name==='_clsk');
    for(const name of names){
      document.cookie=`${name}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
      document.cookie=`${name}=; Domain=.mythborn.co; Path=/; Max-Age=0; SameSite=Lax; Secure`;
    }
  };
  const loadScript=(id,src,parent=document.head)=>{
    if(document.getElementById(id))return;
    const script=document.createElement('script');
    script.id=id;
    script.async=true;
    script.src=src;
    parent.appendChild(script);
  };
  const loadGa=analytics=>{
    applyGoogleConsent(analytics);
    if(!gaLoaded&&!document.querySelector('script[data-mythborn-ga4]')){
      gaLoaded=true;
      const script=document.createElement('script');
      script.async=true;
      script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
      script.dataset.mythbornGa4='true';
      document.head.appendChild(script);
      window.gtag('js',new Date());
    }
    window.gtag('config',GA4_ID,{send_page_view:true,anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});
    window.gtag('config',ADS_ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});
  };
  const loadGtm=()=>{
    if(gtmLoaded||!/^GTM-[A-Z0-9]+$/.test(GTM_ID))return;
    gtmLoaded=true;
    window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
    loadScript('mythborn-gtm',`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
  };
  const loadClarity=analytics=>{
    if(!safeClarityId||location.search||location.hash)return;
    window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments)};
    document.body.setAttribute('data-clarity-mask','true');
    applyClarityConsent(analytics);
    if(!clarityLoaded){
      clarityLoaded=true;
      loadScript('mythborn-clarity',`https://www.clarity.ms/tag/${CLARITY_ID}`,document.body);
    }
  };
  const runAnalytics=analytics=>{
    loadGa(analytics);
    loadClarity(analytics);
    loadGtm();
  };
  const scheduleAnalytics=analytics=>{
    const run=()=>runAnalytics(analytics);
    if('requestIdleCallback' in window) window.requestIdleCallback(run,{timeout:3000});
    else window.setTimeout(run,1200);
  };
  let sourceBeaconLoaded=false;
  const loadSourceBeacon=()=>{
    if(sourceBeaconLoaded||document.querySelector('script[data-mythborn-source-beacon]'))return;
    sourceBeaconLoaded=true;
    const script=document.createElement('script');
    script.src='/cansu-source-beacon.js';
    script.defer=true;
    script.dataset.site='mythborn';
    script.dataset.mythbornSourceBeacon='true';
    document.body.appendChild(script);
  };
  const trackEvent=(name,params={})=>{if(typeof window.gtag!=='function')return;window.gtag('event',name,{...params,page_path:location.pathname,language:locale})};
  document.addEventListener('click',event=>{const target=event.target.closest?.('[data-track]');if(!target)return;trackEvent(target.dataset.track,{link_text:(target.textContent||'').trim().slice(0,80)})},{passive:true});
  const copy={
    tr:{title:'Çerez tercihleri',body:'Zorunlu çerezler siteyi çalıştırır. Analitik ölçüm tercihini buradan seçebilirsin.',policy:'Çerez politikası',accept:'Onayla',reject:'Reddet'},
    en:{title:'Cookie preferences',body:'Essential cookies keep the site working. Choose whether to allow analytics measurement.',policy:'Cookie policy',accept:'Accept',reject:'Reject'},
    el:{title:'Προτιμήσεις cookies',body:'Τα απαραίτητα cookies διατηρούν τη λειτουργία του ιστότοπου. Επίλεξε αν επιτρέπεις analytics.',policy:'Πολιτική cookies',accept:'Αποδοχή',reject:'Απόρριψη'},
    es:{title:'Preferencias de cookies',body:'Las cookies esenciales mantienen el sitio en funcionamiento. Elige si permites medición analítica.',policy:'Política de cookies',accept:'Aceptar',reject:'Rechazar'}
  }[locale];
  const policyHref='/cerezler';
  const dialog=document.createElement('aside');
  dialog.className='consent-dialog';
  dialog.hidden=true;
  dialog.setAttribute('role','region');
  dialog.setAttribute('aria-labelledby','consent-title');
  dialog.setAttribute('aria-live','polite');
  dialog.innerHTML=`<div class="consent-panel"><div class="consent-copy"><strong id="consent-title">${copy.title}</strong><p>${copy.body} <a href="${policyHref}">${copy.policy}</a></p></div><div class="consent-actions"><button class="btn btn-ghost" type="button" data-consent-reject>${copy.reject}</button><button class="btn btn-primary" type="button" data-consent-accept>${copy.accept}</button></div></div>`;
  document.body.appendChild(dialog);
  const read=()=>{
    try{const stored=JSON.parse(localStorage.getItem(key)||'null');if(stored)return stored}catch{}
    const cookie=document.cookie.match(/(?:^|;\s*)mythborn_consent=(all|essential)(?:;|$)/)?.[1];
    return cookie?{essential:true,analytics:cookie==='all'}:null;
  };
  const closeConsent=()=>{dialog.hidden=true};
  const persist=analytics=>{
    const value={essential:true,analytics,updatedAt:new Date().toISOString()};
    try{localStorage.setItem(key,JSON.stringify(value))}catch{}
    document.cookie=`mythborn_consent=${analytics?'all':'essential'}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
    scheduleAnalytics(true);
    loadSourceBeacon();
    closeConsent();
    window.dispatchEvent(new CustomEvent('mythborn:consent',{detail:value}));
  };
  const open=()=>{
    dialog.hidden=false;
    requestAnimationFrame(()=>dialog.querySelector('button')?.focus());
  };
  dialog.querySelector('[data-consent-accept]').addEventListener('click',()=>persist(true));
  dialog.querySelector('[data-consent-reject]').addEventListener('click',()=>persist(false));
  document.querySelectorAll('[data-consent-manage]').forEach(button=>button.addEventListener('click',open));
  dialog.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&read()){event.preventDefault();closeConsent()}
  });
  const currentConsent=read();
  scheduleAnalytics(true);
  loadSourceBeacon();
  if(!currentConsent)open();})();
