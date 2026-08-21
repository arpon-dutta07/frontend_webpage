import React from "react";
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

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-line pb-4 mb-8">
            <Link href="/#work" className="font-mono text-xs text-muted hover:text-accent flex items-center gap-2">
              ← BACK TO SELECTED PROJECTS
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="accent">{project.category}</Badge>
            <span className="font-mono text-xs text-muted">COMPLETED {project.year}</span>
          </div>

          <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tighter text-ink mb-6">
            {project.title}
          </h1>

          <p className="font-body text-fluid-body text-muted max-w-3xl mb-12">
            {project.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-surface-light-card border border-line mb-12">
            <div>
              <span className="font-mono text-xs text-muted block mb-1">LOCATION</span>
              <span className="font-display font-bold text-lg">{project.location}</span>
            </div>
            <div>
              <span className="font-mono text-xs text-muted block mb-1">CLIENT</span>
              <span className="font-display font-bold text-lg">{project.client}</span>
            </div>
            <div>
              <span className="font-mono text-xs text-muted block mb-1">STATUS</span>
              <span className="font-display font-bold text-lg text-accent">OPERATIONAL</span>
            </div>
          </div>

          <div>
            <Button href="/contact" variant="primary" size="lg" chamfer>
              DISCUSS SIMILAR PROJECT
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
