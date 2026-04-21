import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  badge?: string;
}

export default function CTABanner({
  title = "Stop leaving money on the table.",
  subtitle = "Book your free 30-minute operations audit. We'll show you exactly where AI and automation can save you time and money.",
  buttonText = "Book a Free Consultation",
  buttonHref = "/contact",
  badge = "Free — no commitment required",
}: CTABannerProps) {
  return (
    <section className="section-spacing">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] p-12 md:p-20 text-center" style={{ backgroundColor: "var(--bg-alt)" }}>
            {/* Glow orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[700px] h-[350px] rounded-full blur-[120px] opacity-15"
                style={{ background: "#0066FF" }}
              />
            </div>
            {/* Top accent border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px" style={{ background: "linear-gradient(90deg, transparent, #0066FF, transparent)" }} />

            <div className="relative z-10">
              {badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-[#71717A] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {badge}
                </div>
              )}
              <h2 className="text-3xl md:text-[2.6rem] font-black text-white tracking-tight leading-tight mb-5 max-w-2xl mx-auto">
                {title}
              </h2>
              <p className="text-[#71717A] text-base leading-relaxed max-w-lg mx-auto mb-10">
                {subtitle}
              </p>
              <Link
                href={buttonHref}
                className="btn-primary px-8 py-4 text-[15px] inline-flex gap-2"
              >
                {buttonText}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
