import Link from "next/link";
import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Fully Insured",
    body: "Complete peace of mind with comprehensive insurance coverage for all our services.",
    icon: (
      <path d="M12 2 4 5v7c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V5l-8-3z" />
    ),
  },
  {
    title: "Licensed & Certified",
    body: "Fully licensed professionals adhering to industry standards and safety protocols.",
    icon: (
      <path d="M9 11l3 3 7-7M12 2a10 10 0 1 0 10 10" />
    ),
  },
  {
    title: "Experienced Team",
    body: "Highly qualified cleaning specialists with years of commercial and residential experience.",
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    title: "Guaranteed Satisfaction",
    body: "We stand behind our work with a 100% satisfaction guarantee on every job.",
    icon: (
      <path d="M12 2l3 6 7 1-5 4.5L18 21l-6-3-6 3 1-7.5L2 9l7-1 3-6z" />
    ),
  },
  {
    title: "Flexible Scheduling",
    body: "Available for regular maintenance or one-time deep cleaning to fit your schedule.",
    icon: (
      <path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    ),
  },
  {
    title: "High-Visibility Results",
    body: "Delivering exceptional, noticeable results that make your property shine.",
    icon: (
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32 bg-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              Why Choose Blues Cleaners?
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              Professionalism, reliability, and{" "}
              <span className="text-navy-800">exceptional results.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed">
              Here&apos;s what sets us apart in the Quad Cities region.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} variant="scale">
              <article className="group h-full p-7 rounded-3xl bg-white ring-1 ring-navy-100 card-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 ring-1 ring-navy-100 group-hover:bg-navy-800 group-hover:text-white transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {r.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex justify-center">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-800 text-white text-sm sm:text-base font-semibold shadow-xl shadow-navy-800/25 hover:bg-navy-900 hover:-translate-y-0.5 transition-all"
            >
              Get a Free Quote Today
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
