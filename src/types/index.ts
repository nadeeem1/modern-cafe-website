/** Shared domain types for Ember & Oak. */

export type MenuCategory = "coffee" | "pastries" | "breakfast";

export type MenuCategoryFilter = MenuCategory | "all";

export type DietaryTag = "vegetarian" | "vegan" | "gluten-free";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  imageAlt: string;
  tags?: DietaryTag[];
  /** Picked up by the "house favourites" strip on the home page. */
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** Taller cell in the masonry-style grid. */
  portrait?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
  /** Matches Date.getDay() — 0 is Sunday, 1 is Monday. */
  jsDay: number;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "twitter";
}

export interface SiteInfo {
  name: string;
  descriptor: string;
  tagline: string;
  street: string;
  city: string;
  phone: string;
  phoneHref: string;
  email: string;
  establishedYear: number;
}

export interface ReservationFormValues {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

export type ReservationFormErrors = Partial<Record<keyof ReservationFormValues, string>>;

export type NewsletterStatus = "idle" | "error" | "success";
