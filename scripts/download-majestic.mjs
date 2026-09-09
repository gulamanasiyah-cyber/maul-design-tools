import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/majestic');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  // Logos
  {
    name: 'logo-dark.svg',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Majestic_Logo_Dark.svg?v=1787990071&width=540'
  },
  {
    name: 'logo-light.svg',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Majestic_Logo.svg?v=1787990071&width=540'
  },
  // Hero Banner Main
  {
    name: 'hero-banner.jpg',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/hero-banner.jpg?v=1787990095&width=2200'
  },
  // Mega Menu Promo Images
  {
    name: 'menu-bedroom.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/collections/ChatGPT_Image_May_21_2026_11_15_23_AM.png?v=1788156597&width=760'
  },
  {
    name: 'menu-tables.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/collections/ChatGPT_Image_May_21_2026_11_59_23_AM-Picsart-AiImageEnhancer_fc2c6e2a-c147-45fc-875d-a33445426834.png?v=1788156742&width=760'
  },
  {
    name: 'menu-dining.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/collections/ChatGPT_Image_May_21_2026_11_25_16_AM.png?v=1788156624&width=760'
  },
  {
    name: 'menu-living.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/collections/ChatGPT_Image_May_21_2026_11_27_38_AM-Picsart-AiImageEnhancer.png?v=1788156640&width=760'
  },
  {
    name: 'menu-luxdining.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/collections/ChatGPT_Image_May_21_2026_11_31_48_AM-Picsart-AiImageEnhancer.png?v=1788156653&width=760'
  },
  // Products (Featured & Statement)
  {
    name: 'p-veloura.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Veloura_Two_Seater_Sofa.png?v=1787937212&width=720'
  },
  {
    name: 'p-aurelle.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Aurelle_Swivel_Lounge_Chair_cb4adf87-4354-42f2-98b1-9814536257f7.png?v=1787937212&width=720'
  },
  {
    name: 'p-verona.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Verona_Accent_Lounge_Chair.png?v=1787937210&width=720'
  },
  {
    name: 'p-arden.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Arden_Wooden_Accent_Chair.png?v=1787937207&width=720'
  },
  {
    name: 'p-haven.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Havenfabricsofawithbrassaccents-Picsart-AiImageEnhancer.png?v=1787937204&width=720'
  },
  {
    name: 'p-arc.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ModernScandinavianswivelarmchair-Picsart-AiImageEnhancer.png?v=1787937203&width=720'
  },
  {
    name: 'p-reign.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1471-Picsart-AiImageEnhancer.png?v=1787937189&width=720'
  },
  {
    name: 'p-velvet.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_1.png?v=1787937185&width=720'
  },
  {
    name: 'p-loft.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_12.png?v=1787937176&width=720'
  },
  {
    name: 'p-nordic.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_9.png?v=1787937179&width=720'
  },
  {
    name: 'p-pebble.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_3.png?v=1787937183&width=720'
  },
  {
    name: 'p-luma.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1458.png?v=1787937198&width=720'
  },
  {
    name: 'p-drift.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Mid-centurymodernsideboardwithbrassaccents-Picsart-AiImageEnhancer.png?v=1787937200&width=720'
  },
  {
    name: 'p-nest.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ModernScandinaviancoffeetable-Picsart-AiImageEnhancer.png?v=1787937201&width=720'
  },
  {
    name: 'p-elara.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1477-Picsart-AiImageEnhancer.png?v=1787937217&width=720'
  },
  {
    name: 'p-crest.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Modernminimalistqueenbedwithbrassbase-Picsart-AiImageEnhancer.png?v=1787937197&width=720'
  },
  {
    name: 'p-dusk.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ModernScandinavianbedsidetablewithdecor-Picsart-AiImageEnhancer.png?v=1787937195&width=720'
  },
  {
    name: 'p-mist.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Minimalistwardrobewithbrassbase-Picsart-AiImageEnhancer.png?v=1787937194&width=720'
  },
  {
    name: 'p-serene.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_14.png?v=1787937175&width=720'
  },
  {
    name: 'p-nero.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Nero_Marble_Dining_Table.png?v=1787937213&width=720'
  },
  {
    name: 'p-ember.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1470-Picsart-AiImageEnhancer.png?v=1787937190&width=720'
  },
  {
    name: 'p-alto.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1473-Picsart-AiImageEnhancer_ab297085-3c1b-4d5a-969a-1338e8991342.png?v=1787937188&width=720'
  },
  {
    name: 'p-marble.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer.png?v=1787937186&width=720'
  },
  {
    name: 'p-lunara.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Lunara_Round_Coffee_Table.png?v=1787937208&width=720'
  },
  {
    name: 'p-solenne.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Solenne_Sideboard_Console.png?v=1787937215&width=720'
  },
  {
    name: 'p-form.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_5.png?v=1787937182&width=720'
  },
  {
    name: 'p-stone.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/1476-Picsart-AiImageEnhancer_7.png?v=1787937181&width=720'
  },
  {
    name: 'p-celeste.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Celeste_Dining_Chair.png?v=1787937217&width=720'
  },
  // Selection Cards
  {
    name: 'sel-bedroom.jpg',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/pexels-_kopidikakigunung_-2156535846-34961766.jpg?v=1787990092&width=1600'
  },
  // Shop By Collection full-width backgrounds
  {
    name: 'sbc-living.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Living_Room_01.png?v=1787990162&width=2200'
  },
  {
    name: 'sbc-bedroom.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Bedroom_01.png?v=1787990159&width=2200'
  },
  {
    name: 'sbc-dining.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Dining_Room_01.png?v=1787990164&width=2200'
  },
  {
    name: 'sbc-seating.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Seating_01.png?v=1787990164&width=2200'
  },
  {
    name: 'sbc-storage.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Storage.png?v=1787990161&width=2200'
  },
  {
    name: 'sbc-tables.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Tables_01.png?v=1787990163&width=2200'
  },
  // Text With Image
  {
    name: 'twi-primary.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/Crafted_for_the_Way_You_Live.png?v=1787990164&width=1200'
  },
  {
    name: 'twi-secondary.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_15_2026_07_45_11_PM.png?v=1787990078&width=600'
  },
  // Image comparison (before / after)
  {
    name: 'compare-after.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/before.png?v=1787990165&width=1600'
  },
  {
    name: 'compare-before.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_17_2026_11_44_39_AM_1_-Picsart-AiImageEnhancer.png?v=1787990151&width=1600'
  },
  // FAQ side imagery
  {
    name: 'faq-main.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/faq.png?v=1787990166&width=1000'
  },
  {
    name: 'faq-secondary.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_15_2026_06_46_03_PM.png?v=1787990094&width=600'
  },
  // Testimonials
  {
    name: 'test-room-1.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_20_2026_11_56_39_PM.png?v=1787990115&width=1000'
  },
  {
    name: 'test-avatar-1.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_43_31_PM.png?v=1787990106&width=200'
  },
  {
    name: 'test-avatar-2.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_51_00_PM.png?v=1787990110&width=200'
  },
  {
    name: 'test-avatar-3.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_47_04_PM.png?v=1787990106&width=200'
  },
  {
    name: 'test-avatar-4.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_47_54_PM.png?v=1787990114&width=200'
  },
  // Blog cards
  {
    name: 'blog-1.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/articles/ChatGPT_Image_May_21_2026_12_14_21_AM.png?v=1788162712&width=800'
  },
  {
    name: 'blog-2.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/articles/ChatGPT_Image_May_21_2026_12_18_20_AM.png?v=1788162691&width=800'
  },
  {
    name: 'blog-3.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/articles/ChatGPT_Image_May_21_2026_12_17_33_AM.png?v=1788162664&width=800'
  },
  {
    name: 'blog-4.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/articles/ChatGPT_Image_May_21_2026_12_15_39_AM_c9245b35-2f8e-4f17-95b8-e60acbd3e13e.png?v=1788162701&width=800'
  },
  // Social Collage (4 tall cards)
  {
    name: 'social-1.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_35_51_PM.png?v=1787990110&width=800'
  },
  {
    name: 'social-2.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_37_32_PM.png?v=1787990116&width=800'
  },
  {
    name: 'social-3.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_39_00_PM.png?v=1787990113&width=800'
  },
  {
    name: 'social-4.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/ChatGPT_Image_May_25_2026_10_40_11_PM.png?v=1787990108&width=800'
  },
  // Email Signup Background
  {
    name: 'email-bg.png',
    url: 'https://majestic-template.myshopify.com/cdn/shop/files/email_signup.png?v=1787990150&width=1600'
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
  console.log('All Majestic Live Storefront assets processed!');
}

run();
