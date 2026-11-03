// Mythborn Astrology Platform — Planetary Retrogrades Skeleton
import { ASTROLOGY_LOCALES } from '../i18n.js';

export const renderRetrogradesView = ({ locale = 'tr' }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ DÖNGÜSEL GERİ HAREKET REHBERİ</span>
        <h1>${t.menu.retros} Takvimi ve Gölge Dönemleri</h1>
        <p class="astro-hero-lead">Merkür, Venüs, Mars ve dış gezegenlerin gerileme döngüleri; içsel gözden geçirme ve stratejik duraklama fırsatları.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-grid-3">
          <article class="astro-card">
            <span class="astro-card-tag">☿ MERKÜR RETROSU</span>
            <h3>İletişim, Sözleşmeler ve Zihinsel Detoks</h3>
            <p>Yılda 3-4 kez yaklaşık 3 hafta süren gerileme döngüsü. Yanlış anlamaları önlemek, belgeleri yedeklemek ve eski projeleri tamamlamak için idealdir.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Gölge Evresi: 2 Hafta Öncesi & Sonrası</div>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">♀ VENÜS RETROSU</span>
            <h3>İlişki Değerleri ve Finansal Yeniden Değerleme</h3>
            <p>18 ayda bir yaklaşık 40 gün süren döngü. Eski bağların sorgulanması, öz-değer inşası ve estetik tercihlerde derinleşme dönemi.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ İlişkilerde İçsel Aynalama</div>
          </article>

          <article class="astro-card">
            <span class="astro-card-tag">♂ MARS RETROSU</span>
            <h3>Enerji Yönetimi, Öfke ve Girişim Stratejisi</h3>
            <p>Yaklaşık 2 yılda bir 2-2.5 ay süren gerileme. Dürtüsel acele yerine sabırla stratejik planlama yapmanın kazandırdığı koridor.</p>
            <div style="font-size:12px; color:var(--gold); margin-top:auto">✦ Enerjiyi İçeride Tutma Sanatı</div>
          </article>
        </div>
      </div>
    </section>
  `;
};
