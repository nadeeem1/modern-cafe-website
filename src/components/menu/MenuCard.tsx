import type { MenuItem } from "../../types";

interface MenuCardProps {
  item: MenuItem;
}

/**
 * Printed-menu-style card: name and price joined by a dotted leader.
 * Kept deliberately flat — motion lives in the photo, not the card.
 */
export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-cream-50 transition-all duration-500 hover:border-sand-300 hover:shadow-[0_24px_48px_-28px] hover:shadow-espresso-900/40">
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
        />
        {item.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-cream-50/95 px-2.5 py-1 text-[9px] font-bold tracking-[0.18em] text-espresso-800 uppercase shadow-sm">
            House favourite
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline gap-2">
          <h3 className="font-display text-[17px] font-semibold text-espresso-950">{item.name}</h3>
          <span aria-hidden="true" className="mx-1 flex-1 -translate-y-1 border-b border-dotted border-espresso-700/25" />
          <span className="font-display text-[17px] font-semibold text-espresso-950 tabular-nums">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-espresso-700/85">{item.description}</p>

        {item.tags && item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Dietary information">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-moss-500/30 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.12em] text-moss-700 uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
