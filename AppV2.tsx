import React, { useEffect, useState } from 'react';
import NavbarV2 from './components/NavbarV2';
import HeroV2 from './components/HeroV2';
import EcosystemV2 from './components/EcosystemV2';
import InterfaceShowcase from './components/InterfaceShowcase';
import NeuralHubV2 from './components/NeuralHubV2';
import MetricsV2 from './components/MetricsV2';
import Footer from './components/Footer';
import StarField from './components/StarField';

const AppV2: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "NexOS | Control y Automatización para tu Negocio";
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200 bg-black">
      {/* V2 Header Badge para contexto */}
      <div className="fixed top-24 right-4 z-50 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest py-2 px-4 rounded-full shadow-lg border border-blue-400/50 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
        Variante Operativa V2
      </div>

      <a 
        href="/" 
        onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-3 rounded-full cursor-pointer hover:bg-blue-500 transition-colors border border-blue-400/50 backdrop-blur-md flex items-center gap-2 shadow-[0_10px_40px_rgba(59,130,246,0.3)]"
      >
        <span className="material-symbols-outlined text-[14px]">arrow_back</span>
        Volver a Original
      </a>

      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <StarField />

      <NavbarV2 />
      <main className="relative z-10">
        <HeroV2 />
        <EcosystemV2 />
        <InterfaceShowcase />
        <NeuralHubV2 />
        <MetricsV2 />
      </main>
      <Footer />
    </div>
  );
};

export default AppV2;
