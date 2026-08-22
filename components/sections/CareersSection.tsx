"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteContent } from "@/lib/content";

export default function CareersSection() {
  const { careers } = siteContent;

  return (
    <section id="careers" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-line pb-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="accent">{careers.tag}</Badge>
            <span className="font-mono text-xs text-muted tracking-wider uppercase">
              OPPORTUNITIES & PRACTICE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <ScrollReveal variant="fade-up">
                <h2 className="font-display font-black text-fluid-h2 uppercase tracking-tight text-ink leading-[1.02]">
                  {careers.headline}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body text-fluid-body text-muted leading-relaxed">
                {careers.subhead}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Open Roles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {careers.openings.map((job, idx) => (
            <ScrollReveal
              key={job.id}
              variant="fade-up"
              delay={idx * 0.08}
              className="h-full"
            >
              <div className="h-full p-6 sm:p-8 bg-surface-light-card border border-line hover:border-accent transition-all duration-300 clip-chamfer-br flex flex-col justify-between group shadow-sm hover:shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <Badge variant="default">{job.department}</Badge>
                    <span className="font-mono text-[10px] text-muted">{job.type}</span>
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-ink group-hover:text-accent transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-muted">
                    <span className="bg-paper px-2 py-0.5 border border-line">{job.location}</span>
                    <span className="bg-paper px-2 py-0.5 border border-line">{job.experience}</span>
                  </div>

                  <p className="font-body text-xs text-muted leading-relaxed">
                    {job.overview}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-line">
                  <Button
                    href={`/contact?role=${encodeURIComponent(job.title)}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    APPLY FOR ROLE
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3 Perks / Culture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-surface-dark text-white border border-line-dark clip-chamfer-br">
          {careers.perks.map((perk, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent">
                <span className="w-2 h-2 bg-accent inline-block" />
                <span className="font-bold">{perk.title}</span>
              </div>
              <p className="font-body text-xs text-muted-on-dark leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
