"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useUIStore } from "@/lib/store";
import { siteContent } from "@/lib/content";
import Button from "@/components/ui/Button";

const customEase = [0.16, 1, 0.3, 1] as const;

export default function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and trap focus
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
        duration: 0.35,
        ease: customEase,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: customEase,
      },
    },
  };

  const containerVariants: Variants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: customEase,
      },
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.45,
        ease: customEase,
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: customEase },
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
          className="fixed inset-0 z-50 bg-ink flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Header row with Close button */}
          <div className="flex items-center justify-between border-b border-line-dark pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent flex items-center justify-center font-display font-black text-white text-base">
                G
              </div>
              <span className="font-display font-black text-paper tracking-tight text-lg">
                {siteContent.brand.name}
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-paper hover:text-accent transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-wider"
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <motion.div variants={containerVariants} className="py-10 flex flex-col gap-6 my-auto">
            {siteContent.navigation.map((item, index) => (
              <motion.div key={item.label} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between border-b border-line-dark/40 pb-4 text-3xl sm:text-4xl md:text-5xl font-display font-black text-paper hover:text-accent transition-colors tracking-tight"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted-on-dark font-normal">
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
          <div className="pt-6 border-t border-line-dark flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-muted-on-dark uppercase tracking-wider">
                {siteContent.brand.tagline}
              </span>
              <span className="font-mono text-xs text-paper">
                EST. {siteContent.brand.established}
              </span>
            </div>

            <Button
              href={siteContent.cta.href}
              size="md"
              variant="primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {siteContent.cta.label}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
