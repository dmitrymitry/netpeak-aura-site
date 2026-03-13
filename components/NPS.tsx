interface Props { tr: any }

export default function NPS({ tr }: Props) {
  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
              NPS Automation
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{tr.nps.title}</h2>
            <p className="text-slate-400 mb-6">{tr.nps.subtitle}</p>
            <ul className="space-y-3">
              {tr.nps.items.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 text-xs flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NPS widget mockup */}
          <div className="card p-6 space-y-4">
            <div className="text-sm text-slate-400 mb-2">NPS Survey · Aura</div>
            <p className="text-white text-sm">
              Як би ви оцінили роботу нашої команди за останній місяць?
            </p>
            <div className="flex gap-1">
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <div
                  key={n}
                  className={`flex-1 h-8 rounded text-xs flex items-center justify-center font-medium ${
                    n >= 9
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : n >= 7
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">72</div>
                <div className="text-xs text-slate-400">NPS Score</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">94%</div>
                <div className="text-xs text-slate-400">Response rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-brand-400">↑ 12</div>
                <div className="text-xs text-slate-400">vs last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
