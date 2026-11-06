"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/data/solarData";
import { ArrowUpRight, ArrowRight, ShieldCheck, MapPin, Zap } from "lucide-react";

const CATEGORIES = ["All", "Residential", "Healthcare", "Commercial", "Industrial", "Hospitality"] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              FIELD-PROVEN PORTFOLIO
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight mt-2 leading-[1.1]">
              Proven solar deployments across Nigeria.
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              Engineered microgrids, medical-grade backups, and industrial solar arrays eliminating generator dependency from Lagos to Kano.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-12 border-b border-brand-taupe/20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-sans tracking-wide transition-colors ${
                selectedCategory === cat
                  ? "bg-brand-black text-brand-offwhite font-medium"
                  : "bg-brand-divine/40 text-brand-black hover:bg-brand-divine"
              }`}
            >
              {cat === "All" ? "All Projects (500+ Sites)" : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="border border-brand-taupe/30 bg-brand-offwhite group flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-black/85 text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-wider backdrop-blur-sm">
                    {project.location}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-brand-slate text-brand-offwhite text-[9px] font-sans font-light uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-brand-slate font-medium mb-2">
                    <span>{project.systemSize}</span>
                    <span>{project.storageBank}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-brand-black group-hover:text-brand-slate transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans font-light text-xs text-brand-black/70 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-brand-taupe/20 space-y-1 text-xs font-sans">
                    <div className="flex justify-between text-brand-black/80">
                      <span className="text-brand-taupe">Hardware:</span>
                      <span className="font-medium">{project.coreHardware}</span>
                    </div>
                    <div className="flex justify-between text-brand-black/80">
                      <span className="text-brand-taupe">Savings:</span>
                      <span className="font-medium text-brand-slate">{project.dieselSavings}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full py-2.5 text-center block border border-brand-taupe/40 text-brand-black text-xs font-heading font-semibold tracking-wide hover:bg-brand-black hover:text-brand-offwhite transition-colors"
                >
                  View Engineering Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blueprint CTA */}
      <section className="py-20 bg-brand-black text-brand-offwhite border-t border-brand-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-taupe">
            ENGINEERING SITE AUDIT
          </span>
          <h3 className="font-heading font-bold text-3xl sm:text-4xl text-brand-offwhite tracking-tight mt-2">
            Ready to inspect your roof and design your custom system?
          </h3>
          <p className="font-sans font-light text-sm text-brand-taupe mt-3 max-w-xl mx-auto">
            Our certified solar engineers conduct on-site irradiance analysis, structural roof loading checks, and energy load profiling anywhere in Nigeria.
          </p>
          <div className="pt-8">
            <Link
              href="/contact?intent=quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
            >
              <span>Schedule Inspection Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
