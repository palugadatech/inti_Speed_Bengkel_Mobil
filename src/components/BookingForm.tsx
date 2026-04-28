import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT_INFO } from "@/constants/data";
import { MessageCircle, Calendar, MapPin, Phone } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Inti Speed, saya ${formData.name}. Saya ingin booking service untuk keluhan: ${formData.issue}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50">
          <div className="w-full lg:w-[40%] p-10 lg:p-14 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Reservasi</h2>
              <h3 className="text-4xl font-extrabold mb-8 text-white leading-tight">Booking Service Sekarang</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Jadwalkan perawatan kendaraan Anda hari ini untuk menghindari antrean. Kami akan segera menghubungi Anda kembali.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Alamat Kami</p>
                    <p className="text-slate-200">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Hubungi Kami</p>
                    <p className="text-slate-200">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Jam Operasional</p>
                    <p className="text-slate-200">Senin - Sabtu: 08.00 - 17.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[60%] p-10 lg:p-14 bg-white flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-slate-900 font-bold text-base flex items-center gap-2">
                    Nama Lengkap <span className="text-primary">*</span>
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="Contoh: Budi Santoso" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 border-slate-200 rounded-2xl px-6 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="issue" className="text-slate-900 font-bold text-base flex items-center gap-2">
                    Keperluan / Keluhan Mobil <span className="text-primary">*</span>
                  </Label>
                  <textarea 
                    id="issue" 
                    placeholder="Contoh: Mau tune up ++ karena tarikan mesin terasa berat..." 
                    required 
                    rows={5}
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full min-h-[150px] rounded-[1.5rem] border border-slate-200 bg-white px-6 py-4 text-lg shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-extrabold text-xl rounded-2xl shadow-xl shadow-primary/20 group transition-all hover:scale-[1.02]">
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform" />
                Kirim via WhatsApp
              </Button>
              
              <p className="text-center text-slate-400 text-sm">
                * Data Anda aman dan hanya digunakan untuk keperluan booking service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
