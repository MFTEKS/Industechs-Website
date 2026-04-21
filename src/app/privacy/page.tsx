import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Industechs privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
      <p className="text-[#71717A] text-sm mb-12">Last updated: January 2025</p>
      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#A1A1AA] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
          <p>
            We collect information you provide when using our website or contacting us, including your name,
            email address, phone number, company name, and any details about your business needs.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, provide our services, send relevant
            updates about Industechs (only if you opt in), and improve our website experience.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Contact</h2>
          <p>
            For privacy-related questions, contact us at:{" "}
            <a href="mailto:privacy@industechs.com" className="text-accent hover:underline">
              privacy@industechs.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
