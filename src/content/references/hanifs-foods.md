---
name: Hanif's Foods
family: playful
tags: [food, grocery, spices, framer, warm, cream, orange, yellow, rounded, marquee, slideshow, u-shape, sticker, family-business]
palette: ["#F6F0D3", "#FFE594", "#F77F00", "#9A4F00", "#FFC300", "#462905", "#FFF3E2", "#FCFAF8", "#A7D599", "#DBF093", "#F1B695"]
fonts:
  heading: Bricolage Grotesque
  body: Inter
texture: copy-to-clipboard email chip, product slideshow hero on pale yellow with spinning stickers and giant U-shape divider, script-font accent words inside display headlines, orange scrolling marquee band, U-shaped pastel product cards (radius 36/36/120), snapping recipe carousel, U-shaped store cards, testimonial cards with line illustrations, Instagram mosaic grid, giant-radius footer curve
preview: hanifs-foods
notes: |
  - Native Astro recreation (src/components/fullpages/hanifs-foods.astro) with scoped CSS + vanilla JS: all 72 original assets live in public/assets/hanifs/, Bricolage Grotesque + Inter via Google Fonts, Feeling Passionate script accent as a local woff2. A raw Framer salvage copy is kept at public/mirror/hanifsfoods/ for study only.
  - Family-owned world-foods brand (Vancouver, since 1985) built in Framer — a warm "grocery shelf" identity: cream canvas, pale-yellow hero, orange + saffron-yellow CTAs, deep brown type.
  - Editorial Geometry: Bricolage Grotesque 800 display headlines with orange-highlighted words, Feeling Passionate script for accent words ("Homes", "Restaurants", "real", "Buy", "Hop into my kitchen!"), Inter body.
  - Product Slideshow Hero: pale-yellow rounded stage with a dot-grid texture; each slide pairs a giant pastel circle, product photo with drop shadow, spinning sticker badge, star doodles, "Since 1985" kicker, script/regular headline, and a yellow "Order now" pill; back/next round arrows and progress dots.
  - U-Shape Motif: every container ends in an exaggerated bottom curve — hero divider (border-radius 100%/200px), product cards (36/36/120px), store cards (36/36/130px), testimonial cards (28/28/80px), footer (130/130/0) — the page reads as a stack of soft arches.
  - Copy-Email Chip: nav + footer carry an "Email Address / hanif@hanifsfoods.com / Copy to Clipboard" chip that flips to "Copied!".
  - Orange Marquee Band: #F77F00 strip scrolling "What People Say" in script with star icons between About and Products.
  - Pastel Product Grid: 8 cards, one pastel tint each (#F4D69F, #DDCCAE, #DBC8AA, #F2D39A, #F3CF9C, #DBF093, #F1B695, #F1CA89), spinning sticker top-right, uppercase Bricolage name, black "View Products" pill, lift-on-hover.
  - Recipe Carousel: "Hop into my kitchen!" script kicker + arrow buttons driving a scroll-snap row of photo cards.
  - Where to Buy: three white U-shape cards with storefront photo, store logo, address, phone row with icon, hours, black "Get Directions" pill.
  - Testimonials: deep #9A4F00 section, "Taste the Difference." with yellow script, 4 pastel cards (green/cream/pink/yellow) with line illustrations.
  - Social Mosaic: "Loved for Generations. Made for Today." + Instagram grid mixing story (2-row), landscape (2-col), portrait and square tiles with hover "View Post" pills.
  - Closing: off-white #FCFAF8 footer with newsletter input + Submit, two link columns, email chip, copyright + "Engineered by Foundrline".
prompts:
  - label: Full food-brand landing page
    text: |
      Build a warm family-business food brand landing page for [BRAND], a supplier of staple goods, spices and premium world foods since 1985.
      Aesthetic: Hanif's Foods. Palette: cream #F6F0D3 canvas, pale-yellow #FFE594 hero, orange #F77F00 accents and marquee band, deep orange-brown #9A4F00 testimonial section, saffron-yellow #FFC300 CTAs, deep brown #462905 type, off-white #FCFAF8 footer, pastel product tints (#F4D69F, #DDCCAE, #DBC8AA, #F2D39A, #F3CF9C, #DBF093, #F1B695, #F1CA89).
      Typography: Bricolage Grotesque 800 display (96px-class, -0.02em) with orange-highlight words, a bouncy script accent font for single words inside headlines, Inter body 17px.
      Signature motif: every container closes with an oversized bottom curve (U-shape) — hero divider, cards at 120-130px bottom radius, footer at 130px top radius.

      Layout structure in exact order:
      1. Nav: cream sticky bar — logo left, links (About us, Recipes, Testimonials, Contact, Blog), email chip (label + address + "Copy to Clipboard" that flips to "Copied!"), yellow "Shop all" pill with arrow.
      2. Hero: pale-yellow rounded stage with dot-grid texture; product slideshow — giant pastel circle right, product photo with drop shadow, spinning sticker badge, star doodles, "Since 1985" doodle kicker, huge headline "Loved in Homes & Restaurants." with script accents, slide subtitle, yellow "Order now" pill, progress dots, round brown prev/next arrows; giant U-curve divider into cream.
      3. About: "Since 1985" kicker + display headline "Loved in Homes & Restaurants." (script on "Restaurants."), overlapping photo collage (founder, kitchen, people cooking) with star doodle, two paragraphs + yellow CTA.
      4. Marquee band: orange #F77F00 strip scrolling script "What People Say" with star icons.
      5. Products: "Products made with real ingredients" headline (script on "real") + bird doodle; 4×2 grid of U-shape pastel cards — spinning sticker, product photo, uppercase name, blurb, black "View Products" pill; hover lift.
      6. Recipes: script "Hop into my kitchen!" kicker + "Recipe Ideas" + round arrow buttons; scroll-snap carousel of white U-shape cards (16:10 photo, title, blurb, "View Product").
      7. Where to Buy: "Where to Buy" (script on "Buy"); three white U-shape store cards — storefront photo, logo, name, address, phone row with icon, hours, black "Get Directions" pill.
      8. Testimonials: deep #9A4F00 band — "What Our Customers Say" kicker + "Taste the Difference." (yellow script); 4 pastel cards (green/cream/pink/yellow) with line illustration, quote, orange name.
      9. Social: "Loved for Generations. Made for Today." + yellow "Follow on Instagram" pill; mosaic grid (story tile spans 2 rows, landscapes span 2 cols) with hover "View Post" pills.
      10. Footer: off-white #FCFAF8, giant top curve — display headline repeated, newsletter input + Submit, food-bowl line illustration right; two link columns; email chip + copyright bar.
  - label: Product slideshow hero
    text: |
      Generate the pale-yellow hero for [FOOD BRAND]: dot-grid texture, giant pastel circle with product photo + spinning sticker, "Since 1985" kicker, 128px display headline with script accents and orange words, "Order now" yellow pill, dots + round arrows, U-curve divider into cream.
  - label: U-shape card grid
    text: |
      Build the product grid for [GROCERY BRAND]: 8 cards, one pastel tint each, 36/36/120px radius, spinning sticker badge top-right, product photo, uppercase display name, blurb, black pill CTA, hover lift.
source: https://www.hanifsfoods.com/
---

## Why this family exists

Hanif's Foods is a masterclass in making a 40-year-old wholesale grocery brand feel like a modern DTC delight. Everything is soft and edible: cream and pale-yellow canvases, orange and saffron CTAs, arch-shaped cards with exaggerated bottom curves, spinning sticker badges, and a bouncy script font poking single words into otherwise rigid Bricolage Grotesque headlines. The U-shape motif is the identity — the page is a stack of arches, from the hero divider to the footer curve — and every card lifts on hover like a jar being picked off the shelf.

## When to reach for it

- Food, spice, grocery, and heritage-family brands
- Wholesale/B2B suppliers that want a warm DTC face
- Product catalogs that benefit from one-pastel-per-product coding
- Pages that need a friendly "market stall" voice without clip-art clichés

## Key visual signatures

1. **U-Shape Everything**: oversized bottom curves on hero, cards, and footer — the page reads as soft arches.
2. **Script-in-Headline**: a personal-use script font highlights single words ("Homes", "real", "Buy") inside heavy Bricolage Grotesque display lines.
3. **One Pastel Per Product**: each SKU owns a tint (#F4D69F → #F1CA89); the slideshow circle and card share the product's color.
4. **Spinning Stickers**: circular badge stickers rotate slowly on hero and every product card.
5. **Copy-Email Chip**: nav and footer email chips with "Copy to Clipboard → Copied!" micro-interaction.
6. **Orange Band Break**: a #F77F00 scrolling marquee with script text and star icons resets the rhythm between sections.
7. **Dot-Grid Texture**: subtle brown dot grid over the pale-yellow hero stage.

## Anti-patterns (instantly break the vibe)

- Sharp corners — nothing on the page is square; radii run from 16px chips to 130px arches
- Cool grays or blues — the palette stays in cream/yellow/orange/brown with two pastel outliers (green, pink)
- More than one script accent per headline — one bouncy word maximum
- Flat grids without hover motion — every card lifts or its image scales
- Stock-photo backgrounds — photography lives inside cards, circles, and collage frames on solid color
