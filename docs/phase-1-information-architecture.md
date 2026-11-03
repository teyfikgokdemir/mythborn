# Mythborn.co — Aşama 1: Bilgi Mimarisi (Information Architecture)

Bu doküman, Mythborn'un “fal, kahve, tarot ve astrolojiyi bir arada sunan genel platform” algısından çıkarılıp, uluslararası standartlarda, saygın, bilimsel-kültürel derinliğe sahip **Astroloji Merkezli Premium Platform** haline getirilmesi için gerekli bilgi mimarisini tanımlar.

---

## 1. Temel Vizyon ve Konumlandırma Değişimi

- **Eski Konumlandırma:** Karışık fal, fincan sembolleri, tarot desteleri ve genel ezoterik karmaşa.
- **Yeni Konumlandırma:**
  - Açık kaynaklı matematiksel gökyüzü efemerisi (`astronomy-engine`).
  - 12 Burç, gezegen döngüleri, evler, açılar ve transit mekaniği.
  - Güneş, Ay ve Yükselen ekseninde kişiselleştirilmiş farkındalık.
  - Gezegen retroları, tutulmalar ve Ay fazları takvimi.
  - 5 dilde (TR, EN, EL, ES, AR) kültürel saygınlık ve etik danışmanlık ilkeleri.

---

## 2. Bilgi Hiyerarşisi ve Site Haritası (Sitemap Tree)

```text
mythborn.co (5 Dilde: /, /en, /gr, /es, /ar)
├── 1. GÖKYÜZÜ VE ASTROLOJİ ÇEKİRDEĞİ
│   ├── /dogum-haritasi (Natal Harita, Yükselen, MC, Gezegen Pozisyonları)
│   ├── /burclar (12 Burç Rehberi — Koç'tan Balık'a)
│   │   └── /burclar/[burc-slug] (Karakter, Element, Nitelik, Gezegen Yöneticisi)
│   ├── /gunluk-burc (Bugünün Gökyüzü ve Günlük Burç Yorumları)
│   ├── /haftalik-burc (Haftalık Transitler ve Burç Etkileri)
│   ├── /aylik-burc (Aylık Yeniay / Dolunay Odakları)
│   └── /yillik-burc (2027 / Yıllık Büyük Gezegen Döngüleri)
├── 2. GÖKYÜZÜ TAKVİMİ VE KOZMİK DÖNGÜLER
│   ├── /gokyuzu-takvimi (Ay Takvimi, Fazlar, Burç Geçişleri)
│   ├── /retrolar (Merkür, Venüs, Mars ve Dış Gezegen Retroları)
│   ├── /tutulmalar (Güneş ve Ay Tutulmaları Mevsimi)
│   └── /transitler (Güncel Gezegen Açıları ve Kolektif Temalar)
├── 3. İLİŞKİ VE ETKİLEŞİM DİNAMİKLERİ
│   └── /sinastri (İki Harita Arası Uyum, Çekim ve İletişim Açıları)
├── 4. BİLGİ BANKASI VE REHBERLER
│   ├── /astroloji-sozlugu (Evler, Açı Tipleri, Elementler, Terimler)
│   └── /rehberler (Blog / Derinlemesine Astroloji Makaleleri)
│       └── /rehberler/[slug] (10 Çekirdek Rehber)
├── 5. KURUMSAL, UZMANLIK VE YASAL
│   ├── /yaklasim (Yöntemimiz, Etik İlkeler, Astronomik Hesaplama Temeli)
│   ├── /hakkimizda (Gözde ve Mythborn Vizyonu)
│   ├── /iletisim (Ön İletişim ve Danışmanlık)
│   ├── /kvkk (6698 Sayılı KVKK Aydınlatma Metni)
│   ├── /gizlilik (Gizlilik ve Çerez Politikası)
│   └── /kullanim-kosullari (Kullanım Şartları ve Sorumluluk Reddi)
```

---

## 3. Global Navigasyon (Header & Footer) Mimarisi

### Masaüstü Üst Menü (Desktop Navigation)
- **Doğum Haritası** (`/dogum-haritasi`)
- **12 Burç** (`/burclar`)
- **Gökyüzü Takvimi** (`/gokyuzu-takvimi`)
- **Transitler & Retrolar** (`/transitler`)
- **Sinastri** (`/sinastri`)
- **Rehberler** (`/rehberler`)
- **Dil Değiştirici** (`TR` | `EN` | `GR` | `ES` | `AR`)
- **Hızlı Buton:** "Haritanı Çıkar →"

### Mobil Çekmece Menü (Mobile Drawer)
- İkonlu, temiz hiyerarşi; `hidden` ve `inert` erişilebilirlik standartlarına tam uyumlu.
- Burç hızlı geçiş barı.

### Footer Sütunları
1. **Astroloji Araçları:** Doğum Haritası, Sinastri, Günlük Gökyüzü, Retro Takvimi.
2. **12 Burç:** Koç, Boğa, İkizler, Yengeç, Aslan, Başak, Terazi, Akrep, Yay, Oğlak, Kova, Balık.
3. **Kütüphane & Rehber:** Astroloji Sözlüğü, Tutulma Rehberi, Gezegen Döngüleri, Blog.
4. **Kurumsal & Güvenlik:** Yaklaşımımız, İletişim, KVKK, Gizlilik, Kullanım Koşulları, Çerez Tercihleri.
5. **Alt İmza:** © 2026 MYTHBORN — QCT Commerce imzası ve dil bağlantıları.
