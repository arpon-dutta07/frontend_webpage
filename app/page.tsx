"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Hero from "@/components/sections/Hero";
import IntroStrip from "@/components/sections/IntroStrip";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import StatBlock from "@/components/sections/StatBlock";
import WorkGrid from "@/components/sections/WorkGrid";
import WorkCarousel from "@/components/sections/WorkCarousel";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Shared Navigation & Mobile Menu */}
      <Navbar />
      <MobileMenu />

      <main className="flex-1">
        {/* Phase 2: Hero Section */}
        <Hero />

        {/* Phase 2: Intro / Value Proposition Strip */}
        <IntroStrip />

        {/* Phase 3: Services Accordion Section */}
        <ServicesAccordion />

        {/* Phase 3: Stat Block Section */}
        <StatBlock />

        {/* Phase 4: Work Grid Section (Filterable Portfolio) */}
        <WorkGrid />

        {/* Phase 5: Work Carousel Section (Horizontal Recent Work) */}
        <WorkCarousel />

        {/* Phase 5: Closing CTA Section (Full Bleed Statement) */}
        <ClosingCTA />

        {/* System Architecture & Design System Reference */}
        <section id="tokens" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-line">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-line">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="accent">SYSTEM BENCHMARKS</Badge>
                <span className="font-mono text-xs text-muted tracking-wider">
                  DESIGN TOKENS & PERFORMANCE
                </span>
              </div>
              <h2 className="font-display font-black text-fluid-h2 uppercase text-ink">
                SLATE & EMBER SPECIFICATIONS
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">02-DESIGN-SYSTEM.MD</span>
          </div>

          {/* Color Palettes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            <div className="p-4 bg-ink text-paper border border-line flex flex-col justify-between h-28 clip-chamfer-br">
              <span className="font-mono text-[10px] uppercase opacity-80">--ink</span>
              <span className="font-mono text-xs font-bold">PRIMARY TEXT</span>
            </div>
            <div className="p-4 bg-paper text-ink border border-line flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-muted uppercase">--paper</span>
              <span className="font-mono text-xs font-bold">BASE SURFACE</span>
            </div>
            <div className="p-4 bg-accent text-white flex flex-col justify-between h-28 clip-chamfer-br">
              <span className="font-mono text-[10px] text-white/80 uppercase">--accent</span>
              <span className="font-mono text-xs font-bold">EMBER BRAND</span>
            </div>
            <div className="p-4 bg-[var(--neon,#D4FF3D)] text-[#121316] flex flex-col justify-between h-28 clip-chamfer-br">
              <span className="font-mono text-[10px] uppercase font-bold opacity-80">--neon</span>
              <span className="font-mono text-xs font-bold">DARK ACCENT</span>
            </div>
            <div className="p-4 bg-accent-2 text-white flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-white/80 uppercase">--accent-2</span>
              <span className="font-mono text-xs font-bold">STEEL ACCENT</span>
            </div>
            <div className="p-4 bg-line text-ink flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-muted uppercase">--line</span>
              <span className="font-mono text-xs font-bold">GRID DIVIDER</span>
            </div>
            <div className="p-4 bg-muted text-paper flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-white/80 uppercase">--muted</span>
              <span className="font-mono text-xs font-bold">MUTED BODY</span>
            </div>
            <div className="p-4 bg-surface-dark-card text-muted-on-dark flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-muted-on-dark uppercase">--surface-card</span>
              <span className="font-mono text-xs font-bold">ELEVATION</span>
            </div>
          </div>

          {/* Typography Specimens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-surface-light-card border border-line">
              <span className="font-mono text-xs text-muted block mb-2">DISPLAY / HEADLINES</span>
              <h3 className="font-display font-black text-2xl uppercase mb-2">SPACE GROTESK</h3>
              <p className="font-display font-bold text-sm text-ink/80">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              </p>
            </div>

            <div className="p-6 bg-surface-light-card border border-line">
              <span className="font-mono text-xs text-muted block mb-2">BODY / EDITORIAL</span>
              <h3 className="font-body font-bold text-2xl mb-2">Inter</h3>
              <p className="font-body text-sm text-muted">
                Clean, highly readable typography optimized for body copy and editorial readability.
              </p>
            </div>

            <div className="p-6 bg-surface-light-card border border-line">
              <span className="font-mono text-xs text-muted block mb-2">BADGES / STATS / NAV</span>
              <h3 className="font-mono font-bold text-xl uppercase mb-2">SPACE MONO</h3>
              <p className="font-mono text-xs text-muted">
                TECHNICAL DATA • 100% RESPONSIVE • LAT: 43.6532° N
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
