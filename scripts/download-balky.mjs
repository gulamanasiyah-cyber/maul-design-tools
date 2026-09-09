import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/balky');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Street poster / wooden board mockup
  {
    name: 'poster.jpg',
    url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80'
  },
  // Floating booklet / card mockup
  {
    name: 'booklet.jpg',
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
  },
  // Dark luxury box mockup
  {
    name: 'box.jpg',
    url: 'https://images.unsplash.com/photo-1507842229451-77239c6427a9?auto=format&fit=crop&w=800&q=80'
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
  console.log('All balky assets processed!');
}

run();
