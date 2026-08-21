import React from 'react';
import Link from 'next/link';
import { Shield, Award, CheckCircle2, Flame, HeartHandshake, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '@/data/clubData';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "About CUSAT Boxing Club | Boxing Academy in Ernakulam",
  description: "Discover the history, certified coaching staff, mission, and athletic heritage of CUSAT Boxing Club at CUSAT Sports Complex in Kalamassery, Ernakulam, Kerala.",
  canonical: "/about",
});

export default function AboutPage() {
  const jsonLdSchemas = getJsonLdSchemas("/about");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      <main className="min-h-screen pt-32 pb-24 bg-[#0A0A0A] text-white">
        
        {/* Header Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>OPEN COMMUNITY & ATHLETIC ACADEMY</span>
          </div>

          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl mx-auto">
            FORGED IN <span className="gold-gradient-text">SWEET SCIENCE.</span>
            <br />
            BUILT FOR <span className="text-[#C89B3C]">CHAMPIONS.</span>
          </h1>

          <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            The CUSAT Boxing Club is an inclusive athletic academy open to school children (ages 8+), university students, working professionals, and the general public. We foster elite technique, character building, safety, and physical fitness inside and outside the ring.
          </p>
        </section>

        {/* Mission & Vision Cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel-gold space-y-4">
              <div className="p-3 w-fit rounded-xl bg-[#C89B3C] text-black">
                <Flame className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl text-white tracking-wide">OUR MISSION</h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                To provide school children, youth cadets, university athletes, and community members with a professional boxing environment that instills iron discipline, physical resilience, tactical intelligence, and self-confidence.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl glass-panel-gold space-y-4">
              <div className="p-3 w-fit rounded-xl bg-[#C89B3C] text-black">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl text-white tracking-wide">OUR VISION</h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                To become South India&apos;s leading collegiate combat sports powerhouse, producing national medalists, certified sports leaders, and healthy lifelong combat athletes.
              </p>
            </div>
          </div>
        </section>

        {/* The 4 Training Pillars */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-5xl text-white tracking-tight">
              THE 4 PILLARS OF <span className="gold-gradient-text">CUSAT BOXING</span>
            </h2>
            <p className="text-neutral-400 text-base">
              Our training methodology combines Russian style footwork, Cuban counter-punching dynamics, and modern sports science.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Footwork & Guard", desc: "Mastering distance, weight transfer, balance, and defensive spatial awareness." },
              { num: "02", title: "Tactical Combinations", desc: "Setting traps, counter-punching off angles, and rhythm disruption." },
              { num: "03", title: "Combat Conditioning", desc: "High-intensity VO2 max intervals, explosive plyometrics, and core stabilization." },
              { num: "04", title: "Mental Fortitude", desc: "Conquering ring anxiety, remaining calm under intense pressure, and tactical focus." }
            ].map((pillar) => (
              <div key={pillar.num} className="p-6 rounded-2xl glass-panel gold-glow-hover space-y-3">
                <span className="font-heading text-4xl text-[#C89B3C] font-bold">{pillar.num}</span>
                <h3 className="font-heading text-2xl text-white tracking-wide">{pillar.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Tour Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase">
                <span>HIGH PERFORMANCE ARENA</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
                STATE-OF-THE-ART <span className="gold-gradient-text">BOXING FACILITY</span>
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                Located within the CUSAT Sports Complex in South Kalamassery, our training hall is equipped with standard competition rings, heavy leather bags, speed bags, conditioning turf, and athlete recovery amenities.
              </p>
              
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                  <span>20ft x 20ft Competition Ring with Shock-Absorbent Padding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                  <span>14 Heavy Leather Bags & Double-End Reflex Bags</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                  <span>Strength & Plyometric Conditioning Zone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                  <span>Video Analysis Suite & Tactical Briefing Room</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-md bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl tracking-wider font-bold shadow-lg"
                >
                  <span>BOOK A FACILITY TOUR</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-96">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop"
                alt="CUSAT Boxing Gym Arena"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading text-5xl text-white tracking-tight">
              FREQUENTLY ASKED <span className="gold-gradient-text">QUESTIONS</span>
            </h2>
            <p className="text-neutral-400 text-sm">Everything you need to know about joining CUSAT Boxing Club.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-xl glass-panel border border-white/10 open:border-[#C89B3C]/50 transition-all"
              >
                <summary className="font-heading text-xl sm:text-2xl text-white tracking-wide cursor-pointer list-none flex items-center justify-between group-hover:text-[#C89B3C]">
                  <span>{faq.question}</span>
                  <span className="text-[#C89B3C] font-bold group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-neutral-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
