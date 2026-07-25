(() => {
  const key = 'mythborn-consent-v1';
  const measurementId = 'G-RW928SX37X';
  const box = document.querySelector('[data-cookie-consent]');
  if (!box) return;

  let analyticsLoaded = false;
  const loadAnalytics = () => {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  };

  const apply = (value) => {
    localStorage.setItem(key, value);
    box.hidden = true;
    if (value === 'accepted') loadAnalytics();
  };

  const saved = localStorage.getItem(key);
  if (saved === 'accepted') loadAnalytics();
  else if (!saved) box.hidden = false;

  box.querySelector('[data-cookie-accept]')?.addEventListener('click', () => apply('accepted'));
  box.querySelector('[data-cookie-reject]')?.addEventListener('click', () => apply('rejected'));
})();