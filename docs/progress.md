# Mythborn.co — Aşama ve İlerleme Takip Tablosu

Bu dosya, projenin kredili ve güvenli yürütülmesini sağlamak için her aşamanın anlık durumunu, tamamlanma kriterlerini ve kontrol noktalarını belgeler.

**Durum Kodları:**
- `DONE`: Aşama eksiksiz tamamlandı, tüm testler ve belgeler hazır.
- `IN PROGRESS`: Üzerinde aktif çalışılan aşama / planlama.
- `BLOCKED`: Başlamadan önce engel veya ön koşul bekleyen aşama / canlı müdahale yasağı.
- `NOT VERIFIED`: Doğrulanmamış veya üçüncü taraf riski taşıyan durum.

---

## ✦ Aşama Takip Tablosu

| Aşama No | Aşama Tanımı | Durum | Git Commit / Checkpoint | Notlar ve Güvenlik Sınırları |
| :--- | :--- | :---: | :--- | :--- |
| **Aşama 0** | Durum Tespiti, Envanter ve Koruma | `DONE` | `5e5d46d` | Sistem denetlendi, 7 çekirdek belge ve `.env.example` üretildi. Canlı siteye yıkıcı işlem yapılmadı. |
| **Aşama 0.1** | Ek Doğrulama, Bağımlılık Analizi & Aşama 1 Dokümantasyonu | `DONE` | Bu Commit | Open-Meteo analizi, D1 yedek denetimi (`BLOCKED`), Aşama 1 mimari belgeleri ve kredi tahmini tamamlandı. |
| **Aşama 1** | Yeni Astroloji Mimarisi (Bilgi Mimarisi & Kodlama) | `IN PROGRESS` (Kodlama İçin Onay Bekliyor) | Beklemede | 5 dilli bilgi mimarisi, route planı ve veri modeli hazırlandı. Canlı koda ve tasarıma henüz dokunulmadı. |
| **Aşama 2** | Otomatik Gökyüzü Veri Çekirdeği (Astronomy Engine) | `BLOCKED` | Beklemede | Ücretli API kullanılmayacak. Aşama 1 kodlama onayı ve yerel geocoding önbellek tasarımı bekleniyor. |
| **Aşama 3** | Otomatik Burç Yorumları (5 Dilli Kural Tabanlı İçerik) | `BLOCKED` | Beklemede | Yasaklı kehanet kuralları, 12 burç şablonları, 5 dil çeviri denetimi ve pilot çalışma uygulanacak. |
| **Aşama 4** | SEO, Kanonik Yapı ve 301 Geçişi | `BLOCKED` | Beklemede | Semantik 301 yönlendirme matrisi, redirect loop/chain testleri, Search Console ve sitemap doğrulaması. |
| **Aşama 5** | Sonraki Özellikler (Doğum Haritası UI, Sinastri, Transitler) | `BLOCKED` | Beklemede | Kredi ve bütçe elverirse tek tek checkpoint'lerle eklenecek. |

---

## ✦ Canlı Veritabanı (D1) Durumu

- **D1 Canlı Tablo Değişikliği:** `BLOCKED` — Canlı veritabanının repoda doğrulanmış bir yerel SQL yedeği olmadığı için canlı veritabanında hiçbir schema değişikliği veya migrasyon yapılamaz.

---

## ✦ Kontrol Noktaları ve Kredi Yönetimi

- **Toplam Bütçe:** 236 Kredi
- **Harcanan Kredi:** 22 Kredi (Aşama 0: 12 Kredi + Aşama 0.1: 10 Kredi)
- **Kalan Kredi:** 214 Kredi
- **Durdurma İlkesi:** Her aşama sonunda çalışan ara sürüm bırakılır, `npm run audit` koşturulur, durum raporu kullanıcıya sunulur ve onay alınana kadar durulur.
- **Geri Dönüş (Rollback):** Her aşama `docs/rollback-plan.md` belgesindeki tek komutluk geri dönüş garantisine sahiptir.
