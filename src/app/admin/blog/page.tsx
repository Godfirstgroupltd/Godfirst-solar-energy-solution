"use client";

import { useState } from "react";
import { BLOG_DATA, BlogPostItem } from "@/data/solarData";
import { Plus, Edit2, Trash2, X, ExternalLink, Clock } from "lucide-react";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPostItem[]>(BLOG_DATA);
  const [editingItem, setEditingItem] = useState<BlogPostItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (isNew) {
      setPosts([...posts, { ...editingItem, id: `post-${Date.now()}` }]);
    } else {
      setPosts(posts.map((p) => (p.id === editingItem.id ? editingItem : p)));
    }
    setEditingItem(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this blog article?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            SOLAR INSIGHTS &amp; EDUCATION
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Blog Articles
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Manage educational engineering articles, sizing guides, and technical explanations.
          </p>
        </div>

        <button
          onClick={() => {
            setIsNew(true);
            setEditingItem({
              id: "",
              slug: "",
              title: "",
              category: "Load Engineering",
              readTime: "5 min read",
              date: "November 2026",
              excerpt: "",
              author: "Engr. Femi Alabi",
              authorRole: "Lead Technical Division",
              content: [""],
            });
          }}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Article</span>
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-brand-taupe/30 bg-brand-offwhite p-6 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 text-xs font-sans text-brand-slate mb-1">
                <span className="uppercase tracking-wider font-semibold text-[10px]">{post.category}</span>
                <span className="text-brand-taupe">•</span>
                <span className="flex items-center gap-1 text-brand-taupe text-[11px]">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </span>
                <span className="text-brand-taupe">•</span>
                <span className="text-brand-taupe text-[11px]">{post.date}</span>
              </div>
              <h2 className="font-heading font-bold text-lg text-brand-black">{post.title}</h2>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-1 line-clamp-2">
                {post.excerpt}
              </p>
              <p className="text-[11px] font-sans text-brand-taupe mt-2">
                By {post.author} ({post.authorRole})
              </p>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
              <a
                href={`/blog/${post.slug}`}
                target="_blank"
                className="text-xs text-brand-slate hover:underline flex items-center gap-1"
              >
                <span>Preview</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => {
                  setIsNew(false);
                  setEditingItem(post);
                }}
                className="px-3 py-1.5 border border-brand-taupe/40 text-xs font-heading font-medium hover:border-brand-black"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="px-3 py-1.5 text-xs font-heading font-medium text-red-600 hover:text-red-800"
              >
                Delete
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
                {isNew ? "Create Engineering Article" : `Edit: ${editingItem.title}`}
              </h3>
              <button onClick={() => setEditingItem(null)} className="p-1 text-brand-black/60 hover:text-brand-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Article Title *</label>
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
                  <label className="block text-brand-black/80 font-medium mb-1">Category</label>
                  <input
                    type="text"
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
                <div>
                  <label className="block text-brand-black/80 font-medium mb-1">Read Time</label>
                  <input
                    type="text"
                    value={editingItem.readTime}
                    onChange={(e) => setEditingItem({ ...editingItem, readTime: e.target.value })}
                    className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Excerpt *</label>
                <textarea
                  rows={2}
                  required
                  value={editingItem.excerpt}
                  onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
                  className="w-full p-2 bg-brand-offwhite border border-brand-taupe/40 text-brand-black"
                />
              </div>

              <div>
                <label className="block text-brand-black/80 font-medium mb-1">Article Content (Markdown / Text)</label>
                <textarea
                  rows={8}
                  value={editingItem.content.join("\n\n")}
                  onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value.split("\n\n") })}
                  className="w-full p-3 bg-brand-offwhite border border-brand-taupe/40 text-brand-black font-sans leading-relaxed text-xs"
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
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

