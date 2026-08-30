import type { OpeningHours, SiteInfo, SocialLink, TeamMember, TimelineEntry } from "../types";

export const siteInfo: SiteInfo = {
  name: "Ember & Oak",
  descriptor: "Roastery & Café",
  tagline: "Slow mornings, honest coffee.",
  street: "1200 NW Marshall St",
  city: "Pearl District · Portland, OR 97209",
  phone: "(503) 555-0164",
  phoneHref: "tel:+15035550164",
  email: "hello@emberandoak.coffee",
  establishedYear: 2016,
};

export const openingHours: OpeningHours[] = [
  { day: "Monday", hours: "7:00 AM – 5:00 PM", jsDay: 1 },
  { day: "Tuesday", hours: "7:00 AM – 5:00 PM", jsDay: 2 },
  { day: "Wednesday", hours: "7:00 AM – 5:00 PM", jsDay: 3 },
  { day: "Thursday", hours: "7:00 AM – 5:00 PM", jsDay: 4 },
  { day: "Friday", hours: "7:00 AM – 6:00 PM", jsDay: 5 },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM", jsDay: 6 },
  { day: "Sunday", hours: "8:00 AM – 4:00 PM", jsDay: 0 },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
];

export const mapsEmbedUrl =
  "https://www.google.com/maps?q=1200+NW+Marshall+St,+Portland,+OR+97209&z=16&output=embed";

export const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=1200+NW+Marshall+St,+Portland,+OR+97209";



export const teamMembers: TeamMember[] = [
  {
    id: "marta",
    name: "Marta Kowalski",
    role: "Co-founder · Head of Coffee",
    image: "https://images.pexels.com/photos/13736419/pexels-photo-13736419.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Marta smiling while serving a customer at the café counter.",
  },
  {
    id: "jonah",
    name: "Jonah Reyes",
    role: "Co-founder · Roaster",
    image: "https://images.pexels.com/photos/29647355/pexels-photo-29647355.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Jonah in a cap and apron beside the coffee roaster.",
  },
  {
    id: "elif",
    name: "Elif Demir",
    role: "Café Manager",
    image: "https://images.pexels.com/photos/31967783/pexels-photo-31967783.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Elif in a green apron standing in front of the espresso bar.",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "A garage, a popcorn popper",
    description:
      "Marta starts roasting greens from a friend's garage in Sellwood, selling 250g bags at the Saturday market.",
  },
  {
    year: "2016",
    title: "Twelve seats on Marshall",
    description:
      "Ember & Oak opens with a secondhand lever machine, a rented oven, and a hand-painted sign. The line forms anyway.",
  },
  {
    year: "2019",
    title: "The roastery moves in",
    description:
      "We knock through the back wall and install our 12 kg drum roaster. Every cup is now roasted twenty steps from the bar.",
  },
  {
    year: "Today",
    title: "Still independent, still small",
    description:
      "Two hundred regulars by name, fourteen origins a year, and the same rule since day one: nothing on the menu we wouldn't make twice.",
  },
];
