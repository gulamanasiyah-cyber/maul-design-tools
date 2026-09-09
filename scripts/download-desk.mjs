import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/swiss');

async function run() {
  const urls = [
    'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=85'
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.join(dir, 'desk.jpg'), Buffer.from(buf));
        console.log(`OK desk.jpg (${buf.byteLength} bytes)`);
        break;
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
  }
}

run();
