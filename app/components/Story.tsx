import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal variant="left">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              Built on service. Grown by{" "}
              <span className="text-navy-800">trust.</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                What began as a commitment to serve local businesses has grown
                into a trusted cleaning service for both commercial properties
                and homes. We understand that clean spaces impact safety,
                productivity and peace of mind.
              </p>
              <p>
                That is why communication is a core function of our process. We
                listen, we set clear expectations, and we deliver consistent
                results.
              </p>
              <p>
                At Blues Cleaners, integrity guides our work, respect guides
                our relationships, and precision guides every surface we
                clean — whether servicing storefront windows, commercial
                exteriors or residential deep cleans during life transitions.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-navy-100 via-blue-100 to-white blur-2xl opacity-70"
              />
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden ring-1 ring-navy-100 shadow-2xl shadow-navy-900/15 bg-navy-900">
                <iframe
                  src="https://www.youtube.com/embed/MF1Haf53o-g?rel=0"
                  title="Blues Cleaners — Our Story"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 hidden sm:flex flex-col items-start gap-1 rounded-2xl bg-white p-5 ring-1 ring-navy-100 shadow-xl shadow-navy-900/10"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-navy-700 uppercase">
                  Since Day One
                </span>
                <span className="text-2xl font-black text-ink">
                  Integrity · Respect · Precision
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
