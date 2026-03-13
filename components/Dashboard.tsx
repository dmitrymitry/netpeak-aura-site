"use client";

const METRIC_CARDS = [
  { label: "Active chats", labelUa: "Активних чатів", value: "1", icon: "💬", color: "from-blue-600 to-blue-700", emoji: "" },
  { label: "Avg. PM response", labelUa: "Ср. час відповіді", value: "0г 20хв", icon: "⏱", color: "from-blue-600 to-blue-700", emoji: "" },
  { label: "C-risk chats", labelUa: "Чати з С-ризиками", value: "3", icon: "⚠️", color: "from-blue-600 to-blue-700", emoji: "" },
  { label: "T-risk chats", labelUa: "Чати з Т-ризиками", value: "1", icon: "🔴", color: "from-blue-600 to-blue-700", emoji: "" },
  { label: "Client sentiment", labelUa: "Тон клієнта", value: "53%", icon: "😐", color: "from-blue-600 to-blue-700", emoji: "😐😐😐😑😑" },
  { label: "PM sentiment", labelUa: "Тон відповідей ПМ", value: "50%", icon: "😐", color: "from-blue-600 to-blue-700", emoji: "😐😐😐😑😑" },
];

const TABLE_ROWS = [
  { domain: "client-alpha.com",  pm: "A. Kovalenko", role: "Catalyst", chat: "Client Alpha / Netpeak | PPC",       msgs: 2,  crisk: 100, trisk: 100, sentiment: 35, highlight: true },
  { domain: "beta-store.eu",     pm: "M. Bondar",    role: "Lead",     chat: "Netpeak <> Beta Store | Performance", msgs: 3,  crisk: 33,  trisk: 0,   sentiment: 52 },
  { domain: "domain-3.com.ua",   pm: "O. Savchenko", role: "Senior",   chat: "Domain 3 & Netpeak / PPC",            msgs: 4,  crisk: 25,  trisk: 0,   sentiment: 55 },
  { domain: "retail-demo.com",   pm: "I. Marchenko", role: "Middle",   chat: "RetailDemo <> Netpeak | Media",       msgs: 9,  crisk: 11,  trisk: 22,  sentiment: 51 },
  { domain: "domain-5.ua",       pm: "V. Petrenko",  role: "Catalyst", chat: "Netpeak | PPC&Media | Domain 5",      msgs: 5,  crisk: 0,   trisk: 20,  sentiment: 52, highlight: true },
  { domain: "tech-client.ua",    pm: "D. Lysenko",   role: "Senior",   chat: "TechClient / Media / Performance",    msgs: 10, crisk: 20,  trisk: 0,   sentiment: 58 },
];

// Sentiment trend points (Mon–Fri over 2 months, simplified)
const TREND = [53,58,55,60,50,48,55,62,57,52,45,50,55,58,54,49,53,60,65,70,65,58,55,50,47,44,48,52,57,53];
const W = 600, H = 80;
function polyline(pts: number[]) {
  const min = Math.min(...pts), max = Math.max(...pts);
  return pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * W;
    const y = H - ((v - min) / (max - min || 1)) * (H - 8) - 4;
    return `${x},${y}`;
  }).join(" ");
}

interface Props { tr: any }

export default function Dashboard({ tr }: Props) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium rounded-full mb-5">
            Live Dashboard
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tr.dashboard?.title ?? "Приклад дашборду Aura"}
          </h2>
          <p className="text-slate-400 text-lg">
            {tr.dashboard?.subtitle ?? "Так виглядає карта здоров'я ваших проєктів у реальному часі."}
          </p>
        </div>

        {/* Dashboard frame */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0d1424] shadow-2xl">

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0f1e] border-b border-white/10 gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-[11px]">A</span>
              </div>
              <span className="text-white text-sm font-semibold">Netpeak Aura</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {["Chats / Чати", "Domains / Домени", "PS / ПУ", "PM TL / ТД ПМів", "PM / ПМ"].map((f) => (
                <div key={f} className="flex items-center gap-1 px-2.5 py-1 bg-brand-500 rounded text-white text-[11px] font-medium cursor-pointer select-none">
                  {f} <span className="opacity-70">▾</span>
                </div>
              ))}
              <button className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded text-slate-300 text-[11px] transition-colors">
                Clear all filters
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span>Live · Today 09:41</span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {METRIC_CARDS.map((m) => (
              <div key={m.label} className="bg-gradient-to-b from-blue-700 to-blue-800 p-4 flex flex-col items-center text-center">
                <div className="text-[11px] text-blue-200 font-medium mb-1 leading-tight">{m.label} / {m.labelUa}</div>
                <div className="text-white text-2xl font-bold my-1">{m.value}</div>
                {m.emoji && <div className="text-base mt-1">{m.emoji}</div>}
              </div>
            ))}
          </div>

          <div className="p-4 lg:p-5 space-y-5">
            {/* Chat statistics table */}
            <div>
              <div className="text-white text-sm font-semibold mb-3">
                Chat statistics / <span className="text-slate-400 font-normal">Статистика чатів</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-white/5 text-slate-400">
                      <th className="text-left px-3 py-2 font-medium whitespace-nowrap">Domain / Домен</th>
                      <th className="text-left px-3 py-2 font-medium whitespace-nowrap">PM TL</th>
                      <th className="text-left px-3 py-2 font-medium whitespace-nowrap">PM</th>
                      <th className="text-left px-3 py-2 font-medium whitespace-nowrap">Chat</th>
                      <th className="text-center px-3 py-2 font-medium whitespace-nowrap">Msgs</th>
                      <th className="text-center px-3 py-2 font-medium whitespace-nowrap">C-risk %</th>
                      <th className="text-center px-3 py-2 font-medium whitespace-nowrap">T-risk %</th>
                      <th className="text-center px-3 py-2 font-medium whitespace-nowrap">Sentiment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((r, i) => (
                      <tr
                        key={i}
                        className={`border-t border-white/5 transition-colors ${
                          r.highlight ? "bg-blue-900/20" : "hover:bg-white/3"
                        }`}
                      >
                        <td className="px-3 py-2 text-slate-300 whitespace-nowrap">{r.domain}</td>
                        <td className="px-3 py-2 text-slate-400 whitespace-nowrap">{r.pm}</td>
                        <td className="px-3 py-2 text-slate-400 whitespace-nowrap">{r.role}</td>
                        <td className="px-3 py-2 text-slate-300 whitespace-nowrap max-w-[180px] truncate">{r.chat}</td>
                        <td className="px-3 py-2 text-center text-slate-300">{r.msgs}</td>
                        <td className="px-3 py-2 text-center">
                          <span className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                            r.crisk >= 80 ? "bg-red-500/20 text-red-400" :
                            r.crisk >= 20 ? "bg-yellow-500/20 text-yellow-400" :
                            "text-slate-500"
                          }`}>
                            {r.crisk > 0 ? `${r.crisk}%` : "—"}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-center">
                          <span className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                            r.trisk >= 80 ? "bg-red-500/20 text-red-400" :
                            r.trisk >= 20 ? "bg-yellow-500/20 text-yellow-400" :
                            "text-slate-500"
                          }`}>
                            {r.trisk > 0 ? `${r.trisk}%` : "—"}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${r.sentiment >= 70 ? "bg-green-500" : r.sentiment >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                                style={{ width: `${r.sentiment}%` }}
                              />
                            </div>
                            <span className="text-slate-400 text-[11px]">{r.sentiment}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sentiment trend chart */}
            <div className="bg-white/3 border border-white/8 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white text-sm font-semibold">
                  Client sentiment trend / <span className="text-slate-400 font-normal">Тренд тональності клієнта</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-orange-400 inline-block rounded" /> sentiment</span>
                  <span>Jan–Feb 2026</span>
                </div>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 80 }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((pct) => {
                  const y = H - (pct / 100) * (H - 8) - 4;
                  return <line key={pct} x1="0" y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
                })}
                {/* Area */}
                <polygon
                  points={`0,${H} ${polyline(TREND)} ${W},${H}`}
                  fill="url(#sentGrad)"
                />
                {/* Line */}
                <polyline points={polyline(TREND)} fill="none" stroke="#f97316" strokeWidth="2" strokeLinejoin="round" />
                {/* Dots on peaks */}
                {TREND.map((v, i) => {
                  if (i % 5 !== 0) return null;
                  const min = Math.min(...TREND), max = Math.max(...TREND);
                  const x = (i / (TREND.length - 1)) * W;
                  const y = H - ((v - min) / (max - min || 1)) * (H - 8) - 4;
                  return <circle key={i} cx={x} cy={y} r="3" fill="#f97316" />;
                })}
              </svg>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 px-1">
                <span>Jan 2026</span>
                <span>Feb 2026</span>
              </div>
            </div>

            {/* TG Alert */}
            <div className="grid lg:grid-cols-2 gap-5 items-start">
              <div>
                <div className="text-white text-sm font-semibold mb-3">
                  Telegram Alert · <span className="text-slate-400 font-normal">приклад сповіщення про ризик</span>
                </div>
                <div className="bg-[#17212b] rounded-2xl overflow-hidden border border-white/5">
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#1c2733] border-b border-white/5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">N</div>
                    <div>
                      <div className="text-white text-sm font-semibold">Netpeak Aura</div>
                      <div className="text-slate-400 text-xs">bot</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs">online</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="bg-[#1c2733] rounded-xl rounded-tl-sm p-3.5 text-xs space-y-2">
                      <div className="text-white font-bold text-sm">🔴 Client Alpha · /Netpeak</div>
                      <div className="text-slate-300 space-y-0.5">
                        <div>📋 <span className="text-slate-400">Risk category:</span> S Trust / Competence</div>
                        <div>👤 <span className="text-slate-400">PM –</span> A. Kovalenko (Catalyst)</div>
                      </div>
                      <div className="border-t border-white/10 pt-2 text-slate-400">
                        📅 Дата: <span className="text-white">04.03.2026 19:05</span>
                      </div>
                      <div>
                        <div className="text-slate-400 font-medium mb-1">💬 Текст повідомлення:</div>
                        <div className="text-slate-300 bg-white/5 rounded-lg p-2 leading-relaxed italic">
                          "Чому Ваш бюджет постійно збільшується при 50% нецільових дзвінків???? Чим Ви керуєтесь???"
                        </div>
                      </div>
                      <div className="border-t border-white/10 pt-2">
                        <span className="text-orange-400 font-semibold">🧠 Aura:</span>
                        <span className="text-slate-300"> Клієнт висловлює сильне невдоволення зростанням бюджету на фоні низької якості лідів. Ризик втрати довіри.</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-white/10">
                        <div>
                          <span className="text-slate-400">📊 Sentiment: </span>
                          <span className="text-red-400 font-bold text-sm">20/100</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-brand-400 underline cursor-pointer">🔗 Open Chat</span>
                          <span className="text-slate-400">👋 @pm_handle</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-[10px] text-slate-600 mt-1">19:05 ✓✓</div>
                  </div>
                </div>
              </div>

              {/* Risk summary */}
              <div>
                <div className="text-white text-sm font-semibold mb-3">
                  Active Risks · <span className="text-slate-400 font-normal">активні ризики</span>
                </div>
                <div className="space-y-2">
                  {[
                    { project: "Client Alpha",  type: "Trust / Competence", msg: "Клієнт під сумнів компетентність команди", level: "high",   sentiment: 20 },
                    { project: "Domain 5",      type: "Response time",     msg: "Avg відповідь > 20хв цього тижня",         level: "medium", sentiment: 52 },
                    { project: "Retail Demo",   type: "C-risk pattern",    msg: "11% повідомлень містять ризик-сигнали",    level: "medium", sentiment: 51 },
                  ].map((r, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-xs ${
                      r.level === "high"
                        ? "bg-red-500/10 border-red-500/20 text-red-300"
                        : "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{r.project} · {r.type}</span>
                        <span className={`text-[11px] px-1.5 py-0.5 rounded font-bold ${r.level === "high" ? "bg-red-500/20" : "bg-yellow-500/20"}`}>
                          {r.level}
                        </span>
                      </div>
                      <div className="opacity-80">{r.msg}</div>
                      <div className="mt-1.5 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${r.sentiment < 40 ? "bg-red-500" : "bg-yellow-500"}`} style={{ width: `${r.sentiment}%` }} />
                        </div>
                        <span className="text-[11px] opacity-60">sentiment {r.sentiment}</span>
                      </div>
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
