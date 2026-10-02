(() => {
  const sourceEndpoint = 'https://cansu.teyfikgokdemir.com/api/sources';
  const conversionEndpoint = 'https://cansu.teyfikgokdemir.com/api/conversions';
  const site = document.currentScript?.dataset.site;
  if (!site) return;

  const context = () => {
    const query = new URLSearchParams(location.search);
    let referrerHost = '';
    try { referrerHost = document.referrer ? new URL(document.referrer).hostname : ''; } catch {}
    if (referrerHost === location.hostname) referrerHost = '';
    return {
      site,
      landing_path: location.pathname,
      referrer_host: referrerHost,
      utm_source: query.get('utm_source') || '',
      utm_medium: query.get('utm_medium') || '',
      utm_campaign: query.get('utm_campaign') || '',
    };
  };

  if (!sessionStorage.getItem('cansu-source-sent-v1')) {
    try {
      const payload = context();
      const params = new URLSearchParams({
        event_site: payload.site,
        landing_path: payload.landing_path,
        referrer_host: payload.referrer_host,
        utm_source: payload.utm_source,
        utm_medium: payload.utm_medium,
        utm_campaign: payload.utm_campaign,
      });
      const beacon = new Image();
      beacon.src = `${sourceEndpoint}?${params.toString()}`;
      sessionStorage.setItem('cansu-source-sent-v1', '1');
    } catch {}
  }

  const sendConversion = (eventType, extra = {}) => {
    const payload = JSON.stringify({
      ...context(),
      ...extra,
      event_type: eventType,
      event_quality: 'browser',
    });
    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        if (navigator.sendBeacon(conversionEndpoint, blob)) return;
      }
    } catch {}
    fetch(conversionEndpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: payload,
      keepalive: true,
      mode: 'cors',
      credentials: 'omit',
    }).catch(() => {});
  };

  const classify = (href) => {
    const value = String(href || '').trim().toLowerCase();
    if (value.startsWith('tel:')) return 'phone_click';
    if (value.startsWith('mailto:')) return 'email_click';
    if (value.includes('wa.me/') || value.includes('api.whatsapp.com/') || value.includes('whatsapp.com/send')) return 'whatsapp_click';
    return null;
  };

  document.addEventListener('click', (event) => {
    const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!anchor) return;
    const eventType = classify(anchor.getAttribute('href'));
    if (eventType) sendConversion(eventType);
  }, { capture: true });

  window.CansuEvents = Object.freeze({ track: sendConversion });
})();


(() => {
  const site = document.currentScript?.dataset.site || 'mythborn';
  if (document.querySelector('script[data-cansu-umami-bootstrap="true"]')) return;
  const script = document.createElement('script');
  script.src = 'https://cansu.teyfikgokdemir.com/cansu-umami-loader.js';
  script.defer = true;
  script.dataset.site = site;
  script.dataset.cansuUmamiBootstrap = 'true';
  document.head.appendChild(script);
})();
