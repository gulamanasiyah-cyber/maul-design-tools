---
name: Novella Modern Market
family: marketplace
tags: [marketplace, e-commerce, cream-warm, minimal-store, product-grid, deal-banners, category-orbs, newsletter, trusted]
palette: ["#FFFFFF", "#F2ECE2", "#241B12", "#1A130D", "#E2713C", "#8A8378", "#EDE7DD"]
fonts:
  heading: Jost
  body: DM Sans
texture: Warm cream + white storefront, generous whitespace, soft product photography, circular category orbs, white product cards with hover, black pill CTAs, one orange accent
preview: novella-modern-market
notes: |
  - Clean white base with a warm cream #F2ECE2 hero and warm-ink #241B12 text; the ONLY accent is orange #E2713C (Top Deals tag, one deal card, rating stars)
  - Top utility bar on very light gray: left trust links (Free shipping / Easy returns), right utility links (Track Order / Help Center / Sell on Novella); both quiet 11–12px
  - Main header: black NOVELLA wordmark + mark left, big centered rounded search bar, circular icon buttons right (Account / Wishlist / Cart with dark badge count)
  - Category nav row below header, small bold 12px links; "Top Deals" is the orange accent; centered, evenly spaced
  - Hero: warm cream board, left column = small eyebrow ("QUALITY. STYLE. EVERYDAY." uppercase, letterspaced) + 44–56px rounded heading "Everything You Love, All in One Place." + muted line + black pill "Shop Now →"; right = warm living-room still life; used as a soft full-bleed card, not a hard section
  - Under hero: 3 quiet trust features in a row (Secure Payments / Premium Quality / Fast Delivery) with thin line icons
  - Section headers: left H2 22–26px, right muted "View all →" link; consistent rhythm, ~40px gap
  - Shop by Category: 8 circular orbs in a row — product photo clipped into a circle with a soft neutral ring; name under each, centered, 12px
  - 3 promo cards in a row — light card (cream/white), center subtle beige card, and one true dark card (Member Exclusive): each has eyebrow, bold up-to-something headline, small line, black pill; image flows to the right edge of the card
  - Product card: white, thin light border, 12px radius; heart icon top-right; soft product photo; title 14px; gray category 11px; ★ rating + (count) muted; price row = bold 14px + gray strikethrough old price + cart icon pill on the right
  - Feature bar (Free Shipping / Easy Returns / Secure Payments / 24/7 Support): centered line icons + bold title + muted subtitle, separated by thin vertical hairlines
  - Newsletter band: straight full-width dark band — banner image left, right copy "Stay in the Loop" + muted line, rounded email input + black Subscribe pill; visually a cover, not a card
  - Footer: very dark #1A130D; left = NOVELLA wordmark + tagline + social circle icons; 4 columns (Shop / Customer Service / About Novella / Download Our App with Google Play + App Store badges); slim bottom bar with © + Privacy · Terms · Cookie Policy
  - Typography: Jost for all headings (geometric, friendly, medium weight), DM Sans for body/UI; eyebrow 11px uppercase letterspaced; body 13–14px
  - Consistency: every CTA is a black pill (white text), every "View all" is a muted text link, every card is white with a hairline border — the orange stays reserved for the single "Top Deals" tag and deal highlights
prompts:
  - label: Full landing page
    text: |
      Build a marketplace landing page for [BRAND NAME], an online store selling [PRODUCTS — electronics, fashion, home essentials]. Intent: get visitors to browse and add to cart.

      Aesthetic: Novella Modern Market. Clean white base #FFFFFF with a warm cream hero board #F2ECE2, warm-ink text #241B12. ONE accent: orange #E2713C (reserved for the "Top Deals" tag, one deal card, and rating stars). Everything else is neutral — white cards, black CTAs, soft product photography. Lots of whitespace, rounded corners (10–14px), hairline borders #EDE7DD. No gradients, no glass, no shadows except a gentle hover lift on product cards.

      Typography: Jost for every heading (eyebrow hero ~11px uppercase letterspaced, H1 44–56px medium, section H2 22–26px). DM Sans 13–14px for body/UI. Ratings as ★ + muted count.

      Layout — in exact order:
      1. Top utility bar (very light gray): left "Free shipping on orders over $50" + "Easy 30-day returns"; right "Track Order · Help Center · Sell on Novella". 11px, quiet.
      2. Main header (white): black NOVELLA wordmark + mark left; centered rounded search bar; circular icon buttons right (Account, Wishlist, Cart with a small dark badge count).
      3. Category nav row: All Categories · New Arrivals · Top Deals (orange) · Best Sellers · Home Essentials · Electronics · Fashion · Beauty · Baby & Kids. 12px bold, centered.
      4. Hero: warm cream board, left copy — eyebrow "QUALITY. STYLE. EVERYDAY.", H1 "Everything You Love, All in One Place.", muted sub-line, black pill "Shop Now →"; right = warm living-room still-life (sofa, pillows, plant, lamp). Below: 3 trust features in a row with thin icons (Secure Payments / Premium Quality / Fast Delivery).
      5. Shop by Category: header + "View all categories →"; 8 circular orbs in a row (Electronics, Fashion, Home & Living, Beauty, Baby & Kids, Sports, Books, Groceries) — product photo clipped in a circle with a soft ring, name under each.
      6. 3 promo cards: light card "Deal of the Day — Up to 60% Off"; center beige "New Arrivals — Fresh Finds"; one DARK card "Member Exclusive — Extra 10% Off". Each = eyebrow + bold headline + small line + black pill; image touches the right edge.
      7. Trending Now: header + "View all products →"; 5 white product cards in a row — heart icon top-right, soft product photo, title, gray category, ★ rating, price + strikethrough old price + cart pill.
      8. Feature bar: Free Shipping / Easy Returns / Secure Payments / 24/7 Support — line icon + bold title + muted subtitle, thin vertical hairlines between.
      9. Recommended For You: header + "View all recommendations →"; 5 product cards (same pattern as Trending).
      10. Newsletter band (full-width dark): banner image left, "Stay in the Loop" + muted line + rounded email input + black "Subscribe" pill.
      11. Footer (very dark #1A130D): NOVELLA wordmark + tagline + social circles; columns for Shop, Customer Service, About Novella, Download Our App (Google Play + App Store badges). Slim bottom bar: © + Privacy Policy · Terms of Service · Cookie Policy.

      Grid: content max-width ~1240px, section padding ~64px, card gap ~20px. Every section header follows the same left H2 / right "View all" rhythm.

      Guardrails: never add a second accent color — orange is the only pop; never gradient the buttons or hero; never use a serif; keep every product card white with a hairline border; keep every CTA a black pill; keep the cream hero board and dark footer as the only two non-white large bands; never place two orange elements on one screen.
  - label: Product card & category orb polish
    text: |
      Polish the following blocks in the Novella Modern Market language:

      - Product card: white, 1px #EDE7DD border, 12px radius, padding 14px. Heart icon (SVG outline, muted, turns orange on hover) top-right. Soft product photo fills the top (rounded 8px, object-fit cover, neutral background). Title 14px DM Sans 600. Category 11px muted. Rating: ★ 4.5 (1,234) with muted count. Bottom row: bold 14px price + gray strikethrough old price (e.g. $59.99 crossed) + cart icon pill on the right (40px circle, 1px border, fills dark on hover). Hover: card lifts 4px with a soft shadow.
      - Category orb: 92px circle, overflow hidden, soft gradient neutral product photo, subtle 1px ring, name 12px centered below with 10px gap.
      - Promo cards: 16px radius. Light card = white bg; center card = cream #EDE7DD; dark card = #1A130D with white text. All: eyebrow 11px uppercase letterspaced gold/gray, H3 24px, muted line, black pill (dark card uses white/outline pill). Image absolutely positioned, right edge, bottom-anchored, touching the card edge.
      Keep everything flat — the only shadow is the product-card hover. Orange is reserved for the Top Deals tag and rating stars. No gradients.
  - label: Hero & newsletter still-life direction
    text: |
      Generate warm lifestyle photography for a Novella Modern Market page.

      Direction: bright, warm-natural-light interiors and clean studio product shots. Hero still-life: a cozy modern living-room corner — cream linen sofa with textured pillows, a small potted plant, a woven pendant lamp, a sculptural side table, soft morning light through a window, warm neutral palette, editorial but friendly, shot straight-on, generous negative space on the left for headline text. Product photography: each item on a seamless warm-neutral (#F2ECE2) backdrop, centered, soft shadow, no props. Render photographic, crisp and warm. Avoid: cool blue casts, harsh shadows, busy textured backgrounds, overly saturated color, dark moody grades, AI-glossy surfaces.
---
