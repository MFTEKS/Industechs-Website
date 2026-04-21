import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Industechs terms of service.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Terms of Service</h1>
      <p className="text-[#71717A] text-sm mb-12">Last updated: January 2025</p>
      <div className="space-y-8 text-[#A1A1AA] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Industechs website and services, you agree to be bound by these
            Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
          <p>
            Industechs provides AI solutions, workflow automation, and ODOO ERP implementation
            services. The specific terms of each engagement are governed by individual project
            agreements.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
          <p>
            Custom solutions built for clients are owned by the client upon full payment. Industechs
            retains rights to general methodologies, frameworks, and non-client-specific tooling.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Contact</h2>
          <p>
            For terms-related questions:{" "}
            <a href="mailto:legal@industechs.com" className="text-accent hover:underline">
              legal@industechs.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
