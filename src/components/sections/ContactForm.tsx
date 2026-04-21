"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const hearAboutOptions = [
  "Google Search",
  "LinkedIn",
  "Word of mouth / Referral",
  "Industry event",
  "Social media",
  "Other",
];

const services = [
  "AI Agents",
  "Workflow Automation",
  "ODOO ERP",
  "Pharma / Supply Chain AI",
  "Food & Beverage Automation",
  "Industrial Automation",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
      {/* Left: Contact info */}
      <AnimateOnScroll className="lg:col-span-2">
        <div className="space-y-5">
          {/* Info cards */}
          {[
            {
              icon: Mail,
              label: "Email us",
              value: "Mohamed.fathi@industechs.com",
              href: "mailto:Mohamed.fathi@industechs.com",
            },
            {
              icon: Phone,
              label: "Call or WhatsApp",
              value: "+20 122 617 4266",
              href: "tel:+201226174266",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Cairo, Egypt",
              href: null,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-[#71717A] mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-white">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/201226174266?text=Hello!%20I%27d%20like%20to%20book%20a%20consultation%20with%20Industechs."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-[14px] border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all duration-200 w-full"
          >
            <MessageCircle size={20} className="text-[#25D366] flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Prefer WhatsApp?</p>
              <p className="text-xs text-[#71717A]">Message us directly</p>
            </div>
          </a>

          {/* Map placeholder */}
          <div className="rounded-[14px] border border-white/[0.08] overflow-hidden h-48 flex items-center justify-center" style={{ backgroundColor: "var(--bg-surface)" }}>
            <div className="text-center">
              <MapPin size={24} className="text-[#3F3F46] mx-auto mb-2" />
              <p className="text-sm text-[#52525B]">Cairo, Egypt</p>
              <p className="text-xs text-[#3F3F46] mt-1">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Right: Form */}
      <AnimateOnScroll delay={150} className="lg:col-span-3">
        {submitted ? (
          <div className="card p-10 h-full flex flex-col items-center justify-center text-center gap-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                We&apos;ll review your message and get back to you within{" "}
                <span className="text-white font-semibold">24 hours</span>. Check your
                email for a confirmation.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline px-6 py-2.5 text-sm"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ahmed Hassan"
                  className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-accent/60 transition-colors" style={{ backgroundColor: "var(--bg-alt)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="ahmed@company.com"
                  className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-accent/60 transition-colors" style={{ backgroundColor: "var(--bg-alt)" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+20 122 617 4266"
                  className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-accent/60 transition-colors" style={{ backgroundColor: "var(--bg-alt)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-accent/60 transition-colors" style={{ backgroundColor: "var(--bg-alt)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                Service interested in
              </label>
              <select className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-accent/60 transition-colors appearance-none" style={{ backgroundColor: "var(--bg-alt)" }}>
                <option value="" style={{ backgroundColor: "var(--bg-surface)" }}>Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s} style={{ backgroundColor: "var(--bg-surface)" }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                How did you hear about us?
              </label>
              <select className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-accent/60 transition-colors appearance-none" style={{ backgroundColor: "var(--bg-alt)" }}>
                <option value="" style={{ backgroundColor: "var(--bg-surface)" }}>Select...</option>
                {hearAboutOptions.map((o) => (
                  <option key={o} value={o} style={{ backgroundColor: "var(--bg-surface)" }}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                Tell us about your challenge <span className="text-accent">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe the main operational challenge you're facing or what you'd like to automate..."
                className="w-full px-4 py-3 border border-white/[0.08] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-accent/60 transition-colors resize-none" style={{ backgroundColor: "var(--bg-alt)" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </button>

            <p className="text-xs text-[#52525B] text-center">
              We typically respond within 24 hours. No spam — ever.
            </p>
          </form>
        )}
      </AnimateOnScroll>
    </div>
  );
}
