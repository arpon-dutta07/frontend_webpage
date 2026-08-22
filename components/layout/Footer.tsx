"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Footer() {
  const [times, setTimes] = useState({
    zurich: "--:--",
    toronto: "--:--",
    london: "--:--",
  });
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        zurich: now.toLocaleTimeString("en-GB", { timeZone: "Europe/Zurich", hour: "2-digit", minute: "2-digit" }),
        toronto: now.toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit" }),
        london: now.toLocaleTimeString("en-GB", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit" }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput("");
    }
  };

  const directorySections = [
    {
      title: "DISCIPLINES & SERVICES",
      items: [
        { label: "PLANNING & FEASIBILITY", href: "/#services" },
        { label: "BUDGET & COST ESTIMATION", href: "/#services" },
        { label: "4D BIM COORDINATION", href: "/#services" },
        { label: "QUALITY & STRESS ASSURANCE", href: "/#services" },
      ],
    },
    {
      title: "PORTFOLIO & ASSETS",
      items: [
        { label: "SELECTED PROJECTS ARCHIVE", href: "/work" },
        { label: "HARBOR DISTRICT (ROTTERDAM)", href: "/work/harbor-district" },
        { label: "EASTLINE TRANSIT (TORONTO)", href: "/work/eastline-transit" },
        { label: "MERIDIAN TOWER (LONDON)", href: "/work/meridian-tower" },
      ],
    },
    {
      title: "PRACTICE & FIRM",
      items: [
        { label: "METHODOLOGY // PROCESS", href: "/#process" },
        { label: "AUDITED PERFORMANCE METRICS", href: "/#about" },
        { label: "LEADERSHIP & DIRECTORS", href: "/#team" },
        { label: "CAREERS & OPPORTUNITIES", href: "/#careers" },
        { label: "PROJECT CONSULTATION & INQUIRY", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-paper text-ink border-t border-line relative z-20 overflow-hidden">
      {/* Top Telemetry & Global Hubs Bar */}
      <div className="border-b border-line bg-surface-light-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-ink uppercase tracking-wider">GLOBAL ENGINEERING HUBS:</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>ZURICH (CET): <strong className="text-ink">{times.zurich}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>TORONTO (EST): <strong className="text-ink">{times.toronto}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>LONDON (GMT): <strong className="text-ink">{times.london}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Upper Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monogram, Statement & Inquiry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              {/* Brand Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 bg-accent text-accent-text flex items-center justify-center font-display font-black text-xl clip-chamfer-br shadow-md">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl tracking-tight text-ink">
                    {siteContent.brand.name}
                  </span>
                  <span className="font-mono text-[9px] text-muted tracking-widest uppercase">
                    {siteContent.brand.tagline}
                  </span>
                </div>
              </div>

              {/* Editorial Statement */}
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight uppercase leading-tight">
                {siteContent.footer.statement}
              </h3>

              <p className="font-body text-sm text-muted leading-relaxed">
                Specialized in deep foundation engineering, long-span structural diagrids, and high-performance automated industrial logistics across Europe and North America.
              </p>

              {/* Direct CTA */}
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" chamfer>
                  GET IN TOUCH
                </Button>
              </div>

              {/* Newsletter / Project Brief Dispatch */}
              <form onSubmit={handleSubscribe} className="space-y-2 pt-4">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                  TECHNICAL BRIEFINGS & CASE STUDIES:
                </span>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter professional email"
                    className="flex-1 px-3.5 py-2.5 bg-surface-light-card border border-line focus:border-accent text-ink font-mono text-xs outline-none transition-colors clip-chamfer-br"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-ink text-paper hover:bg-accent hover:text-accent-text font-mono text-xs font-bold uppercase tracking-wider transition-colors clip-chamfer-br shrink-0"
                  >
                    {subscribed ? "SENT ✓" : "SUBSCRIBE"}
                  </button>
                </div>
              </form>
            </div>

            {/* Giant Monogram Mark */}
            <div className="select-none pt-4 opacity-15 hover:opacity-30 transition-opacity">
              <svg
                className="w-32 h-32 text-muted"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                />
                <path
                  d="M65 52H50V68H68V35H32V68"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Structured Architectural Directory */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {directorySections.map((sec) => (
              <div key={sec.title} className="space-y-4">
                <div className="border-b border-line pb-2">
                  <span className="font-mono text-[10px] text-accent font-bold tracking-wider uppercase block">
                    {sec.title}
                  </span>
                </div>

                <ul className="space-y-2">
                  {sec.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between p-2 hover:bg-surface-light-card border border-transparent hover:border-line transition-all duration-200 clip-chamfer-br"
                      >
                        <span className="font-display font-bold text-xs uppercase tracking-tight text-ink group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
                          {item.label}
                        </span>
                        <span className="font-mono text-[10px] text-muted group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communications & Social Strip */}
      <div className="border-t border-line bg-surface-light-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted uppercase">DIRECT CHANNELS:</span>
            <div className="flex items-center gap-2">
              {siteContent.footer.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-paper border border-line hover:border-accent text-ink hover:text-accent font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200 clip-chamfer-br"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="font-mono text-[10px] text-muted">
            HEADQUARTERS: BAHNHOFSTRASSE 45, 8001 ZÜRICH
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-line bg-surface-light-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted tracking-wider">
          <div>{siteContent.footer.copyright}</div>
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
