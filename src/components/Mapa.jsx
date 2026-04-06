import React from 'react';

const Mapa = () => {
  // Dirección exacta para el mapa
  const direccionURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.123456789!2d-76.16045!3d-13.40123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2c3456789ab%3A0x123456789abcdef!2sAv.%20Mariscal%20Castilla%2011703%2C%20Grocio%20Prado!5e0!3m2!1ses!2spe!4v1711234567890!5m2!1ses!2spe";

  return (
    <section 
      id="mapa" 
      /* CAMBIO: Se añadió la clase 'scroll-mt-32' (o el valor que prefieras) 
         Esto crea un "colchón" invisible para que el Nav no lo tape al saltar. */
      className="relative bg-white py-24 px-6 md:px-20 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO SECCIÓN */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#004743] text-center mb-20 uppercase tracking-tight">
          Mapa y localización
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: INDICACIONES */}
          <div className="text-[#004743] space-y-12">
            <div>
              <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-4">
                Indicaciones de viaje
              </h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-md font-medium opacity-80">
                Si viene del norte o sur, siga por la panamericana sur hasta el kilómetro 200, 
                hasta la entrada de Grocio prado, Melchorita. Debería poder ver nuestro 
                cartel e ingrese a Grocio Prado, hay indicaciones en las pistas para 
                poder llegar sin problemas.
              </p>
            </div>

            {/* TIEMPOS ESTIMADOS */}
            <div className="flex gap-16">
              <div className="flex flex-col">
                <span className="text-5xl font-serif">2 horas</span>
                <span className="text-[12px] uppercase font-bold text-gray-400 mt-2 tracking-widest leading-relaxed">
                  Muy cerca de Lima, pero<br />alejados del ruido de la<br />ciudad
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-serif">5 minutos</span>
                <span className="text-[12px] uppercase font-bold text-gray-400 mt-2 tracking-widest leading-relaxed">
                  De la playa y de los<br />restaurantes
                </span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA INTERACTIVO */}
          <div className="w-full h-[450px] bg-white p-2 shadow-2xl rounded-sm border border-gray-100">
            <iframe
              title="Ubicación Punto Sur Lodge"
              src={direccionURL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mapa;