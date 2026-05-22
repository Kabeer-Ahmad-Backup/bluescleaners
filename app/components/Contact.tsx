import Reveal from "./Reveal";

const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "8:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 8:00 PM" },
  { day: "Friday", hours: "8:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              Contact Info
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              Let&apos;s talk about your{" "}
              <span className="text-navy-800">next clean.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <article className="h-full p-7 rounded-3xl bg-white ring-1 ring-navy-100 card-lift">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">Service Area</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Davenport, Iowa — serving the Quad Cities and surrounding areas
                including Bettendorf, Rock Island, Moline, Clinton, Fulton,
                Albany, Eastern Iowa, and Western Illinois.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="h-full p-7 rounded-3xl bg-white ring-1 ring-navy-100 card-lift">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">Phone</h3>
              <a
                href="tel:5632306892"
                className="mt-2 inline-block text-xl font-black text-navy-800 hover:text-navy-900"
              >
                563-230-6892
              </a>
              <h3 className="mt-6 text-lg font-bold text-ink">Email</h3>
              <a
                href="mailto:James@bluescleaners.com"
                className="mt-2 inline-block text-sm font-semibold text-navy-800 hover:text-navy-900 break-all"
              >
                James@bluescleaners.com
              </a>
            </article>
          </Reveal>

          <Reveal delay={240}>
            <article className="h-full p-7 rounded-3xl bg-white ring-1 ring-navy-100 card-lift">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">Opening Hours</h3>
              <dl className="mt-3 divide-y divide-navy-100">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-2 text-sm"
                  >
                    <dt className="font-semibold text-ink">{h.day}</dt>
                    <dd
                      className={`${
                        h.hours === "Closed"
                          ? "text-rose-500"
                          : "text-muted"
                      } font-medium`}
                    >
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
