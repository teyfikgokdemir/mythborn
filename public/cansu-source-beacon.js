(() => {
  const sourceEndpoint = 'https://cansu.teyfikgokdemir.com/api/sources';
  const conversionEndpoint = 'https://cansu.teyfikgokdemir.com/api/conversions';
  const site = document.currentScript?.dataset.site;
  if (!site) return;

  const allowedHosts = ['mythborn.co', 'www.mythborn.co'];
  const ua = navigator.userAgent || '';
  const automated =
    navigator.webdriver === true ||
    /headlesschrome|playwright|lighthouse|pagespeed|googlebot|bingbot|crawler|spider|bot\b/i.test(ua);
  const productionTraffic = allowedHosts.includes(location.hostname) && !automated;

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

  if (productionTraffic) {
    const sessionIdKey = 'cansu-source-session-v3:' + site;
    const sentKey = 'cansu-source-sent-v3:' + site;
    const getSessionId = () => {
      try {
        let value = sessionStorage.getItem(sessionIdKey);
        if (value) return value;
        value = (crypto?.randomUUID?.() || (Date.now().toString(36) + Math.random().toString(36).slice(2))).replace(/[^a-zA-Z0-9_-]/g, '');
        sessionStorage.setItem(sessionIdKey, value);
        return value;
      } catch {
        return (Date.now().toString(36) + Math.random().toString(36).slice(2)).replace(/[^a-zA-Z0-9_-]/g, '');
      }
    };
    const sendSource = async () => {
      try {
        const response = await fetch(sourceEndpoint, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ collector_version: '3', session_id: getSessionId(), ...context() }),
          keepalive: true,
          mode: 'cors',
          credentials: 'omit',
          cache: 'no-store',
        });
        if (response.ok) {
          try { sessionStorage.setItem(sentKey, '1'); } catch {}
          return true;
        }
      } catch {}
      return false;
    };
    let already = false;
    try { already = sessionStorage.getItem(sentKey) === '1'; } catch {}
    if (!already) {
      sendSource().then(async (ok) => {
        if (ok) return;
        await new Promise((resolve) => setTimeout(resolve, 1200));
        await sendSource();
      });
    }
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
    if (value.includes('wa.me/') || value.includes('api.whatsapp.com/') || value.includes('web.whatsapp.com/') || value.includes('whatsapp.com/send')) return 'whatsapp_click';
    if (value.includes('t.me/') || value.includes('telegram.me/') || value.startsWith('tg://')) return 'telegram_click';
    return null;
  };

  document.addEventListener('click', (event) => {
    const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!anchor) return;
    const eventType = classify(anchor.getAttribute('href'));
    if (eventType) sendConversion(eventType);
  }, { capture: true });

  document.addEventListener('submit', (event) => {
    const form = event.target instanceof HTMLFormElement ? event.target : null;
    if (!form) return;
    if (form.dataset.cansuTracked === 'true') return;
    form.dataset.cansuTracked = 'true';
    const signature = [
      form.getAttribute('action') || '',
      form.getAttribute('id') || '',
      form.getAttribute('name') || '',
      form.getAttribute('class') || '',
      form.getAttribute('data-form-type') || '',
    ].join(' ').toLowerCase();
    sendConversion(/(rfq|quote|quotation|teklif|talep|request)/i.test(signature) ? 'rfq_submit' : 'form_submit', {
      form_name: (form.getAttribute('name') || form.getAttribute('id') || '').slice(0, 80),
    });
    setTimeout(() => { try { delete form.dataset.cansuTracked; } catch {} }, 3000);
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
