"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, BLOG_DATA } from "@/data/solarData";
import {
  Users,
  Layers,
  FileText,
  Activity,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [leadsCount] = useState(148);
  const [activeSites] = useState(28);
  const [cleanHarvestMwh] = useState(4.82);

  // Recent leads matching the Stitch domain context (Banana Island, Garki Abuja, Challawa Kano, etc.)
  const recentLeads = [
    {
      id: "lead-1",
      name: "Chief Babatunde Adeleke",
      facility: "Luxury Waterfront Villa",
      location: "Banana Island, Ikoyi, Lagos",
      spec: "15kVA Tri-Phase Hybrid (20kWh LiFePO4)",
      value: "₦18,500,000",
      stage: "Deposit Received",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      phone: "08082312819",
      date: "Today, 10:45 AM",
    },
    {
      id: "lead-2",
      name: "Dr. Grace Nnamdi",
      facility: "Life Care Clinic ICU Hub",
      location: "Garki Area 11, Abuja FCT",
      spec: "25kVA Medical Grade (35kWh Storage)",
      value: "₦31,200,000",
      stage: "Site Survey Complete",
      statusColor: "text-brand-slate bg-brand-slate/10 border-brand-slate/20",
      phone: "08082312819",
      date: "Yesterday",
    },
    {
      id: "lead-3",
      name: "Alh. Bello Danjuma",
      facility: "Kano Grain Mill & Storage",
      location: "Challawa Industrial, Kano",
      spec: "50kVA Agro Industrial (60kWp Array)",
      value: "₦62,000,000",
      stage: "Audit Scheduled",
      statusColor: "text-amber-800 bg-amber-50 border-amber-200",
      phone: "08082312819",
      date: "Nov 3, 2026",
    },
    {
      id: "lead-4",
      name: "Engr. Tunde Oladipo",
      facility: "Residential 5-Bed Duplex",
      location: "Magodo Phase 2, Lagos",
      spec: "7.5kVA Home Plus (10kWh LiFePO4)",
      value: "₦8,950,000",
      stage: "Quote Sent",
      statusColor: "text-blue-800 bg-blue-50 border-blue-200",
      phone: "08082312819",
      date: "Nov 2, 2026",
    },
    {
      id: "lead-5",
      name: "Heritage Suites Hotel",
      facility: "42-Room Hospitality Hub",
      location: "Old GRA, Port Harcourt",
      spec: "30kVA Dual Parallel (45kWh LiFePO4)",
      value: "₦48,000,000",
      stage: "Sizing Calculation",
      statusColor: "text-purple-800 bg-purple-50 border-purple-200",
      phone: "08082312819",
      date: "Nov 1, 2026",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            COMMAND &amp; TELEMETRY • NIGERIA OPERATIONS
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Operations Command Center
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Manage nationwide solar deployments, inbound quotes, field technicians, and system telemetry across Abuja, Lagos, Port Harcourt, and Kano.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
          >
            Review Inbound Quotes
          </Link>
          <a
            href="https://wa.me/2348082312819"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 border border-brand-taupe/40 text-brand-black text-xs font-heading font-medium hover:border-brand-black transition-colors"
          >
            Field Dispatch Hotline
          </a>
        </div>
      </div>

      {/* Metric Cards (Foundation Black, Slate, Off-White) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric 1 */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-brand-slate mb-3">
              <span className="font-sans font-light uppercase tracking-wider text-[10px]">Pipeline &amp; Audits</span>
              <Users className="w-4 h-4" />
            </div>
            <p className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">{leadsCount}</p>
            <p className="text-xs font-sans text-emerald-800 font-medium mt-1">+22% this week (₦184.2M value)</p>
          </div>
          <p className="text-[11px] font-sans text-brand-taupe mt-4 pt-3 border-t border-brand-taupe/15">
            34 prospects awaiting on-site solar audit dispatch
          </p>
        </div>

        {/* Metric 2 */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-brand-slate mb-3">
              <span className="font-sans font-light uppercase tracking-wider text-[10px]">Active Sites</span>
              <Layers className="w-4 h-4" />
            </div>
            <p className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">{activeSites}</p>
            <p className="text-xs font-sans text-brand-black/70 mt-1">12 Lagos • 8 Abuja • 5 PH • 3 Ibadan</p>
          </div>
          <p className="text-[11px] font-sans text-brand-taupe mt-4 pt-3 border-t border-brand-taupe/15">
            Banana Island, Maitama &amp; Ikeja priority
          </p>
        </div>

        {/* Metric 3 */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-brand-slate mb-3">
              <span className="font-sans font-light uppercase tracking-wider text-[10px]">Clean Energy Harvest</span>
              <Activity className="w-4 h-4" />
            </div>
            <p className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">{cleanHarvestMwh} MWh</p>
            <p className="text-xs font-sans text-brand-black/70 mt-1">2,450L Diesel Saved Today</p>
          </div>
          <p className="text-[11px] font-sans text-brand-taupe mt-4 pt-3 border-t border-brand-taupe/15">
            Calculated across 410 active microgrids
          </p>
        </div>

        {/* Metric 4 */}
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-brand-slate mb-3">
              <span className="font-sans font-light uppercase tracking-wider text-[10px]">COREN Field Engineers</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">16 / 18</p>
            <p className="text-xs font-sans text-brand-black/70 mt-1">88.8% Mobilized (2 Standby)</p>
          </div>
          <p className="text-[11px] font-sans text-brand-taupe mt-4 pt-3 border-t border-brand-taupe/15">
            NEMSA electrical compliance certs validated
          </p>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="border border-brand-taupe/30 bg-brand-offwhite shadow-card">
        <div className="p-6 border-b border-brand-taupe/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
              INCOMING INQUIRIES
            </span>
            <h2 className="font-heading font-bold text-xl text-brand-black mt-0.5">
              Recent Quote Inquiries &amp; Energy Audits
            </h2>
          </div>
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black"
          >
            <span>View All Leads Pipeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-brand-divine/40 border-b border-brand-taupe/20 text-brand-black/80 font-heading font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-6">Client &amp; Facility</th>
                <th className="py-3.5 px-6">Location</th>
                <th className="py-3.5 px-6">Sizing &amp; Hardware Spec</th>
                <th className="py-3.5 px-6">Contract Value</th>
                <th className="py-3.5 px-6">Pipeline Stage</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-taupe/15">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-brand-divine/15 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-brand-black text-sm">{lead.name}</p>
                    <p className="text-[11px] text-brand-black/60">{lead.facility}</p>
                  </td>
                  <td className="py-4 px-6 text-brand-black/80">{lead.location}</td>
                  <td className="py-4 px-6 text-brand-black/80 font-medium">{lead.spec}</td>
                  <td className="py-4 px-6 font-heading font-semibold text-brand-black">{lead.value}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-2.5 py-1 text-[10.5px] font-medium border ${lead.statusColor}`}
                    >
                      {lead.stage}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    <a
                      href={`https://wa.me/2348082312819?text=Hello%20${encodeURIComponent(
                        lead.name
                      )},%20this%20is%20Godfirst%20Solar%20following%20up%20on%20your%20quote.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 inline-block text-brand-slate hover:text-brand-black border border-brand-taupe/30 hover:border-brand-black transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${lead.phone}`}
                      className="p-1.5 inline-block text-brand-slate hover:text-brand-black border border-brand-taupe/30 hover:border-brand-black transition-colors"
                      title="Call Client"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Operations Dispatch & Grid Stability Notice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle">
          <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
            ENGINEERING ROSTER
          </span>
          <h3 className="font-heading font-bold text-lg text-brand-black mt-1">
            Active Regional Technicians
          </h3>
          <div className="space-y-3 mt-4 text-xs font-sans">
            <div className="flex items-center justify-between p-2.5 border border-brand-taupe/20 bg-brand-divine/20">
              <div>
                <p className="font-medium text-brand-black">Engr. Femi Alabi (COREN)</p>
                <p className="text-[11px] text-brand-black/60">Lead Specialist • Lagos West (Lekki Hub)</p>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-medium">
                Active On Site
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 border border-brand-taupe/20 bg-brand-divine/20">
              <div>
                <p className="font-medium text-brand-black">Engr. Amina Bello (COREN)</p>
                <p className="text-[11px] text-brand-black/60">HV Earthing &amp; BMS • Abuja FCT Hub</p>
              </div>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-medium">
                En Route Garki
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 border border-brand-taupe/20 bg-brand-divine/20">
              <div>
                <p className="font-medium text-brand-black">Engr. Chinedu Eze (COREN)</p>
                <p className="text-[11px] text-brand-black/60">Inverter Diagnostics • Niger Delta Depot</p>
              </div>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-800 text-[10px] font-medium">
                Depot Standby
              </span>
            </div>
          </div>
        </div>

        <div className="border border-brand-black bg-brand-black text-brand-offwhite p-6 shadow-card">
          <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
            OPERATIONS DESK
          </span>
          <h3 className="font-heading font-bold text-lg text-brand-offwhite mt-1">
            Grid Stability &amp; Telemetry Feed
          </h3>
          <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
            Active generator offset is operating at 84.6% across Abuja, Lagos, and Niger Delta monitored sites. Modbus and MQTT streaming active with zero critical busbar excursions in the last 24 hours.
          </p>

          <div className="mt-6 pt-4 border-t border-brand-taupe/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <span className="text-brand-taupe">Operations Hotline: 08082312819</span>
            <a
              href="https://wa.me/2348082312819"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-slate text-brand-offwhite hover:bg-brand-offwhite hover:text-brand-black transition-colors"
            >
              <span>Field WhatsApp Channel</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

