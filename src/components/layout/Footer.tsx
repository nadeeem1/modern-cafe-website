import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Check, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../shared/Logo";
import SocialIcon from "../shared/SocialIcon";
import { openingHours, siteInfo, socialLinks } from "../../data/site";
import type { NewsletterStatus } from "../../types";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/reservations", label: "Reservations" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>("idle");

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailPattern.test(email.trim())) {
      setNewsletterStatus("error");
      return;
    }
    setNewsletterStatus("success");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="texture-grain bg-espresso-950 text-cream-100">
      <div className="container-x relative z-10 grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
            An independent roastery and café in Portland's Pearl District — pouring small-batch coffee and baking
            every morning since {siteInfo.establishedYear}.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ember & Oak on ${social.label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-100/80 transition-all duration-300 hover:border-clay-500 hover:bg-clay-500 hover:text-cream-50"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="lg:col-span-2">
          <h3 className="eyebrow text-clay-300">Explore</h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-cream-100/75 transition-colors hover:text-cream-50 hover:underline hover:underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-clay-300">Visit</h3>
          <address className="mt-5 space-y-3 text-sm leading-relaxed text-cream-100/75 not-italic">
            <p className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" aria-hidden="true" />
              <span>
                {siteInfo.street}
                <br />
                {siteInfo.city}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-clay-300" aria-hidden="true" />
              <a href={siteInfo.phoneHref} className="transition-colors hover:text-cream-50">
                {siteInfo.phone}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-clay-300" aria-hidden="true" />
              <a href={`mailto:${siteInfo.email}`} className="transition-colors hover:text-cream-50">
                {siteInfo.email}
              </a>
            </p>
          </address>
          <p className="mt-4 text-xs text-cream-100/50">
            {openingHours[0].hours} on weekdays · later on weekends
          </p>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-clay-300">The Sunday Pour</h3>
          <p className="mt-5 text-sm leading-relaxed text-cream-100/70">
            One short email each Sunday — the week's single origin, a recipe, and first dibs on supper-club seats.
          </p>

          {newsletterStatus === "success" ? (
            <p className="mt-4 flex items-center gap-2 rounded-xl border border-moss-500/40 bg-moss-900 px-4 py-3 text-sm font-semibold text-moss-100">
              <Check className="h-4 w-4 shrink-0 text-moss-300" aria-hidden="true" />
              You're on the list — see you Sunday.
            </p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} noValidate className="mt-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex overflow-hidden rounded-full border border-cream-50/20 bg-espresso-900 transition focus-within:border-clay-400">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setNewsletterStatus("idle");
                  }}
                  placeholder="you@example.com"
                  aria-invalid={newsletterStatus === "error"}
                  aria-describedby={newsletterStatus === "error" ? "newsletter-error" : undefined}
                  className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-cream-50 outline-none placeholder:text-cream-100/40"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer bg-clay-500 px-5 text-sm font-bold text-cream-50 transition-colors hover:bg-clay-600"
                >
                  Join
                </button>
              </div>
              {newsletterStatus === "error" && (
                <p id="newsletter-error" className="mt-2 text-xs font-medium text-red-400">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Giant watermark */}
      <div aria-hidden="true" className="overflow-hidden">
        <p className="font-display translate-y-[22%] text-center text-[clamp(4rem,15vw,13rem)] leading-none font-semibold tracking-tight whitespace-nowrap text-cream-50/[0.045] select-none">
          Ember &amp; Oak
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-50/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteInfo.name} {siteInfo.descriptor}. All rights reserved.
          </p>
          <p>Photography via Pexels · Crafted with care</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex cursor-pointer items-center gap-2 font-bold tracking-[0.14em] text-cream-100/70 uppercase transition-colors hover:text-clay-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
