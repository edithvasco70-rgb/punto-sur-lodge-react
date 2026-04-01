import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// 1. IMPORTA AQUÍ EL NUEVO COMPONENTE
import About from './components/About'; 

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-punto-turquesa selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* 2. REEMPLAZA EL COMENTARIO POR EL COMPONENTE */}
        <About /> 
      </main>
    </div>
  );
}

export default App;