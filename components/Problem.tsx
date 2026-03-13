interface Props { tr: any }

const ICONS: Record<string, string> = {
  "eye-off": "👁",
  "clock": "⏰",
  "alert": "⚠️",
};

export default function Problem({ tr }: Props) {
  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.problem.title}</h2>
          <p className="text-slate-400 text-lg">{tr.problem.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {tr.problem.stats.map((s: any) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="text-4xl font-bold text-brand-500 mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-4">
          {tr.problem.items.map((item: any) => (
            <div key={item.text} className="card p-5 flex items-start gap-3">
              <span className="text-2xl">{ICONS[item.icon] ?? "•"}</span>
              <span className="text-slate-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
