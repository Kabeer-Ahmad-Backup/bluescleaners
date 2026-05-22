"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What areas do you service in Iowa & Illinois?",
    a: "We proudly serve the entire Quad Cities region from our home base in Davenport, Iowa — including Bettendorf, Rock Island, Moline, Clinton, Fulton, Albany and surrounding communities in Eastern Iowa and Western Illinois.",
  },
  {
    q: "What types of commercial cleaning services do you offer?",
    a: "Our commercial services include pressure washing, large-scale window cleaning, sidewalk and exterior washing, deep cleaning for offices, healthcare and high-use facilities, and ongoing facility cleaning retainers tailored to your operations.",
  },
  {
    q: "Do you offer residential cleaning services?",
    a: "Yes. We provide bi-weekly and monthly residential cleaning for consistent results, residential pressure washing, residential window cleaning, and three-level deep cleaning packages for life transitions, listings and seasonal resets.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Blues Cleaners is fully licensed and carries comprehensive insurance coverage. Every team member adheres to strict safety protocols, so you get peace of mind on every job.",
  },
  {
    q: "How do I get a quote for cleaning services?",
    a: "Reach out by phone, email, or our online form. After a quick conversation about your space and needs, we provide a written proposal outlining scope, pricing and timeline — work only begins after you approve it.",
  },
  {
    q: "What is included in your deep cleaning services?",
    a: "Our three-level deep cleaning ranges from refresh to top-to-bottom restoration: detailed kitchens and bathrooms, inside cabinetry, baseboards, vents, light fixtures, glass, appliances and high-touch sanitization — scaled to the level you choose.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32 bg-soft">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-ink text-balance">
              Frequently Asked{" "}
              <span className="text-navy-800">Questions</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-muted leading-relaxed">
              Find answers to common questions about our cleaning services,
              coverage areas, and pricing.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  className={`rounded-2xl bg-white ring-1 transition-all ${
                    isOpen
                      ? "ring-navy-300 shadow-lg shadow-navy-800/10"
                      : "ring-navy-100 hover:ring-navy-200"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span className="text-base sm:text-lg font-semibold text-ink">
                      {item.q}
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition-transform duration-500 ${
                        isOpen ? "rotate-45 bg-navy-800 text-white" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="h-5 w-5"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
