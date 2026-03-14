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
            <div key={i} className="card p-6 flex flex-col gap-4 hover:border-white/20 transition-all hover:-translate-y-0.5 group">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm font-semibold text-center">
                📈 {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
