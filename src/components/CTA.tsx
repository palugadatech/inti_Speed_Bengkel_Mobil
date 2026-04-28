import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";

export default function CTA() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Tooltip hint */}
      <div className="bg-white px-4 py-2 rounded-2xl shadow-2xl border border-slate-100 hidden md:block animate-bounce text-sm font-bold text-slate-800">
        Butuh bantuan? Chat kami! 👋
      </div>
      
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Chat WhatsApp"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />
        <MessageCircle className="w-8 h-8 relative z-10" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-xs group-hover:ml-3 font-bold text-lg">
          WhatsApp Kami
        </span>
      </a>
    </div>
  );
}
