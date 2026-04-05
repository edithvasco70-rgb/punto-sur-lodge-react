import React from 'react';
import arenaVector from '../assets/Vector4.png';

// 1. Importación de imágenes
import elioImg from '../assets/persona (1).jpg'; 
import giselleImg from '../assets/mujer2.jpg'; 
import rodolfoImg from '../assets/persona (2).jpg'; 

const reviews = [
  {
    name: "Elio Paniagua",
    title: "Súper recomendado!",
    comment: "Excelente lugar para ir en familia desayuno chinchano buenazo, soy de Chincha y acepto que estaba bueno, además los cuartos súper modernos.",
    stars: 5,
    image: elioImg,
  },
  {
    name: "Giselle Retamozo",
    title: "¡Increíble!",
    comment: "Me gustó mucho! Es acogedor, limpio, ordenado, sencillo. Tiene dos piscinas medianas (una para niños). El personal es muy atento y amable.",
    stars: 5,
    image: giselleImg,
  },
  {
    name: "Rodolfo Adrianzen",
    title: "¡Exceptional!",
    comment: "Excelente sitio para pasar un buen fin de semana, ya sea por trabajo (ya que es muy silencioso) o para pasar un buen momento de diversión.",
    stars: 5,
    image: rodolfoImg,
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#EDDFC1] pt-20 pb-32 px-6 relative overflow-visible">
      
      {/* TÍTULOS */}
      {/* Ajustado a mb-12 para una separación equilibrada (ni muy lejos ni muy cerca) */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-[12px] tracking-[0.3em] text-punto-verde uppercase mb-3 font-bold opacity-70">
          Lee las reseñas, escritas por
        </p>
        
        <h2 className="text-4xl md:text-5xl font-serif text-punto-verde mb-4">
          Nuestros queridos huéspedes
        </h2>
        
        <p className="text-gray-500 text-lg italic font-serif max-w-2xl mx-auto leading-relaxed px-4">
          "Nuestros huéspedes son el reflejo de nuestro compromiso. Lee sus experiencias y vive la tuya."
        </p>
      </div>

      {/* GRILLA DE COMENTARIOS */}
      {/* Ajustado a pt-16 para que las fotos suban lo justo */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-20 -mt-24 pt-16 pb-12">
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            
            {/* FOTO CIRCULAR */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-sm">
              <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold text-punto-verde mb-4">{review.title}</h3>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 px-4">
              "{review.comment}"
            </p>

            <span className="text-[12px] font-black uppercase tracking-widest text-punto-verde mb-3">
              {review.name}
            </span>

            <div className="flex gap-1 text-punto-verde text-sm">
              {[...Array(review.stars)].map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ARENA AL FINAL */}
      <div className="absolute -bottom-1 left-0 w-full pointer-events-none z-10">
        <img 
          src={arenaVector} 
          alt="Arena" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </section>
  );
};

export default Testimonials;