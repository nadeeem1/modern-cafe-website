import { motion } from "framer-motion";
import { Calendar, Check, Clock, Phone, Users } from "lucide-react";
import Button from "../ui/Button";
import { formatReservationDate } from "../../lib/reservation";
import type { ReservationFormValues } from "../../types";

interface ReservationSuccessProps {
  reservation: ReservationFormValues;
  onMakeAnother: () => void;
}

/** Confirmation panel shown after a successful table reservation. */
export default function ReservationSuccess({ reservation, onMakeAnother }: ReservationSuccessProps) {
  const firstName = reservation.fullName.trim().split(" ")[0];
  const guestCount = Number(reservation.guests);

  const details = [
    { icon: Calendar, label: "Date", value: formatReservationDate(reservation.date) },
    { icon: Clock, label: "Time", value: reservation.time },
    { icon: Users, label: "Party", value: `${guestCount} ${guestCount === 1 ? "guest" : "guests"}` },
    { icon: Phone, label: "Confirming to", value: reservation.phone },
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center py-4 text-center">
      <motion.span
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.45, duration: 0.8 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-moss-500 text-cream-50 shadow-lg shadow-moss-700/30"
      >
        <Check className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <h3 className="font-display mt-6 text-3xl font-medium tracking-tight text-espresso-950">
          See you soon, {firstName}.
        </h3>
        <p className="mt-2 text-sm text-espresso-700/80">
          Your table is held. A confirmation text is on its way to your phone.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.label}
                className="flex items-center gap-3 rounded-2xl border border-sand-200 bg-cream-100/70 px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <dt className="text-[10px] font-bold tracking-[0.16em] text-espresso-700/60 uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-sm font-semibold text-espresso-900">{detail.value}</dd>
                </span>
              </div>
            );
          })}
        </dl>

        {reservation.notes.trim() && (
          <p className="mt-4 rounded-2xl bg-clay-100/60 px-4 py-3 text-left text-xs leading-relaxed text-clay-700">
            <span className="font-bold">We noted:</span> “{reservation.notes.trim()}”
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="dark" onClick={onMakeAnother}>
            Make another reservation
          </Button>
          <Button to="/" variant="outline">
            Back to home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
