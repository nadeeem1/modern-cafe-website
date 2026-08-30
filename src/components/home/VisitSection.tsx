import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import HoursList from "../shared/HoursList";
import MapEmbed from "../shared/MapEmbed";
import { mapsDirectionsUrl, siteInfo } from "../../data/site";

export default function VisitSection() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Find us"
        title={
          <>
            Two blocks off the square, <em className="font-light text-clay-600 italic">under the oak sign</em>
          </>
        }
        description="Street parking on Marshall, bike racks by the door, and the 77 line drops you practically on the doorstep."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* Dark info card */}
        <Reveal className="lg:col-span-2">
          <div className="texture-grain h-full rounded-2xl bg-espresso-900 p-7 text-cream-50 sm:p-9">
            <h3 className="font-display relative z-10 text-2xl font-semibold">Visit us</h3>

            <address className="relative z-10 mt-6 space-y-4 text-sm leading-relaxed text-cream-100/80 not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" aria-hidden="true" />
                <span>
                  {siteInfo.street}
                  <br />
                  {siteInfo.city}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-clay-300" aria-hidden="true" />
                <a href={siteInfo.phoneHref} className="transition-colors hover:text-cream-50">
                  {siteInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-clay-300" aria-hidden="true" />
                <a href={`mailto:${siteInfo.email}`} className="transition-colors hover:text-cream-50">
                  {siteInfo.email}
                </a>
              </p>
            </address>

            <div className="relative z-10 mt-7 border-t border-cream-50/10 pt-5">
              <HoursList tone="dark" />
            </div>

            <div className="relative z-10 mt-8">
              <Button href={mapsDirectionsUrl} variant="light" className="w-full sm:w-auto">
                Get directions
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Map */}
        <Reveal delay={0.12} className="lg:col-span-3">
          <MapEmbed className="h-[380px] lg:h-full" />
        </Reveal>
      </div>
    </section>
  );
}
