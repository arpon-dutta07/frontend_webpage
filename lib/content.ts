export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  highlight?: boolean;
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
  services: {
    tag: string;
    headline: string;
    subhead: string;
    image: string;
    items: ServiceItem[];
  };
  stats: {
    tag: string;
    headline: string;
    description: string;
    image: string;
    cards: StatItem[];
  };
  closingCta: {
    eyebrow: string;
    headline: string;
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
  services: {
    tag: "DISCIPLINE // 02",
    headline: "END-TO-END CONSTRUCTION & ENGINEERING SOLUTIONS.",
    subhead: "Built to support every stage of development. Our multidisciplinary teams provide construction, engineering, and project management tailored to the unique demands of each project.",
    image: "/images/services.jpg",
    items: [
      {
        id: "planning-feasibility",
        title: "PLANNING & FEASIBILITY",
        summary: "We assess project viability, map stakeholder requirements, and develop strategies that reduce risk before a single foundation is poured.",
        deliverables: [
          "Geotechnical & Environmental Site Analysis",
          "Zoning, Code & Permitting Strategy",
          "Parametric Massing & Structural Models",
          "Lifecycle Carbon & Energy Feasibility",
        ],
      },
      {
        id: "budget-management",
        title: "BUDGET & COST ESTIMATION",
        summary: "Precision quantitative surveying and value engineering to optimize capital deployment and ensure predictable outcomes.",
        deliverables: [
          "Dynamic Quantitative Cost Schedules",
          "Real-Time Supply Chain Price Indexing",
          "Constructability & Value Optimization",
          "Deterministic Contingency Modeling",
        ],
      },
      {
        id: "scheduling-coordination",
        title: "SCHEDULING & COORDINATION",
        summary: "Integrated 4D BIM schedule orchestration aligning on-site logistics, subcontractor workflows, and critical path milestones.",
        deliverables: [
          "4D BIM Construction Sequencing",
          "Intermodal Logistics Routing & Staging",
          "Multi-Trade Synchronous Scheduling",
          "Live On-Site Telemetry & Variance Tracking",
        ],
      },
      {
        id: "quality-assurance",
        title: "QUALITY ASSURANCE & STRUCTURAL INTEGRITY",
        summary: "Continuous laser scanning verification, concrete stress telemetry, and architectural envelope testing throughout construction.",
        deliverables: [
          "Millimeter-Accurate As-Built Verification",
          "Continuous Structural Stress & Tension Monitoring",
          "Thermal, Acoustic & Moisture Barrier Audits",
          "Complete Digital Twin Asset Handover",
        ],
      },
    ],
  },
  stats: {
    tag: "TRACK RECORD // PERFORMANCE",
    headline: "CONSTRUCTION EXPERTISE BACKED BY DECADES OF PERFORMANCE.",
    description: "GraviPoint partners with developers, institutions, and infrastructure authorities to deliver high-performance structural systems that stand the test of time.",
    image: "/images/stats-atrium.jpg",
    cards: [
      {
        value: 250,
        suffix: "+",
        label: "PROJECTS DELIVERED",
        sub: "Across commercial & civil sectors",
      },
      {
        value: 15,
        suffix: "+",
        label: "YEARS EXPERIENCE",
        sub: "Unbroken high-safety record",
        highlight: true,
      },
      {
        value: 98,
        suffix: "%",
        label: "CLIENT SATISFACTION",
        sub: "Institutional repeat partnerships",
        highlight: true,
      },
      {
        value: 500,
        suffix: "+",
        label: "SPECIALIZED EXPERTS",
        sub: "Structural engineers & site directors",
      },
    ],
  },
  closingCta: {
    eyebrow: "COLLABORATION & PROCUREMENT",
    headline: "BUILD WITH AN INDUSTRIALIZED AND DIGITAL SYSTEM.",
    statement: "PARTNER WITH A TEAM COMMITTED TO DELIVERING QUALITY, SAFETY, AND LONG-TERM VALUE — FROM GROUNDBREAKING TO COMPLETION.",
    description: "From concept engineering to digital handover, GraviPoint transforms complex construction challenges into resilient, timeless architectural assets.",
    cta: {
      label: "REQUEST A CONSULTATION",
      href: "/contact",
    },
    image: "/images/closing-cta.jpg",
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
