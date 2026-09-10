import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/burb');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const CDN = 'https://uploads-ssl.webflow.com/';
const SITE = '625d7ea5a2315526615fcda4/';
const CMS = '625d7ea5a231558eac5fcdba/';
const OLD = '621f2ca02dcd4cfb31c1ad00/';

const assets = [
  // Brand chrome
  { name: 'logo.svg', url: CDN + SITE + '625d7ea5a23155581d5fcdd4_logo.svg' },
  { name: 'menu.svg', url: CDN + SITE + '625d7ea5a2315512c45fcdff_menu.svg' },
  { name: 'close-menu.svg', url: CDN + OLD + '62298b484b543c682da23e64_close.svg' },
  { name: 'favicon.png', url: CDN + SITE + '625d7ea5a2315523545fcdfe_favicon.png' },
  { name: 'modal-close.webp', url: CDN + SITE + '62d89d1d3b5e6e7fb1010193_x.webp' },

  // Hero
  { name: 'lady.webp', url: CDN + SITE + '625d7ea5a231553b3b5fce56_lady.webp' },
  { name: 'handwrench.png', url: CDN + SITE + '634f2e282c80e4ab68946584_handwrench.png' },
  { name: 'hero-img.webp', url: CDN + SITE + '625d7ea5a23155f9ed5fcdd5_hero-img.webp' },
  { name: 'hero-img-500.webp', url: CDN + SITE + '625d7ea5a23155f9ed5fcdd5_hero-img-p-500.webp' },
  { name: 'hero-img-800.webp', url: CDN + SITE + '625d7ea5a23155f9ed5fcdd5_hero-img-p-800.webp' },
  { name: 'dot.webp', url: CDN + SITE + '625d7ea5a231556c9e5fce99_dot.webp' },
  { name: 'dot-500.png', url: CDN + SITE + '625d7ea5a231556c9e5fce99_dot-p-500.png' },
  { name: 'dot-1080.png', url: CDN + SITE + '625d7ea5a231556c9e5fce99_dot-p-1080.png' },
  { name: 'dot-1600.webp', url: CDN + SITE + '625d7ea5a231556c9e5fce99_dot-p-1600.webp' },
  { name: 'dot-arc.svg', url: CDN + SITE + '625d7ea5a23155f30f5fcddf_dot.svg' },

  // Feature cards
  { name: 'chart2x.png', url: CDN + SITE + '625d7ea5a2315567ec5fcdeb_chart2x.png' },
  { name: 'chart2x-800.webp', url: CDN + SITE + '6269c00b30debc2771531704_625d7ea5a2315567ec5fcdeb_chart2x-p-800.webp' },
  { name: 'chart2x-500.webp', url: CDN + SITE + '6269c00b30debc2771531704_625d7ea5a2315567ec5fcdeb_chart2x-p-800-p-500.webp' },
  { name: 'fashion-school.webp', url: CDN + SITE + '6269c00bdd0bf286365d12ff_625d7ea5a231551fde5fcde2_fashion-schoo-p-800.webp' },
  { name: 'fashion-school-500.webp', url: CDN + SITE + '6269c00bdd0bf286365d12ff_625d7ea5a231551fde5fcde2_fashion-schoo-p-800-p-500.webp' },
  { name: 'group.webp', url: CDN + SITE + '625d7ea5a2315587c75fcde7_group.webp' },
  { name: 'group-500.webp', url: CDN + SITE + '625d7ea5a2315587c75fcde7_group-p-500.webp' },
  { name: 'group-800.webp', url: CDN + SITE + '625d7ea5a2315587c75fcde7_group-p-800.webp' },
  { name: 'gather-everything.webp', url: CDN + SITE + '625d7ea5a23155224f5fcde8_gather-everything.webp' },
  { name: 'gather-everything-500.webp', url: CDN + SITE + '625d7ea5a23155224f5fcde8_gather-everything-p-500.webp' },
  { name: 'gather-everything-800.webp', url: CDN + SITE + '625d7ea5a23155224f5fcde8_gather-everything-p-800.webp' },
  { name: 'gather-everything-1080.webp', url: CDN + SITE + '625d7ea5a23155224f5fcde8_gather-everything-p-1080.webp' },
  { name: 'declunkify.webp', url: CDN + SITE + '625d7ea5a23155261a5fcde9_declunkify.webp' },
  { name: 'declunkify-500.webp', url: CDN + SITE + '625d7ea5a23155261a5fcde9_declunkify-p-500.webp' },
  { name: 'declunkify-800.webp', url: CDN + SITE + '625d7ea5a23155261a5fcde9_declunkify-p-800.webp' },
  { name: 'declunkify-1080.webp', url: CDN + SITE + '625d7ea5a23155261a5fcde9_declunkify-p-1080.webp' },

  // How it works
  { name: 'team.webp', url: CDN + SITE + '6269c00b3dc70420a0b7111d_625d7ea5a23155570d5fcdea_team.webp' },
  { name: 'team-500.webp', url: CDN + SITE + '6269c00b3dc70420a0b7111d_625d7ea5a23155570d5fcdea_team-p-500.webp' },
  { name: 'step1.webp', url: CDN + SITE + '625d7ea5a2315559e65fcdf3_step1.webp' },
  { name: 'step1-500.webp', url: CDN + SITE + '625d7ea5a2315559e65fcdf3_step1-p-500.webp' },
  { name: 'step2.webp', url: CDN + SITE + '625d7ea5a23155b9d05fcdf1_step2.webp' },
  { name: 'step2-500.webp', url: CDN + SITE + '625d7ea5a23155b9d05fcdf1_step2-p-500.webp' },
  { name: 'step3.webp', url: CDN + SITE + '625d7ea5a23155e85f5fcdf2_step3.webp' },
  { name: 'step3-500.webp', url: CDN + SITE + '625d7ea5a23155e85f5fcdf2_step3-p-500.webp' },

  // Testimonial people
  { name: 'nivi-achanta.png', url: CDN + CMS + '625d7ea5a2315513c15fcee5_nivi-achanta.png' },
  { name: 'tatiana-figueiredo.png', url: CDN + CMS + '625d7ea5a2315562865fceec_tatiana-figueiredo.png' },
  { name: 'jillian-benbow.png', url: CDN + CMS + '625d7ea5a2315579d25fcee4_jillian-benbow.png' },
  { name: 'bryony-cole.png', url: CDN + CMS + '625d7ea5a23155582a5fcde6_bryony-cole.png' },
  { name: 'carrie-melissa-jones.png', url: CDN + CMS + '625d7ea5a23155a4005fceca_carrie-melissa-jones.png' },
  { name: 'spi.svg', url: CDN + CMS + '625d7ea5a2315561315fcee6_spi.svg' },
  { name: 'sextech-school.png', url: CDN + CMS + '625d7ea5a2315566385fcee7_sextech-school.png' },
  { name: 'cmj.png', url: CDN + CMS + '625d7ea5a2315596385fcee8_cmj.png' },

  // Integration logos
  { name: 'slack.svg', url: CDN + CMS + '625d7ea5a23155a42c5fcdfa_slack.svg' },
  { name: 'circle.svg', url: CDN + CMS + '625d7ea5a23155b50c5fce34_cricle.svg' },
  { name: 'discord.svg', url: CDN + CMS + '625d7ea5a2315528fd5fce0e_discrod.svg' },
  { name: 'google.svg', url: CDN + CMS + '625d7ea5a23155da8e5fce20_google.svg' },
  { name: 'convertkit.svg', url: CDN + CMS + '625d7ea5a2315568745fce6b_convertkit.svg' },
  { name: 'typeform.png', url: CDN + CMS + '6360205c2118d60ac001795a_Typeform logo white.png' },
  { name: 'typeform-500.png', url: CDN + CMS + '6360205c2118d60ac001795a_Typeform logo white-p-500.png' },
  { name: 'thinkific.svg', url: CDN + CMS + '625d7ea5a2315573f05fce47_thinkfic.svg' },
  { name: 'teachable.svg', url: CDN + CMS + '625d7ea5a23155166a5fce5a_teachable.svg' },

  // Footer
  { name: 'jointeam.webp', url: CDN + SITE + '625d7ea5a2315566795fce52_jointeam.webp' },
  { name: 'jointeam-500.webp', url: CDN + SITE + '625d7ea5a2315566795fce52_jointeam-p-500.webp' },
  { name: 'jointeam-800.webp', url: CDN + SITE + '625d7ea5a2315566795fce52_jointeam-p-800.webp' },
  { name: 'twittericon.svg', url: CDN + SITE + '625d7ea5a2315537505fcdf6_twittericon.svg' },
  { name: 'instagram.webp', url: CDN + SITE + '62aa21af5ac6c13cdc053b75_instagram logo svg.webp' },
  { name: 'tiktok.svg', url: CDN + SITE + '62aa22e2fdba6fd9ff95a7b1_logo-tiktok.svg' },
  { name: 'facebook.svg', url: CDN + SITE + '625d7ea5a23155a2975fcdf5_facebook.svg' },

  // Inline-style heading faces / misc
  { name: 'gabrielle.png', url: CDN + OLD + '62208ef708941c0409876227_gabrielle.png' },
  { name: 'house.png', url: CDN + OLD + '623d9dc33d2b8f4305c8c321_house.png' },
  { name: 'drill-1.png', url: CDN + OLD + '623d9f8080be4a89c7fcecf6_drill%201.png' },
  { name: 'calvar-martinez.png', url: CDN + OLD + '623db7e145d38f3efa48b479_calvar-martinez.png' }
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
  console.log('All Burb assets processed!');
}

run();
