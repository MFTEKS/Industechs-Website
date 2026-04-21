import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import BlogNewsletterForm from "@/components/ui/BlogNewsletterForm";

export const metadata: Metadata = {
  title: "Blog — AI & Automation Insights for Egyptian Enterprises",
  description:
    "Coming soon: Practical AI, automation, and ERP insights for Egyptian and MENA enterprises from the Industechs team.",
};

const categories = ["AI", "Automation", "ERP", "Pharma", "Food & Beverage", "Industry News"];

const comingSoonPosts = [
  {
    category: "AI",
    title: "How Egyptian pharma companies can use AI agents to cut procurement costs by 30%",
    teaser: "A practical breakdown of demand forecasting, supplier negotiation assistance, and automated purchase order generation for the Egyptian pharmaceutical sector.",
    color: "#0066FF",
  },
  {
    category: "ERP",
    title: "ODOO vs. SAP vs. Oracle: The honest comparison for mid-market Egyptian companies",
    teaser: "We've implemented all three. Here's the real truth about which ERP is right for different company sizes, industries, and budgets in Egypt.",
    color: "#059669",
  },
  {
    category: "Automation",
    title: "5 workflows every food manufacturer should automate in 2025",
    teaser: "From quality control documentation to distributor order processing — the five highest-ROI automation opportunities for Egyptian F&B manufacturers.",
    color: "#7C3AED",
  },
  {
    category: "AI",
    title: "Building an AI agent that reads Arabic invoices: a technical deep-dive",
    teaser: "How we built a document intelligence agent that processes Arabic and English invoices with 98% accuracy — using Claude AI and custom post-processing.",
    color: "#DC2626",
  },
  {
    category: "Industry News",
    title: "Egypt's National AI Strategy: What enterprises need to know for 2025",
    teaser: "Breaking down Egypt's government AI initiatives, available incentives, and what they mean for businesses considering AI investment this year.",
    color: "#D97706",
  },
  {
    category: "Automation",
    title: "n8n vs. Make vs. custom code: Which automation platform is right for your business?",
    teaser: "A practical guide to choosing the right automation platform based on your technical team, budget, and complexity requirements.",
    color: "#0891B2",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-xs font-medium text-[#A1A1AA] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block animate-pulse" />
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight mb-5">
                Practical AI insights for Egyptian enterprises
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed mb-8">
                No hype, no generic content. Just real-world case studies, technical guides,
                and actionable insights from our work in the field.
              </p>

              {/* Newsletter signup */}
              <BlogNewsletterForm />
            </div>
          </AnimateOnScroll>

          {/* Categories */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#71717A]"
                >
                  <Tag size={11} />
                  {cat}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Coming Soon Posts grid */}
      <section className="pb-24">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <p className="text-xs font-medium text-[#52525B] uppercase tracking-widest text-center mb-8">
              Articles in the pipeline
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {comingSoonPosts.map((post, i) => (
              <AnimateOnScroll key={post.title} delay={i * 80}>
                <div className="card group p-6 flex flex-col h-full relative overflow-hidden">
                  {/* Coming soon overlay */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] bg-amber/10 text-amber border border-amber/20 px-2 py-0.5 rounded-full font-medium">
                      Coming Soon
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mb-4"
                    style={{ color: post.color }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: post.color }}
                    />
                    {post.category}
                  </span>

                  <h3 className="text-base font-bold text-white leading-snug mb-3 flex-1 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#71717A] leading-relaxed">
                    {post.teaser}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={300}>
            <div className="mt-12 text-center">
              <p className="text-[#71717A] text-sm mb-4">
                Want to be notified when we publish? Subscribe above or follow us on LinkedIn.
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://linkedin.com/company/industechs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"
                >
                  Follow on LinkedIn
                  <ArrowRight size={14} />
                </a>
                <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
