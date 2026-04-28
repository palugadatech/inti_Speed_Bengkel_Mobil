import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/constants/data";

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Testimoni</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Apa Kata Pelanggan?</h3>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-white font-bold text-lg">4.8</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-400 ml-2">(+500 Ulasan Google)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm relative pt-12 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <div className="absolute top-0 left-10 -translate-y-1/2 bg-primary p-4 rounded-2xl shadow-xl">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-primary text-sm font-medium uppercase tracking-wider">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
