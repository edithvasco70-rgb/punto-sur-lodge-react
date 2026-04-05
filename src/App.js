import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Carta from './components/Carta';
import Promocion from './components/Promocion';
import Tarifario from './components/Tarifario';
import Testimonials from './components/Testimonials';
import Boletin from './components/Boletin';
import Mapa from './components/Mapa';   // 👈 1. Importamos el nuevo Mapa
import Footer from './components/Footer'; // 👈 2. Importamos el Footer

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-punto-turquesa selection:text-white bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Carta />
        <Tarifario />
        <Promocion /> 
        <Testimonials />
        <Boletin /> 
        
        {/* 3. Agregamos las secciones finales */}
        <Mapa /> 
      </main>

      {/* 4. El Footer va fuera del <main> por estándar, justo antes de cerrar el div principal */}
      <Footer />
    </div>
  );
}

export default App;