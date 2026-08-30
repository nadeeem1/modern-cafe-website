import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "../ui/Button";

interface CtaBandProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

/** Moss-green closing band used to route visitors to reservations / menu. */
export default function CtaBand({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="texture-grain bg-moss-800 text-cream-50">
      <div className="container-x relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-moss-300">
            <span className="h-px w-8 bg-moss-300" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream-100/75">{description}</p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap gap-4 lg:justify-end">
          <Button to={primaryTo} variant="light" size="lg">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          {secondaryLabel && secondaryTo && (
            <Button to={secondaryTo} variant="outlineLight" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
