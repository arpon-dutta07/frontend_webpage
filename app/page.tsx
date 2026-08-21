"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Hero from "@/components/sections/Hero";
import IntroStrip from "@/components/sections/IntroStrip";
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

        {/* Design System & Inertia Verification Section */}
        <section id="tokens" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-line">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-line">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="accent">PHASE 2 VALIDATION</Badge>
                <span className="font-mono text-xs text-muted tracking-wider">
                  DESIGN TOKENS & SYSTEM BENCHMARKS
                </span>
              </div>
              <h2 className="font-display font-black text-fluid-h2 uppercase text-ink">
                SLATE & EMBER SPECIFICATIONS
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">02-DESIGN-SYSTEM.MD</span>
          </div>

          {/* Color Palettes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            <div className="p-4 bg-ink text-paper border border-line flex flex-col justify-between h-28 clip-chamfer-br">
              <span className="font-mono text-[10px] text-muted-on-dark uppercase">--ink</span>
              <span className="font-mono text-xs font-bold">#0E0F11</span>
            </div>
            <div className="p-4 bg-paper text-ink border border-line flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-muted uppercase">--paper</span>
              <span className="font-mono text-xs font-bold">#F4F1EC</span>
            </div>
            <div className="p-4 bg-accent text-white flex flex-col justify-between h-28 clip-chamfer-br">
              <span className="font-mono text-[10px] text-white/80 uppercase">--accent</span>
              <span className="font-mono text-xs font-bold">#C6501F</span>
            </div>
            <div className="p-4 bg-accent-2 text-white flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-white/80 uppercase">--accent-2</span>
              <span className="font-mono text-xs font-bold">#5B6470</span>
            </div>
            <div className="p-4 bg-line text-ink flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-muted uppercase">--line</span>
              <span className="font-mono text-xs font-bold">#D8D4CC</span>
            </div>
            <div className="p-4 bg-muted text-paper flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-white/80 uppercase">--muted</span>
              <span className="font-mono text-xs font-bold">#6B6862</span>
            </div>
            <div className="p-4 bg-surface-dark-card text-muted-on-dark flex flex-col justify-between h-28">
              <span className="font-mono text-[10px] text-muted-on-dark uppercase">--muted-on-dark</span>
              <span className="font-mono text-xs font-bold">#A9A9A6</span>
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

        {/* Tall Scroll Inertia Verification Section */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="outline">LENIS INERTIA SCROLL</Badge>
            <span className="font-mono text-xs text-muted">
              SMOOTH 60FPS SCROLL ENGINE WITH GSAP TICKER SYNC
            </span>
          </div>

          <div className="space-y-6">
            {[1, 2].map((block) => (
              <div
                key={block}
                className="p-8 sm:p-12 bg-white border border-line flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent/40 transition-colors"
              >
                <div className="space-y-2 max-w-xl">
                  <span className="font-mono text-xs text-accent font-bold">
                    SYSTEM BLOCK 0{block}
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl uppercase">
                    HIGH-PERFORMANCE STRUCTURAL ARCHITECTURE
                  </h4>
                  <p className="font-body text-sm text-muted">
                    Engineered to maintain smooth 60fps frame rates with zero layout shift during viewport navigation.
                  </p>
                </div>
                <Button href="/contact" variant="outline" size="sm">
                  CONNECT WITH TEAM
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
