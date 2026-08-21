"use client";

import React from "react";
import Image from "next/image";
import SplitHeadline from "@/components/animation/SplitHeadline";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative bg-paper text-ink pt-28 sm:pt-32 md:pt-36 border-b border-line overflow-hidden">
      {/* Top Technical Metadata Grid Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-line pb-3 sm:pb-4">
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-muted tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span>{hero.systemCode}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>LOCATION: 43.6532° N, 79.3832° W</span>
            <span>LATENCY: 60 FPS INERTIA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-ink">EST.</span>
            <span>{siteContent.brand.established}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 sm:py-16 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            <div className="space-y-2">
              <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                ZURICH / TORONTO / LONDON
              </span>
              <SplitHeadline
                text={hero.headline}
                as="h1"
                className="font-display font-black text-fluid-h1 text-ink uppercase tracking-tighter max-w-2xl leading-[0.92]"
                delay={0.15}
              />
            </div>

            <p className="font-body text-fluid-body text-muted max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" chamfer>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Quick Metrics Bar below buttons */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line max-w-lg">
              <div>
                <span className="font-mono text-[10px] text-muted uppercase block">PROJECT VALUE</span>
                <span className="font-display font-bold text-lg sm:text-xl text-ink">$2.4B+</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase block">STRUCTURAL LIFE</span>
                <span className="font-display font-bold text-lg sm:text-xl text-ink">100 YRS</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase block">SAFETY RATING</span>
                <span className="font-display font-bold text-lg sm:text-xl text-accent">ZERO INCIDENTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Diagonal Image Panel on Desktop / Full Width Stack on Mobile */}
          <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
            {/* Desktop Diagonal Panel Wrapper */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-surface-dark-card overflow-hidden md:[clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] border border-line shadow-2xl group">
              <ScrollReveal variant="scale-down" scrub={1} className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={hero.image}
                    alt="Industrial and architectural engineering systems"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle tonal gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Float Badge on Image Panel */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-14 z-10">
                <Badge variant="dark" className="backdrop-blur-md">
                  CORE INFRASTRUCTURE // LEVEL 01
                </Badge>
              </div>
            </div>

            {/* Architectural accent corner markers */}
            <div className="hidden lg:block absolute -right-3 -top-3 w-8 h-8 border-t-2 border-r-2 border-accent pointer-events-none z-20" />
            <div className="hidden lg:block absolute -right-6 -bottom-6 w-32 h-32 border-r-2 border-b-2 border-line pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
