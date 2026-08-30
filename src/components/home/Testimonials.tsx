import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

function getInitials(fullName: string): string {
  return fullName
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const step = (offset: 1 | -1) => {
    setIndex((previous) => (previous + offset + testimonials.length) % testimonials.length);
  };

  // Auto-advance; the interval resets whenever the index moves (manual or auto).
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <section className="texture-grain bg-espresso-900 text-cream-50">
      <div className="container-x relative z-10 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Kind words"
          tone="dark"
          align="center"
          title={
            <>
              What the regulars <em className="font-light text-clay-300 italic">tell their friends</em>
            </>
          }
        />

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="min-h-[15rem] sm:min-h-[12rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-xl leading-[1.4] font-medium text-balance sm:text-2xl lg:text-[1.7rem]">
                  “{current.quote}”
                </p>

                <footer className="mt-7 flex flex-col items-center gap-4">
                  <div className="flex justify-center gap-1" aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({ length: current.rating }).map((_, star) => (
                      <Star key={star} className="h-3.5 w-3.5 fill-clay-400 text-clay-400" aria-hidden="true" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <span
                      aria-hidden="true"
                      className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream-50/20 bg-cream-50/10 text-base font-semibold text-clay-300"
                    >
                      {getInitials(current.author)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{current.author}</span>
                      <span className="block text-xs text-cream-100/60">{current.role}</span>
                    </span>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-cream-50/25 text-cream-50 transition hover:bg-cream-50 hover:text-espresso-900"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dot) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setIndex(dot)}
                  aria-label={`Show testimonial ${dot + 1}`}
                  className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${
                    dot === index ? "w-7 bg-clay-400" : "w-3 bg-cream-50/25 hover:bg-cream-50/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-cream-50/25 text-cream-50 transition hover:bg-cream-50 hover:text-espresso-900"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
