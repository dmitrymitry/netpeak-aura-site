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

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {data.plans.map((plan: any, i: number) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all ${
                plan.highlighted
                  ? "bg-brand-500/10 border-brand-500/40 shadow-lg shadow-brand-500/10 scale-[1.02]"
                  : "bg-white/3 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand-500 text-white text-xs font-semibold rounded-full">
                  Popular
                </div>
              )}

              <div>
                <h3 className="text-white text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>

              <div className={`text-2xl font-bold ${plan.highlighted ? "text-brand-400" : "text-white"}`}>
                {plan.price}
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block text-center py-2.5 rounded-xl font-medium text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-brand-500 hover:bg-brand-600 text-white"
                    : "border border-white/20 hover:border-white/40 text-white"
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
