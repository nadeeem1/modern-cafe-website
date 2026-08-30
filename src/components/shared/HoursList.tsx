import { openingHours } from "../../data/site";

interface HoursListProps {
  /** `dark` renders rows for espresso backgrounds. */
  tone?: "light" | "dark";
}

/** Weekday hours with the current day highlighted. */
export default function HoursList({ tone = "light" }: HoursListProps) {
  const todayJsDay = new Date().getDay();
  const isDark = tone === "dark";

  return (
    <dl>
      {openingHours.map((entry) => {
        const isToday = entry.jsDay === todayJsDay;
        return (
          <div
            key={entry.day}
            className={`flex items-center justify-between py-2 text-sm ${
              isDark ? "border-b border-cream-50/10 last:border-0" : "border-b border-sand-200 last:border-0"
            }`}
          >
            <dt
              className={`flex items-center gap-2.5 ${
                isDark ? "text-cream-100/80" : "text-espresso-800/80"
              } ${isToday ? "font-bold" : ""}`}
            >
              {entry.day}
              {isToday && (
                <span className="rounded-full bg-clay-500 px-2 py-0.5 text-[9px] font-bold tracking-[0.12em] text-cream-50 uppercase">
                  Today
                </span>
              )}
            </dt>
            <dd
              className={`tabular-nums ${isDark ? "text-cream-100/80" : "text-espresso-800/80"} ${
                isToday ? "font-bold" : ""
              }`}
            >
              {entry.hours}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
