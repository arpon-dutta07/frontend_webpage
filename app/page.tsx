"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Shared Navigation & Mobile Menu */}
      <Navbar />
      <MobileMenu />

      {/* Main Test / Preview Content for Phase 0 & Phase 1 Checkpoint */}
      <main className="flex-1 pt-28 pb-20">
        {/* Verification Hero Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-b border-line">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="accent">PHASE 0 & 1 CHECKPOINT</Badge>
            <span className="font-mono text-xs text-muted tracking-wider">
              NEXT.JS 15 + SLATE & EMBER DESIGN SYSTEM
            </span>
          </div>

          <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tighter text-ink mb-6 max-w-4xl">
            PRECISION ENGINEERING & STRUCTURAL SYSTEMS.
          </h1>

          <p className="font-body text-fluid-body text-muted max-w-2xl mb-8 leading-relaxed">
            {siteContent.brand.description} Testing fluid typography scales,
            custom CSS tokens, Lenis smooth scrolling integration, responsive
            navbar with dynamic scroll fade, mobile overlay menu, and the
            editorial footer.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#tokens" variant="primary" size="lg" chamfer>
              EXPLORE DESIGN SYSTEM
            </Button>
            <Button href="#scroll-test" variant="outline" size="lg">
              TEST SMOOTH SCROLL ↓
            </Button>
          </div>
        </section>

        {/* Design System Token Verification Section */}
        <section id="tokens" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-line">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-black text-fluid-h2 uppercase text-ink">
              COLOR & TYPOGRAPHY SYSTEM
            </h2>
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

        {/* Tall Scroll Test Section (Validates Lenis Smooth Scroll + Navbar Scroll Trigger) */}
        <section id="scroll-test" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline">LENIS INERTIA SCROLL</Badge>
            <span className="font-mono text-xs text-muted">
              SCROLL DOWN TO OBSERVE NAVBAR TRANSITION & 60FPS INERTIA
            </span>
          </div>

          <div className="space-y-8">
            {[1, 2, 3].map((block) => (
              <div
                key={block}
                className="p-8 sm:p-12 bg-white border border-line flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent/40 transition-colors"
              >
                <div className="space-y-2 max-w-xl">
                  <span className="font-mono text-xs text-accent font-bold">
                    STRUCTURAL BLOCK 0{block}
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl uppercase">
                    MODULAR INDUSTRIAL ARCHITECTURE & HIGH PERFORMANCE
                  </h4>
                  <p className="font-body text-sm text-muted">
                    Demonstrating smooth inertia scrolling with Lenis and GSAP ticker sync.
                    Scroll up and down to observe frictionless deceleration and zero layout jitter.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  VIEW SPECIFICATION
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
