
import React from 'react';
import { motion } from 'framer-motion';

const NeuralBrain: React.FC<{ size?: string }> = ({ size = "w-[600px] h-[600px]" }) => {
  return (
    <div className={`relative ${size} flex items-center justify-center opacity-40`}>
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Definición de gradientes y filtros */}
        <defs>
          <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="180" fill="url(#brainGlow)" />

        {/* Conectores y Rutas Neurales */}
        <g stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4">
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={i}
              d={`M200 200 L${200 + 150 * Math.cos(i * 30 * Math.PI / 180)} ${200 + 150 * Math.sin(i * 30 * Math.PI / 180)}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
            />
          ))}
          
          {/* Formas orgánicas de cerebro hechas de circuitos */}
          <path d="M150 120 Q200 80 250 120 T350 200" />
          <path d="M150 280 Q200 320 250 280 T350 200" />
          <path d="M100 200 Q150 150 200 200 T300 250" />
          
          {/* Líneas de conexión horizontales */}
          {[120, 160, 200, 240, 280].map((y, i) => (
            <motion.path
              key={`h-${i}`}
              d={`M${100 + i * 10} ${y} H${300 - i * 10}`}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </g>

        {/* Nodos Pulsantes */}
        {[
          {x: 200, y: 100}, {x: 100, y: 200}, {x: 300, y: 200}, 
          {x: 200, y: 300}, {x: 150, y: 150}, {x: 250, y: 150},
          {x: 150, y: 250}, {x: 250, y: 250}
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="#3b82f6"
            animate={{ r: [3, 6, 3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralBrain;
