import React from "react";
import { Scale, FileText, Shield, Gavel, Building, Users } from "lucide-react";
import Button from "./ui/Button";

const legalServices = [
  {
    icon: <Scale className="text-[#ffffff] transition-colors duration-300" size={28} />,
    title: "Asesoría Legal Inmobiliaria",
    description: "Consultoría especializada en derecho inmobiliario, contratos de compraventa y arrendamiento, due diligence legal.",
  },
  {
    icon: <Building className="text-[#ffffff] transition-colors duration-300" size={28} />,
    title: "Gestión de Propiedades",
    description: "Administración legal de inmuebles, contratos de arrendamiento, resolución de conflictos con arrendatarios.",
  },
  {
    icon: <FileText className="text-[#ffffff] transition-colors duration-300" size={28} />,
    title: "Contratos y Documentación",
    description: "Elaboración y revisión de contratos inmobiliarios, escrituras, hipotecas y documentación legal.",
  },
  {
    icon: <Shield className="text-[#ffffff] transition-colors duration-300" size={28} />,
    title: "Protección Patrimonial",
    description: "Estrategias legales para proteger tu patrimonio inmobiliario, fideicomisos y estructuración legal.",
  },
  {
    icon: <Gavel className="text-[#ffffff] transition-colors duration-300" size={28} />,
    title: "Litigio Inmobiliario",
    description: "Representación legal en disputas inmobiliarias, desalojos, y resolución de conflictos.",
  },
  {
    icon: <Users className="text-[#ffffff] transition-colors duration-300" size={28} />,
    title: "Asesoría Corporativa",
    description: "Servicios legales para empresas inmobiliarias, cumplimiento normativo y regulatorio.",
  },
];

const LegalServices = () => {
  return (
    <section id="legal-services" className="section bg-[#000000] relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#ffffff]/30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#ffffff]/30" />
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#ffffff]/10 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-[#ffffff]/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 stagger-animation">
          <span className="inline-block py-1 px-4 rounded-full bg-[#000000] text-[#ffffff] text-sm font-medium mb-4 border border-[#ffffff]/20">
            Servicios Legales
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#ffffff]">
            Protección Legal Integral
          </h2>
          <div className="elegant-divider max-w-xs mx-auto"></div>
          <p className="text-[#ffffff]/70 max-w-2xl mx-auto mt-10 leading-relaxed">
            Ofrecemos servicios legales especializados para proteger tus inversiones inmobiliarias y garantizar la seguridad jurídica en todas tus operaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalServices.map((service, index) => (
            <div 
              key={index}
              className="services-card group p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#000000] border border-[#ffffff]/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#ffffff]">{service.title}</h3>
              <p className="text-[#ffffff]/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#000000] transition-all duration-300">
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegalServices;