import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Star } from "lucide-react";
import Button from "../ui/Button";

const heroStats = [
  { value: "14", label: "single origins roasted on the drum" },
  { value: "7 AM", label: "pastries out of the oven, daily" },
  { value: "2 min", label: "walk from Jamison Square park" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

interface InlineHeadlineImageProps {
  src: string;
  alt: string;
}

/** Pill-shaped photo embedded mid-headline — an editorial signature detail. */
function InlineHeadlineImage({ src, alt }: InlineHeadlineImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      draggable={false}
      className="mx-1.5 hidden h-[0.66em] w-[1.9em] -translate-y-[0.05em] rounded-full object-cover align-middle ring-1 ring-espresso-900/10 min-[480px]:inline-block"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      {/* Ambient light washes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(52rem_36rem_at_92%_-14%,rgba(166,90,48,0.13),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(38rem_28rem_at_-12%_112%,rgba(59,79,64,0.1),transparent_60%)]"
      />

      <div className="container-x relative pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Meta row */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <p className="eyebrow flex items-center gap-3 text-clay-600">
            <span className="h-2 w-2 rounded-full bg-clay-500" aria-hidden="true" />
            Roastery &amp; Café — Pearl District, Portland
          </p>
          <p className="hidden items-center gap-1.5 text-xs font-semibold text-espresso-700 sm:flex">
            <span className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} className="h-3.5 w-3.5 fill-clay-500 text-clay-500" />
              ))}
            </span>
            <span className="ml-1.5">4.9 · 1,200+ neighbourhood reviews</span>
          </p>
        </motion.div>

        {/* Editorial headline with inline imagery */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-8 max-w-5xl text-[clamp(2.8rem,7vw,6rem)] leading-[1.03] font-medium tracking-[-0.01em] text-espresso-950"
        >
          Slow mornings,
          <br />
          <InlineHeadlineImage
            src="https://images.pexels.com/photos/31139336/pexels-photo-31139336.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=320&w=520"
            alt="Cappuccino with heart-shaped latte art."
          />
          honest <em className="font-light text-clay-600 italic">coffee.</em>
          <InlineHeadlineImage
            src="https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=320&w=520"
            alt="Golden butter croissants fresh from the oven."
          />
        </motion.h1>

        <div className="mt-10 grid gap-x-12 gap-y-12 lg:mt-14 lg:grid-cols-12">
          {/* Cinematic image panel */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-8"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=880&w=1400"
                alt="The warm café counter at Ember & Oak, with the pastry case glowing under pendant lights."
                className="aspect-[16/10] w-full object-cover"
              />

              {/* Roast-of-the-day chip */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-cream-50/95 p-3.5 pr-4 shadow-lg shadow-espresso-950/20 backdrop-blur sm:bottom-5 sm:left-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                  <Flame className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.2em] text-espresso-700/65 uppercase">
                    On the bar today
                  </span>
                  <span className="font-display block text-[15px] font-semibold text-espresso-950">
                    Colombia · La Palma
                  </span>
                  <span className="block text-xs text-espresso-700/80">cocoa, orange &amp; panela</span>
                </span>
              </div>
            </div>

            {/* Rotating seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, type: "spring", bounce: 0.35 }}
              className="absolute -top-7 right-6 h-24 w-24 sm:right-10"
              aria-hidden="true"
            >
              <div className="absolute inset-0 rounded-full border border-sand-200 bg-cream-50 shadow-[0_10px_24px_-12px] shadow-espresso-950/30" />
              <div className="absolute inset-1 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path id="hero-seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <text
                    className="fill-espresso-900"
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="2.6"
                    fontFamily="DM Sans, sans-serif"
                  >
                    <textPath href="#hero-seal-circle">ROASTED DAILY · SINCE 2016 · PORTLAND ·</textPath>
                  </text>
                </svg>
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-clay-600">
                <Flame className="h-5 w-5" strokeWidth={2} />
              </span>
            </motion.div>
          </motion.div>

          {/* Side column */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-4"
          >
            <div className="border-t border-sand-300/80 pt-6">
              <p className="max-w-md text-[15px] leading-relaxed text-espresso-800/90 sm:text-base">
                An independent roastery and café two blocks from the square. We roast in small batches, bake at
                dawn, and keep the window seats for people who like to stay a while.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button to="/menu" size="lg">
                Explore the menu
              </Button>
              <Link
                to="/reservations"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-espresso-900 underline decoration-sand-300 underline-offset-8 transition-colors hover:decoration-clay-500"
              >
                Book a table
                <ArrowUpRight
                  className="h-4 w-4 text-clay-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <dl className="mt-9 lg:mt-auto lg:pt-12">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-6 border-b border-sand-200 py-3.5 first:border-t last:border-0"
                >
                  <dd className="font-display text-xl font-semibold text-espresso-950">{stat.value}</dd>
                  <dd className="max-w-[12rem] text-right text-xs leading-snug text-espresso-700/75">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
