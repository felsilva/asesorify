
import React, { useState } from "react";
import Button from "./ui/Button";
import { Check, ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const pricingPlans = [
  {
    name: "Signature",
    price: "899€",
    description: "Marketing esencial para agentes distinguidos",
    features: [
      "Diseño de sitio web personalizado",
      "Fotografía profesional",
      "Plantillas para redes sociales",
      "Configuración de email marketing",
      "5 listados de propiedades",
      "Estrategia SEO básica"
    ],
    popular: false,
    buttonText: "Seleccionar Plan"
  },
  {
    name: "Elite",
    price: "1.899€",
    description: "Solución integral para profesionales establecidos",
    features: [
      "Desarrollo de sitio web premium",
      "Fotografía de alta gama",
      "Videografía con dron",
      "Estrategia de marketing de contenidos",
      "15 listados de propiedades",
      "Gestión de redes sociales",
      "Estrategia SEO avanzada",
      "Sistema de generación de leads"
    ],
    popular: true,
    buttonText: "Más Popular"
  },
  {
    name: "Exclusivo",
    price: "3.499€",
    description: "Servicios a medida para agentes inmobiliarios de lujo",
    features: [
      "Sitio web exclusivo con integración IDX",
      "Tours virtuales y videografía cinematográfica",
      "Paquete completo de branding",
      "Listados de propiedades ilimitados",
      "Gerente de marketing dedicado",
      "Gestión de campañas PPC",
      "Integración y formación de CRM",
      "Gestión de redes sociales",
      "Informes mensuales de rendimiento"
    ],
    popular: false,
    buttonText: "Contáctanos"
  }
];

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="section bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-[80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 stagger-animation">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 text-white text-sm font-medium mb-4 border border-white/20">
            Inversión
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Colecciones de Marketing
          </h2>
          <div className="elegant-divider max-w-xs mx-auto"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-10">
            Selecciona la solución de marketing ideal para elevar tu negocio inmobiliario y distinguirte en el mercado de propiedades de lujo.
          </p>
        </div>
        
        {/* Desktop Pricing Table */}
        <div className="hidden lg:block">
          <div className="glass-card overflow-hidden backdrop-blur-lg border border-white/10 rounded-xl">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-white/10">
                  <TableHead className="w-1/4 text-white/90 text-lg py-8">Características del Servicio</TableHead>
                  {pricingPlans.map((plan, index) => (
                    <TableHead 
                      key={index} 
                      className="w-1/4 text-center py-8"
                      onMouseEnter={() => setHoveredPlan(plan.name)}
                      onMouseLeave={() => setHoveredPlan(null)}
                    >
                      <div 
                        className={`flex flex-col items-center transition-all duration-500 ${
                          hoveredPlan === plan.name ? 'transform scale-105' : ''
                        }`}
                      >
                        {plan.popular && (
                          <span className="bg-gradient-to-r from-white to-gray-300 text-black text-xs px-4 py-1 rounded-full mb-3 shadow-lg">
                            Más Popular
                          </span>
                        )}
                        <span className="text-white text-xl font-bold">{plan.name}</span>
                        <span className="text-white text-3xl font-bold mt-3 font-playfair">{plan.price}</span>
                        <span className="text-white/60 text-sm mt-2">{plan.description}</span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Collect all unique features */}
                {Array.from(new Set(pricingPlans.flatMap(plan => plan.features))).map((feature, featureIndex) => (
                  <TableRow 
                    key={featureIndex} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  >
                    <TableCell className="font-medium text-white/80">{feature}</TableCell>
                    {pricingPlans.map((plan, planIndex) => (
                      <TableCell 
                        key={planIndex} 
                        className="text-center"
                        onMouseEnter={() => setHoveredPlan(plan.name)}
                        onMouseLeave={() => setHoveredPlan(null)}
                      >
                        {plan.features.includes(feature) ? (
                          <Check 
                            className={`inline-block ${
                              hoveredPlan === plan.name ? 'text-white' : 'text-white'
                            } transition-colors duration-300`} 
                            size={20} 
                          />
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell></TableCell>
                  {pricingPlans.map((plan, index) => (
                    <TableCell 
                      key={index} 
                      className="text-center p-6"
                      onMouseEnter={() => setHoveredPlan(plan.name)}
                      onMouseLeave={() => setHoveredPlan(null)}
                    >
                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="md"
                        fullWidth
                        className={`
                          group transition-all duration-300 
                          ${plan.popular ? 'bg-gradient-to-r from-white to-gray-300 hover:from-gray-300 hover:to-white text-black' : 'backdrop-blur-sm border-white/20 hover:border-white/40'}
                        `}
                      >
                        {plan.buttonText}
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Mobile Pricing Cards */}
        <div className="lg:hidden grid gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 transform transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? 'border-white/40 ring-1 ring-white/30 bg-gradient-to-br from-white/15 to-white/5' : ''
              }`}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
                  <span className="bg-gradient-to-r from-white to-gray-300 text-black text-xs px-4 py-1 rounded-full shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white font-playfair">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mt-3 font-playfair">{plan.price}</div>
                <p className="text-white/60 text-sm mt-2">{plan.description}</p>
                <div className="elegant-divider my-6 max-w-[120px] mx-auto"></div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start group">
                    <Check className="text-white mr-3 shrink-0 mt-1 group-hover:text-white transition-colors duration-300" size={18} />
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? "primary" : "outline"}
                size="md"
                fullWidth
                className={`
                  group transition-all duration-300 
                  ${plan.popular ? 'bg-gradient-to-r from-white to-gray-300 hover:from-gray-300 hover:to-white text-black' : 'backdrop-blur-sm border-white/20 hover:border-white/40'}
                `}
              >
                {plan.buttonText}
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
