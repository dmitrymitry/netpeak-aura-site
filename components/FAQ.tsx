"use client";
import { useState } from "react";

interface Props { tr: any }

export default function FAQ({ tr }: Props) {
  const data = tr.faq;
  if (!data) return null;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-slate-400">{data.subtitle}</p>
        </div>

        <div className="space-y-3">
          {data.items.map((item: any, i: number) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                open === i ? "border-brand-500/30 bg-brand-500/5" : "border-white/8 bg-white/3 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              >
                <span className={`text-sm font-medium leading-snug ${open === i ? "text-white" : "text-slate-300"}`}>
                  {item.q}
                </span>
                <span className={`text-lg flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45 text-brand-400" : "text-slate-500"}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
