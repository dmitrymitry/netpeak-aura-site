"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";

interface Props {
  tr: any;
  locale: Locale;
  setLocale: (l: Locale) => void;
}

export default function Navbar({ tr, locale, setLocale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#features", label: tr.nav.features },
    { href: "#pricing",  label: tr.nav.pricing },
    { href: "#roadmap",  label: tr.nav.roadmap },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Image src="/logo.png" alt="Netpeak Aura" width={120} height={40} className="h-9 w-auto object-contain" priority />
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Locale switcher */}
          <div className="flex text-xs border border-white/10 rounded-lg overflow-hidden">
            {(["ua", "en"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1.5 uppercase font-medium transition-colors ${
                  locale === l ? "bg-brand-500 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#cta"
            className="hidden md:block px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-md hover:shadow-brand-500/30"
          >
            {tr.nav.demo}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all origin-center duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all origin-center duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-md border-b border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-colors text-center"
            >
              {tr.nav.demo}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
