import { Star } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const items = [
  {
    name: "Ahmed Hassan",
    title: "Head of Operations",
    company: "MedSupply Egypt",
    quote: "We're building toward this transformation. Join us as an early partner and let's write this success story together.",
    initials: "AH",
    color: "#0066FF",
  },
  {
    name: "Sara El-Khatib",
    title: "Supply Chain Director",
    company: "FoodTech MENA",
    quote: "Be among our first success stories. Early partners receive priority pricing and direct access to our founding team.",
    initials: "SK",
    color: "#7C3AED",
  },
  {
    name: "Omar Farouk",
    title: "CEO",
    company: "PharmaLink",
    quote: "The future of Egyptian enterprise is AI-powered. We're looking for forward-thinking partners ready to lead the change.",
    initials: "OF",
    color: "#059669",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <AnimateOnScroll>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-[#71717A] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              Early access open
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Be among our first wins
            </h2>
            <p className="text-[#71717A] text-base mt-3 max-w-md mx-auto">
              We&apos;re onboarding our first clients with a founding discount and dedicated senior attention.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 90}>
              <div className="rounded-3xl border border-white/[0.07] p-7 flex flex-col gap-5 h-full group hover:border-white/[0.12] transition-all duration-200" style={{ backgroundColor: "var(--bg-surface)" }}>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-[#D4D4D8] text-sm leading-relaxed italic flex-1">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: `${item.color}25`, color: item.color }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-[#52525B]">{item.title}, {item.company}</div>
                  </div>
                  <span className="ml-auto text-[10px] bg-amber/10 text-amber border border-amber/15 px-2 py-0.5 rounded-full font-medium">
                    Placeholder
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={250}>
          <div className="mt-5 p-5 rounded-3xl border border-accent/15 bg-accent/[0.04] text-center">
            <p className="text-sm text-[#71717A]">
              <span className="text-accent font-semibold">Early partners get priority pricing.</span>{" "}
              First 10 clients receive a{" "}
              <span className="text-white font-semibold">20% founding discount</span> and dedicated senior team attention.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
