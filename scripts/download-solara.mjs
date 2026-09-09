import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const dir = path.resolve('public/assets/solara');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Hero wind turbine in field under blue sky with clouds
  {
    name: 'hero-wind.jpg',
    url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=85'
  },
  // Feature 1: Wind turbine on rolling hill
  {
    name: 'wind-turbine.jpg',
    url: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=600&q=80'
  },
  // Feature 2: Solar panel technician on roof
  {
    name: 'solar-worker.jpg',
    url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80'
  },
  // Feature 3: House with rooftop solar
  {
    name: 'solar-roof.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
  },
  // Central Arch: Solitary wind turbine
  {
    name: 'arch-wind.jpg',
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=85'
  },
  // Project: Modern villa with pool at dusk
  {
    name: 'project-villa.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  // Avatar 1: Young man
  {
    name: 'avatar-man.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  // Avatar 2: Woman portrait
  {
    name: 'avatar-woman.jpg',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
  },
  // FAQ thumbnail
  {
    name: 'faq-wind.jpg',
    url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80'
  },
  // CTA wind farm sunset
  {
    name: 'cta-turbines.jpg',
    url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85'
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
  console.log('All solara assets processed!');
}

run();
