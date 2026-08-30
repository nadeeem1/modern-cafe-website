import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { galleryImages } from "../../data/gallery";
import type { GalleryImage } from "../../types";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const activeIndex = activeImage ? galleryImages.findIndex((image) => image.id === activeImage.id) : -1;

  const stepThrough = (offset: 1 | -1) => {
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex + offset + galleryImages.length) % galleryImages.length;
    setActiveImage(galleryImages[nextIndex]);
  };

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") stepThrough(1);
      if (event.key === "ArrowLeft") stepThrough(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);

  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Inside the café"
        title={
          <>
            Warm wood, low light, <em className="font-light text-clay-600 italic">good noise</em>
          </>
        }
        description="A look around the room — the pastry case at first light, roast-club nights, and the nook everyone fights over."
      />

      <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[210px] md:grid-cols-4">
        {galleryImages.map((image, index) => (
          <Reveal
            key={image.id}
            delay={(index % 4) * 0.06}
            className={`${image.portrait ? "row-span-2" : ""}`}
          >
            <button
              type="button"
              onClick={() => setActiveImage(image)}
              aria-label={`Open photo: ${image.caption}`}
              className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-espresso-950/60 text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/30 to-transparent p-4 pt-10 text-left"
              >
                <span className="block translate-y-2 text-sm font-semibold text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.caption}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.caption}
          >
            <button
              type="button"
              aria-label="Close photo viewer"
              onClick={() => setActiveImage(null)}
              className="absolute inset-0 cursor-zoom-out bg-espresso-950/90 backdrop-blur-sm"
            />

            <motion.figure
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-4xl"
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[72vh] w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-cream-100">
                <span className="font-display text-lg italic">{activeImage.caption}</span>
                <span className="text-xs font-bold tracking-[0.2em] text-cream-100/60">
                  {activeIndex + 1} / {galleryImages.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close photo viewer"
              className="absolute top-5 right-5 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream-50/30 text-cream-50 transition hover:bg-cream-50 hover:text-espresso-900"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => stepThrough(-1)}
              aria-label="Previous photo"
              className="absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream-50/30 text-cream-50 transition hover:bg-cream-50 hover:text-espresso-900 sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => stepThrough(1)}
              aria-label="Next photo"
              className="absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream-50/30 text-cream-50 transition hover:bg-cream-50 hover:text-espresso-900 sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
