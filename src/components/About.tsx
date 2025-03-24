import React from "react";
import Button from "./ui/Button";
import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10+", label: "Años de Experiencia" },
    { value: "250+", label: "Propiedades Comercializadas" },
    { value: "35+", label: "Miembros del Equipo" },
    { value: "15+", label: "Premios del Sector" },
  ];

  const strengths = [
    "Enfoque exclusivo en propiedades de lujo",
    "Equipo experto de diseñadores y marketers",
    "Gestión de proyectos dedicada",
    "Mentalidad de alianzas a largo plazo",
    "Enfoque en clientela de alto valor",
    "Tecnologías líderes del sector",
  ];

  return (
    <section id="about" className="section bg-[#000000] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 border border-[#ffffff]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-[#ffffff]/10 rounded-full"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#ffffff]/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="elegant-border">
              <div className="relative z-10 overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                  alt="Nuestro equipo" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#000000]/40"></div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 backdrop-blur-lg">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#ffffff]">{stat.value}</div>
                    <div className="text-sm text-[#ffffff]/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative accents */}
            <div className="absolute -z-10 -inset-4 bg-[#ffffff]/5 rounded-xl blur-2xl"></div>
          </div>
          
          <div className="order-1 md:order-2 stagger-animation">
            <span className="inline-block py-1 px-4 rounded-full bg-[#000000] text-[#ffffff] text-sm font-medium mb-4 border border-[#ffffff]/20">
              Sobre Nosotros
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
              Somos expertos en <span className="text-[#ffffff]">inmobiliaria de lujo</span> y marketing
            </h2>
            <div className="elegant-divider max-w-xs my-6"></div>
            <p className="text-[#ffffff]/70 mb-8 leading-relaxed">
              Durante más de una década, hemos ayudado a profesionales inmobiliarios distinguidos a construir y hacer crecer su presencia en el mercado de propiedades de lujo. Nuestro equipo combina diseño sofisticado con marketing estratégico para ofrecer soluciones que elevan tu marca.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start group">
                  <CheckCircle className="text-[#ffffff] mt-0.5 mr-3 flex-shrink-0" size={18} />
                  <span className="text-[#ffffff]/80 group-hover:text-[#ffffff] transition-colors duration-300">{strength}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#000000] transition-all duration-300">
              Descubrir Nuestro Proceso
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
