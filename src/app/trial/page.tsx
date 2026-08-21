import React from 'react';
import CallNowSection from '@/components/home/CallNowSection';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';
import { Shield } from 'lucide-react';

export const metadata = constructMetadata({
  title: "Book a Free Boxing Trial Class in Ernakulam | CUSAT Boxing",
  description: "Book your free introductory boxing trial session at CUSAT Boxing Club in South Kalamassery, Kochi. Open to beginners, school kids, and adults across Ernakulam.",
  canonical: "/trial",
});

export default function TrialPage() {
  const jsonLdSchemas = getJsonLdSchemas("/trial");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <main className="min-h-screen pt-32 pb-24 bg-[#070707] text-white">
        {/* Semantic Page Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>FREE INTRODUCTORY SESSION • ERNAKULAM & KOCHI</span>
          </div>

          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
            BOOK A FREE <span className="gold-gradient-text">BOXING TRIAL CLASS IN ERNAKULAM</span>
          </h1>

          <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience Olympic-style boxing training at CUSAT Sports Complex in South Kalamassery. 100% open to school children, youth cadets, university athletes, working professionals, and beginners across Ernakulam.
          </p>
        </section>

        <CallNowSection />
      </main>
    </>
  );
}
