import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import { siteInfo } from "../../data/site";

interface LogoProps {
  /** `light` renders cream text for dark surfaces. */
  tone?: "dark" | "light";
}

export default function Logo({ tone = "dark" }: LogoProps) {
  const nameTone = tone === "light" ? "text-cream-50" : "text-espresso-900";
  const subTone = tone === "light" ? "text-cream-50/60" : "text-espresso-700/70";

  return (
    <Link to="/" aria-label={`${siteInfo.name} — home`} className="group flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-500 text-cream-50 shadow-md shadow-clay-500/30 transition-transform duration-300 group-hover:rotate-12">
        <Coffee className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        <span className={`font-display block text-xl font-semibold tracking-tight ${nameTone}`}>
          {siteInfo.name}
        </span>
        <span className={`mt-1 block text-[9px] font-bold tracking-[0.3em] uppercase ${subTone}`}>
          {siteInfo.descriptor}
        </span>
      </span>
    </Link>
  );
}
