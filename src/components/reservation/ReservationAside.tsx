import { CalendarHeart, Mail, Phone } from "lucide-react";
import Reveal from "../shared/Reveal";
import HoursList from "../shared/HoursList";
import { siteInfo } from "../../data/site";

/** Contact quick-cards, private-events pitch and hours for the reservations page. */
export default function ReservationAside() {
  return (
    <div className="flex flex-col gap-5">
      <Reveal className="grid grid-cols-2 gap-5">
        <a
          href={siteInfo.phoneHref}
          className="group rounded-2xl border border-sand-200 bg-cream-100/60 p-5 transition-all duration-300 hover:border-clay-400 hover:shadow-[0_18px_36px_-24px] hover:shadow-espresso-950/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-100 text-clay-600 transition-colors group-hover:bg-clay-500 group-hover:text-cream-50">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="mt-4 text-[10px] font-bold tracking-[0.18em] text-espresso-700/60 uppercase">
            Same-day tables
          </p>
          <p className="font-display mt-1 text-lg font-semibold text-espresso-950">{siteInfo.phone}</p>
        </a>

        <a
          href={`mailto:${siteInfo.email}`}
          className="group rounded-2xl border border-sand-200 bg-cream-100/60 p-5 transition-all duration-300 hover:border-clay-400 hover:shadow-[0_18px_36px_-24px] hover:shadow-espresso-950/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-100 text-clay-600 transition-colors group-hover:bg-clay-500 group-hover:text-cream-50">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="mt-4 text-[10px] font-bold tracking-[0.18em] text-espresso-700/60 uppercase">
            Events &amp; wholesale
          </p>
          <p className="font-display mt-1 truncate text-lg font-semibold text-espresso-950">
            {siteInfo.email.replace(".coffee", "…")}
          </p>
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="texture-grain rounded-2xl bg-clay-600 p-6 text-cream-50">
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/15">
            <CalendarHeart className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="font-display relative z-10 mt-4 text-xl font-semibold">Private events</h3>
          <p className="relative z-10 mt-2 text-sm leading-relaxed text-cream-50/85">
            The back room seats fourteen — supper clubs, cupping nights, tiny birthday things. We do the coffee,
            the cakes and the candles.
          </p>
          <a
            href={`mailto:${siteInfo.email}?subject=Private%20event%20enquiry`}
            className="relative z-10 mt-4 inline-block text-sm font-bold underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Ask about dates →
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="rounded-2xl border border-sand-200 bg-cream-100/60 p-6">
          <h3 className="font-display text-xl font-semibold text-espresso-950">Opening hours</h3>
          <div className="mt-4">
            <HoursList />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-espresso-700/70">
            The kitchen winds down 30 minutes before close. Slow-bar pour overs until 4 PM.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
