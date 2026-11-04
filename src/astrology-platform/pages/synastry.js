// Mythborn Astrology Platform — Synastry & Relationship Dynamics
import { ASTROLOGY_LOCALES } from '../i18n.js';
import { getRouteHref } from '../layout.js';
import { calculatePlanetaryPositions, lookupCity, MAJOR_ASPECTS, normalizeLongitude, ENGINE_METADATA } from '../data-core.js';
import { getSignCompendium } from '../zodiac-compendium.js';

export const renderSynastryView = ({ locale = 'tr', searchParams = {} }) => {
  const t = ASTROLOGY_LOCALES[locale] || ASTROLOGY_LOCALES.tr;
  const isRtl = t.dir === 'rtl';
  const arrow = isRtl ? '←' : '→';
  const loc = locale === 'gr' ? 'el' : ['tr', 'en', 'el', 'es', 'ar'].includes(locale) ? locale : 'tr';

  const p1Date = searchParams.p1_date || '';
  const p1City = searchParams.p1_city || 'Istanbul';
  const p2Date = searchParams.p2_date || '';
  const p2City = searchParams.p2_city || 'Istanbul';

  let synastryResult = null;

  if (p1Date && p2Date && /^\d{4}-\d{2}-\d{2}$/.test(p1Date) && /^\d{4}-\d{2}-\d{2}$/.test(p2Date)) {
    try {
      const p1Instant = new Date(`${p1Date}T12:00:00Z`);
      const p2Instant = new Date(`${p2Date}T12:00:00Z`);

      const p1Planets = calculatePlanetaryPositions(p1Instant, locale);
      const p2Planets = calculatePlanetaryPositions(p2Instant, locale);

      const crossAspects = [];
      for (const a of p1Planets) {
        for (const b of p2Planets) {
          const rawDist = Math.abs(normalizeLongitude(a.longitude) - normalizeLongitude(b.longitude));
          const dist = rawDist > 180 ? 360 - rawDist : rawDist;

          for (const asp of MAJOR_ASPECTS) {
            const delta = Math.abs(dist - asp.angle);
            if (delta <= asp.orb) {
              crossAspects.push({
                p1: a.name,
                p1Sign: a.sign,
                p2: b.name,
                p2Sign: b.sign,
                type: asp.name,
                angle: asp.angle,
                dist: Number(dist.toFixed(2)),
                orb: Number(delta.toFixed(2)),
                nature: asp.nature
              });
              break;
            }
          }
        }
      }

      const harmonious = crossAspects.filter(x => x.nature === 'harmonious').length;
      const challenging = crossAspects.filter(x => x.nature === 'challenging').length;

      synastryResult = {
        p1Sun: p1Planets.find(p => p.id === 'sun'),
        p1Moon: p1Planets.find(p => p.id === 'moon'),
        p2Sun: p2Planets.find(p => p.id === 'sun'),
        p2Moon: p2Planets.find(p => p.id === 'moon'),
        aspects: crossAspects.sort((a, b) => a.orb - b.orb).slice(0, 15),
        counts: { harmonious, challenging, total: crossAspects.length }
      };
    } catch {
      // Graceful fallback
    }
  }

  return `
    <section class="astro-hero">
      <div class="astro-container">
        <span class="astro-hero-eyebrow">✦ İKİ DOĞUM HARİTASI ARASI AÇISAL ETKİLEŞİM</span>
        <h1>${t.menu.synastry} ve İlişki Dinamikleri</h1>
        <p class="astro-hero-lead">İki doğum haritası arasındaki gezegen temasları, iletişim eşikleri, çekim ve gelişim alanlarını matematiksel olarak karşılaştırın.</p>
      </div>
    </section>

    <section class="astro-section">
      <div class="astro-container">
        <div class="astro-form-card" style="max-width:800px; margin:0 auto">
          <form action="${getRouteHref(locale, 'synastry')}" method="get">
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px">
              <div>
                <h3 style="font-family:var(--font-serif); font-size:18px; color:var(--gold); margin-bottom:12px">✦ 1. Kişinin Bilgileri</h3>
                <div class="astro-form-group">
                  <label for="p1-date">Doğum Tarihi *</label>
                  <input type="date" id="p1-date" name="p1_date" required value="${p1Date || '1992-05-14'}">
                </div>
                <div class="astro-form-group">
                  <label for="p1-city">Doğum Şehri *</label>
                  <input type="text" id="p1-city" name="p1_city" required value="${p1City || 'Istanbul'}">
                </div>
              </div>

              <div>
                <h3 style="font-family:var(--font-serif); font-size:18px; color:var(--gold); margin-bottom:12px">✦ 2. Kişinin Bilgileri</h3>
                <div class="astro-form-group">
                  <label for="p2-date">Doğum Tarihi *</label>
                  <input type="date" id="p2-date" name="p2_date" required value="${p2Date || '1994-09-23'}">
                </div>
                <div class="astro-form-group">
                  <label for="p2-city">Doğum Şehri *</label>
                  <input type="text" id="p2-city" name="p2_city" required value="${p2City || 'Ankara'}">
                </div>
              </div>
            </div>

            <div style="margin-top:24px">
              <button type="submit" class="astro-btn-primary" style="width:100%; justify-content:center">
                <span>Sinastri Haritasını Karşılaştır</span>
                <span aria-hidden="true">${arrow}</span>
              </button>
            </div>
          </form>
        </div>

        ${synastryResult ? `
          <div style="margin-top:40px">
            <!-- Özet Dengesi -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-bottom:28px">
              <div style="padding:18px; background:rgba(74,222,128,0.06); border:1px solid rgba(74,222,128,0.3); border-radius:12px; text-align:center">
                <span style="font-size:24px; color:#4ade80">△</span>
                <h4 style="margin:6px 0; color:#fff">Uyumlu Açılar</h4>
                <strong style="font-size:22px; color:#4ade80">${synastryResult.counts.harmonious}</strong>
                <p style="font-size:12px; color:var(--muted); margin:4px 0 0">Üçgen ve Sekstil temaslar</p>
              </div>
              <div style="padding:18px; background:rgba(251,146,60,0.06); border:1px solid rgba(251,146,60,0.3); border-radius:12px; text-align:center">
                <span style="font-size:24px; color:#fb923c">□</span>
                <h4 style="margin:6px 0; color:#fff">Gelişim / Gerilim</h4>
                <strong style="font-size:22px; color:#fb923c">${synastryResult.counts.challenging}</strong>
                <p style="font-size:12px; color:var(--muted); margin:4px 0 0">Kare ve Karşıt temaslar</p>
              </div>
              <div style="padding:18px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:12px; text-align:center">
                <span style="font-size:24px; color:var(--gold)">☉☽</span>
                <h4 style="margin:6px 0; color:#fff">Işıklar Uyumu</h4>
                <strong style="font-size:14px; color:#fff">${synastryResult.p1Sun.sign} & ${synastryResult.p2Sun.sign}</strong>
                <p style="font-size:12px; color:var(--muted); margin:4px 0 0">Güneş burcu dinamikleri</p>
              </div>
            </div>

            <!-- Derinlemesine İlişki ve Uyum Analiz Raporu -->
            <div style="margin-bottom:28px; padding:28px 30px; background:linear-gradient(165deg, rgba(14,18,34,0.92) 0%, rgba(6,8,16,0.98) 100%); border:1px solid rgba(212,175,55,0.35); border-radius:18px; box-shadow:0 18px 45px rgba(0,0,0,0.65)">
              <div style="border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:14px; margin-bottom:20px">
                <span class="astro-card-tag">✦ ARKETİPSEL İLİŞKİ SENTEZİ</span>
                <h3 style="font-family:var(--font-serif); font-size:22px; color:#fff; margin:4px 0 0">
                  ${locale === 'tr' ? `${synastryResult.p1Sun.sign} & ${synastryResult.p2Sun.sign} Arasındaki Ruhsal Çekim ve Büyüme Alanları` : `${synastryResult.p1Sun.sign} & ${synastryResult.p2Sun.sign} Relational Synthesis`}
                </h3>
              </div>

              <div style="display:flex; flex-direction:column; gap:16px">
                <div style="padding:16px 20px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px">
                  <h4 style="font-family:var(--font-serif); font-size:16px; color:var(--gold); margin:0 0 6px">
                    ☉☉ ${locale === 'tr' ? 'Yaşam Amaçları & İrade Uyumu' : 'Core Life Purpose & Will'}
                  </h4>
                  <p style="font-size:13.5px; color:rgba(248,246,240,0.85); line-height:1.7; margin:0">
                    ${locale === 'tr'
                      ? `1. Kişi (${synastryResult.p1Sun.sign}) kendi varoluşunu ${getSignCompendium(synastryResult.p1Sun.signId).soulEssence.tr.slice(0, 100)}... şeklinde deneyimlerken; 2. Kişi (${synastryResult.p2Sun.sign}) ${getSignCompendium(synastryResult.p2Sun.signId).soulEssence.tr.slice(0, 100)}... dinamikleriyle hareket eder. Birbirinizi değiştirmeye çalışmak yerine zıt kutupların tamamlayıcılığına saygı duymak ilişkinin en sağlam omurgasıdır.`
                      : `The synthesis of ${synastryResult.p1Sun.sign} and ${synastryResult.p2Sun.sign} bridges distinct modes of expression, requiring mutual celebration of autonomy rather than projection.`}
                  </p>
                </div>

                <div style="padding:16px 20px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px">
                  <h4 style="font-family:var(--font-serif); font-size:16px; color:var(--gold); margin:0 0 6px">
                    ☽☽ ${locale === 'tr' ? 'Duygusal Dil & Mahremiyet Sığınakları' : 'Emotional Intimacy & Soul Sanctuary'}
                  </h4>
                  <p style="font-size:13.5px; color:rgba(248,246,240,0.85); line-height:1.7; margin:0">
                    ${locale === 'tr'
                      ? `Ay burçları (${synastryResult.p1Moon.sign} ve ${synastryResult.p2Moon.sign}), kriz anlarında nasıl tepki verdiğinizi ve şefkati nasıl aradığınızı fısıldar. Biri içine kapanırken diğeri konuşmak isteyebilir. Farklılıkları kusur değil, birbirinizi besleyecek zenginlikler olarak kabul ettiğinizde sarsılmaz bir duygusal liman inşa edilir.`
                      : `The Moon placements (${synastryResult.p1Moon.sign} and ${synastryResult.p2Moon.sign}) reveal your private attachment styles and vulnerability rhythms.`}
                  </p>
                </div>

                <div style="padding:16px 20px; background:rgba(212,175,55,0.04); border:1px solid rgba(212,175,55,0.22); border-radius:12px">
                  <h4 style="font-family:var(--font-serif); font-size:16px; color:var(--gold-bright); margin:0 0 6px">
                    ✦ ${locale === 'tr' ? 'Kozmik İlişki Pusulası' : 'Cosmic Compass for the Couple'}
                  </h4>
                  <p style="font-size:13.5px; color:#f8f6f0; line-height:1.7; margin:0">
                    ${locale === 'tr'
                      ? `Haritanızdaki ${synastryResult.counts.harmonious} uyumlu açı akışı kolaylaştırırken, ${synastryResult.counts.challenging} gelişim açısı ilişkinin büyüme motorudur. Gerilim açıları bir ayrılık fermanı değil; olgunlaşmak, dinlemeyi öğrenmek ve birbirinizi yüceltmek için kozmik bir davettir.`
                      : `Harmonious aspects supply natural ease, while challenging aspects provide the evolutionary fuel that matures mutual devotion.`}
                  </p>
                </div>
              </div>
            </div>

            <!-- Çapraz Açı Tablosu -->
            <div style="padding:24px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:16px">
              <h4 style="font-family:var(--font-serif); font-size:18px; color:#fff; margin-bottom:16px">
                ✦ İki Harita Arasındaki Belirgin Açı Bağları
              </h4>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px">
                ${synastryResult.aspects.map(a => `
                  <div style="padding:12px 16px; background:rgba(0,0,0,0.4); border-radius:8px; border:1px solid rgba(255,255,255,0.06); font-size:13px; display:flex; justify-content:space-between; align-items:center">
                    <div>
                      <strong style="color:var(--gold)">1. ${a.p1}</strong>
                      <span style="color:var(--muted); margin:0 4px">${a.type}</span>
                      <strong style="color:#fff">2. ${a.p2}</strong>
                    </div>
                    <span style="font-size:11px; color:${a.nature === 'harmonious' ? '#4ade80' : a.nature === 'challenging' ? '#fb923c' : 'var(--gold)'}">
                      ${a.dist}° (±${a.orb}°)
                    </span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="margin-top:24px; text-align:center">
              <p style="font-size:12px; color:var(--dim); max-width:620px; margin:0 auto">
                ${ENGINE_METADATA.precision} · Sinastri açıları iki harita arasındaki sembolik uyum ve gerilim potansiyellerini gösterir; ilişkinin kaderini, davranışları veya geleceği kesin olarak belirlemez.
              </p>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
};
