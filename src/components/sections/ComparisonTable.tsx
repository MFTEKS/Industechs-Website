"use client";

import { Check, Minus } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const columns = [
  { id: "us",      label: "Industechs",            highlight: true  },
  { id: "generic", label: "Generic IT Firms",       highlight: false },
  { id: "foreign", label: "Foreign Integrators",    highlight: false },
  { id: "erp",     label: "Local ERP Resellers",    highlight: false },
];

type CellValue = boolean | string;

const rows: { feature: string; values: Record<string, CellValue> }[] = [
  { feature: "Engineers with factory floor experience", values: { us: true,        generic: false,        foreign: "Sometimes",   erp: false            } },
  { feature: "Odoo Official Partner",                   values: { us: true,        generic: "Varies",     foreign: false,         erp: "Varies"         } },
  { feature: "Industrial automation in-house (SCADA, PLCs)", values: { us: true,   generic: false,        foreign: "Outsourced",  erp: false            } },
  { feature: "Custom AI agents & workflow automation",  values: { us: true,        generic: "Templates",  foreign: "Limited",     erp: false            } },
  { feature: "Local Egyptian presence & support",       values: { us: "Cairo-based", generic: true,       foreign: "Remote only", erp: true             } },
  { feature: "Long-term partnership commitment",        values: { us: true,        generic: "Project-based", foreign: "Project exit", erp: "Project-based" } },
  { feature: "Speed of delivery",                       values: { us: "2–8 wks",   generic: "3–6 mo",    foreign: "6–18 mo",     erp: "3–6 mo"         } },
];

function Cell({ value, isUs }: { value: CellValue; isUs: boolean }) {
  if (value === true) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: isUs ? "rgba(0,102,255,0.15)" : "rgba(5,150,105,0.1)" }}>
      <Check size={12} strokeWidth={2.5} style={{ color: isUs ? "#0066FF" : "#10B981" }} />
    </span>
  );
  if (value === false) return <Minus size={15} className="text-[#3F3F46] mx-auto" />;
  return <span className={`text-xs ${isUs ? "text-white font-semibold" : "text-[#71717A]"}`}>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-[#71717A] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              How we compare
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Industechs vs. alternatives?
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={120}>
          <div className="rounded-3xl border border-white/[0.07] overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.07]" style={{ backgroundColor: "var(--bg-alt)" }}>
                  <th className="text-left px-7 py-5 text-xs font-medium text-[#52525B] w-[36%]">
                    Feature
                  </th>
                  {columns.map((col) => (
                    <th key={col.id} className="px-4 py-5 text-center text-xs font-semibold" style={{ background: col.highlight ? "rgba(0,102,255,0.06)" : undefined }}>
                      {col.highlight ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold">
                          {col.label}
                          <span className="text-[9px] bg-accent text-white px-1 py-0.5 rounded-full">★</span>
                        </span>
                      ) : (
                        <span className="text-[#52525B]">{col.label}</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/[0.04] last:border-0 transition-colors hover:bg-white/[0.01]"
                    style={{ background: i % 2 !== 0 ? "rgba(255,255,255,0.012)" : undefined }}
                  >
                    <td className="px-7 py-4 text-sm text-[#D4D4D8]">{row.feature}</td>
                    {columns.map((col) => (
                      <td
                        key={col.id}
                        className="px-4 py-4 text-center"
                        style={{ background: col.highlight ? "rgba(0,102,255,0.03)" : undefined }}
                      >
                        <div className="flex justify-center">
                          <Cell value={row.values[col.id]} isUs={col.highlight ?? false} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
