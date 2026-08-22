"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useUIStore } from "@/lib/store";
import { siteContent } from "@/lib/content";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const customEase = [0.16, 1, 0.3, 1] as const;

export default function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  const overlayVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: customEase,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: customEase,
      },
    },
  };

  const containerVariants: Variants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.35,
        ease: customEase,
      },
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.4,
        ease: customEase,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: customEase },
    },
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          ref={menuRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 z-50 bg-paper text-ink flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Header row with Logo, ThemeToggle, and Close button */}
          <div className="flex items-center justify-between border-b border-line pb-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-ink text-paper group-hover:bg-accent group-hover:text-accent-text flex items-center justify-center font-display font-black text-base transition-colors duration-300 clip-chamfer-br">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-ink tracking-tight text-lg leading-none">
                  {siteContent.brand.name}
                </span>
                <span className="font-mono text-[9px] text-muted tracking-widest leading-none mt-1">
                  SYSTEMS
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 border border-line text-ink hover:text-accent hover:border-accent transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-wider clip-chamfer-br focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <motion.div variants={containerVariants} className="py-8 flex flex-col gap-5 my-auto">
            {siteContent.navigation.map((item, index) => (
              <motion.div key={item.label} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between border-b border-line pb-4 text-3xl sm:text-4xl font-display font-black text-ink hover:text-accent transition-colors tracking-tight"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted font-normal">
                      0{index + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Actions & Details */}
          <div className="pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                {siteContent.brand.tagline}
              </span>
              <span className="font-mono text-xs text-ink font-bold">
                EST. {siteContent.brand.established}
              </span>
            </div>

            <Button
              href={siteContent.cta.href}
              size="md"
              variant="primary"
              chamfer
              onClick={() => setMobileMenuOpen(false)}
              className="w-full sm:w-auto"
            >
              {siteContent.cta.label}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
