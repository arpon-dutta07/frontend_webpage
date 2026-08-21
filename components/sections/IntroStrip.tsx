"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export default function IntroStrip() {
  const { introStrip } = siteContent;

  return (
    <section className="relative bg-surface-dark text-white py-20 sm:py-28 overflow-hidden border-b border-line-dark">
      {/* Monolithic Background Texture Image with Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <ScrollReveal variant="parallax" className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={introStrip.image}
            alt="Monolithic industrial structural background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 filter contrast-125"
          />
        </ScrollReveal>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-surface-dark/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Eyebrow & Headline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-accent inline-block" />
              <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold">
                {introStrip.eyebrow}
              </span>
            </div>

            <ScrollReveal variant="fade-up">
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight leading-tight max-w-3xl">
                {introStrip.statement}
              </h2>
            </ScrollReveal>

            <p className="font-body text-sm sm:text-base text-muted-on-dark max-w-2xl leading-relaxed">
              {introStrip.description}
            </p>
          </div>

          {/* CTA & Consultation Trigger */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 pt-4 lg:pt-0">
            <Button
              href={introStrip.cta.href}
              variant="primary"
              size="lg"
              chamfer
              className="w-full sm:w-auto"
            >
              {introStrip.cta.label}
            </Button>

            <div className="flex items-center gap-4 text-muted-on-dark font-mono text-[11px] uppercase tracking-wider">
              <span>SECURITY CERTIFIED</span>
              <span>•</span>
              <span>ISO 9001 COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
