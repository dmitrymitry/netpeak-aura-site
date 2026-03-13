interface Props { tr: any }

export default function Features({ tr }: Props) {
  const f = tr.features;

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{f.title}</h2>
        </div>

        {/* Available now */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
              ✓ {f.available_label}
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="card border-brand-500/30 p-7 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🛡</span>
              <h3 className="text-white text-xl font-bold">{f.core.title}</h3>
            </div>
            <p className="text-slate-400 mb-8">{f.core.desc}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {f.core.feats.map((feat: any, i: number) => (
                <div key={i} className="bg-white/3 border border-white/8 rounded-xl p-4 hover:border-brand-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <h4 className="text-white text-sm font-semibold">{feat.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coming soon */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-500/10 text-slate-400 border border-slate-500/20">
              {f.coming_label}
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {f.coming.map((mod: any, i: number) => (
              <div key={i} className="card p-5 opacity-70 hover:opacity-90 transition-opacity">
                <span className="text-2xl mb-3 block">{mod.icon}</span>
                <h4 className="text-white text-sm font-semibold mb-1">{mod.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm mb-3">{f.coming_cta}</p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-500/40 hover:border-brand-500 text-brand-400 hover:text-brand-300 rounded-xl text-sm font-medium transition-colors"
            >
              {f.coming_cta_btn} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
