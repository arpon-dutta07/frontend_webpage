"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "scale-down" | "clip-in" | "parallax";
  delay?: number;
  duration?: number;
  scrub?: boolean | number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 1.0,
  scrub = false,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof window === "undefined") return;

    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Keep static visibility without transform animation
      return;
    }

    let ctx = gsap.context(() => {
      if (variant === "scale-down") {
        gsap.fromTo(
          el,
          { scale: 1.12, transformOrigin: "center center" },
          {
            scale: 1,
            duration,
            ease: "power2.out",
            scrollTrigger: scrub
              ? {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: typeof scrub === "number" ? scrub : 1,
                }
              : {
                  trigger: el,
                  start: "top 85%",
                  once: true,
                },
          }
        );
      } else if (variant === "fade-up") {
        gsap.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      } else if (variant === "parallax") {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [variant, delay, duration, scrub]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
