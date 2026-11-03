// Mythborn Astrology Platform — Natal Chart Page Skeleton
import { ASTROLOGY_LOCALES } from '../i18n.js';

export const renderNatalChartView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ ASTRONOMY ENGINE KORUMALI MATEMATİKSEL DOĞUM HARİTASI</span>
        <h1>${t.menu.natal} Hesaplama ve Yükselen Analizi</h1>
        <p class="astro-hero-lead">Doğum anınızdaki gezegen boylamları, yükselen burcunuz (ASC), tepe noktası (MC) ve ev yerleşimlerinizi ücretsiz hesaplayın.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-form-card">
          <h2 style="font-family:var(--font-serif); font-size:24px; color:#fff; margin-bottom:12px; font-weight:400">Doğum Bilgilerinizi Girin</h2>
          <p style="color:var(--muted); font-size:14px; margin-bottom:24px">Doğum saati bilinmiyorsa yükselen burç ve evler yerine gezegen konumları ve Ay burcu temel alınır.</p>

          <form id="natal-chart-form" onsubmit="event.preventDefault(); alert('Aşama 1 Frontend İskeleti: Gerçek hesaplama motoru Aşama 2\\'de veri çekirdeğiyle bağlanacaktır.');">
            <div class="astro-form-group">
              <label for="birth-date">Doğum Tarihi *</label>
              <input type="date" id="birth-date" name="birthDate" required>
            </div>

            <div class="astro-form-group">
              <label for="birth-time">Doğum Saati (24 Saat Formatı)</label>
              <input type="time" id="birth-time" name="birthTime">
              <label style="display:flex; align-items:center; gap:8px; margin-top:8px; font-weight:400; font-size:13px; color:var(--muted)">
                <input type="checkbox" id="time-unknown" name="timeUnknown" style="width:auto">
                <span>Doğum saatimi tam olarak bilmiyorum</span>
              </label>
            </div>

            <div class="astro-form-group">
              <label for="birth-place">Doğum Yeri (Şehir, Ülke) *</label>
              <input type="text" id="birth-place" name="birthPlace" placeholder="Örn: İstanbul, Türkiye veya Atina, Yunanistan" required minlength="3">
              <span class="astro-form-note">Konum tespiti için yerel ve açık kaynaklı koordinat arama motoru kullanılır.</span>
            </div>

            <div style="margin-top:24px">
              <button type="submit" class="astro-btn-primary" style="width:100%; justify-content:center">
                <span>Haritayı Hesapla (Aşama 1 İskelet)</span>
                <span aria-hidden="true">${isRtl ? '←' : '→'}</span>
              </button>
            </div>
          </form>
        </div>

        <div style="max-width:880px; margin:48px auto 0; text-align:center">
          <div style="padding:48px 24px; border:2px dashed var(--border); border-radius:24px; background:rgba(255,255,255,0.01)">
            <span style="font-size:36px; display:block; margin-bottom:12px">♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓</span>
            <h3 style="font-family:var(--font-serif); font-size:22px; color:var(--gold); margin-bottom:8px">Zodyak Çarkı ve Gezegen Konumları</h3>
            <p style="color:var(--muted); font-size:14px; max-width:540px; margin:0 auto">Form gönderildiğinde Güneş, Ay, Merkür, Venüs, Mars, Jüpiter, Satürn, Uranüs, Neptün ve Plüton'un ekliptik boylamları ve ev açıları burada interaktif SVG çarkı olarak görselleştirilecektir.</p>
          </div>
        </div>
      </div>
    </section>
  `;
};
