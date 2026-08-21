"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface StatCounterProps {
  targetValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  targetValue,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.5,
  className = "",
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const rawValueRef = useRef({ value: 0 });

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof window === "undefined") return;

    let ctx = gsap.context(() => {
      gsap.to(rawValueRef.current, {
        value: targetValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          setDisplayValue(rawValueRef.current.value);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [targetValue, duration]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span
      ref={elementRef}
      className={`font-display font-black tracking-tight ${className}`}
      aria-label={`${prefix}${targetValue}${suffix}`}
    >
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
