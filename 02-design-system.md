# Design System — [CLIENT_NAME] Website

> Layout structure is inspired by the attached reference screenshots (industrial/editorial
> construction-site trend). Colors, type, icons, and imagery below are ORIGINAL —
> do not reuse the reference's orange (#ff1a1a-ish), font, icon set, or photography.

## 1. Color Palette — "Slate & Ember"

| Token | Role | Hex |
|---|---|---|
| `--ink` | Primary text / dark sections bg | `#0E0F11` |
| `--paper` | Base background (warm off-white, not pure white) | `#F4F1EC` |
| `--accent` | Primary CTA / highlight (burnt amber) | `#C6501F` |
| `--accent-2` | Secondary accent (cold steel blue-grey) | `#5B6470` |
| `--line` | Borders / dividers | `#D8D4CC` |
| `--muted` | Secondary/body text on light bg | `#6B6862` |
| `--muted-on-dark` | Secondary text on dark bg | `#A9A9A6` |

Usage rule: `--accent` used sparingly (CTAs, active tab indicator, stat highlight card,
badges) — not as a dominant fill like the reference's orange panels. This alone makes
the site read as a different brand at a glance.

Optional alt palette if you want something further from the reference's warm tones —
**"Ash & Signal"**: ink `#111318`, paper `#EFEFEF`, accent electric cyan `#2FD5C8`,
secondary `#8A8F98`. Cooler, more tech-forward — better fit if [INDUSTRY] leans modern/tech
rather than industrial/construction.

## 2. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headlines | **Space Grotesk** (free, Google Fonts) — or licensed **Neue Machina** if budget allows | Bold, uppercase, tight letter-spacing (-0.02em), large sizes (clamp 2.5rem–6rem) |
| Body | **Inter** or **General Sans** | 16–18px base, 1.6 line-height, `--muted` color for secondary paragraphs |
| Labels / badges / stats numbers | **Space Mono** or **JetBrains Mono** | Uppercase, letter-spacing 0.08em, small size — used for category tags, stat labels, nav items |

Type scale (Tailwind config): use a `clamp()`-based fluid scale so headlines shrink
gracefully on mobile instead of wrapping awkwardly.

```
h1: clamp(2.25rem, 6vw, 5.5rem)
h2: clamp(1.75rem, 4vw, 3rem)
body: clamp(1rem, 1.2vw, 1.125rem)
```

## 3. Animation & Interaction Packages

| Package | Use |
|---|---|
| `gsap` + `ScrollTrigger` | Diagonal panel reveals, pinned sections, stat count-up on scroll-into-view, image parallax/scale |
| `lenis` | Smooth inertia scroll, synced with ScrollTrigger |
| `framer-motion` | Menu open/close, button hover states, filter-tab active-indicator (`layoutId`), page/route transitions |
| `split-type` | Headline word/char stagger reveal on load and on scroll |
| `embla-carousel-react` | Horizontal work carousel (screenshot 6), lightweight, touch-friendly |

### Specific animation notes (from reference behavior)
- Hero headline: split into words, `y: 100% → 0` with stagger 0.05s, ease `expo.out`
- Diagonal sections: `clip-path: polygon(...)`, image inside scales `1.15 → 1` as section
  enters viewport (ScrollTrigger scrub)
- Stat numbers: GSAP number tween from 0 to target, triggered once, ease `power2.out`
- Work grid cards: `whileHover={{ scale: 1.03 }}` on image wrapper (Framer Motion),
  category badge fades in on hover
- Filter tabs: active tab has a sliding background/underline via `layoutId="activeTab"`
- Nav: background opacity 0 → 1 tied to scroll position (Lenis scroll value), not a hard
  breakpoint — should feel like a fade, not a snap

## 4. Iconography
Custom SVG only — no icon-pack (Lucide/Feather) for hero/decorative icons, to avoid the
"looks templated" issue. Simple line-based geometric icons (matches the reference's
industrial line-art style) — can be generated per-service once content is final.

## 5. Imagery Direction
- Client's own project/work photography (required — do not use stock photos that
  resemble the reference's construction site imagery)
- If no photography exists yet, use abstract geometric/architectural placeholder
  compositions (not literal construction cranes/containers) until real photos are ready
- Treatment: slight desaturation + duotone overlay in `--ink`/`--accent` on hover states,
  full color at rest — gives cohesion without literally copying reference's B&W treatment
