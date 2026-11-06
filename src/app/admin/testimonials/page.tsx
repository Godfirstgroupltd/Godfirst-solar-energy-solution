"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X, Star } from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  quote: string;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Dr. K. Alabi",
    role: "Medical Director",
    company: "Garki Clinic ICU",
    location: "Garki, Abuja FCT",
    quote:
      "In healthcare, a 10-second generator cutover can compromise life support. Godfirst delivered true sub-second transfer for our ICU clinic in Garki. Our monthly diesel budget plummeted from ₦1.4m to under ₦250k.",
  },
  {
    id: "test-2",
    author: "Engr. Femi Oladipo",
    role: "Head of Facilities",
    company: "Fintech Tower VI",
    location: "Victoria Island, Lagos",
    quote:
      "Our 50kVA installation at Victoria Island runs silently day and night. We have not bought diesel for our 150kVA backup genset in three weeks straight. Engineering precision at its absolute best.",
  },
  {
    id: "test-3",
    author: "Barr. Anita Danjuma",
    role: "Homeowner",
    company: "Waterfront Residence",
    location: "Banana Island, Ikoyi, Lagos",
    quote:
      "The Banana Island microgrid powers our inverter AC units all afternoon directly from the panels. The remote Victron dashboard allows me to track live consumption even when I am traveling abroad.",
  },
];

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (isNew) {
      setTestimonials([...testimonials, { ...editingItem, id: `test-${Date.now()}` }]);
    } else {
      setTestimonials(testimonials.map((t) => (t.id === editingItem.id ? editingItem : t)));
    }
    setEditingItem(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this verified testimonial?")) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            CLIENT FEEDBACK
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Testimonials &amp; Endorsements
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Manage verified client reviews and facility head testimonials displayed on the public site.
          </p>
        </div>

        <button
          onClick={() => {
            setIsNew(true);
            setEditingItem({
              id: "",
              author: "",
              role: "",
              company: "",
              location: "",
              quote: "",
            });
          }}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-brand-slate mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="font-sans font-light text-xs text-brand-black/80 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-taupe/20 flex items-center justify-between">
              <div>
                <p className="font-heading font-semibold text-xs text-brand-black">{t.author}</p>
                <p className="text-[11px] font-sans text-brand-taupe">{t.role}, {t.location}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsNew(false);
                    setEditingItem(t);
                  }}
                  className="p-1.5 text-brand-slate hover:text-brand-black"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="p-1.5 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-brand-offwhite w-full max-w-lg border border-brand-taupe/30 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-brand-taupe/20 mb-6">
              <h3 className="font-heading font-bold text-xl text-brand-black">
                {isNew ? "Add Client Endorsement" : "Edit Endorsement"}
              </h3>
              <button onClick={() => setEditingItem(null)} className="p-1 text-brand-black/60 hover:text-brand-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Author Name *</label>
                <input
                  type="text"
                  required
                  value={editingItem.author}
                  onChange={(e) => setEditingItem({ ...editingItem, author: e.target.value })}
                  className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Role / Title</label>
                  <input
                    type="text"
                    value={editingItem.role}
                    onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    value={editingItem.location}
                    onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Quote *</label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.quote}
                  onChange={(e) => setEditingItem({ ...editingItem, quote: e.target.value })}
                  className="w-full p-2.5 bg-brand-offwhite border border-brand-taupe/40 text-brand-black text-xs leading-relaxed"
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
                  Save Endorsement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

