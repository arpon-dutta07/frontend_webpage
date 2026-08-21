"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projectsData } from "@/lib/projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-line pb-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="accent">PORTFOLIO</Badge>
              <span className="font-mono text-xs text-muted">COMPREHENSIVE PROJECT INDEX</span>
            </div>
            <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tighter text-ink">
              SELECTED PROJECTS.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="p-6 bg-white border border-line flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="default">{project.category}</Badge>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase mb-2">{project.title}</h3>
                  <p className="font-body text-sm text-muted mb-4">{project.overview}</p>
                </div>
                <div className="pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{project.location}</span>
                  <Button href={`/work/${project.slug}`} variant="ghost" size="sm">
                    VIEW CASE STUDY
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
