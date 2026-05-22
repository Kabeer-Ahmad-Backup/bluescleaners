import Reveal from "./Reveal";

export default function Military() {
  return (
    <section className="relative py-24 sm:py-32 hero-vignette text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-indigo-400/15 blur-3xl animate-float-slow"
        style={{ animationDelay: "-5s" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-[10px] font-bold tracking-[0.25em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Military Values &amp; Service
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight text-balance">
                Military precision.
                <br />
                Civilian results.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-white/75 leading-relaxed">
                Our commitment to excellence is rooted in military precision
                and discipline. We bring the same standards of reliability,
                safety, and thoroughness to every cleaning project.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-9 w-9 text-white"
                  >
                    <path d="M12 2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 16.8 6.2 19.9l1.1-6.5L2.6 8.8l6.5-.9L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wide text-white">
                    Military Service Badge
                  </div>
                  <div className="text-xs text-white/60">
                    Discipline · Reliability · Safety
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={120} className="lg:col-span-3">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl"
              />
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/40 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/I-i4qL-FLrY?rel=0"
                  title="Blues Cleaners — Military Values & Service"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
