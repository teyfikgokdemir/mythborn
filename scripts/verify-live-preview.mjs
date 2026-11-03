const check = async () => {
  const previewHome = await fetch('https://mythborn-preview.teyfikgokdemir.workers.dev/', { headers: { 'cache-control': 'no-cache' } });
  const previewHomeText = await previewHome.text();
  console.log('Preview / status:', previewHome.status);
  console.log('Preview / x-robots-tag:', previewHome.headers.get('x-robots-tag'));
  console.log('Preview / has noindex meta:', previewHomeText.includes('<meta name="robots" content="noindex, nofollow">'));
  console.log('Preview / has astrology title:', previewHomeText.includes('Doğum Haritası'));

  const previewAr = await fetch('https://mythborn-preview.teyfikgokdemir.workers.dev/ar', { headers: { 'cache-control': 'no-cache' } });
  const previewArText = await previewAr.text();
  console.log('Preview /ar status:', previewAr.status);
  console.log('Preview /ar has dir="rtl":', previewArText.includes('dir="rtl"'));

  const prodHome = await fetch('https://mythborn.co/', { headers: { 'cache-control': 'no-cache' } });
  const prodHomeText = await prodHome.text();
  console.log('Production / status:', prodHome.status);
  console.log('Production / is untouched Gözde platform:', prodHomeText.includes('Gözde'));
};

check().catch(console.error);
