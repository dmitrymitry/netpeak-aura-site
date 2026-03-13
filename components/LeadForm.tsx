"use client";
import { useState, useRef } from "react";

interface Props { tr: any }

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // anti-spam hidden field
}

const EMPTY: FormState = { name: "", company: "", email: "", phone: "", message: "", honeypot: "" };

export default function LeadForm({ tr }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = tr.form.required;
    if (!form.company.trim()) errs.company = tr.form.required;
    if (!form.email.trim()) errs.email = tr.form.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = tr.form.invalid_email;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  const field = (key: keyof FormState, type = "text", multiline = false) => {
    const label = tr.form[key] as string;
    const value = form[key];
    const error = errors[key];
    const Tag = multiline ? "textarea" : "input";

    return (
      <div>
        <label className="block text-sm text-slate-400 mb-1.5">{label}</label>
        <Tag
          type={type}
          value={value}
          onChange={(e) => {
            setForm((p) => ({ ...p, [key]: e.target.value }));
            if (error) setErrors((p) => ({ ...p, [key]: "" }));
          }}
          rows={multiline ? 3 : undefined}
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm outline-none focus:border-brand-500 transition-colors resize-none ${
            error ? "border-red-500/50" : "border-white/10"
          }`}
        />
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
    );
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">✅</div>
        <p className="text-white font-semibold text-lg">{tr.form.success}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        value={form.honeypot}
        onChange={(e) => setForm((p) => ({ ...p, honeypot: e.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-4">
        {field("name")}
        {field("company")}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {field("email", "email")}
        {field("phone", "tel")}
      </div>
      {field("message", "text", true)}

      {status === "error" && (
        <p className="text-red-400 text-sm">{tr.form.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-medium rounded-xl transition-colors text-sm"
      >
        {status === "loading" ? tr.form.submitting : tr.form.submit}
      </button>

      {/* Trust signals */}
      {tr.form.trust && (
        <div className="space-y-1.5 pt-1">
          {(tr.form.trust as string[]).map((line: string, i: number) => (
            <p key={i} className="text-slate-500 text-xs text-center">{line}</p>
          ))}
        </div>
      )}
    </form>
  );
}
