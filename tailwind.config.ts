import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:      "#09090B",
        surface:         "#111113",
        "surface-raised": "#18181B",
        accent:          "#0066FF",
        "accent-hover":  "#0052CC",
        amber:           "#FF8C00",
        "text-primary":  "#FFFFFF",
        "text-secondary":"#A1A1AA",
        "text-muted":    "#71717A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        "btn-glow":    "0 0 20px rgba(0,102,255,0.45), 0 0 40px rgba(0,102,255,0.15)",
        "accent-glow": "0 0 0 1px rgba(0,102,255,0.4), 0 0 30px rgba(0,102,255,0.15)",
        card:          "0 0 0 1px rgba(255,255,255,0.07), 0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
