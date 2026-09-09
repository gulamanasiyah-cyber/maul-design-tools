---
name: Content On Demand
family: content-service
tags: [instagram, content-bundle, social, subscription, red, cream, lime, editorial-serif, personal-brand, marquee]
palette: ["#6b3a1f", "#f7f5f0", "#e13f30", "#c8f028", "#1a1814", "#c8b8e8", "#b7de1d"]
fonts:
  heading: Cossette Texte
  body: Pontano Sans
texture: warm red page, cream rounded cards (30px), chunky offset shadows, Instagram "before/after" grid mockups, sticker-style lime CTAs, editorial uppercase display type
preview: content-ondemand
notes: |
  - Done-for-you Instagram content-bundle service landing page, reconstructed from contentondemand.in (Framer, max-width 1600px). All assets and fonts below are the ORIGINAL ones.
  - EXACT type system (from Framer presets): display = "Cossette Texte" — H1/section titles 44px w400 lh110% ls-0.02em centered cocoa; stat numbers 90px w700 plum #332E34; card titles 26px w400; CTA labels 16px w400 ls-0.01em. Body = "Pontano Sans" 18px w400 lh135% cocoa; nav links 16px w500. Badge labels use "Cossette Titre" 16px ls+0.04em. Handwritten accents: "TAY Sweetheart" script.
  - EXACT palette: page/base #E13F30 coral-red, surface #F7F5F0 cream, text #6B3A1F cocoa, CTA lime #C8F028 with hard offset shadow 4px 4px 0 #B7DE1D, ink #1A1814, lavender #C8B8E8, plum #332E34.
  - Page architecture: RED body; each section is a full-width rounded-30px CARD stacked with zero gap (red peeks through corner notches). Band order: nav(cream, bottom-rounded, pad 30/90) → hero(cream) → problems(transparent/red) → solutions(cream) → agitation(transparent) → how-it-works(cream) → comparison(cream) → pricing(transparent) → fun-facts(cream) → FAQs(LAVENDER card!) → gallery(cream) → statement marquee(transparent) → footer(bg image, top-rounded 50px, 30% dark overlay).
  - Hero = ticker FIRST (18 real IG-post tiles, 240×300px, 5px gap, infinite CSS marquee w/ JS-duplicated track, edge-masked) THEN 44px H1 → 3 centered sub lines → lime UN-GHOST MY GRID → coral testimonial card w/ translucent-cream halo circle + overlapping circular PFPs (1px cocoa border) + quote in Cossette 22px cream.
  - Benefit cards in Solutions are full-bleed designed GRAPHICS (2944×1648) with dark bottom gradient + cream text — h-scroll row, 546px wide.
  - Pricing: cream card on red, 2px coral border + INSET coral glow (inset 0 0 5px 5px rgba(225,63,48,.2)), coral corner badge "Most popular 🌶" (Cossette Titre), price in a grey #D9D9D9 pill w/ 50%-alpha ink text, "Trusted by:" @handles row below.
  - Stats ("COD fun Facts"): 90px Cossette w700 numerals color-coded on cream — 180+ cocoa, 15+ lavender, 64 coral, 4 lime. FAQs = numbered rows (Cossette 18px num + Pontano 18px w700 question) on the lavender card.
  - Footer: full-bleed image + 30% ink overlay, cream 44px "BRINGING BACK GLORY TO THE GRAM", newsletter form (translucent cream rgba(247,245,240,.8) fields, radius 12, placeholder #808080) + lime SUBSCRIBE + Our Product/Legal/Connect columns.
prompts:
  - label: Full landing page
    text: |
      Rebuild a done-for-you Instagram content-bundle landing page ("Content On Demand") with EXACT fidelity to the original.
      Fonts (Google Fonts): display + CTA labels = "Cossette Texte" (H1 44px w400 lh110% ls-0.02em centered; stat numerals 90px w700; card titles 26px; CTA 16px w400 ls-0.01em UPPERCASE); body = "Pontano Sans" (18px w400 lh135%); badge labels = "Cossette Titre" 16px ls+0.04em. Optional handwritten accent: TAY Sweetheart script.
      Colors: page base #E13F30 coral-red; surfaces #F7F5F0 cream; body text #6B3A1F cocoa; CTA lime #C8F028 with HARD offset shadow 4px 4px 0 #B7DE1D; ink #1A1814; lavender #C8B8E8; plum #332E34; grey price pill #D9D9D9 w/ rgba(26,24,20,.5) text.
      Architecture: red body; every section is a full-width rounded-30px CARD stacked with ZERO gap (red peeks through the corner notches). Section order and fills:
      1. Nav — cream, full-width, bottom corners rounded 30px, padding 30px 90px: wordmark "content·on·demand" (Cossette 700), links How it Works / Pricing / FAQs / Case Studies / COD for agencies (Pontano 16px), lime GRAB A BUNDLE pill.
      2. Hero (cream card, pad 60/0/90, 44px inner gaps): FIRST an auto-scrolling marquee of 18 real 4:5 Instagram post tiles (240×300px, 14px radius, 5px gap, edge-masked, JS-duplicated track, ~80s loop, pause on hover) → H1 "TURN YOUR GHOST TOWN GRID INTO THIS" (44px Cossette, cocoa) → 3 centered Pontano 18px lines ("Zero effort from you & no strings attached to us." / "Sounds like you. Looks like it came with your brand book." / "12 content pieces exactly how you imagine them (or better) in just 7 days.") → lime UN-GHOST MY GRID → coral testimonial card (radius 30) with a translucent-cream halo circle (rgba(247,245,240,.45), 340px) bleeding off the top-left, 3 overlapping circular PFPs w/ 1px cocoa border (96/64/48px), 22px Cossette cream pull-quote, "Caitlyn · Caitlyn Grad Marketing".
      3. Problems (transparent → red shows): "RIP TO THE POSTS THAT NEVER MADE IT BECAUSE" 44px cream; single-column rows 01–06, number in Cossette 18px cream + text Pontano 18px cream on 1px 25%-cream dividers; optional tilted decorative graphic on the right.
      4. Solutions (cream card): eyebrow + "CUE: THE CONTENT BUNDLE" 44px; horizontally scrolling row of 5 benefit cards 546×340px — each a full-bleed designed graphic bg + dark bottom gradient + cream 26px Cossette title + 16px body (Quick Turnaround / NO STRINGS ATTACHED / 100% FLEXIBILITY / STILL SO YOU / REUSE & RECYCLE). Lime UN-GHOST MY GRID after.
      5. Agitation (transparent/red): 44px cream headline "IT'S HARD TO GIVE UP CONTROL…" + 2-col cream body copy; right column ends in a cream card: From "I need content" → "ready to post" (32px Cossette, lime highlight).
      6. How it all works (cream card): eyebrow + 44px title; 5 step cards (cream, 2px cocoa border, radius 20, coral offset shadow, alternating rotate ±2deg) numbered 01–05 in coral 26px Cossette.
      7. Comparison (cream card): 44px title "WE BORROWED THE BEST PARTS…"; a 6-column table (blank + COD highlighted coral header + Agency/In-house/Templates/DIY on cocoa header) with rows for Looks&feels / Brand+strategy+design / Time to publish / Commitment / Captions / Built around goals / Your involvement — ✓ green / ✗ muted.
      8. Pricing (transparent/red): 44px cream "THE GOODS, ON DEMAND"; single centered cream card w/ 2px coral border, radius 30, INSET coral glow (inset 0 0 5px 5px rgba(225,63,48,.2)), coral top-right corner badge "Most popular 🌶" (Cossette Titre), "Signature Bundle" 36px, $777 grey pill, checklist w/ coral ✓, full-width lime REQUEST A BUNDLE. Below: "Trusted by:" + 5 @handles in cream Cossette 20px.
      9. COD fun Facts (cream card): 4-col stats — 90px Cossette w700 numerals: 180+ cocoa / 15+ lavender / 64 coral / 4 lime, Pontano labels. Then founder split: rounded portrait (radius 30, 2:3) + "Hi, I'm Aishwarya," 36px essay.
      10. FAQs (LAVENDER #C8B8E8 card!): "FAQs" 44px cocoa; 8 numbered rows (Cossette 18px number + Pontano 18px w700 question) on 1px 30%-cocoa dividers.
      11. Gallery (cream card): "YOUR NOTES APP JUST GOT HACKED, AND YOU'RE RELEASED FROM CONTENT JAIL FOR A WHOLE MONTH 🔒" 44px; "Stay a while and play around…" tagline; scattered polaroid tiles (230×288, radius 14, offset shadow, rotate ±3–6deg) using real IG post images.
      12. Statement marquee (transparent/red): infinite scrolling 26px Cossette cream line "The experience of an agency, flexibility of a freelancer, and the comfort of an in-house team. ✳ …".
      13. Footer: full-bleed image bg + 30% ink overlay, top corners rounded 50px; "BRINGING BACK GLORY TO THE GRAM" 44px cream; newsletter form (Name/Email/I'm-a select; fields rgba(247,245,240,.8), radius 12, placeholder #808080) + full-width lime SUBSCRIBE; columns Our Product / Legal / Connect; fine-print row.
      Guardrails: keep the flat sticker CTAs (hard offset shadow, never soft glow); keep every photo/graphic in a rounded container with a CSS fallback background; max-width 1600px, generous 90px section padding on desktop.
  - label: Instagram tile marquee hero
    text: |
      Build a full-width auto-scrolling marquee of real 4:5 Instagram content tiles for a cream hero card.
      Track: flex row, 5px gap, list-style none, width max-content, infinite translateX loop (~80s, linear), duplicated content via JS for a seamless wrap, masked on both edges with a transparent-to-black horizontal gradient, pauses on hover.
      Tiles: 240px wide × 300px tall (200×250 on mobile), 14px radius, overflow hidden, object-fit cover, real portrait IG post images (1080×1350), fallback background #EEE7DD. Alternate their color themes in an R,G,P rhythm so the feed reads color-coded.
  - label: Sticker CTA + coral pricing card polish
    text: |
      Polish the CTA + pricing card on a red page.
      CTA: background #C8F028, text #6B3A1F, "Cossette Texte" 16px w400 UPPERCASE ls-0.01em, padding 16px 20px, radius 12px, HARD offset shadow `4px 4px 0 0 #B7DE1D` (flat, no blur). Hover: translate(-2px,-2px), shadow grows to 6px 6px. Nav variant uses Pontano Sans 600 and ink text.
      Pricing card: cream #F7F5F0 fill, `border: 2px solid #E13F30`, radius 30px, INNER coral glow `box-shadow: inset 0 0 5px 5px rgba(225,63,48,0.2)`, coral top-right badge "Most popular 🌶" in Cossette Titre 16px ls+0.04em, price in a #D9D9D9 pill with rgba(26,24,20,.5) 700 text, checklist with coral ✓ marks on thin #E3DCCD dividers.
      Never use soft drop-shadows or gradients on buttons — flat fills + the hard offset sticker shadow only.
source: https://contentondemand.in/
---

## Content On Demand

A personal-branch content-bundle service that sells done-for-you Instagram content. The page
turns "I need content" anxiety into one confident promise — ghost town grid → curated grid —
using a hot red stage, cream rounded cards, sticker-lime CTAs, and an editorial uppercase
display voice that feels like a designer's brand book, not a template.