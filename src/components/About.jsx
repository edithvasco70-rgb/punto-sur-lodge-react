import React from 'react';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import fondoAgua from '../assets/fondo.avif';

// IMPORTS NUEVOS
import piscina4 from '../assets/piscina4.jpeg';
import piscina2 from '../assets/piscina2.jpeg';
import modelos1 from '../assets/modelos1.jpeg';
import piscina1 from '../assets/piscina1.jpeg';
import modelos2 from '../assets/modelos2.jpeg';

const About = () => {
  return (
    <section 
      id="nosotros" 
      className="relative z-20 bg-white min-h-screen pt-20 pb-16 px-6 md:px-24 scroll-mt-52 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="space-y-6">
          <div className="space-y-2  -mt-4">
            <span className="text-punto-turquesa text-xs font-black uppercase tracking-[0.3em]">
              Bienvenido a
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-punto-verde leading-tight">
              Punto Sur Lodge
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
            <p>
              Herederos del generoso y próspero valle de Chincha, la historia de 
              Punto Sur Lodge es reciente y comenzó como un alojamiento para 
              visitantes con la construcción de 7 habitaciones.
            </p>
            <p>
              Actualmente, contamos con 19 habitaciones totalmente acondicionadas. 
              Puedes disfrutar de nuestra piscina, zona para parrillas, comedor-bar, 
              áreas verdes, estacionamiento privado, entre otros.
            </p>
            <p>
              Nuestra visión se proyecta a tener un crecimiento que esté acorde con 
              la tranquilidad que queremos ofrecerle y como próximos proyectos 
              implementaremos el restaurante y la zona de degustación de potajes y 
              tragos típicos.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* Fondo */}
          <div className="absolute top-24 right-0 w-4/5 h-4/5 -z-10 opacity-80">
            <img 
              src={fondoAgua} 
              alt="Textura de agua decorativa" 
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Imagen 1 */}
          <div className="absolute top-0 right-4 w-3/5 shadow-2xl z-10 border-4 border-white">
            <img 
              src={imagen1} 
              alt="Vista de la cocina del hotel" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Imagen 2 */}
          <div className="absolute bottom-16 left-4 w-2/3 shadow-2xl z-20 border-8 border-white">
            <img 
              src={imagen2} 
              alt="Equipo del hotel" 
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>

      {/* FRANJA DE IMÁGENES */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-32">
        <div className="flex w-full">
          <img src={piscina4} alt="Piscina del hotel" className="w-1/5 h-56 md:h-72 object-cover" />
          <img src={piscina2} alt="Área de piscina" className="w-1/5 h-56 md:h-72 object-cover" />
          <img src={modelos1} alt="Visitantes disfrutando" className="w-1/5 h-56 md:h-72 object-cover" />
          <img src={piscina1} alt="Instalaciones del hotel" className="w-1/5 h-56 md:h-72 object-cover" />
          <img src={modelos2} alt="Experiencia en el lodge" className="w-1/5 h-56 md:h-72 object-cover" />
        </div>
      </div>

    </section>
  );
};

export default About;