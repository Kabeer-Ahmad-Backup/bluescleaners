"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section className="relative py-20 sm:py-24 hero-vignette text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-float-slow"
      />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase">
            Stay Connected
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-balance">
            Subscribe to Our Newsletter
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-3 text-white/70">
            Get the latest updates, tips, and exclusive offers delivered to
            your inbox.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur placeholder:text-white/50 text-white focus:bg-white/15 focus:ring-white/40 outline-none transition"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full bg-white text-navy-900 font-semibold hover:bg-sky-100 hover:-translate-y-0.5 transition-all shadow-xl shadow-black/20"
            >
              Subscribe
            </button>
          </form>
          <p
            className={`mt-4 text-sm font-medium text-emerald-300 transition-opacity ${
              status === "success" ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
          >
            ✓ You&apos;re subscribed — talk soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
