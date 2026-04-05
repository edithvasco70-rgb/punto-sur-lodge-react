import React, { useState } from 'react';
import imagenArena from '../assets/Vector3.png';
import fondoHotel from '../assets/portada.jpg';

const Hero = () => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(1);
  const [showCalendarIn, setShowCalendarIn] = useState(false);
  const [showCalendarOut, setShowCalendarOut] = useState(false);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => { if (value > 0) setter(value - 1); };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-between items-center"
    >
      
      {/* FONDO */}
      <div className="absolute inset-0 -z-0">
        <img 
          src={fondoHotel} 
          className="w-full h-full object-cover object-bottom" 
          alt="Punto Sur Lodge View" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 right-0 h-[32rem] bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* TEXTO CENTRAL */}
      <div className="flex-grow flex items-center justify-center px-4 mt-[-5vh]">
        <div className="text-center text-white z-20 drop-shadow-xl">
          <h1 className="text-3xl md:text-6xl font-serif mb-4 leading-tight tracking-tight uppercase">
            ¿POR QUÉ ESPERAR LAS <br /> VACACIONES QUE MERECES?
          </h1>
          <p className="uppercase tracking-[0.4em] text-[17px] mb-12 font-semibold">
            Regálate el descanso que estabas esperando
          </p>
          <a 
            href="#tarifario" 
            className="inline-block bg-punto-turquesa px-16 py-4 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl active:scale-95"
          >
            Reservar habitacion
          </a>
        </div>
      </div>

      {/* CONTENEDOR INFERIOR: BARRA + ARENA */}
      <div className="w-full relative">
        
        {/* BARRA DE RESERVA */}
        <div className="relative z-30 px-4 md:px-16 -mb-12"> 
          <div className="max-w-6xl mx-auto bg-punto-arena px-6 py-8 flex flex-wrap justify-between items-end gap-6 text-punto-verde shadow-2xl rounded-sm">
            
            {/* LLEGADA */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[9px] font-black mb-1 opacity-70 uppercase tracking-[0.2em]">Llegada:</label>
              <div onClick={() => { setShowCalendarIn(!showCalendarIn); setShowCalendarOut(false); }} className="border-b border-punto-verde/30 pb-1 flex justify-between items-center cursor-pointer">
                <span className="text-[11px] font-bold uppercase opacity-80">Fecha de llegada</span>
                <span className="text-punto-turquesa text-lg">📅</span>
              </div>
            </div>

            {/* SALIDA */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[9px] font-black mb-1 opacity-70 uppercase tracking-[0.2em]">Salida:</label>
              <div onClick={() => { setShowCalendarOut(!showCalendarOut); setShowCalendarIn(false); }} className="border-b border-punto-verde/30 pb-1 flex justify-between items-center cursor-pointer">
                <span className="text-[11px] font-bold uppercase opacity-80">Fecha de salida</span>
                <span className="text-punto-turquesa text-lg">📅</span>
              </div>
            </div>

            {/* ADULTOS */}
            <div className="w-24">
              <label className="block text-[9px] font-black mb-1 opacity-70 uppercase tracking-[0.2em]">Adultos:</label>
              <div className="flex items-end gap-4 border-b border-punto-verde/30 pb-1 pt-1 justify-between">
                <span className="text-[13px] font-bold">{adults}</span>
                <div className="flex flex-col gap-[2px]">
                  <button onClick={() => increment(setAdults, adults)} className="text-[10px] hover:text-punto-turquesa">▲</button>
                  <button onClick={() => decrement(setAdults, adults)} className="text-[10px] hover:text-punto-turquesa">▼</button>
                </div>
              </div>
            </div>

            {/* NIÑOS */}
            <div className="w-24">
              <label className="block text-[9px] font-black mb-1 opacity-70 uppercase tracking-[0.2em]">Niños:</label>
              <div className="flex items-end gap-4 border-b border-punto-verde/30 pb-1 pt-1 justify-between">
                <span className="text-[13px] font-bold">{kids}</span>
                <div className="flex flex-col gap-[2px]">
                  <button onClick={() => increment(setKids, kids)} className="text-[10px] hover:text-punto-turquesa">▲</button>
                  <button onClick={() => decrement(setKids, kids)} className="text-[10px] hover:text-punto-turquesa">▼</button>
                </div>
              </div>
            </div>

            <button className="bg-punto-verde text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-teal-900 transition-all shadow-md">
              Solicitar Información
            </button>

            {/* BLOQUE DE CALENDARIO (RESTAURADO) */}
            {(showCalendarIn || showCalendarOut) && (
              <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-[340px] bg-white shadow-2xl rounded-sm overflow-hidden z-50">
                <div className="bg-punto-turquesa p-3 text-white text-center text-xs font-black uppercase">
                  {showCalendarIn ? "Fecha de Llegada" : "Fecha de Salida"}
                </div>

                <div className="p-6 bg-punto-arena/20 text-punto-verde">
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-xl opacity-40">‹</button>
                    <div className="text-center font-serif">29 <span className="block text-[10px] uppercase">Marzo 2026</span></div>
                    <button className="text-xl opacity-40">›</button>
                  </div>

                  <div className="grid grid-cols-7 text-[9px] text-center font-bold mb-3 opacity-40 uppercase">
                    <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[12px] mb-4">
                    {[...Array(31)].map((_, i) => (
                      <span key={i} className={`p-2 rounded-full cursor-pointer hover:bg-punto-turquesa/20 ${i === 28 ? "bg-punto-turquesa text-white" : ""}`}>
                        {i + 1}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end gap-2 pt-4 border-t border-punto-verde/10">
                    <button onClick={() => {setShowCalendarIn(false); setShowCalendarOut(false);}} className="text-[9px] border border-punto-turquesa text-punto-turquesa px-4 py-1 font-bold">CANCELAR</button>
                    <button onClick={() => {setShowCalendarIn(false); setShowCalendarOut(false);}} className="text-[9px] bg-punto-turquesa text-white px-4 py-1 font-bold">OK</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ARENA */}
        <div className="relative w-full z-10 leading-[0] -mt-1">
          <img src={imagenArena} alt="Arena Texture" className="w-full h-auto block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;