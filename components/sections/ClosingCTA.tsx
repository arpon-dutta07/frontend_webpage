"use client";

import React, { useState, useRef } from "react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export default function ClosingCTA() {
  const { closingCta } = siteContent;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative bg-[#0E0F11] text-white py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-line-dark group">
      {/* 1080p Aerial Construction Drone Video Background - Increased Opacity & Clarity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/vidssave.com OTBx Air - Construction Promo 1080P.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-75 filter contrast-110 saturate-115 scale-105 transition-transform duration-1000 group-hover:scale-100"
        />
        {/* Lightened Tonal Gradients for Enhanced Video Visibility & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>

      {/* Pure Icon Mute / Unmute Button (Zero text) */}
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 w-11 h-11 rounded-full bg-black/80 hover:bg-accent text-white hover:text-accent-text backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer shadow-xl"
        aria-label={isMuted ? "Unmute aerial video audio" : "Mute aerial video audio"}
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

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Statement & Direct CTA */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-accent inline-block animate-pulse" />
              <Badge variant="dark" className="border border-white/25 backdrop-blur-md bg-black/60">
                {closingCta.eyebrow} // 1080P CINEMATIC REEL
              </Badge>
            </div>

            <ScrollReveal variant="fade-up">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.02] max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {closingCta.headline}
              </h2>
            </ScrollReveal>

            <p className="font-body text-base sm:text-lg text-neutral-200 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {closingCta.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href={closingCta.cta.href}
                variant="primary"
                size="lg"
                chamfer
              >
                {closingCta.cta.label}
              </Button>
              <Button
                href="/work"
                variant="dark"
                size="lg"
              >
                EXPLORE PROJECTS
              </Button>
            </div>
          </div>

          {/* Right Column: Key Mandates Card with Frosted Glassmorphic Overlay & Technical Telemetry */}
          <div className="lg:col-span-4 p-8 bg-black/80 border border-white/20 backdrop-blur-xl space-y-6 clip-chamfer-br shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                COLLABORATION PILLARS
              </span>
              <span className="font-mono text-[9px] text-neutral-400">
                LIVE TELEMETRY
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs text-neutral-300 divide-y divide-white/10">
              <div className="pt-1">
                <span className="text-white font-bold block mb-1">PARAMETRIC ACCURACY</span>
                <span>Sub-millimeter BIM model validation across all engineering disciplines.</span>
              </div>
              <div className="pt-4">
                <span className="text-white font-bold block mb-1">SAFETY RECORD</span>
                <span>Zero lost-time incident protocols enforced across all active sites.</span>
              </div>
              <div className="pt-4">
                <span className="text-white font-bold block mb-1">FIXED-PRICE CERTAINTY</span>
                <span>Transparent procurement frameworks eliminating mid-cycle variance.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
