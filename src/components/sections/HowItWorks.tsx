import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We audit your operations and pinpoint where AI saves you the most time and money. Free, no commitment — just clarity.",
    color: "#0066FF",
  },
  {
    number: "02",
    title: "Solution Design",
    desc: "We architect the right combination of AI agents, automation, and ERP modules — with a clear scope, timeline, and ROI projection.",
    color: "#7C3AED",
  },
  {
    number: "03",
    title: "Build & Scale",
    desc: "We implement, train your team, and optimize continuously. You see results in weeks, not months.",
    color: "#059669",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-spacing">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-[#71717A] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              The process
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              From zero to production in weeks
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[26px] left-[calc(16.67%+26px)] right-[calc(16.67%+26px)] h-px">
            <div className="h-full w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 110}>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-black text-sm mb-6 border-2 z-10 flex-shrink-0"
                    style={{
                      background: `${step.color}12`,
                      borderColor: `${step.color}35`,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{step.title}</h3>
                  <p className="text-sm text-[#71717A] leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Timeline note */}
        <AnimateOnScroll delay={300}>
          <div className="mt-14 p-6 rounded-3xl border border-white/[0.07] text-center" style={{ backgroundColor: "var(--bg-surface)" }}>
            <p className="text-sm text-[#71717A]">
              Average time from first call to production:{" "}
              <span className="text-white font-bold">2–8 weeks.</span>
              {" "}Most projects start showing ROI within the{" "}
              <span className="text-accent font-semibold">first month.</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
