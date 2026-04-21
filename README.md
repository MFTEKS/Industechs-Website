# Industechs Website

Production-ready marketing website for **Industechs** — Egypt's technology partner for industrial operations — ERP, AI, and automation built on engineering foundations.

**Live domain:** industechs.com
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Vercel

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Type-check + lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, global providers)
│   ├── page.tsx                # Home page (/)
│   ├── about/page.tsx          # About page (/about)
│   ├── blog/page.tsx           # Blog placeholder (/blog)
│   ├── contact/page.tsx        # Contact page (/contact)
│   ├── pricing/page.tsx        # Pricing page (/pricing)
│   ├── solutions/page.tsx      # Solutions page (/solutions)
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   ├── not-found.tsx           # 404 page
│   └── globals.css             # Global styles + Tailwind
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with mobile menu + theme toggle
│   │   └── Footer.tsx          # Footer with newsletter, links, social
│   │
│   ├── sections/               # Page-specific sections
│   │   ├── Hero.tsx            # Home hero with marquee
│   │   ├── WhatWeBuild.tsx     # 6-card feature grid
│   │   ├── WhyIndustechs.tsx   # 3 differentiator cards
│   │   ├── ComparisonTable.tsx # Competitor comparison table
│   │   ├── HowItWorks.tsx      # 3-step process
│   │   ├── Testimonials.tsx    # Placeholder testimonial cards
│   │   ├── CTABanner.tsx       # Reusable CTA banner section
│   │   ├── HomeFAQ.tsx         # Home page FAQ accordion
│   │   ├── PricingTabs.tsx     # Tabbed pricing with comparison table
│   │   └── ContactForm.tsx     # Contact form with success state
│   │
│   ├── ui/                     # Reusable UI primitives
│   │   ├── FAQAccordion.tsx    # Expandable FAQ component
│   │   ├── AnimateOnScroll.tsx # Intersection Observer fade-up
│   │   ├── SectionHeader.tsx   # Consistent section headings
│   │   ├── NewsletterForm.tsx  # Footer newsletter form (client)
│   │   └── BlogNewsletterForm.tsx # Blog newsletter form (client)
│   │
│   └── shared/
│       ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│       ├── ScrollToTop.tsx     # Scroll-to-top button
│       └── CookieConsent.tsx   # GDPR cookie banner
│
└── lib/
    └── utils.ts                # cn() utility (clsx + tailwind-merge)
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, service cards, comparison table, how it works, testimonials, FAQ |
| `/solutions` | 4 solutions: Odoo ERP (Pillar 1), Workflow Automation (Pillar 2), AI Agents (Pillar 3), Industrial Automation (Pillar 4) |
| `/pricing` | Tabbed pricing — opens on ODOO ERP, then AI & Automation, then Retainer |
| `/about` | Company story, mission, values, team placeholders, partner logos |
| `/contact` | Contact form with WhatsApp, phone, location |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

> **Navbar links:** Solutions · Pricing · About · Contact (Book a Call). Blog and AR language toggle have been removed.

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#09090B` | Page background |
| Surface | `#111113` | Cards, panels |
| Accent | `#0066FF` | CTAs, highlights, links |
| Amber | `#FF8C00` | Badges, warnings (sparingly) |
| Text Primary | `#FFFFFF` | Headings |
| Text Secondary | `#A1A1AA` | Body text |
| Text Muted | `#71717A` | Labels, captions |

### Key CSS Classes (globals.css)
- `.card` — Dark card with border, hover lift effect
- `.btn-primary` — Blue CTA button with glow on hover
- `.btn-outline` — Ghost/outline button
- `.section-spacing` — 120px vertical padding (80px mobile)
- `.hero-glow` — Radial blue glow for hero backgrounds
- `.grain-overlay` — Subtle noise texture overlay (hero only)
- `.gradient-text-blue` — Blue gradient text effect
- `.marquee-track` — Auto-scrolling logo marquee
- `.logo-themed` — Logo colour filter: `#0066FF` in light mode, white in dark mode

---

## Logo

The Industechs logo is stored at `public/logo.png` (transparent background, cropped from the original high-res source).

- **Navbar (top-left):** `h-24`, uses `.logo-themed` — blue (`#0066FF`) in light mode, white in dark mode
- **Footer (bottom-left):** `h-24`, same `.logo-themed` class for consistent appearance across both themes

The original logo files are kept at:
```
~/Documents/Industechs Logo Native/
├── png .png     # Source PNG (6400×4267, white background)
├── ai .ps       # Adobe Illustrator / PostScript source
└── pdf.pdf      # PDF vector version
```

To update the logo, replace `public/logo.png` with a new transparent-background PNG and keep the same filename.

---

## Customization

### Contact Info
Real contact details are already in place:
- **Email:** Mohamed.fathi@industechs.com
- **Phone / WhatsApp:** +20 122 617 4266
- **WhatsApp number in code:** `201226174266`

To update, search for `Mohamed.fathi@industechs.com` and `201226174266` across the codebase.

### Add Real Team Photos
Replace placeholder initials in `src/app/about/page.tsx` with `next/image` components.

### Enable Google Analytics
Add to `src/app/layout.tsx` after installing `@next/third-parties`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// <GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Add a Real Blog Post
Create `src/app/blog/[slug]/page.tsx` with MDX or CMS integration, then re-add `{ label: "Blog", href: "/blog" }` to the `navLinks` array in `Navbar.tsx`.

---

## Deployment on Vercel (Free Tier)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub Integration
1. Push to GitHub: `git init && git add . && git commit -m "Initial commit"`
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

### Custom Domain
1. In Vercel dashboard → Project Settings → Domains
2. Add `industechs.com` and `www.industechs.com`
3. Update your DNS registrar with Vercel's nameservers or CNAME records

### Environment Variables (for future features)
```bash
# Create .env.local for local dev (never commit this)
NEXT_PUBLIC_WHATSAPP_NUMBER=201226174266
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Add email service keys when integrating contact form backend
```

---

## SEO

Every page has:
- `<title>` and `<description>` via Next.js Metadata API
- OpenGraph tags (`og:title`, `og:description`, `og:image`)
- Twitter card meta tags
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- `aria-label` on interactive elements
- `lang="en"` on `<html>` (update to `"ar"` when Arabic is added)

**To generate the OG image:** Create a 1200×630 PNG and place at `public/og-image.png`.

---

## Performance Notes

- All pages are statically generated (SSG) — Lighthouse 90+ ready
- Fonts: Geist (local font, no external request)
- Animations: CSS-only where possible, Intersection Observer for scroll triggers
- No heavy particle effects or canvas elements
- `next/image` ready (use it when adding real photos)

---

## Roadmap / Next Steps

- [ ] Replace placeholder contact form with real backend (Resend / Formspree / Supabase)
- [ ] Add real team photos and bios
- [ ] Implement Arabic language toggle with `next-intl` and restore AR button in Navbar
- [ ] Create first blog posts with MDX and re-add Blog link to Navbar
- [ ] Add Google Analytics / Plausible
- [ ] Add Calendly embed for direct booking
- [ ] Add real OG image (1200×630 PNG)
- [ ] ODOO partner badge (official asset from ODOO)

---

## License

Private and proprietary. © 2025 Industechs. All rights reserved.
