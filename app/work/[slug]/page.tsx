import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projectsData } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Shared Navigation */}
      <Navbar />
      <MobileMenu />

      <main className="flex-1 pt-28 sm:pt-36 pb-24 relative z-10 bg-paper shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 mb-8">
            <Link
              href="/work"
              className="group font-mono text-xs text-muted hover:text-accent flex items-center gap-2 font-bold uppercase transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>BACK TO PROJECT DIRECTORY</span>
            </Link>

            <div className="flex items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <span className="font-mono text-xs text-muted">COMPLETED {project.year}</span>
              <span className="hidden sm:inline font-mono text-xs text-muted">•</span>
              <span className="hidden sm:inline font-mono text-xs text-muted">ISO 19650 VERIFIED</span>
            </div>
          </div>

          {/* Hero Headline & Key Typology */}
          <div className="space-y-4 mb-10">
            <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase block">
              {project.typology} // {project.location}
            </span>
            <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tight text-ink leading-[0.92] max-w-5xl">
              {project.title}.
            </h1>
            <p className="font-body text-fluid-body text-muted max-w-3xl leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* 4 Key Metric Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="p-5 sm:p-6 bg-surface-light-card border border-line clip-chamfer-br space-y-1">
              <span className="font-mono text-[10px] text-muted uppercase block">ASSET VALUE</span>
              <span className="font-display font-black text-2xl sm:text-3xl text-ink block">
                {project.value}
              </span>
              <span className="font-mono text-[10px] text-muted block">FIXED-PRICE EPC CONTRACT</span>
            </div>

            <div className="p-5 sm:p-6 bg-surface-light-card border border-line clip-chamfer-br space-y-1">
              <span className="font-mono text-[10px] text-muted uppercase block">EXECUTION TIMELINE</span>
              <span className="font-display font-black text-2xl sm:text-3xl text-ink block">
                {project.timeline}
              </span>
              <span className="font-mono text-[10px] text-accent block">ON-SCHEDULE HANDOVER</span>
            </div>

            <div className="p-5 sm:p-6 bg-surface-light-card border border-line clip-chamfer-br space-y-1">
              <span className="font-mono text-[10px] text-muted uppercase block">BUILT FOOTPRINT</span>
              <span className="font-display font-black text-2xl sm:text-3xl text-ink block">
                {project.area}
              </span>
              <span className="font-mono text-[10px] text-muted block">PRECISION BIM MODELLED</span>
            </div>

            <div className="p-5 sm:p-6 bg-surface-light-card border border-line clip-chamfer-br space-y-1">
              <span className="font-mono text-[10px] text-muted uppercase block">CLIENT AUTHORITY</span>
              <span className="font-display font-bold text-lg sm:text-xl text-ink block truncate">
                {project.client}
              </span>
              <span className="font-mono text-[10px] text-muted block">DIRECT PROCUREMENT</span>
            </div>
          </div>

          {/* Main Hero Panoramic Image Showcase */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-surface-dark-card border border-line overflow-hidden clip-chamfer-br shadow-2xl mb-16 group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />

            {/* Technical HUD Overlay Coordinates */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <Badge variant="dark" className="backdrop-blur-md">
                STRUCTURAL SPECIFICATION // REV-04
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-end justify-between text-white font-mono text-xs">
              <div>
                <span className="text-[10px] text-accent uppercase block mb-0.5">STRUCTURAL ARCHETYPE</span>
                <span className="font-bold text-sm sm:text-base uppercase">{project.structuralType}</span>
              </div>
              <span className="hidden sm:inline text-neutral-400 text-[11px]">
                AS-BUILT ACCURACY: ±1.2mm
              </span>
            </div>
          </div>

          {/* Challenge vs Solution Technical Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* The Challenge Card */}
            <div className="p-8 sm:p-10 bg-surface-light-card border-l-4 border-line border-t border-r border-b clip-chamfer-br space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-line inline-block" />
                <span className="font-mono text-xs text-muted font-bold uppercase tracking-wider">
                  01. THE ENGINEERING CHALLENGE
                </span>
              </div>
              <h2 className="font-display font-black text-2xl uppercase text-ink">
                CONSTRAINTS & GEOTECHNICAL COMPLEXITIES.
              </h2>
              <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution Card */}
            <div className="p-8 sm:p-10 bg-surface-light-card border-l-4 border-accent border-t border-r border-b clip-chamfer-br space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-accent inline-block" />
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                  02. THE GRAVIPOINT SOLUTION
                </span>
              </div>
              <h2 className="font-display font-black text-2xl uppercase text-ink">
                PARAMETRIC ENGINEERING & EXECUTION.
              </h2>
              <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Quantifiable Audited Performance Metrics (4-Card Grid) */}
          <div className="mb-16">
            <div className="flex items-center gap-3 border-b border-line pb-4 mb-8">
              <Badge variant="accent">VERIFIED DATA</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-wider">
                AUDITED STRUCTURAL BENCHMARKS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-8 flex flex-col justify-between clip-chamfer-tl-br transition-all duration-300 ${
                    idx === 1
                      ? "bg-accent text-accent-text shadow-lg"
                      : "bg-surface-light-card text-ink border border-line"
                  }`}
                >
                  <div className="space-y-1 mb-4">
                    <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl block">
                      {stat.value}
                    </span>
                    <div
                      className={`h-0.5 w-8 ${
                        idx === 1 ? "bg-accent-text/60" : "bg-accent"
                      }`}
                    />
                  </div>

                  <div>
                    <h3
                      className={`font-mono text-xs font-bold uppercase tracking-wider ${
                        idx === 1 ? "text-accent-text" : "text-ink"
                      }`}
                    >
                      {stat.label}
                    </h3>
                    <p
                      className={`font-body text-xs mt-1 ${
                        idx === 1 ? "text-accent-text/80" : "text-muted"
                      }`}
                    >
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Deliverables Double Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Key Innovations */}
            <div className="lg:col-span-6 p-8 bg-surface-light-card border border-line clip-chamfer-br space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="default">INNOVATIONS</Badge>
                <h2 className="font-display font-bold text-xl uppercase text-ink">
                  KEY STRUCTURAL FEATURES
                </h2>
              </div>

              <ul className="space-y-4">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm font-body text-muted leading-relaxed">
                    <span className="font-mono text-xs text-accent font-bold mt-0.5">
                      0{i + 1}.
                    </span>
                    <span className="text-ink font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Checklist */}
            <div className="lg:col-span-6 p-8 bg-surface-light-card border border-line clip-chamfer-br space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="accent">AUDITED DELIVERABLES</Badge>
                <h2 className="font-display font-bold text-xl uppercase text-ink">
                  COMPLIANCE & HANDOVER ASSETS
                </h2>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {project.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="p-3 bg-paper border border-line flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 bg-accent shrink-0" />
                      <span className="text-ink font-bold">{deliv}</span>
                    </div>
                    <span className="text-muted text-[10px] uppercase shrink-0">VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural Perspectives Gallery */}
          <div className="mb-16">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-8">
              <div className="flex items-center gap-3">
                <Badge variant="accent">DOCUMENTATION</Badge>
                <h2 className="font-display font-bold text-xl uppercase text-ink">
                  ARCHITECTURAL & STRUCTURAL PERSPECTIVES
                </h2>
              </div>
              <span className="font-mono text-xs text-muted hidden sm:inline">
                HIGH-RESOLUTION ASSETS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] bg-surface-dark-card border border-line overflow-hidden clip-chamfer-br group shadow-md"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} perspective view ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white">
                    <span>PERSPECTIVE 0{idx + 1}</span>
                    <span className="text-accent uppercase">INSPECT →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next & Previous Project Navigation Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-b border-line py-8 mb-16">
            {/* Previous Project */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group p-6 bg-surface-light-card border border-line hover:border-accent transition-all duration-300 clip-chamfer-br flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-1">
                  ← PREVIOUS CASE STUDY
                </span>
                <span className="font-display font-bold text-xl uppercase text-ink group-hover:text-accent transition-colors">
                  {prevProject.title}
                </span>
              </div>
              <span className="font-mono text-xs text-muted mt-4 block">
                {prevProject.typology} • {prevProject.location}
              </span>
            </Link>

            {/* Next Project */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group p-6 bg-surface-light-card border border-line hover:border-accent transition-all duration-300 clip-chamfer-br flex flex-col justify-between text-right"
            >
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-1">
                  NEXT CASE STUDY →
                </span>
                <span className="font-display font-bold text-xl uppercase text-ink group-hover:text-accent transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <span className="font-mono text-xs text-muted mt-4 block">
                {nextProject.typology} • {nextProject.location}
              </span>
            </Link>
          </div>

          {/* Bottom Call to Action */}
          <div className="p-8 sm:p-12 bg-surface-dark text-white border border-line-dark clip-chamfer-br flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-accent">
                <span className="w-2 h-2 bg-accent inline-block" />
                <span>PROJECT PROCUREMENT</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                DEVELOP A SIMILAR INFRASTRUCTURE ASSET?
              </h2>
              <p className="font-body text-sm text-muted-on-dark leading-relaxed">
                Our multidisciplinary engineering teams are prepared to conduct initial site feasibility, 4D BIM modeling, and geotechnical risk evaluations.
              </p>
            </div>

            <Button href="/contact" variant="primary" size="lg" chamfer className="shrink-0">
              DISCUSS YOUR PROJECT
            </Button>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
