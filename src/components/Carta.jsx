import React from "react";
import img1 from "../assets/carta1.jpg";
import img2 from "../assets/carta2.jpg";
import img3 from "../assets/carta3.jpg";
import arena from "../assets/Vector3.png";

const Carta = () => {
  return (
    <section
      id="comedor"
      /* CAMBIO: pt-32 (que sí existe) y min-h para centrar visualmente */
      className="relative bg-white pt-32 pb-32 px-6 md:px-24 text-center scroll-mt-20 overflow-visible min-h-screen flex flex-col justify-center"
    >
      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-serif text-punto-verde mb-6">
        Carta Punto Sur
      </h2>

      {/* TEXTO */}
      <p className="text-gray-500 max-w-4xl mx-auto text-sm leading-relaxed mb-20">
        Cada momento del día ha sido pensado para disfrutarse sin prisa.
        Nuestros desayunos ofrecen frescura y equilibrio para comenzar bien el día,
        los almuerzos invitan a una pausa llena de sabor, y nuestros cócteles
        acompañan el final perfecto con mezclas diseñadas para relajarte y disfrutar.
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto items-stretch">
        {[img1, img2, img3].map((img, i) => (
          <div
            key={i}
            className="bg-punto-arena pt-16 pb-10 px-6 text-center shadow-sm rounded-t-[120px] flex flex-col items-center"
          >
            {/* IMAGEN CIRCULAR */}
            <div className="w-32 h-32 -mt-24 mb-6">
              <img
                src={img}
                alt="carta"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>

            {/* TEXTO */}
            <h3 className="text-[11px] font-black uppercase text-punto-verde mb-4 tracking-widest leading-tight">
              {i === 0 && "El momento perfecto para brindar"}
              {i === 1 && "Empieza el día como lo mereces"}
              {i === 2 && "Una pausa para disfrutar"}
            </h3>

            <p className="text-xs text-gray-600 leading-relaxed px-2">
              {i === 0 &&
                "Mezclas cuidadosamente elaboradas para relajarte y acompañar cada instante con el mejor sabor."}
              {i === 1 &&
                "Disfruta opciones frescas y equilibradas, pensadas para acompañar mañanas tranquilas y llenas de energía."}
              {i === 2 &&
                "Platos preparados con dedicación que invitan a detenerte, saborear y vivir el momento."}
            </p>
          </div>
        ))}
      </div>

      {/* BOTÓN */}
      <div className="mt-16">
        <button className="bg-punto-verde text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-teal-900 transition-all shadow-lg active:scale-95">
          Descargar Carta
        </button>
      </div>

      {/* ARENA DE FONDO - Ajustada para que sea la base real */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none leading-[0]">
        <img 
          src={arena} 
          alt="Arena" 
          className="w-full h-auto block" 
          style={{ marginBottom: '-1px' }}
        />
      </div>
    </section>
  );
};

export default Carta;