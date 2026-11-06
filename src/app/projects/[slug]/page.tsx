import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/solarData";
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Activity, Zap, Phone } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Deployed Case Study`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-sans text-brand-taupe mb-4">
              <Link href="/projects" className="hover:text-brand-offwhite transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-brand-offwhite">{project.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-brand-slate text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-wider">
                {project.category} Microgrid
              </span>
              <span className="text-xs font-sans text-brand-taupe flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}, {project.state}</span>
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl text-brand-offwhite tracking-tight mt-4 leading-tight">
              {project.title}
            </h1>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-brand-taupe/20">
              <div>
                <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">System Size</p>
                <p className="font-heading font-bold text-base sm:text-lg text-brand-offwhite">{project.systemSize}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">Storage Bank</p>
                <p className="font-heading font-bold text-base sm:text-lg text-brand-offwhite">{project.storageBank}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">Core Hardware</p>
                <p className="font-heading font-bold text-base sm:text-lg text-brand-offwhite">{project.coreHardware}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">Financial Yield</p>
                <p className="font-heading font-bold text-base sm:text-lg text-brand-slate">{project.dieselSavings}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Body */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Hero Image */}
            <div className="relative h-[400px] sm:h-[480px] w-full border border-brand-taupe/30 overflow-hidden shadow-card">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Narrative Sections */}
            <div>
              <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
                PROJECT OVERVIEW
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black tracking-tight mt-1">
                Background &amp; Operational Objectives
              </h2>
              <p className="font-sans font-light text-base text-brand-black/80 mt-4 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-brand-taupe/30 bg-brand-divine/25 p-6">
                <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
                  THE CHALLENGE
                </span>
                <h3 className="font-heading font-bold text-lg text-brand-black mt-2">
                  Site Constraints &amp; Power Demands
                </h3>
                <p className="font-sans font-light text-xs text-brand-black/75 mt-3 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="border border-brand-taupe/30 bg-brand-divine/25 p-6">
                <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
                  OUR SOLUTION
                </span>
                <h3 className="font-heading font-bold text-lg text-brand-black mt-2">
                  Engineered Blueprint &amp; Execution
                </h3>
                <p className="font-sans font-light text-xs text-brand-black/75 mt-3 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results & Measured Impact */}
            <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 shadow-subtle">
              <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
                MEASURED IMPACT
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-black mt-1 mb-6">
                Key Commissioning Results
              </h3>
              <div className="space-y-4">
                {project.results.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-sm font-sans text-brand-black/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-slate shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="border border-brand-black bg-brand-black text-brand-offwhite p-8 shadow-card">
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                SIMILAR SITE ARCHITECTURE
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-1">
                Have a similar facility in Nigeria?
              </h3>
              <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
                Our registered electrical engineers can inspect your site and prepare a comparable engineering sizing document.
              </p>

              <div className="pt-6 space-y-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(project.systemSize)}`}
                  className="w-full block text-center py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
                >
                  Request Blueprint for this Model
                </Link>

                <a
                  href="tel:08082312819"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-brand-taupe/40 text-brand-offwhite text-xs font-heading font-medium tracking-wide hover:border-brand-offwhite transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-taupe" />
                  <span>Call 08082312819</span>
                </a>
              </div>
            </div>

            <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle">
              <h4 className="font-heading font-semibold text-sm text-brand-black mb-3">
                Explore More Case Studies
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                {PROJECTS_DATA.filter((p) => p.slug !== project.slug).map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-brand-black/75 hover:text-brand-black hover:underline flex items-center justify-between py-1"
                    >
                      <span>{p.title}</span>
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
