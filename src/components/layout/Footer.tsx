import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SealStamp } from "@/components/brand/SealStamp";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-offwhite border-t border-brand-black/90">
      {/* Upper Footer: Seal Stamp + Vision Banner */}
      <div className="border-b border-brand-taupe/15 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <SealStamp size={100} className="shrink-0" />
            <div>
              <p className="font-sans font-light uppercase tracking-ultra text-[11px] text-brand-taupe mb-1">
                GODFIRST GROUP LTD • EST. 2026
              </p>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-offwhite tracking-tight">
                Building foundations that last 100 years.
              </h3>
              <p className="font-sans font-light text-sm text-brand-taupe max-w-xl mt-1">
                Power that lasts. Engineered solar infrastructure, hybrid battery microgrids, and guaranteed uptime across Nigeria.
              </p>
            </div>
          </div>

          <Link
            href="/contact?intent=quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-slate text-brand-offwhite hover:bg-brand-offwhite hover:text-brand-black transition-colors font-heading text-xs font-semibold tracking-wide shrink-0"
          >
            <span>Start Engineering Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <BrandLogo variant="dark" size="lg" withDivision={true} />
            <p className="font-sans font-light text-sm text-brand-taupe leading-relaxed max-w-sm">
              GODFIRST SOLAR &amp; ENERGY LTD is the clean energy division of GODFIRST GROUP LTD.
              We design, install, and service utility-grade solar power architectures for high-end residential, commercial, and industrial facilities in Nigeria.
            </p>
            <div className="pt-2 text-xs font-sans text-brand-taupe/80 space-y-1">
              <p className="tracking-wide">COREN &amp; NEMSA Certified Standards</p>
              <p className="tracking-wide">Lagos • Abuja • Port Harcourt • Nationwide</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-sans font-light uppercase tracking-ultra text-[11px] text-brand-taupe mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-sans font-light text-brand-offwhite/80">
              <li>
                <Link href="/" className="hover:text-brand-offwhite transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-offwhite transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-offwhite transition-colors">
                  Engineering Solutions
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-offwhite transition-colors">
                  Calibrated Packages
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-offwhite transition-colors">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-offwhite transition-colors">
                  Solar Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-offwhite transition-colors">
                  Contact &amp; Sizing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Godfirst Group Family */}
          <div>
            <h4 className="font-sans font-light uppercase tracking-ultra text-[11px] text-brand-taupe mb-5">
              Group Divisions
            </h4>
            <ul className="space-y-3 text-sm font-sans font-light text-brand-offwhite/80">
              <li className="flex items-center gap-2">
                <span className="text-brand-offwhite font-medium">Solar &amp; Energy</span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 bg-brand-slate text-brand-offwhite">
                  Active
                </span>
              </li>
              <li className="flex items-center gap-2 text-brand-taupe">
                <span>Godfirst Analytics Ltd</span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-brand-taupe/30">
                  Coming Soon
                </span>
              </li>
              <li className="flex items-center gap-2 text-brand-taupe">
                <span>Godfirst Networks Ltd</span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-brand-taupe/30">
                  Coming Soon
                </span>
              </li>
              <li className="flex items-center gap-2 text-brand-taupe">
                <span>Godfirst Creative Studio</span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-brand-taupe/30">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Dispatch */}
          <div>
            <h4 className="font-sans font-light uppercase tracking-ultra text-[11px] text-brand-taupe mb-5">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm font-sans font-light text-brand-offwhite/80">
              <a
                href="tel:08082312819"
                className="flex items-start gap-2.5 hover:text-brand-offwhite transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-taupe shrink-0 mt-0.5" />
                <span>08082312819</span>
              </a>

              <a
                href="mailto:godfirst.groupltd@gmail.com"
                className="flex items-start gap-2.5 hover:text-brand-offwhite transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-brand-taupe shrink-0 mt-0.5" />
                <span>godfirst.groupltd@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-brand-taupe">
                <MapPin className="w-4 h-4 text-brand-taupe shrink-0 mt-0.5" />
                <span>Operational Hubs: Lekki &amp; Ikeja (Lagos), Garki (Abuja), Rivers (Port Harcourt)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal & Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-brand-taupe/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-brand-taupe">
          <p>© GODFIRST SOLAR &amp; ENERGY LTD, a GODFIRST GROUP LTD company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-offwhite transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-offwhite transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/admin/login" className="hover:text-brand-offwhite transition-colors opacity-40 hover:opacity-100">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
