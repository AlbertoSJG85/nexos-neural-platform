import React from 'react';
import { motion } from 'framer-motion';

const columns = [
  {
    label: 'Cómo funciona',
    text: 'El software que sostiene un negocio por detrás. Recoge lo que pasa, lo ordena, avisa a quien tiene que actuar y deja constancia de todo. No hay que estar delante de una pantalla para que funcione.',
    accent: false,
  },
  {
    label: 'Para qué sirve',
    text: 'Tiempo para tu gente, para descansar, o para hacer crecer el negocio en vez de sostenerlo.',
    accent: true,
  },
];

const WhatIsNexOS: React.FC = () => {
  return (
    <section id="que-es" className="py-32 md:py-40 relative bg-transparent overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/3 w-[800px] h-[500px] translate-x-1/3 bg-blue-600/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="text-blue-500 font-black uppercase text-[11px] tracking-[0.6em] block mb-10"
        >
          QUÉ ES NEXOS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[1.08] max-w-5xl"
        >
          NexOS construye sistemas operativos invisibles.
          <span className="block mt-3 text-slate-500">
            Al final no tendrás un software nuevo:{' '}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              tendrás tiempo.
            </span>
          </span>
        </motion.h2>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {columns.map((column, i) => (
            <motion.div
              key={column.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              className="relative pt-8"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: 'easeOut' }}
                style={{ originX: 0 }}
                className={`absolute top-0 inset-x-0 h-px ${
                  column.accent
                    ? 'bg-gradient-to-r from-blue-500 to-blue-500/10'
                    : 'bg-gradient-to-r from-white/20 to-white/[0.02]'
                }`}
              />

              <span
                className={`text-[10px] font-black uppercase tracking-[0.35em] block mb-6 ${
                  column.accent ? 'text-blue-400' : 'text-slate-500'
                }`}
              >
                {column.label}
              </span>

              <p
                className={`text-lg md:text-2xl font-light leading-relaxed ${
                  column.accent ? 'text-slate-200' : 'text-slate-400'
                }`}
              >
                {column.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIsNexOS;
