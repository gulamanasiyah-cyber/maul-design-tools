import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/balky');

async function run() {
  const urls = [
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.join(dir, 'box.jpg'), Buffer.from(buf));
        console.log(`OK box.jpg (${buf.byteLength} bytes)`);
        break;
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
  }
}

run();
