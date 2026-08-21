import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          text: "var(--accent-text)",
        },
        cta: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          text: "var(--accent-text)",
        },
        neon: "var(--neon)",
        "accent-2": "var(--accent-2)",
        line: {
          DEFAULT: "var(--line)",
          dark: "var(--line-dark)",
          light: "var(--line-light)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          "on-dark": "var(--muted-on-dark)",
        },
        surface: {
          dark: "var(--surface-dark)",
          "dark-card": "var(--surface-dark-card)",
          "light-card": "var(--surface-light-card)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
      },
      fontSize: {
        "fluid-h1": ["clamp(2.25rem, 6vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "fluid-h2": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "fluid-h3": ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "fluid-body": ["clamp(1rem, 1.2vw, 1.125rem)", { lineHeight: "1.6" }],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.08em",
        widest: "0.12em",
      },
      clipPath: {
        diagonal: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        chamfer: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
      },
    },
  },
  plugins: [],
};

export default config;
