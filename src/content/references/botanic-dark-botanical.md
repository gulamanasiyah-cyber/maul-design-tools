---
name: Botanic Dark Botanical
family: botanic
tags: [dark, botanical, organic, luxury, editorial, plant-store]
palette: ["#06110E", "#0B2E22", "#14503B", "#DAB76A", "#E8ECE6", "#9BA8A3"]
fonts:
  heading: Cormorant Garamond
  body: DM Sans
texture: dark greenhouse photo with heavy vignette + soft grain, warm gold brush-stroke underline, matte card surfaces
preview: botanic-dark-botanical
notes: |
  - Near-black green page (#06110E) — every section sits on the same dark field, never light
  - Gold is the ONLY accent (#DAB76A) — used for brush underline, primary CTA pill, and logobar strip
  - Hero is full-bleed greenhouse image with 35% → 72% → 100% vertical gradient to dark; headline sits directly on image in serif
  - Headline is serif 2 lines centered, brush stroke (240×14 pill, rotated -1.2deg) directly under it
  - Floating review card overlaps hero bottom edge: deep green gradient (#14503B→#0F3D2E), white review box inside + large plant cutout on olive blob (right side)
  - Three micro-pills float on the plant area: "Quick Payment / Good Quality Plant / 24/7 Fast Service" — white pill, green dot
  - Where-Plants section: left image (rounded 18px) with address pill top-left + 25+ Years badge bottom-right overlapping
  - Best Seller: 3 equal cards, center card lifts 18px and shows a filled olive label at bottom-center; each card has white star pill top-left + white + button top-right
  - Logobar is solid gold (#DAB76A) full-width, dark text, 6 logo marks spaced evenly
  - Service grid 4-up: flat dark cards (#0F2A21), first/active card is green gradient with gold border; each has thin gold-ring icon (54px circle)
  - Stats footer: large serif numbers in gold, label in muted 11px — separated by thin line
  - Radius: 18px cards, 999px pills; never use hard corners
  - Motion: slow fade-up only, staggered 0.12s; hero plant has soft drop-shadow, no parallax overkill
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [PRODUCT], a [ONE-LINE DESCRIPTION]. Intent: get visitors to [CTA GOAL].

      Aesthetic: Botanic Dark Botanical. Page background #06110E (near-black green). Card greens #0B2E22 / #0F2A21 / #14503B (deep forest). Single warm accent #DAB76A (gold) used ONLY for: brush underline under hero headline, primary pill CTA ("Sign Up Now" / "Learn More"), and the full-width logobar strip. Text: #E8ECE6 (off-white headings), #9BA8A3 (muted body), #FFFFFF on image overlays. Borders: rgba(255,255,255,0.07).

      Typography: Headings Cormorant Garamond 600, tight tracking (-0.03em), line-height 0.98. Body/UI DM Sans 400/500/700. Hero H1 42–62px centered, exactly 2 lines: "Leafy Beauties For / Every Space." — immediately below, a 240×14 gold brush pill rotated -1.2deg (ellipse clip). Body copy 12–13px/1.7 muted.

      Layout — in exact order:
      1. Nav: absolute over hero, left serif logo "Botanic" + leaf icon, center glass pill nav (rgba(255,255,255,0.10) + blur 16px, 6 links), right gold pill CTA.
      2. Hero: full-bleed greenhouse image (saturate 0.9, brightness 0.85) with vertical gradient rgba(6,17,14,0.35)→0.72→1.0, min-height 760px, centered content. Below headline: 13px muted subtext (max 480ch) + two CTAs side-by-side: glass outline pill "Watch Our Video ▶" + phone call block (38px green circle icon, small "Call Us Now:" + "+123-456-7890").
      3. Floating card: width min(920px,92vw), centered overlapping hero bottom edge, background linear-gradient(135deg,#14503B→#0F3D2E), 18px radius, 1px subtle border, grid 1fr 1.1fr. Left: white rounded review box (14px) with green pill "★★★★★ (5/5)" + 11px muted paragraph + client avatar row (34px circle, name + "Our Client" muted). Right: large plant cutout sitting on an olive blob (420px circle, #9DB66B, asymmetric border-radius 50% 50% 30% 70% / 60% 40% 60% 40%, opacity 0.95). Three white pills float over plant: "Quick Payment" (top-right), "Good Quality Plant" (mid-left), "24/7 Fast Service" (bottom-left) — each with 8px green dot prefix.
      4. Where Plants Find Their People: 2-col (image left 320px height, 18px radius). Address pill top-left (white 92%, 11px bold) + "25+ Years Of Experience" green gradient badge bottom-right overlapping (-14px offset, 32px serif gold number). Right col: 38px serif H2 + 12.5px muted paragraph + gold pill "Learn More".
      5. Our Best Seller Plant: centered H2 serif 36px + 12px muted subtext (560ch). 3-col product cards (300px height, 18px radius, dark #0E1F1A, image cover, bottom vignette gradient). Each: white star pill (★★★★★ (5/5)) top-left, white "+" circle top-right, title at bottom center (16px serif). Center card: translateY(18px), height 320px, olive label (#6B7F4A) at bottom-center overlapping -14px with centered title + muted subtext.
      6. Logobar: full-width solid #DAB76A, flex space-around wrap, 18px padding, 6 logo marks in #1A1408, small square icon + "logoipsum".
      7. Service We Provide: centered 34px serif H2 + 12px muted sub. 4-col grid cards (#0F2A21, 16px radius, centered). First card active: green gradient + gold border rgba(218,183,106,0.18). Each: 54px gold-ring circle icon (rgba(218,183,106,0.35) border, rgba(218,183,106,0.08) fill) + 13px title + 11px muted desc + 11px gold "Learn More →".
      8. Stats: thin top border, grid "We Achieved Best From Gardening" (30px serif, 2 lines) + 4 stats (28px serif gold number + 11px muted label).

      Spacing: section padding 70px 28px, card gap 18px, service gap 16px. Radius 18px cards / 999px pills. No hard section cuts except the gold logobar. Shadows: float card 0 20px 60px rgba(0,0,0,0.45), badges 0 12px 30px rgba(0,0,0,0.35).

      Guardrails: never add purple gradients, glassmorphism stacks, dense icon grids, or a second accent color. Keep first viewport clean — headline + brush + 2 CTAs + overlapping card only. No centered dark hero cliché with floating blobs — the richness comes from photography + olive blob + gold brush only.
  - label: Hero image direction
    text: |
      Generate 3 hero image options for a Botanic Dark Botanical page about [SUBJECT — e.g. "indoor plant store / garden design studio"].

      Direction: dark greenhouse interior / lush plant store at golden hour, seen from slightly above. Dense foliage fills frame, warm practical lights (hanging bulbs) in background, shallow depth of field, film-like grain. Colors desaturated slightly (saturate 0.9, brightness 0.85), deep greens + warm wood tones. Composition MUST leave a calm centered negative space in the upper third for a 2-line serif headline to sit directly on image — no busy leaves behind text. Lower third stays darker (vignette) so a floating green review card can overlap the bottom edge. Render at 1600×900, high detail but photographic, not illustrated. Avoid: bright daylight, flat white backgrounds, isolated plant on white, neon gradients.

      Then take the best and produce a detail crop focused on the floating card area: the same greenhouse slightly blurred behind a deep-green card with a large leafy plant (calathea / monstera) on an olive organic blob — keep the plant isolated and clean for cutout use.
  - label: Service cards & product grid
    text: |
      Polish this service/product section in the Botanic Dark Botanical language without changing its content:

      - Product cards: 300px height (center 320px and lifted 18px), 18px radius, dark surround #0E1F1A, image cover with bottom vignette (transparent→rgba(0,0,0,0.55)). Top row inside card: left white pill "★★★★★ (5/5)" (10px bold) + right white 30px "+" circle. Bottom title centered 16px serif white. Center card's title lives in an olive pill (#6B7F4A, 12px radius, 82% width, -14px overlap) instead of plain overlay.
      - Service cards: 4-up, #0F2A21, 16px radius, centered text. Icon = 54px circle, 1px rgba(218,183,106,0.35) border, rgba(218,183,106,0.08) fill, gold line icon centered. Title 13px white, desc 11px #9BA8A3, link 11px gold. First card gets active treatment: linear-gradient(180deg,#1A4D38→#113A2B) + border rgba(218,183,106,0.18) + soft shadow.
      - Logobar if present: solid #DAB76A, full-bleed, dark text (#1A1408), 18px vertical padding, flex space-around wrap.
      - Keep all body copy at 11–12.5px muted #9BA8A3, never larger. Keep section gutters 28px, card gaps 16–18px. No extra shadows, no glass, no purple.
source: https://images.unsplash.com/photo-1446071103084-c257b5f70672
---

## Why this family exists

Distilled plek-ketiplek from the Botanic reference (dark plant-store landing). It proves that **richness beats minimalism when the photo does the work**: a single dense greenhouse photograph + one matte olive blob + one warm gold brush stroke is enough to carry the whole identity. The rest is restraint — narrow type scale (12–13px body), generous 70px section breathing, and only three greens plus gold doing all the lifting.

## When to reach for it

- Plant stores, garden studios, botanical brands, organic e-commerce, wellness / apothecary, any brand that sells "living" products
- Pages that need to feel lush but still premium (not hippie / not boho) — the dark field keeps it luxury
- Brands with strong photography that can anchor the hero (without good plant imagery, pick a different family)

## Anti-patterns (instantly break the vibe)

- Light / white background — this family ONLY works on #06110E dark
- Adding a second accent (teal, coral, purple) — gold is the only pop
- Turning the floating hero card into a generic centered testimonial — the overlapping position + olive blob + three floating pills are non-negotiable
- Replacing serif headings with sans — the editorial contrast (serif H vs. tiny sans body) is the whole tension
- Using flat vector illustrations instead of photographic plants — the texture comes from real foliage
