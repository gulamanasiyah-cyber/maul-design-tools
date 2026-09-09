import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/swiss');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Bauhaus / modern architectural grid facade
  {
    name: 'arch.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
  },
  // Laptop with charts / dashboard
  {
    name: 'laptop.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85'
  },
  // Minimalist desk with notebook / concrete
  {
    name: 'desk.jpg',
    url: 'https://images.unsplash.com/photo-1507842229451-77239c6427a9?auto=format&fit=crop&w=1200&q=85'
  }
];

async function run() {
  for (const item of assets) {
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
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
}

run();
