import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const dir = path.resolve('public/assets/blume');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Hero meadow with white wildflowers
  {
    name: 'meadow.jpg',
    url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1800&q=85'
  },
  // Grass texture for cloud quote section
  {
    name: 'grass.jpg',
    url: 'https://images.unsplash.com/photo-1533460004989-acf295ce7c65?auto=format&fit=crop&w=1600&q=85'
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
  console.log('All blume assets processed!');
}

run();
