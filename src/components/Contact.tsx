
import React from "react";
import Button from "./ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-900 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Iniciemos una <span className="text-white">Conversación</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-lg">
              ¿Listo para transformar tu presencia digital? Contáctanos hoy para discutir tu proyecto y descubrir cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Escríbenos</h3>
                  <p className="text-white/70">hola@asesorify.cl</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Llámanos</h3>
                  <p className="text-white/70">+56 9 8765 4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visítanos</h3>
                  <p className="text-white/70">Santiago, Chile </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              <Button type="submit" fullWidth className="group bg-gradient-to-r from-white to-gray-500 hover:from-gray-500 hover:to-white text-black transition-all duration-300">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
