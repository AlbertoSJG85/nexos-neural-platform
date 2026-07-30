import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

type EcosystemNode = {
  id: string;
  icon: string;
  logo?: string;
  logoClass?: string;
  logoBoxClass?: string;
  name: string;
  color: string;
  status: string;
  isIncubation: boolean;
  desc: string;
  keyPhrase: string;
  href?: string;
  ctaLabel?: string;
  disabledLabel?: string;
};

const EcosystemV2: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  const productZ = useTransform(smoothProgress, [0, 0.8], [-1500, 0]);
  const productScale = useTransform(smoothProgress, [0, 0.8], [0.2, 1]);
  const productOpacity = useTransform(smoothProgress, [0, 0.4, 0.8], [0, 0.3, 1]);
  const productBlur = useTransform(smoothProgress, [0, 0.6, 0.8], [20, 5, 0]);
  const masterLetterSpacing = useTransform(smoothProgress, [0.7, 1], ['0.02em', '0.1em']);
  const subTextY = useTransform(smoothProgress, [0.8, 1], [20, 0]);
  const subTextOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  const nodes: EcosystemNode[] = [
    {
      id: 'RentOS',
      icon: 'home_work',
      logo: '/logo_RentOS.png',
      logoBoxClass: 'w-14 h-14 md:w-16 md:h-16',
      logoClass: 'w-full h-full p-0 object-contain scale-[1.65]',
      name: 'RentOS',
      color: 'text-blue-400',
      status: 'En producción',
      isIncubation: false,
      desc: 'Ordena la operativa del alquiler vacacional. Las reservas entran solas desde los portales, la limpieza recibe su aviso, el día a día queda seguido y lo cobrado queda cuadrado.',
      keyPhrase: 'Automatiza tu alquiler vacacional y relájate.',
      href: 'https://rentos.nexostudios.digital/',
      ctaLabel: 'Ver RentOS',
    },
    {
      id: 'PilotOS',
      icon: 'route',
      logo: '/logo_PilotOS.svg',
      logoBoxClass: 'w-28 h-14 md:w-32 md:h-16',
      logoClass: 'w-24 md:w-28 h-auto object-contain',
      name: 'PilotOS',
      color: 'text-amber-300',
      status: 'En producción',
      isIncubation: false,
      desc: 'La gestión operativa, económica y documental del taxi. Parte diario, gastos, mantenimientos, kilómetros y alertas, con los documentos donde deben estar.',
      keyPhrase: 'El parte diario mueve todo el sistema.',
      href: 'https://pilotos.nexostudios.digital/',
      ctaLabel: 'Ver PilotOS',
    },
    {
      id: 'ClinicOS',
      icon: 'stethoscope',
      logo: '/logo_ClinicOS.svg',
      logoBoxClass: 'w-14 h-14 md:w-16 md:h-16',
      logoClass: 'w-full h-full p-2 object-contain',
      name: 'ClinicOS',
      color: 'text-teal-300',
      status: 'Piloto privado',
      isIncubation: false,
      desc: 'Recibe, ordena y prioriza las consultas que llegan a una consulta médica por WhatsApp e Instagram. Clasifica cada mensaje, lo registra y avisa a quien tiene que actuar. No diagnostica, no receta y no sustituye al profesional.',
      keyPhrase: 'Ninguna consulta se queda sin respuesta ni sin registrar.',
      href: 'https://clinicos.nexostudios.digital/',
      ctaLabel: 'Ver ClinicOS',
    },
    {
      id: 'IngresOS',
      icon: 'request_quote',
      logo: '/logo_IngresOS.svg',
      logoBoxClass: 'w-28 h-14 md:w-32 md:h-16',
      logoClass: 'w-24 md:w-28 h-auto object-contain',
      name: 'IngresOS',
      color: 'text-emerald-400',
      status: 'Beta',
      isIncubation: false,
      desc: 'Facturas y presupuestos para autónomos y negocios pequeños, pedidos por WhatsApp y devueltos en PDF, sin abrir ningún programa.',
      keyPhrase: 'Díselo a GlorIA y recibe tu PDF listo.',
      disabledLabel: 'Próximamente',
    },
  ];

  return (
    <section ref={containerRef} className="py-24 relative bg-transparent overflow-hidden" id="ecosistema">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-blue-500 font-black uppercase text-sm tracking-[0.8em] mb-12 block opacity-80">
            PRODUCTOS PROPIOS NEXOS
          </span>

          <div className="relative perspective-[2000px] flex flex-col items-center justify-center min-h-[250px] w-full">
            <motion.div
              style={{ letterSpacing: masterLetterSpacing }}
              className="whitespace-nowrap text-center"
            >
              <motion.span
                style={{
                  z: productZ,
                  scale: productScale,
                  opacity: productOpacity,
                  filter: `blur(${productBlur}px)`,
                }}
                className="text-4xl md:text-[6rem] font-black text-white tracking-tighter"
              >
                Nuestros product
              </motion.span>

              <motion.span
                animate={{ rotateY: 360 }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                className="inline-block text-5xl md:text-[7rem] font-black text-blue-500 drop-shadow-[0_0_60px_rgba(59,130,246,0.8)] align-baseline"
              >
                OS
              </motion.span>
            </motion.div>

            <motion.div
              style={{ y: subTextY, opacity: subTextOpacity }}
              className="text-xl md:text-3xl font-light tracking-[0.25em] text-slate-500 mt-4 lowercase"
            >
              <span className="text-blue-500 font-black uppercase text-glow">O</span>perative
              <span className="mx-3"></span>
              <span className="text-blue-500 font-black uppercase text-glow">S</span>ystems
            </motion.div>
          </div>
        </div>

        <motion.p
          style={{ opacity: subTextOpacity }}
          className="mx-auto mt-10 max-w-2xl text-center text-base font-light leading-relaxed text-slate-400"
        >
          Sistemas construidos y mantenidos por NexOS para un sector concreto. Mismo núcleo,
          misma GlorIA, distinta operativa. Cada uno indica el estado real en el que está hoy.
        </motion.p>

        <div className="flex flex-col lg:flex-row w-full gap-4 min-h-[460px] mt-8">
          {nodes.map((node, index) => {
            const isActive = activeIndex === index;
            const incOpacity = node.isIncubation ? (isActive ? 'opacity-90' : 'opacity-40') : (isActive ? 'opacity-100' : 'opacity-70');
            const bgClass = node.isIncubation
              ? (isActive ? 'bg-[#050505] border-white/10' : 'bg-transparent border-white/5 border-dashed hover:border-white/10')
              : (isActive ? 'bg-white/[0.04] border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]' : 'hover:bg-white/[0.03] hover:border-white/10 glass border-white/5');

            return (
              <motion.div
                key={node.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  flex: isActive ? 2.5 : 0.8,
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border transition-all duration-500 group ${bgClass} ${incOpacity}`}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className={`flex items-center transition-all duration-500 ${isActive ? 'flex-row gap-5' : 'flex-col gap-5'}`}>
                    <div className={`${node.logoBoxClass || 'w-14 h-14 md:w-16 md:h-16'} rounded-2xl flex items-center justify-center transition-all duration-500 ${node.color} ${isActive ? 'bg-blue-600/20 shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/30' : 'bg-white/5'}`}>
                      {node.logo ? (
                        <motion.img
                          src={node.logo}
                          alt={node.name}
                          className={node.logoClass || 'w-full h-full p-0 object-contain'}
                          animate={isActive && node.id === 'RentOS' ? { scale: [1.65, 1.7, 1.65] } : {}}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      ) : (
                        <span className="material-symbols-outlined text-3xl md:text-4xl">{node.icon}</span>
                      )}
                    </div>

                    <div className={`transition-all duration-500 ${isActive ? 'translate-y-0' : 'rotate-0 lg:rotate-90 lg:mt-24'}`}>
                      <h3 className={`font-black tracking-tighter whitespace-nowrap ${isActive ? 'text-3xl md:text-4xl text-white' : 'text-xl opacity-60 text-slate-400'}`}>
                        {node.name.slice(0, -2)}
                        <span className="text-blue-500 ml-1">OS</span>
                      </h3>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex flex-col flex-grow"
                      >
                        <p className="text-slate-300 text-lg font-light leading-relaxed max-w-md">
                          {node.desc}
                        </p>

                        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 max-w-md">
                          <p className="text-sm font-semibold leading-6 text-blue-100">{node.keyPhrase}</p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/60">Estado de Despliegue</span>
                            <span className="text-xs font-mono text-slate-400 uppercase mt-1 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                              {node.status}
                            </span>
                          </div>
                          {node.href && node.ctaLabel ? (
                            <a
                              href={node.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {node.ctaLabel}
                            </a>
                          ) : (
                            <span className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-600 border border-white/5 bg-white/[0.02] cursor-not-allowed">
                              {node.disabledLabel}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent mx-auto mt-12"
        ></motion.div>
      </div>
    </section>
  );
};

export default EcosystemV2;
