import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dark" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center font-mono text-[10px] md:text-xs uppercase tracking-wider px-2.5 py-1 select-none font-bold";

  const variants = {
    default: "bg-paper text-ink border border-line",
    accent: "bg-accent text-accent-text",
    dark: "bg-black/80 text-white border border-white/20",
    outline: "bg-transparent text-ink border border-line",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
