import { CONTACT_INFO, NAV_LINKS } from "@/constants/data";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#hero" className="text-3xl font-black text-white tracking-tighter mb-6 block">
              INTI <span className="text-primary italic">SPEED</span>
            </a>
            <p className="mb-8 leading-relaxed text-lg">
              Bengkel spesialis tune up dan perawatan mesin terpercaya di Bandung. Kami memberikan solusi terbaik untuk performa kendaraan Anda dengan standar tinggi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-primary hover:border-primary transition-all text-white group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-primary hover:border-primary transition-all text-white group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Navigasi</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Kontak Kami</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <span>{CONTACT_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span>info@intispeed.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Lokasi Kami</h3>
            <div className="rounded-[2rem] overflow-hidden h-60 border border-white/10 shadow-2xl group">
              <iframe
                src={CONTACT_INFO.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Inti Speed Bengkel Mobil"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-sm font-medium tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} Inti Speed Bengkel Mobil. All rights reserved. <br className="sm:hidden" /> Made with Precision in Bandung.</p>
        </div>
      </div>
    </footer>
  );
}
