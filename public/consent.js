(() => {
  const key = 'mythborn-consent-v1';
  const measurementId = 'G-RW928SX37X';
  const box = document.querySelector('[data-cookie-consent]');
  const settings = document.querySelector('[data-cookie-settings]');
  let analyticsLoaded = false;

  const loadAnalytics = () => {
    if (analyticsLoaded || document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;
    analyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.gaId = measurementId;
    document.head.appendChild(script);
  };

  if (!box || !settings) return;

  const apply = (value) => {
    localStorage.setItem(key, value);
    box.hidden = true;
    if (value === 'accepted') loadAnalytics();
  };

  const saved = localStorage.getItem(key);
  if (!saved) box.hidden = false;
  if (saved === 'accepted') loadAnalytics();

  box.querySelector('[data-cookie-accept]')?.addEventListener('click', () => apply('accepted'));
  box.querySelector('[data-cookie-reject]')?.addEventListener('click', () => apply('rejected'));
  settings.addEventListener('click', () => { box.hidden = false; });
})();