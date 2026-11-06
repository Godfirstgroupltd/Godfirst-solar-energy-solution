import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/solarData";
import { Grid3X3, BatteryCharging, Zap, Wrench, FileCheck, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Solutions & Services | GODFIRST SOLAR & ENERGY LTD",
  description:
    "Utility-grade clean energy services: Solar Panel Installation, Inverter & Battery Systems, Solar Street Lights, Maintenance & Repairs, and Solar Consultation across Nigeria.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Grid3X3":
        return <Grid3X3 className="w-5 h-5" />;
      case "BatteryCharging":
        return <BatteryCharging className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      case "Wrench":
        return <Wrench className="w-5 h-5" />;
      default:
        return <FileCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              ENGINEERING PRACTICES
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight mt-2 leading-[1.1]">
              Engineered clean energy solutions.
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              Eradicate generator reliance with utility-grade, fuel-free 24/7 power systems designed specifically for Nigeria&apos;s erratic grid conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="border border-brand-taupe/30 bg-brand-offwhite p-8 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-brand-slate text-brand-slate flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
                    SERVICE 0{index + 1}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-2xl text-brand-black mt-4">
                  {service.title}
                </h2>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-2">
                  {service.summary}
                </p>
                <div className="pt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black tracking-wide border-b border-brand-slate pb-1 transition-colors"
                  >
                    <span>Read Technical Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-brand-taupe/20 pt-6 lg:pt-0 lg:pl-8">
                <p className="font-sans font-light text-sm text-brand-black/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.specifications.slice(0, 4).map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs font-sans text-brand-black/75">
                      <ShieldCheck className="w-4 h-4 text-brand-slate shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-brand-taupe/15 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-sans text-brand-taupe">
                    Tested for harsh tropical conditions &amp; harmattan dust
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-slate text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-black transition-colors"
                  >
                    <span>Request Quote for this Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-brand-black text-brand-offwhite border-t border-brand-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-taupe">
            ENGINEERED AUDITS
          </span>
          <h3 className="font-heading font-bold text-3xl sm:text-4xl text-brand-offwhite tracking-tight mt-2">
            Need an on-site power assessment?
          </h3>
          <p className="font-sans font-light text-sm text-brand-taupe max-w-xl mx-auto mt-3">
            Our registered COREN electrical engineers deploy data loggers and thermal scanners to determine your precise electrical profile before you spend on equipment.
          </p>
          <div className="pt-8">
            <Link
              href="/contact?intent=quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
            >
              <span>Schedule On-Site Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
