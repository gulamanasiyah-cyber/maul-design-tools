import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const dir = path.resolve('public/assets/wanderly');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Hero: Woman in white dress and straw hat overlooking sea / Santorini
  {
    name: 'hero-santorini.jpg',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85'
  },
  // Destination 1: Bali Ulun Danu
  {
    name: 'bali.jpg',
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
  },
  // Destination 2: Switzerland Alpine Lake
  {
    name: 'switzerland.jpg',
    url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80'
  },
  // Destination 3: Santorini blue dome
  {
    name: 'santorini.jpg',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
  },
  // Categories
  {
    name: 'cat-beach.jpg',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'cat-mountain.jpg',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'cat-city.jpg',
    url: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'cat-cultural.jpg',
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'cat-safari.jpg',
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'cat-cruise.jpg',
    url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80'
  },
  // Promo diver
  {
    name: 'promo-diver.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
  },
  // Deals
  {
    name: 'deal-maldives.jpg',
    url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'deal-paris.jpg',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'deal-dubai.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'deal-iceland.jpg',
    url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80'
  },
  // Blog / Articles
  {
    name: 'blog-huts.jpg',
    url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-gems.jpg',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-rules.jpg',
    url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
  },
  // 3D Luggage / Plane
  {
    name: 'luggage-3d.png',
    url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Luggage.png'
  },
  {
    name: 'airplane-3d.png',
    url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Airplane.png'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dir, item.name);
    const file = fs.createWriteStream(filePath);
    const req = https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${item.name}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(filePath, () => {});
          reject(err);
        });
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${item.name}`);
        resolve();
      });
    });
    req.on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of assets) {
    try {
      await download(item);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
  console.log('All assets processed!');
}

run();
