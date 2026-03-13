import LeadForm from "./LeadForm";

interface Props { tr: any }

export default function CTA({ tr }: Props) {
  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.cta.title}</h2>
            <p className="text-slate-400 text-lg mb-8">{tr.cta.subtitle}</p>

            {/* Social proof */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 text-sm flex-shrink-0">🏢</span>
                <div>
                  <div className="text-white text-sm font-medium">Digital-агентства</div>
                  <div className="text-slate-400 text-xs">SEO, PPC, SMM, Веб-розробка</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 text-sm flex-shrink-0">💻</span>
                <div>
                  <div className="text-white text-sm font-medium">IT-аутсорс та SaaS</div>
                  <div className="text-slate-400 text-xs">Розробка, підтримка, customer success</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 text-sm flex-shrink-0">📊</span>
                <div>
                  <div className="text-white text-sm font-medium">Консалтинг та агентства</div>
                  <div className="text-slate-400 text-xs">Маркетинг, стратегія, операції</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card p-8">
            <h3 className="text-lg font-semibold text-white mb-6">{tr.form.title}</h3>
            <LeadForm tr={tr} />
          </div>
        </div>
      </div>
    </section>
  );
}
