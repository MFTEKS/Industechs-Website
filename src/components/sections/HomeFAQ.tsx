import FAQAccordion from "@/components/ui/FAQAccordion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const faqs = [
  {
    question: "How quickly can I see results?",
    answer: "Most clients see measurable results within 2–6 weeks of project kickoff. Simple workflow automations can go live in as little as 10–14 days. We scope everything up-front so you know exactly what to expect before we start.",
  },
  {
    question: "Do I need technical staff to work with Industechs?",
    answer: "No. We handle everything end-to-end — from technical architecture to deployment and training. Your team needs zero AI or coding knowledge. We train your operators and managers to use the tools we build.",
  },
  {
    question: "What industries do you serve?",
    answer: "Our primary focus in Year 1 is pharmaceutical supply chains and food & beverage manufacturing in Egypt and MENA. However, we've worked across manufacturing, logistics, and services. If you're an enterprise looking to automate operations or implement ERP, we can likely help.",
  },
  {
    question: "How does pricing work?",
    answer: "Project-based work starts from EGP 25,000 for a single automation. ODOO ERP implementations start from EGP 50,000. We also offer monthly retainers for ongoing support. All pricing is transparent — see our Pricing page for full details.",
  },
  {
    question: "What's the difference between AI agents and workflow automation?",
    answer: "Workflow automation handles rule-based, repetitive tasks — 'if X happens, do Y'. AI agents are smarter: they can read documents, make decisions, write responses, and handle tasks that require understanding context. Most clients benefit from a combination of both.",
  },
  {
    question: "Do you offer a pilot or proof-of-concept?",
    answer: "Yes. We recommend starting with a focused pilot on a single workflow or process. This lets you see ROI quickly, reduces risk, and builds confidence before scaling. Our Starter package is designed exactly for this.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-[#71717A] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Questions we hear most
              </h2>
              <p className="text-[#71717A] text-sm mt-3">
                Still have questions?{" "}
                <a href="/contact" className="text-accent hover:underline">Just ask us.</a>
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <FAQAccordion items={faqs} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
