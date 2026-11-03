# Mythborn.co — Devralma ve Süreklilik Dokümanı (Handoff)

Bu doküman, Mythborn platformunun başka bir yapay zekâ ajanı, yazılım mühendisi veya proje yöneticisi tarafından sıfır bilgi kaybıyla devralınabilmesi için hazırlanmıştır.

---

## 1. Temel Proje ve Git Bilgileri

- **Canlı (Production) URL:** `https://mythborn.co` (Kesinlikle dokunulmadı)
- **Önizleme (Preview) URL:** `https://mythborn-preview.teyfikgokdemir.workers.dev` (Aşama 1 yayında)
- **Son Çalışan Baseline Commit:** `18484f3` (Canlıdaki sürüm)
- **Aşama 0 Checkpoint Commit:** `5e5d46d`
- **Aşama 0.1 Checkpoint Commit:** `a3d8c05`
- **Aşama 1 Checkpoint Commit:** `a9062ce` / Güncel Doğrulama Commit'i
- **Aktif Geliştirme Dalı:** `work/astrology-platform-phase0`
- **Preview Worker Adı:** `mythborn-preview`
- **Preview Sürüm ID:** `56e0fa6c-93ca-4ac3-be46-dc02319c352f`
- **Preview D1 Veritabanı:** `mythborn-membership-preview` (`82d3d933-282d-4369-b68e-cee26b66349b`)
- **Production Worker Adı:** `mythborn` (Dokunulmadı)
- **Production D1 Veritabanı:** `mythborn-membership` (`99490fbd-8f6c-4bf9-b5ed-bffdfdbd8771` - Dokunulmadı)
- **Production Dağıtımı:** `NOT EXECUTED` (Onaylanana kadar durduruldu)

---

## 2. Çalıştırma, Test ve Dağıtım Komutları

```bash
# Kurulum
npm install

# Test ve Denetim (Tüm proje test suiti geçmek zorundadır)
npm run audit

# Aşama 1 Astroloji Preview Testi (Yerel simülasyon)
node scripts/astrology-preview-test.mjs

# Canlı Preview Uçtan Uca Doğrulama Testi (Canlı worker testi)
node scripts/verify-live-preview.mjs

# npm Güvenlik Açığı Taraması (Dependency vulnerability scan)
npm audit

# Yerel Çalıştırma
npm run dev

# Önizleme Ortamına Dağıtım (Yalnızca preview worker'ı günceller)
npm run preview

# Canlı Ortama Dağıtım (Yalnızca kullanıcı yazılı onayı sonrası)
npm run deploy
```

---

## 3. Aşamaların Anlık Durumu

- **Tamamlanan Aşama:** `Aşama 1` (Astroloji platformu frontend iskeleti, tasarım token'ları, 8 sayfa kabuğu, 5 dilli navigasyon, preview deployment, Gözde alt sayfaları ve mock form entegrasyonu).
- **Devam Eden Aşama:** Kullanıcı incelemesi ve Aşama 2 (Veri Çekirdeği) onayı bekleme.
- **Bekleyen Aşamalar:** Aşama 2 (Veri Çekirdeği), Aşama 3 (Burç Yorumları), Aşama 4 (SEO / 301), Aşama 5 (Ek Modüller).

---

## 4. Değişen ve Oluşturulan Dosyalar (Aşama 1)

1. `src/astrology-platform/tokens.js`: Kozmik lüks tasarım token'ları ve responsive CSS.
2. `src/astrology-platform/i18n.js`: 5 dil (TR, EN, EL, ES, AR) menü, başlık, uyarı ve 12 burç sözlüğü.
3. `src/astrology-platform/layout.js`: Responsive master layout, dil değiştirici, erişilebilir `hidden inert` çekmece.
4. `src/astrology-platform/router.js`: Rota eşleyici, dil belirleyici ve preview güvenlik başlıkları.
5. `src/astrology-platform/pages/*`: 8 adet sayfa kabuğu (`home.js`, `natal-chart.js`, `zodiac.js`, `sky-calendar.js`, `retrogrades.js`, `transits.js`, `synastry.js`, `glossary.js`).
6. `src/app-router.js`: İzole preview yönlendirme katmanı, Gözde ana sayfa preview rotası ve mock form koruması.
7. `src/analytics-router.js`: Preview ortamında yeni astroloji rotalarının legacy 301 yönlendirmelerinden korunması.
8. `wrangler.preview.jsonc`: Preview Worker ayrımı, `ASTROLOGY_PREVIEW_ENABLED: "true"`, `GOZDE_LAUNCH_ENABLED: "true"`.
9. `scripts/astrology-preview-test.mjs` & `scripts/verify-live-preview.mjs`: Otomatik regresyon ve canlı preview doğrulama suite'i.

---

## 5. Değişmeyen Sistemler ve Güvenlik Sınırları

- **Production Worker:** `mythborn` koduna, secret'larına ve varlıklarına deploy yapılmadı.
- **Production D1:** `mythborn-membership` veritabanı okuma/yazma/şema değişikliğine maruz kalmadı.
- **Production DNS/Domain:** `mythborn.co` domainine veya Cloudflare yönlendirmelerine dokunulmadı.
- **Formlar ve İletişim:** Preview ortamında tüm `/api/gozde-*` istekleri mock yanıt döndürür; veritabanına yazmaz, e-posta göndermez, CRM'e iletmez.

---

## 6. Bir Sonraki Güvenli Adım (Aşama 2 Planı)

Kullanıcı Aşama 2 için onay verdiğinde:
1. `src/data/major-cities.json` oluşturularak Türkiye'nin 81 ili ve 100 küresel başkent için çevrimdışı geocoding sözlüğü eklenecek.
2. `src/astrology.js` içindeki Open-Meteo isteğine yerel önbellek ve `AbortSignal.timeout(3500)` eklenecek.
3. `astronomy-engine` kütüphanesiyle geocentric ekliptik boylamlar, gezegen hızları, retro tespiti ve orblar hesaplanacak.
4. Yeni modüller yalnızca preview ortamında test edilecek; production'a dokunulmayacak.
