import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    // 1. Asegúrate de que "mapa" esté aquí (veo que ya lo pusiste, ¡bien!)
    const sections = ["inicio", "nosotros", "comedor", "tarifario", "mapa", "promocion"];

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      let current = "inicio";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.getBoundingClientRect().top;
          // Ajustamos el margen de detección
          if (top <= window.innerHeight / 2) {
            current = sectionId;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Esta es la función que pone la línea turquesa
  const linkClass = (section) =>
    `${
      active === section
        ? "text-punto-turquesa border-b border-punto-turquesa pb-4 -mb-[17px]" 
        : "hover:text-punto-turquesa transition-colors"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-16 py-11 uppercase text-[12px] tracking-[0.3em] font-medium transition-all duration-300
        ${scrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-transparent text-white'}
      `}
    >
      {/* MENÚ IZQUIERDA */}
      <div className="flex gap-20 items-center pb-4 flex-1 justify-end mr-10 border-b border-white/30">
        <a href="#inicio" className={linkClass("inicio")}>Inicio</a>
        <a href="#nosotros" className={linkClass("nosotros")}>Nosotros</a>
        <a href="#comedor" className={linkClass("comedor")}>Comedor & Bar</a>
      </div>

      {/* LOGO */}
      <div className="relative -mt-6 group cursor-pointer">
        <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition-transform group-hover:scale-105">
          <img src={logoImage} alt="Punto Sur Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* MENÚ DERECHA */}
      <div className="flex gap-20 items-center pb-4 flex-1 justify-start ml-10 border-b border-white/30">
        <a href="#tarifario" className={linkClass("tarifario")}>Tarifario</a>
        
        {/* 2. REVISA AQUÍ: El id debe ser "mapa" para que linkClass("mapa") funcione */}
        <a href="#mapa" className={linkClass("mapa")}>
          Ubicación
        </a>
        
        <a 
          href="#promocion" 
          className={`px-6 py-2 text-[10px] font-black transition-all ml-4 shadow-lg active:scale-95 text-center
            ${active === "promocion" 
              ? 'bg-white text-punto-turquesa border border-punto-turquesa' 
              : 'bg-punto-turquesa text-white hover:bg-cyan-500'}
          `}
        >
          OFERTAS EXCLUSIVAS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;