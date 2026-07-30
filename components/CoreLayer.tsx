import React from 'react';
import { motion } from 'framer-motion';

const pieces = [
  {
    tag: 'NEXOS PAY',
    status: 'Infraestructura interna · En uso',
    title: 'Quién es cliente y a qué tiene acceso',
    text: 'Clientes, planes contratados, cuotas, impagos y límites de uso viven en un único sitio. Si un cliente deja de estar al día, el sistema lo sabe y actúa en consecuencia.',
    note: 'No es una pasarela de pago: NexOS Pay no mueve dinero ni custodia fondos de nadie.',
    icon: 'account_balance_wallet',
  },
  {
    tag: 'BASE ÚNICA',
    status: 'Infraestructura interna',
    title: 'Un cliente es el mismo cliente en todos lados',
    text: 'Todos los productos escriben en la misma base de datos, con su propio espacio separado. No hay copias sueltas ni versiones distintas del mismo dato en cada herramienta.',
    icon: 'database',
  },
  {
    tag: 'TRAZABILIDAD',
    status: 'Infraestructura interna',
    title: 'Cada evento deja constancia',
    text: 'Todo lo que ocurre queda con un estado conocido: pendiente, enviado, fallido. Si algo falla se puede repetir sin duplicar nada, y siempre se sabe qué se hizo.',
    icon: 'fact_check',
  },
];

const CoreLayer: React.FC = () => {
  return (
    <section id="nucleo" className="py-32 md:py-40 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase text-[11px] tracking-[0.6em] block mb-8"
          >
            EL NÚCLEO COMPARTIDO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05]"
          >
            Lo que no se ve
            <br />
            <span className="text-slate-500">es lo que marca la diferencia.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-lg font-light leading-relaxed text-slate-400"
          >
            Cada producto OS se apoya en una infraestructura común que construimos una vez y
            reutilizamos siempre. Es la razón de que un sistema nuevo no empiece de cero, y de
            que lo que aprendemos en un negocio acabe mejorando el resto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="glass rounded-[2.5rem] border border-white/5 p-10 flex flex-col hover:border-blue-500/20 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-2xl">{piece.icon}</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500/60">
                  {piece.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-snug">
                {piece.title}
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">{piece.text}</p>

              {piece.note && (
                <p className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.07] p-4 text-sm font-medium leading-6 text-blue-100">
                  {piece.note}
                </p>
              )}

              <div className="mt-auto pt-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {piece.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreLayer;
