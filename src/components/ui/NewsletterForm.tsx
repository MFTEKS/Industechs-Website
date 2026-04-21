"use client";

export default function NewsletterForm({
  className,
}: {
  className?: string;
}) {
  return (
    <form
      className={className ?? "flex w-full md:w-auto gap-2"}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@company.com"
        className="flex-1 md:w-64 px-4 py-2.5 border border-white/[0.08] rounded-lg text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-accent transition-colors" style={{ backgroundColor: "var(--bg-surface)" }}
      />
      <button type="submit" className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap">
        Subscribe
      </button>
    </form>
  );
}
