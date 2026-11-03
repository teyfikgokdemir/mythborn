# Mythborn.co — Devralma ve Süreklilik Dokümanı (Handoff)

Bu doküman, Mythborn platformunun başka bir yapay zekâ ajanı, yazılım mühendisi veya proje yöneticisi tarafından sıfır bilgi kaybıyla devralınabilmesi için hazırlanmıştır.

---

## 1. Temel Proje ve Git Bilgileri

- **Canlı (Production) URL:** `https://mythborn.co` (Kesinlikle dokunulmadı)
- **Önizleme (Preview) URL:** `https://mythborn-preview.teyfikgokdemir.workers.dev` (Aşama 1 yayında)
- **Son Çalışan Baseline Commit:** `18484f3` (Canlıdaki sürüm)
- **Aşama 0 Checkpoint Commit:** `5e5d46d`
- **Aşama 0.1 Checkpoint Commit:** `a3d8c05`
- **Aşama 1 Checkpoint Commit:** `a9062ce` / `54a561e`
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

## 3. Strateji ve Mimari Dokümantasyon Envanteri

Proje kökündeki `docs/` klasöründe yer alan strateji ve mimari belgeler:

1. [`docs/global-astrology-demand-research.md`](file:///C:/Users/teyfi/mythborn/docs/global-astrology-demand-research.md): 6 Pazar (TR, US/CA, UK/EU, ES/LATAM, EL, AR) talep ve LLM soru analizi.
2. [`docs/global-search-and-ai-question-map.csv`](file:///C:/Users/teyfi/mythborn/docs/global-search-and-ai-question-map.csv): Çok dilli arama ve yapay zekâ sorguları öncelik matrisi.
3. [`docs/competitor-and-premium-benchmark.md`](file:///C:/Users/teyfi/mythborn/docs/competitor-and-premium-benchmark.md): 8 Global lider, 5 yerel platform analizi ve farklılaşma matrisi.
4. [`docs/mythborn-positioning-and-first-3-seconds.md`](file:///C:/Users/teyfi/mythborn/docs/mythborn-positioning-and-first-3-seconds.md): İlk 3 saniye hero stratejisi, 5 alternatif ve tek CTA önerisi.
5. [`docs/ultra-elite-visual-direction.md`](file:///C:/Users/teyfi/mythborn/docs/ultra-elite-visual-direction.md): "Obsidian & Celestial Gold" görsel sanat yönetimi, renkler ve tipografi.
6. [`docs/visual-assets-plan.md`](file:///C:/Users/teyfi/mythborn/docs/visual-assets-plan.md): Vektör SVG, kamu malı uzay haritaları ve matematiksel harita çizim planı.
7. [`docs/global-content-architecture.md`](file:///C:/Users/teyfi/mythborn/docs/global-content-architecture.md): P0/P1/P2 içerik ve rota şartnamesi, 24 saat kuralı, doğal kart dili.
8. [`docs/five-language-content-strategy.md`](file:///C:/Users/teyfi/mythborn/docs/five-language-content-strategy.md): 5 dil terminoloji sözlüğü, Arapça RTL kuralları ve eşitlik kapısı.
9. [`docs/free-automation-architecture.md`](file:///C:/Users/teyfi/mythborn/docs/free-automation-architecture.md): `astronomy-engine`, yerel şehir sözlüğü ve kural tabanlı yorum mimarisi.
10. [`docs/phase-2-implementation-plan.md`](file:///C:/Users/teyfi/mythborn/docs/phase-2-implementation-plan.md): Aşama 2 (Veri Çekirdeği) iş adımları ve kabul kriterleri.
11. [`docs/phase-2-credit-budget.md`](file:///C:/Users/teyfi/mythborn/docs/phase-2-credit-budget.md): Kredi takip tablosu (182 Kredi bakiye).
12. [`docs/progress.md`](file:///C:/Users/teyfi/mythborn/docs/progress.md): Aşamalar ve anlık durum takibi.
13. [`docs/rollback-plan.md`](file:///C:/Users/teyfi/mythborn/docs/rollback-plan.md): Tek komutluk geri dönüş planı.

---

## 4. Değişmeyen Sistemler ve Güvenlik Sınırları

- **Production Worker:** `mythborn` koduna, secret'larına ve varlıklarına deploy yapılmadı.
- **Production D1:** `mythborn-membership` veritabanı okuma/yazma/şema değişikliğine maruz kalmadı.
- **Production DNS/Domain:** `mythborn.co` domainine veya Cloudflare yönlendirmelerine dokunulmadı.
- **Kod Değişikliği:** Bu oturumda hiçbir kod değişikliği veya görsel üretimi yapılmadı; yalnızca `docs/` altında araştırma ve planlama dosyaları üretildi.

---

## 5. Bir Sonraki Güvenli Adım (Aşama 2 Başlangıcı)

Kullanıcı Aşama 2 için onay verdiğinde:
1. `src/data/major-cities.json` oluşturularak Türkiye'nin 81 ili ve 100 küresel başkent için çevrimdışı geocoding sözlüğü eklenecek.
2. `src/astrology.js` içindeki Open-Meteo isteğine yerel önbellek ve `AbortSignal.timeout(3500)` eklenecek.
3. `astronomy-engine` kütüphanesiyle geocentric ekliptik boylamlar, gezegen hızları, retro tespiti ve orblar hesaplanacak.
4. Yeni modüller yalnızca preview ortamında test edilecek; production'a kesinlikle dokunulmayacak.
