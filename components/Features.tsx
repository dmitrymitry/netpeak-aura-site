interface Props { tr: any }

const ICONS: Record<string, string> = {
  shield: "🛡",
  bot: "🤖",
  chart: "📊",
  graduation: "🎓",
  rocket: "🚀",
  trending: "📈",
  zap: "⚡",
};

const TAG_COLORS: Record<string, string> = {
  Core: "bg-brand-500/10 text-brand-400 border-brand-500/20",
  AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Data: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Growth: "bg-green-500/10 text-green-400 border-green-500/20",
  Start: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Revenue: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Auto: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function Features({ tr }: Props) {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.features.title}</h2>
          <p className="text-slate-400 text-lg">{tr.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tr.features.list.map((f: any) => {
            const isCore = f.tag === "Core";
            return (
              <div
                key={f.title}
                className={`card p-6 transition-colors relative ${
                  isCore
                    ? "border-brand-500/30 hover:border-brand-500/50"
                    : "opacity-60 hover:opacity-80"
                }`}
              >
                {/* Status badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-2xl ${!isCore ? "grayscale" : ""}`}>
                    {ICONS[f.icon] ?? "•"}
                  </span>
                  {isCore ? (
                    <span className="px-2 py-0.5 rounded-full border text-xs font-medium bg-green-500/10 text-green-400 border-green-500/20">
                      ✓ Available
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full border text-xs font-medium bg-white/5 text-slate-500 border-white/10">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3 className={`font-semibold mb-2 ${isCore ? "text-white" : "text-slate-400"}`}>
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
