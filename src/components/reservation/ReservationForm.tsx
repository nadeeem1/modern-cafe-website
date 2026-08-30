import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CircleAlert, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import {
  emptyReservation,
  getMaxDateIso,
  getTodayIso,
  guestOptions,
  hasErrors,
  timeSlots,
  validateReservation,
} from "../../lib/reservation";
import type { ReservationFormValues } from "../../types";

interface ReservationFormProps {
  onSubmitted: (values: ReservationFormValues) => void;
}

type FormField = keyof ReservationFormValues;

export default function ReservationForm({ onSubmitted }: ReservationFormProps) {
  const [values, setValues] = useState<ReservationFormValues>(emptyReservation);
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation is derived from values; an error is only *shown* for
  // fields the visitor has touched, or for all fields after a submit attempt.
  const errors = validateReservation(values);
  const showError = (field: FormField) => (touched[field] || submitAttempted) && errors[field] !== undefined;

  const handleChange = (field: FormField) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((previous) => ({ ...previous, [field]: event.target.value }));
  };

  const handleBlur = (field: FormField) => () => {
    setTouched((previous) => ({ ...previous, [field]: true }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    if (hasErrors(errors)) return;

    // Simulated booking request — swap with a real POST when wiring a backend.
    setIsSubmitting(true);
    window.setTimeout(() => {
      onSubmitted(values);
    }, 900);
  };

  const fieldClass = (field: FormField) => `field ${showError(field) ? "field-invalid" : ""}`;

  const errorDescribedBy = (field: FormField) => (showError(field) ? `res-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="res-name" className="field-label">
            Full name
          </label>
          <input
            id="res-name"
            type="text"
            autoComplete="name"
            placeholder="Alex Rivera"
            value={values.fullName}
            onChange={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            aria-invalid={showError("fullName")}
            aria-describedby={errorDescribedBy("fullName")}
            className={fieldClass("fullName")}
          />
          {showError("fullName") && (
            <p id="res-fullName-error" className="field-error-msg">
              <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-phone" className="field-label">
            Phone
          </label>
          <input
            id="res-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(503) 555-0100"
            value={values.phone}
            onChange={handleChange("phone")}
            onBlur={handleBlur("phone")}
            aria-invalid={showError("phone")}
            aria-describedby={errorDescribedBy("phone")}
            className={fieldClass("phone")}
          />
          {showError("phone") && (
            <p id="res-phone-error" className="field-error-msg">
              <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="res-date" className="field-label">
            Date
          </label>
          <input
            id="res-date"
            type="date"
            min={getTodayIso()}
            max={getMaxDateIso()}
            value={values.date}
            onChange={handleChange("date")}
            onBlur={handleBlur("date")}
            aria-invalid={showError("date")}
            aria-describedby={errorDescribedBy("date")}
            className={fieldClass("date")}
          />
          {showError("date") && (
            <p id="res-date-error" className="field-error-msg">
              <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-time" className="field-label">
            Time
          </label>
          <select
            id="res-time"
            value={values.time}
            onChange={handleChange("time")}
            onBlur={handleBlur("time")}
            aria-invalid={showError("time")}
            aria-describedby={errorDescribedBy("time")}
            className={fieldClass("time")}
          >
            <option value="">Select…</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {showError("time") && (
            <p id="res-time-error" className="field-error-msg">
              <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.time}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-guests" className="field-label">
            Guests
          </label>
          <select
            id="res-guests"
            value={values.guests}
            onChange={handleChange("guests")}
            onBlur={handleBlur("guests")}
            aria-invalid={showError("guests")}
            aria-describedby={errorDescribedBy("guests")}
            className={fieldClass("guests")}
          >
            <option value="">Select…</option>
            {guestOptions.map((count) => (
              <option key={count} value={String(count)}>
                {count} {count === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          {showError("guests") && (
            <p id="res-guests-error" className="field-error-msg">
              <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.guests}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="res-notes" className="field-label">
          Notes <span className="font-medium normal-case tracking-normal text-espresso-700/60">(optional)</span>
        </label>
        <textarea
          id="res-notes"
          rows={3}
          placeholder="Occasion, high chair, allergies, the sunny corner table…"
          value={values.notes}
          onChange={handleChange("notes")}
          className="field resize-none"
        />
      </div>

      <div className="mt-auto pt-1">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Reserving your table…
            </>
          ) : (
            "Reserve a table"
          )}
        </Button>
        <p className="mt-3 text-center text-xs text-espresso-700/70">
          No card needed — we hold tables for 15 minutes past your time. Parties of 9+?{" "}
          <a href="tel:+15035550164" className="font-bold text-clay-600 underline underline-offset-2">
            Call us
          </a>
          .
        </p>
      </div>
    </form>
  );
}
