import React from 'react';
import logo from '../assets/logoFooter.png'; 
import vectorFondo from '../assets/Vector5.png'; 
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const whatsappLink = "https://wa.me/51999999999?text=Hola%20Punto%20Sur%20Lodge%2C%20deseo%20realizar%20una%20consulta";

  return (
    <footer className="relative w-full overflow-hidden">
      
      {/* SECCIÓN SUPERIOR (Vectorizada) */}
      {/* mt-16 baja el bloque completo (vector + contenido) 2 puntos más en la escala de Tailwind */}
      <div 
        className="relative mt-16 pt-32 pb-24 px-6 md:px-20 text-[#004743]"
        style={{ 
          backgroundImage: `url(${vectorFondo})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Punto Sur Lodge" 
              className="h-60 w-auto" 
            />
          </div>

          {/* DIRECCIÓN */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] opacity-60">Dirección</h4>
            <p className="text-[14px] font-bold leading-relaxed">
              Av. Mariscal Castilla 11703<br />Grocio Prado - Chincha
            </p>
          </div>

          {/* CORREO */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] opacity-60">Correo</h4>
            <a href="mailto:reservas@puntosurlodge.pe" className="text-[14px] font-bold hover:text-teal-600 transition-colors">
              reservas@puntosurlodge.pe
            </a>
          </div>

          {/* CAJA CONSULTA WHATSAPP */}
          <div className="bg-[#F5F1E9] p-6 md:p-8 rounded-sm shadow-xl flex flex-col lg:flex-row items-center gap-6 border border-black/5 min-w-fit">
            <p className="text-[11px] font-black uppercase tracking-widest text-center lg:text-left leading-tight text-[#004743]">
              ¿Tienes alguna<br className="hidden lg:block" /> consulta o duda?
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#004743] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR (Franja Verde Oscuro) */}
      <div className="bg-[#004743] py-8 px-6 text-[#F5F1E9] text-center space-y-8">
        <div className="flex justify-center gap-10 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="mailto:reservas@puntosurlodge.pe" className="hover:text-teal-400 transition-colors">
            <FaEnvelope />
          </a>
        </div>

        <div className="text-[11px] tracking-[0.1em] opacity-70 space-y-3 font-medium">
          <p>© Punto Sur Lodge 2026. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            <a href="/" className="hover:underline text-[#F5F1E9]">Política de privacidad</a>
            <a href="/" className="hover:underline text-[#F5F1E9]">Términos y condiciones</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;