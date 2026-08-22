"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  chamfer?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = true,
  chamfer = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase transition-all duration-300 group select-none relative overflow-hidden";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-xs md:text-sm px-5 py-2.5 gap-2",
    lg: "text-sm md:text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "btn-primary bg-accent hover:bg-accent-hover text-cta-text shadow-sm hover:shadow active:scale-[0.98] border border-transparent",
    secondary:
      "bg-ink text-paper hover:bg-surface-dark active:scale-[0.98]",
    outline:
      "bg-transparent border border-line hover:border-ink text-ink hover:bg-ink hover:text-paper active:scale-[0.98]",
    dark:
      "bg-transparent border border-white/30 hover:border-white text-white hover:bg-white hover:text-neutral-950 active:scale-[0.98]",
    ghost:
      "bg-transparent text-ink hover:text-accent active:scale-[0.98]",
  };

  const chamferClass = chamfer ? "clip-chamfer-br" : "";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <svg
          className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="square"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${chamferClass} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${chamferClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
