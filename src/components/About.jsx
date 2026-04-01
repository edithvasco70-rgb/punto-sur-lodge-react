import React from 'react';
// Importación de tus imágenes reales
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import fondoAgua from '../assets/fondo.avif';

const About = () => {
  return (
    <section id="nosotros" className="relative z-20 bg-white pt-32 pb-24 px-6 md:px-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="space-y-6">
          <div className="space-y-2">
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

        {/* COLUMNA DERECHA: COMPOSICIÓN DE IMÁGENES (ESTILO FIGMA) */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* 1. Fondo de agua (va detrás de todo) */}
          <div className="absolute top-10 right-0 w-4/5 h-4/5 -z-10 opacity-80">
            <img 
              src={fondoAgua} 
              alt="Textura agua" 
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* 2. Imagen 1 (Chefs) - Posicionada arriba a la derecha */}
          <div className="absolute top-0 right-4 w-2/3 shadow-2xl z-10 border-4 border-white">
            <img 
              src={imagen1} 
              alt="Nuestra cocina" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 3. Imagen 2 (Equipo) - Pisa a la Imagen 1 abajo a la izquierda */}
          <div className="absolute bottom-4 left-4 w-2/3 shadow-2xl z-20 border-8 border-white">
            <img 
              src={imagen2} 
              alt="Nuestro equipo" 
              className="w-full h-auto object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;