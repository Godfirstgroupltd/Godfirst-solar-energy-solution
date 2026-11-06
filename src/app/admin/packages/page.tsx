"use client";

import { useState } from "react";
import { PACKAGES_DATA, PackageItem } from "@/data/solarData";
import { Plus, Edit2, Trash2, CheckCircle2, X } from "lucide-react";

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<PackageItem[]>(PACKAGES_DATA);
  const [editingItem, setEditingItem] = useState<PackageItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (isNew) {
      setPackages([...packages, { ...editingItem, id: `pkg-${Date.now()}` }]);
    } else {
      setPackages(packages.map((p) => (p.id === editingItem.id ? editingItem : p)));
    }
    setEditingItem(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this package configuration?")) {
      setPackages(packages.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            HARDWARE ARCHITECTURES
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Engineered Packages
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Configure standardized residential and commercial packages. No fixed prices; client requests quote.
          </p>
        </div>

        <button
          onClick={() => {
            setIsNew(true);
            setEditingItem({
              id: "",
              slug: "",
              name: "",
              tagline: "",
              category: "Residential",
              inverterCapacity: "",
              batteryStorage: "",
              solarArray: "",
              dailyHarvest: "",
              transferTime: "< 4ms",
              appliancesCovered: [""],
              technicalHighlights: [""],
            });
          }}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Package</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-sans text-brand-slate mb-2">
                <span className="font-mono text-[10px] text-brand-taupe">{pkg.category} Tier</span>
                {pkg.isFeatured && (
                  <span className="px-2 py-0.5 bg-brand-slate text-brand-offwhite text-[9px] uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="font-heading font-bold text-2xl text-brand-black">{pkg.name}</h2>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-1">{pkg.tagline}</p>

              <div className="my-4 py-3 border-y border-brand-taupe/20 space-y-1 text-xs font-sans">
                <p>
                  <strong className="text-brand-black">Inverter:</strong> {pkg.inverterCapacity}
                </p>
                <p>
                  <strong className="text-brand-black">Battery:</strong> {pkg.batteryStorage}
                </p>
                <p>
                  <strong className="text-brand-black">Solar PV:</strong> {pkg.solarArray}
                </p>
              </div>

              <div className="space-y-1 text-xs font-sans text-brand-black/80">
                <p className="font-semibold text-[11px] text-brand-black uppercase">Covered ({pkg.appliancesCovered.length}):</p>
                <p className="text-brand-black/70 truncate">{pkg.appliancesCovered[0]}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-taupe/20 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setIsNew(false);
                  setEditingItem(pkg);
                }}
                className="inline-flex items-center gap-1 text-xs font-heading font-medium text-brand-slate hover:text-brand-black"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(pkg.id)}
                className="inline-flex items-center gap-1 text-xs font-heading font-medium text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-brand-offwhite w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-brand-taupe/30 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-brand-taupe/20 mb-6">
              <h3 className="font-heading font-bold text-xl text-brand-black">
                {isNew ? "Create Package" : `Edit Package: ${editingItem.name}`}
              </h3>
              <button onClick={() => setEditingItem(null)} className="p-1 text-brand-black/60 hover:text-brand-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Package Name *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Category</label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value as any })}
                    className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Tagline</label>
                <input
                  type="text"
                  value={editingItem.tagline}
                  onChange={(e) => setEditingItem({ ...editingItem, tagline: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Inverter</label>
                  <input
                    type="text"
                    value={editingItem.inverterCapacity}
                    onChange={(e) => setEditingItem({ ...editingItem, inverterCapacity: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Battery Storage</label>
                  <input
                    type="text"
                    value={editingItem.batteryStorage}
                    onChange={(e) => setEditingItem({ ...editingItem, batteryStorage: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Solar PV Array</label>
                  <input
                    type="text"
                    value={editingItem.solarArray}
                    onChange={(e) => setEditingItem({ ...editingItem, solarArray: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs"
                  />
                </div>
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
                  Save Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

