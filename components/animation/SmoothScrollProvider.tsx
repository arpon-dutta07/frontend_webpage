"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollY: number;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollY: 0,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", (e: { scroll: number }) => {
      ScrollTrigger.update();
      setScrollY(e.scroll);
    });

    // Connect Lenis to GSAP ticker for synchronous render loop
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    // Disable GSAP lag smoothing to ensure smooth physics sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollY }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
