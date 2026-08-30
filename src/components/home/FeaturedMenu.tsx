import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../ui/SectionHeading";
import MenuCard from "../menu/MenuCard";
import { featuredItems } from "../../data/menu";

export default function FeaturedMenu() {
  return (
    <section className="border-y border-sand-200/80 bg-cream-100">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="From the kitchen"
            title={
              <>
                This week's <em className="font-light text-clay-600 italic">house favourites</em>
              </>
            }
            description="Four things the regulars order on autopilot. The full menu — coffee, pastries and breakfast — lives on the menu page."
          />
          <Reveal delay={0.1}>
            <Link
              to="/menu"
              className="group flex items-center gap-2 pb-1 text-sm font-bold text-clay-600 transition-colors hover:text-clay-700"
            >
              View the full menu
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
