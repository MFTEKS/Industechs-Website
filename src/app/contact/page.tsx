import type { Metadata } from "next";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Industechs — Book a Free Consultation",
  description:
    "Book a free 30-minute operations audit with Industechs. We'll show you exactly where AI and automation can save your business time and money.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-xs font-medium text-[#A1A1AA] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Free consultation
              </div>
              <h1 className="text-4xl md:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight mb-5">
                Let&apos;s talk about your operations
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                Book a free 30-minute audit. We&apos;ll review your workflows, identify quick wins,
                and give you a clear roadmap — no sales pitch, just honest advice.
              </p>
            </div>
          </AnimateOnScroll>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
