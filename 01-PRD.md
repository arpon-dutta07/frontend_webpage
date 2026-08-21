# PRD — [CLIENT_NAME] Website

## 1. Overview
A bold, editorial, scroll-driven marketing website for [CLIENT_NAME], a [INDUSTRY] business.
Visual DNA: confident industrial/editorial layout — diagonal clip-path sections, large
uppercase display type, scroll-triggered reveals, stat blocks, filterable work/case-study
grid. Reference screenshots are attached in `/reference` — use them for LAYOUT and
ANIMATION BEHAVIOR ONLY, not for colors, copy, icons, or imagery (those are original to
this project — see 02-design-system.md).

## 2. Goals
- Convert visitors into leads (primary CTA: contact/consultation request)
- Establish [CLIENT_NAME] as premium/expert in [INDUSTRY]
- Fully responsive: desktop, tablet, mobile — not a shrunk desktop layout, real mobile
  restructuring (diagonal sections collapse to stacked full-width blocks)
- Smooth 60fps scroll animation, no jank on mid-range mobile devices
- Fast load — Lighthouse Performance ≥ 90

## 3. Non-Goals
- No CMS/admin panel in v1 (content is hardcoded from a `content.ts` data file so it's
  still easy to edit later)
- No blog (unless client requests — flag as Phase 2)
- No e-commerce/payments

## 4. Target Audience
[Describe who visits — e.g. potential clients evaluating [CLIENT_NAME], investors,
partners]

## 5. Sitemap / Pages
- `/` — Home (hero, about/value prop, services, stats, featured work, CTA, footer)
- `/work` or `/[case-studies]` — Full filterable grid (mirrors screenshot 4)
- `/work/[slug]` — Individual case study detail page
- `/contact` — Contact form + info
- (optional) `/about`

## 6. Section-by-Section Requirements (maps to reference screenshots)

| Section | Reference | Behavior |
|---|---|---|
| Nav | All screenshots, top bar | Fixed/sticky, transparent→solid on scroll, hamburger menu on mobile with full-screen overlay |
| Hero | Screenshot 1 | Large uppercase headline, split-text stagger reveal on load, diagonal image panel on right, primary CTA button |
| Intro/value strip | Screenshot 1 (dark strip) | Short supporting copy + secondary CTA over full-width image |
| Services/offerings | Screenshot 1, 2 | Two-column: heading + accordion list (expand/collapse) on one side, image on other. 3-4 service items |
| Stat block | Screenshot 3, 5 | 4 stat cards (numbers count up on scroll into view), one highlighted/accent card |
| Filterable work grid | Screenshot 4 | Tab filter row (category-based), 6-item image grid, hover zoom on image, category badge per card |
| Secondary work carousel | Screenshot 6 | Horizontal scroll/swipe carousel of recent work thumbnails |
| Closing CTA | Screenshot 6 | Full-bleed dark section, large statement headline, CTA button |
| Footer | Screenshot 6 | Logo mark, nav links, social icons, copyright |

## 7. Success Metrics
- Page load < 2.5s on 4G
- CTA click-through rate (baseline TBD after launch)
- Zero layout shift on scroll animations (CLS ≈ 0)

## 8. Content Needed From Client
- Final copy for every section above
- High-res photography (project/work images — NOT the reference screenshots' images)
- Logo (vector, SVG preferred)
- Brand colors if any exist already (see 02-design-system.md for proposed palette if not)
