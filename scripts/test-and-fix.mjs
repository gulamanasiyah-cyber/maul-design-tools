import fs from 'node:fs';
import path from 'node:path';

const candidates = [
  // Grass textures
  {
    path: 'public/assets/blume/grass.jpg',
    url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1600&q=85'
  },
  // Meadow hero (lush green grass with white flowers)
  {
    path: 'public/assets/blume/meadow.jpg',
    url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1800&q=85'
  },
  // Alternate meadow topdown
  {
    path: 'public/assets/blume/meadow-topdown.jpg',
    url: 'https://images.unsplash.com/photo-1524055984587-430fca643e52?auto=format&fit=crop&w=1800&q=85'
  },
  // Harvestra soil
  {
    path: 'public/assets/harvestra/value1.jpg',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85'
  },
  // Solara arch turbine
  {
    path: 'public/assets/solara/arch-wind.jpg',
    url: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=85'
  },
  // Solara worker on solar panels
  {
    path: 'public/assets/solara/solar-worker.jpg',
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=85'
  }
];

async function run() {
  for (const item of candidates) {
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.resolve(item.path), Buffer.from(buf));
        console.log(`OK ${item.path} (${buf.byteLength} bytes)`);
      } else {
        console.log(`FAILED ${item.path}: ${res.status}`);
      }
    } catch (e) {
      console.log(`ERROR ${item.path}: ${e.message}`);
    }
  }
}

run();
