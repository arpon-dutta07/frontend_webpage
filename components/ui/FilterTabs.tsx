"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { CATEGORIES, Category } from "@/lib/projects";

interface FilterTabsProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function FilterTabs({
  activeCategory,
  onSelectCategory,
}: FilterTabsProps) {
  return (
    <Tabs.Root
      value={activeCategory}
      onValueChange={(val) => onSelectCategory(val as Category)}
      className="w-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted uppercase tracking-wider font-bold">
            SORT BY :
          </span>
        </div>

        <Tabs.List className="flex flex-wrap items-center gap-2" aria-label="Filter Projects by Category">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <Tabs.Trigger
                key={category}
                value={category}
                className={`filter-tab-trigger relative px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-white"
                    : "text-muted hover:text-ink bg-transparent"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="active-filter-indicator absolute inset-0 bg-accent clip-chamfer-br z-0"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
      </div>
    </Tabs.Root>
  );
}
