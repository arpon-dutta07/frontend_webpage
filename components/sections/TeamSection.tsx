"use client";

import React, { useState } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteContent } from "@/lib/content";

export default function TeamSection() {
  const { team } = siteContent;
  const [activeTappedIdx, setActiveTappedIdx] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveTappedIdx((prev) => (prev === index ? null : index));
  };

  return (
    <section id="team" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-line pb-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="accent">{team.tag}</Badge>
            <span className="font-mono text-xs text-muted tracking-wider uppercase">
              SENIOR ENGINEERING DIRECTORS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <ScrollReveal variant="fade-up">
                <h2 className="font-display font-black text-fluid-h2 uppercase tracking-tight text-ink leading-[1.02]">
                  {team.headline}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body text-fluid-body text-muted leading-relaxed">
                {team.subhead}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Card Leadership Grid with Tap/Click Toggle & Hover Glassmorphic Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member, idx) => {
            const isTapped = activeTappedIdx === idx;

            return (
              <ScrollReveal
                key={member.name}
                variant="fade-up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div
                  onClick={() => toggleCard(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(idx);
                    }
                  }}
                  className={`relative aspect-[3/4] w-full rounded-none overflow-hidden bg-surface-dark-card border transition-all duration-500 clip-chamfer-br group shadow-md hover:shadow-2xl cursor-pointer select-none ${
                    isTapped ? "border-accent ring-1 ring-accent" : "border-line hover:border-accent"
                  }`}
                  aria-label={`Toggle details for ${member.name}`}
                >
                  {/* Background Headshot Portrait Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover object-top transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-md ${
                      isTapped ? "scale-110 blur-md" : ""
                    }`}
                  />

                  {/* Default State: Dark Gradient Bottom Overlay with Name & Role */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent flex flex-col justify-between p-6 transition-opacity duration-300 pointer-events-none group-hover:opacity-0 ${
                      isTapped ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-white/90 font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/20">
                        DIRECTOR 0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                        {member.location.split(",")[0]}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                        {member.name}
                      </h3>
                      <p className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                        {member.role}
                      </p>
                      <span className="font-mono text-[10px] text-neutral-300 block pt-1">
                        TAP / HOVER FOR CREDENTIALS →
                      </span>
                    </div>
                  </div>

                  {/* Glassmorphic Info Overlay (Visible on Hover and on Mobile Tap) */}
                  <div
                    className={`absolute inset-0 bg-black/80 backdrop-blur-lg p-6 flex flex-col justify-between text-white transition-all duration-400 ease-out border border-white/20 group-hover:opacity-100 group-hover:pointer-events-auto ${
                      isTapped ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="space-y-3.5">
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between border-b border-white/20 pb-2.5">
                        <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                          {member.location}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-400">
                          DIRECTOR 0{idx + 1}
                        </span>
                      </div>

                      {/* Name & Role */}
                      <div>
                        <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                          {member.name}
                        </h3>
                        <span className="font-mono text-xs text-accent font-bold block mt-0.5 uppercase">
                          {member.role}
                        </span>
                      </div>

                      {/* Academic Credentials */}
                      <div className="p-2 bg-white/10 border border-white/15 font-mono text-[10px] text-neutral-200 leading-relaxed">
                        {member.credentials}
                      </div>

                      {/* Specialization */}
                      <p className="font-body text-xs text-neutral-300 leading-relaxed">
                        <strong className="text-white font-semibold">Specialization:</strong>{" "}
                        {member.specialization}
                      </p>
                    </div>

                    {/* Key Portfolio Developments */}
                    <div className="pt-3 border-t border-white/20 space-y-1.5">
                      <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider block">
                        KEY PORTFOLIO DEVELOPMENTS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.projects.map((proj) => (
                          <span
                            key={proj}
                            className="font-mono text-[9px] bg-white/15 px-2 py-0.5 border border-white/20 text-white font-bold"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
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
