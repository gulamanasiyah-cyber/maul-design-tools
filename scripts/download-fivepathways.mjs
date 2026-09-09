import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const outDir = path.resolve('public/assets/fivepathways');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const assets = [
  { url: 'https://fivepathways.com/arrow.svg', file: 'arrow.svg' },
  { url: 'https://fivepathways.com/bbb-5-stars.svg', file: 'bbb-5-stars.svg' },
  { url: 'https://fivepathways.com/bbb.svg', file: 'bbb.svg' },
  { url: 'https://www.datocms-assets.com/103914/1728401496-cbs_news.png', file: 'cbs-news.png' },
  { url: 'https://www.datocms-assets.com/103914/1727355076-yahoo.svg', file: 'yahoo.svg' },
  { url: 'https://www.datocms-assets.com/103914/1727304624-nasdaq.svg', file: 'nasdaq.svg' },
  { url: 'https://www.datocms-assets.com/103914/1727353121-aol.svg', file: 'aol.svg' },
  { url: 'https://www.datocms-assets.com/103914/1727354968-go-banking-rates.png', file: 'gobankingrates.png' },
  { url: 'https://www.datocms-assets.com/103914/1727354668-newsbreak.png', file: 'newsbreak.png' },
  { url: 'https://www.datocms-assets.com/103914/1732549922-msn-logo.png', file: 'msn.png' },
  { url: 'https://www.datocms-assets.com/103914/1740163511-aarp_logo_2023.svg', file: 'aarp.svg' },
  { url: 'https://www.datocms-assets.com/103914/1705949745-why-we-are-different-2.jpg?fit=max&fm=jpg&h=1000&w=1000', file: 'why-different.jpg' },
  { url: 'https://www.datocms-assets.com/103914/1690985171-logo-allianz.png', file: 'partner-allianz.png' },
  { url: 'https://www.datocms-assets.com/103914/1690986427-logo-annexus.png', file: 'partner-annexus.png' },
  { url: 'https://www.datocms-assets.com/103914/1690988032-logo-athene.png', file: 'partner-athene.png' },
  { url: 'https://www.datocms-assets.com/103914/1690988073-logo-corebridge.png', file: 'partner-corebridge.png' },
  { url: 'https://www.datocms-assets.com/103914/1692124333-nationwide.png', file: 'partner-nationwide.png' },
  { url: 'https://www.datocms-assets.com/103914/1690988480-logo-north-american.png', file: 'partner-north-american.png' },
  { url: 'https://www.datocms-assets.com/103914/1693833191-logo-fidelity.png', file: 'partner-fidelity.png' },
  { url: 'https://www.datocms-assets.com/103914/1693833202-logo-vanguard.png', file: 'partner-vanguard.png' },
  { url: 'https://www.datocms-assets.com/103914/1729802409-cbs.jpg?fit=max&fm=jpg&h=600&w=600', file: 'insight-cbs.jpg' },
  { url: 'https://www.datocms-assets.com/103914/1727362470-scams.jpg?fit=max&fm=jpg&h=600&w=600', file: 'insight-scams.jpg' },
  { url: 'https://www.datocms-assets.com/103914/1727288760-surprise-expenses-in-retirement.jpg?fit=max&fm=jpg&h=600&w=600', file: 'insight-surprise.jpg' },
  { url: 'https://www.datocms-assets.com/103914/1691432345-asset-283-2x.png?fit=max&fm=png&h=600&w=600', file: 'product-income.png' },
  { url: 'https://www.datocms-assets.com/103914/1691432349-asset-284-2x.png?fit=max&fm=png&h=600&w=600', file: 'product-legacy.png' },
  { url: 'https://www.datocms-assets.com/103914/1691432357-asset-286-2x.png?fit=max&fm=png&h=600&w=600', file: 'product-aum.png' },
  { url: 'https://www.datocms-assets.com/103914/1691432353-asset-285-2x.png?fit=max&fm=png&h=600&w=600', file: 'product-ltc.png' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const a of assets) {
    const dest = path.join(outDir, a.file);
    try {
      await download(a.url, dest);
      console.log(`Downloaded ${a.file}`);
    } catch (e) {
      console.error(`Failed ${a.file}:`, e.message);
    }
  }
}

run();
