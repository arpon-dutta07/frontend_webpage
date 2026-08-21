export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "COMMERCIAL" | "INDUSTRIAL" | "INFRASTRUCTURE";
  year: string;
  location: string;
  client: string;
  overview: string;
  stats?: { label: string; value: string }[];
  image: string;
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
    location: "Rotterdam, NL",
    client: "EuroPort Logistics",
    overview: "Automated high-capacity intermodal freight and distribution terminal with deepwater docking access.",
    image: "/images/work/harbor-district.jpg",
    featured: true,
  },
  {
    id: "eastline-transit",
    slug: "eastline-transit",
    title: "EASTLINE TRANSIT",
    category: "INFRASTRUCTURE",
    year: "2025",
    location: "Toronto, CA",
    client: "Metro Transit Authority",
    overview: "Multi-level subterranean rapid transit interchange featuring reinforced monolithic concrete vaults.",
    image: "/images/work/eastline-transit.jpg",
    featured: true,
  },
  {
    id: "apex-manufacturing",
    slug: "apex-manufacturing",
    title: "APEX MANUFACTURING",
    category: "COMMERCIAL",
    year: "2024",
    location: "Stuttgart, DE",
    client: "Precision Dynamics",
    overview: "Next-generation precision robotics fabrication facility with integrated cleanroom assemblies.",
    image: "/images/work/apex-manufacturing.jpg",
    featured: true,
  },
  {
    id: "north-corridor",
    slug: "north-corridor",
    title: "NORTH CORRIDOR",
    category: "INFRASTRUCTURE",
    year: "2024",
    location: "Oslo, NO",
    client: "Nordic Highway Commission",
    overview: "Structural concrete tunnel portals and cantilevered acoustic barriers along sub-arctic pass.",
    image: "/images/work/north-corridor.jpg",
    featured: true,
  },
  {
    id: "nexus-logistics",
    slug: "nexus-logistics",
    title: "NEXUS LOGISTICS",
    category: "INDUSTRIAL",
    year: "2024",
    location: "Chicago, US",
    client: "Midwest Cargo Corp",
    overview: "Climate-controlled cross-dock distribution center powered by 1.8MW rooftop solar canopy.",
    image: "/images/work/nexus-logistics.jpg",
    featured: true,
  },
  {
    id: "meridian-tower",
    slug: "meridian-tower",
    title: "MERIDIAN TOWER",
    category: "COMMERCIAL",
    year: "2023",
    location: "London, UK",
    client: "Aegis Real Estate",
    overview: "42-storey composite diagrid commercial skyscraper with column-free floorplates and high thermal performance.",
    image: "/images/work/meridian-tower.jpg",
    featured: true,
  },
];
