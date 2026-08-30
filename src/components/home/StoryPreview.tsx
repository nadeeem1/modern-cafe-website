import { ArrowRight, Flame, HeartHandshake, Leaf } from "lucide-react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const promises = [
  { icon: Leaf, text: "Direct trade & seasonal — we buy at origin, never from catalogs" },
  { icon: Flame, text: "Roasted twenty steps from your table, every Tuesday" },
  { icon: HeartHandshake, text: "Independent since 2016 — two owners, zero investors" },
];

export default function StoryPreview() {
  return (
    <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      {/* Photo collage */}
      <Reveal className="relative">
        <div className="relative mr-10 sm:mr-16">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-espresso-900/15">
            <img
              src="https://images.pexels.com/photos/6278886/pexels-photo-6278886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1250"
              alt="Barista behind the bar pulling an espresso shot in warm light."
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -right-10 -bottom-10 w-40 rotate-3 overflow-hidden rounded-2xl border-8 border-cream-50 shadow-2xl shadow-espresso-900/20 sm:-right-16 sm:w-52">
            <img
              src="https://images.pexels.com/photos/37540255/pexels-photo-37540255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640"
              alt="Freshly roasted coffee beans cooling in the drum roaster."
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div
            aria-hidden="true"
            className="font-display absolute -top-7 -left-4 flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border-2 border-clay-500 bg-cream-50 text-center text-[10px] leading-tight font-bold tracking-[0.2em] text-clay-600 uppercase shadow-md sm:-left-8"
          >
            Est.
            <br />
            2016
          </div>
        </div>
      </Reveal>

      {/* Copy */}
      <div className="mt-8 lg:mt-0">
        <SectionHeading
          eyebrow="Our story"
          title={
            <>
              From a garage roaster to your <em className="font-light text-clay-600 italic">corner table</em>.
            </>
          }
          description="Ember & Oak started with a popcorn popper, a rented market stall, and a stubborn belief that a neighborhood deserves coffee roasted within smelling distance of where it's poured. A decade later we have twelve more seats, a real drum roaster, and the same stubbornness."
        />

        <Reveal delay={0.15}>
          <ul className="mt-8 space-y-4">
            {promises.map((promise) => {
              const Icon = promise.icon;
              return (
                <li key={promise.text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed font-medium text-espresso-800">{promise.text}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.25} className="mt-9 flex flex-wrap items-center gap-6">
          <Button to="/about" variant="dark">
            Read our story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="font-display text-lg text-espresso-700 italic">— Marta &amp; Jonah, founders</p>
        </Reveal>
      </div>
    </section>
  );
}
