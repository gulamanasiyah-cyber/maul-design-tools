import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/uzbekistan');

async function run() {
  const urls = [
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.join(dir, 'tile.jpg'), Buffer.from(buf));
        console.log(`OK tile.jpg (${buf.byteLength} bytes)`);
        break;
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
  }
}

run();
