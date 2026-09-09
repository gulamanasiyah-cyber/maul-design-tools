import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/buoy');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Sunbeams underwater
  {
    name: 'sunbeams.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },
  // Deep blue abyss / cenote
  {
    name: 'abyss.jpg',
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80'
  },
  // Shipwreck
  {
    name: 'shipwreck.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80'
  },
  // Shipwreck detail
  {
    name: 'ship-detail.jpg',
    url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80'
  },
  // Manta / Diver
  {
    name: 'manta.jpg',
    url: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=600&q=80'
  },
  // Shark
  {
    name: 'shark.jpg',
    url: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=600&q=80'
  },
  // Dolphin
  {
    name: 'dolphin.jpg',
    url: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=600&q=80'
  },
  // Underwater sculpture / statue
  {
    name: 'statue.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80'
  },
  // Cave torch diver
  {
    name: 'cave.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=600&q=80'
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
  console.log('All buoy assets processed!');
}

run();
