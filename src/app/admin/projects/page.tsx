"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/data/solarData";
import { Plus, Edit2, Trash2, X, ExternalLink, MapPin } from "lucide-react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>(PROJECTS_DATA);
  const [editingItem, setEditingItem] = useState<ProjectItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (isNew) {
      setProjects([...projects, { ...editingItem, id: `proj-${Date.now()}` }]);
    } else {
      setProjects(projects.map((p) => (p.id === editingItem.id ? editingItem : p)));
    }
    setEditingItem(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this project case study?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            ENGINEERING SHOWCASE
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Field Projects
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Manage deployed sites, system ratings, client challenge/solution dossiers, and photography.
          </p>
        </div>

        <button
          onClick={() => {
            setIsNew(true);
            setEditingItem({
              id: "",
              slug: "",
              title: "",
              location: "",
              state: "",
              category: "Residential",
              systemSize: "",
              storageBank: "",
              coreHardware: "",
              dieselSavings: "",
              imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE3r-KkMOZWvJVfOMh0NpqwM_GRFcsSQ-NQ28mxKwVi4FCaI5ID1SXk5FOVoa8TUqHLiTQF3oLa5vmQ8hmaxj2yBNceJ5zXbAUpcVT1YY9vcojTNjBrlMZ289y3Wr8Bxgq-fBZT3nVwUVq6np3odzE45tQCxlzm8fzvKNs-V_-f3NQ6hFpSc7ViUBi7XZeux4uPLcdBfNFrfKPuqbHvikX3PQMgbqGTk6ArsjK0g",
              description: "",
              challenge: "",
              solution: "",
              results: [""],
            });
          }}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="border border-brand-taupe/30 bg-brand-offwhite shadow-subtle flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="relative h-44 w-full bg-brand-black">
                <Image src={proj.imageUrl} alt={proj.title} fill className="object-cover" />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-brand-black/80 text-brand-offwhite text-[9px]">
                  {proj.category}
                </div>
              </div>

              <div className="p-5">
                <span className="text-[10px] font-sans text-brand-slate flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{proj.location}, {proj.state}</span>
                </span>
                <h2 className="font-heading font-bold text-lg text-brand-black">{proj.title}</h2>
                <div className="mt-3 py-2 border-y border-brand-taupe/15 text-xs font-sans space-y-1">
                  <p><strong className="text-brand-black">Size:</strong> {proj.systemSize}</p>
                  <p><strong className="text-brand-black">Storage:</strong> {proj.storageBank}</p>
                  <p><strong className="text-brand-black">Savings:</strong> {proj.dieselSavings}</p>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-brand-taupe/15 flex items-center justify-between">
              <a
                href={`/projects/${proj.slug}`}
                target="_blank"
                className="text-xs text-brand-slate hover:underline flex items-center gap-1"
              >
                <span>Preview</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsNew(false);
                    setEditingItem(proj);
                  }}
                  className="text-xs font-heading font-medium text-brand-slate hover:text-brand-black flex items-center gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(proj.id)}
                  className="text-xs font-heading font-medium text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Delete</span>
                </button>
              </div>
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
                {isNew ? "Create Field Project Case Study" : `Edit: ${editingItem.title}`}
              </h3>
              <button onClick={() => setEditingItem(null)} className="p-1 text-brand-black/60 hover:text-brand-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.location}
                    onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">State *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.state}
                    onChange={(e) => setEditingItem({ ...editingItem, state: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">System Size</label>
                  <input
                    type="text"
                    value={editingItem.systemSize}
                    onChange={(e) => setEditingItem({ ...editingItem, systemSize: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Storage Bank</label>
                  <input
                    type="text"
                    value={editingItem.storageBank}
                    onChange={(e) => setEditingItem({ ...editingItem, storageBank: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Diesel Savings</label>
                  <input
                    type="text"
                    value={editingItem.dieselSavings}
                    onChange={(e) => setEditingItem({ ...editingItem, dieselSavings: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingItem.imageUrl}
                  onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                  className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                />
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
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
                  Save Project Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

