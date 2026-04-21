import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Workflow,
  Database,
  Cog,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Solutions — Odoo ERP, AI Agents & Industrial Automation",
  description:
    "Explore Industechs' four service pillars: Odoo ERP, AI Agents & Automation, Industrial Automation, and Digital Transformation — built by engineers for industrial operations.",
};

const solutions = [
  {
    id: "odoo",
    icon: Database,
    color: "#059669",
    badge: "Pillar 1",
    title: "ODOO ERP Implementation",
    subtitle: "A properly implemented ERP that fits your business — not the other way around.",
    description:
      "As an ODOO partner, we implement, customize, and support the world's most flexible open-source ERP. We specialize in complex Egyptian business requirements including local tax compliance, Arabic language support, and multi-warehouse setups.",
    useCases: [
      {
        industry: "Operations",
        examples: [
          "Full supply chain from procurement to delivery — with batch tracking and expiry management",
          "Multi-warehouse inventory with FIFO costing and real-time stock visibility",
          "Automated purchasing workflows from reorder point to approved PO",
        ],
      },
      {
        industry: "Finance & Compliance",
        examples: [
          "Local EGP tax setup and e-invoicing compliance",
          "Budget vs. actuals reporting with department-level drill-down",
          "Audit trails and approval hierarchies for full governance",
        ],
      },
    ],
    deliverables: [
      "Business requirements analysis and gap assessment",
      "ODOO installation and server configuration",
      "Module customization and local EGP tax setup",
      "Data migration from your existing system",
      "End-user training (Arabic + English)",
      "3-month post-go-live support",
    ],
    outcomes: [
      "Single source of truth for all operations",
      "50–80% reduction in reporting time",
      "Full audit trail and compliance readiness",
      "Go-live in 6–12 weeks depending on scope",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    color: "#7C3AED",
    badge: "Pillar 2",
    title: "Workflow Automation",
    subtitle: "Map your processes, eliminate bottlenecks, and build automations that run while you sleep.",
    description:
      "We use n8n, Make (formerly Integromat), and custom APIs to connect your tools and automate the repetitive handoffs that drain your team's time. From simple triggers to complex multi-step workflows.",
    useCases: [
      {
        industry: "Operations",
        examples: [
          "Automated invoice processing from email to ERP in under 60 seconds",
          "Sales order → production planning → delivery notification pipeline",
          "HR onboarding workflow across multiple systems simultaneously",
        ],
      },
      {
        industry: "Finance & Procurement",
        examples: [
          "Automated three-way matching (PO, receipt, invoice)",
          "Budget alert notifications with approval workflows",
          "Vendor payment scheduling and bank reconciliation automation",
        ],
      },
    ],
    deliverables: [
      "Process audit report identifying automation opportunities",
      "Custom automation workflows built in n8n / Make",
      "API integrations with your existing tools",
      "Error handling and monitoring setup",
      "Team training and workflow documentation",
    ],
    outcomes: [
      "200–400 hours saved per month per workflow",
      "Zero manual errors on automated processes",
      "Real-time visibility into workflow status",
      "Typical ROI achieved within 2–3 months",
    ],
  },
  {
    id: "ai-agents",
    icon: Bot,
    color: "#0066FF",
    badge: "Pillar 3",
    title: "Custom AI Agents",
    subtitle: "Intelligent agents that handle complex tasks autonomously — 24/7, without errors.",
    description:
      "AI agents go beyond simple automation. They read, understand, and act on information just like a human would — but faster, cheaper, and without fatigue. We build agents tailored to your exact business processes.",
    useCases: [
      {
        industry: "Operations",
        examples: [
          "Procurement agent that reads supplier quotes, compares pricing, and generates purchase orders",
          "Document analyzer for contracts, invoices, and compliance documents",
          "Customer support agent for distributor queries and order tracking",
        ],
      },
      {
        industry: "Finance & Data",
        examples: [
          "Quality control agent that analyzes production reports and flags deviations",
          "Inventory monitoring agent that triggers reorder alerts automatically",
          "Supplier communication agent for order confirmations and delivery updates",
        ],
      },
    ],
    deliverables: [
      "Custom-trained AI agent deployed to your environment",
      "Integration with existing systems (ERP, email, WhatsApp, Slack)",
      "Admin dashboard for monitoring agent activity",
      "Full documentation and team training",
      "30-day post-launch optimization",
    ],
    outcomes: [
      "70–90% reduction in manual data entry",
      "24/7 availability without overtime costs",
      "99%+ accuracy on document processing tasks",
      "3–6 week implementation timeline",
    ],
  },
  {
    id: "industrial-automation",
    icon: Cog,
    color: "#0891B2",
    badge: "Pillar 4",
    title: "Industrial Automation",
    subtitle: "SCADA, PLCs, MCC panels and instrumentation — where Industechs started.",
    description:
      "From PLC programming and HMI design to MCC panel fabrication, VFD integration, and full SCADA system deployment, we bring decades of industrial automation experience to every project. This is where Industechs started — and it's what makes our digital transformation work actually stick.",
    useCases: [
      {
        industry: "Factory Floor",
        examples: [
          "PLC programming and HMI design for production lines — from single machine to full plant",
          "MCC panel fabrication and installation with full electrical documentation",
          "VFD integration for motor control and energy optimization",
        ],
      },
      {
        industry: "Process & Infrastructure",
        examples: [
          "Full SCADA system deployment with historian, alarming, and remote monitoring",
          "Instrumentation loop checks and commissioning for new greenfield plants",
          "Legacy system upgrades — replacing old PLCs and SCADA without production downtime",
        ],
      },
    ],
    deliverables: [
      "Detailed engineering design (P&ID, electrical schematics, panel layouts)",
      "PLC and HMI programming (Siemens, Allen-Bradley, Schneider)",
      "MCC panel fabrication, wiring, and FAT testing",
      "SCADA system installation, configuration, and historian setup",
      "Site commissioning, loop testing, and operator training",
      "As-built documentation and ongoing support",
    ],
    outcomes: [
      "Full plant visibility from a single SCADA screen",
      "Reduced unplanned downtime through real-time alarming",
      "Energy savings via optimized motor control",
      "Seamless integration with ERP and AI layers above",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-xs font-medium text-[#A1A1AA] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Four Pillars, One Partner
              </div>
              <h1 className="text-4xl md:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight mb-5">
                Every solution we build{" "}
                <span className="gradient-text-blue">starts on the factory floor</span>
              </h1>
              <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
                From industrial automation to Odoo ERP and AI agents — we cover the full stack
                of operations technology for Egyptian and MENA enterprises.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { label: "Odoo ERP", href: "#odoo" },
                  { label: "AI Agents", href: "#ai-agents" },
                  { label: "Automation", href: "#automation" },
                  { label: "Industrial Automation", href: "#industrial-automation" },
                ].map((tag) => (
                  <a
                    key={tag.label}
                    href={tag.href}
                    className="px-4 py-2 rounded-full border border-white/[0.10] bg-white/[0.03] text-sm text-[#A1A1AA] hover:text-white hover:border-white/[0.2] transition-all duration-200"
                  >
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solution sections */}
      {solutions.map((sol, index) => (
        <section
          key={sol.id}
          id={sol.id}
          className={`section-spacing ${index % 2 !== 0 ? "bg-[#0D0D0F]" : ""}`}
        >
          <div className="max-w-container mx-auto px-4 sm:px-6">
            <AnimateOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left: Header + use cases */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${sol.color}18`, color: sol.color }}
                    >
                      <sol.icon size={20} />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${sol.color}15`, color: sol.color }}
                    >
                      {sol.badge}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-3">
                    {sol.title}
                  </h2>
                  <p className="text-lg text-[#A1A1AA] mb-5">{sol.subtitle}</p>
                  <p className="text-sm text-[#71717A] leading-relaxed mb-8">{sol.description}</p>

                  {/* Use cases by industry */}
                  <div className="space-y-6">
                    {sol.useCases.map((uc) => (
                      <div key={uc.industry}>
                        <h4 className="text-xs font-semibold text-[#71717A] uppercase tracking-widest mb-3">
                          {uc.industry} use cases
                        </h4>
                        <ul className="space-y-2">
                          {uc.examples.map((ex) => (
                            <li key={ex} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ background: sol.color }}
                              />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Deliverables + Outcomes */}
                <div className="space-y-5">
                  <div className="card p-6">
                    <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded flex items-center justify-center text-xs"
                        style={{ background: `${sol.color}20`, color: sol.color }}
                      >
                        ✓
                      </span>
                      What you get
                    </h4>
                    <ul className="space-y-3">
                      {sol.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                          <CheckCircle2
                            size={15}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: sol.color }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-[14px] p-6 border"
                    style={{
                      background: `${sol.color}08`,
                      borderColor: `${sol.color}25`,
                    }}
                  >
                    <h4 className="text-sm font-semibold text-white mb-4">Expected outcomes</h4>
                    <ul className="space-y-3">
                      {sol.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-sm font-medium" style={{ color: sol.color }}>
                          <span className="text-lg leading-none">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
                  >
                    Get a {sol.title} Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      <CTABanner
        title="Ready to transform your operations?"
        subtitle="Book a free discovery call and we'll map out exactly which solutions deliver the most ROI for your business."
        buttonText="Book a Free Discovery Call"
      />
    </>
  );
}
