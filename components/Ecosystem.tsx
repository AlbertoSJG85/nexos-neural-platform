
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const Ecosystem: React.FC = () => {
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

  // RESTAURACIÓN CABECERA: Volvemos a los valores que te gustaban
  const productZ = useTransform(smoothProgress, [0, 0.8], [-1500, 0]);
  const productScale = useTransform(smoothProgress, [0, 0.8], [0.2, 1]);
  const productOpacity = useTransform(smoothProgress, [0, 0.4, 0.8], [0, 0.3, 1]);
  const productBlur = useTransform(smoothProgress, [0, 0.6, 0.8], [20, 5, 0]);
  const masterLetterSpacing = useTransform(smoothProgress, [0.7, 1], ["0.02em", "0.1em"]);
  const subTextY = useTransform(smoothProgress, [0.8, 1], [20, 0]);
  const subTextOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  const nodes = [
    { icon: 'home_work', name: 'RentOS', color: 'text-blue-400', desc: 'Gestión autónoma de activos inmobiliarios y rentas con conciliación bancaria instantánea.' },
    { icon: 'flight_takeoff', name: 'PilotOS', color: 'text-indigo-400', desc: 'Navegación inteligente de procesos logísticos. El piloto automático de tu cadena de suministro.' },
    { icon: 'payments', name: 'IngresOS', color: 'text-cyan-400', desc: 'Protocolos de auditoría financiera en tiempo real.' },
    { icon: 'sensors', name: 'RadiOS', color: 'text-blue-300', desc: 'Sistemas de escucha y comunicación omnicanal proactiva.' },
    { icon: 'account_tree', name: 'LogicOS', color: 'text-blue-600', desc: 'El cerebro de las decisiones. Árboles lógicos deterministas.' },
  ];

  return (
    <section ref={containerRef} className="py-24 relative bg-transparent overflow-hidden" id="ecosistema">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabecera Restaurada (Perfecta como estaba antes) */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-blue-500 font-black uppercase text-sm tracking-[1.2em] mb-12 block opacity-80">
            ECOSISTEMA
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

        {/* Acordeón de Productos: Tarjetas más pequeñas */}
        <div className="flex flex-col lg:flex-row w-full gap-3 min-h-[420px] mt-8">
          {nodes.map((node, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{ 
                  flex: isActive ? 2.5 : 0.8,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/5 glass transition-all duration-500 group ${isActive ? 'bg-white/[0.04] border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]' : 'hover:bg-white/[0.02] hover:border-white/10'}`}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  {/* Cabecera de la Tarjeta Reducida */}
                  <div className={`flex items-center transition-all duration-500 ${isActive ? 'flex-row gap-4' : 'flex-col gap-4'}`}>
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${node.color} ${isActive ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5'}`}>
                      <span className="material-symbols-outlined text-2xl md:text-3xl">{node.icon}</span>
                    </div>
                    
                    <h3 className={`font-black text-white tracking-tighter transition-all duration-500 ${isActive ? 'text-2xl md:text-3xl' : 'text-lg rotate-0 lg:rotate-90 lg:mt-20 whitespace-nowrap opacity-60'}`}>
                      {node.name.slice(0, -2)}
                      <span className="text-blue-500 ml-1">OS</span>
                    </h3>
                  </div>

                  {/* Contenido Dinámico */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 flex flex-col flex-grow"
                      >
                        <p className="text-slate-400 font-light text-base leading-relaxed max-w-sm">
                          {node.desc}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-blue-500/40">Node ID</span>
                            <span className="text-[9px] font-mono text-slate-500 uppercase">0{index + 1}_V4</span>
                          </div>
                          
                          <motion.button 
                            whileHover={{ x: 3 }}
                            className="flex items-center gap-2 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] group"
                          >
                            <span>Acceder</span>
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {isActive && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
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

export default Ecosystem;
