"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import SplitHeadline from "@/components/animation/SplitHeadline";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export default function ClosingCTA() {
  const { closingCta } = siteContent;

  return (
    <section className="relative bg-ink text-paper py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-line-dark">
      {/* Monolithic Structural Perspective Background */}
      <div className="absolute inset-0 z-0">
        <ScrollReveal variant="parallax" className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={closingCta.image}
            alt="Structural architectural skyline background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 filter contrast-125"
          />
        </ScrollReveal>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Statement & Direct CTA */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-accent inline-block" />
              <Badge variant="dark" className="border border-line-dark">
                {closingCta.eyebrow}
              </Badge>
            </div>

            <ScrollReveal variant="fade-up">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper uppercase tracking-tight leading-[1.02] max-w-3xl">
                {closingCta.headline}
              </h2>
            </ScrollReveal>

            <p className="font-body text-base sm:text-lg text-muted-on-dark max-w-2xl leading-relaxed">
              {closingCta.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href={closingCta.cta.href}
                variant="primary"
                size="lg"
                chamfer
              >
                {closingCta.cta.label}
              </Button>
              <Button
                href="/work"
                variant="dark"
                size="lg"
              >
                EXPLORE PROJECTS
              </Button>
            </div>
          </div>

          {/* Right Column: Key Mandates Card */}
          <div className="lg:col-span-4 p-8 bg-surface-dark-card/90 border border-line-dark backdrop-blur-md space-y-6 clip-chamfer-br">
            <span className="font-mono text-xs text-accent uppercase tracking-wider block">
              COLLABORATION PILLARS
            </span>

            <div className="space-y-4 font-mono text-xs text-muted-on-dark divide-y divide-line-dark/60">
              <div className="pt-2">
                <span className="text-paper font-bold block mb-1">PARAMETRIC ACCURACY</span>
                <span>Sub-millimeter BIM model validation across all engineering disciplines.</span>
              </div>
              <div className="pt-4">
                <span className="text-paper font-bold block mb-1">SAFETY RECORD</span>
                <span>Zero lost-time incident protocols enforced across all active sites.</span>
              </div>
              <div className="pt-4">
                <span className="text-paper font-bold block mb-1">FIXED-PRICE CERTAINTY</span>
                <span>Transparent procurement frameworks eliminating mid-cycle variance.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
