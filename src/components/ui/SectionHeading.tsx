import type { ReactNode } from "react";
import Reveal from "../shared/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** `dark` is for text sitting on espresso/moss backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const titleTone = tone === "dark" ? "text-cream-50" : "text-espresso-900";
  const bodyTone = tone === "dark" ? "text-cream-100/75" : "text-espresso-700/85";
  const accentTone = tone === "dark" ? "text-clay-300" : "text-clay-600";

  return (
    <Reveal className={`${isCentered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p className={`eyebrow flex items-center gap-3 ${accentTone} ${isCentered ? "justify-center" : ""}`}>
        <span className={`h-px w-8 ${tone === "dark" ? "bg-clay-300" : "bg-clay-500"}`} aria-hidden="true" />
        {eyebrow}
        {isCentered && (
          <span className={`h-px w-8 ${tone === "dark" ? "bg-clay-300" : "bg-clay-500"}`} aria-hidden="true" />
        )}
      </p>
      <h2
        className={`font-display mt-4 text-3xl leading-[1.08] font-medium tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${titleTone}`}
      >
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-relaxed text-pretty ${bodyTone}`}>{description}</p>}
    </Reveal>
  );
}
