"use client";

import { Rss } from "lucide-react";

export default function BlogNewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@company.com"
        className="flex-1 px-4 py-3 border border-white/[0.10] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-accent/60 transition-colors" style={{ backgroundColor: "var(--bg-surface)" }}
      />
      <button
        type="submit"
        className="btn-primary px-5 py-3 text-sm whitespace-nowrap flex items-center gap-2"
      >
        <Rss size={14} />
        Notify me
      </button>
    </form>
  );
}
