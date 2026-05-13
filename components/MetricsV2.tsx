import React from 'react';
import { motion } from 'framer-motion';

const MetricsV2: React.FC = () => {
  return (
    <section id="metrics" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Operativa real. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Control de un vistazo.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            className="text-slate-400 text-lg font-light max-w-2xl mx-auto"
          >
            Sistemas disenados para devolver tiempo y control al nucleo de tu negocio,
            sin obligarte a perseguir tareas por varios canales.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-8 glass rounded-[3rem] p-12 md:p-16 flex flex-col justify-center relative group overflow-hidden border border-white/5 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-green-400 text-4xl">task_alt</span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white">Menos Fricción</h3>
              </div>
              <p className="text-slate-400 text-xl font-light leading-relaxed">
                Eliminacion de tareas repetitivas y cuellos de botella manuales.
                Automatizacion util que opera en segundo plano para que el negocio
                avance con menos friccion.
              </p>
            </div>
            
            {/* Decoded/Stream pattern background instead of arbitrary bars */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/2 p-6 overflow-hidden">
               <div className="flex flex-col gap-2 font-mono text-[10px] text-blue-400 opacity-60">
                 <span>[NexOS] Evento operativo recibido</span>
                 <span>[GlorIA] Contexto identificado</span>
                 <span>[RentOS] Seguimiento diario preparado</span>
                 <span>[IngresOS] PDF pendiente de confirmacion</span>
                 <span>[PilotOS] Vista operativa actualizada</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-600/90 to-blue-900/90 rounded-[3rem] p-12 flex flex-col justify-center text-white border border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]"
          >
            <motion.div 
              className="flex gap-2 items-center mb-6 text-blue-200 uppercase tracking-widest text-[10px] font-bold"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              ESTADOS
            </motion.div>
            <h3 className="text-5xl font-black mb-4">Control<br/>Absoluto</h3>
            <p className="text-lg font-light text-blue-100 leading-tight">
              Idempotencia y trazabilidad de extremo a extremo. Todo evento tiene un estado conocido.
            </p>
          </motion.div>

          {/* New block for "Soluciones no abstracciones" */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            className="col-span-12 glass rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12 group border border-white/5 hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 flex-shrink-0">
              <span className="material-symbols-outlined text-5xl">architecture</span>
            </div>
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-white mb-4">Sistemas con Propósito</h4>
              <p className="text-slate-400 font-light text-lg">
                No coleccionamos automatizaciones sueltas. Disenamos productos
                OS para negocios concretos: cada uno ordena su operativa y todos
                comparten NexOS y GlorIA como base comun.
              </p>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-blue-400/20 bg-blue-600/10 p-8 text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-300">
            Siguiente paso
          </p>
          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
            Quiero automatizar mi negocio.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-7 text-slate-400">
            Cuentaselo a GlorIA y vemos que producto OS encaja mejor con tu operativa.
          </p>
          <a
            href="https://wa.me/34641996450?text=Hola%20GlorIA%2C%20quiero%20automatizar%20mi%20negocio%20con%20NexOS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-blue-500"
          >
            Hablar con GlorIA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsV2;
