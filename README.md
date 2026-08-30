# Ember & Oak — Roastery & Café

A production-quality marketing site for an independent coffee roastery and café.
Built as a portfolio piece: multi-page React app with a filterable menu,
client-validated table reservations, a photo lightbox, and a fully custom
warm/earthy design system.

> Located (fictionally) at 1200 NW Marshall St, Pearl District, Portland.

---

## Tech stack

| Layer        | Choice                                            |
| ------------ | ------------------------------------------------- |
| Framework    | React 19 + TypeScript + Vite                      |
| Styling      | Tailwind CSS v4 (custom theme tokens in `@theme`) |
| Animation    | Framer Motion (scroll reveals, layout, presence)  |
| Routing      | React Router v7                                   |
| Icons        | Lucide React (+ inline SVG brand marks)           |
| Type pairing | Fraunces (display serif) + DM Sans (body)         |

## Features

- **Four routed pages** — Home, Menu, Our Story, Reservations (+ a custom 404)
- **Sticky navbar** with a collapsing info bar (address · hours · phone),
  active-link underlines and a full-screen animated mobile menu
- **Quiet page transitions** on every route change, plus scroll-triggered
  reveals throughout
- **Filterable menu** (coffee / pastries / breakfast) driven entirely by
  `src/data/menu.ts`, with animated card transitions and dotted-leader pricing
- **Table reservation flow** — name, phone, date, time, guests + notes with
  full client-side validation (past-date and 60-day window checks, phone
  pattern, touched-field UX) and an animated confirmation state
- **Gallery lightbox** with keyboard navigation (arrows / Escape)
- **Auto-playing testimonials carousel** with manual controls
- **Location section** with keyless Google Maps embed and hours that
  highlight *today*
- **Newsletter signup** with email validation and success state
- **Accessible by default** — semantic landmarks, aria states on all form
  errors, alt text on every image, focus-visible rings
- **Fully responsive**, mobile-first

## Project structure

```
src/
├── components/
│   ├── home/          # Hero, Marquee, StoryPreview, FeaturedMenu,
│   │                  # Gallery, Testimonials, VisitSection
│   ├── layout/        # Navbar, Footer, Layout
│   ├── menu/          # MenuCard, CategoryFilter
│   ├── reservation/   # ReservationForm, ReservationSuccess, ReservationAside
│   ├── shared/        # Reveal, Logo, PageHeader, CtaBand, HoursList,
│   │                  # MapEmbed, SocialIcon, ScrollToTop
│   └── ui/            # Button, SectionHeading
├── data/              # menu.ts, testimonials.ts, gallery.ts, site.ts
├── lib/               # reservation.ts (slots, validation, date helpers)
├── pages/             # Home, Menu, About, Reservations, NotFound
├── types/             # Shared TypeScript interfaces
└── utils/             # cn() class-merge helper
```

All content lives in `src/data/` — swap menu items, testimonials, gallery
photos, hours, address and socials without touching any component.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deployment

Zero-config deployments are ready out of the box:

- **Vercel** — `vercel.json` includes the SPA rewrite; import the repo and deploy
- **Netlify** — `public/_redirects` handles client-side routing; publish dir is `dist`

## Screenshots

Add captures after running locally and place them in `docs/screenshots/`:

| Page          | File                              |
| ------------- | --------------------------------- |
| Home          | `docs/screenshots/home.png`       |
| Menu          | `docs/screenshots/menu.png`       |
| Our Story     | `docs/screenshots/about.png`      |
| Reservations  | `docs/screenshots/reserve.png`    |

## Image credits

Photography is served from Pexels' CDN and used for demonstration purposes —
credited to the individual photographers on each photo's Pexels page. Replace
URLs in `src/data/` with a client's own photography for production use.

## License

MIT — free to use as a starter for real client work.
