import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeuralBrain from './NeuralBrain';

const HeroV2: React.FC = () => {
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);
  const brainScale = useTransform(scrollY, [0, 600], [1, 1.5]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Fondo de rejilla activa */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent"></div>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* El Cerebro Neural de Conectores - mantenemos el asset pero cambiamos algo la semántica visual si es posible, o lo dejamos para la estética premium */}
        <motion.div 
          style={{ scale: brainScale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        >
          <NeuralBrain size="w-[700px] h-[700px] md:w-[900px] md:h-[900px]" />
        </motion.div>

        {/* Branding Centralizado */}
        <div className="relative z-10 flex flex-col items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex font-extrabold text-7xl md:text-[10rem] tracking-[-0.05em] items-baseline"
          >
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Nex</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">OS</span>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-md w-full mb-8"
          />

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs md:text-sm font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-blue-400/80 mb-10 text-center"
          >
            ECOSISTEMA DE SISTEMAS OPERATIVOS PARA NEGOCIOS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-slate-400 text-lg md:text-xl font-light tracking-wide max-w-2xl text-center px-6 leading-relaxed"
          >
            NexOS crea sistemas operativos invisibles para automatizar tareas,
            quitar carga operativa y darte control de un vistazo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="https://wa.me/34641996450?text=Hola%20GlorIA%2C%20quiero%20automatizar%20mi%20negocio%20con%20NexOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
            >
              Quiero automatizar mi negocio
            </a>
            <a
              href="#ecosistema"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-6 text-xs font-black uppercase tracking-[0.2em] text-slate-300 transition hover:border-blue-400/30 hover:text-white"
            >
              Ver productos OS
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-4"
        >
          <div className="w-px h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroV2;
