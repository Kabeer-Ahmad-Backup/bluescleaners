import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Initial Contact",
    body: "The customer reaches out by phone, email, or online form to discuss their cleaning needs and location within the Quad Cities area.",
  },
  {
    n: "2",
    title: "Signed Job Proposal",
    body: "A detailed cleaning proposal is provided outlining scope of work, pricing, and expectations. Work begins only after approval to ensure transparency.",
  },
  {
    n: "3",
    title: "Initial Walk Through",
    body: "A walkthrough is completed with the client to review the space, confirm priorities, and address any special requests before cleaning begins.",
  },
  {
    n: "4",
    title: "Professional Cleaning Process",
    body: "Our trained team completes the cleaning using proven methods and industry standards, whether commercial or residential, with a strong focus on detail and consistency.",
  },
  {
    n: "5",
    title: "Final Inspection",
    body: "A final inspection is performed to ensure all agreed upon services are completed to standard and meet client expectations.",
  },
  {
    n: "6",
    title: "Follow Up & Refinement",
    body: "We follow up with the client after service to confirm satisfaction and refine future cleanings if needed, ensuring long term results and communication.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32 bg-soft overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000_30%,transparent_85%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              Our Cleaning Process
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              Transparency and clear communication at{" "}
              <span className="text-navy-800">every step.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed">
              Our proven 6-step process ensures you know exactly what to expect
              from start to finish.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <article className="group relative h-full bg-white rounded-3xl p-7 ring-1 ring-navy-100 card-lift">
                <div className="flex items-center gap-4">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 text-white text-xl font-black shadow-lg shadow-navy-800/20">
                    {step.n}
                    <span className="absolute -inset-0.5 rounded-2xl ring-2 ring-navy-200 opacity-0 group-hover:opacity-100 transition" />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                </div>
                <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">
                  {step.body}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-navy-200 via-navy-100 to-transparent" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-16 max-w-3xl mx-auto text-center text-muted leading-relaxed">
            With attention to detail, integrity, and respect at the core of
            everything we do, Blues Cleaners delivers reliable, professional
            cleaning services you can trust. Proudly serving the Quad Cities
            community with results you can see.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
