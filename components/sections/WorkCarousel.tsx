"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { projectsData } from "@/lib/projects";

export default function WorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Desktop Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-line pb-8 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <Badge variant="accent">FEATURED SEQUENCE // 04</Badge>
              <span className="font-mono text-xs text-muted tracking-wider">
                SELECTED DEVELOPMENTS
              </span>
            </div>
            <ScrollReveal variant="fade-up">
              <h2 className="font-display font-black text-fluid-h2 uppercase tracking-tight leading-[1.05]">
                PROJECTS BUILT TO PERFORM FOR DECADES.
              </h2>
            </ScrollReveal>
          </div>

          {/* Desktop Carousel Controls & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 border border-line hover:border-ink hover:bg-ink hover:text-paper flex items-center justify-center font-mono text-sm font-bold transition-colors select-none"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 border border-line hover:border-ink hover:bg-ink hover:text-paper flex items-center justify-center font-mono text-sm font-bold transition-colors select-none"
                aria-label="Next project"
              >
                →
              </button>
            </div>

            <Button href="/work" variant="primary" size="sm" chamfer>
              ALL PROJECTS
            </Button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 touch-pan-y">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="flex-[0_0_88%] sm:flex-[0_0_55%] lg:flex-[0_0_38%] min-w-0 pl-6"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative bg-surface-dark-card border border-line overflow-hidden group hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 88vw, (max-width: 1200px) 50vw, 38vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="dark" className="backdrop-blur-md">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Bottom Title Bar with Chamfer Style */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between bg-gradient-to-t from-ink via-ink/90 to-transparent">
                      <div>
                        <span className="font-mono text-[10px] text-muted-on-dark uppercase block">
                          {project.location} • {project.year}
                        </span>
                        <h3 className="font-display font-black text-lg text-paper uppercase tracking-tight group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="w-8 h-8 bg-accent text-white flex items-center justify-center font-mono text-sm font-bold group-hover:translate-x-1 transition-transform clip-chamfer-br">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="sm:hidden flex items-center justify-between pt-6 font-mono text-[11px] text-muted">
          <span>← SWIPE TO EXPLORE →</span>
          <span>{projectsData.length} PROJECTS</span>
        </div>
      </div>
    </section>
  );
}
