import React from 'react';
import fondoPromo from '../assets/hotel1.jpeg'; 

const Promocion = () => {
  return (
    <section 
      id="promocion" 
      className="relative w-full h-[100vh] md:h-[115vh] bg-[#EDDFC1] overflow-hidden pt-20 md:pt-20 pb-24 md:pb-24 scroll-mt-0"
    >
      
      {/* CONTENEDOR DE LA IMAGEN Y EL TEXTO */}
      <div className="relative w-full h-full flex items-center md:justify-end overflow-hidden">
        
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={fondoPromo} 
            alt="Promoción Verano" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* CUADRO DE TEXTO VERDE - Transparencia 55% */}
        <div className="relative z-10 w-full md:w-[40%] lg:w-[35%] h-full bg-punto-verde/55 backdrop-blur-sm p-10 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center text-white">
          
          {/* TÍTULO */}
          <div className="w-full border-t border-b border-white/20 py-10 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.2em] uppercase leading-tight">
              Promoción <br /> Verano ' 25
            </h2>
          </div>

          {/* SUBTÍTULO */}
          <h3 className="text-xl md:text-2xl font-bold mb-10 leading-snug max-w-sm">
            ¡Suscríbete y aprovecha esta oportunidad en Punto Sur Lodge!
          </h3>

          {/* CUERPO */}
          <p className="text-sm md:text-base mb-16 leading-relaxed opacity-90 font-light max-w-sm">
            Del 26 de enero al 28 de febrero de 2025, haz check-in cualquier día, 
            paga 2 noches y obtén la 3.ª gratis (no válido en feriados). 
            Incluye desayuno (excepto la noche gratis) y acceso a piscinas, 
            parrillas y más. Aplica para todas nuestras habitaciones.
          </p>

          {/* BOTÓN CONVERTIDO A ENLACE ANCLA */}
          <a 
            href="#boletin" 
            className="bg-[#EDDFC1] text-punto-verde px-14 py-5 uppercase tracking-[0.25em] font-black text-[12px] hover:bg-white transition-all duration-300 shadow-2xl inline-block text-center active:scale-95"
          >
            Suscribirse
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promocion;