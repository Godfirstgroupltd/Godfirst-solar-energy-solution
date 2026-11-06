import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/solarData";
import {
  Grid3X3,
  BatteryCharging,
  Zap,
  Wrench,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | GODFIRST SOLAR & ENERGY LTD`,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Grid3X3":
        return <Grid3X3 className="w-6 h-6" />;
      case "BatteryCharging":
        return <BatteryCharging className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      default:
        return <FileCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-sans text-brand-taupe mb-4">
              <Link href="/services" className="hover:text-brand-offwhite transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-brand-offwhite">{service.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-brand-slate text-brand-offwhite flex items-center justify-center shrink-0">
                {getIcon(service.iconName)}
              </div>
              <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-taupe">
                ENGINEERING SPECIFICATION
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl text-brand-offwhite tracking-tight mt-4 leading-tight">
              {service.title}
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              {service.summary}
            </p>

            <div className="pt-6">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
              >
                <span>Request Quote for this Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Overview & Specs */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div>
              <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
                TECHNICAL OVERVIEW
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black tracking-tight mt-1">
                Engineered for maximum reliability under Nigerian conditions.
              </h2>
              <p className="font-sans font-light text-base text-brand-black/80 mt-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Specifications Card */}
            <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 shadow-subtle">
              <h3 className="font-heading font-bold text-lg text-brand-black mb-6">
                Hardware &amp; Engineering Specifications
              </h3>
              <div className="space-y-4">
                {service.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-sans text-brand-black/80">
                    <ShieldCheck className="w-4 h-4 text-brand-slate shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnkey Deliverables */}
            <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 shadow-subtle">
              <h3 className="font-heading font-bold text-lg text-brand-black mb-6">
                Turnkey Deployment Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-sans text-brand-black/75">
                    <CheckCircle2 className="w-4 h-4 text-brand-slate shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <div>
                <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
                  COMMONLY ASKED QUESTIONS
                </span>
                <h3 className="font-heading font-bold text-xl text-brand-black tracking-tight mt-1 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 border border-brand-taupe/20 bg-brand-divine/20">
                      <h4 className="font-heading font-semibold text-sm text-brand-black">
                        {faq.question}
                      </h4>
                      <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Direct Action */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="border border-brand-black bg-brand-black text-brand-offwhite p-6 sm:p-8 shadow-card">
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                ENGINEERING DISPATCH
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-1">
                Consult with a Project Engineer
              </h3>
              <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
                Receive an itemized single-line diagram and transparent bill of quantities for your property.
              </p>

              <div className="pt-6 space-y-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full block text-center py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
                >
                  Request Official Quote
                </Link>

                <a
                  href="https://wa.me/2348082312819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-brand-taupe/40 text-brand-offwhite text-xs font-heading font-medium tracking-wide hover:border-brand-offwhite transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-brand-taupe" />
                  <span>WhatsApp: 08082312819</span>
                </a>

                <a
                  href="tel:08082312819"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-brand-taupe/40 text-brand-offwhite text-xs font-heading font-medium tracking-wide hover:border-brand-offwhite transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-taupe" />
                  <span>Call: 08082312819</span>
                </a>
              </div>
            </div>

            <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle">
              <h4 className="font-heading font-semibold text-sm text-brand-black mb-3">
                Other Engineering Services
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                {SERVICES_DATA.filter((s) => s.slug !== service.slug).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-brand-black/75 hover:text-brand-black hover:underline flex items-center justify-between py-1"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3 h-3 text-brand-taupe" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
