"use client";

import { useState, useMemo } from "react";
import {
  ShieldCheck,
  Zap,
  BatteryCharging,
  CheckCircle2,
  Plus,
  Minus,
  MessageSquare,
  ArrowRight,
  Send,
} from "lucide-react";

interface ApplianceCount {
  ac1hp: number;
  ac15hp: number;
  ac2hp: number;
  freezer: number;
  fridge: number;
  pump075: number;
  pump1hp: number;
  pump2hp: number;
  lights10: number;
  tv: number;
  pcCctv: number;
}

export function LoadCalculator({ preselectedPackage = "" }: { preselectedPackage?: string }) {
  const [topology, setTopology] = useState<string>("Residential Flat / Duplex");
  const [counts, setCounts] = useState<ApplianceCount>({
    ac1hp: 1,
    ac15hp: 1,
    ac2hp: 0,
    freezer: 1,
    fridge: 1,
    pump075: 0,
    pump1hp: 1,
    pump2hp: 0,
    lights10: 2,
    tv: 2,
    pcCctv: 1,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Lagos (Island/Lekki/Ikoyi/Epe)",
    timeline: "Standard • Within 30 Days",
    message: preselectedPackage ? `Interested in ${preselectedPackage} package.` : "",
    honeypot: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateCount = (key: keyof ApplianceCount, delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  // Sizing Calculation based on electrical engineering standards
  const calculations = useMemo(() => {
    const runningWatts =
      counts.ac1hp * 850 +
      counts.ac15hp * 1200 +
      counts.ac2hp * 2200 +
      counts.freezer * 350 +
      counts.fridge * 250 +
      counts.pump075 * 550 +
      counts.pump1hp * 850 +
      counts.pump2hp * 1600 +
      counts.lights10 * 150 +
      counts.tv * 220 +
      counts.pcCctv * 340;

    // Peak demand in kW with diversity factor
    const peakDemandKw = Math.max(1.5, Math.round((runningWatts * 0.85) / 100) / 10);

    // Recommended inverter kVA (with power factor 0.8 and safety margin)
    let recInverterKva = 3.5;
    if (peakDemandKw > 15) recInverterKva = 30;
    else if (peakDemandKw > 9) recInverterKva = 15;
    else if (peakDemandKw > 6) recInverterKva = 10;
    else if (peakDemandKw > 4) recInverterKva = 7.5;
    else if (peakDemandKw > 2.5) recInverterKva = 5;

    // Recommended battery storage kWh for 10-12 hours nocturnal autonomy
    const nocturnalKwh = Math.max(5.12, Math.round((peakDemandKw * 0.45 * 10) * 10) / 10);
    let recBatteryKwh = 5.12;
    if (nocturnalKwh > 30) recBatteryKwh = 45;
    else if (nocturnalKwh > 20) recBatteryKwh = 30;
    else if (nocturnalKwh > 12) recBatteryKwh = 20.4;
    else if (nocturnalKwh > 8) recBatteryKwh = 15;
    else if (nocturnalKwh > 5) recBatteryKwh = 10.24;

    return {
      peakDemandKw,
      recInverterKva,
      recBatteryKwh,
    };
  }, [counts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bot spam

    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          topology,
          service: preselectedPackage || "Custom Sizing Quote",
          timeline: formData.timeline,
          message: formData.message,
          peakDemandKw: calculations.peakDemandKw,
          recInverterKva: calculations.recInverterKva,
          recBatteryKwh: calculations.recBatteryKwh,
          inventory: counts,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit request.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsAppText = encodeURIComponent(
    `Hello Godfirst Solar, my name is ${formData.name || "Customer"}. I used your load calculator:\n` +
      `- Property: ${topology}\n` +
      `- Location: ${formData.location}\n` +
      `- Estimated Peak Demand: ${calculations.peakDemandKw} kW\n` +
      `- Recommended Inverter: ${calculations.recInverterKva} kVA\n` +
      `- Recommended Battery: ${calculations.recBatteryKwh} kWh\n` +
      `Please provide an official single-line diagram and quote.`
  );

  return (
    <div className="space-y-12">
      {/* Step 1: Topology Selection */}
      <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 sm:p-8 shadow-subtle">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-taupe/20">
          <div className="w-8 h-8 rounded-full bg-brand-slate text-brand-offwhite flex items-center justify-center font-heading font-bold text-xs">
            1
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-brand-black">
              Select Property Topology
            </h3>
            <p className="font-sans font-light text-xs text-brand-black/70">
              Provides baseline diversity factors for heavy inductive loads.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            "Residential Flat / Duplex",
            "Commercial Office / Corporate",
            "Healthcare Hospital / Clinic",
            "Industrial Warehouse / Plant",
            "Hospitality Hotel / Lounge",
          ].map((top) => (
            <button
              key={top}
              type="button"
              onClick={() => setTopology(top)}
              className={`p-3.5 text-left border text-xs font-sans transition-colors ${
                topology === top
                  ? "border-brand-slate bg-brand-slate/15 font-semibold text-brand-black"
                  : "border-brand-taupe/30 hover:border-brand-taupe text-brand-black/80"
              }`}
            >
              {top}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Appliance Inventory Counters */}
      <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 sm:p-8 shadow-subtle">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-taupe/20">
          <div className="w-8 h-8 rounded-full bg-brand-slate text-brand-offwhite flex items-center justify-center font-heading font-bold text-xs">
            2
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-brand-black">
              Appliance Electrical Inventory
            </h3>
            <p className="font-sans font-light text-xs text-brand-black/70">
              Input the count of appliances you require for uninterrupted solar &amp; battery operation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section: AC & Cooling */}
          <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20 space-y-3">
            <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider">
              Air Conditioners &amp; Cooling
            </p>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-medium text-brand-black">1.0 HP (Inverter AC)</p>
                <p className="text-[10px] text-brand-taupe">~850W Running</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("ac1hp", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.ac1hp}</span>
                <button
                  type="button"
                  onClick={() => updateCount("ac1hp", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-taupe/15">
              <div>
                <p className="font-medium text-brand-black">1.5 HP (Inverter AC)</p>
                <p className="text-[10px] text-brand-taupe">~1,200W Running</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("ac15hp", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.ac15hp}</span>
                <button
                  type="button"
                  onClick={() => updateCount("ac15hp", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-taupe/15">
              <div>
                <p className="font-medium text-brand-black">2.0 HP (Standard Non-Inverter)</p>
                <p className="text-[10px] text-brand-taupe">~2,200W + High Surge</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("ac2hp", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.ac2hp}</span>
                <button
                  type="button"
                  onClick={() => updateCount("ac2hp", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Section: Cold Storage & Refrigeration */}
          <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20 space-y-3">
            <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider">
              Cold Storage &amp; Refrigeration
            </p>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-medium text-brand-black">Chest Deep Freezer</p>
                <p className="text-[10px] text-brand-taupe">~350W Duty (800W Surge)</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("freezer", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.freezer}</span>
                <button
                  type="button"
                  onClick={() => updateCount("freezer", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-taupe/15">
              <div>
                <p className="font-medium text-brand-black">Double-Door Refrigerator</p>
                <p className="text-[10px] text-brand-taupe">~250W Continuous</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("fridge", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.fridge}</span>
                <button
                  type="button"
                  onClick={() => updateCount("fridge", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Section: Water Borehole & Booster Pumps */}
          <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20 space-y-3">
            <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider">
              Water Borehole &amp; Booster Pumps
            </p>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-medium text-brand-black">0.75 HP Surface Booster Pump</p>
                <p className="text-[10px] text-brand-taupe">~550W Inductive</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("pump075", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.pump075}</span>
                <button
                  type="button"
                  onClick={() => updateCount("pump075", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-taupe/15">
              <div>
                <p className="font-medium text-brand-black">1.0 HP Submersible Borehole</p>
                <p className="text-[10px] text-brand-taupe">~850W + 3x Surge</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("pump1hp", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.pump1hp}</span>
                <button
                  type="button"
                  onClick={() => updateCount("pump1hp", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Section: Lighting, Media & IT */}
          <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20 space-y-3">
            <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider">
              Lighting, Media &amp; IT Workstations
            </p>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-medium text-brand-black">LED Lights (Per 10 Points)</p>
                <p className="text-[10px] text-brand-taupe">~150W Cluster</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("lights10", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.lights10}</span>
                <button
                  type="button"
                  onClick={() => updateCount("lights10", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-taupe/15">
              <div>
                <p className="font-medium text-brand-black">Smart TV + Soundbar</p>
                <p className="text-[10px] text-brand-taupe">~220W Avg Load</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("tv", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.tv}</span>
                <button
                  type="button"
                  onClick={() => updateCount("tv", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-taupe/15">
              <div>
                <p className="font-medium text-brand-black">PC / Server / CCTV NVR</p>
                <p className="text-[10px] text-brand-taupe">~340W Terminal</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("pcCctv", -1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-medium">{counts.pcCctv}</span>
                <button
                  type="button"
                  onClick={() => updateCount("pcCctv", 1)}
                  className="w-7 h-7 border border-brand-taupe/40 flex items-center justify-center hover:bg-brand-offwhite"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live System Sizing Calibration Strip (Foundation Black & Slate) */}
      <div className="bg-brand-black text-brand-offwhite p-6 sm:p-8 shadow-card border border-brand-black">
        <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-taupe">
          LIVE SYSTEM CALIBRATION
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          <div className="border border-brand-taupe/20 p-4">
            <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">Estimated Peak Demand</p>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-brand-offwhite mt-1">
              {calculations.peakDemandKw} kW
            </p>
            <p className="text-[11px] font-sans text-brand-taupe mt-1">Simultaneous continuous + surge</p>
          </div>

          <div className="border border-brand-taupe/20 p-4">
            <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">Recommended Inverter</p>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-brand-slate mt-1">
              {calculations.recInverterKva} kVA
            </p>
            <p className="text-[11px] font-sans text-brand-taupe mt-1">Pure Sine Wave with ATS</p>
          </div>

          <div className="border border-brand-taupe/20 p-4">
            <p className="text-[10px] font-sans text-brand-taupe uppercase tracking-wider">Recommended Battery</p>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-brand-offwhite mt-1">
              {calculations.recBatteryKwh} kWh
            </p>
            <p className="text-[11px] font-sans text-brand-taupe mt-1">LiFePO4 6,000+ Deep Cycle</p>
          </div>
        </div>
      </div>

      {/* Contact & Dispatch Form */}
      <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 sm:p-10 shadow-card">
        <h3 className="font-heading font-bold text-2xl text-brand-black">
          Submit for Registered Engineer Sizing Review
        </h3>
        <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
          A certified project engineer will review your load parameters and deliver an itemized Bill of Quantities (BOQ).
        </p>

        {submitted ? (
          <div className="my-8 p-8 border border-brand-slate bg-brand-slate/10 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-brand-slate mx-auto" />
            <h4 className="font-heading font-bold text-xl text-brand-black">
              Engineering Sizing Request Received
            </h4>
            <p className="font-sans font-light text-sm text-brand-black/80 max-w-md mx-auto">
              Thank you, {formData.name}. Our lead technical division in {formData.location} will contact you shortly with single-line engineering specifications.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/2348082312819?text=${whatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Accelerate Review on WhatsApp: 08082312819</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans text-brand-black/80 mb-1">
                  Full Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief Babatunde Adeleke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm focus:border-brand-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans text-brand-black/80 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0808 231 2819"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm focus:border-brand-black focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans text-brand-black/80 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="babatunde@company.ng"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm focus:border-brand-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans text-brand-black/80 mb-1">
                  Installation City &amp; State *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm focus:border-brand-black focus:outline-none"
                >
                  <option value="Lagos (Island/Lekki/Ikoyi/Epe)">Lagos (Island / Lekki / Ikoyi / Epe)</option>
                  <option value="Lagos (Mainland/Ikeja/Magodo)">Lagos (Mainland / Ikeja / Magodo)</option>
                  <option value="Abuja FCT (Garki/Maitama/Guzape)">Abuja FCT (Garki / Maitama / Guzape)</option>
                  <option value="Rivers (Port Harcourt / Old GRA)">Rivers (Port Harcourt / Old GRA)</option>
                  <option value="Kano / Kaduna / Northern Hubs">Kano / Kaduna / Northern Hubs</option>
                  <option value="Other Nigerian State">Other Nigerian State (Nationwide)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans text-brand-black/80 mb-1">
                Preferred Installation Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Urgent • Within 7 Days",
                  "Standard • Within 30 Days",
                  "Budgeting / Future Planning",
                ].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: time })}
                    className={`py-2 px-3 text-xs border text-left ${
                      formData.timeline === time
                        ? "border-brand-black bg-brand-black text-brand-offwhite font-medium"
                        : "border-brand-taupe/30 hover:border-brand-taupe text-brand-black/80"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans text-brand-black/80 mb-1">
                Site Conditions &amp; Specific Details
              </label>
              <textarea
                rows={3}
                placeholder="Mention your existing generator capacity (e.g. 20kVA Perkins), roof type (corrugated zinc, stone-coated tile, concrete decking), or daily grid hours..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm focus:border-brand-black focus:outline-none"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-red-600 bg-red-50 p-2.5 border border-red-200">
                {errorMessage}
              </p>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-black transition-colors disabled:opacity-50"
              >
                {submitting ? "Calculating & Transmitting..." : "Calculate & Send Official Engineering Quote"}
              </button>

              <a
                href={`https://wa.me/2348082312819?text=${whatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-brand-taupe/40 text-brand-black font-heading text-xs font-medium tracking-wide hover:border-brand-black transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-slate" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
