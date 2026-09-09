---
name: Mode Data BI
family: data-bi
tags: [saas, b2b, bi, analytics, enterprise, editorial, sage, lime, serif, highlighter, data]
palette: ["#EEF2E3", "#C8F169", "#043F2E", "#2A6F2B", "#F3F3F3", "#FCFCFC"]
fonts:
  heading: Fraunces
  body: Hanken Grotesk
texture: flat sage #EEF2E3 ground, serif display sitting on lime #C8F169 highlighter pills with connected square corners, square 4px dark-green buttons with lime text, accordion capability rows, real product screenshots with rounded tops, zero gradients
preview: mode-data-bi
notes: |
  - The whole identity is a highlighter move: big Grenette-style serif words sit ON lime #C8F169 pills (padding ~12px 20px, radius 8px), stacked with 8px gaps; adjacent pills zero out touching corners (pill 1 drops bottom-right, pill 2 drops top-left/top-right) so they read as connected bricks
  - Ground is flat sage #EEF2E3 — never white-first; white #FCFCFC appears only for content panels (demo card, alternate sections), footer band flips to ink #043F2E
  - ONE accent: lime #C8F169 — announcement bar, headline pills, active accordion row, footer wordmark, primary-button text on dark; supporting greens #78C51C/#2A6F2B for labels and chart strokes only
  - Type pairing is the trick: Fraunces/Grenette (soft bookish serif, 500, letter-spacing -0.02em, line-height 0.9) for display vs Graphik/Hanken Grotesk 400–600 for ALL UI; italic serif is used sparingly inside section H2s as the accent word
  - Buttons are SQUARE (radius 4px, not pills): primary = #043F2E bg + lime text, secondary = 1px #043F2E outline, 17px 24px padding, 14px medium — the anti-pill is part of the brand
  - Nav sits on sage with the dark MODE wordmark; lime announcement bar above it; dropdown carets on every item; Sign in as plain text link
  - Capabilities are an ACCORDION, not a card grid: hairline-divided rows (01–06), 24–28px sans titles, active row flips to lime and expands to reveal description + real product screenshot (radius 8)
  - Data-stack diagram: Mode as a dark #043F2E row on top with a lime chip, then stacked rounded bars fading gray (Modern BI → Transformation → Warehouse → Ingestion → Raw Data)
  - Hero product screenshot is bottom-anchored with rounded top corners (radius 8, bottom 0) and a soft green shadow — the software is the hero
  - Quote is big italic serif (36px) centered on sage; logo strip is muted gray wordmarks; final CTA + footer live on #043F2E with the lime MODE wordmark at giant scale
  - Motion is minimal: hero's third pill word rotates ("data teams" → …), accordion eases open, buttons color-transition 250ms; nothing else moves
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [PRODUCT NAME], a modern business-intelligence platform. Intent: turn data teams + business teams into [CTA GOAL — start a free trial / request a demo].

      Aesthetic: Mode Data BI. Flat sage #EEF2E3 ground everywhere; white #FCFCFC only for content panels; ink #043F2E for text, dark bands, buttons; ONE accent lime #C8F169 (announcement bar, headline pills, active accordion row, footer wordmark). No gradients, no glass — flat color + hairlines rgba(4,63,46,.18).

      Typography: display = Fraunces (or Grenette if licensed) 500, letter-spacing -0.02em, line-height 0.9; UI/body = Hanken Grotesk (or Graphik) 400–600. Hero headline ~64-72px serif sitting ON lime pills. Section H2 48-56px serif with ONE italic accent word (e.g. "count *on*"). Body 16-18px #5A5C58. Labels 12px uppercase 600 tracking .1em in #2A6F2B.

      Layout — in exact order:
      1. Announcement bar: lime #C8F169, 14px dark text, "ThoughtSpot acquires Mode … → Learn More" underlined.
      2. Nav on sage (sticky): dark MODE wordmark left (real wordmark SVG), 5 links with ▾ carets center, right: "Sign in" text + square dark button "Try for free" (lime text) + outline "Request demo".
      3. Hero: left column = stacked lime serif pills: "Business Intelligence" (border-bottom-right-radius:0) then "built around [rotating word]" (border-top-left/right-radius:0), rotating word cycles data teams → business teams → the whole org every 2.6s; right column bottom-aligned: 2-line sub "Mode is the central hub for your organization's analysis…" + square buttons. Below: real product screenshot, rounded TOP corners only (radius 8, bottom 0), max-width ~1000px pushed right, soft green shadow.
      4. Capabilities (sage): H2 serif "Capabilities you can count *on*". ACCORDION of 6 hairline rows — 01 Ad Hoc Analysis / 02 Advanced Analytics / 03 Interactive Dashboards / 04 Self-Service Reporting / 05 Explorable, Reusable Datasets / 06 Custom Data Apps. Titles 24-28px sans 500 with number + "+" that rotates 45°; active row background flips to lime and expands showing 1-line description + product screenshot (radius 8).
      5. Two audiences (white): kicker "CLEAR THE PATH FROM DATA TO INSIGHTS, TOGETHER", H2 "One platform. Two *teams*." Two columns, each: sage tag chip (MADE FOR YOUR DATA TEAM / AND THE TEAMS YOU WORK WITH), serif H3, muted paragraph.
      6. Stack diagram (sage): centered kicker + H2 "The intelligence layer for your *modern data stack*" + lede. Stacked rounded bars: dark Mode row (white text + lime chip "ANALYTICS · REPORTING · APPS") then Modern BI (white) / Transformation (#F3F3F3) / Warehouse (#E7E7E6) / Ingestion (#CECFCD) / Raw Data. Two square buttons under.
      7. Logo strip (white): 13px uppercase gray heading "MODE CUSTOMERS LEAD THEIR INDUSTRIES" + 8 gray wordmarks.
      8. Quote (sage): centered italic serif 36px, real quote "Mode is incredibly valuable as a full stack, full-service platform from a data analyst all the way to an end user…" — Adam Smith, Analytics Manager, lime avatar circle.
      9. Demo card (sage section, white card radius 20, soft shadow): kicker "LIVE WEEKLY GROUP DEMO", serif H3 "Get to know Mode", paragraph, square dark button "Save your seat"; right side = 3 color cells (sage/lime/ink).
      10. Beyond BI (white): kicker "MODERN BUSINESS INTELLIGENCE", H2 "Beyond BI as *you know it*", lede "Behind every great idea is really great data…", row of 5 outline pill chips with lime dot: Ad hoc analysis / Advanced analytics / Self serve reporting / Custom data apps / Interactive dashboards.
      11. Final CTA (ink #043F2E): serif white H2 "Get more from your data", sub "Your team can be up and running in 30 minutes or less.", lime button + white ghost button.
      12. Footer (ink): lime MODE wordmark, 3 link columns (Platform/Company/Resources) in rgba-white, then GIANT lime wordmark as watermark.

      Spacing: sections 110px vertical, container 1200px, gaps 8px between hero pills. Radius: 8px pills/images/cards, 4px buttons, 20px demo card. Motion: word rotation 2.6s, accordion grid-template-rows ease .3s, button color .25s.

      Guardrails: never use a second accent color; never round buttons to pills (4px only); never put body text in pure black (use #5A5C58 on light, rgba(252,252,252,.72) on dark); never gradient the sage; serif is display-only (never body); lime text is only ever on #043F2E, lime fills only ever carry #043F2E text.
  - label: Hero highlighter headline
    text: |
      Design a hero headline treatment in the Mode Data BI style for [TOPIC — e.g. "Analytics built around revenue teams"].

      Treatment: 2 stacked lines. Each line is its own inline-block pill: background lime #C8F169, radius 8px, padding 12px 20px, text in a soft bookish serif (Fraunces/Grenette) 500, 64-72px, line-height 0.9, letter-spacing -0.02em, color deep green #043F2E. Line 1 zeroes its bottom-right corner; line 2 zeroes top-left AND top-right corners; pills stack with an 8px vertical gap so the zeroed corners read as connected bricks. Line 2 embeds a rotating word slot (min-width 5ch) that swaps every ~2.6s with a 0.18em rise+fade. Right column (bottom-aligned): 18px sans paragraph max 42ch + two SQUARE buttons — solid #043F2E with lime 14px text, and 1px #043F2E outline. Whole hero sits on flat sage #EEF2E3; below, a product screenshot with radius 8 top corners only, pushed right at ~1000px wide with a soft rgba(4,63,46,.14) shadow. Render flat, editorial, zero gradients, generous 6vw side padding.
  - label: Capabilities accordion polish
    text: |
      Polish a capabilities section in the Mode Data BI language without changing content:

      - Container: flat sage #EEF2E3, H2 in serif 48-56px with one italic word, then an accordion list with 1px rgba(4,63,46,.18) top+bottom dividers between rows.
      - Row (closed): 22px vertical padding, 28px horizontal; grid = 2ch number (13px #2A6F2B) + title (24-28px sans 500 #043F2E) + "+" (22px, rotates 45° when open). Hover: nothing flashy — background eases to rgba(200,241,105,.35).
      - Row (open): entire row background flips to solid lime #C8F169; body reveals via grid-template-rows 0fr→1fr (.3s ease): left = 16px/1.6 description max 46ch; right = product screenshot with 8px radius, dropping in under the title.
      - Buttons under the section stay square 4px. No cards, no shadows, no icons — the lime flip IS the interaction design.
      - Keep sage ground, #5A5C58 body text, and never introduce a second accent.
source: https://mode.com/
---

## Why this family exists

Distilled from the real mode.com. Its identity is a **typographic highlighter**: a bookish serif (Grenette) sitting on lime marker pills over a quiet sage ground, kept honest by deliberately un-rounded square buttons and real product screenshots. It proves a B2B data tool can feel editorial and warm without losing credibility — the serif carries the taste, the lime carries the energy, the sage keeps everything calm.

## When to reach for it

- BI / analytics / data-tool landing pages that want warmth without losing enterprise trust
- Products whose interface screenshots are the best asset (software-is-the-hero)
- Brands that want ONE accent color and are willing to let typography do the branding

## Anti-patterns (instantly break the vibe)

- Rounding buttons into pills — the 4px square button is the deliberate counterpoint to the soft serif
- A second accent color — lime is the only pop; supporting greens are for labels/charts only
- White-first backgrounds — the sage ground is the mood; white is only for content panels
- Using the serif for body text or UI — display only
- Card-grid capabilities instead of the accordion — the lime row-flip is a signature interaction
- Gradients or glassmorphism anywhere — flat fields and hairlines only