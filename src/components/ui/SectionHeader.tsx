import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "", "mb-16", className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] text-xs font-medium text-[#A1A1AA] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-white leading-[1.15] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-[#A1A1AA] text-lg leading-relaxed",
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
