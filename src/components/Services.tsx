
import React from "react";
import { Home, BarChart3, PenTool, Globe, Building, Search } from "lucide-react";

const services = [
  {
    icon: <Home className="group-hover:text-white transition-colors duration-300" size={28} />,
    title: "Marketing de Propiedades de Lujo",
    description: "Fotografía seleccionada, recorridos virtuales inmersivos y canales de marketing exclusivos para presentar propiedades premium.",
  },
  {
    icon: <Building className="group-hover:text-white transition-colors duration-300" size={28} />,
    title: "Inteligencia de Mercado",
    description: "Análisis inmobiliario detallado, informes de valoración y posicionamiento estratégico para propiedades de alto valor.",
  },
  {
    icon: <PenTool className="group-hover:text-white transition-colors duration-300" size={28} />,
    title: "Elevación de Marca",
    description: "Identidades de marca sofisticadas para profesionales inmobiliarios distinguidos que inspiran confianza y reconocimiento.",
  },
  {
    icon: <BarChart3 className="group-hover:text-white transition-colors duration-300" size={28} />,
    title: "Generación de Leads Cualificados",
    description: "Sistemas premium de adquisición de leads que te conectan con clientes motivados de alto poder adquisitivo.",
  },
  {
    icon: <Search className="group-hover:text-white transition-colors duration-300" size={28} />,
    title: "Estrategia SEO para Lujo",
    description: "Optimización de búsqueda especializada centrada en palabras clave de propiedades de alto valor y demografía de compradores pudientes.",
  },
  {
    icon: <Globe className="group-hover:text-white transition-colors duration-300" size={28} />,
    title: "Presencia Web Premium",
    description: "Desarrollo de sitios web personalizados y responsivos que muestran tus listados de lujo con elegancia y sofisticación.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-white/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 stagger-animation">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 text-white text-sm font-medium mb-4 border border-white/20">
            Nuestra Experiencia
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Marketing Inmobiliario de Lujo
          </h2>
          <div className="elegant-divider max-w-xs mx-auto"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-10 leading-relaxed">
            Combinamos experiencia en la industria, tecnología innovadora y estrategias refinadas para ayudar a profesionales inmobiliarios de élite a elevar su presencia en el mercado de lujo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card group p-8 transform transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/5"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-white/10 text-white mb-6 transform transition-transform group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-white/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
