import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const dir = path.resolve('public/assets/harvestra');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Hero: Aerial view of green circular farmland
  {
    name: 'hero.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85'
  },
  // Hero thumbnails
  {
    name: 'thumb1.jpg',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'thumb2.jpg',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'thumb3.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80'
  },
  // Service 1: Green wheat / barley crop
  {
    name: 'service1.jpg',
    url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=85'
  },
  // Service 2: Tractor spraying field
  {
    name: 'service2.jpg',
    url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
  },
  // Service 3: Tractor from rear
  {
    name: 'service3.jpg',
    url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80'
  },
  // Value 1: Hands holding soil
  {
    name: 'value1.jpg',
    url: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80'
  },
  // Value 2: Furrowed soil / field
  {
    name: 'value2.jpg',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  },
  // Value 3: Green agricultural landscape
  {
    name: 'value3.jpg',
    url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80'
  },
  // Harvesting aerial combine harvester in circular patterns
  {
    name: 'harvesting.jpg',
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=85'
  },
  // Darrell Steward Avatar
  {
    name: 'avatar.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  // Silage bales in field
  {
    name: 'silage.jpg',
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80'
  },
  // Blog 2: Tractor at sunset
  {
    name: 'blog2.jpg',
    url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80'
  },
  // CTA bg: Aerial tractor plowing
  {
    name: 'cta-bg.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85'
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
    req.error = (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    };
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
  console.log('All harvestra assets processed!');
}

run();
