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

  // Determine navbar background opacity and border based on scroll position
  const isScrolled = useMemo(() => scrollY > 50, [scrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-line shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-ink text-paper group-hover:bg-accent flex items-center justify-center font-display font-black text-lg transition-colors duration-300 clip-chamfer-br">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-ink tracking-tight text-lg sm:text-xl leading-none">
                {siteContent.brand.name}
              </span>
              <span className="font-mono text-[9px] text-muted tracking-widest leading-none mt-1 hidden sm:block">
                SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
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

          {/* Desktop CTA & Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button href={siteContent.cta.href} size="sm" variant="primary" chamfer>
                {siteContent.cta.label}
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center gap-2 p-2 text-ink hover:text-accent transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-wider">MENU</span>
              <div className="w-6 h-4 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-current transition-all" />
                <span className="w-full h-0.5 bg-current transition-all" />
                <span className="w-3/4 self-end h-0.5 bg-current transition-all" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
