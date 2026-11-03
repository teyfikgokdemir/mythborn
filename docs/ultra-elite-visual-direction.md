# Mythborn.co — Ultra Elit Görsel Sanat Yönetimi ve Tasarım Sistemi

**Tarih:** 2026-11-04  
**Hedef:** Ucuz mor neonlardan, klon hazır şablonlardan ve spiritüel gürültüden arınmış; Kinfolk, Aesop ve The Row editoryal zarafeti ile NASA JPL astronomi hassasiyetini buluşturan küresel bir görsel kimlik.

---

## 1. Üç Farklı Tasarım Yönü ve Gerekçeli Seçim

### Yön A: "Obsidian & Celestial Gold" (Kozmik Gece Lüksü — SEÇİLEN YÖN)
- **Karakter:** Derin obsidyen siyahı zemin, fırçalanmış antika altın vurgular, yıldız tozu krem tipografi. Sessiz, aristokrat, mistik ama disiplinli.
- **Arka Plan:** `#06070a` (Obsidyen uzay) ve `#0d1017` (Nebula yüzey kartları).
- **Vurgular:** `#d4af37` / `#c5a059` (Göksel mat altın) ve `#7b88a3` (Yıldız tozu platin).
- **Tipografi:** Cormorant Garamond / Canela Display (Display Serif) + Inter / Cabinet Grotesk (Gövde Sans).
- **Seçim Gerekçesi:** 5 dilin (özellikle Arapça ve Yunanca kaligrafik zenginliğin) lüks algısını en yüksek seviyede yansıtır; gözü yormaz, gece harita okumaya mükemmel uyum sağlar.

### Yön B: "Parchment & Astronomical Ink" (Helenistik El Yazması & Matbaa)
- **Karakter:** Sıcak krem/fildişi açık tema, mürekkep siyahı astronomik gravürler, Rönesans gök haritası estetiği.
- **Arka Plan:** `#f9f6f0` (Parşömen) ve `#1a1a1a` (Matbaa siyahı).
- **Değerlendirme:** Çok şık ancak ekran başında uzun süreli doğum haritası ve gece gökyüzü inceleyen kullanıcılar için karanlık temanın verdiği derin uzay hissini sağlamaz.

### Yön C: "Monochrome Brutalism" (Co-Star Tarzı Katı Minimalizm)
- **Karakter:** Sadece saf siyah `#000000` ve saf beyaz `#ffffff`. Yüksek kontrast, sert çizgiler.
- **Değerlendirme:** Z kuşağı için çarpıcı olsa da sıcaklıktan, empati duygusundan ve Doğu Akdeniz / Helenistik / Mezopotamya astrolojik mirasından kopuktur.

---

## 2. Seçilen Tasarım Yönünün Temel Öğeleri

### 1. Renk Paleti (CSS Değişkenleri)
```css
:root {
  --bg-abyss: #050608;          /* En derin arka plan */
  --bg-surface: #0a0d14;        /* Kart ve panel zeminleri */
  --bg-surface-elevated: #111522; /* Hover ve modal yüzeyleri */
  --border-subtle: rgba(212, 175, 55, 0.12); /* İnce altın çizgi */
  --border-active: rgba(212, 175, 55, 0.35); /* Odaklanmış altın çizgi */
  --gold-primary: #d4af37;      /* Göksel altın */
  --gold-muted: #a68940;        /* İkincil metalik ton */
  --text-primary: #f5f2eb;      /* Yıldız tozu fildişi */
  --text-secondary: #9aa3b2;    /* Nötr gök mavisi gri */
  --text-tertiary: #5d6677;     /* Yardımcı etiket metni */
  --accent-starlight: #e2e8f0;  /* Yıldız ışığı parlaklığı */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

### 2. Tipografi Hiyerarşisi
- **Display Başlıklar (H1, H2, H3):** *Cormorant Garamond* (web güvenli fallback: *Georgia, "Times New Roman", serif*). Harf aralığı zarif, satır yüksekliği `1.15 - 1.25`, font ağırlığı `400 - 500`.
- **Gövde Metinleri ve Veri:** *Inter* veya *system-ui* (fallback: *-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif*). Mükemmel okunabilirlik, `15px - 17px` gövde boyutu, `1.6` satır aralığı.
- **Arapça Tipografi (RTL):** Arapça için *Amiri* veya *IBM Plex Sans Arabic* fallback'i (`font-feature-settings: "cv01"`). Arapça başlıklar doğal hattat zarafetiyle sunulur, yapay Latinize harflerden kaçınılır.

### 3. Grid ve Boşluk (Spacing) Sistemi
- **Container Genişliği:** Maksimum `1200px` (Okuma odaklı sayfalarda `760px`).
- **Ritim:** `8px` modüler skala (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Negatif Alan (Whitespace):** Sayfalar metin yığını gibi sıkışık olmayacak; her analiz kartı ve burç arketipi nefes alabilecektir.

### 4. Kartlar ve Yüzeyler
- **Glassmorphism:** `background: rgba(10, 13, 20, 0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);`
- **Border İnce İşçilik:** `1px solid var(--border-subtle)` ve hover anında yumuşak altın geçişi.
- **Gölge:** `box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.6);`

### 5. Buton ve Etkileşim Dili
- **Birincil CTA:** Dolgulu antika altın (`#d4af37`), siyah metin (`#050608`), hafif iç ışıma (`inset 0 1px 0 rgba(255,255,255,0.3)`), `8px` kavis, `font-weight: 500`.
- **İkincil CTA:** İnce altın kenarlıklı saydam yüzey (`rgba(212, 175, 55, 0.15)`), altın rengi metin.
- **Hover Efekti:** 200ms yumuşak renk ve hafif yukarı kayma (`transform: translateY(-1px)`).

### 6. Zodyak İkonografisi ve Çizim Dili
- **Asla Kullanılmayacak:** Çizgi film karakteri burç figürleri veya kaba emoji ikonları.
- **Kullanılacak:** 1 piksel ince çizgili, matematiksel geometrik takımyıldız ve antik glif çizimleri (Saf SVG formatında, sıfır harici font yükü).

### 7. Doğum Haritası Çarkı (SVG Wheel)
- Dış çember: 12 Burç evi, dereceler ve yönler (ASC, DSC, MC, IC).
- İç çember: Gezegen glifleri ve tam derece/dakika konumları.
- Merkez: Açı çizgileri (Trine için yumuşak mavi/yeşil, Square/Opposition için asil yakut kırmızısı, Conjunction için altın sarısı).

### 8. Arapça (RTL) Görsel Düzeni
- CSS mantıksal özellikleri (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`).
- Okuma akışı sağdan sola, ikon yönleri ve chevron okları aynalanmış (`transform: scaleX(-1)`).
- Tipografik boyutlar Latin alfabesine göre %8-10 daha cömert ve ferah.
