# Mythborn.co — Devralma ve Süreklilik Dokümanı (Handoff)

Bu doküman, Mythborn platformunun başka bir yapay zekâ ajanı, yazılım mühendisi veya proje yöneticisi tarafından sıfır bilgi kaybıyla devralınabilmesi için hazırlanmıştır.

---

## 1. Temel Proje ve Git Bilgileri

- **Canlı (Production) URL:** `https://mythborn.co` (Değiştirilmedi)
- **Önizleme (Preview) URL:** `https://mythborn-preview.teyfikgokdemir.workers.dev` (Aşama 1 yayında)
- **Son Çalışan Baseline Commit:** `18484f3` (Canlıdaki sürüm)
- **Aşama 0 Checkpoint Commit:** `5e5d46d`
- **Aşama 0.1 Checkpoint Commit:** `a3d8c05`
- **Aktif Geliştirme Dalı:** `work/astrology-platform-phase0`
- **Preview Worker Adı:** `mythborn-preview`
- **Preview D1 Veritabanı:** `mythborn-membership-preview` (`82d3d933-282d-4369-b68e-cee26b66349b`)
- **Production Worker Adı:** `mythborn` (Dokunulmadı)
- **Production D1 Veritabanı:** `mythborn-membership` (`99490fbd-8f6c-4bf9-b5ed-bffdfdbd8771` - Dokunulmadı)

---

## 2. Çalıştırma, Test ve Dağıtım Komutları

```bash
# Kurulum
npm install

# Test ve Denetim (Tüm proje test suiti geçmek zorundadır)
npm run audit

# Aşama 1 Astroloji Preview Testi
node scripts/astrology-preview-test.mjs

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

- **Tamamlanan Aşama:** `Aşama 1` (Astroloji platformu frontend iskeleti, tasarım token'ları, 8 sayfa kabuğu, 5 dilli navigasyon, preview deployment).
- **Devam Eden Aşama:** Kullanıcı incelemesi ve Aşama 2 (Veri Çekirdeği) onayı bekleme.
- **Bekleyen Aşamalar:** Aşama 2 (Veri Çekirdeği), Aşama 3 (Burç Yorumları), Aşama 4 (SEO / 301), Aşama 5 (Ek Modüller).

---

## 4. Değişen ve Oluşturulan Dosyalar (Aşama 1)

1. `src/astrology-platform/tokens.js`: Kozmik lüks tasarım token'ları ve responsive CSS.
2. `src/astrology-platform/i18n.js`: 5 dil (TR, EN, EL, ES, AR) menü, başlık, uyarı ve 12 burç sözlüğü.
3. `src/astrology-platform/layout.js`: Header, footer, dil değiştirici ve mobil drawer layout bileşeni.
4. `src/astrology-platform/router.js`: Rota eşleştirici ve preview başlık yönetimi.
5. `src/astrology-platform/pages/home.js`: Astroloji ana sayfa kabuğu.
6. `src/astrology-platform/pages/natal-chart.js`: Doğum haritası sayfa kabuğu.
7. `src/astrology-platform/pages/zodiac.js`: 12 Burç fihristi kabuğu.
8. `src/astrology-platform/pages/sky-calendar.js`: Gökyüzü ve Ay takvimi kabuğu.
9. `src/astrology-platform/pages/retrogrades.js`: Gezegen retroları kabuğu.
10. `src/astrology-platform/pages/transits.js`: Gezegen transitleri ve açılar kabuğu.
11. `src/astrology-platform/pages/synastry.js`: Sinastri ilişki uyumu kabuğu.
12. `src/astrology-platform/pages/glossary.js`: Astroloji sözlüğü kabuğu.
13. `src/app-router.js`: Preview ortamında istekleri izole şekilde astroloji platformuna yönlendiren katman eklendi.
14. `wrangler.preview.jsonc`: Preview yapılandırması güncellendi.
15. `scripts/astrology-preview-test.mjs`: Aşama 1 otomasyon testi.
16. `scripts/verify-live-preview.mjs`: Canlı preview doğrulama aracı.
17. `docs/phase-1-implementation.md`: Aşama 1 uygulama ve preview dağıtım raporu.
18. `docs/progress.md`: Aşama takip matrisi güncellendi.
19. `docs/handoff.md`: Bu belge güncellendi.

---

## 5. Beş Dilin (TR, EN, EL/GR, ES, AR) Durumu

- **TR (Kaynak):** Tüm yeni astroloji sayfaları Türkçe olarak erişilebilir.
- **EN (`/en`):** İngilizce rota eşlenikleri ve navigasyon etiketleri aktif.
- **EL (`/gr`):** Yunanca rotalar `/gr` altında erişilebilir.
- **ES (`/es`):** İspanyolca sayfalar aktiftir.
- **AR (`/ar`):** Arapça sayfalar `dir="rtl"` ve aynalanmış sayfa düzeniyle çalışmaktadır.

---

## 6. Güvenlik, Gizlilik ve İzolasyon Durumu

- **Production İzolasyonu:** Production Worker (`mythborn`), Production D1 (`mythborn-membership`), `mythborn.co` domaini, SSL ve DNS ayarları kesinlikle değiştirilmemiştir.
- **Preview Güvenliği:** Preview sayfalarında `noindex, nofollow` başlığı zorunludur. Arama motorları preview ortamını indeksleyemez. Formlar test/mock modundadır; veritabanına yazılmaz, e-posta gönderilmez.
- **Ücretli Servisler:** Sıfır ücretli servis politikası korunmaktadır.

---

## 7. Kredi ve Bütçe Durumu

- **Toplam Bütçe:** 236 Kredi
- **Harcanan Kredi:** 47 Kredi
- **Kalan Kredi:** 189 Kredi

---

## 8. Geri Dönüş (Rollback) Yöntemi

Olası bir sorun anında aşağıdaki adımla anında bilinen son çalışan sürüme dönülebilir:
```bash
git checkout main
git reset --hard 18484f3
npm run deploy
```

---

## 9. Bir Sonraki En Küçük ve Güvenli Adım

**Aşama 2 Onayı:** Kullanıcıdan yazılı onay alındığında:
1. `astronomy-engine` yerel efemeris hesaplamalarını (Güneş, Ay, gezegen boylamları, hızları, retro tespiti, transit açıları, Ay evreleri) gerçekleştiren izole veri çekirdeğini (`src/astrology-platform/data-core.js`) kodlamak.
2. `docs/free-data-dependencies.md` belgesinde planlanan yerel şehir/koordinat JSON sözlüğünü (`src/data/major-cities.json`) ekleyerek Open-Meteo bağımlılığını offline-first hale getirmek.
3. Testleri koşturup preview ortamında doğrulamak.
