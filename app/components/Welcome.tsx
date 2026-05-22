import Link from "next/link";
import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Commercial Pressure Washing",
    icon: (
      <path d="M3 21v-3a4 4 0 0 1 4-4h2m4-10v6m0 0 3-3m-3 3-3-3m6 9 5 5m0 0-1.5.5L18 22l-1-2.5L19 18l5 5z" />
    ),
  },
  {
    title: "Commercial Window Cleaning",
    icon: (
      <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
    ),
  },
  {
    title: "Facility Cleaning Services",
    icon: (
      <path d="M3 21V9l9-6 9 6v12M9 21V12h6v9" />
    ),
  },
  {
    title: "Residential Pressure Washing",
    icon: (
      <path d="M5 21h14M7 21V9l5-5 5 5v12M10 14h4v7h-4z" />
    ),
  },
  {
    title: "Residential Window Cleaning",
    icon: (
      <path d="M6 3h12v18H6zM6 9h12M6 15h12M12 3v18" />
    ),
  },
  {
    title: "Deep Cleaning (Three Levels)",
    icon: (
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" />
    ),
  },
];

export default function Welcome() {
  return (
    <section id="services" className="relative pt-16 sm:pt-20 pb-24 sm:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <Reveal>
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
                Welcome to Blues Cleaners
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
                Comprehensive cleaning that keeps your property at its{" "}
                <span className="text-navy-800">best.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
                Serving Davenport, Iowa and the entire Quad Cities region, our
                insured team delivers high-visibility results while adhering to
                strict safety standards. From storefront windows and commercial
                exteriors to detailed residential deep cleans, every project is
                managed with precision and transparent communication.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <Link
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy-800 hover:text-navy-900"
              >
                <span className="border-b-2 border-navy-800/40 group-hover:border-navy-800 pb-1 transition-colors">
                  View All Services
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal variant="right" delay={120}>
            <h3 className="text-sm font-bold tracking-[0.2em] text-navy-700 uppercase mb-6">
              Our Services Include
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map((s, i) => (
                <li
                  key={s.title}
                  className="group flex items-start gap-3 p-4 rounded-2xl bg-soft hover:bg-white card-lift ring-1 ring-navy-100/60"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-white">
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
                  </span>
                  <span className="pt-2 text-sm font-semibold text-ink">
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
