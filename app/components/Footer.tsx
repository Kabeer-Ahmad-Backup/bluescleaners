import Link from "next/link";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Bi-Weekly and Monthly Residential Cleaning for Consistent Results",
  "Residential Deep Cleaning Services with Three Levels of Care",
  "Commercial Cleaning Retainers for Businesses That Want Consistent Results",
  "Commercial Sidewalk Pressure Washing for Businesses and Storefronts",
  "Commercial Deep Cleaning for Offices, Healthcare, and High-Use Facilities",
  "Large-Scale Commercial Window Cleaning for Condos, Hospitals, and Dealerships",
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-105 w-105 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-105 w-105 rounded-full bg-indigo-400/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo variant="stacked" invert />
            <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-sm">
              Blues Cleaners is your trusted provider of commercial and
              residential cleaning, window cleaning, pressure washing, and deep
              cleaning services throughout Davenport, Bettendorf, Rock Island,
              Moline, Clinton, Fulton and surrounding Quad Cities communities.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/20 text-white/80 hover:bg-white hover:text-navy-900 transition-all hover:-translate-y-0.5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {s.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/70">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/70">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-sm text-white/75 hover:text-white transition-colors leading-relaxed inline-block"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/70">
              Contact
            </h3>
            <address className="mt-5 not-italic text-sm text-white/75 leading-relaxed">
              Davenport, Iowa
              <br />
              Serving Quad Cities &amp;
              <br />
              Surrounding Areas
            </address>
            <Link
              href="#contact"
              className="mt-6 group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-br from-[#3b62de] to-[#2952CC] text-white text-sm font-semibold shadow-[0_10px_30px_-8px_rgba(41,82,204,0.55)] hover:shadow-[0_18px_40px_-10px_rgba(41,82,204,0.75)] hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
              />
              <span className="relative z-10">Get a Free Quote</span>
              <span
                aria-hidden
                className="relative z-10 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© 2026 Blues Cleaners. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
