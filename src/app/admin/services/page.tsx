"use client";

import { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/solarData";
import { Plus, Edit2, Trash2, Check, X, ShieldCheck } from "lucide-react";

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>(SERVICES_DATA);
  const [editingItem, setEditingItem] = useState<ServiceItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (isNew) {
      setServices([...services, { ...editingItem, id: `serv-${Date.now()}` }]);
    } else {
      setServices(services.map((s) => (s.id === editingItem.id ? editingItem : s)));
    }
    setEditingItem(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            TECHNICAL DIRECTORY
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Engineering Services
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Manage public engineering capabilities, technical specifications, and turnkey deliverables.
          </p>
        </div>

        <button
          onClick={() => {
            setIsNew(true);
            setEditingItem({
              id: "",
              slug: "",
              title: "",
              summary: "",
              iconName: "Grid3X3",
              description: "",
              specifications: [""],
              deliverables: [""],
              faqs: [],
            });
          }}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-sans text-brand-slate mb-2">
                <span className="font-mono text-[10px] text-brand-taupe">/{service.slug}</span>
                <span className="px-2 py-0.5 bg-brand-slate text-brand-offwhite text-[9.5px]">Published</span>
              </div>
              <h2 className="font-heading font-bold text-xl text-brand-black">{service.title}</h2>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                {service.summary}
              </p>

              <div className="mt-4 pt-3 border-t border-brand-taupe/15 space-y-1">
                <p className="text-[10px] font-sans font-semibold text-brand-black uppercase">
                  Specs ({service.specifications.length}):
                </p>
                <p className="text-xs font-sans text-brand-black/60 truncate">
                  {service.specifications[0]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-taupe/20 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setIsNew(false);
                  setEditingItem(service);
                }}
                className="inline-flex items-center gap-1 text-xs font-heading font-medium text-brand-slate hover:text-brand-black"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="inline-flex items-center gap-1 text-xs font-heading font-medium text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Create Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-brand-offwhite w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-brand-taupe/30 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-brand-taupe/20 mb-6">
              <h3 className="font-heading font-bold text-xl text-brand-black">
                {isNew ? "Create Engineering Service" : `Edit Service: ${editingItem.title}`}
              </h3>
              <button onClick={() => setEditingItem(null)} className="p-1 text-brand-black/60 hover:text-brand-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
                />
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">URL Slug *</label>
                <input
                  type="text"
                  required
                  value={editingItem.slug}
                  onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
                />
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Summary *</label>
                <textarea
                  rows={2}
                  required
                  value={editingItem.summary}
                  onChange={(e) => setEditingItem({ ...editingItem, summary: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs"
                />
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Detailed Engineering Overview</label>
                <textarea
                  rows={4}
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs"
                />
              </div>

              <div className="pt-4 border-t border-brand-taupe/20 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 border border-brand-taupe/40 text-brand-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-slate text-brand-offwhite font-heading font-semibold hover:bg-brand-black"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

