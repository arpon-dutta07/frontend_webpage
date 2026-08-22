"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import Button from "@/components/ui/Button";

export default function Footer() {
  const directoryItems = [
    { number: "01", label: "SERVICES", href: "/#services", desc: "ENGINEERING & ADVISORY" },
    { number: "02", label: "PROJECTS", href: "/work", desc: "SELECTED PORTFOLIO" },
    { number: "03", label: "PROCESS", href: "/#process", desc: "4-PHASE METHODOLOGY" },
    { number: "04", label: "ABOUT", href: "/#about", desc: "AUDITED METRICS" },
    { number: "05", label: "TEAM", href: "/#team", desc: "SENIOR DIRECTORS" },
    { number: "06", label: "CONTACT", href: "/contact", desc: "DIRECT PROCUREMENT" },
  ];

  return (
    <footer className="sticky top-20 sm:top-24 lg:top-28 z-0 w-full bg-[#121316] text-white overflow-hidden border-t border-white/10">
      {/* Main Editorial Grid with Top Margin Clearance Below Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Brand Header, Massive Statement, & Action */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10">
            <div className="space-y-6 sm:space-y-7">
              {/* Brand Lockup */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-accent text-accent-text flex items-center justify-center font-display font-black text-xl clip-chamfer-br shadow-sm">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl tracking-tight text-white">
                    {siteContent.brand.name}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase">
                    {siteContent.brand.tagline}
                  </span>
                </div>
              </div>

              {/* Massive Editorial Headline */}
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.02] max-w-xl">
                {siteContent.footer.statement}
              </h2>

              <p className="font-body text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
                Specialized in deep foundation engineering, long-span structural diagrids, and high-performance automated industrial logistics across Europe and North America.
              </p>

              {/* Action Button */}
              <div>
                <Button href="/contact" variant="primary" size="lg" chamfer>
                  GET IN TOUCH
                </Button>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                COMMUNICATIONS & CHANNELS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {siteContent.footer.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-white/10 border border-white/15 hover:border-accent text-white hover:text-accent font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 clip-chamfer-br"
                  >
                    {social.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full-Width Divided Architectural Directory */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest uppercase">
                INDEX / DIRECTORY
              </span>
              <span className="font-mono text-[10px] text-accent uppercase font-bold">
                06 DESTINATIONS
              </span>
            </div>

            {/* Clean, Divided Directory Rows with Smooth Hover Slides */}
            <ul className="divide-y divide-white/10 border-b border-white/10">
              {directoryItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-3.5 sm:py-4 px-3 hover:bg-white/5 transition-all duration-300 clip-chamfer-br"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-neutral-400 group-hover:text-accent font-bold transition-colors">
                        {item.number}
                      </span>
                      <div>
                        <span className="font-display font-black text-lg sm:text-xl md:text-2xl text-white group-hover:text-accent tracking-tight uppercase group-hover:translate-x-2 inline-block transition-transform duration-300">
                          {item.label}
                        </span>
                        <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-400 ml-3 uppercase">
                          // {item.desc}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-sm text-neutral-400 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Clean Bottom Coordinates & Legal Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400 tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span>ZÜRICH // TORONTO // LONDON • ISO 19650 & ISO 45001 COMPLIANT</span>
          </div>

          <div className="flex items-center gap-6">
            {siteContent.footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
