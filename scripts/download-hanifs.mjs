import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/assets/hanifs');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const B = 'https://framerusercontent.com/images/';
const F = 'https://framerusercontent.com/assets/';

const assets = [
  // Brand
  { name: 'logo.png', url: B + 'm0KpT3NujMEBpaXed9qkOe5YiU.png' },
  { name: 'logo-footer.png', url: B + 'BehWGQ9zJcNln848kPQdOiHikR8.png' },
  { name: 'favicon.png', url: B + 'W7olquZaggLX4HqFV8tdQCSm18Q.png' },
  { name: 'bird.png', url: B + 'v9pFN2Y92ZYkXCYGkH28qMwAQkc.png' },

  // Hero product slideshow (paired with stickers, site order)
  { name: 'prod-crispy-onions.webp', url: B + 'UHA6h9YVCVvCkmpAzevOOfXNA.webp' },
  { name: 'prod-basmati-rice.webp', url: B + 'kNus0bB8fwaqoACKRbBm8itI.webp' },
  { name: 'prod-tamarind.png', url: B + 'nFHyTkFKgyWFW77fkQouyElpxS0.png' },
  { name: 'prod-mango-puree.png', url: B + 'lLcMuBQ1576uBfmHQUhBDVzQmqw.png' },
  { name: 'prod-demerara.webp', url: B + 'eMKo3EmiFr6dYki0XCSnrerUvk.webp' },
  { name: 'prod-mango-chutney.webp', url: B + 'SLgEpAdsqZuj43jxJCUYlaB33k.webp' },
  { name: 'prod-saffron.webp', url: B + 'u7y0yjMffdyFuvTSCmyeT1UfEZA.webp' },
  { name: 'prod-muscovado.webp', url: B + 'UpoqCD3fLPfJCWgbPNLulUVaJTY.webp' },

  // Product stickers
  { name: 'sticker-crispy.webp', url: B + 'ubK2s3OUGaBBWLO5FlgUcOskqQ.webp' },
  { name: 'sticker-rice.png', url: B + 'wiZCa4P0GsUboc5qxduhmwYbg.png' },
  { name: 'sticker-tamarind.png', url: B + '2O3ihDLuMLCs3YJ2wpt9GCKwDg.png' },
  { name: 'sticker-mango-puree.png', url: B + 'STL0MxmgeTnYLWluUWabI4VeUg.png' },
  { name: 'sticker-demerara.png', url: B + '9kz85Hn9plBYrrVlMLRNe2cmGs.png' },
  { name: 'sticker-mango-chutney.png', url: B + 'RooGIiBquMta7n1yrdhJ3Dv2c8.png' },
  { name: 'sticker-saffron.webp', url: B + 's8eyBPK64M4O8oY6eXRv2Z3wGC0.webp' },
  { name: 'sticker-muscovado.png', url: B + 'hGpOWmM0junDH1mkkNpU7Qb8Vc.png' },

  // Stars & arrows
  { name: 'stars-1.png', url: B + 'IykhO1Y6vLVPJ3MvFtzMFT28P4.png' },
  { name: 'stars-2.png', url: B + 'NseN8g5CEliYCdBjnQ4f4GPXYUA.png' },
  { name: 'stars-3.png', url: B + 's94orZDjWtJYLMZSVThDmfgMKA.png' },
  { name: 'arrow-a.png', url: B + 'c12Mez5cQ5jm11M81Nm60hnzlaA.png' },
  { name: 'arrow-b.png', url: B + 'nYPbUKPqe7LADZgYAG672UvX14.png' },
  { name: 'arrow-c.png', url: B + 'IfjCRNgeVKF4zo4kYiidsbdd2s.png' },
  { name: 'arrow-d.png', url: B + '2axXxxCM4LHeKx8wk7loWPR84hQ.png' },
  { name: 'arrow-e.png', url: B + 'PtyzGrHtcalzmc6meO8DHMfxLA.png' },
  { name: 'arrow-mark.png', url: B + '4w1r8wbiGS5fyZ8CtoslYYVzU.png' },
  { name: 'arrow-doodle-1.png', url: B + 'i8MTG2QcrwiRzF07bgJixGl2w.png' },
  { name: 'arrow-doodle-2.png', url: B + 'DFg2Uv8d6DoGCXzKa5D0wZo0SbQ.png' },
  { name: 'arrow-back.svg', url: B + '6tTbkXggWgQCAJ4DO2QEdXXmgM.svg' },
  { name: 'arrow-next.svg', url: B + '11KSGbIZoRSg4pjdnUoif6MKHI.svg' },
  { name: 'arrow-cta-1.png', url: B + 'aUJ2WL4GK9ASx8TI22B62VBnR8.png' },
  { name: 'arrow-cta-2.png', url: B + 'eFt668BhjIyZHjUE9B1xoU3KDwo.png' },
  { name: 'arrow-cta-3.png', url: B + 'i2Ks6zSzRrXM4GkjNTXe6YktPY.png' },
  { name: 'arrow-cta-4.png', url: B + 'IxHh7NKLyTwdwqRLQ3kdptegsOs.png' },
  { name: 'arrow-cta-5.png', url: B + '0hTiFJhUM5QvnBnn4JWDnb118vU.png' },
  { name: 'arrow-cta-6.png', url: B + '6zeNsUbbvWh7ChvxVpQ1Gm4.png' },
  { name: 'arrow-btn-1.png', url: B + 'L55IFewQIZk6jb2vGaF24482w.png' },
  { name: 'arrow-btn-2.png', url: B + 'YkPb0kG2k9BI0VPQLrpujFk5n8.png' },
  { name: 'arrow-sm.png', url: B + '4mZNbAx8Oce7LFJfrJtjbnyg09c.png' },
  { name: 'icon-phone.png', url: B + 'bMEtZfjihtIDZMbeXRcNqaKDAA.png' },

  // About photos
  { name: 'about-kitchen.webp', url: B + '29ybhxADBQhG4I9y6hulI904me4.webp' },
  { name: 'about-founder.webp', url: B + '0P9dbBPcxV4Rjo8fE1XzaPJuU.webp' },
  { name: 'about-cooking.webp', url: B + 'n6oqEgM6v52yTgDGc1aGJjZ62Tc.webp' },

  // Recipe cards
  { name: 'recipe-wings.webp', url: B + 'Qsl3rtklE8b9OIL64CNCrvKyY.webp' },
  { name: 'recipe-taco.webp', url: B + 'GmWDrU0V7rvvMt9uDYKqXPivcoY.webp' },
  { name: 'recipe-lassi.webp', url: B + 'riWMKPM9fxfdslMF3Q6f0GoKNaE.webp' },
  { name: 'recipe-cookie.webp', url: B + 'nh3HYu4tDWqgZ57Ma07sh9KjXo8.webp' },
  { name: 'recipe-toastie.webp', url: B + 'jZDDnC2RyOJztU7tnGl4Wpc6yE4.webp' },
  { name: 'recipe-rice.webp', url: B + 'INFIqJqQa1wSKDbnJ7Anuo54qPY.webp' },

  // Stores
  { name: 'store-logo-1.png', url: B + 'aaph3nv8eEOJ4JS1eSXNW48H0.png' },
  { name: 'store-logo-2.png', url: B + 'Cq9zmuM67Wuc7B7b7lvYzGgjKrs.png' },
  { name: 'store-logo-3.png', url: B + 'OCtfliLYCt1Nea3ucnuY20OwVvI.png' },
  { name: 'store-photo-1.webp', url: B + '9It47Xxx3FgZQvxJGTt0B0Dk2TI.webp' },
  { name: 'store-photo-2.webp', url: B + 'bwRFbDnjlrVfqiRjAbWhd4ziMmE.webp' },
  { name: 'store-photo-3.webp', url: B + 'hTwAn3RTsm5DI0C97hMRpFgUNs0.webp' },

  // Testimonial line illustrations
  { name: 'ill-line-1.webp', url: B + 'jHmbnaGROJnaEgWjlnoleUag.webp' },
  { name: 'ill-line-2.webp', url: B + 'DhrqAml1iIdhyryHRYnhFuPHE.webp' },
  { name: 'ill-line-3.webp', url: B + 'Ghpw2JKykTZ1IRsfQkJmNbHv28.webp' },
  { name: 'ill-line-4.webp', url: B + '1yGRDlotNhAC2GWQVjdHdEL6Xaw.webp' },
  { name: 'ill-food-bowl.webp', url: B + 'ApsBTECHiV14n8HfRd5lswyoE.webp' },

  // Instagram grid
  { name: 'insta-story.webp', url: B + 'zfzrP6J1AzwXENic23hn78mgB8w.webp' },
  { name: 'insta-portrait-1.webp', url: B + '2KoxMNOGVEyjYe5U0dX2sYkOwE0.webp' },
  { name: 'insta-portrait-2.png', url: B + 'CxZGlRkMJzjAGjbjKEIK4WeJDjw.png' },
  { name: 'insta-landscape-1.webp', url: B + 'NHRaIyuClm5SC6EIzIovpB43FuQ.webp' },
  { name: 'insta-landscape-2.webp', url: B + 'zkEZT2fWZzEuSxlFKJAyLp6w7Y.webp' },
  { name: 'insta-landscape-3.png', url: B + 'zwA1Ew1rgQPPDDoZ8Wc628UpzB0.png' },
  { name: 'insta-square.webp', url: B + 'iYdNEw1S4ZLxmKduQNamD5gG0M.webp' },

  // Misc
  { name: 'misc.png', url: B + '6mcf62RlDfRfU61Yg5vb2pefpi4.png' },

  // Script accent font (free personal-use font as hosted by the site)
  { name: 'feeling-passionate.woff2', url: F + 'gXWp9FiOpTFb88mG5KTAfU37JYI.woff2' }
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
  console.log('All Hanifs assets processed!');
}

run();
