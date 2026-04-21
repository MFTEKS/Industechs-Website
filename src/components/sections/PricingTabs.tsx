"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// ─── Types ───────────────────────────────────────────────────────────────────
type TabId = "ai" | "odoo" | "retainer";
type CellValue = boolean | string;

// ─── Data ────────────────────────────────────────────────────────────────────
const tabs: { id: TabId; label: string }[] = [
  { id: "odoo", label: "ODOO ERP" },
  { id: "ai", label: "AI & Automation" },
  { id: "retainer", label: "Retainer & Support" },
];

const aiTiers = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Quick Wins",
    price: "From EGP 25,000",
    unit: "/project",
    bestFor: "Companies wanting to test AI on a single workflow",
    features: [
      "1 workflow automation",
      "1 AI agent (e.g. document processor)",
      "Basic API integration",
      "Email & WhatsApp notification setup",
      "2 weeks delivery",
      "Email support for 2 weeks",
    ],
    cta: "Start Small, Win Fast",
    ctaVariant: "outline" as const,
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Scale Smart",
    price: "From EGP 75,000",
    unit: "/project",
    bestFor: "Companies ready to automate multiple processes",
    popular: true,
    features: [
      "Up to 5 workflow automations",
      "3 custom AI agents",
      "Advanced API integrations",
      "Real-time operations dashboard",
      "4–6 weeks delivery",
      "1 month dedicated support",
      "Team training session",
    ],
    cta: "Let's Talk",
    ctaVariant: "primary" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Full Transformation",
    price: "Custom Pricing",
    unit: "",
    bestFor: "Large organizations needing end-to-end digital transformation",
    features: [
      "Unlimited workflow automations",
      "Custom AI agents (any scope)",
      "Full system integration suite",
      "Dedicated implementation team",
      "Custom delivery timeline",
      "Ongoing support & optimization",
      "Quarterly strategy reviews",
    ],
    cta: "Request a Proposal",
    ctaVariant: "outline" as const,
  },
];

const aiTableRows: { feature: string; values: Record<string, CellValue> }[] = [
  { feature: "Number of automations", values: { starter: "1", growth: "Up to 5", enterprise: "Unlimited" } },
  { feature: "AI agents included", values: { starter: "1", growth: "3", enterprise: "Custom" } },
  { feature: "API integrations", values: { starter: "Basic", growth: "Advanced", enterprise: "Full system" } },
  { feature: "Operations dashboard", values: { starter: false, growth: true, enterprise: true } },
  { feature: "Delivery time", values: { starter: "2 weeks", growth: "4–6 weeks", enterprise: "Custom" } },
  { feature: "Support included", values: { starter: "Email 2wks", growth: "1 month", enterprise: "Ongoing" } },
  { feature: "Team training", values: { starter: false, growth: true, enterprise: true } },
  { feature: "Dedicated team", values: { starter: false, growth: false, enterprise: true } },
  { feature: "Strategy reviews", values: { starter: false, growth: false, enterprise: "Quarterly" } },
];

const odooTiers = [
  {
    id: "essentials",
    name: "Essentials",
    tagline: "Get Started",
    price: "From EGP 50,000",
    unit: "",
    bestFor: "Small businesses starting with ERP",
    features: [
      "Up to 3 ODOO modules",
      "Up to 10 users",
      "Standard setup & configuration",
      "Data migration (basic)",
      "2-day team training",
      "1 month email support",
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Recommended",
    price: "From EGP 150,000",
    unit: "",
    bestFor: "Growing businesses needing full customization",
    popular: true,
    features: [
      "Up to 8 ODOO modules",
      "Up to 50 users",
      "Full customization & Arabic localization",
      "Advanced workflow configuration",
      "System integrations (e.g., bank, WMS)",
      "Complete data migration",
      "3 months dedicated support",
    ],
    cta: "Book a Discovery Call",
    ctaVariant: "primary" as const,
  },
  {
    id: "enterprise-odoo",
    name: "Enterprise",
    tagline: "Full Scale",
    price: "Custom",
    unit: "",
    bestFor: "Large enterprises with complex requirements",
    features: [
      "Unlimited ODOO modules",
      "Unlimited users",
      "Multi-company configuration",
      "Advanced BI & reporting",
      "Dedicated ODOO consultant",
      "Custom module development",
      "Ongoing managed services",
    ],
    cta: "Request a Proposal",
    ctaVariant: "outline" as const,
  },
];

const odooTableRows: { feature: string; values: Record<string, CellValue> }[] = [
  { feature: "ODOO modules", values: { essentials: "Up to 3", professional: "Up to 8", "enterprise-odoo": "Unlimited" } },
  { feature: "Users included", values: { essentials: "Up to 10", professional: "Up to 50", "enterprise-odoo": "Unlimited" } },
  { feature: "Arabic localization", values: { essentials: true, professional: true, "enterprise-odoo": true } },
  { feature: "Custom development", values: { essentials: false, professional: "Limited", "enterprise-odoo": true } },
  { feature: "Data migration", values: { essentials: "Basic", professional: "Full", "enterprise-odoo": "Advanced" } },
  { feature: "Training", values: { essentials: "2 days", professional: "Full team", "enterprise-odoo": "Comprehensive" } },
  { feature: "Post-launch support", values: { essentials: "1 month", professional: "3 months", "enterprise-odoo": "Ongoing" } },
  { feature: "Multi-company", values: { essentials: false, professional: false, "enterprise-odoo": true } },
  { feature: "BI & advanced reports", values: { essentials: false, professional: "Standard", "enterprise-odoo": true } },
];

const pricingFaqs = [
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. We design all our solutions to be modular and scalable. You can start with Starter and expand to Growth as your needs grow — we'll scope the additional work and provide a seamless transition.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. For larger projects, we typically structure payments in milestones: 30% upfront, 40% at mid-project review, and 30% at go-live. We can discuss alternatives based on your cash flow needs.",
  },
  {
    question: "What happens after the support period ends?",
    answer:
      "You can continue with a monthly retainer for ongoing support and optimization, or just call us when you need changes. Most of our clients choose the retainer to keep their systems performing optimally.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "No minimum for project-based work — each project is scoped independently. For retainers, we prefer a 3-month minimum so we have time to deliver meaningful value.",
  },
  {
    question: "Do you work with companies outside Egypt?",
    answer:
      "Yes. Our primary focus is Egypt and MENA, but we work with companies globally if they need Arabic language support, Egyptian market expertise, or our specific technical capabilities.",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function PricingCard({
  tier,
}: {
  tier: (typeof aiTiers)[0];
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[14px] border p-7 transition-all duration-200",
        tier.popular
          ? "bg-[#0A1628] border-accent/40 shadow-accent-glow"
          : "bg-[#111113] border-white/[0.08] hover:border-white/[0.15]"
      )}
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="flex items-center gap-1.5 bg-accent px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap shadow-btn-glow">
            <Star size={10} fill="white" />
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-bold text-white">{tier.name}</h3>
          <span className="text-xs text-[#71717A] bg-white/[0.05] px-2 py-0.5 rounded-full">
            {tier.tagline}
          </span>
        </div>
        <p className="text-xs text-[#71717A] mb-4">{tier.bestFor}</p>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-black text-white">{tier.price}</span>
          {tier.unit && <span className="text-sm text-[#71717A] mb-1">{tier.unit}</span>}
        </div>
      </div>

      <ul className="space-y-2.5 flex-1 mb-7">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
            <Check
              size={14}
              className="flex-shrink-0 mt-0.5"
              style={{ color: tier.popular ? "#0066FF" : "#059669" }}
            />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={cn(
          "text-sm py-3 px-5 rounded-lg font-semibold text-center flex items-center justify-center gap-2 transition-all duration-200",
          tier.ctaVariant === "primary"
            ? "btn-primary"
            : "btn-outline"
        )}
      >
        {tier.cta}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function ComparisonTableSection({
  rows,
  tiers,
  highlightId,
}: {
  rows: { feature: string; values: Record<string, CellValue> }[];
  tiers: { id: string; name: string }[];
  highlightId: string;
}) {
  function Cell({ value, highlight }: { value: CellValue; highlight: boolean }) {
    if (value === true) {
      return (
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full"
          style={{ background: highlight ? "rgba(0,102,255,0.15)" : "rgba(5,150,105,0.1)" }}
        >
          <Check size={11} strokeWidth={2.5} style={{ color: highlight ? "#0066FF" : "#10B981" }} />
        </span>
      );
    }
    if (value === false) return <Minus size={14} className="text-[#3F3F46] mx-auto" />;
    return (
      <span className={cn("text-xs", highlight ? "text-white font-semibold" : "text-[#A1A1AA]")}>
        {value}
      </span>
    );
  }

  return (
    <div className="mt-10 overflow-x-auto rounded-[14px] border border-white/[0.08]">
      <table className="w-full min-w-[520px]">
        <thead>
          <tr className="border-b border-white/[0.08]">
            <th className="text-left px-5 py-3.5 text-xs font-medium text-[#71717A] w-[40%]">
              Feature
            </th>
            {tiers.map((t) => (
              <th key={t.id} className="px-4 py-3.5 text-center text-xs font-semibold">
                {t.id === highlightId ? (
                  <span className="text-accent">★ {t.name}</span>
                ) : (
                  <span className="text-[#71717A]">{t.name}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={cn(
                "border-b border-white/[0.05] last:border-0",
                i % 2 !== 0 ? "bg-white/[0.015]" : ""
              )}
            >
              <td className="px-5 py-3.5 text-xs text-[#D4D4D8]">{row.feature}</td>
              {tiers.map((t) => (
                <td
                  key={t.id}
                  className={cn("px-4 py-3.5 text-center", t.id === highlightId ? "bg-accent/[0.04]" : "")}
                >
                  <div className="flex justify-center">
                    <Cell value={row.values[t.id]} highlight={t.id === highlightId} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("odoo");

  return (
    <div>
      {/* Tab switcher */}
      <AnimateOnScroll>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border",
                activeTab === tab.id
                  ? "bg-accent text-white border-accent shadow-btn-glow"
                  : "bg-transparent text-[#A1A1AA] border-white/[0.15] hover:text-white hover:border-white/[0.3]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </AnimateOnScroll>

      {/* AI & Automation tab */}
      {activeTab === "ai" && (
        <div>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {aiTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <ComparisonTableSection
              rows={aiTableRows}
              tiers={aiTiers.map((t) => ({ id: t.id, name: t.name }))}
              highlightId="growth"
            />
          </AnimateOnScroll>
        </div>
      )}

      {/* ODOO tab */}
      {activeTab === "odoo" && (
        <div>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {odooTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <ComparisonTableSection
              rows={odooTableRows}
              tiers={odooTiers.map((t) => ({ id: t.id, name: t.name }))}
              highlightId="professional"
            />
          </AnimateOnScroll>
        </div>
      )}

      {/* Retainer tab */}
      {activeTab === "retainer" && (
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Monthly retainer */}
            <div className="card p-8 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Monthly Retainer</h3>
              <p className="text-sm text-[#71717A] mb-5">Flexible ongoing support</p>
              <div className="text-3xl font-black text-white mb-1">
                EGP 15,000–30,000
              </div>
              <div className="text-sm text-[#71717A] mb-6">/month</div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "20–40 hours of AI/automation work monthly",
                  "Priority response (< 4 hours)",
                  "Monthly optimization report",
                  "Bug fixes and improvements",
                  "Access to new integrations",
                  "Monthly strategy check-in call",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
                    <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline py-3 text-sm text-center flex items-center justify-center gap-2">
                Get Started <ArrowRight size={14} />
              </Link>
            </div>

            {/* Annual */}
            <div className="relative rounded-[14px] border border-accent/40 bg-[#0A1628] p-8 flex flex-col shadow-accent-glow">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-accent px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap">
                  Save 20%
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Annual Partnership</h3>
              <p className="text-sm text-[#71717A] mb-5">Committed growth partnership</p>
              <div className="text-3xl font-black text-white mb-1">Custom Pricing</div>
              <div className="text-sm text-accent mb-6">Save 20% vs. monthly</div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  "Dedicated resource allocation",
                  "Quarterly strategy reviews",
                  "Priority feature development",
                  "SLA-backed response times",
                  "Annual roadmap planning",
                  "Executive business reviews",
                  "Training for new team members",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
                    <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary py-3 text-sm text-center flex items-center justify-center gap-2">
                Talk to Sales <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      )}

      {/* FAQ */}
      <div className="mt-20">
        <AnimateOnScroll>
          <h3 className="text-2xl font-black text-white text-center mb-10">
            Pricing questions, answered
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <FAQAccordion items={pricingFaqs} className="max-w-3xl mx-auto" />
        </AnimateOnScroll>
      </div>
    </div>
  );
}
