interface Props { tr: any }

export default function Testimonials({ tr }: Props) {
  const data = tr.testimonials;
  if (!data) return null;

  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            Social proof
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {data.items.map((t: any, i: number) => (
            <div key={i} className="card p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              {/* Quote */}
              <div className="text-slate-300 text-sm leading-relaxed flex-1">
                <span className="text-brand-400 text-2xl font-serif leading-none mr-1">"</span>
                {t.quote}
                <span className="text-brand-400 text-2xl font-serif leading-none ml-1">"</span>
              </div>

              {/* Metric */}
              <div className="px-3 py-2 bg-brand-500/10 border border-brand-500/20 rounded-lg text-brand-400 text-sm font-semibold text-center">
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                  <div className="text-slate-500 text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA note */}
        <p className="text-center text-slate-400 text-sm">
          <span className="text-white">💬</span> {data.cta_note}
        </p>
      </div>
    </section>
  );
}
