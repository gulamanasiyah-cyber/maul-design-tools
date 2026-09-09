import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/kidu');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Logo
  {
    name: 'logo-kidu.svg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/logo-kidu.svg?v=1709136279'
  },
  // Slide 1 main
  {
    name: 'slide-1-1.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/slide-1-1.png?v=1702562865&width=800'
  },
  // Slide 1 secondary
  {
    name: 'slide-1-2.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/slide-1-2.png?v=1702562865&width=800'
  },
  // Slide 2 main
  {
    name: 'slide-2-1.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/slide-2-1.png?v=1702563331&width=800'
  },
  // Slide 2 secondary
  {
    name: 'slide-2-2.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/slide-2-2.png?v=1702563330&width=600'
  },
  // Promotion Banners (Collage small)
  {
    name: 'banner-1-1.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-1-1.png?v=1702563772&width=900'
  },
  {
    name: 'banner-1-2.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-1-2.png?v=1702563771&width=900'
  },
  {
    name: 'banner-1-3.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-1-3.png?v=1702563772&width=900'
  },
  // Promotion Banners (Collage large 4 cards)
  {
    name: 'banner-2-1.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-2-1.png?v=1702564047&width=800'
  },
  {
    name: 'banner-2-2.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-2-2.png?v=1702564047&width=800'
  },
  {
    name: 'banner-2-3.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-2-3.png?v=1702564046&width=800'
  },
  {
    name: 'banner-2-4.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/banner-2-4.png?v=1702564046&width=800'
  },
  // Products
  {
    name: 'riceminty.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicemintyLittleLight1.jpg?v=1693925426&width=600'
  },
  {
    name: 'ricecarrot.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicepuddingLittleLight1.jpg?v=1693920596&width=600'
  },
  {
    name: 'strawberry-ricespud.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/StrawberryRicespudMiniPlushToy1.jpg?v=1693926400&width=600'
  },
  {
    name: 'mushroom.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/TheMushroomCollection4.jpg?v=1693920646&width=600'
  },
  {
    name: 'ricewebby.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicewebbyMiniPlushToy1.jpg?v=1693927367&width=600'
  },
  {
    name: 'ricespud.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicespudMiniPlushToy1.jpg?v=1693926135&width=600'
  },
  {
    name: 'ricemogu.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicemoguLittleLight1.jpg?v=1693924824&width=600'
  },
  {
    name: 'ricebamboo.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicebambooWaterBottle1.png?v=1693920540&width=600'
  },
  // Categories
  {
    name: 'cat-plush.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicepipaMiniPlushToy1.jpg?v=1693927121&width=400'
  },
  {
    name: 'cat-lights.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/RicelogiLittleLight1.jpg?v=1693922306&width=400'
  },
  {
    name: 'cat-acc.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/Ricemon-Pencil-Case.png?v=1704978958&width=400'
  },
  {
    name: 'cat-mask.jpg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/Riceturnip-2FaceMask.jpg?v=1693921383&width=400'
  },
  {
    name: 'cat-tape.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/Flash-Masking-Tape.png?v=1704814418&width=400'
  },
  // Age groups
  {
    name: 'age-1.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/collection-age-1.png?v=1713437880&width=300'
  },
  {
    name: 'age-2.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/collection-age-2.png?v=1713437880&width=300'
  },
  {
    name: 'age-3.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/collection-age-3.png?v=1713437880&width=300'
  },
  {
    name: 'age-4.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/collection-age-4.png?v=1713437880&width=300'
  },
  {
    name: 'age-5.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/collection-age-5.png?v=1713437880&width=300'
  },
  // Media with text
  {
    name: 'media-with-text.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/media-with-text.png?v=1702564814&width=800'
  },
  // Featured category sidebar
  {
    name: 'featured-tab-img.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/featured-tab-collection-img.png?v=1702564940&width=800'
  },
  // Gift cards
  {
    name: 'gift-white.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/product-white-friday.png?v=1702566412&width=600'
  },
  {
    name: 'gift-cyber.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/product-blessed-friday_96562891-f0bb-430a-b532-88195ed0dccb.png?v=1702566052&width=600'
  },
  {
    name: 'gift-newyear.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/product-new-year.png?v=1702566114&width=600'
  },
  {
    name: 'gift-blessed.png',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/product-blessed-friday.png?v=1702565904&width=600'
  },
  // Logos
  {
    name: 'brand-1.svg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/logo1.svg?v=1702387493'
  },
  {
    name: 'brand-2.svg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/logo2.svg?v=1702387493'
  },
  {
    name: 'brand-3.svg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/logo3.svg?v=1702387493'
  },
  {
    name: 'brand-4.svg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/logo4.svg?v=1702387493'
  },
  {
    name: 'brand-5.svg',
    url: 'https://kidu-default.myshopify.com/cdn/shop/files/logo5.svg?v=1702387492'
  }
];

async function run() {
  for (const item of assets) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.join(dir, item.name), Buffer.from(buf));
        console.log(`OK ${item.name} (${buf.byteLength} bytes)`);
      } else {
        console.log(`FAILED ${item.name}: ${res.status}`);
      }
    } catch (e) {
      console.log(`ERROR ${item.name}:`, e.message);
    }
  }
  console.log('All Kidu assets processed!');
}

run();
