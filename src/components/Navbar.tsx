import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Precios", href: "#pricing" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 border-b border-[#ffffff]/5" 
          : "py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center space-x-4"
          >
            <img 
              src="/logo.png" 
              alt="Asesorify Asesoria Especializada Inmobiliaria" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`relative text-[#ffffff]/80 hover:text-[#ffffff] transition-colors duration-300 ${
                      activeSection === link.href.substring(1) ? 'text-[#ffffff]' : ''
                    }`}
                  >
                    {link.name}
                    <span className={`absolute left-0 bottom-0 w-0 h-[1px] bg-[#ffffff] transition-all duration-300 ${
                      activeSection === link.href.substring(1) ? 'w-full' : ''
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              size="sm" 
              className="bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#000000] transition-all duration-300"
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#ffffff] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-[#000000] border-b border-[#ffffff]/10 transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="space-y-5 mb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`block font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-[#ffffff]' 
                      : 'text-[#ffffff]/80 hover:text-[#ffffff]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            fullWidth 
            className="bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#000000] transition-all duration-300"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
