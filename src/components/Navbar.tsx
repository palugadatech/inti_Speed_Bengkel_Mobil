import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div 
        className={cn(
          "container mx-auto flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-primary/10 border border-white/20" 
            : "bg-transparent border-transparent"
        )}
      >
        <a href="#hero" className={cn(
          "text-2xl font-black tracking-tighter transition-all duration-500", 
          isScrolled ? "text-slate-900" : "text-white"
        )}>
          INTI <span className="text-primary italic">SPEED</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "font-bold text-sm uppercase tracking-widest transition-all hover:text-primary relative group",
                isScrolled ? "text-slate-700" : "text-white/90"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button size="sm" className="rounded-xl font-bold px-6 py-5 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            <a href="#booking">BOOKING</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-3 rounded-xl transition-colors",
            isScrolled ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-[2rem] border border-white/20 p-8 animate-in slide-in-from-top-4 duration-500 z-50">
          <div className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-900 font-black text-xl tracking-tight border-b border-slate-100 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full py-7 text-lg font-black rounded-2xl bg-primary shadow-xl shadow-primary/20">
              <a href="#booking" onClick={() => setIsMobileMenuOpen(false)}>BOOKING SEKARANG</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
