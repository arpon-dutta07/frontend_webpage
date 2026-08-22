"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusLogs = [
    "INITIALIZING DESIGN TOKENS & DOM...",
    "PRELOADING 1080P MEDIA ASSETS & SHADERS...",
    "CALIBRATING 60 FPS INERTIA ENGINE...",
    "CAD RUNTIME READY // LAUNCHING GRAVIPOINT",
  ];

  useEffect(() => {
    let animationFrameId: number;
    let isFullyLoaded = false;
    const startTime = performance.now();
    const minDuration = 2200; // Minimum 2.2s for rich aesthetic presentation

    const checkLoaded = () => {
      if (document.readyState === "complete") {
        isFullyLoaded = true;
      }
    };

    checkLoaded();
    window.addEventListener("load", () => {
      isFullyLoaded = true;
    });

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      let currentProgress = Math.floor((elapsed / minDuration) * 90);

      // If document is not fully ready yet, cap at 90% until window.onload fires
      if (!isFullyLoaded && currentProgress > 90) {
        currentProgress = 90;
      } else if (isFullyLoaded && elapsed >= minDuration) {
        currentProgress = 100;
      }

      const displayProgress = Math.min(100, currentProgress);
      setProgress(displayProgress);

      if (displayProgress >= 75) setStatusIndex(3);
      else if (displayProgress >= 50) setStatusIndex(2);
      else if (displayProgress >= 25) setStatusIndex(1);
      else setStatusIndex(0);

      if (displayProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0E0F11] text-white flex flex-col justify-between p-6 sm:p-12 font-mono selection:bg-accent selection:text-black overflow-hidden"
        >
          {/* Top Bar Telemetry */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent text-black font-display font-black text-lg flex items-center justify-center clip-chamfer-br">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg tracking-tight text-white leading-none">
                  GRAVIPOINT
                </span>
                <span className="text-[9px] text-neutral-400 tracking-widest uppercase mt-0.5">
                  SYSTEMS // EST. 2026
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-accent font-bold hidden sm:inline">
                INITIALIZING CAD RUNTIME
              </span>
            </div>
          </div>

          {/* Center Stage: Percentage & Dynamic Progress Ticker */}
          <div className="max-w-4xl mx-auto w-full my-auto py-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs text-accent font-bold tracking-widest uppercase block">
                  SYSTEM BOOT PROTOCOL
                </span>
                <p className="text-sm sm:text-base text-neutral-300 font-mono tracking-wider h-6">
                  [0{statusIndex + 1}/04] {statusLogs[statusIndex]}
                </p>
              </div>

              <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-white leading-none">
                {progress}
                <span className="text-accent text-4xl sm:text-6xl md:text-7xl">%</span>
              </div>
            </div>

            {/* Chamfered Architectural Progress Bar */}
            <div className="w-full h-3 bg-white/10 border border-white/20 p-0.5 clip-chamfer-br">
              <div
                className="h-full bg-accent clip-chamfer-br transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom CAD Target & Latency Telemetry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-[10px] text-neutral-400">
              <div>
                <span className="block text-white font-bold">RASTER ENGINE</span>
                <span>WEBGPU / 60 FPS</span>
              </div>
              <div>
                <span className="block text-white font-bold">MEDIA ASSETS</span>
                <span>1080P PROMO STREAM</span>
              </div>
              <div>
                <span className="block text-white font-bold">BIM MODEL SYNC</span>
                <span>SUB-MILLIMETER ±0.5mm</span>
              </div>
              <div>
                <span className="block text-white font-bold">LOCATION</span>
                <span>43.6532° N, 79.3832° W</span>
              </div>
            </div>
          </div>

          {/* Bottom Coordinates Strip */}
          <div className="flex items-center justify-between border-t border-white/15 pt-4 text-[10px] text-neutral-400 tracking-widest uppercase">
            <span>ZÜRICH // TORONTO // LONDON</span>
            <span>GRAVIPOINT ARCHITECTURAL SYSTEMS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
