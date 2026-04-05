import React, { useState } from "react";
import room1 from "../assets/habitacion2.jpg";
import room2 from "../assets/habitacion1.jpeg"; // otra habitación

const habitaciones = [
  {
    title: "Habitación King Size",
    description:
      "Cama de tres plazas, frigobar y smart tv. Dos desayunos incluidos. Precio por noche incluye IGV.",
    roomsAvailable: 2,
    price: 235,
    img: room1,
  },
  {
    title: "Habitación Doble Deluxe",
    description:
      "Cama matrimonial, vista al jardín, minibar y TV. Dos desayunos incluidos. Precio por noche incluye IGV.",
    roomsAvailable: 3,
    price: 200,
    img: room2,
  },
];

const Tarifario = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % habitaciones.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + habitaciones.length) % habitaciones.length);
  };

  const habitacion = habitaciones[index];

  return (
    <section
      id="tarifario"
      className="bg-[#EDDFC1] pt-12 pb-28 px-6 md:px-24 text-center scroll-mt-48"
    >
      {/* TEXTO SUPERIOR */}
      <p className="text-[10px] tracking-[0.3em] text-punto-verde uppercase mb-3">
        Cómodas y relajantes
      </p>

      <h2 className="text-4xl md:text-5xl font-serif text-punto-verde mb-6">
        Habitaciones & Suites
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed mb-16">
        Contamos con 21 cómodas y acogedoras habitaciones, elegantemente
        amobladas, perfectas para viajes de placer o negocios.
      </p>

      {/* CARRUSEL */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white shadow-md relative">
        {/* IZQUIERDA - TEXTO */}
        <div className="p-10 text-left flex flex-col justify-center">
          <h3 className="text-xl font-serif text-punto-verde mb-4">
            {habitacion.title}
          </h3>

          <ul className="text-sm text-gray-600 space-y-1 mb-6">
            <li>• {habitacion.roomsAvailable} habitaciones disponibles</li>
            <li>• {habitacion.description}</li>
          </ul>

          <p className="text-punto-verde font-serif text-lg mb-6">
            S/{habitacion.price} <span className="text-sm">/ por noche</span>
          </p>

          {/* BOTÓN RESERVAR AHORA */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-punto-verde text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-teal-900 transition-all w-fit"
          >
            ¡Reservar ahora!
          </button>
        </div>

        {/* DERECHA - IMAGEN */}
        <div className="relative">
          <img
            src={habitacion.img}
            alt={habitacion.title}
            className="w-full h-full object-cover"
          />

          {/* FLECHAS */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 w-8 h-8 rounded-full flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 w-8 h-8 rounded-full flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tarifario;