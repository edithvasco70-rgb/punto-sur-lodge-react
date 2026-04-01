import React from 'react';
import logoImage from '../assets/logo.png'; 

const Navbar = () => {
  return (
    // 1. CAMBIADO: Subimos de text-[10px] a text-[12px] (puedes probar 13px si prefieres)
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-4 md:px-16 py-6 text-white uppercase text-[12px] tracking-[0.3em] font-medium">
      
      {/* MENÚ IZQUIERDA */}
      <div className="flex gap-20 items-center border-b border-white/30 pb-4 flex-1 justify-end mr-10">
        <a href="#inicio" className="hover:text-punto-turquesa transition-colors border-b border-punto-turquesa pb-4 -mb-[17px]">Inicio</a>
        <a href="#nosotros" className="hover:text-punto-turquesa transition-colors">Nosotros</a>
        <a href="#comedor" className="hover:text-punto-turquesa transition-colors">Comedor & Bar</a>
      </div>

      {/* --- LOGO CENTRAL --- */}
      <div className="relative -mt-6 group cursor-pointer">
        <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition-transform group-hover:scale-105">
          <img 
            src={logoImage} 
            alt="Punto Sur Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>

      {/* MENÚ DERECHA */}
      <div className="flex gap-20 items-center border-b border-white/30 pb-4 flex-1 justify-start ml-10">
        <a href="#tarifario" className="hover:text-punto-turquesa transition-colors">Tarifario</a>
        <a href="#reservar" className="hover:text-punto-turquesa transition-colors">Reservar</a>
        
        {/* 2. AJUSTE: El botón también suele necesitar un poco más de tamaño si subes el resto */}
        <button className="bg-punto-turquesa px-6 py-2 text-[10px] font-black hover:bg-cyan-500 transition-all ml-4 shadow-lg active:scale-95">
          OFERTAS EXCLUSIVAS
        </button>
      </div>
    </nav>
  );
};

export default Navbar;