# Tech Stack — [CLIENT_NAME] Website

## Core
- **Next.js 15** (App Router, TypeScript) — SSR/SSG for SEO, image optimization
- **React 19**
- **Tailwind CSS** — utility styling, custom theme tokens from design-system.md

## Animation
- `gsap` + `gsap/ScrollTrigger` — scroll-driven reveals, pinning, number tweens
- `lenis` — smooth scroll, synced to ScrollTrigger's `scrollerProxy`
- `framer-motion` — component-level micro-interactions, layout animations
- `split-type` — text stagger reveals

## UI / Interaction primitives
- `@radix-ui/react-tabs` — work-grid category filter (accessible base)
- `@radix-ui/react-accordion` — services accordion (Planning & Feasibility style list)
- `embla-carousel-react` — horizontal work carousel

## State
- `zustand` — mobile menu open state, active filter tab, minimal global UI state

## Forms
- `react-hook-form` + `zod` — contact form with validation
- Form submission: [decide — Resend/EmailJS/serverless API route to client's email, or a
  simple form endpoint like Formspree if no backend wanted]

## Images / Assets
- `next/image` — automatic responsive/lazy images, AVIF/WebP
- SVGs as React components via `@svgr/webpack` (already default in Next.js) for custom
  icons

## Fonts
- `next/font/google` — Space Grotesk, Inter, Space Mono (self-hosted via Next, no
  render-blocking Google Fonts request)

## Deployment
- Vercel (matches your existing project deployment pattern)

## Dev tooling
- ESLint + Prettier
- TypeScript strict mode

## package.json — key dependencies to install
```bash
npm install gsap lenis framer-motion split-type embla-carousel-react zustand \
  react-hook-form zod @hookform/resolvers @radix-ui/react-tabs @radix-ui/react-accordion
```
