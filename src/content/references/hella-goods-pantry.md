---
name: Hella Goods Pantry
family: bold
tags: [ecommerce, food, pantry, spice, sauce, hot-sauce, shopify, bold, playful, push-button, shapes-theme]
palette: ["#FFFFFF", "#FF2524", "#FFCC36", "#5AFF24", "#000000"]
fonts:
  heading: Prompt
  body: Inter
texture: Red #FF2524 hero with giant wordmark & overlapping table photo (8px push-shadow), floating parallax starburst stickers ("Full of Flavour", "Hot stuff!", chili sticker), wavy SVG shape dividers between colored sections, 4-product focus carousel with hover-swap images, 3-tab collections (Hot Sauces / Spices & Rubs / Oils), comparison table ("How we stack up"), product of the month with vertical thumbs, full-bleed dining video banner, recipe grid on yellow #FFCC36, EVOO highlights with giant green starburst decal, neon green #5AFF24 merch grid, and giant red footer logo
preview: hella-goods-pantry
card: hella-goods-pantry
notes: |
  - Bold, playful food & pantry Shopify storefront based on the live "Shapes" theme demo (v5.0.0) by Shopify.
  - Multi-Scheme Color Blocking: Alternating full-bleed color sections with scalloped wave dividers (Red #FF2524 Hero & Footer, White #FFFFFF Storefront body, Neon Green #5AFF24 Testimonials & Merch, Sunshine Yellow #FFCC36 Recipes & Dining).
  - Push-Button Depth (.push-btn): Hard 2px black border with 4px offset solid black shadow; pill-shaped surface that translates on click/active for a tactile feel.
  - Layered Typography & Text Strokes: Prompt 900 uppercase display headlines with 2.5px black text stroke and multi-step stacked text shadows (0.02em to 0.10em) in yellow/green.
  - Interactive Focus Carousel: Center-scaled 4-product showcase with hover image transitions, caption descriptions, and quick-add push buttons.
  - Floating Sticker Badges: Starburst, semicircle, and scallop stickers with angled rotations (24deg, -12deg, 54deg) and drop shadows.
  - Tabbed Collection Filter: Hot Sauces (Pina Picante, El Diablo, Extra Hot) / Spices & Rubs (Yuzu Garlic, Spicy Umami, Ghost Pepper Salt) / Oils (Chili Oil, Mellow EVOO, Bold EVOO).
  - Feature Comparison Table: "How we stack up" with custom check/cross circle icons and green brand highlight column.
  - Highlighting Layout: Single-origin EVOO bottle flanked by 6 benefit cards over an oversized rotated starburst decal.
  - Typography: Prompt 900 for bold display headings, Inter 500/700 for body text and navigation.
  - Scrolling Marquee: Repeating brand text strip on black background with a "SHOP NOW" CTA button.
  - Tabbed Collections: Horizontal tab bar (All Products / Hot Sauces / Spice Rubs & Seasonings) filtering a 4-column product grid with starburst-sticker badges.
  - Product Focus Carousel: Large featured product with thumbnail navigation, zoom-on-hover, starburst badges, push-button "ADD TO CART" and star ratings.
  - Comparison Table: "THE DEAL" section with a 2-column feature checklist using checkmark ✓ and X ✗ icons, plus a red "GET THE BUNDLE" CTA.
  - Video Banner: Full-width restaurant/kitchen video background with overlay text and "CHECK OUT OUR RECIPES" push-button CTA.
  - Newsletter: Minimal email capture with red "SUBSCRIBE" push-button.
prompts:
  - label: Full pantry storefront
    text: |
      Build a bold, playful food & pantry e-commerce storefront for [BRAND/STORE], a small-batch artisan brand selling [PRODUCTS — hot sauces, chili oils, spice rubs, salts, olive oils].
      Aesthetic: Hella Goods Pantry (Shapes Theme v5.0.0).
      Palette: Fire red #FF2524 (hero & footer), sunshine yellow #FFCC36 (recipes & highlights), neon green #5AFF24 (testimonials & merch), pure white #FFFFFF (body), ink black #000000 (borders & text).
      Typography: Prompt 900 for bold uppercase display headlines (with 2px black text stroke and multi-step stacked text shadows), Inter 500/700 for body copy and navigation.
      Interactive buttons: Tactile push-button system (.push-btn) with 2px black border, solid 4px offset black shadow, and pill surface that translates -3px on idle, -1.5px on hover, and 0 on press.

      Layout structure in exact order:
      1. Transparent Header (over red hero): Left hamburger menu + desktop nav (Shop dropdown, Restaurant, Recipes, About), centered SVG brand wordmark, right search icon + cart icon with count badge + yellow push-button "Shop".
      2. Hero Section (Red #FF2524): Giant centered SVG wordmark across 80% width, overlapping food hero photo with 8px push-shadow, floating rotated starburst stickers ("Full of Flavour" green starburst at 24deg, "Hot stuff!" white semicircle at -12deg, chili sticker at -38deg, green star at 54deg), bottom scalloped wave divider into white.
      3. Feature Statement: Centered bold statement "Everyday pantry goods for the everyday chef." + push-button "Shop Now".
      4. Feature Badges (6-circle row): Low salt, No bad stuff, Organic, Non-GMO, No fake stuff, Low carb in 2px black circular icon borders.
      5. Collection Focus Carousel: Headline "Our Goods" with green/yellow stacked text shadow, sub "You'll be cooking like Carmy in no time.", 4 product cards (Crispy Chili Oil $12, Wild Yuzu Garlic Rub $25, Very Good Spice Rub $25 [Sold Out], Umami Chili Salt $17) with dual-image hover swap, caption descriptions, and push-button "Add to Cart".
      6. Testimonials (Neon Green #5AFF24): Wavy shape divider entry, 5 gold stars, bold uppercase quote, reviewer name, previous/next push-arrow buttons, wavy divider exit.
      7. Tabbed Collections: Tabs (Hot Sauces / Spices & Rubs / Oils) above 3-column product grid with sale badges, hover swaps, prices, and push-button "Add to Cart".
      8. Comparison Table ("How we stack up"): Feature checklist table with black borders & 6px shadow, green highlight brand column with logo vs "Other hot sauces", circular ✓ and ✗ icons.
      9. Product of the Month: 2-column layout — left thumbnail stack + main photo with "New!" starburst badge & 6px push shadow, right title "Crispy Chili Oil", $12.00, detailed description, push-button "Add to Cart".
      10. Dining Banner (Full-Bleed): Dark kitchen/restaurant background, white card with 8px shadow "Hella good dining — Quality street food in quality cities", "Our restaurants" button, "Let us cook!" yellow starburst sticker.
      11. Image with Text (Sunshine Yellow #FFCC36): Left recipe copy "Pulled pork tacos", right photo in scalloped frame with 6px shadow and "New recipe!" sticker.
      12. More Recipes Grid (Sunshine Yellow #FFCC36): 3 cards with 4:3 food photography (Quinoa Salad, Chili Oil Noodles, Grilled Shrimp) and "Read more" push-button.
      13. The Secret Sauce (EVOO Spotlight): Center squeeze bottle flanked by 6 benefit cards (100% EVOO, High Yield, Single-Origin, Peak Harvest, Versatile Cooking, Eco-Friendly) over a giant neon green starburst decal.
      14. Merch Grid (Neon Green #5AFF24): Title "Hella Good Merch", 3 product cards (Beanie, Hat with green/white hover swap, Tee with white/green hover swap & Sold Out badge), "Look Fresh!" yellow scallop sticker.
      15. Newsletter (White): "Sign up to our newsletter", email input with black border, yellow push-button "Subscribe".
      16. Footer (Fire Red #FF2524): 3-column footer (demo info & socials, 2-column link lists, newsletter signup), bottom copyright & payment badges, giant full-width wordmark banner across the base.
  - label: Hero & focus carousel
    text: |
      Generate the red hero banner and product focus carousel for [FOOD BRAND]:
      - Red #FF2524 hero with giant wordmark, overlapping food photo with 8px push-shadow, floating starburst stickers, and scallop wave divider.
      - 4-column product carousel with Prompt 900 headings, 3D text shadow, dual-image hover transitions, and pill push-buttons.
  - label: Feature comparison & highlight spotlight
    text: |
      Build the comparison table and product highlight spotlight for [PANTRY BRAND]:
      - Comparison: 3-column table with green brand highlight column, circular checkmark/cross badges, and 6px solid black drop shadow.
      - Spotlight: Center squeeze bottle flanked by 6 benefit cards over a giant rotated starburst decal background.
source: https://shapes-preset-pantry.myshopify.com/
---

## Why this family exists

Hella Goods is a demonstration storefront for Shopify's **Shapes** theme, showing how a small-batch food brand can feel both bold and playful without sacrificing clarity. It leans hard on a **push-button shadow system** (`.push-btn`) that gives every interactive element a tactile, toy-like depth, pairs that with **SVG shape clip-paths** (starbursts, circles, blobs) for product silhouettes, and uses a **high-contrast red/yellow/green palette** over clean white to create instant visual energy.

## When to reach for it

- Small-batch food, hot sauce, spice rub, and pantry brands
- Artisan makers selling chili oils, salts, olive oils, and specialty condiments
- Playful, bold e-commerce that wants a "toy box" tactile feel
- Brands selling merch (apparel, hats, beanies) alongside food products
- Stores that use comparison tables and bundle deals as conversion devices

## Key visual signatures

1. **Push-Button Shadows**: Every card, button, and sticker uses a consistent shadow system (inset white highlight + offset dark shadow) for a raised, tactile appearance.
2. **SVG Shape Clip-Paths**: Product images are clipped into starburst, circle, and blob silhouettes via data attributes, creating organic, playful shapes.
3. **Red/Yellow/Green Pops**: Fire red #FF2524 for CTAs, sunshine yellow #FFCC36 for highlights, acid green #5AFF24 for badges — all on white.
4. **Scrolling Marquee**: Black announcement strip with repeating text and a red push-button CTA.
5. **Starburst Stickers**: Badge overlays on product images with angled, rotated starburst shapes.
6. **Comparison Table**: Feature checklist with checkmark/X icons driving bundle purchases.

## Anti-patterns (instantly break the vibe)

- Subtle or muted color palettes — this family thrives on high-contrast, saturated pops
- Flat design without depth — every card and button needs the push-button shadow system
- Serif or script display type — bold geometric sans (Prompt 900) only
- Clean, minimal product images — SVG clip-paths and starburst badges are essential
- Static layouts without movement — scrolling marquees and carousels are core to the energy
