import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: (coords?: { x: number; y: number }) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  activeCategory: "ALL",
  setActiveCategory: (category) => set({ activeCategory: category }),
  theme: "light",
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
    set({ theme });
  },
  toggleTheme: (coords) => {
    if (typeof window === "undefined") return;

    const currentTheme = get().theme;
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const x = coords?.x ?? window.innerWidth / 2;
    const y = coords?.y ?? 0;

    const hasViewTransitions =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !prefersReducedMotion;

    if (hasViewTransitions) {
      const transition = (document as any).startViewTransition(() => {
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        set({ theme: nextTheme });
      });

      transition.ready.then(() => {
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      set({ theme: nextTheme });
    }
  },
}));
