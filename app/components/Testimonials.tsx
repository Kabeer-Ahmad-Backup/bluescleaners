import Link from "next/link";
import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "Blues Cleaners did an amazing job on our office building. The results were outstanding and they were very professional.",
    name: "Jane D.",
    role: "Property Manager",
  },
  {
    quote:
      "Reliable, thorough, and friendly service. Highly recommended for commercial and residential cleaning needs.",
    name: "Mark S.",
    role: "Homeowner",
  },
  {
    quote:
      "They transformed our storefront with their pressure washing. Looks brand new!",
    name: "Lisa T.",
    role: "Business Owner",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2l3 6.9 7.5.7-5.6 5 1.7 7.4L12 18.3 5.4 22l1.7-7.4L1.5 9.6 9 8.9 12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              What Our Clients Say
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              Hear from satisfied customers across the{" "}
              <span className="text-navy-800">Quad Cities region.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {QUOTES.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="group h-full p-8 rounded-3xl bg-soft ring-1 ring-navy-100 card-lift relative overflow-hidden">
                <span
                  aria-hidden
                  className="absolute -top-6 -left-2 text-[8rem] font-black leading-none text-navy-100 group-hover:text-navy-200 transition-colors"
                >
                  &ldquo;
                </span>
                <Stars />
                <blockquote className="relative mt-5 text-base sm:text-lg text-ink leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="relative mt-8 pt-6 border-t border-navy-100 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white font-bold">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 flex justify-center">
            <Link
              href="https://www.google.com/search?q=Blues+Cleaners+Davenport+Iowa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full ring-1 ring-navy-200 text-sm font-semibold text-navy-800 hover:bg-navy-800 hover:text-white hover:-translate-y-0.5 transition-all"
            >
              Leave Us a Google Review
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
