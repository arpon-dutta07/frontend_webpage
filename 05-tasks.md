# Tasks — Phase Breakdown (checkpoint after each phase)

## Phase 0 — Setup
- [x] `create-next-app` (TypeScript, Tailwind, App Router, src dir: no)
- [x] Install all deps from 03-tech-stack.md
- [x] Set up `styles/tokens.css` with color variables from 02-design-system.md
- [x] Configure `tailwind.config.ts` to reference the CSS variables + fluid type scale
- [x] Set up fonts via `next/font/google` (Space Grotesk, Inter, Space Mono)
- [x] Create folder skeleton from 04-folder-structure.md
- [x] Set up `SmoothScrollProvider.tsx` (Lenis) wrapping `app/layout.tsx`, register GSAP
      ScrollTrigger + Lenis sync
- **Checkpoint:** blank page loads, smooth scroll works on a tall dummy div, fonts render
  correctly, colors match tokens

## Phase 1 — Navbar + Footer (shared shell)
- [x] Navbar: logo, links, contact button, scroll-triggered bg fade
- [x] Mobile menu: full-screen overlay, Framer Motion enter/exit
- [x] Footer: matches reference screenshot 6 layout — logo mark, link columns, socials
- **Checkpoint:** nav + footer responsive at 375px / 768px / 1440px, menu opens/closes
  smoothly on mobile

## Phase 2 — Hero + Intro Strip
- [x] Hero section per PRD section 6, `SplitHeadline` stagger reveal on mount
- [x] Diagonal clip-path image panel, responsive fallback (stacked, no clip-path) below
      `md` breakpoint
- [x] Intro/value strip (dark full-width section)
- **Checkpoint:** headline animates once on load only (not on every re-render), diagonal
  layout collapses cleanly on mobile, image doesn't distort

## Phase 3 — Services Accordion + Stat Block
- [x] Services accordion (Radix) — expand/collapse, one open at a time or multiple, your
      call
- [x] Stat block — 4 cards, `StatCounter` count-up triggered by ScrollTrigger on enter,
      fires once
- **Checkpoint:** counters animate only when scrolled into view, accordion accessible via
  keyboard

## Phase 4 — Work Grid (filterable)
- [ ] `FilterTabs` with Framer Motion sliding indicator
- [ ] Grid of work items, filtered by category, hover zoom on image
- [ ] Case study detail page `[slug]`
- **Checkpoint:** filter transitions smoothly (no layout jump), grid reflows correctly
  1-col mobile / 2-col tablet / 3-col desktop

## Phase 5 — Work Carousel + Closing CTA
- [ ] Embla horizontal carousel, touch/swipe on mobile, arrow nav on desktop
- [ ] Closing CTA full-bleed dark section
- **Checkpoint:** carousel swipe works on real mobile device, no horizontal page overflow

## Phase 6 — Contact Page
- [ ] Form with react-hook-form + zod validation
- [ ] Submit handler (route to chosen email/form service)
- [ ] Success/error states
- **Checkpoint:** form validates client-side, submission works end-to-end

## Phase 7 — Polish Pass
- [ ] Cross-browser check (Safari especially — clip-path + GSAP quirks)
- [ ] Lighthouse pass — target 90+ performance, fix any CLS from animations
- [ ] Reduce-motion media query fallback (`prefers-reduced-motion`) — disable/simplify
      GSAP animations for accessibility
- [ ] Real content swap-in (replace all placeholder copy/images)
- [ ] Meta tags, OG image, favicon

## Phase 8 — Deploy
- [ ] Push to GitHub, connect Vercel
- [ ] Custom domain setup
- [ ] Final QA on production URL across devices
