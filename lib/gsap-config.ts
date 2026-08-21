import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ANIMATION_CONFIG = {
  ease: {
    expo: "expo.out",
    power2: "power2.out",
    power3: "power3.out",
    smooth: [0.16, 1, 0.3, 1] as const,
  },
  duration: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
    reveal: 1.2,
  },
  stagger: {
    words: 0.05,
    cards: 0.1,
    links: 0.06,
  },
};

export { gsap, ScrollTrigger };
