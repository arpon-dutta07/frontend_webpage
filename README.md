# GRAVIPOINT — Industrial & Architectural Engineering Systems

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square&logo=greensock)](https://gsap.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**GRAVIPOINT** is a high-performance, editorial web platform engineered for industrial architecture, subterranean infrastructure, and parametric engineering practices. Designed with a **"Slate & Ember"** aesthetic system, it pairs brutalist geometry and chamfered architectural forms with fluid 60 FPS inertia scrolling, custom GSAP scroll orchestration, native 1080p drone video integration, staggered cascading text animations, and an instant anti-flash dual theme engine (Slate/Ember light mode & Deep Obsidian/Neon dark mode).

---

## 🏛️ Key Architectural Features

### 1. **Dual-Theme Design System ("Slate & Ember")**
- **Light Theme**: Deep charcoal ink (`#0E0F11`) on raw limestone paper (`#F4F1EC`) with vibrant burnt ember accents (`#C6501F`) and white CTA typography.
- **Dark Theme**: Crisp limestone ink (`#F4F1EC`) on obsidian slate (`#121316`) with high-voltage neon lime accents (`#D4FF3D`) and dark obsidian CTA typography for maximum contrast.
- **Diagonal Theme Alternation**: Stat Block cards diagonally alternate Ember Orange in light mode and Neon Lime in dark mode.
- **Zero-Flash Hydration**: Fast inline theme resolver executed prior to DOM rendering, persisting user preference to `localStorage` with fallback to `prefers-color-scheme`.

### 2. **Native 1080p Drone Video Integration & Audio Controls**
- **Hero Video Panel**: Features full-bleed 1080p construction footage (`/Construction promo video - jaugrizau (1080p, h264).mp4`) fitted inside a diagonal polygon shape (`clip-path: polygon(0_0, 100%_0, 100%_100%, 20%_100%)`).
- **Cinematic Finale Section**: Uses 1080p aerial drone construction footage (`/vidssave.com OTBx Air - Construction Promo 1080P.mp4`) at 75% opacity with glassmorphic telemetry cards.
- **Pure Icon Audio Toggle**: Minimalist glassmorphic circular toggle buttons (`[🔇]` / `[🔊]`) enabling instant audio unmuting/muting without interrupting playback.
- **Zero-Overlay Continuous Loop**: Native HTML5 `<video autoPlay loop muted playsInline>` execution eliminates all third-party pause icons, rewind overlays, or end screens on mobile and desktop.

### 3. **Universal Cascading Text Animations**
- **Character Reveal Primitive (`cascade-text.tsx`)**: Staggered character-by-character translation and shadow rolling animation on hover.
- **Global Button Integration**: Integrated directly into `Button.tsx`, automatically applying staggered character roll effects to every CTA button across light and dark themes.

### 4. **Interactive 4-Phase Engineering Lifecycle**
- **Methodology Explorer (`ProcessSection.tsx`)**: 4-phase interactive process bar (Feasibility, 4D BIM, Modular Erection, Digital Twin).
- **CAD HUD Telemetry**: Animated Framer Motion phase switcher, active CAD schematic HUD overlay, verified deliverables matrix, and precision metric benchmarks.

### 5. **Leadership & Engineering Team Showcase**
- **Editorial Headshots (`TeamSection.tsx`)**: Photorealistic editorial portraits for senior directors.
- **Reversible Tap-to-Toggle & Glassmorphic Blur**: Tapping/hovering blurs the headshot and slides in a frosted glassmorphism overlay revealing credentials, specializations, and portfolio project badges. Tapping again on mobile cleanly reverses back to the portrait.

### 6. **Comprehensive Work Archive & Case Studies**
- **Projects Directory (`/work`)**: Filterable project gallery (`ALL`, `INDUSTRIAL`, `COMMERCIAL`, `INFRASTRUCTURE`) with aggregate stats bar and zoom preview cards.
- **Case Study Sub-Pages (`/work/[slug]`)**: Panoramic HUD hero, 4-metric summary cards, Challenge vs. Solution matrix, audited benchmarks, verified deliverables, and project navigation.

### 7. **Native Scrollbar Removal & Inertia Physics**
- **Invisible Scrollbar**: Native browser scrollbars hidden across Firefox, Chrome, Safari, and Edge (`scrollbar-width: none; ::-webkit-scrollbar { display: none; }`).
- **Lenis Inertia Scroll**: Smooth, decoupled momentum scrolling with zero layout jitter.

---

## 📐 Design Tokens

| Token | Light Theme | Dark Theme | Purpose |
|---|---|---|---|
| `--ink` | `#0E0F11` | `#F4F1EC` | Primary text and headlines |
| `--paper` | `#F4F1EC` | `#121316` | Main canvas background |
| `--accent` | `#C6501F` (Ember) | `#D4FF3D` (Neon) | Brand focus & interactive triggers |
| `--accent-text` | `#FFFFFF` | `#121316` | High-contrast text on accent surfaces |
| `--accent-2` | `#5B6470` | `#8891A0` | Structural steel secondary elements |
| `--line` | `#D8D4CC` | `#2A2C31` | Architectural grid division borders |
| `--muted` | `#6B6862` | `#9B9892` | Secondary technical copy |
| `--surface-dark`| `#15171B` | `#0A0B0D` | Monolithic break sections & cards |

---

## 📂 Project Architecture

```
frontend-design/
├── app/
│   ├── api/
│   │   └── contact/route.ts      # Contact endpoint with Zod validation
│   ├── contact/page.tsx          # Full-page consultation request portal
│   ├── work/
│   │   ├── page.tsx              # Comprehensive project archive directory
│   │   └── [slug]/page.tsx       # Dynamic project case study showcase
│   ├── globals.css               # Base styles, View Transitions, chamfer utilities, scrollbar hiding
│   ├── icon.svg                  # Vector monogram favicon
│   ├── layout.tsx                # Root layout with font optimization & theme script
│   └── page.tsx                  # Main editorial landing page
├── components/
│   ├── animation/
│   │   ├── ScrollReveal.tsx      # GSAP ScrollTrigger reveal wrapper
│   │   ├── SmoothScrollProvider.tsx # Lenis scroll coordinator
│   │   └── SplitHeadline.tsx     # Typography reveal splitter
│   ├── layout/
│   │   ├── Footer.tsx            # Clean editorial directory footer
│   │   ├── MobileMenu.tsx        # Fullscreen mobile navigation overlay
│   │   └── Navbar.tsx            # Floating glassmorphic header with ThemeToggle
│   ├── sections/
│   │   ├── ClosingCTA.tsx        # 1080p drone video closing section with pure icon audio button
│   │   ├── Hero.tsx              # 1080p diagonal video hero with live telemetry & audio button
│   │   ├── IntroStrip.tsx        # Editorial brand ethos statement strip
│   │   ├── ProcessSection.tsx    # 4-phase CAD HUD methodology explorer
│   │   ├── ServicesAccordion.tsx # 4-discipline Radix accordion explorer
│   │   ├── StatBlock.tsx         # Alternating diagonal stat block cards
│   │   ├── TeamSection.tsx       # Team section with photo hover/tap glassmorphic reveal
│   │   ├── WorkCarousel.tsx      # Embla touch-gesture portfolio carousel
│   │   └── WorkGrid.tsx          # Filterable category project showcase
│   └── ui/
│       ├── Badge.tsx             # Architectural technical badges
│       ├── Button.tsx            # Chamfered CTAs integrated with TextReveal cascading animation
│       ├── cascade-text.tsx      # Character-by-character staggered cascading animation
│       ├── FilterTabs.tsx        # Framer Motion animated tab bar
│       ├── StatCounter.tsx       # GSAP-driven numerical scrub counter
│       └── ThemeToggle.tsx       # Circular View Transition theme toggle button
├── lib/
│   ├── content.ts                # Structured editorial site copy, process & team data
│   ├── projects.ts               # Case study repository & category metadata
│   └── store.ts                  # Zustand state store (Theme & UI drawer)
├── public/
│   ├── Construction promo video - jaugrizau (1080p, h264).mp4 # 1080p Hero video
│   ├── vidssave.com OTBx Air - Construction Promo 1080P.mp4   # 1080p Finale video
│   ├── favicon.ico               # Legacy favicon icon
│   ├── favicon.svg               # Vector SVG icon
│   └── images/                   # Optimized architectural assets & director headshots
├── styles/
│   └── tokens.css                # CSS custom property token definitions
├── tailwind.config.ts            # Tailwind configuration mapped to CSS tokens
└── tsconfig.json                 # Strict TypeScript compiler options
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arpon-dutta07/frontend_webpage.git
   cd frontend_webpage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm run start
   ```

---

## 🧪 Verification & Quality Assurance

- **Static Type Checking**: `npx tsc --noEmit` verifies strict type safety across all components and dynamic routes (0 errors).
- **Production Build**: `npm run build` compiles 100% pre-rendered static pages (`○ Static`) and dynamic routes (`ƒ Dynamic`).
- **Accessibility**: Full ARIA support across interactive triggers (`Tabs.Root`, `Accordion.Root`, `ThemeToggle`, `MobileMenu`, Audio Buttons).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` across GSAP animations and smooth scroll providers.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
