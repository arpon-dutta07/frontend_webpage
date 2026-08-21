"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { projectsData, Category } from "@/lib/projects";

export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "ALL") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="work" className="relative bg-paper text-ink py-20 sm:py-28 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-line pb-8 mb-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="accent">PORTFOLIO // 03</Badge>
              <span className="font-mono text-xs text-muted tracking-wider">
                FEATURED DEVELOPMENTS
              </span>
            </div>
            <ScrollReveal variant="fade-up">
              <h2 className="font-display font-black text-fluid-h2 text-ink uppercase tracking-tight leading-[1.05]">
                A CLOSER LOOK AT OUR LATEST PROJECTS.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <p className="font-body text-fluid-body text-muted leading-relaxed">
              Explore recent commercial, industrial, and infrastructure developments
              delivered with precision, engineering expertise, and structural longevity.
            </p>
          </div>
        </div>

        {/* Filter Tabs Row */}
        <div className="mb-12">
          <FilterTabs
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Projects Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative bg-surface-dark-card border border-line overflow-hidden transition-all duration-300 hover:border-accent shadow-sm hover:shadow-xl"
                >
                  {/* Image Container with Zoom Effect */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-all duration-500 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    </motion.div>

                    {/* Top-Left Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="dark" className="backdrop-blur-md">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Top-Right Year Tag */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="font-mono text-xs text-white/90 font-bold bg-ink/70 px-2 py-1 backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom Title Bar with Chamfered Style and Arrow Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between bg-gradient-to-t from-ink via-ink/90 to-transparent">
                      <div>
                        <span className="font-mono text-[10px] text-muted-on-dark uppercase block">
                          {project.location}
                        </span>
                        <h3 className="font-display font-black text-lg sm:text-xl text-paper uppercase tracking-tight group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="w-8 h-8 bg-accent text-white flex items-center justify-center font-mono text-sm font-bold group-hover:translate-x-1 transition-transform clip-chamfer-br">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-mono text-xs text-muted">
            SHOWING {filteredProjects.length} OF {projectsData.length} FEATURED ARCHITECTURAL ASSETS
          </span>
          <Button href="/work" variant="primary" size="md" chamfer>
            VIEW FULL PROJECT ARCHIVE
          </Button>
        </div>
      </div>
    </section>
  );
}
