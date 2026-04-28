import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="container relative z-10 px-4 text-center text-white">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/20 border border-primary/30 rounded-full text-primary-foreground backdrop-blur-sm">
            Spesialis Tune Up & Perawatan Mesin
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Inti Speed <br className="hidden md:block" />
            <span className="text-primary italic">Bengkel Mobil</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Solusi Performa Mesin Optimal & Irit Bahan Bakar. <br className="hidden sm:block" />
            Dikerjakan oleh profesional dengan transparansi penuh.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105" asChild>
              <a href="#booking">Booking Service Sekarang</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-black font-bold px-10 py-7 text-lg rounded-xl backdrop-blur-sm transition-all hover:scale-105" asChild>
              <a href="#services">Lihat Layanan</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
