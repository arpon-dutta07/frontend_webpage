"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FilterTabs from "@/components/ui/FilterTabs";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { projectsData, Category } from "@/lib/projects";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "ALL") return true;
    return project.category === activeCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Navigation */}
      <Navbar />
      <MobileMenu />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="border-b border-line pb-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="accent">PORTFOLIO DIRECTORY</Badge>
              <span className="font-mono text-xs text-muted tracking-wider uppercase">
                {projectsData.length} FEATURED ARCHITECTURAL ASSETS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <ScrollReveal variant="fade-up">
                  <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tight text-ink leading-[0.95]">
                    SELECTED PROJECTS & CASE STUDIES.
                  </h1>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-4">
                <p className="font-body text-fluid-body text-muted leading-relaxed">
                  A curated archive of commercial skyscrapers, deep subterranean interchanges,
                  and automated logistics facilities delivered with sub-millimeter BIM accuracy.
                </p>
              </div>
            </div>

            {/* Quick Aggregate Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 mt-8 border-t border-line">
              <div className="p-4 bg-surface-light-card border border-line clip-chamfer-br">
                <span className="font-mono text-[10px] text-muted uppercase block">ASSET VALUE</span>
                <span className="font-display font-black text-xl sm:text-2xl text-ink">$2.5B+</span>
                <span className="font-mono text-[9px] text-muted block mt-0.5">UNDER MANAGEMENT</span>
              </div>
              <div className="p-4 bg-surface-light-card border border-line clip-chamfer-br">
                <span className="font-mono text-[10px] text-muted uppercase block">DISCIPLINES</span>
                <span className="font-display font-black text-xl sm:text-2xl text-ink">03 CORE</span>
                <span className="font-mono text-[9px] text-muted block mt-0.5">COMM / IND / INFRA</span>
              </div>
              <div className="p-4 bg-surface-light-card border border-line clip-chamfer-br">
                <span className="font-mono text-[10px] text-muted uppercase block">DESIGN LIFE</span>
                <span className="font-display font-black text-xl sm:text-2xl text-ink">100 YRS</span>
                <span className="font-mono text-[9px] text-muted block mt-0.5">STRUCTURAL WARRANTY</span>
              </div>
              <div className="p-4 bg-surface-light-card border border-line clip-chamfer-br">
                <span className="font-mono text-[10px] text-muted uppercase block">INCIDENTS</span>
                <span className="font-display font-black text-xl sm:text-2xl text-accent">ZERO</span>
                <span className="font-mono text-[9px] text-muted block mt-0.5">LOST-TIME RECORD</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="mb-10">
            <FilterTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Projects Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="block h-full bg-surface-light-card border border-line hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl clip-chamfer-br overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container with Zoom and Overlays */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-dark-card">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                        </div>

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="dark" className="backdrop-blur-md">
                            {project.category}
                          </Badge>
                        </div>

                        <div className="absolute top-4 right-4 z-10">
                          <span className="font-mono text-xs text-white font-bold bg-black/70 px-2.5 py-1 backdrop-blur-sm border border-white/15">
                            {project.year}
                          </span>
                        </div>

                        {/* Image Bottom Bar */}
                        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between font-mono text-[10px] text-white/90">
                          <span>{project.location}</span>
                          <span className="text-accent font-bold">{project.value}</span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 space-y-3">
                        <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                          {project.typology}
                        </span>

                        <h2 className="font-display font-black text-2xl uppercase tracking-tight text-ink group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>

                        <p className="font-body text-xs text-muted leading-relaxed line-clamp-3">
                          {project.overview}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="px-6 py-4 border-t border-line flex items-center justify-between bg-paper/50">
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-muted uppercase">CLIENT</span>
                        <span className="font-mono text-xs font-bold text-ink truncate max-w-[170px]">
                          {project.client}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink group-hover:text-accent transition-colors">
                        <span>VIEW CASE STUDY</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Consultation Strip */}
          <div className="mt-20 p-8 sm:p-12 bg-surface-dark text-white border border-line-dark clip-chamfer-br flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-accent">
                <span className="w-2 h-2 bg-accent inline-block" />
                <span>CUSTOM STRUCTURAL FEASIBILITY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                HAVE A COMPLEX ENGINEERING BRIEF?
              </h2>
              <p className="font-body text-sm text-muted-on-dark leading-relaxed">
                Connect with our senior engineering directors in Zurich, Toronto, and London to evaluate structural parameters, geotechnical conditions, and construction sequencing.
              </p>
            </div>

            <Button href="/contact" variant="primary" size="lg" chamfer className="shrink-0">
              REQUEST CONSULTATION
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
