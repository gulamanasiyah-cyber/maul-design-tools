---
name: Pomaii Escape
family: travel
tags: [travel, nature, adventure, warm, organic, editorial, outdoors]
palette: ["#FFFBF3", "#16332B", "#1B4D3E", "#F28C28", "#F2C14E", "#EEF5F0"]
fonts:
  heading: Inter
  body: Inter
texture: warm cream paper (#FFFBF3) with organic blob-masked hero lake, soft foliage cutouts, pill UI and warm orange CTA
preview: pomaii-escape
notes: |
  - Page is warm cream #FFFBF3 flat — no gradients on the page itself, only inside images. The calm comes from generous white space and soft organic blobs.
  - Sticky nav: left mark (conic orange/forest/gold circle) + "Pomaii / Explore. Dream. Discover." (18px/9px), center 6 links (Home orange underlined 2px #F28C28, rest muted #6B7A74), right 3 icon circles (search/wishlist 34px white 1px border, menu = ink #16332B fill).
  - Hero is asymmetric 1.05fr / 1.35fr: left copy (eyebrow 10px 0.16em #1B4D3E with 18px gold bar, H1 30–44px/0.96 two lines "Discover Nature. / Find Your Escape." with orange underline 8px rgba(242,140,40,0.28) behind "Escape.", paragraph 13px/1.6 muted #6B7A74 max 420ch, orange pill CTA 11×18 with white arrow circle) + right blob-masked photo (clipPath organic shape, image Unsplash 1506905925346 mountain lake, subtle warm tint 4% orange). Decorative foliage emoji/geometry sits on blob edges.
  - Floating search bar overlaps hero bottom (-22px): white pill 18px radius, flex row, 4 fields (30px mint circle icon #EEF5F0 + 12.5px bold label + 11px muted value), 1px sep lines, ink pill "Search ⌕" right. Shadow 0 16px 36px rgba(22,51,43,0.12), 1px border rgba(22,51,43,0.06), width min(920px,100%).
  - Trust strip below: 4-col grid, white card 14px radius, 1px border, 14×16 padding — each cell 32px circle (mint bg + green border) + 12px bold title + 11px muted desc.
  - Popular: header H2 18px + "View All Destinations →" (ink arrow circle) right. 4 equal cards 260px height, 14px radius — image with bottom gradient, top-left rating pill "★ 4.8" (ink 92% bg, 11px), bottom overlay: title 13px white + sub 11px 82% white + price $699 gold #FFE8B8 right. Hover scale 1.04.
  - Category pills below cards: centered wrap, 12.5px muted text, mint pill #F0F5F0 with 1px border, 22px white circle icon left.
  - Guides: warm beige box #F2EFE7 16px radius — intro left (11px label + 18px H2 + 12px muted p + ink pill CTA) + 2 article cards 150px height, 12px radius, image + white inset meta box (bottom 10px, 92% white blur, 12px bold + 10.5px muted).
  - Offer banner: dark ink #16332B 16px radius, 2-col (image 1.15fr + copy 1fr) min-height 260px — left lake photo, right radial orange tint + copy (light eyebrow gold, 22px H2 white, 12px muted, orange pill CTA + large lily emoji bottom-right).
  - Stats: 5-col top+bottom dividers 1px rgba(22,51,43,0.08), 14px vertical padding — each 28px mint circle icon + 14px bold + 11px muted; last cell is Follow Us with 4 white social circles (f/◎/▶/in).
  - Footer: flat, max 1200 centered, 24px padding — 5-col (brand + Company/Support/Top/Newsletter), brand 10px label, 12px muted p max 260ch, links 12.5px muted #6B7A74, newsletter input 12px + ink button 12px, bottom bar 11.5px centered muted with top divider.
  - Type entirely Inter, tight (-0.01 to -0.03em), H2 18–22px, body 12–13px; orange #F28C28 is the ONLY warm accent (CTA, underline, active link, rating star tint), ink #16332B for structure, mint #EEF5F0 for soft UI.
  - Radius: hero blob organic, search 18px, trust 14px, cards 14px, cats/guides 12–16px, pills 999px. Shadows only on search (16/36) + blob drop (16/32); otherwise hairline 1px borders.
  - Spacing: section max-width 1200 centered, horizontal 24px (16 mobile), vertical 22px between blocks, hero 10/24 + 36 bottom padding; keep first viewport calm — hero + floating search only.
  - Imagery: real nature photography (mountains, turquoise lakes, alpine trees) — no illustrations; keep turquoise lake punch but overall warm cream page so orange pops.
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [BRAND], a nature travel marketplace. Intent: get visitors to search and book outdoor escapes.

      Aesthetic: Pomaii Escape. Page background warm cream #FFFBF3 flat. Ink #16332B / forest #1B4D3E, muted #6B7A74/#8A9A95, mint surface #EEF5F0/#F0F5F0/#F6F8F6, beige #F2EFE7, warm accent orange #F28C28 (only accent — CTAs, active nav underline, hero underline, price tint) + gold #F2C14E (small detail). No page gradients. Typography Inter only (700/800 for H), tight tracking.

      Layout — in exact order, max-width 1200 centered, horizontal padding 24px (16 mobile):
      1. Nav (sticky, blurred cream rgba(255,251,243,0.88), 1px bottom border rgba(22,51,43,0.06)): left conic mark (orange/forest/gold 28px circle) + "Pomaii / Explore. Dream. Discover." (18px bold -0.02em / 9px 0.06em muted), center 6 links (Home · Destinations · Tours · Travel Guide · Blog · About Us) 13px 500 muted, Home is active orange #F28C28 with 2px underline, right 3× 34px icon circles (⌕ white 1px border / ♡ white / ≡ ink fill #16332B).
      2. Hero (10px 24px 36px, grid 1.05fr/1.35fr, min-height 420px): left copy — eyebrow "EXPLORE THE WORLD" 10px 800 0.16em #1B4D3E with 18px gold bar, H1 44px/0.96 -0.03em: "Discover Nature." + "Find Your Escape." where "Escape." has an 8px orange underline rgba(242,140,40,0.28) behind it (2px inset, rounded), paragraph 13px/1.6 muted max 420ch, orange pill CTA "Explore Now →" (11×18 white arrow circle) + dots below (3 dots, middle 22px orange pill). Right visual — 420px height, organic blob clipPath (path d M40 90 C44 24 132 0 236 26 C336 52 430 22 526 58 C606 86 676 152 672 268 C668 384 626 466 488 506 C398 528 336 488 264 498 C176 510 86 530 36 452 C -10 376 -22 262 40 90 Z) masking a mountain-lake photo (Unsplash 1506905925346) with 4% orange tint rect overlay, drop-shadow 0 16px 32px rgba(22,51,43,0.12); foliage decor (🌿 top-left -8/18, 🍃 bottom-right -6/22).
      3. Floating search (width min(920px,100%) centered, margin -22px relative, z 2): white pill 18px radius, flex row 8px padding, shadow 0 16px 36px rgba(22,51,43,0.12), border 1px rgba(22,51,43,0.06), gap 4px. Four fields each flex 1, 8×12 padding, hover bg #F6F8F6, 12px radius: 30px mint circle icon (#EEF5F0, 12px) + column "Where to? / Any destination" 12.5px bold / 11px muted #8A9A95; separators 1×28 rgba(22,51,43,0.08). Right ink pill "Search ⌕" 12×20, with 18px translucent circle around icon.
      4. Trust strip (14px top margin): 4-col grid, white card 14px radius, 1px border rgba(22,51,43,0.06), 14×16 padding, 12px gap: each cell 32px circle (mint #F6F8F6, 1px green border, 12px green glyph ⬡◇♡☎) + column 12px bold "Handpicked Destinations / Best Price Guarantee / Safe & Trusted Travel / 24/7 Customer Support" + 11px muted desc.
      5. Popular (22px top margin): header H2 "Popular Destinations ✦" 18px -0.01em + gold ✦ #F2C14E + "View All Destinations →" 12.5px muted with 20px ink arrow circle right. Grid 4 cards, 14px gap, 260px height, 14px radius, image object-cover hover scale 1.04, overlay gradient transparent 42% → rgba(0,0,0,0.62), rating pill top-left "★ 4.8" ink 92% bg 5×8 11px 700, bottom overlay 12px padding flex space-between: left title 13px white + sub 11px 82% white, right price 13px 800 gold #FFE8B8 ($699/$899/$799/$749). Below, centered category pills wrap 10px gap: each 12.5px muted, mint pill #F0F5F0 1px border 7×12, with 22px white circle icon (▲☼♣▥♡◯) — Adventure/Beach/Nature/Culture/Honeymoon/Family.
      6. Guides (22px top): beige box #F2EFE7 16px radius, 16px padding, grid 1.05fr 0.95fr 0.95fr 14px gap centered. Left intro: label "Need Inspiration?" 11px 700 #8A9A95, H2 "Travel Stories & Guides" 18px, p 12px/1.6 muted max 320ch, ink pill "Read Travel Stories →" 11×14 white arrow. Two article cards 150px height 12px radius, image + inset meta: bottom 10px, white 92% blur, 10px padding 12px bold title + 10.5px muted read time (10 Hidden Gems in Europe · 5 min read / Packing Essentials for Your Trip · 4 min read).
      7. Offer (22px top): ink card #16332B 16px radius overflow hidden, grid 1.15fr 1fr min-height 260px. Left: lake/mountain photo (1439066615861). Right: radial gradient 600×300 at 30%20% rgba(242,140,40,0.16) over ink, 26×28 padding, flex column centered 8px gap: light eyebrow "SPECIAL OFFER ✦" 10px 0.16em white 82%, H2 "Your Next Adventure / Starts Here" 22px white, p 12px/1.6 white 78% max 320ch, orange pill "Discover Packages →" + large lily emoji 42px bottom-right.
      8. Stats (18px top): 5-col grid, top+bottom 1px dividers rgba(22,51,43,0.08), 14px vertical padding, 12px gap: each 28px mint circle icon + column 14px bold (100+ / 50K+ / 4.8★ / 24/7) + 11px muted (Destinations/Happy Travelers/Average Rating/Support), small gold star tint for rating; last cell "Follow Us" right-aligned with 4 white social circles 24px 1px border (f/◎/▶/in).
      9. Footer (max 1200, 18×24 24px): 5-col grid 1.4fr 0.7fr 0.8fr 0.9fr 1.1fr 20px gap 16px bottom border: brand col mark 22px + "Pomaii" + "Explore. Dream. Discover." 10px muted + p 12px/1.6 muted max 260ch; nav cols heading 11px 0.06em uppercase ink, links 12.5px muted #6B7A74; newsletter col heading + p + form flex 6px gap: input 12px 500 white 1px border 8px radius 9×10 + ink button 12px 700 9×12. Bottom bar top 1px divider, 12px top padding, centered 11.5px muted "© 2024 Pomaii. All rights reserved."

      Spacing: section padding 24px horizontal, vertical rhythm 22px, hero bottom 36px for search overlap, trust 14 top, card gap 14, footer 18/24. Radius: search 18, trust/offer/guides 14–16, cards 14, pills 999. Shadows only search + blob; otherwise 1px borders. Keep hero wash as 4% orange tint only, not a page gradient. First viewport hero + floating search only.
  - label: Hero image direction
    text: |
      Generate 3 hero photo options for a Pomaii Escape page about [SUBJECT — e.g. "mountain lake escapes / alpine adventure travel"].

      Direction: alpine mountain lake with forested slopes and rocky peaks, calm turquoise water reflecting sky, soft morning mist between peaks, shot from slightly above eye level. Lush, serene, cinematic but natural — no heavy filters. Composition MUST work inside an organic blob mask (tall, curved shape) — center the lake, keep peaks in upper half and trees framing sides, leave negative space top for mist. Colors: deep forest greens, turquoise lake, pale sky, warm stone — desaturate slightly warm. The left 40% of the blob must stay calm enough for text overlay on the page (the photo is right side only). Render at 1400×900, photographic, sharp, high detail. Avoid: close-up portraits, city/beach scenes, sunset orange overload, illustrations, heavy HDR.
  - label: Cards & guides polish
    text: |
      Polish these blocks in the Pomaii Escape language without changing their content:

      - Popular cards: 260px height, 14px radius, object-cover nature photo, overlay gradient transparent 42% → rgba(0,0,0,0.62). Rating pill top-left "★ 4.x" ink 92% bg, 11px 700, 5×8 padding. Bottom overlay 12px padding flex space-between: left title 13px white + sub 11px 82% white, right price 13px 800 gold #FFE8B8. Hover scale image 1.04. Keep 4 cards: Banff $699 / Maldives $899 / Kyoto $799 / Iceland $749 with exact images (1506905925346 / 1514282401047 / 1493976040374 / 1531366936337).
      - Category pills: centered wrap 10px gap, each 12.5px muted #6B7A74, mint pill #F0F5F0 1px border rgba(22,51,43,0.06), 7×12 padding, left 22px white circle with 1px border and forest icon (▲☼♣▥♡◯) in #1B4D3E. Never add dark pills here.
      - Guides beige box #F2EFE7 16px radius 16px padding, grid 1.05/0.95/0.95. Article cards 150px 12px radius, image + bottom meta inset white 92% blur 8×10. Offer banner: ink #16332B 16px radius, image left + copy right with radial orange 600×300 at 30%20% rgba(242,140,40,0.16) overlay and gold eyebrow.
      Keep all borders 1px rgba(22,51,43,0.06–0.10), mint circles #EEF5F0/#F6F8F6, orange only for CTAs and active states, Inter only, no extra shadows.
---

## Why this family exists

Distilled from the Pomaii warm travel landing. It proves that **warmth beats loudness for wanderlust**: one cream page, one organic blob-masked lake and one orange accent do all the work. Everything else is soft mint pills, hairline borders and real mountain photography — the page feels like a sun-lit brochure, not a dashboard. The floating pill search merging into the hero is the signature tension.

## When to reach for it

- Travel marketplaces, tour operators, outdoor adventure, national parks, eco retreats — any brand selling "escape into nature" with photography
- Warm, approachable B2C landings where a single hero lake/mountain can anchor trust and the rest stays calm and shoppable
- Pages that need a strong search bar as the primary CTA without turning the hero into a form

## Anti-patterns (instantly break the vibe)

- Replacing the cream #FFFBF3 with white or dark — the warmth IS the identity
- Adding a second accent (blue/teal/purple) — orange #F28C28 must stay the only warm pop; forest/ink are neutrals
- Turning the hero into a full-bleed rectangle or carousel — the organic blob mask is non-negotiable
- Making the floating search a heavy dark bar or stacking fields vertically on desktop — it must be a light pill row overlapping the hero
- Replacing Inter with a display serif or playful rounded — the calm neutrality lets the photography speak
---

source: https://images.unsplash.com/photo-1506905925346-21bda4d32df4
