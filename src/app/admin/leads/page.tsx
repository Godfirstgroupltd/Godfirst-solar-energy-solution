"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Download,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Plus,
  X,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  peakDemandKw: number;
  recInverterKva: number;
  recBatteryKwh: number;
  status: "New" | "Contacted" | "Quoted" | "Won" | "Lost";
  timeline: string;
  notes: string;
  created_at: string;
}

const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-001",
    name: "Chief Babatunde Adeleke",
    phone: "08082312819",
    email: "babatunde.adeleke@gmail.com",
    location: "Banana Island, Ikoyi, Lagos",
    service: "Home Plus (Custom 15kVA)",
    peakDemandKw: 8.5,
    recInverterKva: 15,
    recBatteryKwh: 20.4,
    status: "Won",
    timeline: "Urgent • Within 7 Days",
    notes: "Deposit received. Client requested marine-grade anodized rails due to lagoon proximity.",
    created_at: "2026-11-05 09:30",
  },
  {
    id: "lead-002",
    name: "Dr. Grace Nnamdi",
    phone: "08082312819",
    email: "dr.nnamdi@lifecare.ng",
    location: "Garki Area 11, Abuja FCT",
    service: "Commercial / Healthcare Microgrid",
    peakDemandKw: 16.2,
    recInverterKva: 25,
    recBatteryKwh: 35.0,
    status: "Quoted",
    timeline: "Standard • Within 30 Days",
    notes: "Sent BOQ for 25kVA hospital ICU backup. Board review scheduled for Friday.",
    created_at: "2026-11-04 14:15",
  },
  {
    id: "lead-003",
    name: "Alh. Bello Danjuma",
    phone: "08082312819",
    email: "bello.danjuma@kanograins.ng",
    location: "Challawa Industrial, Kano",
    service: "Commercial Hub (50kVA Parallel)",
    peakDemandKw: 38.0,
    recInverterKva: 50,
    recBatteryKwh: 80.0,
    status: "Contacted",
    timeline: "Urgent • Within 7 Days",
    notes: "Conducted initial phone load review. Dispatched Kano engineer for site transformer reading.",
    created_at: "2026-11-03 11:20",
  },
  {
    id: "lead-004",
    name: "Engr. Tunde Oladipo",
    phone: "08082312819",
    email: "tunde.oladipo@outlook.com",
    location: "Magodo Phase 2, Lagos",
    service: "Home Plus",
    peakDemandKw: 5.4,
    recInverterKva: 7.5,
    recBatteryKwh: 10.24,
    status: "Quoted",
    timeline: "Standard • Within 30 Days",
    notes: "Requires 2 Inverter ACs and 1HP borehole pump. Roof has clear south orientation.",
    created_at: "2026-11-02 16:45",
  },
  {
    id: "lead-005",
    name: "Heritage Suites Hotel",
    phone: "08082312819",
    email: "gm@heritagesuites.ng",
    location: "Old GRA, Port Harcourt",
    service: "Commercial Hub (30kVA Dual)",
    peakDemandKw: 22.0,
    recInverterKva: 30,
    recBatteryKwh: 45.0,
    status: "New",
    timeline: "Standard • Within 30 Days",
    notes: "Inbound quote from load calculator. Looking to eliminate 100kVA generator nocturnal rumble.",
    created_at: "2026-11-01 10:10",
  },
];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editingNotes, setEditingNotes] = useState("");

  // Fetch live leads from Supabase on mount
  useEffect(() => {
    async function fetchLiveLeads() {
      try {
        const res = await fetch("/api/admin/leads");
        if (res.ok) {
          const data = await res.json();
          if (data.leads && data.leads.length > 0) {
            const mappedLeads: Lead[] = data.leads.map((l: any) => ({
              id: l.id,
              name: l.name,
              phone: l.phone,
              email: l.email,
              location: l.location,
              service: l.service,
              peakDemandKw: Number(l.peak_demand_kw) || 0,
              recInverterKva: Number(l.rec_inverter_kva) || 0,
              recBatteryKwh: Number(l.rec_battery_kwh) || 0,
              status: l.status || "New",
              timeline: l.timeline || "Standard",
              notes: l.notes || "",
              created_at: new Date(l.created_at).toLocaleString(),
            }));
            // Merge live leads with existing demo leads (avoiding duplicates)
            setLeads((prev) => {
              const existingIds = new Set(prev.map((item) => item.id));
              const newItems = mappedLeads.filter((m) => !existingIds.has(m.id));
              return [...newItems, ...prev];
            });
          }
        }
      } catch (e) {
        // Fallback to static
      }
    }
    fetchLiveLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateStatus = async (leadId: string, newStatus: Lead["status"]) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
    try {
      await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
    } catch (e) {
      // Ignored in offline
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    const leadId = selectedLead.id;
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, notes: editingNotes } : l))
    );
    setSelectedLead((prev) => (prev ? { ...prev, notes: editingNotes } : null));
    try {
      await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, notes: editingNotes }),
      });
    } catch (e) {
      // Ignored in offline
    }
  };

  const exportCSV = () => {
    const headers = ["ID", "Name", "Phone", "Email", "Location", "Service", "Demand (kW)", "Inverter (kVA)", "Battery (kWh)", "Status", "Date", "Notes"];
    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.name}"`,
      l.phone,
      l.email,
      `"${l.location}"`,
      `"${l.service}"`,
      l.peakDemandKw,
      l.recInverterKva,
      l.recBatteryKwh,
      l.status,
      l.created_at,
      `"${l.notes.replace(/"/g, '""')}"`,
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `godfirst_solar_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusBadge = (status: Lead["status"]) => {
    switch (status) {
      case "New":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Contacted":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Quoted":
        return "bg-purple-50 text-purple-800 border-purple-200";
      case "Won":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Lost":
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            CLIENT PIPELINE &amp; SIZING INVENTORY
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Leads &amp; Quote Inquiries
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Filter, triage, and track customer engineering quotes across all Nigerian operations hubs.
          </p>
        </div>

        <button
          onClick={exportCSV}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-brand-taupe absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by client name, location, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-brand-offwhite border border-brand-taupe/40 text-xs text-brand-black focus:border-brand-black focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
          <span className="text-xs font-sans text-brand-taupe shrink-0">Status:</span>
          {["All", "New", "Contacted", "Quoted", "Won", "Lost"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 text-xs font-sans tracking-wide border transition-colors ${
                statusFilter === st
                  ? "bg-brand-black text-brand-offwhite border-brand-black font-medium"
                  : "bg-brand-offwhite text-brand-black/70 border-brand-taupe/30 hover:border-brand-black"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="border border-brand-taupe/30 bg-brand-offwhite shadow-card overflow-x-auto">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-brand-divine/40 border-b border-brand-taupe/20 text-brand-black/80 font-heading font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3.5 px-6">Client Name &amp; Contact</th>
              <th className="py-3.5 px-6">Location</th>
              <th className="py-3.5 px-6">Service / Package</th>
              <th className="py-3.5 px-6">Calibrated Sizing</th>
              <th className="py-3.5 px-6">Status</th>
              <th className="py-3.5 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-taupe/15">
            {filteredLeads.map((lead) => (
              <tr
                key={lead.id}
                onClick={() => {
                  setSelectedLead(lead);
                  setEditingNotes(lead.notes);
                }}
                className="hover:bg-brand-divine/15 cursor-pointer transition-colors"
              >
                <td className="py-4 px-6">
                  <p className="font-semibold text-brand-black text-sm">{lead.name}</p>
                  <p className="text-[11px] text-brand-black/60">{lead.phone} • {lead.email}</p>
                </td>
                <td className="py-4 px-6 text-brand-black/80">{lead.location}</td>
                <td className="py-4 px-6 text-brand-black/80 font-medium">{lead.service}</td>
                <td className="py-4 px-6">
                  <span className="font-heading font-semibold text-brand-black">{lead.recInverterKva} kVA</span>
                  <span className="text-brand-taupe ml-1">({lead.recBatteryKwh} kWh)</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-block px-2.5 py-1 text-[10px] font-medium border ${statusBadge(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right space-x-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={`https://wa.me/2348082312819?text=Hello%20${encodeURIComponent(
                      lead.name
                    )},%20this%20is%20Godfirst%20Solar%20following%20up%20on%20your%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 inline-block text-brand-slate hover:text-brand-black border border-brand-taupe/30 hover:border-brand-black transition-colors"
                    title="Direct WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${lead.phone}`}
                    className="p-1.5 inline-block text-brand-slate hover:text-brand-black border border-brand-taupe/30 hover:border-brand-black transition-colors"
                    title="Call"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Lead Drawer / Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="bg-brand-offwhite w-full max-w-xl h-full p-6 sm:p-8 overflow-y-auto border-l border-brand-taupe/30 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-taupe/20">
                <div>
                  <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate">
                    LEAD SPECIFICATION DOSSIER
                  </span>
                  <h2 className="font-heading font-bold text-xl text-brand-black mt-0.5">
                    {selectedLead.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 text-brand-black/60 hover:text-brand-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Picker */}
              <div>
                <label className="block text-xs font-sans text-brand-black/80 mb-2 font-medium">
                  Pipeline Status
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {(["New", "Contacted", "Quoted", "Won", "Lost"] as Lead["status"][]).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleUpdateStatus(selectedLead.id, st)}
                      className={`py-1.5 text-xs text-center border font-medium transition-colors ${
                        selectedLead.status === st
                          ? "bg-brand-black text-brand-offwhite border-brand-black"
                          : "border-brand-taupe/30 hover:border-brand-black text-brand-black/70"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20 space-y-2 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Phone:</span>
                  <span className="font-medium text-brand-black">{selectedLead.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Email:</span>
                  <span className="font-medium text-brand-black">{selectedLead.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Location:</span>
                  <span className="font-medium text-brand-black">{selectedLead.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Timeline:</span>
                  <span className="font-medium text-brand-black">{selectedLead.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Logged Date:</span>
                  <span className="text-brand-black/70">{selectedLead.created_at}</span>
                </div>
              </div>

              {/* Sizing Blueprint */}
              <div className="p-4 border border-brand-taupe/20 bg-brand-offwhite space-y-3">
                <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider">
                  Calibrated Hardware Sizing
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 border border-brand-taupe/20 bg-brand-divine/15">
                    <p className="text-[10px] text-brand-taupe">Demand</p>
                    <p className="font-bold text-sm text-brand-black">{selectedLead.peakDemandKw} kW</p>
                  </div>
                  <div className="p-2 border border-brand-taupe/20 bg-brand-divine/15">
                    <p className="text-[10px] text-brand-taupe">Inverter</p>
                    <p className="font-bold text-sm text-brand-slate">{selectedLead.recInverterKva} kVA</p>
                  </div>
                  <div className="p-2 border border-brand-taupe/20 bg-brand-divine/15">
                    <p className="text-[10px] text-brand-taupe">Battery</p>
                    <p className="font-bold text-sm text-brand-black">{selectedLead.recBatteryKwh} kWh</p>
                  </div>
                </div>
              </div>

              {/* Notes Field */}
              <div>
                <label className="block text-xs font-sans text-brand-black/80 mb-1 font-medium">
                  Internal Engineering Notes
                </label>
                <textarea
                  rows={4}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  className="w-full p-3 bg-brand-offwhite border border-brand-taupe/40 text-xs text-brand-black focus:border-brand-black focus:outline-none"
                  placeholder="Add notes about site survey dates, transformer phase balance, roof tilt..."
                />
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="mt-2 px-4 py-2 bg-brand-slate text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-black transition-colors"
                >
                  Save Internal Notes
                </button>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-brand-taupe/20 flex items-center gap-3">
              <a
                href={`https://wa.me/2348082312819?text=Hello%20${encodeURIComponent(
                  selectedLead.name
                )},%20this%20is%20Godfirst%20Solar%20technical%20division.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Client</span>
              </a>
              <a
                href={`tel:${selectedLead.phone}`}
                className="flex-1 py-3 text-center border border-brand-taupe/40 text-brand-black text-xs font-heading font-semibold hover:border-brand-black transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Client</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

