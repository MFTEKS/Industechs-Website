import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import NewsletterForm from "@/components/ui/NewsletterForm";

const footerLinks = {
  company: [
    { label: "About",   href: "/about"   },
    { label: "Blog",    href: "/blog"    },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Odoo ERP",               href: "/solutions#odoo"                   },
    { label: "AI Agents & Automation", href: "/solutions#ai-agents"              },
    { label: "Industrial Automation",  href: "/solutions#industrial-automation"  },
    { label: "Digital Transformation", href: "/solutions#automation"             },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/industechs", label: "LinkedIn" },
  { icon: Youtube,  href: "https://youtube.com/@industechs",         label: "YouTube"  },
  { icon: Facebook, href: "https://facebook.com/industechs",         label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05]" style={{ backgroundColor: "var(--bg)" }}>

      {/* Newsletter row */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-container mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="text-base font-bold text-white mb-1">Stay ahead of the curve</p>
              <p className="text-sm text-[#52525B]">AI insights for Egyptian enterprises. No spam.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Industechs"
                width={120}
                height={104}
                className="h-24 w-auto object-contain logo-themed"
              />
            </Link>
            <p className="text-xs text-accent font-medium mb-1">
              Egypt&apos;s technology partner for industrial operations
            </p>
            <p className="text-xs text-[#52525B] leading-relaxed mb-5">
              Odoo ERP · AI Agents · Industrial Automation · Digital Transformation
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-xl border border-white/[0.07] flex items-center justify-center text-[#52525B] hover:text-white hover:border-white/[0.15] transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-white mb-4">Company</p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-[#52525B] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-white mb-4">Services</p>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-[#52525B] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:Mohamed.fathi@industechs.com" className="flex items-center gap-2 text-xs text-[#52525B] hover:text-white transition-colors">
                  <Mail size={12} className="flex-shrink-0" /> Mohamed.fathi@industechs.com
                </a>
              </li>
              <li>
                <a href="tel:+201226174266" className="flex items-center gap-2 text-xs text-[#52525B] hover:text-white transition-colors">
                  <Phone size={12} className="flex-shrink-0" /> +20 122 617 4266
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-xs text-[#52525B]">
                  <MapPin size={12} className="flex-shrink-0 mt-0.5" /> Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#52525B] italic mb-1 sm:mb-0">Built by engineers. Driven by data.</p>
          <p className="text-xs text-[#3F3F46]">© {year} Industechs. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-[#3F3F46] hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms"   className="text-xs text-[#3F3F46] hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
