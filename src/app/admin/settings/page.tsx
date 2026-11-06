"use client";

import { useState } from "react";
import { Save, CheckCircle2, ShieldCheck } from "lucide-react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    companyName: "GODFIRST SOLAR & ENERGY LTD",
    motherGroup: "GODFIRST GROUP LTD (EST. 2026)",
    divisionTagline: "Power that lasts.",
    motherTagline: "Foundation First.",
    phone: "08082312819",
    email: "godfirst.groupltd@gmail.com",
    address: "Lekki Phase 1, Lagos & Area 11 Garki, Abuja, Nigeria",
    heroHeadline: "Power that lasts.",
    heroSubtitle:
      "Reliable solar engineering for Nigerian homes and businesses. Say goodbye to unpredictable grid collapse and soaring diesel generator costs with Tier-1 lithium and hybrid systems engineered for 25+ years of uninterrupted power.",
    statInstallations: "500+",
    statUptime: "100%",
    statExperience: "15+ Yrs",
    metaTitleDefault: "GODFIRST SOLAR & ENERGY LTD | Power that lasts.",
    metaDescriptionDefault:
      "Utility-grade clean energy, hybrid inverters, and lithium energy storage systems for Nigerian residences, estates, and commercial facilities.",
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            GLOBAL CONFIGURATION
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Site Settings &amp; Telemetry
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Configure contact hotlines, mother group metadata, hero assertions, and SEO defaults.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Settings Saved Successfully</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6 text-xs font-sans">
        {/* Contact Info */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle space-y-4">
          <h2 className="font-heading font-bold text-base text-brand-black">
            Direct Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-brand-black/80 font-medium mb-1">
                Official Phone / WhatsApp Hotline
              </label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>

            <div>
              <label className="block text-brand-black/80 font-medium mb-1">
                Engineering Inquiries Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-brand-black/80 font-medium mb-1">
              Physical Operational Headquarters &amp; Regional Hubs
            </label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
            />
          </div>
        </div>

        {/* Hero & Brand Assertions */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle space-y-4">
          <h2 className="font-heading font-bold text-base text-brand-black">
            Brand Core &amp; Hero Copy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-brand-black/80 font-medium mb-1">
                Division Headline / Tagline
              </label>
              <input
                type="text"
                value={settings.heroHeadline}
                onChange={(e) => setSettings({ ...settings, heroHeadline: e.target.value })}
                className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>
            <div>
              <label className="block text-brand-black/80 font-medium mb-1">
                Mother Group Tagline
              </label>
              <input
                type="text"
                value={settings.motherTagline}
                onChange={(e) => setSettings({ ...settings, motherTagline: e.target.value })}
                className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-brand-black/80 font-medium mb-1">
              Hero Supporting Statement
            </label>
            <textarea
              rows={3}
              value={settings.heroSubtitle}
              onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
              className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs leading-relaxed"
            />
          </div>
        </div>

        {/* Public Stats Strip */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle space-y-4">
          <h2 className="font-heading font-bold text-base text-brand-black">
            Public Performance Counters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-brand-black/80 font-medium mb-1">Installations</label>
              <input
                type="text"
                value={settings.statInstallations}
                onChange={(e) => setSettings({ ...settings, statInstallations: e.target.value })}
                className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>
            <div>
              <label className="block text-brand-black/80 font-medium mb-1">Client Peace of Mind</label>
              <input
                type="text"
                value={settings.statUptime}
                onChange={(e) => setSettings({ ...settings, statUptime: e.target.value })}
                className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>
            <div>
              <label className="block text-brand-black/80 font-medium mb-1">Master Tech Experience</label>
              <input
                type="text"
                value={settings.statExperience}
                onChange={(e) => setSettings({ ...settings, statExperience: e.target.value })}
                className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-black text-brand-offwhite font-heading text-xs font-semibold hover:bg-brand-slate transition-colors shadow-subtle"
          >
            <Save className="w-4 h-4" />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
}

