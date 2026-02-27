
import React from 'react';
import { motion } from 'framer-motion';

const Metrics: React.FC = () => {
  return (
    <section className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-8 glass rounded-[4rem] p-16 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]"></span>
                <h3 className="text-5xl font-extrabold text-white">99.9% Pureza</h3>
              </div>
              <p className="text-slate-400 text-xl font-light max-w-md leading-relaxed">Infraestructura inmutable protegida por el núcleo NexOS.</p>
            </div>
            
            <div className="flex gap-4 items-end h-32 mt-auto">
              {[30, 60, 40, 100, 70, 90, 50, 120, 80, 110].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, type: 'spring' }}
                  className="flex-1 bg-blue-600/20 border-t-2 border-blue-500/50 rounded-t-xl group-hover:bg-blue-600/40 transition-all"
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[4rem] p-16 flex flex-col justify-center text-white shadow-2xl shadow-blue-900/40"
          >
            <motion.span 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl font-black mb-6"
            >+4.2x</motion.span>
            <p className="text-xl font-bold opacity-80 leading-tight">Velocidad de ejecución en tareas críticas.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-5 glass rounded-[4rem] p-12 flex items-center gap-8 group cursor-pointer"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-5xl">shield_lock</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Zero Trust</h4>
              <p className="text-slate-500 font-light">Cifrado de grado cuántico en cada capa.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: false }}
            className="col-span-12 md:col-span-7 glass rounded-[4rem] p-12 overflow-hidden relative"
          >
             <div className="flex items-center justify-between h-full">
                <div className="space-y-4">
                  <h4 className="text-3xl font-bold text-white">Escalabilidad Orgánica</h4>
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-slate-800 flex items-center justify-center text-blue-400">
                        <span className="material-symbols-outlined text-sm">hub</span>
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-black bg-blue-600 flex items-center justify-center text-white font-bold text-xs">+1k</div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-[150px]">auto_graph</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;
