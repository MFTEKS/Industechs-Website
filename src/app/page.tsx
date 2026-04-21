import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import WhyIndustechs from "@/components/sections/WhyIndustechs";
import ComparisonTable from "@/components/sections/ComparisonTable";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import HomeFAQ from "@/components/sections/HomeFAQ";

export const metadata: Metadata = {
  title: "Industechs — Your operations, finally connected.",
  description:
    "Egypt's technology partner for industrial operations — ERP, AI, and automation built on engineering foundations. Serving Egypt & MENA.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <WhyIndustechs />
      <ComparisonTable />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <HomeFAQ />
    </>
  );
}
