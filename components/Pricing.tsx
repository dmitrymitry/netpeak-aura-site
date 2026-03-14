interface Props { tr: any }

export default function Pricing({ tr }: Props) {
  const data = tr.pricing;
  if (!data) return null;

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 items-start">
          {data.plans.map((plan: any, i: number) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-b from-brand-500/15 to-brand-500/5 border-brand-500/50 shadow-xl shadow-brand-500/15 md:scale-[1.04] md:-mt-2"
                  : "bg-white/3 border-white/10 hover:border-white/20 hover:-translate-y-0.5"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg shadow-brand-500/30">
                  ⭐ Popular
                </div>
              )}

              {/* Glow ring for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-500/30 pointer-events-none" />
              )}

              <div>
                <h3 className="text-white text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>

              <div>
                <div className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-white"}`}>
                  {plan.price}
                </div>
                {plan.highlighted && (
                  <p className="text-brand-400 text-xs mt-1">Most popular for growing teams</p>
                )}
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className={`mt-0.5 flex-shrink-0 font-bold ${plan.highlighted ? "text-brand-400" : "text-green-400"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50"
                    : "border border-white/15 hover:border-white/30 text-white hover:bg-white/5"
                }`}
              >
                {data.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm">
          <span className="text-green-400">✓</span> {data.trial}
        </p>
      </div>
    </section>
  );
}
