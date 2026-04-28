import { GALLERY_IMAGES } from "@/constants/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Galeri Kami</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Aktivitas Bengkel</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Setiap pengerjaan dilakukan dengan standar tinggi dan ketelitian maksimal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-lg h-[350px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={image} 
                alt={`Aktivitas Bengkel ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <span className="px-6 py-2 bg-white text-primary font-bold rounded-full shadow-xl">
                  Lihat Detail
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/30">
            Lihat Lebih Banyak di Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
