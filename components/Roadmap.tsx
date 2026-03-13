interface Props { tr: any }

const STATUS_STYLES: Record<string, string> = {
  coming: "bg-brand-500/10 text-brand-400 border-brand-500/20",
  planned: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};
const STATUS_LABEL: Record<string, string> = {
  coming: "Coming soon",
  planned: "Planned",
};

export default function Roadmap({ tr }: Props) {
  return (
    <section id="roadmap" className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.roadmap.title}</h2>
          <p className="text-slate-400 text-lg">{tr.roadmap.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tr.roadmap.items.map((item: any) => (
            <div key={item.title} className="card p-6 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-brand-400 text-xs font-mono">{item.quarter}</span>
                <span
                  className={`px-2 py-0.5 rounded-full border text-xs font-medium ${
                    STATUS_STYLES[item.status] ?? STATUS_STYLES.planned
                  }`}
                >
                  {STATUS_LABEL[item.status] ?? item.status}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
