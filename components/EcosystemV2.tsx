import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const EcosystemV2: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  const productZ = useTransform(smoothProgress, [0, 0.8], [-1500, 0]);
  const productScale = useTransform(smoothProgress, [0, 0.8], [0.2, 1]);
  const productOpacity = useTransform(smoothProgress, [0, 0.4, 0.8], [0, 0.3, 1]);
  const productBlur = useTransform(smoothProgress, [0, 0.6, 0.8], [20, 5, 0]);
  const masterLetterSpacing = useTransform(smoothProgress, [0.7, 1], ["0.02em", "0.1em"]);
  const subTextY = useTransform(smoothProgress, [0.8, 1], [20, 0]);
  const subTextOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  const nodes = [
    { 
      id: 'RentOS',
      icon: 'home_work', 
      name: 'RentOS', 
      color: 'text-blue-400', 
      status: 'Operativo en Producción',
      isIncubation: false,
      desc: 'El sistema operativo de NexOS para alquiler vacacional. Su función es ordenar y automatizar la operación real del alojamiento. Gestión operativa de reservas, comunicación con huéspedes, coordinación automática, avisos y flujos operativos para que disfrutes de menos fricción diaria y más control.' 
    },
    { 
      id: 'PilotOS',
      icon: 'local_taxi', 
      name: 'PilotOS', 
      color: 'text-indigo-400', 
      status: 'Casi Listo / Pre-Lanzamiento',
      isIncubation: false,
      desc: 'El sistema operativo de NexOS para la operativa del taxi. Control de partes, gastos, mantenimientos y alertas. Una visión operativa completa que reduce la carga manual y aporta un nuevo nivel de orden y control diario.' 
    },
    { 
      id: 'IngresOS',
      icon: 'account_balance', 
      name: 'IngresOS', 
      color: 'text-cyan-600', 
      status: 'En Laboratorio',
      isIncubation: true,
      desc: 'Capa / sistema orientado a ingresos, cobros, control económico y flujo financiero operativo integrado dentro del ecosistema NexOS.' 
    },
    { 
      id: 'VecinOS',
      icon: 'domain', 
      name: 'VecinOS', 
      color: 'text-slate-500', 
      status: 'En Incubación',
      isIncubation: true,
      desc: 'Sistema operativo orientado a la operación de comunidades de vecinos y su gestión relacionada. Coordinación y mantenimiento sin fricción.' 
    }
  ];

  return (
    <section ref={containerRef} className="py-24 relative bg-transparent overflow-hidden" id="ecosistema">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-blue-500 font-black uppercase text-sm tracking-[1.2em] mb-12 block opacity-80">
            SOLUCIONES OPERATIVAS
          </span>
          
          <div className="relative perspective-[2000px] flex flex-col items-center justify-center min-h-[250px] w-full">
            <motion.div 
              style={{ letterSpacing: masterLetterSpacing }}
              className="flex items-center justify-center flex-wrap"
            >
              <motion.span 
                style={{ 
                  z: productZ, 
                  scale: productScale, 
                  opacity: productOpacity,
                  filter: `blur(${productBlur}px)`
                }}
                className="text-4xl md:text-[6rem] font-black text-white tracking-tighter"
              >
                Nuestros product
              </motion.span>
              
              <div className="relative z-20">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                  className="text-5xl md:text-[7rem] font-black text-blue-500 drop-shadow-[0_0_60px_rgba(59,130,246,0.8)]"
                >
                  OS
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: subTextY, opacity: subTextOpacity }}
              className="text-xl md:text-3xl font-light tracking-[0.25em] text-slate-500 mt-4 lowercase"
            >
              <span className="text-blue-500 font-black uppercase text-glow">O</span>perative 
              <span className="mx-3"></span>
              <span className="text-blue-500 font-black uppercase text-glow">S</span>ystems
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 min-h-[460px] mt-8">
          {nodes.map((node, index) => {
            const isActive = activeIndex === index;
            const incOpacity = node.isIncubation ? (isActive ? 'opacity-90' : 'opacity-40') : (isActive ? 'opacity-100' : 'opacity-70');
            const bgClass = node.isIncubation 
                  ? (isActive ? 'bg-[#050505] border-white/10' : 'bg-transparent border-white/5 border-dashed hover:border-white/10')
                  : (isActive ? 'bg-white/[0.04] border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]' : 'hover:bg-white/[0.03] hover:border-white/10 glass border-white/5');

            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{ 
                  flex: isActive ? (node.isIncubation ? 2 : 2.5) : 0.8,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border transition-all duration-500 group ${bgClass} ${incOpacity} ${node.isIncubation ? 'saturate-50 hover:saturate-100' : ''}`}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Cabecera de la Tarjeta */}
                  <div className={`flex items-center transition-all duration-500 ${isActive ? 'flex-row gap-5' : 'flex-col gap-5'}`}>
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${node.color} ${isActive ? (node.isIncubation ? 'bg-white/5 border border-white/10' : 'bg-blue-600/20 shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/30') : 'bg-white/5'}`}>
                      <span className="material-symbols-outlined text-3xl md:text-4xl">{node.icon}</span>
                    </div>
                    
                    <div className={`transition-all duration-500 ${isActive ? 'translate-y-0' : 'rotate-0 lg:rotate-90 lg:mt-24'}`}>
                        <h3 className={`font-black tracking-tighter whitespace-nowrap ${isActive ? (node.isIncubation ? 'text-2xl md:text-3xl text-slate-300' : 'text-3xl md:text-4xl text-white') : 'text-xl opacity-60 text-slate-400'}`}>
                          {node.name.slice(0, -2)}
                          <span className={`${node.isIncubation ? 'text-slate-400' : 'text-blue-500'} ml-1`}>OS</span>
                        </h3>
                        {isActive && node.isIncubation && (
                          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-1 block">{node.status}</span>
                        )}
                    </div>
                  </div>

                  {/* Contenido Dinámico */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex flex-col flex-grow"
                      >
                        <p className={`${node.isIncubation ? 'text-slate-400 text-base' : 'text-slate-300 text-lg'} font-light leading-relaxed max-w-md`}>
                          {node.desc}
                        </p>
                        
                        {!node.isIncubation && (
                          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/60">Estado de Despliegue</span>
                              <span className="text-xs font-mono text-slate-400 uppercase mt-1 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                {node.status}
                              </span>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {isActive && !node.isIncubation && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent mx-auto mt-12"
        ></motion.div>
      </div>
    </section>
  );
};

export default EcosystemV2;
