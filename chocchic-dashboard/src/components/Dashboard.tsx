"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X, ArrowLeft, ArrowRight } from "lucide-react";
import { research } from "@/data/findings";
import Executive from "./sections/Executive";
import Website from "./sections/Website";
import ProductIntel from "./sections/ProductIntel";
import Lifecycle from "./sections/Lifecycle";
import CallypsoOpps from "./sections/CallypsoOpps";
import Journeys from "./sections/Journeys";
import Recommendations from "./sections/Recommendations";
import Segmentation from "./sections/Segmentation";
import Versus from "./sections/Versus";
import Roadmap from "./sections/Roadmap";
import Questions from "./sections/Questions";
import Sources from "./sections/Sources";

const sections = [
  { id: "summary", no: "01", label: "Executive Summary", C: Executive },
  { id: "website", no: "02", label: "Website & Ads Analysis", C: Website },
  { id: "products", no: "03", label: "Product Intelligence", C: ProductIntel },
  { id: "lifecycle", no: "04", label: "Customer Lifecycle", C: Lifecycle },
  { id: "callypso", no: "05", label: "Callypso Engage Opportunities", C: CallypsoOpps },
  { id: "journeys", no: "06", label: "Automation Journeys", C: Journeys },
  { id: "recommendations", no: "07", label: "Product Recommendations", C: Recommendations },
  { id: "segmentation", no: "08", label: "Segmentation & Campaigns", C: Segmentation },
  { id: "versus", no: "09", label: "Callypso vs Other AI", C: Versus },
  { id: "roadmap", no: "10", label: "Prioritization & Roadmap", C: Roadmap },
  { id: "questions", no: "11", label: "Meeting Questions", C: Questions },
  { id: "sources", no: "12", label: "Data Sources", C: Sources },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function Dashboard() {
  const [active, setActive] = useState<SectionId>("summary");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const read = () => {
      const h = window.location.hash.replace("#", "") as SectionId;
      if (sections.some((s) => s.id === h)) setActive(h);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const go = (id: SectionId) => {
    setActive(id);
    setMenuOpen(false);
    history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const idx = sections.findIndex((s) => s.id === active);
  const current = sections[idx];
  const Section = current.C;
  const prev = sections[idx - 1];
  const next = sections[idx + 1];

  const nav = (
    <nav aria-label="Bölümler" className="space-y-0.5">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => go(s.id)}
          aria-current={active === s.id ? "page" : undefined}
          className={clsx(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition",
            active === s.id ? "bg-white/10 font-semibold text-white" : "text-cocoa-200 hover:bg-white/5 hover:text-white",
          )}
        >
          <span className={clsx("w-5 font-mono text-[11px] tabular-nums", active === s.id ? "text-gold-400" : "text-cocoa-400")}>{s.no}</span>
          {s.label}
        </button>
      ))}
    </nav>
  );

  const brand = (
    <div>
      <p className="font-serif text-xl text-white">ChocChic</p>
      <p className="text-[11px] uppercase tracking-[0.16em] text-cocoa-300">Growth & Automation</p>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col bg-cocoa-900 px-4 py-6 lg:flex">
        <div className="px-3">{brand}</div>
        <div className="mt-8 flex-1 overflow-y-auto">{nav}</div>
        <div className="mt-6 border-t border-white/10 px-3 pt-4 text-[11px] leading-relaxed text-cocoa-300">
          <p>Callypso Engage müşteri toplantısı için hazırlanmıştır</p>
          <p>Araştırma tarihi: {research.researchedAt}</p>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-cocoa-900 px-4 py-3 lg:hidden">
        {brand}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Menüyü aç/kapat"
          className="rounded-lg p-2 text-white hover:bg-white/10"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[60px] z-20 overflow-y-auto bg-cocoa-900 px-4 pb-8 pt-2 lg:hidden">{nav}</div>
      )}

      <main className="lg:ml-72">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
          <Section />

          <div className="no-print mt-14 flex items-center justify-between gap-3 border-t border-[var(--line)] pt-6">
            {prev ? (
              <button type="button" onClick={() => go(prev.id)} className="group flex items-center gap-2 text-left text-sm text-ink-2 hover:text-ink">
                <ArrowLeft size={16} className="transition group-hover:-translate-x-0.5" />
                <span>
                  <span className="block text-[11px] text-ink-3">{prev.no}</span>
                  {prev.label}
                </span>
              </button>
            ) : (
              <span />
            )}
            {next && (
              <button type="button" onClick={() => go(next.id)} className="group flex items-center gap-2 text-right text-sm text-ink-2 hover:text-ink">
                <span>
                  <span className="block text-[11px] text-ink-3">{next.no}</span>
                  {next.label}
                </span>
                <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
