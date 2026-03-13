interface Props { tr: any }

export default function Risks({ tr }: Props) {
  const { risks } = tr;
  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {risks.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tactical */}
          <div className="card p-8 border-yellow-500/20">
            <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full mb-4">
              {risks.tactical.label}
            </div>
            <h3 className="text-xl font-semibold text-white mb-5">{risks.tactical.title}</h3>
            <ul className="space-y-3">
              {risks.tactical.items.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic */}
          <div className="card p-8 border-red-500/20">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium rounded-full mb-4">
              {risks.strategic.label}
            </div>
            <h3 className="text-xl font-semibold text-white mb-5">{risks.strategic.title}</h3>
            <ul className="space-y-3">
              {risks.strategic.items.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
