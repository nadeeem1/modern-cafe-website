import { useState } from "react";
import PageHeader from "../components/shared/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/shared/Reveal";
import MapEmbed from "../components/shared/MapEmbed";
import ReservationForm from "../components/reservation/ReservationForm";
import ReservationSuccess from "../components/reservation/ReservationSuccess";
import ReservationAside from "../components/reservation/ReservationAside";
import type { ReservationFormValues } from "../types";

export default function ReservationsPage() {
  const [submittedReservation, setSubmittedReservation] = useState<ReservationFormValues | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title={
          <>
            Hold a table — we'll hold the <em className="font-light text-clay-300 italic">good light</em>.
          </>
        }
        description="Booking is free and takes about thirty seconds. Weekend brunch slots go quickly; weekday mornings you can usually just wander in."
        image="https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&w=1600"
      >
        {["Free to book", "15-minute grace period", "Parties of 9+ by phone"].map((note) => (
          <span
            key={note}
            className="rounded-full border border-cream-50/25 px-3.5 py-1.5 text-xs font-semibold text-cream-100/85"
          >
            {note}
          </span>
        ))}
      </PageHeader>

      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1.45fr_1fr] lg:py-20">
        <Reveal>
          <div className="min-h-[36rem] rounded-2xl border border-sand-200 bg-cream-50 p-6 shadow-[0_24px_48px_-32px] shadow-espresso-950/30 sm:p-10">
            {submittedReservation ? (
              <ReservationSuccess
                reservation={submittedReservation}
                onMakeAnother={() => setSubmittedReservation(null)}
              />
            ) : (
              <>
                <h2 className="font-display text-2xl font-semibold text-espresso-950 sm:text-3xl">
                  Book your table
                </h2>
                <p className="mt-1.5 mb-7 text-sm text-espresso-700/75">
                  Tell us when and how many — we'll take care of the rest.
                </p>
                <ReservationForm onSubmitted={setSubmittedReservation} />
              </>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ReservationAside />
        </Reveal>
      </section>

      <section className="container-x pb-20 lg:pb-28">
        <SectionHeading
          eyebrow="Where to find us"
          title={
            <>
              The corner with the <em className="font-light text-clay-600 italic">oak sign</em>
            </>
          }
          description="1200 NW Marshall St, Portland. Street parking on Marshall, bike racks by the door, and the 77 stops half a block away."
        />
        <Reveal delay={0.1} className="mt-10">
          <MapEmbed className="h-[420px]" />
        </Reveal>
      </section>
    </>
  );
}
