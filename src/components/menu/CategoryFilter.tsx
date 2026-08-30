import { motion } from "framer-motion";
import { countByCategory, menuCategories } from "../../data/menu";
import type { MenuCategoryFilter } from "../../types";

interface CategoryFilterProps {
  active: MenuCategoryFilter;
  onChange: (category: MenuCategoryFilter) => void;
}

/** Segmented-control category switcher with a sliding active pill. */
export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="inline-flex items-center gap-1 rounded-full border border-sand-300 bg-cream-100 p-1" role="group" aria-label="Filter menu by category">
        {menuCategories.map((category) => {
          const isSelected = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              aria-pressed={isSelected}
              className={`relative cursor-pointer rounded-full px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                isSelected ? "text-cream-50" : "text-espresso-700 hover:text-espresso-950"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="menu-filter-pill"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                  className="absolute inset-0 rounded-full bg-espresso-900"
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {category.label}
                <span className={`text-[11px] tabular-nums ${isSelected ? "text-clay-300" : "text-espresso-600/50"}`}>
                  {countByCategory(category.id)}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
