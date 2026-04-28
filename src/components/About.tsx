import { CheckCircle2 } from "lucide-react";

export default function About() {
  const benefits = [
    "Pelayanan Ramah & Edukatif",
    "Diagnosa Akurat",
    "Transparansi Biaya",
    "Solusi Terpercaya",
    "Tidak Asal Ganti Part",
    "Pengerjaan Detail"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 -z-10" />
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-2 transition-transform group-hover:rotate-0" />
            <img 
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=1200" 
              alt="Bengkel Inti Speed" 
              className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="text-4xl font-bold block">10+</span>
              <span className="text-sm font-medium uppercase tracking-wider">Tahun Pengalaman</span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Tentang Inti Speed</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
              Bengkel Spesialis Performa <span className="text-primary">&</span> Efisiensi
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                Bengkel spesialis di Bandung yang dipimpin oleh <span className="font-bold text-slate-900">Om Benny</span>. 
                Kami bangga dikenal karena pelayanan yang ramah, edukatif, dan transparan.
              </p>
              <p>
                Filosofi kami adalah <span className="italic text-primary font-medium">"Fix properly, not parts changing blindly"</span>. 
                Kami fokus pada solusi tarikan mesin enteng dan efisiensi BBM maksimal tanpa pemborosan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:border-primary/30">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
