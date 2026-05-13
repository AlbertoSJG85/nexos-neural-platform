import React from 'react';
import { motion } from 'framer-motion';

type Product = {
  id: string;
  name: string;
  logo?: string;
  logoBoxClass?: string;
  logoClass?: string;
  icon: string;
  status: string;
  statusTone: string;
  description: string;
  keyPhrase: string;
  focus: string;
  accent: string;
  href?: string;
  ctaLabel?: string;
  disabledLabel?: string;
};

const products: Product[] = [
  {
    id: 'rentos',
    name: 'RentOS',
    logo: '/logo_RentOS.png',
    logoBoxClass: 'h-16 w-16',
    logoClass: 'h-12 w-12 scale-[1.7]',
    icon: 'home_work',
    status: 'Disponible',
    statusTone: 'bg-blue-500/10 text-blue-300 border-blue-400/30',
    description:
      'Automatiza la operativa de alquiler vacacional: reservas, huespedes, limpiezas, avisos y seguimiento diario.',
    keyPhrase: 'Automatiza tu alquiler vacacional y relajate.',
    focus:
      'Trabaja por detras para reducir WhatsApps, recordatorios y tareas manuales sin convertirse en otro panel mas.',
    accent: 'from-blue-500/30 via-blue-500/10 to-transparent',
    href: 'https://rentos.nexostudios.digital/',
    ctaLabel: 'Ver RentOS',
  },
  {
    id: 'ingresos',
    name: 'IngresOS',
    logo: '/logo_IngresOS.svg',
    logoBoxClass: 'h-16 w-32',
    logoClass: 'h-11 w-28',
    icon: 'request_quote',
    status: 'Beta',
    statusTone: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
    description: 'Facturas y presupuestos por WhatsApp para autonomos y pequenos negocios.',
    keyPhrase: 'Diselo a GlorIA y recibe tu PDF listo.',
    focus:
      'Pensado para ir rapido: WhatsApp, resumen previo, confirmacion y PDF. Sin vender fiscalidad avanzada que no toca.',
    accent: 'from-emerald-400/25 via-cyan-500/10 to-transparent',
    disabledLabel: 'Proximamente',
  },
  {
    id: 'pilotos',
    name: 'PilotOS',
    logo: '/logo_PilotOS.svg',
    logoBoxClass: 'h-16 w-32',
    logoClass: 'h-11 w-28',
    icon: 'route',
    status: 'En desarrollo',
    statusTone: 'bg-amber-400/10 text-amber-200 border-amber-300/30',
    description: 'Gestion inteligente para flotas, conductores y operaciones en movilidad.',
    keyPhrase: 'Control operativo claro para negocios que se mueven.',
    focus:
      'Preparado para taxi, VTC, flotas pequenas y negocios donde vehiculos, conductores y partes diarios importan.',
    accent: 'from-amber-400/25 via-blue-500/10 to-transparent',
    disabledLabel: 'Proximamente',
  },
];

const EcosystemV2: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28" id="ecosistema">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-3 rounded-lg border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-blue-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(147,197,253,0.9)]" />
            Ecosistema NexOS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Sistemas operativos invisibles para negocios concretos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-slate-400"
          >
            NexOS es la capa central. Cada producto OS resuelve una operativa distinta,
            comparte la misma filosofia y se conecta con GlorIA como unica agente visible.
          </motion.p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
              className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]"
            >
              <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-b ${product.accent} opacity-90`} />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className={`flex ${product.logoBoxClass || 'h-16 w-16'} items-center justify-center rounded-lg border border-white/10 bg-black/35`}>
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt={product.name}
                      className={`${product.logoClass || 'h-12 w-12'} object-contain`}
                    />
                  ) : (
                    <span className="material-symbols-outlined text-3xl text-blue-300">{product.icon}</span>
                  )}
                </div>
                <span
                  className={`rounded-lg border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] ${product.statusTone}`}
                >
                  {product.status}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-black tracking-tight text-white">{product.name}</h3>
                <p className="mt-5 text-base font-light leading-7 text-slate-300">{product.description}</p>
              </div>

              <div className="relative z-10 mt-8 rounded-lg border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-sm font-bold leading-6 text-blue-100">{product.keyPhrase}</p>
              </div>

              <p className="relative z-10 mt-6 text-sm leading-6 text-slate-500">{product.focus}</p>

              <div className="relative z-10 mt-auto pt-8">
                {product.href && product.ctaLabel ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-600/20 px-4 text-xs font-black uppercase tracking-[0.18em] text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-600/35 hover:text-white"
                  >
                    {product.ctaLabel}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    {product.disabledLabel}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-5xl gap-4 rounded-2xl border border-white/10 bg-[#020617]/80 p-6 md:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-300">
              Filosofia compartida
            </p>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
              Automatizar, quitar carga y dar control de un vistazo.
            </h3>
          </div>
          <p className="text-sm font-light leading-7 text-slate-400">
            RentOS, IngresOS y PilotOS no son piezas aisladas. Son productos especializados
            conectados al ecosistema NexOS para ordenar tareas repetitivas, reducir friccion
            operativa y dejar que GlorIA sea la entrada natural para el cliente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemV2;
