import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-brand-black text-brand-offwhite/80 border-b border-brand-black/60 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="mailto:godfirst.groupltd@gmail.com"
            className="flex items-center gap-1.5 hover:text-brand-offwhite transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-taupe" />
            <span className="hidden sm:inline">godfirst.groupltd@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>

          <a
            href="tel:08082312819"
            className="flex items-center gap-1.5 hover:text-brand-offwhite transition-colors font-medium text-brand-offwhite"
          >
            <Phone className="w-3.5 h-3.5 text-brand-taupe" />
            <span>08082312819</span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-brand-taupe">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nigeria (Lagos • Abuja • Port Harcourt)</span>
          </div>
        </div>

        {/* Right: WhatsApp direct channel */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/2348082312819"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-offwhite/90 hover:text-brand-offwhite transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-brand-taupe" />
            <span className="font-sans font-light tracking-wide">WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
