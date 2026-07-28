(()=>{
  const button=document.querySelector('.mobile-menu-button');
  const menu=document.querySelector('.mobile-nav');
  const closeButton=document.querySelector('[data-mobile-close]');
  const backdrop=document.querySelector('[data-mobile-backdrop]');
  if(button&&menu){
    const open=()=>{
      button.setAttribute('aria-expanded','true');
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden','false');
      if(backdrop)backdrop.hidden=false;
      document.body.classList.add('has-open-menu');
      closeButton?.focus();
    };
    const close=()=>{
      button.setAttribute('aria-expanded','false');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden','true');
      if(backdrop)backdrop.hidden=true;
      document.body.classList.remove('has-open-menu');
    };
    button.addEventListener('click',()=>button.getAttribute('aria-expanded')==='true'?close():open());
    closeButton?.addEventListener('click',close);
    backdrop?.addEventListener('click',close);
    menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
    menu.querySelectorAll('.mobile-group-toggle').forEach(toggle=>toggle.addEventListener('click',()=>{
      const panel=document.getElementById(toggle.getAttribute('aria-controls'));
      const expanded=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!expanded));
      if(panel)panel.hidden=expanded;
      const icon=toggle.querySelector('span');
      if(icon)icon.textContent=expanded?'＋':'−';
    }));
    document.addEventListener('keydown',event=>{if(event.key==='Escape')close()});
  }
  document.querySelectorAll('.desktop-explore').forEach(details=>{
    const summary=details.querySelector('summary');
    let closeTimer;
    const sync=()=>summary?.setAttribute('aria-expanded',String(details.open));
    const open=()=>{clearTimeout(closeTimer);details.open=true;sync()};
    const close=()=>{details.open=false;sync()};
    const delayedClose=()=>{closeTimer=setTimeout(close,180)};
    details.addEventListener('toggle',sync);
    details.addEventListener('mouseenter',open);
    details.addEventListener('mouseleave',delayedClose);
    summary?.addEventListener('keydown',event=>{
      if(event.key==='ArrowDown'){event.preventDefault();open();details.querySelector('.desktop-explore-panel a')?.focus()}
    });
    document.addEventListener('click',event=>{if(!details.contains(event.target))close()});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){close();details.querySelector('summary')?.focus()}});
    sync();
  });
})();
