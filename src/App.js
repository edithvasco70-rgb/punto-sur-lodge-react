import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Carta from './components/Carta';
import Promocion from './components/Promocion';
import Tarifario from './components/Tarifario';
import Testimonials from './components/Testimonials';
import Boletin from './components/Boletin';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-punto-turquesa selection:text-white bg-white">
      <Navbar />
      <main>
        {/* Cada componente ya debe manejar su propio ID y espaciado interno */}
        <Hero />
        <About />
        <Carta />
        <Tarifario />
        <Promocion /> 
        <Testimonials />
        <Boletin /> 
      </main>
    </div>
  );
}

export default App;