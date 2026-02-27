
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InterfaceShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);

  // Definición de los nodos del flujo neural
  const nodes = [
    { id: 0, icon: 'mail', label: 'Evento', x: '15%', y: '50%' },
    { id: 1, icon: 'description', label: 'Procesado', x: '32%', y: '30%' },
    { id: 2, icon: 'cloud_done', label: 'Sincronía', x: '50%', y: '50%' },
    { id: 3, icon: 'table_chart', label: 'Registro', x: '68%', y: '70%' },
    { id: 4, icon: 'forum', label: 'Ejecución', x: '85%', y: '50%' },
  ];

  // Conexiones entre nodos (índices)
  const paths = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
  ];

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      setActiveStep(0);
      interval = setInterval(() => {
        setActiveStep((prev) => (prev < nodes.length - 1 ? prev + 1 : 0));
      }, 1500);
    } else {
      setActiveStep(-1);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-40 relative overflow-hidden bg-black" id="interfaz-sinaptica">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Títulos Minimalistas */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4"
          >
            Interfaz <span className="text-blue-500 text-glow">Sináptica</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="text-slate-400 text-sm font-light tracking-[0.3em] uppercase"
          >
            Los eventos entran. El sistema ejecuta.
          </motion.p>
        </div>

        {/* Canvas de Flujo (Tablet horizontal) */}
        <div 
          className="relative w-full max-w-5xl mx-auto aspect-[21/9] md:aspect-[21/10] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Bezel de la Tablet */}
          <div className="absolute inset-0 bg-[#0a0a0a] rounded-[3rem] border-[12px] md:border-[16px] border-[#151515] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden">
            
            {/* Pantalla / Canvas */}
            <div className="relative w-full h-full bg-[#030303] overflow-hidden">
              
              {/* Grid sutil */}
              <div className="absolute inset-0 figma-grid opacity-10 pointer-events-none" />

              {/* Capa de Conexiones (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {paths.map((path, i) => {
                  const fromNode = nodes[path.from];
                  const toNode = nodes[path.to];
                  const isActive = activeStep >= path.to;
                  const isFlowing = activeStep === path.to;

                  return (
                    <g key={`path-${i}`}>
                      {/* Línea base */}
                      <line 
                        x1={fromNode.x} y1={fromNode.y} 
                        x2={toNode.x} y2={toNode.y} 
                        stroke="rgba(255,255,255,0.05)" 
                        strokeWidth="1.5"
                      />
                      {/* Línea de energía activa */}
                      <motion.line 
                        x1={fromNode.x} y1={fromNode.y} 
                        x2={toNode.x} y2={toNode.y} 
                        stroke={isActive ? "#3b82f6" : "transparent"}
                        strokeWidth="1.5"
                        strokeDasharray="1000"
                        initial={{ strokeDashoffset: 1000 }}
                        animate={{ strokeDashoffset: isActive ? 0 : 1000 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        filter="url(#glow)"
                        className="opacity-60"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Capa de Nodos */}
              {nodes.map((node, i) => {
                const isActive = activeStep === i;
                const isCompleted = activeStep > i;
                const isIdle = activeStep === -1;

                return (
                  <motion.div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4"
                    style={{ left: node.x, top: node.y }}
                  >
                    {/* El Nodo Físico */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        backgroundColor: isActive ? 'rgba(59,130,246,0.1)' : 'transparent',
                        borderColor: isActive ? '#3b82f6' : isCompleted ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.05)'
                      }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 flex items-center justify-center backdrop-blur-sm transition-colors duration-500"
                    >
                      <motion.span 
                        animate={{
                          color: isActive || isCompleted ? '#3b82f6' : '#334155',
                          opacity: isActive || isCompleted ? 1 : 0.4
                        }}
                        className="material-symbols-outlined text-2xl md:text-3xl"
                      >
                        {node.icon}
                      </motion.span>
                      
                      {/* Aura de actividad */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-2xl border-2 border-blue-500/50"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Etiqueta Minimalista */}
                    <motion.span 
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 5
                      }}
                      className="text-[9px] font-black tracking-[0.3em] uppercase text-blue-500"
                    >
                      {node.label}
                    </motion.span>
                  </motion.div>
                );
              })}

              {/* Barra de progreso de estado en la parte inferior */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {nodes.map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{
                        backgroundColor: activeStep >= i ? '#3b82f6' : 'rgba(255,255,255,0.05)',
                        width: activeStep === i ? 24 : 6
                      }}
                      className="h-1 rounded-full transition-all duration-500"
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          {/* Sombra de apoyo */}
          <div className="absolute -bottom-12 inset-x-20 h-12 bg-blue-900/10 blur-[60px] rounded-full pointer-events-none" />
        </div>

        {/* Instrucción sutil */}
        <div className="mt-16 text-center">
          <motion.div 
            animate={{ opacity: isHovered ? 0 : 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined text-sm animate-pulse">touch_app</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Pasa el ratón para activar el flujo neural</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default InterfaceShowcase;
