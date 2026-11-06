"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, Copy, Check, Trash2, ExternalLink } from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  size: string;
  date: string;
}

const INITIAL_MEDIA: MediaItem[] = [
  {
    id: "media-1",
    name: "lagos-luxury-villa-panels.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE3r-KkMOZWvJVfOMh0NpqwM_GRFcsSQ-NQ28mxKwVi4FCaI5ID1SXk5FOVoa8TUqHLiTQF3oLa5vmQ8hmaxj2yBNceJ5zXbAUpcVT1YY9vcojTNjBrlMZ289y3Wr8Bxgq-fBZT3nVwUVq6np3odzE45tQCxlzm8fzvKNs-V_-f3NQ6hFpSc7ViUBi7XZeux4uPLcdBfNFrfKPuqbHvikX3PQMgbqGTk6ArsjK0g",
    size: "1.4 MB",
    date: "2026-11-05",
  },
  {
    id: "media-2",
    name: "garki-clinic-hospital-array.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZmcUTvLIYpaZjoblxrZsWec1y4ZZsdQ-kdSGIC5kXkCB2gdpZSWex99CKdi7MvqGca7E2T2kcjJmRe00wYOHyIpBRtGGENOka-4JrPzn10d6Jk4nrsLJDbT3POuC76zRdb2cqBNdOQLyk4VMOCA1NLQ_bHjmdYNMk4qdHD0Bz2X8q9hNvCRg0zY902kO6y-jWfVHi1jsfZV4YLHln9QZmS_9AzJCMVLXxAxlEQ",
    size: "2.1 MB",
    date: "2026-11-04",
  },
  {
    id: "media-3",
    name: "kano-grain-mill-solar-field.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN4DWW_eHFKzYKRM4bbPbmFer2VvDVpmGPISkZs5wCEoZAzLOd0v8GXY9DRdaEJgHnWmCPsGd9Iik_FhzktfA5ZbZQ3XHBq9PXmC7o83xvErtdLPWe8QxdlwFPhzpzwgYWvxaiCTs11BaB3yqERnbzgMBxqjhF_p4AoNedrNjOu1ljAIugXbzW_pS33mCbw3Hech5WUGWA1f1McumAvUNT3W-Iwy6czdst5G4oQ",
    size: "1.8 MB",
    date: "2026-11-03",
  },
  {
    id: "media-4",
    name: "magodo-duplex-lithium-rack.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqlV67BRufSI30EfQ47E2ljUmgvRP0cqETdU80kvxGKRV-wHSzf60bIW-WtBzmlmcTi3zNYGzaQ22FyFbVDeoTy28a8ZUvzrM7lmrcP59AF_Q7dk6z-D5rWivDflRgnHqXvVS6u38GdeYZWM7kNDeI0rjnLjJtyq51Jyyg4PQPWFxGM-R2j3PQ5tsLyyPbz6aVBD7aDA3c3hhGCauvfah1_FnItH6rQZ213jFeCA",
    size: "1.2 MB",
    date: "2026-11-02",
  },
];

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<MediaItem[]>(INITIAL_MEDIA);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-taupe/20 pb-6">
        <div>
          <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-slate">
            STORAGE ASSETS
          </span>
          <h1 className="font-heading font-bold text-3xl text-brand-black tracking-tight mt-1">
            Media Library
          </h1>
          <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
            Store and manage high-resolution site photography, single-line diagrams, and equipment certifications.
          </p>
        </div>

        <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-black text-brand-offwhite text-xs font-heading font-semibold hover:bg-brand-slate transition-colors cursor-pointer">
          <Upload className="w-3.5 h-3.5" />
          <span>Upload Image Asset</span>
          <input type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mediaList.map((item) => (
          <div
            key={item.id}
            className="border border-brand-taupe/30 bg-brand-offwhite shadow-subtle flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="relative h-44 w-full bg-brand-black">
                <Image src={item.url} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="font-heading font-semibold text-xs text-brand-black truncate">
                  {item.name}
                </p>
                <p className="text-[10px] font-sans text-brand-taupe mt-1">
                  {item.size} • {item.date}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-brand-taupe/15 flex items-center justify-between">
              <button
                onClick={() => copyUrl(item.id, item.url)}
                className="inline-flex items-center gap-1 text-[11px] font-heading font-medium text-brand-slate hover:text-brand-black"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-brand-taupe hover:text-brand-black"
                title="Open image"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

