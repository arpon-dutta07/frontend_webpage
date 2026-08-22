"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Hero from "@/components/sections/Hero";
import IntroStrip from "@/components/sections/IntroStrip";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import ProcessSection from "@/components/sections/ProcessSection";
import StatBlock from "@/components/sections/StatBlock";
import WorkGrid from "@/components/sections/WorkGrid";
import WorkCarousel from "@/components/sections/WorkCarousel";
import TeamSection from "@/components/sections/TeamSection";
import CareersSection from "@/components/sections/CareersSection";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Shared Navigation & Mobile Menu */}
      <Navbar />
      <MobileMenu />

      <main className="flex-1">
        {/* Phase 2: Hero Section */}
        <Hero />

        {/* Phase 2: Intro / Value Proposition Strip */}
        <IntroStrip />

        {/* Phase 3: Services Accordion Section (#services) */}
        <ServicesAccordion />

        {/* Phase 3: Methodology / Process Section (#process) */}
        <ProcessSection />

        {/* Phase 3: Stat Block Section (#about) */}
        <StatBlock />

        {/* Phase 4: Work Grid Section (Filterable Portfolio #work) */}
        <WorkGrid />

        {/* Phase 5: Work Carousel Section (Horizontal Recent Work) */}
        <WorkCarousel />

        {/* Phase 5: Leadership & Engineering Team (#team) */}
        <TeamSection />

        {/* Phase 5: Careers & Talent (#careers) */}
        <CareersSection />

        {/* Phase 5: Closing CTA Section */}
        <ClosingCTA />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
