interface Props { tr: any }

const ICONS: Record<string, string> = {
  lock:    "🔒",
  users:   "👥",
  shield:  "🛡️",
  "eye-off": "🔕",
};

export default function Security({ tr }: Props) {
  const data = tr.security;
  if (!data) return null;

  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium rounded-full mb-5">
            Security & Compliance
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {data.items.map((item: any, i: number) => (
            <div key={i} className="card p-6 hover:border-green-500/20 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl mb-4 group-hover:bg-green-500/20 transition-colors">
                {ICONS[item.icon] ?? "🔐"}
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm">
            {data.contact.split("security@netpeak-aura.com")[0]}
            <a href="mailto:security@netpeak-aura.com" className="text-brand-400 hover:text-brand-300 underline transition-colors">
              security@netpeak-aura.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
