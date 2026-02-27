
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NeuralHub: React.FC = () => {
  const [pulseActive, setPulseActive] = useState(false);

  // Simulación del ciclo de vida de GlorIA: Evento -> Pulso -> Decisión
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Generar conexiones aleatorias suaves para el cerebro
  const synapses = [
    { d: "M30 40 Q45 30 50 50 T70 60", delay: 0 },
    { d: "M25 55 Q40 50 50 45 T75 40", delay: 0.5 },
    { d: "M40 70 Q50 60 60 70 T80 50", delay: 1 },
    { d: "M20 50 Q35 45 50 25 T80 30", delay: 1.5 },
    { d: "M50 20 Q55 40 50 60 T50 85", delay: 0.8 },
    { d: "M35 30 Q50 50 65 70", delay: 1.2 },
  ];

  return (
    <section className="py-40 relative overflow-hidden bg-black" id="hub">
      {/* Brillo ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Bloque de Título y Narrativa - Mantenido EXACTO */}
        <div className="text-center mb-32 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.6em] text-[10px] block opacity-40 mb-10">
              CONCIENCIA OPERATIVA
            </span>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Tu Agente Personal.
            </h2>
            
            <p className="text-2xl md:text-4xl font-bold text-blue-500 tracking-tight mb-16">
              Precisa en cada decisión. Siempre activa.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 2 }}
              className="mt-4"
            >
              <p className="text-lg md:text-xl font-light text-slate-500 tracking-wide italic">
                GlorIA, siempre contigo.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* El Núcleo Central de GlorIA - Cerebro con Neuroconectores Suaves */}
        <div className="relative flex justify-center items-center py-20 scale-100 md:scale-125">
          
          {/* Líneas de flujo externas con Impulsos Intensos */}
          <svg className="absolute w-full max-w-5xl h-[400px] pointer-events-none overflow-visible">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="neonGlowHub">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Impulsos Entrantes */}
            {[1, 2, 3].map((i) => (
              <motion.path
                key={`in-${i}`}
                d={`M ${-200} ${50 * i + 100} Q ${100} ${180} 450 200`}
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 0.3, 0],
                  pathOffset: [0, 1.1],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 1.2,
                  ease: "easeInOut"
                }}
                filter="url(#neonGlowHub)"
              />
            ))}

            {/* Impulsos Salientes */}
            {[1, 2, 3].map((i) => (
              <motion.path
                key={`out-${i}`}
                d={`M 450 200 Q 800 220 ${1100} ${50 * i + 100}`}
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 0.3, 0],
                  pathOffset: [0, 1.1],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                filter="url(#neonGlowHub)"
              />
            ))}
          </svg>

          {/* Contenedor del Cerebro */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Aura de fondo suave */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px]"
            />

            {/* Pulso de Respuesta expansivo */}
            <AnimatePresence>
              {pulseActive && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute w-40 h-40 rounded-full border border-blue-400/30 shadow-[0_0_100px_rgba(59,130,246,0.2)]"
                />
              )}
            </AnimatePresence>

            {/* El Cerebro de Neuroconectores */}
            <div className="relative z-20 w-52 h-52 md:w-64 md:h-64 rounded-full glass border-blue-500/20 flex items-center justify-center shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]">
              
              <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-48 md:h-48 overflow-visible">
                <defs>
                  <filter id="synapseGlow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Estructura Cerebral Base (Silueta muy suave) */}
                <path 
                  d="M50 15 C30 15 15 35 15 55 C15 75 35 85 50 85 C65 85 85 75 85 55 C85 35 70 15 50 15 Z" 
                  fill="none" 
                  stroke="rgba(59,130,246,0.05)" 
                  strokeWidth="0.5"
                />

                {/* Neuroconectores Suaves (Líneas orgánicas) */}
                {synapses.map((syn, i) => (
                  <g key={`syn-${i}`}>
                    <path 
                      d={syn.d} 
                      stroke="rgba(59,130,246,0.15)" 
                      strokeWidth="0.8" 
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Impulso viajando por el conector */}
                    <motion.path
                      d={syn.d}
                      stroke="#60a5fa"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 0.2, 0], 
                        pathOffset: [0, 1],
                        opacity: pulseActive ? [0, 1, 0] : [0, 0.4, 0]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        delay: syn.delay + (Math.random() * 2),
                        ease: "linear"
                      }}
                      filter="url(#synapseGlow)"
                    />
                  </g>
                ))}

                {/* Nodos Sinápticos (Puntos de conexión) */}
                {[
                  {x: 50, y: 50}, {x: 35, y: 35}, {x: 65, y: 35}, 
                  {x: 25, y: 55}, {x: 75, y: 55}, {x: 40, y: 75}, 
                  {x: 60, y: 75}, {x: 50, y: 25}, {x: 50, y: 75}
                ].map((node, i) => (
                  <motion.circle
                    key={`node-${i}`}
                    cx={node.x}
                    cy={node.y}
                    r="1"
                    fill="#3b82f6"
                    animate={{ 
                      r: pulseActive ? [1, 2.5, 1] : [1, 1.5, 1],
                      fill: pulseActive ? "#60a5fa" : "#3b82f6",
                      opacity: pulseActive ? [0.4, 1, 0.4] : [0.2, 0.6, 0.2]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  />
                ))}
              </svg>

              {/* Anillos orbitales muy finos */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 border border-dashed border-blue-500/5 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Atributos de Presencia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24 border-t border-white/5 pt-24 max-w-5xl mx-auto">
          {[
            { label: 'CONCIENCIA', val: 'Analítica', desc: 'No solo responde, anticipa flujos operativos.' },
            { label: 'EJECUCIÓN', val: 'Limpia', desc: 'Despacho de acciones sin ruido ni fricción.' },
            { label: 'PRESENCIA', val: 'Continuada', desc: 'Acompañamiento técnico en cada micro-proceso.' },
          ].map((attr, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 5.5 + (i * 0.1) }}
              className="text-center md:text-left"
            >
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-blue-500/40 block mb-3">{attr.label}</span>
              <h4 className="text-white font-bold text-2xl mb-2">{attr.val}</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed tracking-wide">{attr.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NeuralHub;
