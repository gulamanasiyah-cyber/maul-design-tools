import fs from 'node:fs';
import path from 'node:path';

// Archive https://www.hanifsfoods.com/ as a local mirror:
// public/mirror/hanifsfoods/index.html  (rewritten URLS)
// public/mirror/hanifsfoods/_f/...      (every framerusercontent + gstatic file)
const ROOT = path.resolve('public/mirror/hanifsfoods');
const A = path.join(ROOT, '_f');
if (!fs.existsSync(A)) fs.mkdirSync(A, { recursive: true });

const SRC = process.env.TEMP + '/opencode/hanifs.html';
let html = fs.readFileSync(SRC, 'utf8');

// 1. collect every remote asset URL
const urls = new Set();
for (const m of html.matchAll(/https:\/\/framerusercontent\.com\/[^"'\s\\<>)]+/g)) urls.add(m[0]);
for (const m of html.matchAll(/https:\/\/fonts\.gstatic\.com\/[^"'\s\\<>)]+/g)) urls.add(m[0]);
console.log('unique remote urls:', urls.size);

function localFor(url) {
  if (url.startsWith('https://framerusercontent.com/')) {
    return '/mirror/hanifsfoods/_f/' + url.slice('https://framerusercontent.com/'.length).split('?')[0];
  }
  // gstatic font
  const file = url.split('/').pop().split('?')[0];
  return '/mirror/hanifsfoods/_f/gstatic/' + file;
}

// 2. download everything (strip query for storage; keep query in rewritten refs — static server ignores it)
let ok = 0, fail = 0;
for (const url of urls) {
  const local = localFor(url); // starts with /mirror/hanifsfoods/_f/
  const dest = path.join(ROOT, local.replace('/mirror/hanifsfoods/_f/', ''));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest)) { ok++; continue; }
  const bare = url.split('?')[0];
  let res = await fetch(bare, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok && bare !== url) res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (res.ok) {
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    ok++;
  } else {
    fail++;
    console.log('FAILED', res.status, url.slice(0, 110));
  }
}
console.log(`downloaded ok=${ok} fail=${fail}`);

// 3. rewrite the html
for (const url of urls) {
  html = html.split(url).join(localFor(url));
}
// also catch any leftover scheme-less //framerusercontent refs
html = html.split('https://framerusercontent.com/').join('/mirror/hanifsfoods/_f/');
// strip analytics so the offline mirror stays quiet
html = html.replace(/<script>\s*\(function\(w,d,s,l,i\)\{[\s\S]*?GTM-WSMVDTNQ'\);[\s\S]*?<\/script>/, '');
html = html.replace(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/, '');
html = html.replace(/<script[^>]*googletagmanager[^>]*><\/script>/gi, '');

// 4. rewrite framer URLs inside downloaded js/css modules (dynamic imports)
function rewriteTextFiles(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { rewriteTextFiles(p); continue; }
    if (/\.(mjs|js|css|json)$/.test(f.name)) {
      let t = fs.readFileSync(p, 'utf8');
      if (t.includes('framerusercontent.com')) {
        t = t.split('https://framerusercontent.com/').join('/mirror/hanifsfoods/_f/');
        fs.writeFileSync(p, t);
      }
    }
  }
}
rewriteTextFiles(A);

// 5. write the archived page
fs.writeFileSync(path.join(ROOT, 'index.html'), html);
console.log('archive written:', ROOT);
