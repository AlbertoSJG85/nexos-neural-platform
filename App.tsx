
import React, { useEffect, useState } from 'react';
import NavbarV2 from './components/NavbarV2';
import HeroV2 from './components/HeroV2';
import WhatIsNexOS from './components/WhatIsNexOS';
import BeforeAfter from './components/BeforeAfter';
import EcosystemV2 from './components/EcosystemV2';
import NeuralHubV2 from './components/NeuralHubV2';
import CoreLayer from './components/CoreLayer';
import ProjectsAndLab from './components/ProjectsAndLab';
import MetricsV2 from './components/MetricsV2';
import Footer from './components/Footer';
import StarField from './components/StarField';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import DataDeletion from './components/DataDeletion';
import Lucia from './components/Lucia';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    document.title = "NexOS | Sistemas operativos invisibles para negocios reales";
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simple path-based routing
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Privacy Policy page
  if (currentPath === '/privacidad') {
    return <PrivacyPolicy />;
  }

  // Terms of Service page
  if (currentPath === '/terminos') {
    return <Terms />;
  }

  // Data Deletion page (requerida por Meta App Review)
  if (currentPath === '/eliminacion-datos') {
    return <DataDeletion />;
  }

  // LucIA public info page (OAuth verification)
  if (currentPath === '/lucia') {
    return <Lucia />;
  }

  // Landing page (default)
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200 bg-black">
      {/* Dynamic Cursor Glow */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Deep Space Starfield */}
      <StarField />

      <NavbarV2 />
      <main className="relative z-10">
        <HeroV2 />
        <WhatIsNexOS />
        <BeforeAfter />
        <EcosystemV2 />
        <NeuralHubV2 />
        <CoreLayer />
        <ProjectsAndLab />
        <MetricsV2 />
      </main>
      <Footer />
    </div>
  );
};

export default App;
