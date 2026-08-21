"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StatCounter from "@/components/ui/StatCounter";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export default function StatBlock() {
  const { stats } = siteContent;

  return (
    <section id="about" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{stats.tag}</Badge>
            <span className="font-mono text-xs text-muted tracking-wider">
              QUANTIFIABLE SCALE & PRECISION
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-muted">
            AUDITED METRICS
          </span>
        </div>

        {/* Two-Column Grid: Left 4 Stat Cards, Right Editorial Statement + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Stat Cards (2x2 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.cards.map((card, index) => {
              const isHighlight = card.highlight;

              return (
                <ScrollReveal
                  key={card.label}
                  variant="fade-up"
                  delay={index * 0.08}
                  className="h-full"
                >
                  <div
                    className={`h-full p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isHighlight
                        ? "bg-accent text-white shadow-lg clip-chamfer-tl-br"
                        : "bg-surface-light-card text-ink border border-line hover:border-ink/40 clip-chamfer-tl-br"
                    }`}
                  >
                    {/* Upper Value */}
                    <div className="space-y-1 mb-6">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-black">
                        <StatCounter
                          targetValue={card.value}
                          prefix={card.prefix}
                          suffix={card.suffix}
                          duration={1.6}
                          className={isHighlight ? "text-white" : "text-ink"}
                        />
                      </div>
                      <div
                        className={`h-0.5 w-8 ${
                          isHighlight ? "bg-white/60" : "bg-accent"
                        }`}
                      />
                    </div>

                    {/* Lower Label & Description */}
                    <div className="space-y-1">
                      <h4
                        className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${
                          isHighlight ? "text-white" : "text-ink"
                        }`}
                      >
                        {card.label}
                      </h4>
                      <p
                        className={`font-body text-xs ${
                          isHighlight ? "text-white/80" : "text-muted"
                        }`}
                      >
                        {card.sub}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Column: Statement & Companion Image Panel */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <ScrollReveal variant="fade-up">
                <h3 className="font-display font-black text-fluid-h2 text-ink uppercase tracking-tight leading-[1.08]">
                  {stats.headline}
                </h3>
              </ScrollReveal>

              <p className="font-body text-fluid-body text-muted leading-relaxed">
                {stats.description}
              </p>
            </div>

            {/* Architectural Atrium Companion Card */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] bg-surface-dark-card border border-line overflow-hidden clip-chamfer-br shadow-md group">
              <ScrollReveal variant="scale-down" className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={stats.image}
                    alt="Monolithic architectural atrium"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                </div>
              </ScrollReveal>

              {/* Geometric Monument Symbol in Center-Right */}
              <div className="absolute top-4 right-4 z-10 opacity-75">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="35" y="10" width="30" height="80" stroke="currentColor" strokeWidth="2" />
                  <rect x="20" y="25" width="60" height="65" stroke="currentColor" strokeWidth="2" />
                  <rect x="5" y="45" width="90" height="45" stroke="currentColor" strokeWidth="2" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Float Tag */}
              <div className="absolute bottom-4 left-4 z-10">
                <Badge variant="dark" className="backdrop-blur-md">
                  GLOBAL ACCREDITATION // ISO 45001
                </Badge>
              </div>
            </div>

            <div>
              <Button href="/work" variant="outline" size="md">
                EXPLORE VERIFIED CASE STUDIES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
