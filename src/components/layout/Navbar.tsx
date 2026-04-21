"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing",   href: "/pricing"   },
  { label: "About",     href: "/about"     },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-2xl border-b"
            : "bg-transparent border-b border-transparent"
        )}
        style={scrolled ? {
          backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)",
          borderColor: "var(--border)",
        } : {}}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <Link href="/" className="flex items-center group mt-2" aria-label="Industechs home">
              <Image
                src="/logo.png"
                alt="Industechs"
                width={120}
                height={104}
                className="h-24 w-auto object-contain logo-themed"
                priority
              />
            </Link>

            {/* Desktop nav pill */}
            <nav
              className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
              style={{
                backgroundColor: "var(--bg-raised)",
                border: "1px solid var(--border)",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === link.href ? "font-semibold" : ""
                  )}
                  style={{
                    backgroundColor: pathname === link.href ? "var(--bg-alt)" : "transparent",
                    color: pathname === link.href ? "var(--text-1)" : "var(--text-3)",
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href)
                      (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href)
                      (e.currentTarget as HTMLElement).style.color = "var(--text-3)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: theme toggle + CTA */}
            <div className="hidden md:flex items-center gap-1">
              <ThemeToggle />
              <Link
                href="/contact"
                className="btn-primary px-4 py-2 text-[13px] font-semibold ml-1"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle />
              <button
                className="p-2 rounded-xl transition-all"
                style={{ color: "var(--text-3)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: "rgba(0,0,0,0.3)" }} onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            "absolute top-24 left-0 right-0 border-b p-5 transition-all duration-300",
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          )}
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <nav className="flex flex-col gap-1 mb-5">
            {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-2xl text-[15px] font-medium transition-all"
                style={{
                  backgroundColor: pathname === link.href ? "var(--bg-alt)" : "transparent",
                  color: pathname === link.href ? "var(--text-1)" : "var(--text-2)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t flex flex-col gap-2" style={{ borderColor: "var(--border)" }}>
            <Link href="/contact" className="btn-primary py-3.5 text-sm">
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
