# GRAVIPOINT — Industrial & Architectural Engineering Systems

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square&logo=greensock)](https://gsap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**GRAVIPOINT** is a high-performance, editorial web platform engineered for industrial architecture, subterranean infrastructure, and parametric engineering practices. Designed with a **"Slate & Ember"** aesthetic system, it pairs brutalist geometry and chamfered architectural forms with fluid 60 FPS inertia scrolling, custom GSAP scroll orchestration, and an instant anti-flash dual theme engine (Slate/Ember light mode & Deep Obsidian/Neon dark mode).

---

## 🏛️ Key Features

### 1. **Dual-Theme Design System ("Slate & Ember")**
- **Light Theme**: Deep charcoal ink (`#0E0F11`) on raw limestone paper (`#F4F1EC`) with vibrant burnt ember accents (`#C6501F`) and white CTA typography.
- **Dark Theme**: Crisp limestone ink (`#F4F1EC`) on obsidian slate (`#121316`) with high-voltage neon lime accents (`#D4FF3D`) and obsidian `#121316` CTA typography for maximum legibility.
- **Zero-Flash Hydration**: Fast inline theme resolver executed prior to DOM rendering, persisting user preference to `localStorage` with fallback to `prefers-color-scheme`.
- **View Transitions API**: Experimental circular wipe transition originating from the button click coordinate on supporting browsers.

### 2. **Editorial Typography & Parametric Layout**
- **Fluid Typography**: Dynamic clamp-based sizing (`clamp(2.25rem, 6vw, 5.5rem)`) utilizing Space Grotesk (display), Inter (editorial body), and Space Mono (technical telemetry).
- **Chamfered Architecture**: Precision CSS polygon clip-paths (`.clip-chamfer-br`, `.clip-chamfer-tl-br`, `.clip-diagonal-hero`) reflecting monolithic structural engineering blueprints.
- **Technical Metadata Telemetry**: Coordinated coordinate headers (`43.6532° N, 79.3832° W`), safety ratings, and dynamic project value counters.

### 3. **Motion Physics & Animation Orchestration**
- **Lenis Smooth Scroll**: Decoupled momentum scrolling with locked multi-touch physics and zero layout jitter.
- **GSAP ScrollTrigger**: Scroll-linked parallax image panels, numerical metric counter scrubbers, and section transition lines.
- **Radix UI & Framer Motion**: Accessible keyboard-navigable Accordion discipline explorer paired with spring-physics animated filter tab layouts (`stiffness: 400, damping: 32`).
- **Embla Carousel**: Touch-enabled, momentum-drag continuous portfolio carousel with responsive break-snapping.

### 4. **Enterprise Form Validation & API**
- **Zod + React Hook Form**: Type-safe client validation with realtime feedback, phone format verification, and budget category selectors.
- **Serverless API Route**: Isolated `/api/contact` endpoint with comprehensive server-side input sanitization, error responses, and mock transactional dispatcher.

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
│   ├── globals.css               # Base styles, View Transitions, chamfer utilities
│   ├── icon.svg                  # Vector monogram favicon
│   ├── layout.tsx                # Root layout with font optimization & theme script
│   └── page.tsx                  # Main editorial landing page
├── components/
│   ├── animation/
│   │   ├── ScrollReveal.tsx      # GSAP ScrollTrigger reveal wrapper
│   │   ├── SmoothScrollProvider.tsx # Lenis scroll coordinator
│   │   └── SplitHeadline.tsx     # Typography reveal splitter
│   ├── layout/
│   │   ├── Footer.tsx            # Token-adaptive multi-column index & directory
│   │   ├── MobileMenu.tsx        # Fullscreen mobile navigation overlay
│   │   └── Navbar.tsx            # Floating glassmorphic header with ThemeToggle
│   ├── sections/
│   │   ├── ClosingCTA.tsx        # Monolithic structural perspective closing section
│   │   ├── Hero.tsx              # Diagonal geometry hero with live telemetry
│   │   ├── IntroStrip.tsx        # Editorial brand ethos statement strip
│   │   ├── ServicesAccordion.tsx # 4-discipline Radix accordion explorer
│   │   ├── StatBlock.tsx         # 2x2 audited metric cards + atrium companion
│   │   ├── WorkCarousel.tsx      # Embla touch-gesture portfolio carousel
│   │   └── WorkGrid.tsx          # Filterable category project showcase
│   └── ui/
│       ├── Badge.tsx             # Architectural technical badges
│       ├── Button.tsx            # Chamfered interactive CTA buttons
│       ├── FilterTabs.tsx        # Framer Motion animated tab bar
│       ├── StatCounter.tsx       # GSAP-driven numerical scrub counter
│       └── ThemeToggle.tsx       # Circular View Transition theme toggle button
├── lib/
│   ├── content.ts                # Structured editorial site copy & metadata
│   ├── projects.ts               # Case study repository & categories
│   └── store.ts                  # Zustand state store (Theme & UI drawer)
├── public/
│   ├── favicon.ico               # Legacy favicon icon
│   ├── favicon.svg               # Vector SVG icon
│   ├── apple-touch-icon.png      # iOS home screen touch icon
│   └── images/                   # Optimized architectural assets
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

- **Static Type Checking**: `npx tsc --noEmit` verifies strict type safety across all components and dynamic routes.
- **Production Optimization**: `npm run build` generates 100% pre-rendered static routes (`○ Static`) and dynamic endpoints (`ƒ Dynamic`).
- **Accessibility**: ARIA attributes on all interactive triggers (`Tabs.Root`, `Accordion.Root`, `ThemeToggle`, `MobileMenu`).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` across GSAP animations and smooth scroll providers.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
