import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SealStamp } from "@/components/brand/SealStamp";
import { ShieldCheck, Clock, Layers, ArrowRight, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Heritage | GODFIRST SOLAR & ENERGY LTD",
  description:
    "Put God first, excellence will follow. From solar to data to design, we build foundations that last 100 years. Discover the vision of GODFIRST GROUP LTD.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              HERITAGE &amp; FOUNDATION
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight mt-2 leading-[1.1]">
              Put God first, excellence will follow.
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              From solar to data to design, we build foundations. We believe businesses must be built with the quiet power of Rolex, the principled integrity of Chick-fil-A, and the intelligent minimalism of Apple.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars: Vision, Mission, Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              BRAND CORE
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight leading-tight">
              Quiet power. Principled engineering.
            </h2>
            <p className="font-sans font-light text-base text-brand-black/80 leading-relaxed">
              GODFIRST SOLAR &amp; ENERGY LTD was founded on a simple, timeless truth: reliable energy is the bedrock upon which African commerce, healthcare, and human dignity flourish.
            </p>
            <p className="font-sans font-light text-sm text-brand-black/75 leading-relaxed">
              In an emerging market characterized by counterfeit equipment and slapdash installations, we differentiate ourselves through institutional rigor. We never exaggerate battery capacity, cut corners on earthing pits, or compromise on component authenticity.
            </p>

            <div className="pt-4 space-y-4">
              <div className="p-5 border border-brand-taupe/30 bg-brand-divine/25">
                <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                  OUR VISION
                </span>
                <p className="font-heading font-bold text-lg text-brand-black mt-1">
                  To be Africa&apos;s most trusted group powering energy, intelligence, and creativity.
                </p>
              </div>

              <div className="p-5 border border-brand-taupe/30 bg-brand-divine/25">
                <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                  OUR MISSION
                </span>
                <p className="font-heading font-bold text-lg text-brand-black mt-1">
                  Build businesses that last 100 years.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 sm:p-10 shadow-card">
              <div className="flex items-center justify-between pb-6 border-b border-brand-taupe/20 mb-8">
                <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
                  THREE BRAND PILLARS
                </span>
                <SealStamp size={64} className="shrink-0" />
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-brand-slate flex items-center justify-center shrink-0 text-brand-slate">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-black">Trusted</h3>
                    <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                      Absolute bankability. We stand behind every bill of engineering with clear warranties, COREN certifications, and contractual SLAs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-brand-slate flex items-center justify-center shrink-0 text-brand-slate">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-black">Timeless</h3>
                    <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                      Systems engineered for decades, not seasons. From corrosion-resistant marine mounts to 6,000-cycle LiFePO4 chemistry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-brand-slate flex items-center justify-center shrink-0 text-brand-slate">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-black">Foundation</h3>
                    <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                      The bedrock of every endeavor. From uninterrupted electricity to clean corporate governance, we lay solid roots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Parent: GODFIRST GROUP LTD and Sister Divisions */}
      <section className="py-20 bg-brand-black text-brand-offwhite border-t border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              PARENT HOLDING STRUCTURE
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-offwhite tracking-tight mt-1">
              GODFIRST GROUP LTD (EST. 2026)
            </h2>
            <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
              GODFIRST SOLAR &amp; ENERGY LTD operates under the parent company GODFIRST GROUP LTD. With the overarching mandate &ldquo;Foundation First&rdquo;, the Group is expanding purposefully into four core pillars of the 21st-century African economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Division 1: Solar */}
            <div className="border border-brand-slate bg-brand-slate/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-sans font-light uppercase tracking-ultra text-[9px] text-brand-offwhite">
                    DIVISION 01
                  </span>
                  <span className="text-[9.5px] uppercase tracking-wider px-2 py-0.5 bg-brand-slate text-brand-offwhite font-medium">
                    Active
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-4">
                  Solar &amp; Energy
                </h3>
                <p className="font-sans font-light text-xs text-brand-taupe mt-1 italic">
                  &ldquo;Power that lasts.&rdquo;
                </p>
                <p className="font-sans font-light text-xs text-brand-offwhite/80 mt-3 leading-relaxed">
                  Utility-grade clean solar installations, hybrid inverter microgrids, and lithium storage solutions across Nigeria.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-taupe/20 mt-6 text-xs text-brand-taupe">
                Voice: Strong, reliable
              </div>
            </div>

            {/* Division 2: Analytics */}
            <div className="border border-brand-taupe/25 p-6 flex flex-col justify-between bg-brand-black">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-sans font-light uppercase tracking-ultra text-[9px] text-brand-taupe">
                    DIVISION 02
                  </span>
                  <span className="text-[9.5px] uppercase tracking-wider px-2 py-0.5 border border-brand-taupe/30 text-brand-taupe">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-4">
                  Godfirst Analytics Ltd
                </h3>
                <p className="font-sans font-light text-xs text-brand-taupe mt-1 italic">
                  &ldquo;Intelligence that builds.&rdquo;
                </p>
                <p className="font-sans font-light text-xs text-brand-taupe mt-3 leading-relaxed">
                  Enterprise business intelligence, industrial IoT telemetry, and data infrastructure for emerging markets.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-taupe/20 mt-6 text-xs text-brand-taupe">
                Voice: Smart, insightful
              </div>
            </div>

            {/* Division 3: Networks */}
            <div className="border border-brand-taupe/25 p-6 flex flex-col justify-between bg-brand-black">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-sans font-light uppercase tracking-ultra text-[9px] text-brand-taupe">
                    DIVISION 03
                  </span>
                  <span className="text-[9.5px] uppercase tracking-wider px-2 py-0.5 border border-brand-taupe/30 text-brand-taupe">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-4">
                  Godfirst Networks Ltd
                </h3>
                <p className="font-sans font-light text-xs text-brand-taupe mt-1 italic">
                  &ldquo;Growth together.&rdquo;
                </p>
                <p className="font-sans font-light text-xs text-brand-taupe mt-3 leading-relaxed">
                  High-reliability communications, wireless links, and connectivity backbones bridging urban and rural corridors.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-taupe/20 mt-6 text-xs text-brand-taupe">
                Voice: Friendly, dependable
              </div>
            </div>

            {/* Division 4: Creative */}
            <div className="border border-brand-taupe/25 p-6 flex flex-col justify-between bg-brand-black">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-sans font-light uppercase tracking-ultra text-[9px] text-brand-taupe">
                    DIVISION 04
                  </span>
                  <span className="text-[9.5px] uppercase tracking-wider px-2 py-0.5 border border-brand-taupe/30 text-brand-taupe">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-4">
                  Godfirst Creative Studio
                </h3>
                <p className="font-sans font-light text-xs text-brand-taupe mt-1 italic">
                  &ldquo;Ideas with foundation.&rdquo;
                </p>
                <p className="font-sans font-light text-xs text-brand-taupe mt-3 leading-relaxed">
                  Brand strategy, timeless corporate visual identities, and architectural aesthetic design for long-term institutions.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-taupe/20 mt-6 text-xs text-brand-taupe">
                Voice: Minimal, refined
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Consultation Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
          PARTNER WITH US
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-2">
          Experience the peace of mind of genuine engineering.
        </h2>
        <p className="font-sans font-light text-sm text-brand-black/75 max-w-xl mx-auto mt-3">
          We invite property owners, facility directors, and architects to discuss their energy requirements with our engineering desk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Link
            href="/contact?intent=quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-black transition-colors"
          >
            <span>Request a Site Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href="tel:08082312819"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-brand-taupe/40 text-brand-black font-heading text-xs font-medium tracking-wide hover:border-brand-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-slate" />
            <span>Call 08082312819</span>
          </a>
        </div>
      </section>
    </div>
  );
}
