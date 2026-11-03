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
| **Aşama 0** | Durum Tespiti, Envanter ve Koruma | `DONE` | `5e5d46d` | Sistem denetlendi, 7 çekirdek belge ve `.env.example` üretildi. |
| **Aşama 0.1** | Ek Doğrulama, Bağımlılık Analizi & Aşama 1 Dokümantasyonu | `DONE` | `a3d8c05` | Open-Meteo analizi, D1 yedek denetimi (`BLOCKED`), Aşama 1 mimari belgeleri ve kredi tahmini tamamlandı. |
| **Aşama 1** | Yeni Astroloji Mimarisi (Frontend İskeleti & Preview Deploy) | `DONE` | Bu Commit | 5 dilli frontend iskeleti, tasarım token'ları, 8 sayfa kabuğu hazırlandı; preview ortamına (`mythborn-preview`) dağıtıldı. Production'a dokunulmadı. |
| **Aşama 2** | Otomatik Gökyüzü Veri Çekirdeği (Astronomy Engine) | `BLOCKED` (Onay Bekliyor) | Beklemede | Ücretli API kullanılmayacak. Aşama 1 onayı ve yerel geocoding offline önbellek tasarımı bekleniyor. |
| **Aşama 3** | Otomatik Burç Yorumları (5 Dilli Kural Tabanlı İçerik) | `BLOCKED` | Beklemede | Yasaklı kehanet kuralları, 12 burç şablonları, 5 dil çeviri denetimi ve pilot çalışma uygulanacak. |
| **Aşama 4** | SEO, Kanonik Yapı ve 301 Geçişi | `BLOCKED` | Beklemede | Semantik 301 yönlendirme matrisi, redirect loop/chain testleri, Search Console ve sitemap doğrulaması. |
| **Aşama 5** | Sonraki Özellikler (Doğum Haritası UI, Sinastri, Transitler) | `BLOCKED` | Beklemede | Kredi ve bütçe elverirse tek tek checkpoint'lerle eklenecek. |

---

## ✦ Canlı Veritabanı ve Production Durumu

- **Production Dağıtımı:** `BLOCKED` — Kullanıcı onayı olmadan canlıya (`mythborn.co`) deploy yapılmaz.
- **D1 Canlı Tablo Değişikliği:** `BLOCKED` — Canlı veritabanı yedeği olmadan canlı şema değiştirilemez.

---

## ✦ Kontrol Noktaları ve Kredi Yönetimi

- **Toplam Bütçe:** 236 Kredi
- **Harcanan Kredi:** 47 Kredi (Aşama 0: 12 + Aşama 0.1: 10 + Aşama 1 Kodlama/Preview: 25)
- **Kalan Kredi:** 189 Kredi
- **Durdurma İlkesi:** Her aşama sonunda çalışan ara sürüm bırakılır, `npm run audit` koşturulur, durum raporu kullanıcıya sunulur ve onay alınana kadar durulur.
- **Geri Dönüş (Rollback):** Her aşama `docs/rollback-plan.md` belgesindeki tek komutluk geri dönüş garantisine sahiptir.
