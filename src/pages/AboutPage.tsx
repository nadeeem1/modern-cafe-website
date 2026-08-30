import { Flame, Hand, Leaf, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/shared/Reveal";
import CtaBand from "../components/shared/CtaBand";
import { teamMembers, timeline } from "../data/site";

const values: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Leaf,
    title: "Bought at origin",
    text: "We buy directly from twelve farms and two cooperatives. Contracts renew yearly; prices stay above fair-trade floors.",
  },
  {
    icon: Flame,
    title: "Roasted in-house",
    text: "Every Tuesday the drum roaster runs and the whole block smells like toast. Beans never sit longer than three weeks.",
  },
  {
    icon: Users,
    title: "Community first",
    text: "Free refills for the library staff, a pay-it-forward board by the till, and the back room free for neighborhood meetings.",
  },
  {
    icon: Hand,
    title: "Craft over shortcuts",
    text: "Milk steamed by hand, syrups made in the kitchen, croissants laminated over three days. Slow is the point.",
  },
];

const stats = [
  { value: "10+", label: "years on Marshall Street" },
  { value: "14", label: "origins roasted each year" },
  { value: "0", label: "flavoured syrups, ever" },
  { value: "1", label: "very loud drum roaster" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Roasted small, poured slow — <em className="font-light text-clay-300 italic">since 2016</em>.
          </>
        }
        description="Ember & Oak is what happens when two stubborn coffee people refuse to open a second location and instead make the first one better every year."
        image="https://images.pexels.com/photos/4820677/pexels-photo-4820677.jpeg?auto=compress&cs=tinysrgb&w=1600"
      >
        {["Independent", "Direct trade", "Pearl District, Portland"].map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-cream-50/25 px-3.5 py-1.5 text-xs font-semibold text-cream-100/85"
          >
            {badge}
          </span>
        ))}
      </PageHeader>

      {/* Story */}
      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <SectionHeading
            eyebrow="Why we're here"
            title={
              <>
                Coffee should taste like the place it's <em className="font-light text-clay-600 italic">made in</em>.
              </>
            }
          />
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-espresso-700/90">
              <p>
                Most cafés buy coffee roasted hundreds of miles away, weeks before it's poured. We thought a
                neighborhood deserved better — so we put the roaster in the building. When the drum spins on
                Tuesday mornings, you can smell it from the streetcar stop.
              </p>
              <p>
                The kitchen works the same way. Croissants are laminated over three days, jam comes from whatever
                the Saturday market has too much of, and the granola recipe belongs to Marta's grandmother,
                heavily negotiated.
              </p>
              <p>
                We were told to franchise in 2019. Instead we bought bigger chairs, a slower bar, and a lease that
                runs to 2035. That tells you most of what there is to know about us.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-espresso-900/15">
            <img
              src="https://images.pexels.com/photos/4353571/pexels-photo-4353571.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1250"
              alt="Barista pulling a fresh espresso shot from the machine at the bar."
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </div>
          <figure className="relative z-10 mx-6 -mt-14 rounded-2xl border border-sand-200 bg-cream-50 p-6 shadow-xl shadow-espresso-900/10">
            <blockquote className="font-display text-lg leading-snug font-medium text-espresso-900 italic">
              “If we wouldn't proudly make it twice, it doesn't go on the menu.”
            </blockquote>
            <figcaption className="mt-3 text-xs font-bold tracking-[0.16em] text-clay-600 uppercase">
              House rule № 1 — written on the kitchen door
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="border-y border-sand-200/80 bg-cream-100">
        <div className="container-x py-20 lg:py-28">
          <SectionHeading
            eyebrow="A decade, four chapters"
            align="center"
            title={
              <>
                The road to <em className="font-light text-clay-600 italic">Marshall Street</em>
              </>
            }
          />

          <div className="relative mx-auto mt-14 max-w-3xl">
            <span aria-hidden="true" className="absolute top-1 bottom-1 left-[7px] w-px bg-sand-300" />
            <ol className="space-y-12">
              {timeline.map((entry, index) => (
                <li key={entry.year} className="relative pl-10">
                  <Reveal delay={index * 0.08}>
                    <span
                      aria-hidden="true"
                      className="absolute top-1 -left-10 h-4 w-4 translate-x-[7px] rounded-full bg-clay-500 ring-4 ring-cream-100"
                    />
                    <p className="font-display text-sm font-bold tracking-[0.2em] text-clay-600">{entry.year}</p>
                    <h3 className="font-display mt-1 text-2xl font-semibold text-espresso-950">{entry.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-espresso-700/85">
                      {entry.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="What we stand by"
          title={
            <>
              Four promises, <em className="font-light text-clay-600 italic">kept daily</em>
            </>
          }
          description="Not printed on a wall — you'd have to dust it. These just show up in how the shop runs."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="group h-full rounded-2xl border border-sand-200 bg-cream-100/60 p-7 transition-all duration-500 hover:border-clay-400 hover:shadow-[0_18px_36px_-26px] hover:shadow-espresso-950/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-100 text-moss-700 transition-colors duration-500 group-hover:bg-clay-500 group-hover:text-cream-50">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-espresso-950">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-espresso-700/85">{value.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-sand-200/80 bg-cream-100">
        <div className="container-x py-20 lg:py-28">
          <SectionHeading
            eyebrow="The people"
            align="center"
            title={
              <>
                Behind the bar, <em className="font-light text-clay-600 italic">most mornings</em>
              </>
            }
            description="Say hello. We hire for warmth and train for skill — so the conversation is usually better than the latte art, and the latte art is pretty good."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.1}>
                <figure className="group text-center">
                  <div className="overflow-hidden rounded-2xl shadow-lg shadow-espresso-900/10">
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="font-display text-xl font-semibold text-espresso-950">{member.name}</p>
                    <p className="mt-1 text-xs font-bold tracking-[0.16em] text-clay-600 uppercase">
                      {member.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="texture-grain bg-espresso-900 text-cream-50">
        <div className="container-x relative z-10 grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 lg:py-16">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.07} className="text-center">
              <p className="font-display text-4xl font-semibold text-clay-300 lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-cream-100/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Come say hello"
        title="The kettle's already on."
        description="Now that you've read ten years of backstory, the least we can do is pour you a cup. First visit? The cortado is the correct answer."
        primaryLabel="See the menu"
        primaryTo="/menu"
        secondaryLabel="Book a table"
        secondaryTo="/reservations"
      />
    </>
  );
}
