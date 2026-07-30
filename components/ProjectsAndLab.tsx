import React from 'react';
import { motion } from 'framer-motion';

const ProjectsAndLab: React.FC = () => {
  return (
    <section id="proyectos" className="py-32 md:py-40 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- Proyectos a medida ---------- */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase text-[11px] tracking-[0.6em] block mb-8"
          >
            PROYECTOS A MEDIDA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05]"
          >
            Cuando el negocio no encaja
            <br />
            <span className="text-slate-500">en ningún producto, lo construimos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-lg font-light leading-relaxed text-slate-400"
          >
            Estos sistemas son del cliente, con su marca y su producto. NexOS los diseña,
            los desarrolla y los pone en producción con la misma forma de trabajar.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-14"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                  Heysocio
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                  Proyecto de cliente
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  En producción
                </span>
              </div>

              <p className="text-lg font-light leading-relaxed text-slate-300 max-w-2xl">
                Plataforma SaaS de análisis de guiones con inteligencia artificial, desarrollada
                por NexOS para un cliente del sector audiovisual. El usuario se registra, pega su
                guion y recibe un análisis estructurado en segundos.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {[
                  'Registro y acceso de usuarios reales',
                  'Análisis con IA y resultado estructurado',
                  'Historial consultable por usuario',
                  'Plan gratuito con límite de uso y plan de pago',
                  'Panel de administración interno',
                  'Control de acceso conectado a NexOS Pay',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500/70 text-base mt-0.5 shrink-0">
                      check_small
                    </span>
                    <span className="text-sm font-light text-slate-400 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-64 shrink-0 md:border-l md:border-white/5 md:pl-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/60 mb-4">
                Qué demuestra
              </p>
              <p className="text-sm font-light leading-relaxed text-slate-400">
                Que un sistema puede pasar de maqueta a producto en producción, con usuarios,
                cobros y administración de verdad, sin dejar de ser mantenible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ---------- LucIA ---------- */}
        <div className="mt-32">
          <div className="max-w-3xl mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-500 font-black uppercase text-[11px] tracking-[0.6em] block mb-8"
            >
              LO QUE USAMOS NOSOTROS
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight"
            >
              Un asistente que te quita
              <br />
              <span className="text-slate-500">el papeleo de encima</span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-14"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                Luc<span className="text-blue-500">IA</span>
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                Uso interno de NexOS
              </span>
            </div>

            <p className="text-lg font-light leading-relaxed text-slate-300 max-w-3xl">
              LucIA vive en Telegram y hace lo que nadie quiere hacer: le mandas la foto de una
              factura o de una multa y saca los datos, te apunta la cita, te recuerda lo que
              vence y te resume el correo del día. Le hablas como a una persona, sin abrir
              ningún programa.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: 'photo_camera',
                  title: 'Foto y listo',
                  text: 'Una factura, un ticket o una multa en foto. Saca importe, fecha y de quién es.',
                },
                {
                  icon: 'event',
                  title: 'La cita, puesta',
                  text: 'Le dices la cita y va al calendario. Si choca con otra, te avisa antes.',
                },
                {
                  icon: 'notifications_active',
                  title: 'Lo que vence, avisado',
                  text: 'Te recuerda lo pendiente cuando toca, sin que tengas que acordarte tú.',
                },
                {
                  icon: 'mark_email_read',
                  title: 'El correo, resumido',
                  text: 'Te cuenta en dos líneas qué ha llegado. Leer solo lo que hace falta.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <span className="material-symbols-outlined text-blue-400 text-2xl mb-4 block">
                    {item.icon}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-sm font-light leading-relaxed text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-white/5 pt-8">
              <p className="text-sm font-light leading-relaxed text-slate-500 flex-1">
                Hoy no está a la venta: la usamos dentro de NexOS. Lo que aprendemos con ella
                acaba dentro de GlorIA y de los productos que sí puedes usar.
              </p>
              <a
                href="/lucia"
                className="shrink-0 inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition hover:border-white/25 hover:text-white"
              >
                Saber más
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsAndLab;
