import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Award, Layers, MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Industechs — Egypt's Technology Partner for Industrial Operations",
  description:
    "Industechs is a multi-disciplinary engineering and technology company headquartered in Cairo. Built by engineers who commissioned SCADA systems and wired MCC panels — we now build the digital layer on top.",
};

const values = [
  {
    icon: Cpu,
    title: "Floor-level credibility",
    desc: "SCADA, PLCs, MCC panels — commissioned, not just consulted on. We have stood on the factory floor and we know what actually works.",
    color: "#0066FF",
  },
  {
    icon: Award,
    title: "Odoo Official Partner",
    desc: "Direct agreement with Odoo. ERP built around your process, not the other way around.",
    color: "#059669",
  },
  {
    icon: Layers,
    title: "Very few do what we do",
    desc: "One of the only partners in Egypt combining industrial automation, ERP, and AI under one roof.",
    color: "#7C3AED",
  },
  {
    icon: MapPin,
    title: "Egypt-first accountability",
    desc: "Cairo-based, always available. No foreign integrators, no time-zone excuses, no project abandonment.",
    color: "#0891B2",
  },
];

const team = [
  {
    name: "Founding Team",
    title: "Engineers & AI Architects",
    bio: "Built from engineers who worked directly in pharmaceutical manufacturing and industrial automation — we understand the problems because we lived them.",
    initials: "FT",
    color: "#0066FF",
  },
  {
    name: "Join Our Team",
    title: "We're Hiring",
    bio: "We're looking for AI engineers, ODOO consultants, and business development professionals who are passionate about transforming Egyptian industry.",
    initials: "+",
    color: "#059669",
    isHiring: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-xs font-medium text-[#A1A1AA] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Our story
              </div>
              <h1 className="text-4xl md:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight mb-6">
                Egypt&apos;s technology partner for industrial operations.
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                Industechs is a multi-disciplinary engineering and technology company
                headquartered in Cairo, Egypt. Built by engineers who have commissioned
                SCADA systems, wired MCC panels, and programmed PLCs — we now build
                the digital layer on top of your operations.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-[#0D0D0F]">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
                  Who We Are
                </h2>
                <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                  <p>
                    We are not an IT company that learned about factories. We are engineers
                    who built the technology layer — and we are here to stay.
                  </p>
                  <p>
                    Our team has spent years on factory floors, in control rooms, and inside
                    ERP implementations — watching the same disconnected systems slow down
                    otherwise sophisticated Egyptian enterprises.
                  </p>
                  <p>
                    So we built the partner we wish had existed:{" "}
                    <span className="text-white font-semibold">
                      one firm that covers industrial automation, ERP, and AI under one roof,
                      with engineers who understand every layer.
                    </span>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2024",         label: "Founded"           },
                  { value: "Cairo",        label: "Headquarters"      },
                  { value: "Egypt & MENA", label: "Primary market"    },
                  { value: "4 pillars",    label: "ERP · AI · Automation · Industrial" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="card p-5 text-center"
                  >
                    <div className="text-2xl font-black text-white mb-1">{value}</div>
                    <div className="text-xs text-[#71717A]">{label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionHeader
              badge="Why Industechs"
              title="What makes us different"
              subtitle="There are plenty of IT firms and plenty of automation companies. We are one of the very few that are genuinely both."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 100}>
                <div className="card p-7 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${v.color}18`, color: v.color }}
                  >
                    <v.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-[#0D0D0F]">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionHeader
              badge="Our team"
              title="The people behind the work"
              subtitle="A lean, senior team of engineers and AI experts — with zero juniors on client projects."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 100}>
                <div className="card p-7 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                      style={{ background: `${member.color}20`, color: member.color }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <div className="text-base font-bold text-white">{member.name}</div>
                      <div className="text-sm text-[#71717A]">{member.title}</div>
                    </div>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed flex-1">{member.bio}</p>
                  {member.isHiring && (
                    <Link
                      href="/contact"
                      className="btn-outline py-2.5 text-sm text-center flex items-center justify-center gap-2"
                    >
                      View Open Roles <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partner badges */}
      <section className="section-spacing">
        <div className="max-w-container mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <p className="text-xs font-medium text-[#52525B] uppercase tracking-widest mb-8">
              Technology Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["ODOO Partner", "Claude AI", "OpenAI", "n8n", "Make", "Vercel"].map((partner) => (
                <div
                  key={partner}
                  className="px-6 py-3 rounded-[10px] border border-white/[0.08] bg-[#111113] text-sm font-semibold text-[#71717A]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Closing tagline */}
      <section className="section-spacing bg-[#0D0D0F]">
        <div className="max-w-container mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Built by engineers.{" "}
              <span className="gradient-text-blue">Driven by data.</span>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner
        title="Let's build Egypt's operations future together."
        subtitle="Whether you're a potential client, partner, or team member — we want to hear from you."
        buttonText="Get in Touch"
      />
    </>
  );
}
