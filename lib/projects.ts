export interface ProjectStat {
  label: string;
  value: string;
  sub?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "COMMERCIAL" | "INDUSTRIAL" | "INFRASTRUCTURE";
  year: string;
  location: string;
  client: string;
  typology: string;
  value: string;
  timeline: string;
  area: string;
  structuralType: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  deliverables: string[];
  stats: ProjectStat[];
  image: string;
  gallery: string[];
  featured?: boolean;
}

export const CATEGORIES = ["ALL", "INDUSTRIAL", "COMMERCIAL", "INFRASTRUCTURE"] as const;
export type Category = (typeof CATEGORIES)[number];

export const projectsData: ProjectItem[] = [
  {
    id: "harbor-district",
    slug: "harbor-district",
    title: "HARBOR DISTRICT",
    category: "INDUSTRIAL",
    year: "2025",
    location: "Rotterdam, Netherlands",
    client: "EuroPort Global Logistics B.V.",
    typology: "Deepwater Maritime & Automated Intermodal Terminal",
    value: "$420,000,000",
    timeline: "36 Months (2022 - 2025)",
    area: "185,000 m² Footprint",
    structuralType: "Heavy Cast-in-Place Marine Concrete & 45m High-Bay Steel Trusses",
    overview:
      "A next-generation intermodal freight handling terminal situated along the Maasvlakte deepwater shipping corridor. The facility combines autonomous gantry rail logistics, automated high-bay distribution vaults, and heavy-duty maritime berthing capable of accommodating 24,000-TEU container carriers with zero structural settlement.",
    challenge:
      "Constructing deep heavy foundations in coastal liquefiable silt while maintaining uninterrupted 24/7 commercial maritime traffic. The project required subterranean soil stabilization to a depth of 38 meters with dynamic hydrodynamic wave surge mitigation.",
    solution:
      "Engineered 1,200 continuous flight auger (CFA) deep foundation piles capped with a monolithic 2.4m post-tensioned reinforced slab. Implemented real-time fiber-optic strain gauge telemetry and modular off-site structural steel trusses assembled via maritime crane barges.",
    keyFeatures: [
      "45-meter clear-span automated high-bay automated storage retrieval system (ASRS)",
      "Zero-carbon electrified shore-power gantry crane infrastructure",
      "Hydraulic marine seawall with integrated cathodic anti-corrosion barrier",
      "Subterranean automated stormwater attenuation vaults (45,000 m³ capacity)",
    ],
    deliverables: [
      "Sub-Millimeter BIM 4D Execution Sequencing Model",
      "Geotechnical Deep Foundation Settlement Verification Audit",
      "Marine Grade EN 206 C50/60 Concrete Stress Certification",
      "Complete Autonomous Facility Digital Twin Handover",
    ],
    stats: [
      { label: "BERTHING LENGTH", value: "680m", sub: "Deepwater Draft 19.5m" },
      { label: "ANNUAL THROUGHPUT", value: "2.8M TEU", sub: "Automated Rail & Vessel Transfer" },
      { label: "CONCRETE VOLUME", value: "115,000 m³", sub: "Low-Carbon Slag Formulation" },
      { label: "STRUCTURAL LIFE", value: "100 YRS", sub: "Marine Corrosion Protected" },
    ],
    image: "/images/work/harbor-district.jpg",
    gallery: [
      "/images/services.jpg",
      "/images/stats-atrium.jpg",
      "/images/hero.jpg",
    ],
    featured: true,
  },
  {
    id: "eastline-transit",
    slug: "eastline-transit",
    title: "EASTLINE TRANSIT",
    category: "INFRASTRUCTURE",
    year: "2025",
    location: "Toronto, Canada",
    client: "Metrolinx & Provincial Transit Agency",
    typology: "Subterranean Multi-Tier Rapid Transit Interchange",
    value: "$780,000,000",
    timeline: "48 Months (2021 - 2025)",
    area: "45,000 m² Underground Built Area",
    structuralType: "Subterranean Diaphragm Slurry Walls & Reinforced Concrete Vaults",
    overview:
      "A monolithic 4-level subterranean mass transit interchange carved beneath dense municipal commercial cores. Featuring dramatic vaulted cavernous public concourses, vibration-isolated acoustic rail tunnels, and structural diaphragm retaining walls engineered for extreme hydrostatic ground pressures.",
    challenge:
      "Underpinning existing century-old heritage foundation structures and active light-rail corridors with a maximum allowable settlement tolerance of less than 3mm throughout deep excavation.",
    solution:
      "Deployed top-down sequential excavation utilizing 1.2m thick reinforced concrete diaphragm slurry walls and temporary pre-stressed rock anchors. Micro-tunneled structural steel pipe arch canopies protected overlying surface utility grids.",
    keyFeatures: [
      "22-meter wide column-free passenger transfer atrium with daylighting prisms",
      "Floating concrete track slab on elastomeric acoustic isolation dampers",
      "Pressurized subterranean ventilation and emergency smoke purge shafts",
      "Direct climate-controlled concourse links to 4 adjacent commercial towers",
    ],
    deliverables: [
      "Seismic Zone 3 Underpinning & Geotechnical Settlement Log",
      "Dynamic Rail Vibration Isolation Telemetry Verification",
      "Waterproofing & Hydrostatic Pressure Barrier Warranty (50 Yrs)",
      "Full 3D As-Built LiDAR Point-Cloud & Asset BIM Integration",
    ],
    stats: [
      { label: "EXCAVATION DEPTH", value: "32.5m", sub: "4 Subterranean Operational Tiers" },
      { label: "DAILY PASSENGERS", value: "185,000", sub: "Multi-Modal Transfer Peak" },
      { label: "STEEL TONNAGE", value: "24,500 T", sub: "High-Tensile Grade 500W" },
      { label: "SURFACE SETTLEMENT", value: "< 1.8mm", sub: "Surpassing Strict 3mm Threshold" },
    ],
    image: "/images/work/eastline-transit.jpg",
    gallery: [
      "/images/stats-atrium.jpg",
      "/images/hero.jpg",
      "/images/services.jpg",
    ],
    featured: true,
  },
  {
    id: "apex-manufacturing",
    slug: "apex-manufacturing",
    title: "APEX MANUFACTURING",
    category: "COMMERCIAL",
    year: "2024",
    location: "Stuttgart, Germany",
    client: "Precision Dynamics GmbH",
    typology: "High-Tech Robotics & Cleanroom Industrial Complex",
    value: "$260,000,000",
    timeline: "24 Months (2022 - 2024)",
    area: "72,000 m² Advanced Production Space",
    structuralType: "Vibration-Damped Concrete Slabs & Parametric Facade Framing",
    overview:
      "An ultra-precision advanced manufacturing complex housing ISO Class 4 cleanroom nanotechnology fabrication lines, autonomous AGV assembly bays, and modular R&D laboratory wings with sub-micron structural vibration isolation.",
    challenge:
      "Strict vibration limits (VC-E threshold < 3.12 µm/s) required for electron-beam lithography equipment alongside heavy robotic stamping bays operating under the same roof.",
    solution:
      "Isolated structural foundation pads founded on discrete pneumatic and elastomeric kinetic isolators. The building structure utilizes heavy-mass post-tensioned waffle slabs to absorb and dissipate high-frequency harmonics.",
    keyFeatures: [
      "Integrated ISO Class 4 cleanroom envelope with pressurized laminar airflow",
      "Kinetic vibration-isolated monolith slabs (VC-E Class Compliant)",
      "Parametric anodized aluminum curtain wall with passive thermal shading louvers",
      "Geothermal closed-loop heat pump exchange system integrated into structural piles",
    ],
    deliverables: [
      "VC-E Sub-Micron Vibration Isolation Acoustic Audit",
      "Cleanroom Laminar Air Barrier & Envelope Pressure Certification",
      "DGNB Platinum Sustainable Building Accreditation Package",
      "Building Automation System (BAS) SCADA Network Blueprint",
    ],
    stats: [
      { label: "VIBRATION LIMIT", value: "< 3.1 µm/s", sub: "VC-E Certified Lithography Floor" },
      { label: "CLEANROOM AREA", value: "14,500 m²", sub: "ISO Class 4 / 5 Continuous Control" },
      { label: "ENERGY OFFSET", value: "48%", sub: "Geothermal & Structural Thermal Mass" },
      { label: "FABRICATION CAPACITY", value: "120K Units/Yr", sub: "Autonomous Robotics Lines" },
    ],
    image: "/images/work/apex-manufacturing.jpg",
    gallery: [
      "/images/services.jpg",
      "/images/hero.jpg",
      "/images/closing-cta.jpg",
    ],
    featured: true,
  },
  {
    id: "north-corridor",
    slug: "north-corridor",
    title: "NORTH CORRIDOR",
    category: "INFRASTRUCTURE",
    year: "2024",
    location: "Oslo, Norway",
    client: "Statens Vegvesen (Norwegian Public Roads)",
    typology: "Sub-Arctic Avalanche Tunnel Portals & Highway Gallery",
    value: "$310,000,000",
    timeline: "30 Months (2021 - 2024)",
    area: "12.4 km Mountain Pass Corridor",
    structuralType: "Post-Tensioned Cantilevered Portals & Blast-Resistant Concrete",
    overview:
      "A vital alpine freight corridor engineered to withstand extreme sub-arctic climate exposure, heavy avalanche impact trajectories, and catastrophic rockfall forces through cantilevered geometric concrete deflectors.",
    challenge:
      "Short 5-month seasonal construction windows at -30°C and remote mountainous terrain requiring rapid installation of ultra-high-strength concrete structures.",
    solution:
      "Designed precast modular segmental arch ribs transported via heavy haulers and locked together on site with internal hydraulic post-tensioning tendons. Utilized heated thermal formwork curing methods for high-early-strength performance.",
    keyFeatures: [
      "Dynamic rockfall impact deflection canopy rated for 15,000 kJ kinetic energy",
      "Anti-icing geothermal hydronic radiant heating embedded in approach slabs",
      "Sculptural aerodynamic concrete portal geometries minimizing snow drift buildup",
      "Self-illuminating LED guidance integrated into blast-proof structural kerbs",
    ],
    deliverables: [
      "15,000 kJ Dynamic Rockfall Simulation & Impact Certificate",
      "Sub-Zero Freeze-Thaw Durability Concrete Batch Validation",
      "Automated Ice Telemetry & Radiant Heating Commissioning",
      "Infrastructure Asset Lifetime Maintenance Protocol",
    ],
    stats: [
      { label: "IMPACT RESISTANCE", value: "15,000 kJ", sub: "Class 5 Avalanche & Rockfall" },
      { label: "PORTAL SPAN", value: "28.5m", sub: "Twin-Tube 4-Lane Cross Section" },
      { label: "MIN. DESIGN TEMP", value: "-40°C", sub: "Sub-Arctic Concrete Mix" },
      { label: "CORRIDOR LENGTH", value: "12.4 km", sub: "Year-Round Freight Connectivity" },
    ],
    image: "/images/work/north-corridor.jpg",
    gallery: [
      "/images/closing-cta.jpg",
      "/images/stats-atrium.jpg",
      "/images/hero.jpg",
    ],
    featured: true,
  },
  {
    id: "nexus-logistics",
    slug: "nexus-logistics",
    title: "NEXUS LOGISTICS",
    category: "INDUSTRIAL",
    year: "2024",
    location: "Chicago, United States",
    client: "Midwest Logistics & Cold Chain Corp",
    typology: "Tri-Temperature Automated Distribution Hub",
    value: "$195,000,000",
    timeline: "20 Months (2022 - 2024)",
    area: "94,000 m² Footprint",
    structuralType: "Precast Concrete Tilt-Up Walls & Long-Span Structural Steel",
    overview:
      "A massive tri-temperature cross-dock logistics facility engineered for rapid transshipment. Features a 1.8MW rooftop bifacial photovoltaic solar array, sub-floor thermal insulation barriers, and 128 automated loading docks.",
    challenge:
      "Preventing permafrost heave beneath -25°C deep-freeze storage zones while optimizing structural steel weight over vast 18-meter grid bays.",
    solution:
      "Engineered an underfloor heated glycol thermal grid powered by waste heat recovery from primary ammonia refrigeration compressors, coupled with optimized castellated steel beam spans.",
    keyFeatures: [
      "Tri-temperature zones: Ambient (+20°C), Chilled (+4°C), Deep Freeze (-25°C)",
      "1.8MW rooftop bifacial solar canopy generating 110% of daytime operational power",
      "128 automated hydraulic dock levelers with inflatable thermal seals",
      "Heavy-duty laser-screeded Superflat (FF 100 / FL 80) concrete floor slabs",
    ],
    deliverables: [
      "Superflat Floor F-Number Survey & Flatness Verification",
      "Thermal Barrier & Sub-Floor Glycol System Commissioning",
      "LEED Gold Industrial Certification Compliance Package",
      "4D BIM As-Built MEP & Logistics Digital Handover",
    ],
    stats: [
      { label: "SOLAR CAPACITY", value: "1.8 MW", sub: "Net-Positive Daytime Generation" },
      { label: "DOCK CAPACITY", value: "128 Bays", sub: "Continuous Cross-Dock Flow" },
      { label: "FLOOR FLATNESS", value: "FF 100", sub: "Superflat Laser Screed Slabs" },
      { label: "STORAGE CAPACITY", value: "85,000", sub: "Automated Pallet Positions" },
    ],
    image: "/images/work/nexus-logistics.jpg",
    gallery: [
      "/images/hero.jpg",
      "/images/services.jpg",
      "/images/stats-atrium.jpg",
    ],
    featured: true,
  },
  {
    id: "meridian-tower",
    slug: "meridian-tower",
    title: "MERIDIAN TOWER",
    category: "COMMERCIAL",
    year: "2023",
    location: "London, United Kingdom",
    client: "Aegis Real Estate Partners",
    typology: "42-Storey Composite Diagrid Commercial Skyscraper",
    value: "$540,000,000",
    timeline: "40 Months (2020 - 2023)",
    area: "110,000 m² Commercial Tower",
    structuralType: "Perimeter Steel Diagrid & Slipformed High-Strength Concrete Core",
    overview:
      "An iconic 42-storey commercial tower defined by a monolithic structural steel exterior diagrid. The perimeter exoskeleton eliminates interior columns, maximizing floorplate flexibility while cutting structural steel consumption by 21%.",
    challenge:
      "Achieving extreme lateral stiffness against Thames estuary wind shear on a constrained urban footprint surrounded by London Underground subterranean tunnels.",
    solution:
      "Implemented a high-performance perimeter diagrid acting in composite action with a central slipformed C80/95 high-strength concrete shear core and tuned mass liquid damping tanks at the crown.",
    keyFeatures: [
      "100% Column-free 2,200 m² floorplates with 360-degree panoramic views",
      "Triple-glazed pressurized double-skin ventilated facade system",
      "Biophilic multi-level sky atriums with automated natural ventilation louvers",
      "BREEAM Outstanding and WELL Platinum commercial accreditations",
    ],
    deliverables: [
      "Wind Tunnel Aero-Elastic Testing & Diagrid Telemetry Report",
      "BREEAM Outstanding & WELL Platinum Environmental Dossier",
      "Deep Foundation Underground Tunnel Buffer Stress Verification",
      "Full As-Built 3D Digital Twin with IoT BMS Integration",
    ],
    stats: [
      { label: "BUILDING HEIGHT", value: "192m", sub: "42 Above-Ground Storeys" },
      { label: "STEEL REDUCTION", value: "-21%", sub: "Achieved via Diagrid Optimization" },
      { label: "FLOORPLATE AREA", value: "2,200 m²", sub: "100% Column-Free Spans" },
      { label: "BREEAM RATING", value: "94.2%", sub: "BREEAM Outstanding Certified" },
    ],
    image: "/images/work/meridian-tower.jpg",
    gallery: [
      "/images/stats-atrium.jpg",
      "/images/services.jpg",
      "/images/hero.jpg",
    ],
    featured: true,
  },
];
