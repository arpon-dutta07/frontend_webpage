"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { projectsData, Category, ProjectItem } from "@/lib/projects";

// Interactive Project Card supporting 4-Image Bento Thumbnail Switching
function ProjectBentoCard({ project }: { project: ProjectItem }) {
  const allImages = [project.image, ...project.gallery].slice(0, 4);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  return (
    <div className="group relative bg-surface-dark-card border border-line overflow-hidden transition-all duration-300 hover:border-accent shadow-sm hover:shadow-2xl clip-chamfer-br flex flex-col justify-between">
      <Link href={`/work/${project.slug}`} className="block relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImgIdx}
            initial={{ opacity: 0.4, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={allImages[activeImgIdx]}
              alt={`${project.title} perspective ${activeImgIdx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top-Left Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="dark" className="backdrop-blur-md border border-white/20">
            {project.category}
          </Badge>
        </div>

        {/* Top-Right Year Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="font-mono text-xs text-white font-bold bg-black/70 px-2.5 py-1 backdrop-blur-md border border-white/20">
            {project.year}
          </span>
        </div>

        {/* Bottom Title Bar with Chamfered Style and Arrow Indicator */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between bg-gradient-to-t from-black/95 via-black/80 to-transparent">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase font-bold block mb-0.5">
              {project.location} // 0{activeImgIdx + 1} OF 04 PERSPECTIVES
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="w-8 h-8 bg-accent text-accent-text flex items-center justify-center font-mono text-sm font-bold group-hover:translate-x-1 transition-transform clip-chamfer-br shrink-0">
            →
          </div>
        </div>
      </Link>

      {/* 4-Image Interactive Bento Strip below main preview */}
      <div className="grid grid-cols-4 gap-1.5 p-2 bg-black/80 backdrop-blur-md border-t border-line">
        {allImages.map((imgSrc, idx) => {
          const isActive = activeImgIdx === idx;
          return (
            <button
              key={idx}
              onMouseEnter={() => setActiveImgIdx(idx)}
              onClick={(e) => {
                e.preventDefault();
                setActiveImgIdx(idx);
              }}
              className={`relative aspect-[16/10] w-full overflow-hidden clip-chamfer-br transition-all duration-200 cursor-pointer ${
                isActive
                  ? "ring-2 ring-accent border-accent scale-100 opacity-100 z-10"
                  : "opacity-50 hover:opacity-100 border-white/20 hover:border-accent"
              }`}
              aria-label={`View perspective ${idx + 1} of ${project.title}`}
            >
              <Image
                src={imgSrc}
                alt={`${project.title} thumbnail ${idx + 1}`}
                fill
                sizes="10vw"
                className="object-cover object-center"
              />
              <span className="absolute bottom-0.5 right-1 font-mono text-[8px] font-bold text-white bg-black/80 px-1">
                0{idx + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

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
              <span className="font-mono text-xs text-muted tracking-wider uppercase">
                4-IMAGE PERSPECTIVE COLLAGE PER PROJECT
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
              >
                <ProjectBentoCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-mono text-xs text-muted">
            SHOWING {filteredProjects.length} OF {projectsData.length} FEATURED ARCHITECTURAL ASSETS (4 PERSPECTIVES EACH)
          </span>
          <Button href="/work" variant="primary" size="md" chamfer>
            VIEW FULL PROJECT ARCHIVE
          </Button>
        </div>
      </div>
    </section>
  );
}
