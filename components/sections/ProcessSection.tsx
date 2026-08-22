"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteContent } from "@/lib/content";

export default function ProcessSection() {
  const { process } = siteContent;
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <section id="process" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-line pb-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="accent">{process.tag}</Badge>
            <span className="font-mono text-xs text-muted tracking-wider uppercase">
              STRUCTURED EXECUTION FRAMEWORK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <ScrollReveal variant="fade-up">
                <h2 className="font-display font-black text-fluid-h2 uppercase tracking-tight text-ink leading-[1.02]">
                  {process.headline}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body text-fluid-body text-muted leading-relaxed">
                {process.subhead}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Phase Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.phases.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;

            return (
              <ScrollReveal
                key={phase.step}
                variant="fade-up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setActivePhaseIndex(idx)}
                  className={`h-full p-6 sm:p-8 bg-surface-light-card border transition-all duration-300 clip-chamfer-br flex flex-col justify-between cursor-pointer group ${
                    isActive
                      ? "border-accent shadow-xl ring-1 ring-accent/30"
                      : "border-line hover:border-ink/40"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Step Bar */}
                    <div className="flex items-center justify-between border-b border-line pb-3">
                      <span className="font-mono text-xs font-bold text-accent tracking-widest">
                        {phase.step}
                      </span>
                      <span className="font-mono text-[10px] text-muted bg-paper px-2 py-0.5 border border-line">
                        {phase.metrics}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-ink group-hover:text-accent transition-colors">
                      {phase.title}
                    </h3>

                    <p className="font-body text-xs text-muted leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-6 mt-6 border-t border-line space-y-2 font-mono text-[11px]">
                    <span className="text-[10px] text-muted uppercase font-bold block mb-1">
                      KEY DELIVERABLES:
                    </span>
                    {phase.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 text-ink/90">
                        <span className="text-accent font-bold">▪</span>
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
