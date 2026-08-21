# Folder Structure — [CLIENT_NAME] Website

```
client-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── globals.css                 # Tailwind base + CSS variables (design tokens)
│   ├── work/
│   │   ├── page.tsx                 # Full filterable grid
│   │   └── [slug]/
│   │       └── page.tsx             # Case study detail
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── IntroStrip.tsx
│   │   ├── ServicesAccordion.tsx
│   │   ├── StatBlock.tsx
│   │   ├── WorkGrid.tsx
│   │   ├── WorkCarousel.tsx
│   │   └── ClosingCTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── FilterTabs.tsx
│   │   └── StatCounter.tsx
│   └── animation/
│       ├── SplitHeadline.tsx        # split-type wrapper
│       ├── ScrollReveal.tsx         # GSAP ScrollTrigger wrapper
│       └── SmoothScrollProvider.tsx # Lenis provider
│
├── lib/
│   ├── content.ts                   # all site copy, easy to edit without touching JSX
│   ├── projects.ts                  # work/case-study data
│   └── gsap-config.ts               # GSAP plugin registration, shared ease/duration presets
│
├── public/
│   ├── images/
│   │   └── work/                    # client's real project photography
│   ├── icons/                       # custom SVG icon set
│   └── fonts/                       # if self-hosting beyond next/font
│
├── styles/
│   └── tokens.css                   # color/type CSS variables from design-system.md
│
├── reference/                        # the 6 screenshots you gave me — layout reference
│   ├── 01-hero.png
│   ├── 02-services.png
│   ├── 03-stats.png
│   ├── 04-work-grid.png
│   ├── 05-stats-alt.png
│   └── 06-carousel-footer.png
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

Note: `reference/` folder is for YOUR and Antigravity's use during build only — do not
deploy it to production (`.vercelignore` it or delete before final deploy).
