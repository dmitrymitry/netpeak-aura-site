interface Props { tr: any }

export default function Solution({ tr }: Props) {
  return (
    <section id="solution" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.solution.title}</h2>
          <p className="text-slate-400 text-lg">{tr.solution.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tr.solution.steps.map((step: any) => (
            <div key={step.num} className="card p-6 relative">
              <div className="text-5xl font-bold text-brand-500/20 absolute top-4 right-4">
                {step.num}
              </div>
              <div className="text-brand-500 font-bold text-sm mb-3">{step.num}</div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
