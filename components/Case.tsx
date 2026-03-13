interface Props { tr: any }

export default function Case({ tr }: Props) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="card p-10 md:p-14 text-center bg-gradient-to-br from-brand-900/30 to-transparent">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            Case Study · Netpeak Group
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">{tr.case.title}</h2>
          <p className="text-slate-400 mb-10">{tr.case.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {tr.case.stats.map((s: any) => (
              <div key={s.label} className="card p-6">
                <div className="text-3xl font-bold text-brand-500 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
