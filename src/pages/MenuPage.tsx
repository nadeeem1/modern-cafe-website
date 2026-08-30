import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import CategoryFilter from "../components/menu/CategoryFilter";
import MenuCard from "../components/menu/MenuCard";
import CtaBand from "../components/shared/CtaBand";
import Reveal from "../components/shared/Reveal";
import { categoryDescriptions, menuItems } from "../data/menu";
import type { MenuCategoryFilter } from "../types";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryFilter>("all");

  const visibleItems = useMemo(
    () =>
      activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHeader
        eyebrow="The menu"
        title={
          <>
            Coffee first, <em className="font-light text-clay-300 italic">then something sweet</em>.
          </>
        }
        description="Espresso off the Synesso, filter at the slow bar, and everything baked in the little kitchen behind the pastry case."
        image="https://images.pexels.com/photos/31871767/pexels-photo-31871767.jpeg?auto=compress&cs=tinysrgb&w=1600"
      >
        {["Breakfast until 1 PM", "Pastries until they're gone", "Oat milk, no upcharge"].map((note) => (
          <span
            key={note}
            className="rounded-full border border-cream-50/25 px-3.5 py-1.5 text-xs font-semibold text-cream-100/85"
          >
            {note}
          </span>
        ))}
      </PageHeader>

      {/* Sticky filter bar — tucks under the navbar while scrolling */}
      <div className="sticky top-16 z-30 border-b border-sand-200/80 bg-cream-50/90 backdrop-blur-md lg:top-20">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-4">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-espresso-700/70 lg:block">
            {activeCategory === "all"
              ? "The whole spread — nineteen things we make well."
              : categoryDescriptions[activeCategory]}
          </p>
        </div>
      </div>

      <section className="container-x py-12 lg:py-16">
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-dashed border-sand-300 bg-cream-100/70 p-6 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-espresso-800">
              <span className="font-display text-base font-semibold">Allergies and house rules.</span> The kitchen
              is small, so nothing is certified-free — but nearly every plate can be made gluten-free or vegan if
              you ask. Decaf never costs extra, and neither does oat milk. Complicated orders are welcome.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        eyebrow="Hungry already?"
        title="Better tasted than read about."
        description="The pastry case peaks around nine; the window seats go by ten. Reserve and beat both clocks."
        primaryLabel="Reserve a table"
        primaryTo="/reservations"
        secondaryLabel="Our story"
        secondaryTo="/about"
      />
    </>
  );
}
