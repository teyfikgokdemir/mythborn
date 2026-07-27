# GitHub üzerinden otomatik Mythborn preview

Bu proje `.github/workflows/preview.yml` ile her pull request için isteğe bağlı Cloudflare Worker preview deploy edebilir.

## Gerekli GitHub secrets

Repository içinde **Settings → Secrets and variables → Actions → New repository secret** yolundan şu iki secret eklenir:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

API token yalnızca gerekli hesap ve Workers yetkileriyle sınırlandırılmalıdır. Token değeri hiçbir dosyaya veya commit mesajına yazılmamalıdır.

## Workflow davranışı

1. PR açıldığında veya yeni commit geldiğinde Node.js 20 kurulur.
2. `npm ci` çalışır.
3. `npm run check` ile tüm Mythborn audit’leri çalışır.
4. Cloudflare secret’ları mevcutsa benzersiz bir preview Worker deploy edilir.
5. Secret’lar yoksa workflow hata vermez; deploy adımının neden atlandığını job summary içinde gösterir.

Preview Worker adı şu biçimdedir:

```text
mythborn-preview-<PR_NUMARASI>-<KISA_COMMIT_SHA>
```

## D1 olmadan preview

İlk preview yalnızca arayüz, public sayfalar, mobil görünüm, SEO metadata, schema ve deneyimin ilk ücretsiz bölümünü test etmek için kullanılabilir.

D1 binding eklenmemişse üyelik API’leri bilinçli olarak `503` döndürür. Bu sahte kayıt veya sahte ödeme başarısı oluşmasını önler.

## D1 ile tam preview

Tam üyelik testi için preview Worker’a ayrı bir D1 veritabanı bağlanmalı ve şu migration’lar sırayla uygulanmalıdır:

```text
0001_membership.sql
0002_account_lifecycle.sql
0003_admin_operations.sql
0004_abuse_protection.sql
```

Production veritabanı preview ortamında kullanılmamalıdır.

## Preview kontrol listesi

- Ana sayfa ve mobil menü
- 390 px mobil görünüm
- Üç ücretsiz seçim
- Üyelik duvarı
- Kayıt ve giriş ekranları
- Turnstile görünümü
- Üye hesabı ve sonuç geçmişi
- Yönetici paneli yetki kontrolü
- Canonical, robots, sitemap ve JSON-LD
- Yatay taşma ve klavye kullanımı

## Production güvenliği

Preview sonucu onaylanmadan PR `main` branch’ine birleştirilmemelidir. Production deploy yalnız gerçek D1, ödeme, e-posta, Turnstile, yönetici e-postaları ve hukuk kontrolü tamamlandıktan sonra yapılmalıdır.
