interface Props { tr: any }

export default function Solution({ tr }: Props) {
  return (
    <section id="solution" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            How it works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.solution.title}</h2>
          <p className="text-slate-400 text-lg">{tr.solution.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          {tr.solution.steps.map((step: any, i: number) => (
            <div key={step.num} className="relative flex flex-col items-center lg:items-start text-center lg:text-left px-4 pb-8 lg:pb-0">
              {/* Step number circle */}
              <div className="relative z-10 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-500/15 border border-brand-500/40 flex items-center justify-center text-brand-400 font-bold text-sm">
                  {i + 1}
                </div>
              </div>

              <div className="card p-6 w-full hover:border-brand-500/20 transition-colors group">
                <div className="text-4xl font-black text-brand-500/10 group-hover:text-brand-500/20 transition-colors mb-3 leading-none">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
