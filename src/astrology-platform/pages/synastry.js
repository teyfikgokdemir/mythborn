// Mythborn Astrology Platform — Synastry Relationship Skeleton
import { ASTROLOGY_LOCALES } from '../i18n.js';

export const renderSynastryView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ İKİ HARİTA ARASI GEOMETRİK İLİŞKİ DİNAMİĞİ</span>
        <h1>${t.menu.synastry} ve Çift Haritası Uyumu</h1>
        <p class="astro-hero-lead">İki bireyin doğum haritalarını üst üste koyarak duygusal bağ, iletişim, fiziksel çekim ve uzun vadeli ortaklık dinamiklerini inceleyin.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-form-card" style="max-width:780px">
          <h2 style="font-family:var(--font-serif); font-size:24px; color:#fff; margin-bottom:12px; font-weight:400">İki Kişinin Doğum Verilerini Girin</h2>
          <p style="color:var(--muted); font-size:14px; margin-bottom:24px">Sinastri haritası bir kader hükmü değil; ilişkinin hangi alanlarda akıcı, hangi alanlarda gelişim potansiyeli taşıdığını gösteren sembolik bir aynadır.</p>

          <form id="synastry-form" onsubmit="event.preventDefault(); alert('Aşama 1 Frontend İskeleti: İki haritalı hesaplama motoru Aşama 2\\'de bağlanacaktır.');">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px">
              <fieldset style="border:1px solid var(--border); border-radius:14px; padding:18px">
                <legend style="color:var(--gold); padding:0 8px; font-size:13px; font-weight:600">1. Kişi (Siz)</legend>
                <div class="astro-form-group">
                  <label for="p1-date">Doğum Tarihi *</label>
                  <input type="date" id="p1-date" name="p1Date" required>
                </div>
                <div class="astro-form-group">
                  <label for="p1-time">Doğum Saati</label>
                  <input type="time" id="p1-time" name="p1Time">
                </div>
                <div class="astro-form-group">
                  <label for="p1-place">Doğum Yeri *</label>
                  <input type="text" id="p1-place" name="p1Place" placeholder="Şehir, Ülke" required>
                </div>
              </fieldset>

              <fieldset style="border:1px solid var(--border); border-radius:14px; padding:18px">
                <legend style="color:var(--gold); padding:0 8px; font-size:13px; font-weight:600">2. Kişi (Partner / Ortak)</legend>
                <div class="astro-form-group">
                  <label for="p2-date">Doğum Tarihi *</label>
                  <input type="date" id="p2-date" name="p2Date" required>
                </div>
                <div class="astro-form-group">
                  <label for="p2-time">Doğum Saati</label>
                  <input type="time" id="p2-time" name="p2Time">
                </div>
                <div class="astro-form-group">
                  <label for="p2-place">Doğum Yeri *</label>
                  <input type="text" id="p2-place" name="p2Place" placeholder="Şehir, Ülke" required>
                </div>
              </fieldset>
            </div>

            <div style="margin-top:24px">
              <button type="submit" class="astro-btn-primary" style="width:100%; justify-content:center">
                <span>Sinastri Uyumunu Analiz Et (Aşama 1 İskelet)</span>
                <span aria-hidden="true">${isRtl ? '←' : '→'}</span>
              </button>
            </div>
          </form>
        </div>

        <div class="astro-grid-3" style="margin-top:48px">
          <article class="astro-card">
            <span class="astro-card-tag">☽ DUYGUSAL REZONANS</span>
            <h3>Ay–Ay & Ay–Güneş Teması</h3>
            <p>Birbirinizin duygusal ihtiyaçlarını ne kadar anlıyorsunuz? Ev içi huzur, sezgisel şefkat ve bilinçdışı güvenlik hissi.</p>
          </article>
          <article class="astro-card">
            <span class="astro-card-tag">☿ İLETİŞİM KÖPRÜSÜ</span>
            <h3>Merkür Açısı</h3>
            <p>Fikir ayrılıklarında nasıl uzlaşıyorsunuz? Zihinsel merak, açık konuşabilme ve ortak ilgi alanları oluşturma kapasitesi.</p>
          </article>
          <article class="astro-card">
            <span class="astro-card-tag">♀ KIMYA VE DEĞER</span>
            <h3>Venüs–Mars Dansı</h3>
            <p>Romantik çekim, estetik uyum, tutku ve birbirinizin değer dünyasına duyduğunuz hayranlık ekseni.</p>
          </article>
        </div>
      </div>
    </section>
  `;
};
