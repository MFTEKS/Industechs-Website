import { Factory, TrendingUp, Handshake } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const items = [
  {
    icon: Factory,
    title: "Industrial DNA",
    desc: "We come from factory floors and control rooms — we understand SCADA, PLCs, and production lines. That's why our AI actually works in industrial settings.",
    color: "#0066FF",
    stat: "10+",
    statLabel: "Years on factory floors",
  },
  {
    icon: TrendingUp,
    title: "ROI-First",
    desc: "Every solution is measured by hours saved, costs reduced, and revenue gained. We don't sell technology — we sell results with clear metrics attached.",
    color: "#059669",
    stat: "80%+",
    statLabel: "Avg. time saved per workflow",
  },
  {
    icon: Handshake,
    title: "End-to-End Partner",
    desc: "From discovery workshop to production deployment and ongoing optimization. One partner, zero handoff headaches.",
    color: "#7C3AED",
    stat: "1",
    statLabel: "Partner, full accountability",
  },
];

export default function WhyIndustechs() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <AnimateOnScroll>
          <div className="mb-14 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-[#71717A] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Why choose us
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Built for industry, not just technology
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 90}>
              <div className="relative p-8 rounded-3xl border border-white/[0.07] group hover:border-white/[0.12] transition-all duration-300 overflow-hidden h-full flex flex-col" style={{ backgroundColor: "var(--bg-surface)" }}>
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${item.color}10 0%, transparent 60%)` }}
                />

                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: `${item.color}16`, color: item.color }}
                >
                  <item.icon size={21} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[#71717A] leading-relaxed flex-1 mb-6">{item.desc}</p>

                {/* Stat */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="text-2xl font-black" style={{ color: item.color }}>{item.stat}</div>
                  <div className="text-xs text-[#52525B] mt-1">{item.statLabel}</div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
