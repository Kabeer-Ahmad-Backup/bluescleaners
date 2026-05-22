"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#story" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Slim utility bar */}
      <div
        className={`hidden md:block bg-[#0a1f44] text-white/85 text-xs transition-[max-height,opacity] duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:5632306892"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-semibold tracking-wide">563-230-6892</span>
            </a>
            <a
              href="mailto:James@bluescleaners.com"
              className="hidden lg:inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              James@bluescleaners.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden lg:inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Davenport, IA · Quad Cities
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              </span>
              Open · Mon–Fri 8AM–8PM
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-500 bg-white/95 backdrop-blur-md ${
          scrolled
            ? "shadow-[0_10px_30px_-12px_rgba(10,31,68,0.2)]"
            : "shadow-[0_2px_10px_-6px_rgba(10,31,68,0.08)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
          <Link href="#top" aria-label="Blues Cleaners home" className="shrink-0">
            <Logo variant="stacked" />
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-ink/75 hover:text-[#2952CC] transition-colors group px-3 py-2 rounded-full hover:bg-[#2952CC]/5"
              >
                {link.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#2952CC] transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:5632306892"
              aria-label="Call Blues Cleaners"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2952CC]/10 text-[#2952CC] hover:bg-[#2952CC] hover:text-white transition-colors"
            >
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
            </a>

            <Link
              href="#contact"
              className="hidden sm:inline-flex group relative items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-br from-[#2952CC] to-navy-600 text-white text-sm font-semibold shadow-lg shadow-[#2952CC]/25 hover:shadow-[#2952CC]/40 transition-all hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
              <span
                aria-hidden
                className="relative z-10 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
              <span
                aria-hidden
                className="absolute inset-0 bg-linear-to-br from-[#3b62de] to-[#2952CC] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 h-10 w-10 rounded-full hover:bg-[#2952CC]/5 transition-colors"
            >
              <span
                className={`block h-0.5 w-5 bg-[#0a1f44] transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#0a1f44] transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#0a1f44] transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-navy-100 shadow-xl transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-112 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-ink/85 hover:bg-[#2952CC]/5 hover:text-[#2952CC] transition-colors"
            >
              {link.label}
              <span
                aria-hidden
                className="text-[#2952CC] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              >
                →
              </span>
            </Link>
          ))}
          <div className="mt-3 pt-4 border-t border-navy-100 flex flex-col gap-3">
            <a
              href="tel:5632306892"
              className="inline-flex items-center gap-3 px-3 text-sm font-medium text-ink/80"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2952CC]/10 text-[#2952CC]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="font-bold tracking-wide">563-230-6892</span>
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-linear-to-br from-[#2952CC] to-navy-600 text-white text-sm font-semibold shadow-lg shadow-[#2952CC]/25"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
