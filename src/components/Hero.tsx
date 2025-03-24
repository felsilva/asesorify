
import React, { useEffect, useRef } from "react";
import Button from "./ui/Button";
import { ChevronDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      ref={heroRef}
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-[20%] right-[15%] w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
        <div className="animate-float delay-1000 absolute top-[50%] left-[15%] w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
        <div className="animate-float delay-2000 absolute bottom-[10%] right-[25%] w-48 h-48 bg-white/5 rounded-full blur-[60px]"></div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 stagger-animation">
            <div className="mb-8 inline-block overflow-hidden">
              <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 text-white text-sm font-medium border border-white/20">
                Marketing Inmobiliario de Lujo
              </span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Eleva Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Presencia</span> Inmobiliaria
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              Ayudamos a agentes inmobiliarios y profesionales de propiedades de lujo a elevar su marca con soluciones de marketing sofisticadas y tecnología innovadora.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button size="lg" className="group">
                Explorar Servicios
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-white/20 hover:border-white/40">
                Ver Portafolio
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="elegant-border">
              <div className="glass-card p-4 md:p-6 aspect-square max-w-md mx-auto transform transition-all duration-500 hover:rotate-0 relative group">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out">
                    <div className="w-full h-full bg-gradient-to-br from-black/40 to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-white/40 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-white/40 group-hover:border-white/80 transition-colors duration-300"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-5 rounded-lg backdrop-blur-lg group hover:backdrop-blur-xl transform transition-all duration-500 hover:translate-y-1">
              <div className="text-sm font-light uppercase tracking-wider text-white/70">Propiedades de Lujo</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">500+</div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center group"
      >
        <span className="text-sm font-light mb-2 tracking-widest">DESCUBRIR</span>
        <ChevronDown className="animate-bounce group-hover:text-white transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
