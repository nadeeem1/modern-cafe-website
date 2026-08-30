import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "../shared/Logo";
import Button from "../ui/Button";
import { siteInfo } from "../../data/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/reservations", label: "Reservations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility info bar — collapses once the page is scrolled */}
      <div
        className={`overflow-hidden bg-espresso-900 text-cream-100/75 transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container-x flex h-9 items-center justify-center gap-6 text-[10.5px] font-semibold tracking-[0.18em] uppercase sm:justify-between">
          <p className="hidden items-center gap-2 min-[520px]:flex">
            <MapPin className="h-3 w-3 shrink-0 text-clay-300" aria-hidden="true" />
            {siteInfo.street} — Pearl District
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-3 w-3 shrink-0 text-clay-300" aria-hidden="true" />
            Open daily · 7 AM – 5 PM
          </p>
          <a
            href={siteInfo.phoneHref}
            className="hidden items-center gap-2 transition-colors hover:text-cream-50 md:flex"
          >
            <Phone className="h-3 w-3 shrink-0 text-clay-300" aria-hidden="true" />
            {siteInfo.phone}
          </a>
        </div>
      </div>

      {/* Main navigation row */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-sand-200 bg-cream-50/90 shadow-[0_12px_32px_-20px] shadow-espresso-950/40 backdrop-blur-md"
            : "border-sand-200/70 bg-cream-50"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `group relative text-[13px] font-semibold tracking-[0.02em] transition-colors ${
                      isActive ? "text-espresso-950" : "text-espresso-800/65 hover:text-espresso-950"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-px bg-clay-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button to="/reservations" size="md" className="hidden sm:inline-flex">
              Book a table
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-espresso-900/15 text-espresso-900 transition hover:bg-espresso-900 hover:text-cream-50 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="texture-grain fixed inset-0 z-[70] flex flex-col bg-espresso-900 text-cream-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="container-x relative z-10 flex h-16 items-center justify-between border-b border-cream-50/10">
              <Logo tone="light" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream-50/25 transition hover:bg-cream-50 hover:text-espresso-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="relative z-10 flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className="group font-display flex items-baseline gap-4 border-b border-cream-50/10 py-4 text-4xl font-medium tracking-tight"
                  >
                    <span className="text-sm font-bold text-clay-300">0{index + 1}</span>
                    <span className="transition-colors group-hover:text-clay-300">{link.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="container-x relative z-10 flex items-center justify-between pb-8 text-[13px] text-cream-100/70"
            >
              <p>
                {siteInfo.street}
                <span className="mx-2 text-clay-300">·</span>
                Portland
              </p>
              <Link to="/reservations" className="font-bold text-clay-300 underline underline-offset-4">
                Book a table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
