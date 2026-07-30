import React from 'react';
import { motion } from 'framer-motion';

const MetricsV2: React.FC = () => {
  return (
    <section id="contacto" className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-blue-400/20 bg-blue-600/10 p-10 md:p-16 text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-300">
            Siguiente paso
          </p>
          <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
            Cuéntanos cómo funciona tu negocio.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-light leading-8 text-slate-300">
            Lo estudiamos contigo y te decimos con franqueza si hay un sistema que merezca la
            pena construir, si encaja en un producto que ya existe o si no lo necesitas. Sin
            compromiso y sin venderte humo.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/34641996450?text=Hola%20GlorIA%2C%20quiero%20estudiar%20mi%20negocio%20con%20NexOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-blue-500"
            >
              Hablar con GlorIA
            </a>
            <a
              href="mailto:info@nexostudios.digital?subject=Quiero%20estudiar%20mi%20negocio%20con%20NexOS"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-8 text-xs font-black uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              Escribir un correo
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MetricsV2;
