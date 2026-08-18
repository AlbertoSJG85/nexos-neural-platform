
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
            {/* Header */}
            <nav className="fixed top-0 w-full z-[100] px-6 py-6 bg-black/90 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.location.pathname = '/'; }}>
                        <Logo className="h-9" />
                    </a>
                    <a
                        href="/"
                        onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.location.pathname = '/'; }}
                        className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Volver
                    </a>
                </div>
            </nav>

            {/* Content */}
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 pt-32 pb-24"
            >
                {/* Title */}
                <div className="mb-16 text-center">
                    <span className="text-blue-500 font-black uppercase text-xs tracking-[1em] mb-6 block opacity-80">
                        LEGAL
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                        Condiciones del <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Servicio</span>
                    </h1>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-xs mx-auto mt-8 mb-6"></div>
                    <p className="text-slate-500 text-sm font-light">
                        Última actualización: 18 de agosto de 2026
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12 text-base leading-relaxed">

                    {/* 1. Quiénes somos */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">1</span>
                            Quiénes Somos
                        </h2>
                        <div className="pl-11 space-y-2">
                            <p>
                                NexOS es un ecosistema de sistemas operativos de negocio (RentOS, PilotOS, ClinicOS,
                                IngresOS y otros) construido y operado por NexOS, con GlorIA como agente de
                                comunicación. Estas condiciones regulan el uso de nuestros servicios y de la
                                infraestructura de mensajería que los conecta con WhatsApp e Instagram.
                            </p>
                            <div className="glass rounded-2xl p-6 mt-4 space-y-1 text-sm">
                                <p><span className="text-white font-semibold">Entidad:</span> NEXOS OPERATING SYSTEMS, S.L. (marca comercial: NexOS)</p>
                                <p><span className="text-white font-semibold">Sitio web:</span> nexostudios.digital</p>
                                <p><span className="text-white font-semibold">Contacto:</span> contacto@nexostudios.digital</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Naturaleza del servicio */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">2</span>
                            Naturaleza del Servicio
                        </h2>
                        <div className="pl-11 space-y-4">
                            <p>
                                NexOS proporciona infraestructura de mensajería empresarial (WhatsApp e Instagram)
                                integrada en distintos productos de software para negocios. NexOS transporta y
                                enruta las comunicaciones entre un negocio y sus clientes o interesados; no decide
                                ni gestiona el negocio de cada cliente, que se rige por sus propios términos
                                cuando corresponda.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'NexOS opera como proveedor de infraestructura para varios productos y negocios distintos.',
                                    'Cada producto del ecosistema (RentOS, PilotOS, ClinicOS, IngresOS, etc.) puede tener sus propias condiciones adicionales frente a su cliente final.',
                                    'El uso de WhatsApp e Instagram a través de nuestros servicios está sujeto también a las condiciones de Meta Platforms, Inc.',
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 3. Uso aceptable */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">3</span>
                            Uso Aceptable
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>Al usar nuestros servicios, usted se compromete a:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span>No utilizar el servicio para actividades ilegales, fraudulentas o que infrinjan derechos de terceros.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span>No enviar comunicaciones no solicitadas (spam) a través de la plataforma.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span>Respetar las políticas de uso comercial de Meta Platforms para WhatsApp Business API e Instagram Messaging.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Disponibilidad */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">4</span>
                            Disponibilidad del Servicio
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                Trabajamos para mantener el servicio disponible de forma continua, pero no
                                garantizamos una disponibilidad del 100%. Puede haber interrupciones por
                                mantenimiento, causas técnicas, o por cambios o interrupciones en los servicios de
                                terceros de los que dependemos (Meta Platforms, proveedores de infraestructura en
                                la nube).
                            </p>
                        </div>
                    </section>

                    {/* 5. Datos y privacidad */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">5</span>
                            Datos y Privacidad
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                El tratamiento de datos personales se rige por nuestra{' '}
                                <a href="/privacidad" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    Política de Privacidad
                                </a>
                                . Para solicitar la eliminación de sus datos, consulte nuestra{' '}
                                <a href="/eliminacion-datos" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    página de eliminación de datos
                                </a>
                                .
                            </p>
                        </div>
                    </section>

                    {/* 6. Limitación de responsabilidad */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">6</span>
                            Limitación de Responsabilidad
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                NexOS actúa como proveedor de infraestructura de mensajería y transporte de
                                comunicaciones. No somos responsables del contenido de los mensajes enviados por
                                los negocios que usan nuestros servicios, ni de decisiones comerciales tomadas por
                                dichos negocios frente a sus propios clientes.
                            </p>
                        </div>
                    </section>

                    {/* 7. Cambios */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">7</span>
                            Cambios en estas Condiciones
                        </h2>
                        <div className="pl-11">
                            <p>
                                NexOS se reserva el derecho de modificar estas condiciones en cualquier momento.
                                Cualquier cambio será publicado en esta misma página con la fecha de actualización
                                correspondiente.
                            </p>
                        </div>
                    </section>

                    {/* 8. Contacto */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">8</span>
                            Contacto
                        </h2>
                        <div className="pl-11">
                            <p>
                                Si tiene cualquier pregunta sobre estas condiciones del servicio, puede ponerse en
                                contacto con nosotros a través de:
                            </p>
                            <div className="glass rounded-2xl p-6 mt-4 space-y-2 text-sm">
                                <p className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-500/60">email</span>
                                    <a href="mailto:contacto@nexostudios.digital" className="text-blue-400 hover:text-blue-300 transition-colors">contacto@nexostudios.digital</a>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-500/60">language</span>
                                    <span>nexostudios.digital</span>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer legal */}
                <div className="mt-20 pt-8 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                        © 2026 NexOS · Todos los derechos reservados
                    </p>
                </div>
            </motion.main>
        </div>
    );
};

export default Terms;
