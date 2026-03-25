import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NeuralHubV2: React.FC = () => {
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Circuit board traces (orthogonal and 45deg angles) resembling a brain topology
  const circuitTraces = [
    "M 50 15 L 45 15 L 35 25 L 35 45 L 25 45 L 20 50 L 20 65 L 30 75 L 45 75 L 45 85 L 50 90", // Left hemisphere outer
    "M 50 15 L 55 15 L 65 25 L 65 45 L 75 45 L 80 50 L 80 65 L 70 75 L 55 75 L 55 85 L 50 90", // Right hemisphere outer
    "M 50 20 L 50 85", // Center stem
    "M 35 25 L 45 25 L 50 30", // Internal route
    "M 65 25 L 55 25 L 50 30", // Internal route right
    "M 25 45 L 40 45 L 50 55", // Mid route left
    "M 75 45 L 60 45 L 50 55", // Mid route right
    "M 30 65 L 45 65 L 50 70", // Lower route
    "M 70 65 L 55 65 L 50 70", // Lower route right
    "M 45 35 L 50 35 L 55 40", 
    "M 55 35 L 50 40 L 45 40",
  ];

  // Dots for circuit nodes
  const nodes = [
    {x: 50, y: 15}, {x: 45, y: 15}, {x: 35, y: 25}, {x: 35, y: 45}, {x: 25, y: 45}, {x: 20, y: 50}, 
    {x: 20, y: 65}, {x: 30, y: 75}, {x: 45, y: 75}, {x: 45, y: 85}, {x: 50, y: 90},
    {x: 55, y: 15}, {x: 65, y: 25}, {x: 65, y: 45}, {x: 75, y: 45}, {x: 80, y: 50},
    {x: 80, y: 65}, {x: 70, y: 75}, {x: 55, y: 75}, {x: 55, y: 85},
    {x: 50, y: 20}, {x: 50, y: 30}, {x: 50, y: 55}, {x: 50, y: 70},
    {x: 45, y: 25}, {x: 55, y: 25}, {x: 40, y: 45}, {x: 60, y: 45}, 
    {x: 45, y: 65}, {x: 55, y: 65}, {x: 45, y: 35}, {x: 50, y: 35}, {x: 55, y: 40},
    {x: 55, y: 35}, {x: 50, y: 40}, {x: 45, y: 40}
  ];

  return (
    <section className="py-40 relative overflow-hidden bg-[#020617]" id="hub"> {/* Dark navy background */}
      {/* Background Deep Navy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#1e3a8a]/10 rounded-full blur-[180px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Narrativa - CEREBRO DEL ECOSISTEMA */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-[#38bdf8] font-black uppercase tracking-[0.6em] text-[10px] block mb-8 border border-[#0ea5e9]/30 py-1.5 px-4 rounded-full bg-[#0ea5e9]/10 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              EL CEREBRO DEL ECOSISTEMA
            </span>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Mucho más que un asistente.
            </h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="mt-6 max-w-3xl"
            >
              <p className="text-lg md:text-xl font-light text-slate-400 tracking-wide leading-relaxed mb-6">
                GlorIA no es un asistente aislado. Es el cerebro visible que conecta productos, interpreta el contexto y activa la operativa correcta en cada momento.
              </p>
              <motion.p 
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-[#38bdf8] tracking-tight"
              >
                GlorIA siempre activa, siempre contigo
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* El Núcleo Central de GlorIA - Asset Estático con Conectores Laterales */}
        <div className="relative flex justify-center items-center py-10 scale-100 md:scale-110 mb-16">
          
          {/* Conectores Laterales Animados (Entrada y Salida de señal) */}
          <svg className="absolute w-full max-w-5xl h-[400px] pointer-events-none overflow-visible z-0" viewBox="0 0 1000 400">
            <defs>
              <filter id="connectorGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Rutas Base Izquierda (Entrada) */}
            {[
              "M 50 120 L 250 120 L 300 170 L 380 170",
              "M 0 200 L 380 200",
              "M 50 280 L 200 280 L 250 230 L 380 230"
            ].map((d, i) => (
              <g key={`left-${i}`}>
                <path d={d} stroke="url(#fadeLeft)" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="square" />
                <motion.path
                  d={d}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="square"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 0.4, 0], 
                    pathOffset: [0, 1],
                    opacity: pulseActive ? [0, 1, 0] : [0, 0.3, 0]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                  filter="url(#connectorGlow)"
                />
                <motion.circle 
                  cx={380} cy={i === 0 ? 170 : i === 1 ? 200 : 230}
                  r="2" fill="#bae6fd"
                  animate={{ opacity: pulseActive ? [0.2, 1, 0.2] : 0.2, scale: pulseActive ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  filter="url(#connectorGlow)"
                />
              </g>
            ))}

            {/* Rutas Base Derecha (Salida) */}
            {[
              "M 620 170 L 700 170 L 750 120 L 950 120",
              "M 620 200 L 1000 200",
              "M 620 230 L 750 230 L 800 280 L 950 280"
            ].map((d, i) => (
              <g key={`right-${i}`}>
                <path d={d} stroke="url(#fadeRight)" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="square" />
                <motion.path
                  d={d}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="square"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 0.4, 0], 
                    pathOffset: [0, 1],
                    opacity: pulseActive ? [0, 1, 0] : [0, 0.3, 0]
                  }}
                  transition={{ duration: 3.5 + i, repeat: Infinity, delay: i * 0.6 + 1.5, ease: "easeInOut" }}
                  filter="url(#connectorGlow)"
                />
                <motion.circle 
                  cx={620} cy={i === 0 ? 170 : i === 1 ? 200 : 230}
                  r="2" fill="#bae6fd"
                  animate={{ opacity: pulseActive ? [0.2, 1, 0.2] : 0.2, scale: pulseActive ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 + 1 }}
                  filter="url(#connectorGlow)"
                />
              </g>
            ))}
          </svg>

          {/* Contenedor del Cerebro (Estático) */}
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center z-10">
            
            {/* Aura de fondo */}
            <motion.div 
              animate={{ opacity: pulseActive ? 0.3 : 0.15 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#0ea5e9]/20 rounded-full blur-[80px] -z-10"
            />

            {/* Asset de Imagen Estático (Proporcionado por UX/UI) */}
            <img 
              src="/gloria-brain.png" 
              alt="GlorIA Neural Core" 
              className="w-full h-full object-contain relative z-10 mix-blend-screen opacity-90 drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            />

            {/* GlorIA Badge centered in the brain (Mantenido intacto) */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div 
                className="bg-[#020617]/80 backdrop-blur-[4px] border border-[#0ea5e9]/50 px-6 py-2 rounded-lg shadow-[0_0_30px_rgba(14,165,233,0.4)]"
                animate={{ 
                  boxShadow: pulseActive 
                    ? "0 0 50px rgba(56,189,248,0.8), inset 0 0 20px rgba(56,189,248,0.3)" 
                    : "0 0 30px rgba(14,165,233,0.4), inset 0 0 10px rgba(14,165,233,0.1)",
                  borderColor: pulseActive ? "rgba(56,189,248,0.8)" : "rgba(14,165,233,0.5)"
                }}
                transition={{ duration: 2 }}
              >
                <span className="font-extrabold text-3xl tracking-tight text-white drop-shadow-[0_0_10px_#bae6fd]">
                  Glor<span className="text-[#38bdf8]">IA</span>
                </span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Atributos de Presencia - Ajustados sutilmente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-[#1e3a8a]/30 pt-20 max-w-5xl mx-auto">
          {[
            { label: 'COORDINACIÓN TOTAL', val: 'Registro Absoluto', desc: 'Guarda estados, prioridades e historial en base de datos. Nada se pierde en un hilo de chat.' },
            { label: 'EJECUCIÓN SILENCIOSA', val: 'Orquestación', desc: 'Acciona flujos, interactúa con APIs externas y actualiza el sistema operativo sin intervención manual.' },
            { label: 'INTERFAZ NATURAL', val: 'Canales Naturales', desc: 'No hay que descargar apps. GlorIA opera vía WhatsApp interactivamente cuando tú o tu equipo lo necesitáis.' },
          ].map((attr, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="text-center md:text-left bg-[#0f172a]/30 p-8 rounded-3xl border border-[#1e3a8a]/20 backdrop-blur-sm"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#38bdf8]/60 block mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full inline-block"></span>
                {attr.label}
              </span>
              <h4 className="text-white font-bold text-2xl mb-3">{attr.val}</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed tracking-wide">{attr.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NeuralHubV2;
