"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-6 sm:right-auto sm:max-w-sm z-50 border border-white/[0.10] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] p-5 animate-fade-up" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <p className="text-sm font-semibold text-white">We use cookies</p>
        <button
          onClick={decline}
          className="text-[#71717A] hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
      <p className="text-xs text-[#71717A] leading-relaxed mb-4">
        We use cookies to improve your experience and analyze site usage.{" "}
        <Link href="/privacy" className="text-accent underline hover:no-underline">
          Learn more
        </Link>
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="btn-primary px-4 py-2 text-xs flex-1"
        >
          Accept All
        </button>
        <button
          onClick={decline}
          className="btn-outline px-4 py-2 text-xs flex-1"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
