# Mythborn.co — Global İçerik Mimarisi ve Rota Şartnamesi

**Tarih:** 2026-11-04  
**Hedef:** Kalitesiz içerik çiftliklerinden (content farm) ayrışan, kullanıcı sorununu doğrudan çözen, P0/P1/P2 hiyerarşisine oturtulmuş 5 dilli editoryal ve araç mimarisi.

---

## 1. Sayfa Kartları ve Dil Standartları

### Yasaklanan İfadeler ve Doğal Kart Dili:
- ❌ **Yasak:** "Koç 12 Burç", "Boğa 12 Burç" gibi yapay ve SEO dolgusu kokan ifadeler tamamen kaldırılmıştır.
- ✅ **Standart:** 
  - Türkçe: `Koç Burcu Rehberi` / `Koç için Günün Teması` / `Öncü Ateş Arketipleri`
  - İngilizce: `Aries Archetype & Guide` / `Today's Theme for Aries`
  - İspanyolca: `Guía del Signo Aries` / `Tema de Hoy para Aries`
  - Yunanca: `Οδηγός Κριού` / `Το Σημερινό Θέμα του Κριού`
  - Arapça: `دليل برج الحمل` / `طاقة اليوم لبرج الحمل`

### 24 Saat Zaman Standardı (AM / PM Kesinlikle Kullanılmaz):
- Tüm tarih ve saat gösterimleri 5 dilde mutlak **24 saat formatında** (`14:30`, `08:45`, `21:15`) olacaktır.
- `AM`, `PM`, `a.m.`, `p.m.` kısaltmaları kullanılmayacaktır.
- Temel zaman referansı `Europe/Istanbul` (UTC+3), global kullanıcılara rehberlik için parantez içinde `UTC` dökümü yer alacaktır (Örnek: `15 Kasım 2026, 21:45 TSI (18:45 UTC)`).

---

## 2. Öncelik Matrisi (P0 / P1 / P2)

### ✦ P0: Çekirdek Platform (Temel Ürün & Yüksek Talep)

| Rota (TR / EN) | Arama Niyeti | Kullanıcı Değeri | Güncelleme Sıklığı | Otomasyon Seviyesi | 5 Dil Durumu |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` <br> `/{lang}` | Platformu tanıma, haritaya başlama | 3 saniyede değer anlama, tek tıkla harita formuna erişim | Statik / Dinamik güncel döngüler | Kural Tabanlı Şablon | TR, EN, EL, ES, AR |
| `/dogum-haritasi` <br> `/{lang}/birth-chart` | Doğum haritası ve yükselen hesaplama | Hassas ASC, DSC, MC, IC ve gezegen evleri dökümü | Talep anında (hesaplayıcı) | %100 Deterministik Efemeris | TR, EN, EL, ES, AR |
| `/burclar` <br> `/{lang}/zodiac-signs` | 12 burç özelliklerini ve arketiplerini öğrenme | Element, nitelik, yönetici gezegen ve gölge yönleri | Kalıcı editoryal rehber | Statik Editoryal | TR, EN, EL, ES, AR |
| `/burclar/{sign}` <br> `/{lang}/zodiac/{sign}` | Tek bir burcun derin analizi | Kariyer, ilişki, gelişim ve haftalık odak teması | Haftalık yenilenen kural teması | Hibrit (Veri + Şablon) | TR, EN, EL, ES, AR |
| `/gokyuzu-takvimi` <br> `/{lang}/sky-calendar` | Ay evreleri, yeniay, dolunay takvimi | Niyet ve hasat günleri, burç derecesi | Aylık / Yıllık otomatik hesap | %100 Astronomik Hesap | TR, EN, EL, ES, AR |
| `/retrolar` <br> `/{lang}/retrogrades` | Merkür, Venüs, Mars retro takvimi | Gölge dönemleri, duraklama günleri kontrol listesi | Yıllık takvim (2026-2027) | %100 Efemeris Hız Tespiti | TR, EN, EL, ES, AR |
| `/astroloji-sozlugu` <br> `/{lang}/glossary` | Terimleri anlama (ASC, stelyum, orb) | Karmaşık kavramları yalın Türkçe/İngilizce ile öğrenme | Kalıcı kütüphane | Statik Editoryal | TR, EN, EL, ES, AR |

---

### ✦ P1: Derinleşme ve İlişki Katmanı (İkinci Dalga)

| Rota (TR / EN) | Arama Niyeti | Kullanıcı Değeri | Güncelleme Sıklığı | Otomasyon Seviyesi | 5 Dil Durumu |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/sinastri` <br> `/{lang}/synastry` | Çift haritası ve ilişki uyumu | İki doğum haritası arasındaki açı orbları ve ev temasları | Talep anında | Deterministik Açı Karşılaştırma | TR, EN, EL, ES, AR |
| `/transitler` <br> `/{lang}/transits` | Bugün gökyüzünde ne oluyor? | Anlık gökyüzünün 12 burcun evlerine yaptığı canlı açılar | Günlük | Canlı Efemeris Motoru | TR, EN, EL, ES, AR |
| `/ogrenme-merkezi` <br> `/{lang}/learn` | Adım adım harita okuma rehberi | Başlangıç ve orta seviye yapılandırılmış eğitim içerikleri | Aylık editoryal eklemeler | Editoryal İnceleme | TR, EN, EL, ES, AR |
| `/kariyer-ve-yon` <br> `/{lang}/career` | 10. ev, MC ve Satürn analizi | Profesyonel yetenekler ve mesleki tatmin yolları | Kalıcı rehber | Şablon Matrisi | TR, EN, EL, ES, AR |

---

### ✦ P2: Gelişmiş Modüller ve Topluluk (Gelecek Yol Haritası)

- `/solar-return` (Güneş Dönüşü / Yıllık Harita)
- `/seçim-astrolojisi` (Electional Astrology / Doğru Zamanı Seçme)
- `/vedik-karsilastirma` (Tropikal ve Sideral Sistem Farklılıkları Raporu)
- `/kisisel-rapor` (PDF formatında arşivlenebilir lüks harita dökümü)

---

## 3. "Kullanıcı Bunu Neden Mythborn'da Kullanmalı?" Sorusu

Her sayfa ve araç için geçerli kalite filtresi:
1. **Gereksiz Çöp İçerik Yoktur:** Kullanıcıyı 10 tık boyunca gezdiren sahte sayfalar yoktur. Doğrudan hesaplar, doğrudan açıklar.
2. **Korku Tacirliği Yoktur:** Kullanıcıyı paniğe sevk eden kehanetler barındırmaz. Her zorlu açı (kare/karşıt) bir "gelişim fırsatı ve psikolojik farkındalık alanı" olarak aktarılır.
3. **Akademik Şeffaflık:** Haritanın hangi efemerisle, hangi ev sistemiyle (Whole Sign / Placidus) çıkarıldığı açıkça kullanıcı kontrolündedir.
