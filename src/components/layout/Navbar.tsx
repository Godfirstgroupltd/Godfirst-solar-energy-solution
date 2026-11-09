"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F5F0]/95 backdrop-blur-md shadow-subtle border-b border-brand-taupe/20"
          : "bg-[#F5F5F0] border-b border-brand-taupe/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Light Paper Background */}
          <BrandLogo variant="light" size="md" withDivision={true} />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-xs lg:text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-sans tracking-wide py-1 border-b-2 text-xs lg:text-sm ${
                    isActive
                      ? "text-brand-black border-brand-slate font-semibold"
                      : "text-brand-black/70 border-transparent hover:text-brand-black hover:border-brand-taupe/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-5">
            <a
              href="tel:08082312819"
              className="hidden xl:flex items-center gap-2 text-xs font-sans tracking-wide text-brand-black/80 hover:text-brand-black"
            >
              <Phone className="w-3.5 h-3.5 text-brand-slate" />
              <span>08082312819</span>
            </a>

            <Link
              href="/contact?intent=quote"
              className="inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 rounded-none bg-brand-slate text-brand-offwhite text-xs font-heading font-semibold tracking-wide hover:bg-brand-black transition-all shadow-subtle"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/contact?intent=quote"
              className="sm:hidden inline-flex px-3 py-1.5 bg-brand-slate text-brand-offwhite text-xs font-heading font-semibold"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-brand-black hover:bg-brand-divine/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-offwhite border-b border-brand-taupe/20 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-sans tracking-wide border-b border-brand-taupe/10 ${
                    isActive ? "text-brand-black font-semibold" : "text-brand-black/70 hover:text-brand-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact?intent=quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-brand-slate text-brand-offwhite text-sm font-heading font-semibold"
              >
                Request a Quote
              </Link>
              <a
                href="tel:08082312819"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 border border-brand-taupe/40 text-brand-black text-xs font-sans tracking-wider uppercase"
              >
                Direct Call: 08082312819
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
