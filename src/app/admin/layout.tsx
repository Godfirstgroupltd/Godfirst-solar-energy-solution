"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  Users,
  Grid3X3,
  Package,
  Layers,
  FileText,
  Star,
  Settings,
  Image as ImageIcon,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

const ADMIN_NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads & Quotes", icon: Users },
  { href: "/admin/projects", label: "Field Projects", icon: Layers },
  { href: "/admin/services", label: "Services", icon: Grid3X3 },
  { href: "/admin/packages", label: "Packages", icon: Package },
  { href: "/admin/blog", label: "Blog Insights", icon: FileText },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
  { href: "/admin/media", label: "Media Library", icon: ImageIcon },
  { href: "/admin/settings", label: "Site Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If on login page, render child directly without admin shell
  if (pathname === "/admin/login" || pathname.startsWith("/admin/auth")) {
    return <>{children}</>;
  }

  const handleSignOut = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch (e) {
      // Ignored
    }
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black flex flex-col lg:flex-row font-sans">
      {/* Mobile Top Header */}
      <header className="lg:hidden bg-brand-black text-brand-offwhite px-4 py-3 flex items-center justify-between border-b border-brand-black">
        <BrandLogo variant="dark" size="sm" withDivision={false} />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-brand-offwhite hover:bg-brand-slate"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar for Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-brand-black text-brand-offwhite transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:w-64 flex flex-col justify-between ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="pb-6 border-b border-brand-taupe/20">
            <BrandLogo variant="dark" size="md" withDivision={true} />
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-sans text-brand-taupe">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-offwhite" />
              <span>Admin: godfirst.groupltd@gmail.com</span>
            </div>
          </div>

          <nav className="mt-6 space-y-1.5">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 text-xs font-heading font-medium tracking-wide transition-colors ${
                    isActive
                      ? "bg-brand-slate text-brand-offwhite"
                      : "text-brand-offwhite/75 hover:bg-brand-black/50 hover:text-brand-offwhite"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-6 border-t border-brand-taupe/20 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-xs text-brand-taupe hover:text-brand-offwhite transition-colors py-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Public Site</span>
          </Link>

          <button
            onClick={handleSignOut}
            type="button"
            className="w-full flex items-center gap-2 text-xs text-red-400 hover:text-red-300 transition-colors py-1.5 text-left"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Secure Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Body */}
      <div className="flex-1 flex flex-col min-w-0 bg-brand-offwhite">
        <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

