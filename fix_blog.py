path = "src/blog.js"
with open(path, "r") as f:
    content = f.read()

content = content.replace("export { blogRoutes, blogMeta, blogFaqs, blogDates, blogPage };", "")

if "export const blogRoutes" not in content:
    footer = """
export const blogRoutes=['/blog',...articles.map(a=>`/blog/${a.slug}`)];
export const blogMeta=Object.fromEntries([['/blog',['Astroloji, Tarot ve Gökyüzü Blogu','2026 gökyüzü gündemi, sinastri, astrokartografi, travma-bilinçli astroloji ve Tarot rehberleri.']],...articles.map(a=>[`/blog/${a.slug}`,[a.title,a.dek]])]);
export const blogDates=Object.fromEntries(articles.map(a=>[`/blog/${a.slug}`,a.date]));
export const blogFaqs=Object.fromEntries(articles.map(a=>[`/blog/${a.slug}`,a.faq]));
export function blogPage(path){
  if(path==='/blog') return shell('Mythborn Blog','Astroloji ve Tarot rehberleri','<section class="blog-hero"><p class="eyebrow">GÖKYÜZÜ GÜNDEMİ · DERİN REHBERLER</p><h1>Bugünün merakını, yarının arşivine dönüştür.</h1><p class="lead left-lead">Güncel gökyüzü olayları, ilişki astrolojisi, etik ve kişisel farkındalık üzerine özgün uzun form içerikler.</p></section><section class="blog-grid">' + articles.map(a=>`<article class="blog-card"><small>${a.tags.join(' · ')}</small><h2>${esc(a.title)}</h2><p>${esc(a.dek)}</p><a href="/blog/${a.slug}">Yazıyı oku →</a></article>`).join('') + '</section>');
  const a=articles.find(x=>path==='/blog/'+x.slug);
  if(!a) return null;
  return shell(a.title,a.dek,'<article class="article"><a href="/blog">← Tüm yazılar</a><p class="article-tags">' + a.tags.join(' · ') + '</p><h1>' + esc(a.title) + '</h1><p class="article-meta">MYTHBORN EDITORIAL DESK · ' + a.date + '</p><p class="article-lead">' + esc(a.dek) + '</p><div class="article-body">' + a.sections.map(([h,p])=>`<section><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`).join('') + '<section class="article-faq"><p class="eyebrow">SIK SORULANLAR</p><h2>Konuyla ilgili kısa yanıtlar.</h2>' + a.faq.map(([q,r])=>`<details><summary>${esc(q)}</summary><p>${esc(r)}</p></details>`).join('') + '</section><div class="article-links">' + a.links.map(([t,u])=>`<a href="${u}">${esc(t)} →</a>`).join('') + '</div><p class="article-note">Bu içerik eğlence, eğitim ve kişisel farkındalık amaçlıdır. Astroloji bilimsel bir tanı veya tedavi yerine geçmez.</p></article>');
}
"""
    content += footer

with open(path, "w") as f:
    f.write(content)
print("Blog.js fixed successfully via python script")
