import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="mb-6">
        <span className="text-7xl font-black gradient-text-blue">404</span>
      </div>
      <h1 className="text-3xl font-black text-white mb-3">Page not found</h1>
      <p className="text-[#71717A] text-base mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary px-6 py-3 text-sm flex items-center gap-2">
          <Home size={15} />
          Back to Home
        </Link>
        <Link href="/contact" className="btn-outline px-6 py-3 text-sm flex items-center gap-2">
          Contact Us
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
