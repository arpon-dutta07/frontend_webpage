export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    established: string;
    description: string;
  };
  navigation: NavLink[];
  cta: {
    label: string;
    href: string;
  };
  hero: {
    systemCode: string;
    headline: string;
    subhead: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: string;
  };
  introStrip: {
    eyebrow: string;
    statement: string;
    description: string;
    cta: { label: string; href: string };
    image: string;
  };
  footer: {
    statement: string;
    links: {
      title: string;
      items: { label: string; href: string }[];
    }[];
    socials: { name: string; href: string; icon: string }[];
    copyright: string;
    legal: { label: string; href: string }[];
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "GRAVIPOINT",
    tagline: "INDUSTRIAL & ARCHITECTURAL SYSTEMS",
    established: "2026",
    description: "Building resilient foundations, advanced infrastructure, and editorial-grade structural developments for future-scale growth.",
  },
  navigation: [
    { label: "WORK", href: "/#work" },
    { label: "SERVICES", href: "/#services" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/contact" },
  ],
  cta: {
    label: "REQUEST A CONSULTATION",
    href: "/contact",
  },
  hero: {
    systemCode: "SYS-01 // EDITORIAL",
    headline: "SOLUTIONS BUILT FOR COMPLEX PROJECTS.",
    subhead: "BUILT TO SUPPORT EVERY STAGE OF DEVELOPMENT.",
    description: "From commercial developments to critical infrastructure, GraviPoint delivers architectural and structural engineering that balances precision, efficiency, and long-term performance.",
    primaryCta: {
      label: "EXPLORE SERVICES",
      href: "/#services",
    },
    secondaryCta: {
      label: "VIEW PORTFOLIO",
      href: "/#work",
    },
    image: "/images/hero.jpg",
  },
  introStrip: {
    eyebrow: "CORE MANDATE",
    statement: "PARTNER WITH A TEAM COMMITTED TO SAFETY, QUALITY, AND LONG-TERM VALUE — FROM GROUNDBREAKING TO COMPLETION.",
    description: "Our integrated methodology combines parametric structural analysis, digital prefabrication, and rigorous site orchestration.",
    cta: {
      label: "REQUEST A CONSULTATION",
      href: "/contact",
    },
    image: "/images/intro-strip.jpg",
  },
  footer: {
    statement: "BUILDING STRONGER FOUNDATIONS FOR BUSINESSES, COMMUNITIES, AND FUTURE GROWTH.",
    links: [
      {
        title: "NAVIGATION",
        items: [
          { label: "SERVICES", href: "/#services" },
          { label: "PROJECTS", href: "/#work" },
          { label: "PROCESS", href: "/#process" },
          { label: "TEAM", href: "/#team" },
          { label: "CAREERS", href: "/#careers" },
          { label: "CONTACT", href: "/contact" },
        ],
      },
    ],
    socials: [
      { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { name: "X", href: "https://x.com", icon: "x" },
      { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
    copyright: `© ${new Date().getFullYear()} GRAVIPOINT. ALL RIGHTS RESERVED.`,
    legal: [
      { label: "PRIVACY POLICY", href: "#privacy" },
      { label: "TERMS & CONDITIONS", href: "#terms" },
    ],
  },
};
