"use client";

const PROJECTS = [
  { name: "TechCorp", score: 87, trend: "+3", sentiment: "positive", risk: "low",    resp: "1.2h", color: "green" },
  { name: "MediaGroup", score: 64, trend: "-8", sentiment: "neutral",  risk: "medium", resp: "4.1h", color: "yellow" },
  { name: "StartupXYZ", score: 31, trend: "-21", sentiment: "negative", risk: "high",  resp: "11h",  color: "red" },
  { name: "RetailPro",  score: 92, trend: "+5", sentiment: "positive", risk: "low",   resp: "0.8h", color: "green" },
];

const RISK_ITEMS = [
  { project: "StartupXYZ", type: "Churn risk", msg: "Sentiment drop -21% за 3 дні", level: "high" },
  { project: "MediaGroup", type: "Response time", msg: "Avg відповідь > 4h цього тижня", level: "medium" },
  { project: "StartupXYZ", type: "Missing follow-up", msg: "3 обіцянки без виконання", level: "high" },
];

const SCORE_COLORS: Record<string, string> = {
  green:  "text-green-400",
  yellow: "text-yellow-400",
  red:    "text-red-400",
};
const BAR_COLORS: Record<string, string> = {
  green:  "bg-green-500",
  yellow: "bg-yellow-500",
  red:    "bg-red-500",
};
const RISK_COLORS: Record<string, string> = {
  high:   "bg-red-500/10 text-red-400 border-red-500/20",
  medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  low:    "bg-green-500/10 text-green-400 border-green-500/20",
};

const CHART_POINTS = [60, 55, 62, 58, 45, 38, 31];
const W = 200, H = 60;
function sparkline(pts: number[]) {
  const min = Math.min(...pts), max = Math.max(...pts);
  const coords = pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * W;
    const y = H - ((v - min) / (max - min || 1)) * H;
    return `${x},${y}`;
  });
  return `M ${coords.join(" L ")}`;
}

interface Props { tr: any }

export default function Dashboard({ tr }: Props) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            Live Dashboard
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tr.dashboard?.title ?? "Приклад дашборду Aura"}
          </h2>
          <p className="text-slate-400 text-lg">
            {tr.dashboard?.subtitle ?? "Так виглядає карта здоров'я ваших проектів у реальному часі."}
          </p>
        </div>

        {/* Dashboard frame */}
        <div className="card overflow-hidden border-white/10">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">A</span>
              </div>
              <span className="text-white text-sm font-medium">Aura Dashboard</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Live
              </span>
              <span>4 projects · Today 09:41</span>
            </div>
          </div>

          <div className="p-5 grid lg:grid-cols-3 gap-5">
            {/* Left: project list */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Project Health Score</p>
              {PROJECTS.map((p) => (
                <div key={p.name} className="bg-white/3 border border-white/8 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`text-xl font-bold ${SCORE_COLORS[p.color]}`}>{p.score}</div>
                      <div>
                        <div className="text-white text-sm font-medium">{p.name}</div>
                        <div className={`text-xs ${p.trend.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                          {p.trend} this week
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full border text-xs font-medium ${RISK_COLORS[p.risk]}`}>
                        {p.risk} risk
                      </span>
                      <span className="text-slate-400 text-xs">⏱ {p.resp}</span>
                    </div>
                  </div>
                  {/* Score bar */}
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${BAR_COLORS[p.color]}`}
                      style={{ width: `${p.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right: risks + chart */}
            <div className="space-y-4">
              {/* Sentiment chart */}
              <div className="bg-white/3 border border-white/8 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 uppercase tracking-widest">StartupXYZ · Sentiment</span>
                  <span className="text-red-400 text-xs font-medium">↓ -21%</span>
                </div>
                <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 48 }}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={sparkline(CHART_POINTS)} fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d={`${sparkline(CHART_POINTS)} L ${W},${H} L 0,${H} Z`} fill="url(#grad)" />
                </svg>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              {/* Risk feed */}
              <div className="bg-white/3 border border-white/8 rounded-xl p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Active Risks</p>
                <div className="space-y-2">
                  {RISK_ITEMS.map((r, i) => (
                    <div key={i} className={`p-2.5 rounded-lg border text-xs ${RISK_COLORS[r.level]}`}>
                      <div className="font-medium mb-0.5">{r.project} · {r.type}</div>
                      <div className="opacity-70">{r.msg}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
