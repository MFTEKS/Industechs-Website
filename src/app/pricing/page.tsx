import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import PricingTabs from "@/components/sections/PricingTabs";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans for AI, Automation & ODOO ERP",
  description:
    "Transparent pricing for AI agents, workflow automation, and ODOO ERP implementation in Egypt. Starting from EGP 25,000. No hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <SectionHeader
              badge="Transparent pricing"
              title="Simple, honest pricing"
              subtitle="No hidden fees. No confusing tiers. Just clear prices for the outcomes you need — whether you're starting small or going all in."
            />
          </AnimateOnScroll>

          {/* Trust bar */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              {[
                "✓ No hidden fees",
                "✓ Milestone-based payments",
                "✓ Free discovery call",
                "✓ Founding partner discount",
              ].map((item) => (
                <span key={item} className="text-sm text-[#71717A]">
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing tabs */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <PricingTabs />
        </div>
      </section>

      <CTABanner
        title="Not sure which plan is right for you?"
        subtitle="Book a free 30-minute call. We'll review your operations and recommend exactly what you need — no upselling, just honest advice."
        buttonText="Get a Free Recommendation"
        badge="No commitment required"
      />
    </>
  );
}
