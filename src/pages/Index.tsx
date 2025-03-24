
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Enhanced Intersection Observer for more elegant scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add different animation classes based on position
          const targetElement = entry.target as HTMLElement;
          const rect = targetElement.getBoundingClientRect();
          const viewportCenter = window.innerWidth / 2;
          
          if (rect.left + (rect.width / 2) < viewportCenter) {
            // Elements on the left side
            targetElement.classList.add("animate-slide-in-right");
          } else {
            // Elements on the right or center
            targetElement.classList.add("animate-fade-in");
          }
          
          observer.unobserve(targetElement);
        }
      });
    }, observerOptions);

    // Select all sections and elements to observe
    const sections = document.querySelectorAll("section");
    const animatableElements = document.querySelectorAll(".glass-card, .elegant-border");
    
    sections.forEach((section) => {
      if (!section.classList.contains("animate-fade-in") && 
          !section.classList.contains("animate-slide-in-right")) {
        observer.observe(section);
      }
    });
    
    animatableElements.forEach((element) => {
      if (!element.classList.contains("animate-fade-in") && 
          !element.classList.contains("animate-slide-in-right")) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      
      animatableElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
