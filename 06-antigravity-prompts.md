# Antigravity CLI Prompts — Phase by Phase

Attach `01-PRD.md`, `02-design-system.md`, `03-tech-stack.md`, `04-folder-structure.md`
as context at the start of the session. Attach the relevant screenshot(s) from
`reference/` alongside each phase prompt below where noted. Run one phase at a time,
review the checkpoint from 05-tasks.md before moving to the next.

---

### Phase 0 Prompt
```
Set up a new Next.js 15 project (TypeScript, App Router, Tailwind CSS) for the
[CLIENT_NAME] website. Follow the folder structure in 04-folder-structure.md exactly.
Install these dependencies: gsap, lenis, framer-motion, split-type,
embla-carousel-react, zustand, react-hook-form, zod, @hookform/resolvers,
@radix-ui/react-tabs, @radix-ui/react-accordion.

Create styles/tokens.css with the CSS variables from 02-design-system.md section 1.
Configure tailwind.config.ts to pull from these variables and implement the fluid type
scale in section 2. Set up next/font/google for Space Grotesk, Inter, and Space Mono.

Create components/animation/SmoothScrollProvider.tsx implementing Lenis, synced with
GSAP ScrollTrigger's ticker (use gsap.ticker.add + lenis.raf, disable GSAP's own
lag smoothing). Wrap this around children in app/layout.tsx.

Do not build any page sections yet — just the shell, config, and providers. Confirm
fonts and colors render on a blank test page before stopping.
```

---

### Phase 1 Prompt (attach screenshot 06 for footer reference)
```
Build the shared Navbar and Footer components per 05-tasks.md Phase 1.

Navbar (components/layout/Navbar.tsx): fixed position, transparent at scroll-top,
fades to --paper background with a subtle bottom border as the user scrolls past
~80px — tie this to the Lenis scroll value, not a scroll listener on window, for
smoothness. Include: logo (placeholder text mark for now), nav links (Work, Services,
About, Contact), a primary CTA button, and a hamburger icon on mobile.

MobileMenu (components/layout/MobileMenu.tsx): full-screen overlay using Framer Motion,
animate opacity + a subtle slide/scale on the container, stagger the nav links in with
a small delay each. Trap focus while open, close on Escape and on link click.

Footer (components/layout/Footer.tsx): layout reference is the attached screenshot
(bottom section, dark background) — recreate the STRUCTURE only (large logo mark
bottom-left, link columns, social icons, copyright line) using our own colors from
tokens.css, not their orange.

Make both fully responsive: 375px, 768px, 1440px. Use placeholder content in
lib/content.ts, not hardcoded strings in the components.
```

---

### Phase 2 Prompt (attach screenshot 01)
```
Build the Hero and IntroStrip sections per 05-tasks.md Phase 2, referencing the
attached screenshot for LAYOUT STRUCTURE ONLY — use our own copy, colors (tokens.css),
and a placeholder/abstract image, not their photography.

Hero (components/sections/Hero.tsx):
- Large uppercase headline, split into words using split-type, animate each word's
  wrapper from y: 100%, opacity: 0 -> y: 0, opacity: 1, staggered 0.05s apart, ease
  "expo.out", triggered once on mount (not on scroll).
- Diagonal image panel on the right using clip-path polygon, per the reference layout.
  Below the md breakpoint, remove the clip-path and stack the image full-width below
  the text instead — do not just shrink the diagonal, restructure it.
- Primary CTA button.

IntroStrip (components/sections/IntroStrip.tsx): full-width dark section with
supporting copy and a secondary CTA over a background image, per reference structure.

Wrap the image reveal in components/animation/ScrollReveal.tsx (a reusable GSAP
ScrollTrigger wrapper) so it can be reused in later phases.
```

---

### Phase 3 Prompt (attach screenshots 01, 03, 05)
```
Build the ServicesAccordion and StatBlock sections per 05-tasks.md Phase 3, using the
attached screenshots for structural reference only.

ServicesAccordion (components/sections/ServicesAccordion.tsx): use
@radix-ui/react-accordion. Left column: heading + accordion list of 3-4 services from
lib/content.ts. Right column: supporting image. Style the accordion trigger with a
"+"/"–" icon that rotates on open (Framer Motion), animate height with Radix's built-in
CSS variable approach (--radix-accordion-content-height) for smoothness.

StatBlock (components/sections/StatBlock.tsx): 4 stat cards in a grid, one visually
highlighted with --accent background. Build components/ui/StatCounter.tsx: a GSAP
tween that animates a number from 0 to its target value using ScrollTrigger with
`once: true`, ease "power2.out", duration ~1.5s. Numbers should format with a "+" or
"%" suffix as needed (pass as props).
```

---

### Phase 4 Prompt (attach screenshot 04)
```
Build the filterable WorkGrid per 05-tasks.md Phase 4, using the attached screenshot
for grid/filter structure only — our own project data and images from lib/projects.ts.

components/ui/FilterTabs.tsx: use @radix-ui/react-tabs for the category filter row.
Implement a sliding active-tab background using Framer Motion's layoutId shared layout
animation so the indicator glides between tabs instead of jumping.

components/sections/WorkGrid.tsx: grid of project cards filtered by active category
from Zustand state. Each card: image with a category badge (top-left, our
Space Mono uppercase label style from design-system.md), project name, hover state
scales the image slightly (Framer Motion whileHover) and fades in an arrow icon.
Grid: 1 column mobile, 2 columns tablet, 3 columns desktop.

Also scaffold app/work/[slug]/page.tsx as a basic case study detail template pulling
from lib/projects.ts by slug.
```

---

### Phase 5 Prompt (attach screenshot 06)
```
Build the WorkCarousel and ClosingCTA per 05-tasks.md Phase 5, referencing the attached
screenshot for structure only.

components/sections/WorkCarousel.tsx: use embla-carousel-react for a horizontal
scrolling row of recent-work thumbnails. Enable native touch/swipe on mobile, add
prev/next arrow controls on desktop (hide on touch devices or keep as optional nav).

components/sections/ClosingCTA.tsx: full-bleed dark section (--ink background), large
uppercase statement headline (reuse SplitHeadline if it fits), single strong CTA
button in --accent.

Ensure neither section causes horizontal overflow on the page at any breakpoint —
test at 375px specifically.
```

---

### Phase 6 Prompt
```
Build the Contact page per 05-tasks.md Phase 6.

app/contact/page.tsx: form using react-hook-form + zod schema validation (name, email,
message required; email format validated). On submit, POST to [DECIDE: API route /
Formspree / Resend — specify before running this phase]. Show inline field errors,
a loading state on the submit button, and a success/error message after submission.
Style consistent with tokens.css and the rest of the site — do not use default browser
form styling.
```

---

### Phase 7 Prompt
```
Polish pass per 05-tasks.md Phase 7:
1. Add a `prefers-reduced-motion` check in SmoothScrollProvider and ScrollReveal —
   when true, disable Lenis smoothing and skip/shorten GSAP animations, just show
   content in place.
2. Audit all clip-path sections and GSAP ScrollTrigger pins in Safari specifically —
   fix any known clip-path + transform rendering bugs.
3. Run a Lighthouse audit, report the performance score and fix any flagged
   layout-shift or unoptimized-image issues.
4. Replace all placeholder content in lib/content.ts and lib/projects.ts with final
   copy (I will provide this separately).
5. Add metadata (title, description, OG image, favicon) in app/layout.tsx.
```
