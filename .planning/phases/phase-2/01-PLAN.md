# Phase 2 Plan: Hero & Intro Strip

## Objective
Build the Hero and IntroStrip sections per `05-tasks.md` Phase 2 and `06-antigravity-prompts.md`, referencing screenshot `01-hero.png` for layout structure only.

## Tasks
1. **Task 1 (auto)**: Create `components/animation/SplitHeadline.tsx` and `components/animation/ScrollReveal.tsx`.
2. **Task 2 (auto)**: Create `components/sections/Hero.tsx` with diagonal clip-path on desktop and stacked mobile fallback.
3. **Task 3 (auto)**: Create `components/sections/IntroStrip.tsx` with full-bleed dark value proposition and CTA.
4. **Task 4 (auto)**: Update `app/page.tsx` with `Hero` and `IntroStrip`.
5. **Task 5 (checkpoint)**: Verify in browser subagent that headline animates once on mount, diagonal collapses cleanly on 375px mobile, and no layout shift occurs.
