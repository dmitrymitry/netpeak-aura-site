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
  const h = tr.hero;
  const gw: string = h.gradient_word ?? "communications";

  // Split title: text before gradient word + gradient word + rest
  const idx = h.title.indexOf(gw);
  const before = idx >= 0 ? h.title.slice(0, idx) : h.title;
  const after  = idx >= 0 ? h.title.slice(idx + gw.length) : "";

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
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-[#0a0f1e] to-[#0a0f1e] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
            {h.badge}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
            {before}
            {idx >= 0 ? (
              <span className="text-gradient">{gw}</span>
            ) : null}
            {after}
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">{h.subtitle}</p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {h.badges.map((b: string) => (
              <span key={b} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                ✓ {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#cta"
              className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
            >
              {h.cta_demo}
            </a>
            <a
              href="#solution"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-colors"
            >
              {h.cta_learn} →
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <div className="flex -space-x-1.5">
              {["#4f6ef7","#6b84f8","#8fa3ff","#b0bfff"].map((c, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0f1e] flex items-center justify-center text-white font-bold text-[8px]" style={{ background: c }}>
                  {["O","D","M","A"][i]}
                </div>
              ))}
            </div>
            <span>{h.social_proof}</span>
          </div>
        </div>

        {/* Right — animated chat */}
        <div
          ref={containerRef}
          className="card p-6 space-y-3 min-h-[320px] hover:border-white/15 transition-colors"
        >
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-400">Aura · Live monitoring</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
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
