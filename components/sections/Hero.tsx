"use client";

import React, { useState, useRef, useEffect } from "react";
import SplitHeadline from "@/components/animation/SplitHeadline";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!iframeRef.current) return;
    const command = isMuted ? "unMute" : "mute";
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: command, args: "" }),
      "*"
    );
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data?.event === "onStateChange" && data?.info === 0) {
          // Restart immediately before YouTube shows end screen
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "seekTo", args: [0, true] }),
            "*"
          );
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: "" }),
            "*"
          );
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="relative bg-paper text-ink pt-28 sm:pt-32 md:pt-36 border-b border-line overflow-hidden">
      {/* Top Technical Metadata Grid Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-line pb-3 sm:pb-4">
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-muted tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span>{hero.systemCode}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>LOCATION: 43.6532° N, 79.3832° W</span>
            <span>LATENCY: 60 FPS INERTIA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-ink">EST.</span>
            <span>{siteContent.brand.established}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 sm:py-16 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            <div className="space-y-2">
              <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                ZURICH / TORONTO / LONDON
              </span>
              <SplitHeadline
                text={hero.headline}
                as="h1"
                className="font-display font-black text-fluid-h1 text-ink uppercase tracking-tighter max-w-2xl leading-[0.92]"
                delay={0.15}
              />
            </div>

            <p className="font-body text-fluid-body text-muted max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" chamfer>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Quick Metrics Bar below buttons */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line max-w-lg">
              <div>
                <span className="font-mono text-[10px] text-muted uppercase block">PROJECT VALUE</span>
                <span className="font-display font-bold text-lg sm:text-xl text-ink">$2.4B+</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase block">STRUCTURAL LIFE</span>
                <span className="font-display font-bold text-lg sm:text-xl text-ink">100 YRS</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase block">SAFETY RATING</span>
                <span className="font-display font-bold text-lg sm:text-xl text-accent">ZERO INCIDENTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Horizontally Expanded & Taller Video Panel fitted inside exact diagonal shape */}
          <div className="lg:col-span-6 relative w-full mt-4 lg:mt-0">
            {/* Desktop Diagonal Panel Wrapper - Horizontally & Vertically Expanded */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[580px] xl:h-[630px] bg-surface-dark-card overflow-hidden md:[clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] border border-line shadow-2xl group">
              {/* YouTube Video Player Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none scale-125">
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/iLhYtTbnO0o?autoplay=1&mute=1&loop=1&playlist=iLhYtTbnO0o&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&playsinline=1"
                  title="Architectural Engineering Video"
                  className="w-[250%] h-[250%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Tonal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Float Badge on Video Panel - Positioned cleanly with zero text clipping */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 md:left-[26%] lg:left-[28%] z-10">
                <Badge variant="dark" className="backdrop-blur-md">
                  CORE INFRASTRUCTURE // LEVEL 01
                </Badge>
              </div>

              {/* Pure Icon Mute / Unmute Button (Zero text as requested) */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 hover:bg-accent text-white hover:text-accent-text backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer shadow-lg"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Architectural accent corner markers */}
            <div className="hidden lg:block absolute -right-3 -top-3 w-8 h-8 border-t-2 border-r-2 border-accent pointer-events-none z-20" />
            <div className="hidden lg:block absolute -right-6 -bottom-6 w-32 h-32 border-r-2 border-b-2 border-line pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
