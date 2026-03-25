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
            Operativa Real. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Impacto Tangible.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            className="text-slate-400 text-lg font-light max-w-2xl mx-auto"
          >
            Sistemas diseñados con el único objetivo de devolver tiempo y control al núcleo de tu negocio.
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
                Eliminación de tareas repetitivas y cuellos de botella manuales. Automatización útil que opera en segundo plano para que los equipos físicos no pierdan un segundo.
              </p>
            </div>
            
            {/* Decoded/Stream pattern background instead of arbitrary bars */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/2 p-6 overflow-hidden">
               <div className="flex flex-col gap-2 font-mono text-[10px] text-blue-400 opacity-60">
                 <span>[SUCCESS] Webhook Check-in received</span>
                 <span>[SUCCESS] Auth token verified</span>
                 <span>[SUCCESS] Tuya door lock opened id=94</span>
                 <span>[SUCCESS] GlorIA notified user (WhatsApp)</span>
                 <span>[AWAITING] Cleaning service scheduled</span>
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
                No coleccionamos automatizaciones sueltas. Diseñamos productos que resuelven flujos operativos complejos desde la raíz, integrando de forma cohesiva la infraestructura tecnológica con el mundo físico.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MetricsV2;
