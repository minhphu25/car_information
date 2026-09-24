import urllib.request
import json
import re

cars = [
    {"slug": "toyota-vios", "title": "Toyota_Vios"},
    {"slug": "honda-city", "title": "Honda_City"},
    {"slug": "hyundai-accent", "title": "Hyundai_Accent"},
    {"slug": "mazda-3", "title": "Mazda3"},
    {"slug": "kia-seltos", "title": "Kia_Seltos"},
    {"slug": "toyota-corolla-cross", "title": "Toyota_Corolla_Cross"},
    {"slug": "mitsubishi-xpander", "title": "Mitsubishi_Xpander"},
    {"slug": "ford-ranger", "title": "Ford_Ranger"},
    {"slug": "vinfast-vf8", "title": "VinFast_VF_8"},
    {"slug": "honda-crv", "title": "Honda_CR-V"},
    {"slug": "kia-carnival", "title": "Kia_Carnival"}
]

images = {}

for car in cars:
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={car['title']}&prop=pageimages&format=json&pithumbsize=800"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            page = list(pages.values())[0]
            if 'thumbnail' in page:
                images[car['slug']] = page['thumbnail']['source']
            else:
                images[car['slug']] = f"https://placehold.co/800x600/e2e8f0/475569?text={car['title']}"
    except Exception as e:
        images[car['slug']] = f"https://placehold.co/800x600/e2e8f0/475569?text={car['title']}"

with open('src/data/cars.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for slug, image_url in images.items():
    content = re.sub(r'(slug:\s*"' + slug + r'".*?image:\s*").*?(")', r'\1' + image_url + r'\2', content, flags=re.DOTALL)

with open('src/data/cars.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated images")
