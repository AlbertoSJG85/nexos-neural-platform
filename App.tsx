
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import InterfaceShowcase from './components/InterfaceShowcase';
import NeuralHub from './components/NeuralHub';
import Metrics from './components/Metrics';
import Footer from './components/Footer';
import StarField from './components/StarField';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simple path-based routing (no external dependency needed)
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

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Ecosystem />
        <InterfaceShowcase />
        <NeuralHub />
        <Metrics />
      </main>
      <Footer />
    </div>
  );
};

export default App;
