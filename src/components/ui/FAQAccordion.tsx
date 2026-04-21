"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "rounded-2xl border overflow-hidden transition-all duration-200",
            openIndex === i
              ? "border-white/[0.10]"
              : "border-white/[0.05] hover:border-white/[0.08]"
          )}
          style={{ backgroundColor: openIndex === i ? "var(--bg-surface)" : "var(--bg-alt)" }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className={cn("text-[15px] font-medium transition-colors", openIndex === i ? "text-white" : "text-[#C4C4C8] group-hover:text-white")}>
              {item.question}
            </span>
            <span className="flex-shrink-0 text-[#52525B] group-hover:text-[#A1A1AA] transition-colors">
              {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
            <p className="px-6 pb-5 text-sm text-[#71717A] leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
