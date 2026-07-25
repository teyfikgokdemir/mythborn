(() => {
  const key = 'mythborn-consent-v1';
  const box = document.querySelector('[data-cookie-consent]');
  const settings = document.querySelector('[data-cookie-settings]');
  if (!box || !settings) return;
  const apply = (value) => {
    localStorage.setItem(key, value);
    box.hidden = true;
  };
  const saved = localStorage.getItem(key);
  if (!saved) box.hidden = false;
  box.querySelector('[data-cookie-accept]')?.addEventListener('click', () => apply('accepted'));
  box.querySelector('[data-cookie-reject]')?.addEventListener('click', () => apply('rejected'));
  settings.addEventListener('click', () => { box.hidden = false; });
})();
