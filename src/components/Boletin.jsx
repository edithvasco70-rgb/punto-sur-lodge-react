import React, { useState, useEffect } from 'react';
/* Importaciones actualizadas a mayúsculas */
import fondoBoletin from '../assets/RASGADO.png'; 
import mascaraRasgada from '../assets/RASGADO.png'; 

const Boletin = () => {
  const [suscrito, setSuscrito] = useState(false);

  const handleSuscripcion = (e) => {
    e.preventDefault();
    setSuscrito(true);
    e.target.reset(); 
  };

  useEffect(() => {
    if (suscrito) {
      const timer = setTimeout(() => {
        setSuscrito(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [suscrito]);

  return (
    /* CAMBIO: Ajustamos pt-24 para que el título suba un poco más */
    <section id="boletin" className="w-full bg-white pt-24 pb-20 flex flex-col items-center">
      
      {/* TÍTULOS SUPERIORES */}
      <div className="text-center px-4">
        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-serif text-punto-verde mb-4 tracking-tight leading-tight">
          Suscríbete a nuestro boletín mensual
        </h2>
        
        {/* CAMBIO: mb-8 para acercar el texto descriptivo al contenedor de abajo y subir el conjunto */}
        <p className="text-gray-500 font-light italic tracking-[0.15em] text-sm md:text-base mb-8">
          ...nunca te perderás de nuestras noticias y promociones!
        </p>
      </div>

      {/* CONTENEDOR CON MÁSCARA */}
      <div 
        className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center"
        style={{
          maskImage: `url(${mascaraRasgada})`,
          WebkitMaskImage: `url(${mascaraRasgada})`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      >
        {/* IMAGEN DE FONDO */}
        <img 
          src={fondoBoletin} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Vista Punto Sur Boletín" 
        />
        <div className="absolute inset-0 bg-black/15"></div>

        {/* CONTENIDO INTERNO */}
        <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-20 mt-8">
          
          <div className="md:w-1/2 text-white drop-shadow-2xl text-left">
            <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              Sé el primero en <br /> 
              enterarte de nuestras <br /> 
              ofertas especiales
            </h3>
          </div>

          <div className="md:w-1/2 w-full flex justify-end">
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 w-full max-w-lg border border-white/20 shadow-2xl min-h-[160px] flex items-center justify-center transition-all duration-500">
              
              {!suscrito ? (
                <form onSubmit={handleSuscripcion} className="flex flex-col sm:flex-row bg-white w-full animate-fade-in">
                  <input 
                    required
                    type="email" 
                    placeholder="Ingresa tu e-mail" 
                    className="w-full px-6 py-4 outline-none text-gray-600 font-light italic text-sm"
                  />
                  <button 
                    type="submit"
                    className="bg-punto-turquesa text-white px-8 py-4 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-cyan-500 transition-all active:scale-95 whitespace-nowrap"
                  >
                    Suscríbete
                  </button>
                </form>
              ) : (
                <div className="text-white text-center flex flex-col items-center animate-bounce-subtle">
                  <svg className="w-12 h-12 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-2xl font-bold uppercase tracking-widest">¡Listo!</h4>
                  <p className="text-xs opacity-90 mt-2 italic">Te hemos registrado correctamente.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boletin;