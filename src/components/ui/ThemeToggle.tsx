"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {/* Sun — shown in dark mode */}
      <Sun
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
          color: "#A1A1AA",
        }}
      />
      {/* Moon — shown in light mode */}
      <Moon
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "-rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          color: "#52525B",
        }}
      />
    </button>
  );
}
