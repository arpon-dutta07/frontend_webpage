"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useSmoothScroll } from "@/components/animation/SmoothScrollProvider";
import { useUIStore } from "@/lib/store";
import { siteContent } from "@/lib/content";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const { scrollY } = useSmoothScroll();
  const { toggleMobileMenu } = useUIStore();

  const isScrolled = useMemo(() => scrollY > 30, [scrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Floating Architectural Island Chassis with Rich Frosted Glassmorphism */}
        <div
          className={`transition-all duration-400 ease-out clip-chamfer-br border shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${
            isScrolled
              ? "bg-paper/45 dark:bg-[#121316]/45 backdrop-blur-2xl border-line/80 dark:border-white/15 py-2.5 px-4 sm:px-6"
              : "bg-paper/35 dark:bg-[#121316]/35 backdrop-blur-xl border-line/50 dark:border-white/10 py-3.5 px-4 sm:px-7"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Telemetry Indicator */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-ink text-paper group-hover:bg-accent group-hover:text-accent-text flex items-center justify-center font-display font-black text-base sm:text-lg transition-colors duration-300 clip-chamfer-br shadow-sm">
                G
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-ink tracking-tight text-base sm:text-lg leading-none">
                    {siteContent.brand.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
                <span className="font-mono text-[8px] sm:text-[9px] text-muted tracking-widest leading-none mt-0.5 hidden sm:block">
                  SYSTEMS // EST. 2026
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative font-mono text-xs uppercase tracking-wider font-bold text-ink/80 hover:text-accent transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls: ThemeToggle, CTA, Mobile Menu */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              <ThemeToggle />

              <div className="hidden sm:block">
                <Button href={siteContent.cta.href} size="sm" variant="primary" chamfer>
                  {siteContent.cta.label}
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 border border-line text-ink hover:text-accent hover:border-accent transition-colors clip-chamfer-br focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider">MENU</span>
                <div className="w-4 h-3 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-current" />
                  <span className="w-full h-0.5 bg-current" />
                  <span className="w-2/3 self-end h-0.5 bg-current" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
