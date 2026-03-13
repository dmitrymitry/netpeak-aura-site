"use client";
import { useEffect, useRef } from "react";

interface Props { tr: any }

const CHAT_MESSAGES = [
  { side: "left",  text: "Коли буде готовий звіт?" },
  { side: "right", text: "⚠️ Risk: delayed response (18h)" },
  { side: "left",  text: "Дуже незадоволені результатом" },
  { side: "right", text: "🔴 Sentiment drop detected" },
  { side: "left",  text: "Нам потрібне нове рішення" },
  { side: "right", text: "⚡ Churn risk: HIGH" },
];

export default function Hero({ tr }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const msgs = containerRef.current?.querySelectorAll(".chat-msg");
    if (!msgs) return;
    msgs.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 400 + i * 600);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-[#0a0f1e] to-[#0a0f1e] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
            {tr.hero.badge}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
            {tr.hero.title.split("комунікацій")[0]}
            <span className="text-gradient">
              {tr.hero.title.includes("комунікацій") ? "комунікацій" : "communications"}
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">{tr.hero.subtitle}</p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tr.hero.badges.map((b: string) => (
              <span key={b} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                ✓ {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#cta"
              className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors"
            >
              {tr.hero.cta_demo}
            </a>
            <a
              href="#solution"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-colors"
            >
              {tr.hero.cta_learn}
            </a>
          </div>
        </div>

        {/* Right — animated chat */}
        <div
          ref={containerRef}
          className="card p-6 space-y-3 min-h-[320px]"
        >
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-400">Aura · Live monitoring</span>
          </div>
          {CHAT_MESSAGES.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg flex transition-all duration-500 ${
                msg.side === "right" ? "justify-end" : "justify-start"
              }`}
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              <span
                className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                  msg.side === "right"
                    ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                    : "bg-white/5 text-slate-300 border border-white/10"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
