(()=>{
  const locale=window.MYTHBORN_LOCALE||(location.pathname==='/en'||location.pathname.startsWith('/en/')?'en':location.pathname==='/gr'||location.pathname.startsWith('/gr/')?'el':location.pathname==='/es'||location.pathname.startsWith('/es/')?'es':'tr');
  const prefix=locale==='tr'?'':locale==='en'?'/en':locale==='es'?'/es':'/gr';
  const localizeHref=href=>{
    if(!prefix||!href||!href.startsWith('/')||href.startsWith('//')||href.startsWith('/api/')||href.startsWith('/images/')||href==='/en'||href.startsWith('/en/')||href==='/gr'||href.startsWith('/gr/')||href==='/es'||href.startsWith('/es/'))return href;
    return `${prefix}${href==='/'?'':href}`;
  };
  const localizeLinks=root=>{
    root.querySelectorAll?.('a[href^="/"]').forEach(anchor=>{
      if(anchor.closest('.language-switcher, .header-language-panel, .mobile-language, [data-locale-link]'))return;
      anchor.setAttribute('href',localizeHref(anchor.getAttribute('href')));
    });
  };
  localizeLinks(document);
  new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{
    if(node.nodeType===Node.ELEMENT_NODE)localizeLinks(node);
  }))).observe(document.body,{childList:true,subtree:true});
})();
