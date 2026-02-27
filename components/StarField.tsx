
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const StarField: React.FC = () => {
  // Generamos un set de estrellas más denso y variado
  const stars = useMemo(() => {
    return [...Array(250)].map((_, i) => {
      const isBlue = Math.random() > 0.8; // Algunas estrellas serán azuladas para el branding
      return {
        id: i,
        size: Math.random() * 2.5 + 0.5,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.7 + 0.2, // Opacidad base más alta
        color: isBlue ? '#3b82f6' : '#ffffff',
        glow: Math.random() > 0.7, // Algunas estrellas tienen brillo extra
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      {/* Añadimos un sutil gradiente radial de profundidad en el fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.3)_0%,transparent_100%)]"></div>
      
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: star.glow || star.size > 2 
              ? `0 0 ${star.size * 3}px ${star.color}` 
              : 'none',
          }}
          animate={{
            opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
