import { Bot, Workflow, Database, Pill, UtensilsCrossed, Cog } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Card variants — mirroring Entropic's "What's in the box?" section
// Some cards are wide (col-span-2), some tall, with different visual treatments
const cards = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    desc: "Document analyzers, customer support bots, procurement assistants — agents that handle the repetitive work 24/7.",
    color: "#0066FF",
    bg: "card",          // standard dark card
    span: "col-span-2",  // wide featured card
    accent: true,
  },
  {
    icon: Database,
    title: "ODOO ERP",
    desc: "Set up and customize your ERP — inventory, sales, accounting, procurement — as an ODOO partner.",
    color: "#059669",
    bg: "card-dark",
    span: "col-span-1",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Map processes, find bottlenecks, build automations with n8n, Make, and custom APIs that save hundreds of hours monthly.",
    color: "#7C3AED",
    bg: "card",
    span: "col-span-1",
  },
  {
    icon: Cog,
    title: "Industrial Automation",
    desc: "SCADA, PLCs, MCC panels and instrumentation — designed, commissioned, and integrated by engineers with hands-on factory floor experience.",
    color: "#0891B2",
    bg: "card",
    span: "col-span-1",
  },
  {
    icon: Pill,
    title: "Pharma & Supply Chain AI",
    desc: "Demand forecasting, procurement optimization, and compliance tracking built specifically for pharmaceutical companies.",
    color: "#DC2626",
    bg: "card-dark",
    span: "col-span-2", // wide
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage Automation",
    desc: "Production planning, quality control workflows, and inventory management powered by AI for food manufacturers.",
    color: "#D97706",
    bg: "card",
    span: "col-span-1",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="section-spacing">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        {/* Section header */}
        <AnimateOnScroll>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-[#71717A] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              What&apos;s in the box?
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight max-w-lg">
                Everything you need to automate your operations
              </h2>
              <p className="text-[#71717A] text-sm max-w-xs sm:text-right leading-relaxed">
                Six capabilities. One partner. Measurable ROI on every project.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Asymmetric grid — like Entropic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {cards.map((card, i) => (
            <AnimateOnScroll
              key={card.title}
              delay={i * 60}
              className={`
                ${card.span === "col-span-2" ? "sm:col-span-2" : ""}
              `}
            >
              <div
                className={`
                  ${card.bg} group relative overflow-hidden h-full p-7
                  flex flex-col justify-between cursor-default
                `}
              >
                {/* Background accent for "accent" cards */}
                {card.accent && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 20% 50%, ${card.color}08 0%, transparent 60%)`,
                    }}
                  />
                )}

                {/* Top: icon */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${card.color}18`, color: card.color }}
                >
                  <card.icon size={21} />
                </div>

                {/* Bottom: text */}
                <div>
                  <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#71717A] leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Hover accent line at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.color}60, transparent)` }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
