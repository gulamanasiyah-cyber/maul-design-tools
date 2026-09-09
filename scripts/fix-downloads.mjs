import fs from 'node:fs';
import path from 'node:path';

const downloads = [
  {
    path: 'public/assets/blume/grass.jpg',
    url: 'https://images.unsplash.com/photo-1533460004989-acf295ce7c65?auto=format&fit=crop&w=1600&q=80'
  },
  {
    path: 'public/assets/blume/meadow.jpg',
    url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80'
  },
  {
    path: 'public/assets/harvestra/value1.jpg',
    url: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80'
  },
  {
    path: 'public/assets/solara/arch-wind.jpg',
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80'
  },
  {
    path: 'public/assets/solara/solar-worker.jpg',
    url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80'
  }
];

async function run() {
  for (const item of downloads) {
    try {
      console.log(`Fetching ${item.path}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${item.path}: HTTP ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(path.resolve(item.path), Buffer.from(buffer));
      console.log(`Saved ${item.path} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error ${item.path}:`, e.message);
    }
  }
}

run();
