import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Respect",
    body: "Every customer's property and every team member receives equal care and professionalism. We treat your space as if it were our own, protecting what matters most to you while maintaining a safe, respectful environment for our employees. This dual commitment to respect ensures exceptional service delivered with genuine care and attention to detail.",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    title: "Integrity",
    body: "We do the right thing even when no one is watching. Our philosophy is built on honest work, transparent practices, and ethical decisions in every situation. From the quality of our cleaning to how we handle your property and billing, integrity guides every action we take—ensuring you receive the trustworthy service you deserve.",
    icon: (
      <path d="M12 2 4 6v6c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V6l-8-4zm-1 13L7.5 11.5 9 10l2 2 4-4 1.5 1.5L11 15z" />
    ),
  },
  {
    title: "Communication",
    body: "Clear, streamlined communication creates clear expectations before, during, and after each job. We believe in proactive updates, responsive service, and transparent dialogue throughout your entire experience. From initial consultation through final walkthrough, our commitment to open communication ensures you're informed, confident, and completely satisfied with every detail.",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              Core Values
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              The principles that{" "}
              <span className="text-navy-800">guide every job.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <article className="group relative h-full p-8 rounded-3xl bg-gradient-to-br from-soft to-white ring-1 ring-navy-100 card-lift overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-navy-100 opacity-40 group-hover:opacity-70 transition-opacity"
                />
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-white shadow-lg shadow-navy-800/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    {v.icon}
                  </svg>
                </span>
                <h3 className="relative mt-6 text-2xl font-black text-ink tracking-tight">
                  {v.title}
                </h3>
                <p className="relative mt-4 text-sm sm:text-base text-muted leading-relaxed">
                  {v.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
