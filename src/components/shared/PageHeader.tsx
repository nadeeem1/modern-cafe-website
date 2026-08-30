import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Optional full-bleed background photo, rendered at low opacity. */
  image?: string;
  imageAlt?: string;
  /** Extra row of meta chips below the description. */
  children?: ReactNode;
}

/**
 * Editorial page-intro block used at the top of Menu, About and Reservations.
 */
export default function PageHeader({ eyebrow, title, description, image, imageAlt, children }: PageHeaderProps) {
  return (
    <section className="texture-grain relative overflow-hidden bg-espresso-900 text-cream-50">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt === "" || imageAlt === undefined}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-900 via-espresso-900/80 to-espresso-900/20" />
        </>
      )}

      <div className="container-x relative z-10 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-clay-300">
            <span className="h-px w-8 bg-clay-300" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg">{description}</p>
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
