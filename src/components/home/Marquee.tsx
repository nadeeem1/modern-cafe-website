const marqueeItems = [
  "Single-origin espresso",
  "Baked at dawn",
  "Roasted on-site",
  "Direct trade, always",
  "Oat-friendly kitchen",
  "Slow-bar pour overs",
  "Weekend brunch",
  "Est. 2016",
];

/** Quiet, slow scrolling band between the hero and the story section. */
export default function Marquee() {
  return (
    <div className="group-marquee overflow-hidden border-y border-espresso-800 bg-espresso-900 py-3.5 text-cream-100/80">
      <div className="flex w-max animate-marquee">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            aria-hidden={index >= marqueeItems.length}
            className="flex shrink-0 items-center whitespace-nowrap"
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase">{item}</span>
            <span className="mx-8 h-1 w-1 shrink-0 rounded-full bg-clay-400" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
