"use client";
import { useState } from "react";
import { t, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Risks from "@/components/Risks";
import Features from "@/components/Features";
import ForWho from "@/components/ForWho";
import NPS from "@/components/NPS";
import Case from "@/components/Case";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ua");
  const tr = t(locale);

  return (
    <main>
      <Navbar tr={tr} locale={locale} setLocale={setLocale} />
      <Hero tr={tr} />
      <Problem tr={tr} />
      <ForWho tr={tr} />
      <Solution tr={tr} />
      <Risks tr={tr} />
      <Features tr={tr} />
      <NPS tr={tr} />
      <Case tr={tr} />
      <Roadmap tr={tr} />
      <CTA tr={tr} />
      <Footer tr={tr} />
    </main>
  );
}
