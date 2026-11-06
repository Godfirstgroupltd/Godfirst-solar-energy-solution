import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_DATA } from "@/data/solarData";
import { ArrowRight, Clock, User, ShieldCheck, Phone, MessageSquare } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = BLOG_DATA.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Solar Engineering Insights`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = BLOG_DATA.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col w-full">
      {/* Article Header */}
      <section className="bg-brand-black text-brand-offwhite py-20 lg:py-24 border-b border-brand-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-sans text-brand-taupe mb-4">
            <Link href="/blog" className="hover:text-brand-offwhite transition-colors">
              Solar Insights
            </Link>
            <span>/</span>
            <span className="text-brand-offwhite">{post.category}</span>
          </div>

          <span className="px-2.5 py-1 bg-brand-slate text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-wider inline-block">
            {post.category}
          </span>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-brand-offwhite tracking-tight mt-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-brand-taupe/20 text-xs font-sans text-brand-taupe">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-offwhite" />
              <span className="text-brand-offwhite">{post.author}</span>
              <span>•</span>
              <span>{post.authorRole}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-taupe" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <article className="space-y-6 text-base font-sans font-light text-brand-black/85 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="first-of-type:text-lg first-of-type:leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Engineer Review Box */}
        <div className="mt-16 p-8 border border-brand-taupe/30 bg-brand-divine/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                COREN TECHNICAL DESK
              </span>
              <h3 className="font-heading font-bold text-lg text-brand-black mt-1">
                Have questions about your property&apos;s load capacity?
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/75 mt-1">
                Speak directly with an electrical engineer for honest advice before purchasing any equipment.
              </p>
            </div>
            <Link
              href="/contact?intent=quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-slate text-brand-offwhite text-xs font-heading font-semibold tracking-wide hover:bg-brand-black transition-colors shrink-0"
            >
              <span>Request Sizing Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-brand-taupe/20">
          <h3 className="font-heading font-bold text-xl text-brand-black mb-6">
            More Solar Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BLOG_DATA.filter((p) => p.slug !== post.slug).map((p) => (
              <div key={p.id} className="border border-brand-taupe/25 p-5 bg-brand-offwhite">
                <span className="text-[10px] font-sans text-brand-slate uppercase tracking-wider font-medium">
                  {p.category}
                </span>
                <h4 className="font-heading font-semibold text-sm text-brand-black mt-1">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h4>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-2 line-clamp-2">
                  {p.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
