"use client";
import { useState, useEffect } from "react";
import { type Locale } from "@/lib/i18n";

interface Props {
  tr: any;
  locale: Locale;
  setLocale: (l: Locale) => void;
}

export default function Navbar({ tr, locale, setLocale }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0f1e]/95 backdrop-blur border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-white">
            Netpeak <span className="text-brand-500">Aura</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">{tr.nav.features}</a>
          <a href="#roadmap" className="hover:text-white transition-colors">{tr.nav.roadmap}</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Locale switcher */}
          <div className="flex text-xs border border-white/10 rounded-lg overflow-hidden">
            {(["ua", "en"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  locale === l ? "bg-brand-500 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#cta"
            className="hidden md:block px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {tr.nav.demo}
          </a>
        </div>
      </div>
    </nav>
  );
}
