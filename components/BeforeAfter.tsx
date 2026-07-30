import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';

type Task = {
  burden: string;
  icon: string;
  relief: string;
};

const tasks: Task[] = [
  { burden: 'Apuntarlo', icon: 'edit_note', relief: 'Ahora el sistema lo apunta solo' },
  { burden: 'Enviarlo', icon: 'send', relief: 'Ahora lo envía el sistema' },
  { burden: 'Acordarte', icon: 'psychology_alt', relief: 'Ahora el sistema te lo recuerda' },
  { burden: 'Revisarlo por si acaso', icon: 'search_check', relief: 'Ahora el sistema te avisa si algo falla' },
  { burden: 'Llevarlo en la cabeza', icon: 'sentiment_stressed', relief: 'Ahora lo lleva el sistema' },
];

const safety = [
  'Se hace por partes, sin parar tu negocio.',
  'Si algo se rompe, se vuelve a un punto que funcionaba.',
  'No lo montamos y desaparecemos.',
];

const BeforeAfter: React.FC = () => {
  const [absorbed, setAbsorbed] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, margin: '-25% 0px -25% 0px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setAbsorbed(tasks.length);
      return;
    }
    if (!inView) return;
    const timers = tasks.map((_, i) =>
      setTimeout(() => setAbsorbed(i + 1), 2000 + i * 2400)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion]);

  const replay = () => {
    setAbsorbed(0);
    tasks.forEach((_, i) => setTimeout(() => setAbsorbed(i + 1), 900 + i * 2400));
  };

  const done = absorbed >= tasks.length;

  return (
    <section id="antes-despues" className="py-32 md:py-40 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase text-[11px] tracking-[0.6em] block mb-8"
          >
            LO QUE GANAS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05]"
          >
            Deja de hacerlo tú.
            <br />
            <span className="text-slate-500">Sin perder el control de nada.</span>
          </motion.h2>
        </div>

        <div ref={stageRef} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.1fr)] gap-10 lg:gap-6 items-center">

          {/* ---- La pila que llevas encima ---- */}
          <div className="relative">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-600 block mb-8">
              Lo llevabas tú
            </span>

            <div className="relative h-[320px] md:h-[386px]">
              {tasks.map((task, i) => {
                const gone = i < absorbed;
                const depth = Math.max(0, i - absorbed);

                return (
                  <motion.div
                    key={task.burden}
                    initial={false}
                    animate={
                      gone
                        ? { x: 260, y: -90, scale: 0.25, opacity: 0, rotate: 12 }
                        : {
                            x: depth * 14,
                            y: depth * 18,
                            scale: 1 - depth * 0.04,
                            opacity: 1,
                            rotate: depth % 2 === 0 ? -1.5 : 2,
                          }
                    }
                    transition={{ duration: gone ? 1 : 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ zIndex: tasks.length - i }}
                    className="absolute inset-x-0 top-0 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0b0d] px-6 py-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]"
                  >
                    <span className="material-symbols-outlined text-slate-600 text-xl shrink-0">
                      {task.icon}
                    </span>
                    <span className="text-lg md:text-xl font-light text-slate-400 tracking-tight">
                      {task.burden}
                    </span>
                  </motion.div>
                );
              })}

              <AnimatePresence>
                {done && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute inset-0 rounded-[2rem] border border-dashed border-white/10 flex flex-col items-center justify-center gap-4"
                  >
                    <span className="material-symbols-outlined text-slate-700 text-3xl">
                      done_all
                    </span>
                    <p className="text-lg md:text-xl font-light text-slate-600 tracking-tight">
                      Ya no lo haces tú.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---- El sistema, que se lo va tragando ---- */}
          <div className="flex lg:flex-col items-center justify-center gap-4 py-4">
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: absorbed > 0 ? [1, 1.25, 1] : 1,
                  opacity: absorbed > 0 ? [0.25, 0.6, 0.25] : 0.2,
                }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                key={`pulse-${absorbed}`}
                className="absolute inset-0 rounded-full bg-blue-500/40 blur-2xl"
              />
              <motion.div
                animate={{ scale: absorbed > 0 ? [1, 1.08, 1] : 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                key={`ring-${absorbed}`}
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-blue-500/40 bg-blue-600/10 flex items-center justify-center backdrop-blur-sm"
              >
                <span className="font-black text-[11px] md:text-xs tracking-tight text-white">
                  Nex<span className="text-blue-400">OS</span>
                </span>
              </motion.div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500/50 text-center">
              Lo absorbe
            </span>
          </div>

          {/* ---- Lo que hace el sistema ---- */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-400 block mb-8">
              Ahora lo lleva el sistema
            </span>

            <ul className="space-y-3">
              {tasks.map((task, i) => {
                const shown = i < absorbed;
                return (
                  <motion.li
                    key={task.relief}
                    initial={false}
                    animate={{
                      opacity: shown ? 1 : 0.12,
                      x: shown ? 0 : -8,
                      borderColor: shown ? 'rgba(59,130,246,0.28)' : 'rgba(255,255,255,0.04)',
                      backgroundColor: shown ? 'rgba(37,99,235,0.07)' : 'rgba(255,255,255,0.01)',
                    }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="flex items-center gap-4 rounded-2xl border px-6 py-5"
                  >
                    <motion.span
                      animate={{ scale: shown ? 1 : 0.7, opacity: shown ? 1 : 0.4 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="material-symbols-outlined text-blue-400 text-xl shrink-0"
                    >
                      check_circle
                    </motion.span>
                    <span className="text-lg md:text-xl font-semibold text-white tracking-tight leading-snug">
                      {task.relief}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={replay}
              aria-hidden={!done}
              tabIndex={done ? 0 : -1}
              className={`mt-8 inline-flex items-center gap-2 cursor-pointer text-[10px] font-black uppercase tracking-[0.25em] text-slate-600 hover:text-slate-300 transition-opacity duration-500 ${
                done ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <span className="material-symbols-outlined text-sm">replay</span>
              Ver otra vez
            </button>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-28 md:mt-32 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 rounded-[2rem] border border-white/5 bg-white/[0.015] px-8 py-8 md:px-12"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-400 shrink-0">
            ¿Y si sale mal?
          </span>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-10 md:gap-y-3">
            {safety.map(item => (
              <li key={item} className="flex items-start gap-3 text-sm font-light text-slate-400">
                <span className="material-symbols-outlined text-blue-500/60 text-base shrink-0">
                  check_small
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default BeforeAfter;
