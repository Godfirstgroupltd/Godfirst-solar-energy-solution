import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_DATA } from "@/data/solarData";
import { ArrowRight, Clock, User, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Engineering Insights & Guides | GODFIRST SOLAR & ENERGY LTD",
  description:
    "Authoritative guides on solar system sizing, lithium battery technology, and appliance surge protection for Nigerian residences and commercial property owners.",
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              SOLAR KNOWLEDGE &amp; CLARITY
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight mt-2 leading-[1.1]">
              Solar engineering insights.
            </h1>
            <p className="font-sans font-light text-base sm:text-lg text-brand-taupe mt-4 leading-relaxed">
              Transparent, practical explanations addressing electrical load audits, LiFePO4 battery longevity, surge safety, and seamless NEPA changeovers across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <article
              key={post.id}
              className="border border-brand-taupe/30 bg-brand-offwhite p-8 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-sans text-brand-slate mb-4">
                  <span className="uppercase tracking-wider font-medium">{post.category}</span>
                  <span className="flex items-center gap-1 text-brand-taupe">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="font-heading font-bold text-xl text-brand-black hover:text-brand-slate transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="font-sans font-light text-xs text-brand-black/75 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-taupe/20">
                <div className="flex items-center justify-between text-xs font-sans">
                  <div>
                    <p className="font-medium text-brand-black">{post.author}</p>
                    <p className="text-[11px] text-brand-taupe">{post.authorRole}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-brand-slate hover:text-brand-black font-heading font-semibold"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
