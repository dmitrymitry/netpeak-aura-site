interface Props { tr: any }

export default function Footer({ tr }: Props) {
  return (
    <footer className="border-t border-white/10 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <span className="text-slate-400 text-sm">
            Netpeak <span className="text-brand-400">Aura</span>
          </span>
        </div>
        <p className="text-slate-500 text-sm">{tr.footer.copy}</p>
        <p className="text-slate-500 text-sm">{tr.footer.product}</p>
      </div>
    </footer>
  );
}
