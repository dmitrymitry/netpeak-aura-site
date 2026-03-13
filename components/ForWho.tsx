interface Props { tr: any }

const ROLES = [
  { icon: "👤", role_ua: "Client Service Director", role_en: "Client Service Director", desc_ua: "Контролює якість роботи команди з клієнтами", desc_en: "Controls team quality in client work" },
  { icon: "🏆", role_ua: "Customer Success Director", role_en: "Customer Success Director", desc_ua: "Відстежує задоволеність та утримання клієнтів", desc_en: "Tracks satisfaction and client retention" },
  { icon: "📣", role_ua: "Head of Sales", role_en: "Head of Sales", desc_ua: "Бачить ризики відтоку та можливості для зростання", desc_en: "Sees churn risks and growth opportunities" },
  { icon: "⚙️", role_ua: "COO", role_en: "COO", desc_ua: "Отримує операційну аналітику по всіх командах", desc_en: "Gets operational analytics across all teams" },
  { icon: "🎯", role_ua: "CEO", role_en: "CEO", desc_ua: "Розуміє стан бізнесу без занурення в деталі", desc_en: "Understands business health without micromanaging" },
];

const COMPANY_TYPES = [
  { icon: "🖥", label_ua: "Digital-агентства", label_en: "Digital agencies" },
  { icon: "💻", label_ua: "IT-аутсорс", label_en: "IT outsource" },
  { icon: "📈", label_ua: "Маркетингові агентства", label_en: "Marketing agencies" },
  { icon: "☁️", label_ua: "SaaS-компанії", label_en: "SaaS companies" },
  { icon: "🤝", label_ua: "Консалтинг", label_en: "Consulting firms" },
  { icon: "✅", label_ua: "Customer Success команди", label_en: "Customer Success teams" },
];

export default function ForWho({ tr }: Props) {
  const fw = tr.forwho;
  const isUa = /[а-яА-ЯіІїЇєЄ]/.test(fw.quote);

  return (
    <section className="py-20 px-4 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{fw.title}</h2>
          <p className="text-slate-400 text-lg">{fw.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Roles */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">{fw.roles_label}</p>
            <div className="space-y-3">
              {ROLES.map((r) => (
                <div key={r.role_ua} className="card p-4 flex items-start gap-4 hover:border-white/20 transition-colors">
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <div className="text-white font-medium text-sm">{r.role_ua}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{isUa ? r.desc_ua : r.desc_en}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company types */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">{fw.companies_label}</p>
            <div className="grid grid-cols-2 gap-3">
              {COMPANY_TYPES.map((c) => (
                <div key={c.label_ua} className="card p-4 flex items-center gap-3 hover:border-white/20 transition-colors">
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-slate-300 text-sm">{isUa ? c.label_ua : c.label_en}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 card p-5 border-brand-500/20 bg-brand-500/5">
              <p className="text-slate-300 text-sm leading-relaxed italic">{fw.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
