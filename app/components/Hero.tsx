import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32 pb-10 sm:pb-14"
    >
      {/* Background composition */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[55%] bg-linear-to-b from-[#f5f8ff] to-transparent" />
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#2952CC]/8 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[380px] w-[380px] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.5] [mask-image:radial-gradient(50%_50%_at_30%_30%,#000,transparent_85%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white ring-1 ring-[#2952CC]/15 shadow-sm text-[11px] sm:text-xs font-semibold tracking-wide text-[#2952CC]">
              <span className="relative inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              </span>
              Insured · Licensed · Quad Cities
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-black tracking-tight leading-[0.95] text-ink text-[clamp(2.4rem,6vw,4.6rem)]">
              The cleaning crew
              <br />
              the Quad Cities
              <br />
              actually{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#2952CC]">trusts.</span>
                <svg
                  aria-hidden
                  viewBox="0 0 220 24"
                  className="absolute left-0 right-0 -bottom-2 w-full h-3 text-[#2952CC]/30"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 16 C 60 4, 160 4, 218 18"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              From storefront windows to residential deep cleans, Blues
              Cleaners brings military precision to every surface. Honest
              proposals. Clear communication. Visible results.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="group relative inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-linear-to-br from-[#2952CC] to-navy-700 text-white text-sm sm:text-base font-semibold shadow-[0_15px_35px_-10px_rgba(41,82,204,0.6)] hover:shadow-[0_22px_45px_-10px_rgba(41,82,204,0.8)] hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative z-10">Get a Free Quote</span>
                <span
                  aria-hidden
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <a
                href="tel:5632306892"
                className="group inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-ink"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-[#2952CC]/15 shadow-sm text-[#2952CC] group-hover:bg-[#2952CC] group-hover:text-white transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">
                    Talk to James
                  </span>
                  <span className="group-hover:text-[#2952CC] transition-colors">
                    563-230-6892
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs sm:text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-500" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                Fully insured &amp; bonded
              </span>
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                100% satisfaction guarantee
              </span>
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Free written proposals
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right — image composition */}
        <div className="lg:col-span-5">
          <Reveal variant="right" delay={150}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative offset frame */}
              <div
                aria-hidden
                className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2.2rem] bg-linear-to-br from-[#2952CC]/15 via-sky-200/40 to-transparent rotate-3"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-2xl ring-1 ring-[#2952CC]/15 bg-white"
              />

              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden ring-1 ring-[#0a1f44]/10 shadow-[0_40px_80px_-30px_rgba(10,31,68,0.45)]">
                <Image
                  src="/hero-team.jpg"
                  alt="Blues Cleaners team member cleaning a window with care"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-[#0a1f44]/40 via-transparent to-transparent"
                />
              </div>

              {/* Floating rating card */}
              <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-8 bg-white rounded-2xl shadow-xl shadow-navy-900/15 ring-1 ring-navy-100 p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 max-w-[16rem] sm:max-w-none">
                <div className="flex -space-x-2 shrink-0">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full ring-2 ring-white text-[10px] sm:text-[11px] font-bold text-white"
                      style={{
                        background:
                          ["#2952CC", "#1a3a7a", "#3b62de"][i],
                      }}
                    >
                      {["JD", "MS", "LT"][i]}
                    </span>
                  ))}
                </div>
                <div className="leading-tight min-w-0">
                  <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                      >
                        <path d="M12 2l3 6.9 7.5.7-5.6 5 1.7 7.4L12 18.3 5.4 22l1.7-7.4L1.5 9.6 9 8.9 12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-ink mt-0.5">
                    Loved by 200+ clients
                  </div>
                </div>
              </div>

              {/* Floating service tag */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-8 bg-[#0a1f44] text-white rounded-2xl shadow-xl shadow-black/30 p-3 sm:p-4 max-w-[12rem] sm:max-w-56">
                <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                  Today
                </div>
                <div className="mt-1 text-xs sm:text-sm font-bold leading-snug">
                  Commercial window job — Bettendorf
                </div>
                <div className="mt-2 sm:mt-3 flex items-center gap-2 text-[10px] sm:text-[11px] text-emerald-300">
                  <span className="relative inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </span>
                  Crew on site
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom trust strip */}
      <Reveal delay={550}>
        <div className="relative mt-12 sm:mt-16 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 p-6 sm:p-8 rounded-3xl bg-linear-to-br from-[#0a1f44] to-[#122d62] text-white shadow-2xl shadow-navy-900/20">
            {[
              { v: "12+", l: "Years of trade discipline" },
              { v: "6", l: "Specialized service lines" },
              { v: "200+", l: "Properties cleaned" },
              { v: "100%", l: "Satisfaction guarantee" },
            ].map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black tracking-tight">
                  {s.v}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-white/55">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
