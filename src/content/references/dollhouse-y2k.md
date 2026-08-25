---
name: Dollhouse Y2K Web
family: y2k
tags: [y2k, retro-ui, win98, kawaii, pink, e-commerce, chrome-type, nostalgic]
palette: ["#FF6EC7", "#FF9AD5", "#C9A6F5", "#A8D8F0", "#FDF8F3", "#1A1A1A"]
fonts:
  heading: Titan One
  body: VT323
texture: Win98 window chrome (bevels + _ □ × buttons), chrome-gradient bubble type, holographic gradients, checkerboard strips, stickers/sparkles/butterflies, sticky notes, taskbar
preview: dollhouse-y2k
notes: |
  - Cream page (#FDF8F3) — every section is a floating Win98 "window": 1px dark border, white inner bevel, grey outer bevel, hard offset shadow (never blur)
  - Title bars are pastel gradients — pink (#FF9AD5→#FF6EC7), lavender (#D7BDF8→#B78EF2), baby blue (#9CD2F2→#6CB8E8) — always with tiny _ □ × buttons on the right
  - Hot pink #FF6EC7 is the primary action color (add to cart, go!, ok, search); lavender + baby blue are secondary accents; black is only for text/checkers
  - Display voice: Titan One bubble letters with a chrome treatment — vertical white→pink→white→purple gradient clipped to text + 1.5px pink stroke + hard offset drop-shadow, headline rotated ~-3deg
  - Pixel font (VT323) reserved for tickers, taskbar, timestamps; UI copy is Tahoma 11–13px
  - Top + bottom tickers: pink strips with pixel uppercase text and ✧ separators; bottom ticker framed by black/white checkerboard strips
  - Hero: chrome "made 4 the internet" + sub + pink/blue bevel buttons + underlined mini-links; photo lives in a "cute.jpg" window with a CSS flip phone overlapping its corner
  - Props do the art direction: CD (conic-gradient), butterflies 🦋, sparkle ✦, tamagotchi (pure CSS), sticky note with tape, Windows 2000 badge, taskbar with start button + clock
  - Feature strip: holographic pink→lavender→blue gradient between checkerboard strips; icons in bevel squares
  - Products: photo + lowercase name + price + pink "add to cart" bevel button; community uses rotated polaroids with white frames
  - Playlist rows: number + track + time, active row filled lavender; animated equalizer bars in now-playing
  - Footer: logo + 4 link columns + colored social squares + Windows badge; fixed taskbar at the very bottom with start / task buttons / tray clock
  - Motion: ticker marquees, equalizer bars, tamagotchi screen blink — everything else instant, like a real desktop
  - Radius: 0 everywhere on chrome (windows, buttons, inputs); only photos/polaroids/plush get soft treatment
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [SHOP NAME], a Y2K-themed online shop. Intent: get visitors to [CTA GOAL — shop the drop / join the club].

      Aesthetic: Dollhouse Y2K Web. Cream page #FDF8F3; every section is a Win98 window — white body, 1px #5A5A5A border, inset white/grey bevels (inset 1.5px 1.5px 0 #fff, inset -1.5px -1.5px 0 #B9B9B9), hard offset shadow 3px 3px 0 rgba(90,40,70,0.12), radius 0. Title bars: pastel gradients with _ □ × buttons. Accents: hot pink #FF6EC7 (primary actions), lavender #C9A6F5, baby blue #A8D8F0. NO blur shadows, NO rounded corners on chrome, NO modern gradients except holographic strips and chrome text.

      Typography: Titan One for display with chrome treatment (linear-gradient 180deg #fff→#FFD3EC→#FF6EC7→#fff→#D9C6F5→#8F5FC9, background-clip:text, -webkit-text-stroke 1.5px #E24AA8, drop-shadow(3px 4px 0 rgba(160,60,120,.35)), headline rotated -3deg). VT323 pixel font for tickers/taskbar. Tahoma/Verdana 11–13px for UI copy. Lowercase voice ("thanks 4 stopping by!", "ur cute").

      Layout — in exact order:
      1. Pink ticker (scrolling marquee): "✧ NEW DROP ALERT! ✧ CHECK OUT THE Y2K COLLECTION ✧ FREE SHIPPING ON ORDERS OVER $50" + right side "sign in / join now!".
      2. Header: rotated bubble logo "doll♡house" (Titan One, pink, white+pink text-shadow), 6 nav items with emoji icons, search input with pink ⌕ button.
      3. Main 3-col grid: LEFT sidebar windows — "quick links" (7 rows with pink icons + › chevrons) + "welcome babe!" (note text + CSS tamagotchi with blinking screen); CENTER hero — chrome headline "made 4 / the internet", sub "Y2K fashion, digital dreams, and good vibes only.", pink + blue bevel buttons, underlined "new in | trending | back in stock", photo window "cute.jpg" with CSS flip phone overlapping corner + CD (conic-gradient disc) + butterflies; RIGHT — "new message!" window (big ♥, "(1) new message", ok button), "now playing" window (dreaming.mp3, animated equalizer, progress bar), yellow sticky note with tape ("don't forget / drink water / be kind / call ur bff").
      4. Feature strip: holographic gradient (pink→lavender→blue→pink) between black/white checkerboard strips; 3 bevel-square features: FAST SHIPPING worldwide! / EASY RETURNS no stress / SECURE PAYMENTS 100% safe. Right: "join the club!" window with ✉, "get cute emails + secret drops", email input + pink "go!".
      5. Row of 3 windows: "new arrivals" (3 products: photo, lowercase name, price, pink "add to cart", "» view all new arrivals"), "community vibes" (3 rotated polaroids, "tag us @dollhouse to be featured!", lavender "upload pics" button, purple flip phone), "playlist" (8 numbered tracks with times, active row filled lavender, media controls).
      6. Row: "blog corner" (3 › links with underlined pink keywords, "read more on the blog →", retro computer photo), center banner — sky-blue gradient with CSS clouds, chrome "WELCOME TO / THE DOLLHOUSE", "we don't follow trends, we set the vibe.", pink "shop now →", round plush photo, "my faves" window (4 rows with counts).
      7. Bottom ticker: checkerboard + pink pixel strip "♡ FREE GIFTS OVER $75 ✧ NEW DROP EVERY FRIDAY ✧ EXPRESS YOURSELF ✧ STAY Y2K" + checkerboard.
      8. Footer: logo + © line, 4 columns (shop/help/company/legal), "let's be friends!" colored social squares, Windows 2000 Professional badge (CSS flag + bevel panel).
      9. Fixed taskbar: grey gradient, italic "start" with 4-color flag, task buttons ("welcome 2 my world.html" active, "new message (1)"), tray with clock "10:30 PM".

      Spacing: 18px gaps between windows, 24px page gutters, max-width 1280px. Motion: ticker marquee ~28s linear, equalizer bars 0.9s staggered, tamagotchi blink 1.6s. Everything else instant.

      Guardrails: never modernize the chrome (no soft shadows, no border-radius on windows/buttons/inputs), never use more than pink+lavender+blue, never serif fonts, keep all copy lowercase-cutesy, keep the taskbar fixed at the bottom.
  - label: Hero & product image direction
    text: |
      Generate image assets for a Dollhouse Y2K Web page about [SUBJECT — e.g. "Y2K fashion shop / kawaii accessories"].

      Direction: early-2000s digicam flash photography — direct on-camera flash, slight overexposure, cool blue-pink cast, low-fi charm. Hero: young woman with tinted sunglasses + updo hair + chunky jewelry, shot against light blue fur or pink backdrop, bust framing with headroom for a chrome headline beside (not over) her, 4:5 crop. Products: single object centered on pastel seamless background (bubblegum pink / baby blue / cream), hard flash shadow, slight top-down angle — bag, charm necklace, platform shoes. Community: candid flash photos of friends posing like 2003 MySpace pictures. Props if needed: flip phone, CD, tamagotchi, plush toy, retro computer. Render photographic with authentic digicam grain. Avoid: modern soft-light studio looks, muted earth tones, minimalism, dark moody grades, AI-glossy skin.
  - label: Win98 component polish
    text: |
      Polish these components in the Dollhouse Y2K Web language without changing content:

      - Window chrome: background #fff; border 1px solid #5A5A5A; box-shadow inset 1.5px 1.5px 0 #fff, inset -1.5px -1.5px 0 #B9B9B9, 3px 3px 0 rgba(90,40,70,0.12); title bar 11.5px bold white with text-shadow 1px 1px 0 rgba(0,0,0,.22), gradient variants: pink #FF9AD5→#FF6EC7, lavender #D7BDF8→#B78EF2, blue #9CD2F2→#6CB8E8; right side three 9px bevel buttons _ □ ×.
      - Bevel button: 12.5px bold white on #FF6EC7, border 1px #5A5A5A, inset white highlight, 2.5px hard offset shadow; pressed state inverts the inset shadows.
      - Chrome headline: Titan One, gradient clip #fff→#FFD3EC→#FF6EC7→#fff→#D9C6F5→#8F5FC9, stroke 1.5px #E24AA8, drop-shadow(3px 4px 0 rgba(160,60,120,.35)), container rotated -3deg.
      - Checkerboard strip: repeating-conic-gradient(#1A1A1A 0% 25%, #fff 0% 50%) 0 0 / 18px 18px, height 14px.
      - Holographic strip: linear-gradient(90deg, #FFD3EC, #E8D6FB 35%, #CDE9FA 65%, #FFD9EE) with bevel border.
      - Equalizer: 8 bars 5px wide, lavender, animation 0.9s ease-in-out infinite alternate scaleY(0.3), delays 0–0.32s.
      - Taskbar: fixed bottom 38px, linear-gradient(180deg, #F2F2F2, #C9C9C9), top border white; start button italic bold with 4-color skewed flag (#E2544A/#7CBA3D/#3D7EDB/#F2B53D); active task pressed (#B9B9B9, inset shadow); tray with divider and clock.
      Keep radius 0 on all chrome, keep shadows hard (no blur), pink is the only button color that matters.
---

## Why this family exists

Distilled from the Dollhouse Y2K shop reference. It proves that **a dead UI language (Win98 chrome) plus kawaii pastels can carry an entire storefront**: every section is a bevel window, every action is a hard-shaded pink button, and the nostalgia props (flip phone, CD, tamagotchi, taskbar) do the art direction so the layout can stay a simple 3-column grid. The chrome-gradient bubble headline is the one loud moment — everything else is small, lowercase, and cute.

## When to reach for it

- Y2K/thrift/kawaii fashion shops, sticker and accessory stores
- Fan pages, music drops, community sites that want MySpace-era energy
- Any brand that wants "the internet, but in 2003" as its whole personality

## Anti-patterns (instantly break the vibe)

- Modern soft UI (rounded cards, blur shadows, glassmorphism) — the bevel IS the identity
- Muted/minimal palette — pink must be hot, lavender and blue must be candy
- Serif or elegant fonts — bubble display + pixel accents + Tahoma only
- Empty minimal layouts — this family needs props, stickers, and windows to feel alive
- Forgetting the taskbar/ticker — the desktop framing is what sells the joke
