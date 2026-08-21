"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

interface SplitHeadlineProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  className?: string;
  delay?: number;
}

const customEase = [0.16, 1, 0.3, 1] as const;

export default function SplitHeadline({
  text,
  as: Component = "h1",
  className = "",
  delay = 0.1,
}: SplitHeadlineProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: customEase,
      },
    },
  };

  return (
    <Component className={`select-none ${className}`} aria-label={text}>
      <motion.span
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={containerVariants}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.05em] overflow-hidden"
        aria-hidden="true"
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden py-0.5">
            <motion.span
              variants={wordVariants}
              className="inline-block transform-gpu"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
