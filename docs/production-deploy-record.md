# Production Deployment & Rollback Record — Mythborn Astrology Platform

- **Tarih / Saat:** 2026-11-04T02:30:00+03:00
- **Aktif Branch:** `work/astrology-platform-phase0`
- **Hedef Worker:** `mythborn` (Production)
- **Production D1 Veritabanı:** `mythborn-membership` (`99490fbd-8f6c-4bf9-b5ed-bffdfdbd8771`) — **Dokunulmadı / SIFIR Etki**
- **Önceki Çalışan Canlı Sürüm (Baseline Version ID):** `c8237dd9-d7aa-44a6-8989-3cbbf22ca926`
- **Acil Geri Alma (Rollback) Komutu:**
  ```bash
  npx wrangler rollback --version-id c8237dd9-d7aa-44a6-8989-3cbbf22ca926
  ```

---

## 1. Dağıtım Kapsamı ve Yapılan Değişiklikler

1. **Google Search Console Video Sitemap Hatası Düzeltmesi:**
   - `<video:player_loc>` etiketi `<loc>` ile aynı değeri (sayfanın HTML URL'i) gösterdiği için Google Search Console tarafından hata olarak raporlanmıştı.
   - Google Video Sitemap standartlarına tam uygun olarak `<video:player_loc>` tamamen kaldırıldı, doğrudan ham mp4 video kaynağını gösteren `<video:content_loc>https://mythborn.co/videos/28-ekim-5-kasim-tarot.mp4</video:content_loc>` korundu.
   - 5 dilli tüm video URL'leri (`/videolar`, `/en/videos`, `/gr/videos`, `/es/videos`, `/ar/videos`) eksiksiz çalışır hale getirildi.

2. **Kapsamlı ve Güvenli 301 Yönlendirmeleri:**
   - Tüm eski URL'ler ana sayfaya körlemesine yönlendirilmedi; her eski URL anlamlı ve eşdeğer karşılığına 301 Permanent Redirect ile yönlendirildi:
     - `/haftalik-burc`, `/en/weekly-horoscope` -> `/videolar#burclar`, `/en/videos#burclar`
     - `/tarot`, `/gunluk-kart`, `/otuz-gun`, `/katina`, `/ask`, `/ruya-yorumlari`, `/numeroloji` -> `/kesif-alanlari` (Gözde alanları)
     - `/astroloji`, `/vedik-astroloji`, `/ay-takvimi`, `/bugunun-gokyuzu`, `/astroloji-kutuphanesi/*` -> `/kesif-alanlari`
     - `/maya-zaman-donguleri`, `/mezopotamya-astrolojisi` vb. kadim gökyüzü rotaları -> `/blog`
     - Shopify e-ticaret sayfaları (`/products/*`, `/collections/*`, `/cart`) -> HTTP 410 Gone
     - 5 dil desteği (TR, EN, EL/GR, ES, AR) tüm yönlendirmelerde ve aktif rotalarda korundu.

3. **Ultra Elit Astroloji Platformu & Görsel Varlık Sistemi:**
   - `astronomy-engine` v2.1.19 tabanlı yerel astronomi veri çekirdeği (81 Türkiye ili + 20 küresel şehir, kesin 24 saat formatı, sıfır ağ bağımlılığı).
   - Yeni dinamik SVG doğum haritası çarkı (`natal-wheel.js`), 12 burç sembolü, 4 element rozeti, 8 ay evresi SVG'si ve 5 dilli OpenGraph kartları.
   - P0 Sayfaları: Ana Sayfa, Doğum Haritası, 12 Burç Rehberi, Gökyüzü Takvimi, Retrolar, Transitler, Sinastri, Astroloji Sözlüğü, Öğrenme Merkezi, Burç Yorumları, Yaklaşım.
   - Dinamik 5 dilli sitemap üreticisi ve `public/sitemap.xml` güncellemesi.

---

## 2. Doğrulama ve Test Matrisi

- `npm run audit`: **BAŞARILI (Syntax, Environment, D1 Isolation, Astrology Regression, Maya-Vanga, Gözde)**
- `node scripts/astrology-data-core-test.mjs`: **BAŞARILI (11/11 Test)**
- `node scripts/test-redirects-and-video-sitemap.mjs`: **BAŞARILI (20 yönlendirme, 26 aktif rota, video sitemap)**
- `node scripts/verify-live-preview.mjs`: **BAŞARILI (Preview ortamı canlı uçtan uca testler)**
