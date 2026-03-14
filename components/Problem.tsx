interface Props { tr: any }

const ICONS: Record<string, JSX.Element> = {
  "eye-off": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ),
  "clock": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "alert": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
};

const STAT_STYLES = [
  { bg: "from-brand-500/20 to-brand-500/5 border-brand-500/30", text: "text-brand-400" },
  { bg: "from-orange-500/20 to-orange-500/5 border-orange-500/30", text: "text-orange-400" },
  { bg: "from-red-500/20 to-red-500/5 border-red-500/30", text: "text-red-400" },
];

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
          {tr.problem.stats.map((s: any, i: number) => (
            <div key={s.label} className={`rounded-2xl border bg-gradient-to-b ${STAT_STYLES[i].bg} p-6 text-center`}>
              <div className={`text-4xl md:text-5xl font-black mb-2 ${STAT_STYLES[i].text}`}>{s.value}</div>
              <div className="text-slate-400 text-xs md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Problem items */}
        <div className="grid md:grid-cols-3 gap-4">
          {tr.problem.items.map((item: any, i: number) => (
            <div key={item.text} className="card p-5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center ${STAT_STYLES[i].text} bg-white/5`}>
                {ICONS[item.icon] ?? <span className="text-lg">•</span>}
              </div>
              <span className="text-slate-300 text-sm leading-relaxed pt-1.5">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
