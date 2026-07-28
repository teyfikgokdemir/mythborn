(()=>{
  const banner=document.querySelector('[data-early-access]');
  if(!banner)return;
  const key='mythborn-early-access-dismissed-until';
  const stored=Number(localStorage.getItem(key)||0);
  if(Number.isFinite(stored)&&stored>Date.now()){banner.hidden=true;return}
  banner.querySelector('[data-early-access-close]')?.addEventListener('click',()=>{
    const until=Date.parse(banner.dataset.dismissUntil||'');
    if(Number.isFinite(until))localStorage.setItem(key,String(until));
    banner.hidden=true;
  },{once:true});
})();
