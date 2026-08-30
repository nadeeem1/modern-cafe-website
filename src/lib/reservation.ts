import type { ReservationFormErrors, ReservationFormValues } from "../types";

/** Bookable time slots, every 30 minutes from opening to last seating. */
export const timeSlots: string[] = (() => {
  const slots: string[] = [];
  for (let hour = 7; hour <= 16; hour += 1) {
    for (const minute of ["00", "30"]) {
      const hour12 = hour > 12 ? hour - 12 : hour;
      const suffix = hour >= 12 ? "PM" : "AM";
      slots.push(`${hour12}:${minute} ${suffix}`);
    }
  }
  return slots;
})();

export const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export const emptyReservation: ReservationFormValues = {
  fullName: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  notes: "",
};

/** Today's date as YYYY-MM-DD (input[type="date"] compatible). */
export function getTodayIso(): string {
  return toIsoDate(new Date());
}

/** Tables can be booked up to 60 days out. */
export function getMaxDateIso(): string {
  const max = new Date();
  max.setDate(max.getDate() + 60);
  return toIsoDate(max);
}

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function validateReservation(values: ReservationFormValues): ReservationFormErrors {
  const errors: ReservationFormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please tell us who the table is for.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    errors.phone = "Enter a phone number we can confirm on.";
  }

  if (!values.date) {
    errors.date = "Pick a day to visit.";
  } else if (values.date < getTodayIso()) {
    errors.date = "That day has already passed — pick an upcoming one.";
  } else if (values.date > getMaxDateIso()) {
    errors.date = "We only hold tables up to 60 days out.";
  }

  if (!values.time || !timeSlots.includes(values.time)) {
    errors.time = "Pick a time between 7:00 AM and 4:30 PM.";
  }

  if (!values.guests) {
    errors.guests = "How many seats should we set?";
  }

  return errors;
}

export function hasErrors(errors: ReservationFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

/** "2026-02-14" → "Saturday, February 14" */
export function formatReservationDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
