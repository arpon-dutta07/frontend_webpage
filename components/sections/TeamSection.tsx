"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteContent } from "@/lib/content";

export default function TeamSection() {
  const { team } = siteContent;

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

        {/* 4-Card Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member, idx) => (
            <ScrollReveal
              key={member.name}
              variant="fade-up"
              delay={idx * 0.08}
              className="h-full"
            >
              <div className="h-full p-6 sm:p-8 bg-surface-light-card border border-line hover:border-accent transition-all duration-300 clip-chamfer-br flex flex-col justify-between group shadow-sm hover:shadow-xl">
                <div className="space-y-4">
                  {/* Top Location & Stamp */}
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                      {member.location}
                    </span>
                    <span className="font-mono text-[9px] text-muted">DIRECTOR 0{idx + 1}</span>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-ink group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-muted block mt-1">
                      {member.role}
                    </span>
                  </div>

                  {/* Credentials */}
                  <div className="p-2.5 bg-paper border border-line font-mono text-[10px] text-ink/80 leading-relaxed">
                    {member.credentials}
                  </div>

                  {/* Specialization */}
                  <p className="font-body text-xs text-muted leading-relaxed">
                    <strong className="text-ink font-semibold">Focus:</strong> {member.specialization}
                  </p>
                </div>

                {/* Key Projects */}
                <div className="pt-6 mt-6 border-t border-line space-y-2">
                  <span className="font-mono text-[9px] text-muted uppercase tracking-wider block">
                    KEY PORTFOLIO DEVELOPMENTS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.projects.map((proj) => (
                      <span
                        key={proj}
                        className="font-mono text-[10px] bg-paper px-2 py-0.5 border border-line text-ink"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
