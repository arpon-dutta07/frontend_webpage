"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export default function ServicesAccordion() {
  const { services } = siteContent;
  const [activeItem, setActiveItem] = useState<string>("planning-feasibility");

  return (
    <section id="services" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{services.tag}</Badge>
            <span className="font-mono text-xs text-muted tracking-wider">
              MULTIDISCIPLINARY CAPABILITIES
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-muted">
            04 CORE DISCIPLINES
          </span>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Radix Accordion */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-black text-fluid-h2 text-ink uppercase tracking-tight leading-[1.05]">
                {services.headline}
              </h2>
              <p className="font-body text-fluid-body text-muted leading-relaxed max-w-xl">
                {services.subhead}
              </p>
            </div>

            {/* Radix UI Accordion */}
            <Accordion.Root
              type="single"
              defaultValue="planning-feasibility"
              value={activeItem}
              onValueChange={(val) => setActiveItem(val)}
              collapsible
              className="border-t border-line divide-y divide-line"
            >
              {services.items.map((item, index) => {
                const isOpen = activeItem === item.id;

                return (
                  <Accordion.Item
                    key={item.id}
                    value={item.id}
                    className="group transition-colors duration-200"
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="w-full py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent group">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                            0{index + 1}
                          </span>
                          <span className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-accent transition-colors uppercase tracking-tight">
                            {item.title}
                          </span>
                        </div>

                        {/* Animated + / - Indicator */}
                        <div className="w-8 h-8 rounded-none border border-line flex items-center justify-center text-ink group-hover:border-accent group-hover:text-accent transition-all shrink-0 ml-4">
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="font-mono text-lg font-bold leading-none select-none"
                          >
                            +
                          </motion.span>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="pb-6 pt-1 text-muted space-y-4">
                        <p className="font-body text-sm sm:text-base leading-relaxed text-muted max-w-xl">
                          {item.summary}
                        </p>

                        {/* Deliverables List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {item.deliverables.map((deliv) => (
                            <div key={deliv} className="flex items-center gap-2.5 font-mono text-xs text-ink/90">
                              <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>

            <div className="pt-4">
              <Button href="/contact" variant="primary" size="md" chamfer>
                DISCUSS SERVICE REQUIREMENTS
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Supporting Image Panel */}
          <div className="lg:col-span-5 relative w-full lg:sticky lg:top-28">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-surface-dark-card border border-line overflow-hidden clip-chamfer-br shadow-xl group">
              <ScrollReveal variant="scale-down" className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={services.image}
                    alt="Precision construction and engineering systems"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle tonal gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                </div>
              </ScrollReveal>

              {/* Custom Line-Art Radar Emblem Overlay (Inspired by reference 02-services.png) */}
              <div className="absolute top-6 right-6 z-10 select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 text-white"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="18" y1="18" x2="82" y2="82" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="18" y1="82" x2="82" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>

              {/* Floating Bottom Card Label */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between bg-ink/90 backdrop-blur-md p-4 border border-line-dark text-paper">
                <div>
                  <span className="font-mono text-[10px] text-accent uppercase block">
                    OPERATIONAL METHODOLOGY
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-paper uppercase">
                    INTEGRATED PROJECT DELIVERY (IPD)
                  </span>
                </div>
                <Badge variant="accent">ISO 19650</Badge>
              </div>
            </div>

            {/* Accent Corner Mark */}
            <div className="hidden lg:block absolute -left-3 -top-3 w-6 h-6 border-t-2 border-l-2 border-accent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
