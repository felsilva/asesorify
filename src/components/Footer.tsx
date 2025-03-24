
import React from "react";
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full border border-white/5"></div>
        <div className="absolute top-60 left-20 w-32 h-32 rounded-full border border-white/10"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <a 
              href="#home" 
              className="text-2xl font-bold text-white inline-block mb-6 group transition-all duration-300"
            >
              <span className="mr-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-gray-300 group-hover:to-white">Prisma</span>
              <span className="font-playfair">Inmobiliaria</span>
            </a>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed">
              Elevando el sector inmobiliario de lujo a través de diseño sofisticado y marketing estratégico. Creamos marcas distinguidas que conectan con clientes de alto valor y generan resultados excepcionales.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((socialLink, index) => (
                <a 
                  key={index}
                  href={socialLink.href}
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 font-playfair">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "#home" },
                { name: "Servicios", href: "#services" },
                { name: "Precios", href: "#pricing" },
                { name: "Nosotros", href: "#about" },
                { name: "Contacto", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 font-playfair">Nuestros Servicios</h3>
            <ul className="space-y-4">
              {[
                "Marketing Inmobiliario", 
                "Desarrollo de Marca", 
                "Diseño Web", 
                "Creación de Contenido", 
                "Optimización SEO", 
                "Generación de Leads"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Prisma Inmobiliaria. Todos los derechos reservados.
          </p>
          <div className="flex items-center mt-6 md:mt-0">
            <a 
              href="#home"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all duration-300"
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
