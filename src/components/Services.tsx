import { Zap, ShieldCheck, Wrench, Activity, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/constants/data";

const ICON_MAP = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
  Activity: Activity,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Layanan Kami</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Solusi Perawatan Lengkap</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Gunakan teknologi terbaru dan tenaga ahli untuk memastikan performa kendaraan Anda tetap di level tertinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Activity;
            return (
              <Card key={index} className="group relative border-none shadow-sm hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-2 h-0 bg-primary transition-all duration-300 group-hover:h-full" />
                <CardHeader className="pt-8">
                  <div className="p-4 bg-primary/5 rounded-2xl w-fit mb-4 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <a href="#booking" className="inline-flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Booking Sekarang <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
