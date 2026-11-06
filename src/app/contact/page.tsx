import type { Metadata } from "next";
import { LoadCalculator } from "@/components/quote/LoadCalculator";
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Regional Engineering Hubs | GODFIRST SOLAR & ENERGY LTD",
  description:
    "Connect with our solar engineering team for direct consultation, site inspection bookings, and 24/7 technical dispatch across Lagos, Abuja, Port Harcourt, and nationwide.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { package?: string; service?: string; intent?: string };
}) {
  const preselected = searchParams?.package || searchParams?.service || "";

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              NATIONWIDE FIELD DISPATCH
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight mt-2 leading-[1.1]">
              Connect with our solar engineering team.
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              Direct consultation, site inspection bookings, and 24/7 technical dispatch across Nigeria. Guaranteed response within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Regional Hubs + Sizing Calculator */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Direct Hotline & WhatsApp */}
          <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-brand-slate text-brand-slate flex items-center justify-center mb-5">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                DIRECT HOTLINE &amp; DISPATCH
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-black mt-1">
                Phone &amp; WhatsApp
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                Available 24/7 for emergency field dispatch, priority diagnostics, and immediate quote inquiries.
              </p>
            </div>
            <div className="pt-6 border-t border-brand-taupe/20 mt-6 space-y-3">
              <a
                href="tel:08082312819"
                className="block font-heading font-bold text-lg text-brand-black hover:text-brand-slate transition-colors"
              >
                08082312819
              </a>
              <a
                href="https://wa.me/2348082312819"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Official Engineering Mail Desk */}
          <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-brand-slate text-brand-slate flex items-center justify-center mb-5">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                TECHNICAL DESK
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-black mt-1">
                Official Email
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                Submit electrical load schedules, blueprints, architectural drawings, or corporate tender requests.
              </p>
            </div>
            <div className="pt-6 border-t border-brand-taupe/20 mt-6 space-y-2">
              <a
                href="mailto:godfirst.groupltd@gmail.com"
                className="block font-sans font-medium text-sm text-brand-black hover:text-brand-slate transition-colors break-all"
              >
                godfirst.groupltd@gmail.com
              </a>
              <p className="text-[11px] font-sans text-brand-taupe flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Average reply time: under 2 hours</span>
              </p>
            </div>
          </div>

          {/* Card 3: Regional Engineering Presence */}
          <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-brand-slate text-brand-slate flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                NATIONWIDE HUBS
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-black mt-1">
                Operations Hubs
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                Engineered field bases equipped with heavy inverters, Tier-1 solar panels, and rapid repair crews.
              </p>
            </div>
            <div className="pt-6 border-t border-brand-taupe/20 mt-6 space-y-1.5 text-xs font-sans">
              <div className="flex justify-between items-center">
                <span className="font-medium text-brand-black">Lagos (Lekki &amp; Ikeja)</span>
                <span className="text-[9.5px] uppercase tracking-wider text-brand-slate font-medium">Active Crew</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-brand-black">Abuja (Garki &amp; Maitama)</span>
                <span className="text-[9.5px] uppercase tracking-wider text-brand-slate font-medium">Active Crew</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-brand-black">Port Harcourt (Old GRA)</span>
                <span className="text-[9.5px] uppercase tracking-wider text-brand-taupe">Field Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Load Sizing Calculator & Direct Booking */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              PRECISION LOAD SIZING
            </span>
            <h2 className="font-heading font-bold text-3xl text-brand-black mt-1">
              Custom Engineering Sizing &amp; Inspection Booking
            </h2>
            <p className="font-sans font-light text-sm text-brand-black/75 mt-1">
              Use our calibrated sizing tool below to calculate your estimated peak demand, or submit your site details directly.
            </p>
          </div>

          <LoadCalculator preselectedPackage={preselected} />
        </div>

        {/* Nigeria Regional Hubs Coverage Map Placeholder */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 sm:p-10 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
                GEOGRAPHIC FOOTPRINT
              </span>
              <h3 className="font-heading font-bold text-2xl text-brand-black">
                Rapid Technical Deployment Across 36 States
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/75 leading-relaxed">
                Whether powering a beachfront residence in Lekki or an agro-processing plant in Kano, our logistics network delivers Tier-1 equipment safely and securely.
              </p>

              <div className="space-y-3 pt-2 text-xs font-sans">
                <div className="p-3 border border-brand-taupe/20 bg-brand-divine/25">
                  <p className="font-semibold text-brand-black">Lagos Operations Hub</p>
                  <p className="text-brand-black/70">Lekki Phase 1 &amp; Ikeja • Turnaround &lt; 24h</p>
                </div>
                <div className="p-3 border border-brand-taupe/20 bg-brand-divine/25">
                  <p className="font-semibold text-brand-black">Abuja FCT Operations Hub</p>
                  <p className="text-brand-black/70">Area 11 Garki &amp; Maitama • Turnaround &lt; 24h</p>
                </div>
                <div className="p-3 border border-brand-taupe/20 bg-brand-divine/25">
                  <p className="font-semibold text-brand-black">Port Harcourt &amp; Niger Delta</p>
                  <p className="text-brand-black/70">Old GRA • Industrial Corridor • Turnaround &lt; 48h</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Map Placeholder Graphic with Quiet Luxury Technical Styling */}
              <div className="border border-brand-taupe/40 bg-brand-black text-brand-offwhite p-8 sm:p-12 relative overflow-hidden shadow-card">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-brand-taupe/20 pb-4">
                    <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                      FEDERAL REPUBLIC OF NIGERIA
                    </span>
                    <span className="text-xs text-brand-offwhite/80">36 States Covered</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <p className="font-heading font-bold text-2xl text-brand-offwhite">500+</p>
                      <p className="text-xs font-sans text-brand-taupe">Energized Installations</p>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-brand-offwhite">99.8%</p>
                      <p className="text-xs font-sans text-brand-taupe">Uptime SLA Compliance</p>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-brand-taupe leading-relaxed">
                    All site surveys include thermal imaging of existing distribution boards, harmonic power-factor assessment, and single-line engineering diagrams.
                  </p>

                  <div className="pt-2">
                    <a
                      href="tel:08082312819"
                      className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-offwhite hover:text-brand-taupe underline"
                    >
                      <span>Direct Escalation: 08082312819</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
