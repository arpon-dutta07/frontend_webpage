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

export interface ProcessPhase {
  step: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  credentials: string;
  specialization: string;
  projects: string[];
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
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
  process: {
    tag: string;
    headline: string;
    subhead: string;
    phases: ProcessPhase[];
  };
  team: {
    tag: string;
    headline: string;
    subhead: string;
    members: TeamMember[];
  };
  careers: {
    tag: string;
    headline: string;
    subhead: string;
    openings: CareerOpening[];
    perks: { title: string; desc: string }[];
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
    { label: "PROCESS", href: "/#process" },
    { label: "ABOUT", href: "/#about" },
    { label: "TEAM", href: "/#team" },
    { label: "CAREERS", href: "/#careers" },
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
  process: {
    tag: "METHODOLOGY // 03",
    headline: "A RIGOROUS, 4-PHASE ENGINEERING LIFECYCLE.",
    subhead: "From subterranean risk audits to automated 4D digital twins, our structural execution model ensures sub-millimeter tolerances on mission-critical assets.",
    phases: [
      {
        step: "PHASE 01",
        title: "COMPUTATIONAL SITE & RISK AUDIT",
        headline: "Geotechnical telemetry, zoning parameters, and structural loads.",
        description:
          "We perform deep LiDAR terrain scans, seismic soil attenuation studies, and wind tunnel aero-elastic simulations to eliminate engineering blind spots prior to mobilization.",
        deliverables: [
          "LiDAR Sub-Surface Point Cloud Models",
          "Finite Element Wind & Seismic Stress Analysis",
          "Soil Liquefaction & Hydrostatic Pressure Mapping",
        ],
        metrics: "TOLERANCE ±0.5mm",
      },
      {
        step: "PHASE 02",
        title: "PARAMETRIC 4D BIM SEQUENCING",
        headline: "Time-synchronized clash detection and supply-chain scheduling.",
        description:
          "Every structural beam, rebar cage, and mechanical conduit is modeled in full 4D temporal space to identify constructability clashes months before physical site delivery.",
        deliverables: [
          "ISO 19650 Level 3 BIM Model",
          "Dynamic Critical Path Schedule (CPM)",
          "Prefabricated Sub-Assembly Logistics Staging",
        ],
        metrics: "ZERO CLASH THRESHOLD",
      },
      {
        step: "PHASE 03",
        title: "PRECISION MODULAR ERECTION",
        headline: "Off-site prefabrication meets heavy crane orchestration.",
        description:
          "High-strength post-tensioned slabs and modular composite steel trusses are fabricated in climate-controlled environments, accelerating on-site erection by up to 40%.",
        deliverables: [
          "Continuous Flight Auger (CFA) Pile Telemetry",
          "Cast-in-Place High-Strength Concrete Audits",
          "Tower Crane Load Path & Rigging Simulation",
        ],
        metrics: "40% FASTER TIMELINE",
      },
      {
        step: "PHASE 04",
        title: "TELEMETRY & DIGITAL TWIN HANDOVER",
        headline: "Live sensor telemetry embedded in structural elements.",
        description:
          "We install fiber-optic strain gauges, vibration sensors, and thermal monitors within key structural nodes, handing over a live digital twin for 100-year predictive maintenance.",
        deliverables: [
          "Full Asset As-Built Digital Twin",
          "Continuous IoT Sensor SCADA Integration",
          "100-Year Structural Integrity Warranty Certificate",
        ],
        metrics: "100-YEAR LIFESPAN",
      },
    ],
  },
  team: {
    tag: "LEADERSHIP // 04",
    headline: "ENGINEERED BY INDUSTRY-LEADING SPECIALISTS.",
    subhead: "Our senior directors bring decades of heavy infrastructure, commercial high-rise, and advanced computational engineering expertise across Europe and North America.",
    members: [
      {
        name: "Dr. Elena Vance, Eur Ing",
        role: "CHIEF STRUCTURAL ENGINEER",
        location: "Zurich, Switzerland",
        credentials: "ETH Zurich Ph.D. • 22 Yrs Experience",
        specialization: "Long-Span Steel Diagrids & Seismic Dampers",
        projects: ["Meridian Tower", "Apex Manufacturing"],
        image: "/images/team/elena-vance.jpg",
      },
      {
        name: "Marcus Thorne, PE",
        role: "DIRECTOR OF HEAVY CIVIL & TUNNELING",
        location: "Toronto, Canada",
        credentials: "MIT M.Eng • 18 Yrs Experience",
        specialization: "Subterranean Diaphragm Slurry Walls & Deep Piles",
        projects: ["Eastline Transit", "Harbor District"],
        image: "/images/team/marcus-thorne.jpg",
      },
      {
        name: "Dr. Aris Thorne, CEng",
        role: "HEAD OF COMPUTATIONAL BIM & 4D SYSTEMS",
        location: "London, United Kingdom",
        credentials: "Imperial College London • 15 Yrs Experience",
        specialization: "Parametric FEA Modeling & Laser Scan As-Builts",
        projects: ["Meridian Tower", "North Corridor"],
        image: "/images/team/aris-thorne.jpg",
      },
      {
        name: "Sarah Jenkins, P.Eng",
        role: "PRINCIPAL GEOTECHNICAL & MARINE DIRECTOR",
        location: "Vancouver / Rotterdam",
        credentials: "UBC M.Sc. • 16 Yrs Experience",
        specialization: "Coastal Wave Surge & Sub-Arctic Tunnel Portals",
        projects: ["Harbor District", "North Corridor"],
        image: "/images/team/sarah-jenkins.jpg",
      },
    ],
  },
  careers: {
    tag: "TALENT // 05",
    headline: "BUILD THE NEXT GENERATION OF MEGA-STRUCTURES.",
    subhead: "Join a multidisciplinary team operating at the intersection of parametric architecture, heavy structural engineering, and automated digital construction.",
    openings: [
      {
        id: "senior-facade-engineer",
        title: "Senior Facade & Envelope Engineer",
        department: "Structural Engineering",
        location: "Zurich, Switzerland / Hybrid",
        type: "Full-Time",
        experience: "7+ Years",
        overview:
          "Lead the structural analysis, thermal boundary modeling, and kinetic wind resistance design for high-rise commercial double-skin facades.",
      },
      {
        id: "computational-bim-specialist",
        title: "Lead Computational BIM & 4D Specialist",
        department: "Digital Execution",
        location: "London, UK / On-Site",
        type: "Full-Time",
        experience: "5+ Years",
        overview:
          "Architect automated Python/Rhino Grasshopper algorithms for clash detection, laser scan point cloud alignment, and 4D schedule simulation.",
      },
      {
        id: "geotechnical-tunnel-director",
        title: "Subterranean Geotechnical Project Director",
        department: "Heavy Civil Infrastructure",
        location: "Toronto, Canada / Hybrid",
        type: "Full-Time",
        experience: "10+ Years",
        overview:
          "Direct large-scale deep excavation, slurry wall engineering, and soil stabilization for subterranean multi-modal rail interchange projects.",
      },
    ],
    perks: [
      {
        title: "GLOBAL MONUMENTAL PROJECTS",
        desc: "Work on landmark skyscrapers, deep rail interchanges, and maritime ports that define cities.",
      },
      {
        title: "RESEARCH & ADVANCED TOOLS",
        desc: "Access proprietary parametric FEA clusters, high-precision LiDAR gear, and automated BIM toolchains.",
      },
      {
        title: "EXECUTIVE COMPENSATION & MOBILITY",
        desc: "Competitive compensation, international office mobility between Zurich, London, and Toronto, and full health coverage.",
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
          { label: "ABOUT", href: "/#about" },
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
      { label: "PRIVACY POLICY", href: "/contact" },
      { label: "TERMS & CONDITIONS", href: "/contact" },
    ],
  },
};
