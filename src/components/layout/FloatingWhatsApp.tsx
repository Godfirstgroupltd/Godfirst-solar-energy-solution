import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick Communication" className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/2348082312819?text=Hello%20Godfirst%20Solar,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20solution."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-brand-black text-brand-offwhite border border-brand-taupe/30 shadow-card hover:bg-brand-slate transition-all duration-300"
        aria-label="Chat with Godfirst Solar on WhatsApp: 08082312819"
      >
        {/* Lucide MessageSquare or clean line icon (no bright green, no sun/bulb/cross) */}
        <MessageSquare className="w-5 h-5 text-brand-offwhite shrink-0" />
        <div className="flex flex-col text-left">
          <span className="font-heading font-semibold text-xs tracking-wide text-brand-offwhite">
            WhatsApp Desk
          </span>
          <span className="font-sans font-light text-[10px] text-brand-taupe">
            08082312819
          </span>
        </div>
      </a>
    </aside>
  );
}
