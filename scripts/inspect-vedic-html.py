from pathlib import Path
from bs4 import BeautifulSoup

path = Path('/home/ubuntu/browser_html/mythborn_co_vedik-astroloji_1786718678214.html')
soup = BeautifulSoup(path.read_text(), 'html.parser')
for selector in ['header', 'main', 'main > section', '.vedic-page', '.vedic-hero', '.vedic-reading', '.vedic-knowledge-layer', '.sponsor-band', 'footer', '.site-footer-grid', '.site-footer-logo', '.site-footer-guardian']:
    nodes = soup.select(selector)
    print(f'\nSELECTOR {selector} count={len(nodes)}')
    for node in nodes[:8]:
        classes=' '.join(node.get('class', []))
        print(f'  tag={node.name} id={node.get("id","")} class={classes} parent={node.parent.name if node.parent else ""} text={" ".join(node.get_text(" ", strip=True).split())[:160]}')
print('\nLINKS')
for link in soup.select('header a, footer a')[:30]:
    print(link.get('href'), ' '.join(link.get_text(' ', strip=True).split())[:80])
