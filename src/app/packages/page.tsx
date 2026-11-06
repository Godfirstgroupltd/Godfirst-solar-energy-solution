import type { Metadata } from "next";
import Link from "next/link";
import { PACKAGES_DATA } from "@/data/solarData";
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, BatteryCharging, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineered Packages | GODFIRST SOLAR & ENERGY LTD",
  description:
    "Calibrated solar packages: Home Basic, Home Plus, and Commercial Hub. Tier-1 hardware with transparent sizing and no deceptive capacity claims.",
};

export default function PackagesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              STANDARDIZED ARCHITECTURES
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight mt-2 leading-[1.1]">
              Calibrated solar packages.
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              Transparent, factory-tested configurations engineered for Nigerian residences and commercial enterprises. Every package includes Tier-1 equipment, fire-safe LiFePO4 cells, and certified grounding.
            </p>
          </div>
        </div>
      </section>

      {/* Main Package Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`border p-8 sm:p-10 flex flex-col justify-between ${
                pkg.isFeatured
                  ? "border-brand-black bg-brand-black text-brand-offwhite shadow-card relative"
                  : "border-brand-taupe/30 bg-brand-offwhite text-brand-black shadow-subtle"
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-brand-slate text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-ultra">
                  Most Requested
                </div>
              )}

              <div>
                <span
                  className={`font-sans font-light uppercase tracking-ultra text-[9.5px] ${
                    pkg.isFeatured ? "text-brand-taupe" : "text-brand-slate"
                  }`}
                >
                  {pkg.category} TIER
                </span>
                <h2
                  className={`font-heading font-bold text-2xl sm:text-3xl mt-1 ${
                    pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"
                  }`}
                >
                  {pkg.name}
                </h2>
                <p
                  className={`font-sans font-light text-xs mt-2 leading-relaxed ${
                    pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"
                  }`}
                >
                  {pkg.tagline}
                </p>

                {/* Core Metrics */}
                <div
                  className={`my-6 py-4 border-y space-y-2 text-xs font-sans ${
                    pkg.isFeatured ? "border-brand-taupe/20" : "border-brand-taupe/20"
                  }`}
                >
                  <div className="flex justify-between">
                    <span className={pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"}>
                      Inverter Rating:
                    </span>
                    <span className={`font-medium ${pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"}`}>
                      {pkg.inverterCapacity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"}>
                      Lithium Bank:
                    </span>
                    <span className={`font-medium ${pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"}`}>
                      {pkg.batteryStorage}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"}>
                      Solar PV Array:
                    </span>
                    <span className={`font-medium ${pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"}`}>
                      {pkg.solarArray}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"}>
                      Estimated Daily Yield:
                    </span>
                    <span className={`font-medium ${pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"}`}>
                      {pkg.dailyHarvest}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"}>
                      Cutover Latency:
                    </span>
                    <span className={`font-medium ${pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"}`}>
                      {pkg.transferTime}
                    </span>
                  </div>
                </div>

                {/* Appliances Covered */}
                <div className="space-y-2.5 text-xs font-sans">
                  <p
                    className={`font-heading font-semibold text-xs uppercase tracking-wider mb-2 ${
                      pkg.isFeatured ? "text-brand-offwhite" : "text-brand-black"
                    }`}
                  >
                    Appliances Handled:
                  </p>
                  {pkg.appliancesCovered.map((app, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          pkg.isFeatured ? "text-brand-taupe" : "text-brand-slate"
                        }`}
                      />
                      <span className={pkg.isFeatured ? "text-brand-offwhite/90" : "text-brand-black/80"}>
                        {app}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical Highlights */}
                <div className="mt-6 pt-4 border-t border-brand-taupe/15 space-y-1.5 text-xs font-sans">
                  <p
                    className={`font-heading font-semibold text-[11px] uppercase tracking-wider mb-1 ${
                      pkg.isFeatured ? "text-brand-taupe" : "text-brand-slate"
                    }`}
                  >
                    Engineering Standards:
                  </p>
                  {pkg.technicalHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <ShieldCheck
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          pkg.isFeatured ? "text-brand-taupe" : "text-brand-slate"
                        }`}
                      />
                      <span className={pkg.isFeatured ? "text-brand-taupe" : "text-brand-black/70"}>
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Strictly 'Request Price' opening quote with preselected package */}
              <div className="pt-8">
                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className={`block w-full py-3.5 text-center font-heading text-xs font-semibold tracking-wide transition-colors ${
                    pkg.isFeatured
                      ? "bg-brand-slate text-brand-offwhite hover:bg-brand-offwhite hover:text-brand-black"
                      : "border border-brand-slate text-brand-slate hover:bg-brand-slate hover:text-brand-offwhite"
                  }`}
                >
                  Request Price for {pkg.name}
                </Link>
                <p className="text-[10px] font-sans text-center text-brand-taupe mt-2">
                  No fixed online prices • Itemized Bill of Quantities supplied
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sizing & Sizing Guarantee Note */}
      <section className="py-16 bg-brand-divine/25 border-y border-brand-taupe/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            ENGINEERING TRANSPARENCY RULE
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black tracking-tight mt-1">
            Why doesn&apos;t Godfirst publish generic fixed prices?
          </h3>
          <p className="font-sans font-light text-sm text-brand-black/80 max-w-2xl mx-auto mt-3 leading-relaxed">
            Every building has unique electrical traits: cable conduit run lengths, physical roof azimuth angles, distribution board phases, and specific surge demands. Publishing generic fixed prices encourages cutting corners on copper cable thickness and surge earthing pits. We price each system with exact transparent component accounting.
          </p>
        </div>
      </section>
    </div>
  );
}
