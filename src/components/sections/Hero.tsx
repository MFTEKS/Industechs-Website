"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Bot } from "lucide-react";

const techLogos = [
  { name: "Claude AI" },
  { name: "OpenAI" },
  { name: "ODOO" },
  { name: "n8n" },
  { name: "Make" },
  { name: "Python" },
  { name: "LangChain" },
  { name: "React" },
];

const allLogos = [...techLogos, ...techLogos];

// Fake "agent running" terminal lines for the right-side mockup
const agentLines = [
  { type: "system", text: "Industechs Agent v2.1 — connected" },
  { type: "step",   text: "→ Reading purchase orders (128 docs)" },
  { type: "ok",     text: "✓ Extracted vendor & amounts" },
  { type: "step",   text: "→ Matching against ERP inventory" },
  { type: "ok",     text: "✓ 112 matched · 16 flagged" },
  { type: "step",   text: "→ Generating PO report for approval" },
  { type: "ok",     text: "✓ Draft sent to procurement@company.eg" },
  { type: "done",   text: "Completed in 14 seconds. Saved ~3 hrs." },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden grain-overlay">

      {/* ── Background blobs ───────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary blue blob — top left */}
        <div
          className="blob-float absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #0066FF 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Secondary blob — top right */}
        <div
          className="blob-float-slow absolute -top-24 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* ── Main hero ──────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 pt-28 pb-20 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-sm font-medium text-[#A1A1AA] mb-8"
              style={{ animation: "fade-in 0.5s ease forwards" }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-accent font-semibold uppercase tracking-widest text-xs">Egypt&apos;s Technology Partner</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-black leading-[1.08] tracking-[-0.035em] text-white mb-6"
              style={{ animation: "fade-up 0.55s 0.1s ease forwards", opacity: 0 }}
            >
              Your operations,{" "}
              <span className="gradient-text-blue">finally connected.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg text-[#A1A1AA] leading-relaxed mb-10 max-w-lg"
              style={{ animation: "fade-up 0.55s 0.2s ease forwards", opacity: 0 }}
            >
              Built by engineers who commissioned the machines, wired the panels,
              and now build the digital layer on top.{" "}
              <span className="text-white">Odoo ERP. AI Agents. Industrial Automation.</span>{" "}
              All under one roof.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 mb-12"
              style={{ animation: "fade-up 0.55s 0.3s ease forwards", opacity: 0 }}
            >
              <Link
                href="/contact"
                className="btn-primary px-6 py-3.5 text-[15px] gap-2"
              >
                Book a Call
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/solutions"
                className="btn-outline px-6 py-3.5 text-[15px] gap-2"
              >
                See Our Solutions
              </Link>
            </div>

            {/* Trust stats */}
            <div
              className="flex flex-wrap gap-6"
              style={{ animation: "fade-up 0.55s 0.4s ease forwards", opacity: 0 }}
            >
              {[
                { value: "< 6 wks", label: "Avg. delivery" },
                { value: "80 %+",   label: "Time saved" },
                { value: "3-in-1",  label: "AI · Auto · ERP" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl font-black text-white">{value}</div>
                  <div className="text-xs text-[#71717A] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mockup window */}
          <div
            className="hidden lg:block"
            style={{ animation: "fade-up 0.7s 0.25s ease forwards", opacity: 0 }}
          >
            <AgentMockup />
          </div>
        </div>
      </div>

      {/* ── Tech logo marquee ───────────────────────────────────────── */}
      <div
        className="relative z-10 w-full border-t border-white/[0.06] py-6"
        style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", backdropFilter: "blur(12px)" }}
      >
        <p className="text-center text-[10px] font-semibold text-[#3F3F46] uppercase tracking-[0.18em] mb-5">
          Powered by
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 mx-10 whitespace-nowrap"
              >
                <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#52525B]">
                    {logo.name[0]}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#52525B] hover:text-[#A1A1AA] transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Agent terminal mockup ──────────────────────────────────────────── */
function AgentMockup() {
  return (
    <div className="relative">
      {/* Glow behind the card */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
        style={{ background: "radial-gradient(ellipse, #0066FF 0%, transparent 70%)" }}
      />

      {/* Main card */}
      <div className="relative rounded-3xl border border-white/[0.08] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]" style={{ backgroundColor: "var(--bg-alt)" }}>

        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]" style={{ backgroundColor: "var(--bg-surface)" }}>
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs font-mono text-[#52525B]">Industechs Agent — Procurement AI</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-[10px] text-emerald-400 font-medium">Running</span>
          </div>
        </div>

        {/* Terminal lines */}
        <div className="p-5 font-mono text-xs space-y-2.5 min-h-[280px]">
          {agentLines.map((line, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className={
                line.type === "system" ? "text-[#52525B]" :
                line.type === "step"   ? "text-[#71717A]" :
                line.type === "ok"     ? "text-emerald-400" :
                "text-accent font-semibold"
              }>
                {line.text}
              </span>
              {i === agentLines.length - 1 && (
                <span className="blink text-accent">▋</span>
              )}
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 border-t border-white/[0.06]">
          {[
            { label: "Docs processed", value: "128" },
            { label: "Matched",        value: "112" },
            { label: "Hours saved",    value: "3.2" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="px-4 py-3.5 text-center border-r border-white/[0.06] last:border-0"
            >
              <div className="text-base font-black text-white">{value}</div>
              <div className="text-[10px] text-[#52525B] mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -top-4 -right-4 flex items-center gap-2 border border-white/[0.08] rounded-full px-3.5 py-2 shadow-lg" style={{ backgroundColor: "var(--bg-surface)" }}>
        <Bot size={13} className="text-accent" />
        <span className="text-xs font-semibold text-white">AI Agent Active</span>
      </div>
      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 border border-emerald-500/20 rounded-full px-3.5 py-2 shadow-lg" style={{ backgroundColor: "var(--bg-surface)" }}>
        <CheckCircle2 size={13} className="text-emerald-400" />
        <span className="text-xs font-semibold text-emerald-400">Task Complete</span>
      </div>
    </div>
  );
}
