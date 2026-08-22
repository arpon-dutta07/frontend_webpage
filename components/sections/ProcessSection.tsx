"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteContent } from "@/lib/content";

export default function ProcessSection() {
  const { process } = siteContent;
  const [activeIdx, setActiveIdx] = useState(0);

  const phaseImages = [
    "/images/process/phase-01-lidar-audit.jpg",
    "/images/process/phase-02-bim-sequencing.jpg",
    "/images/process/phase-03-modular-erection.jpg",
    "/images/process/phase-04-digital-twin.jpg",
  ];

  const phaseDiagrams = [
    {
      code: "FEA-LIDAR // SCAN",
      param1: "LiDAR DENSITY: 1,200 pts/m²",
      param2: "SOIL COMPLIANCE: 99.8%",
      param3: "SEISMIC FACTOR: 0.42g",
    },
    {
      code: "BIM-4D // CPM",
      param1: "CLASH TOLERANCE: 0.0mm",
      param2: "TEMPORAL NODES: 8,450",
      param3: "SUPPLY CHAIN SYNC: 100%",
    },
    {
      code: "MOD-CRANE // ERECTION",
      param1: "PRECAST MODULARITY: 65%",
      param2: "CRANE CAPACITY: 120T",
      param3: "SCHEDULE GAIN: +40%",
    },
    {
      code: "IOT-TELEMETRY // TWIN",
      param1: "STRAIN GAUGES: 420 NODES",
      param2: "CYCLE LATENCY: 10ms",
      param3: "DESIGN LIFE: 100 YRS",
    },
  ];

  const activePhase = process.phases[activeIdx];
  const activeDiagram = phaseDiagrams[activeIdx];

  return (
    <section id="process" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-line pb-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="accent">{process.tag}</Badge>
            <span className="font-mono text-xs text-muted tracking-wider uppercase">
              METHODOLOGICAL LIFECYCLE & EXECUTION
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

        {/* Interactive Phase Timeline Navigation Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {process.phases.map((phase, idx) => {
            const isActive = activeIdx === idx;

            return (
              <button
                key={phase.step}
                onClick={() => setActiveIdx(idx)}
                className={`p-4 sm:p-5 text-left transition-all duration-300 clip-chamfer-br flex flex-col justify-between border cursor-pointer select-none ${
                  isActive
                    ? "bg-surface-dark text-white border-accent shadow-xl ring-1 ring-accent"
                    : "bg-surface-light-card text-ink border-line hover:border-accent/60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[11px] font-bold tracking-widest ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    0{idx + 1} // {phase.step}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  )}
                </div>
                <span className="font-display font-bold text-sm sm:text-base uppercase tracking-tight line-clamp-1">
                  {phase.title.split(" ")[0]} {phase.title.split(" ")[1] || ""}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: Active Phase Details & HUD Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Comprehensive Phase Specifications */}
          <div className="lg:col-span-7 bg-surface-light-card border border-line p-6 sm:p-10 clip-chamfer-br flex flex-col justify-between shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Step Marker & Live Target */}
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 bg-accent inline-block" />
                    <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                      {activePhase.step} SPECIFICATION
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-ink bg-paper px-3 py-1 border border-line">
                    {activePhase.metrics}
                  </span>
                </div>

                {/* Title & Detailed Narrative */}
                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                    {activePhase.title}
                  </h3>
                  <p className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                    {activePhase.headline}
                  </p>
                  <p className="font-body text-sm sm:text-base text-muted leading-relaxed pt-2">
                    {activePhase.description}
                  </p>
                </div>

                {/* Key Deliverables Matrix */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                    VERIFIED TECHNICAL DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePhase.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="p-3 bg-paper border border-line flex items-center gap-2.5 text-xs font-mono font-medium text-ink"
                      >
                        <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Switcher Controls */}
                <div className="pt-6 border-t border-line flex items-center justify-between">
                  <button
                    disabled={activeIdx === 0}
                    onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                    className="font-mono text-xs font-bold uppercase text-ink hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ← PREVIOUS PHASE
                  </button>

                  <span className="font-mono text-xs text-muted">
                    0{activeIdx + 1} / 0{process.phases.length}
                  </span>

                  <button
                    disabled={activeIdx === process.phases.length - 1}
                    onClick={() => setActiveIdx((prev) => Math.min(process.phases.length - 1, prev + 1))}
                    className="font-mono text-xs font-bold uppercase text-accent hover:underline disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    NEXT PHASE →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Architectural HUD Schematics & Visualizer */}
          <div className="lg:col-span-5 relative min-h-[380px] bg-surface-dark-card border border-line overflow-hidden clip-chamfer-br shadow-xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={phaseImages[activeIdx]}
                  alt={activePhase.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Technical HUD Wireframe Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white pointer-events-none font-mono">
                  {/* Top HUD Telemetry */}
                  <div className="flex items-center justify-between">
                    <Badge variant="dark" className="backdrop-blur-md">
                      {activeDiagram.code}
                    </Badge>
                    <span className="text-[10px] text-accent tracking-wider font-bold">
                      ACTIVE CAD RUNTIME
                    </span>
                  </div>

                  {/* Center Crosshair Target */}
                  <div className="self-center flex flex-col items-center opacity-70">
                    <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent" />
                    </div>
                  </div>

                  {/* Bottom Telemetry Metrics */}
                  <div className="p-3.5 bg-black/80 backdrop-blur-md border border-white/20 space-y-1 text-[10px]">
                    <div className="flex justify-between text-neutral-300">
                      <span>{activeDiagram.param1.split(":")[0]}</span>
                      <span className="font-bold text-white">{activeDiagram.param1.split(":")[1]}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>{activeDiagram.param2.split(":")[0]}</span>
                      <span className="font-bold text-white">{activeDiagram.param2.split(":")[1]}</span>
                    </div>
                    <div className="flex justify-between text-accent font-bold">
                      <span>{activeDiagram.param3.split(":")[0]}</span>
                      <span>{activeDiagram.param3.split(":")[1]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
