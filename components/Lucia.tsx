
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.pathname = '/';
};

const Lucia: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
            <nav className="fixed top-0 w-full z-[100] px-6 py-6 bg-black/90 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <a href="/" onClick={goHome}>
                        <Logo className="h-9" />
                    </a>
                    <a
                        href="/"
                        onClick={goHome}
                        className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Volver
                    </a>
                </div>
            </nav>

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 pt-32 pb-24"
            >
                <div className="mb-16 text-center">
                    <span className="text-blue-500 font-black uppercase text-xs tracking-[1em] mb-6 block opacity-80">
                        NEXOS
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                        Luc<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">IA</span>
                    </h1>
                    <p className="text-slate-400 text-lg font-light max-w-xl mx-auto mt-6">
                        Asistente personal privado del ecosistema NexOS.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-xs mx-auto mt-8"></div>
                </div>

                <div className="space-y-12 text-base leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-400">smart_toy</span>
                            ¿Qué es LucIA?
                        </h2>
                        <div className="pl-11">
                            <p>
                                LucIA es un asistente personal privado de NexOS. Ayuda a organizar agenda, tareas,
                                recordatorios y correo del día a día a través de Telegram. No es un producto público
                                de venta: es una herramienta de uso personal dentro del ecosistema NexOS, usada de
                                forma individual por cada persona que la conecta a su propia cuenta de Google.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-400">verified_user</span>
                            Acceso a Google, solo con tu autorización
                        </h2>
                        <div className="pl-11 space-y-4">
                            <p>
                                LucIA puede conectarse opcionalmente a Google Calendar, Gmail y Google Drive. Este
                                acceso se activa únicamente cuando el usuario lo autoriza de forma explícita mediante
                                el flujo estándar de OAuth de Google, nunca antes ni sin ese consentimiento.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { icon: 'calendar_month', title: 'Google Calendar', text: 'Crear, consultar y modificar los eventos que el usuario le pide gestionar.' },
                                    { icon: 'mail', title: 'Gmail', text: 'Leer y resumir correos para ayudar a organizar pendientes. LucIA nunca envía correos en nombre del usuario.' },
                                    { icon: 'folder', title: 'Google Drive', text: 'Guardar documentos que el usuario comparte explícitamente (facturas, tickets, contratos).' }
                                ].map((item, i) => (
                                    <div key={i} className="glass rounded-xl p-4 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-blue-500/60">{item.icon}</span>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                            <p className="text-slate-500 text-xs mt-1">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-400">block</span>
                            LucIA no vende tus datos
                        </h2>
                        <div className="pl-11">
                            <p>
                                Los datos de Google a los que LucIA accede se usan exclusivamente para prestar el
                                servicio de asistencia personal a quien los autorizó. No se venden ni se comparten con
                                terceros con fines comerciales o publicitarios.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-400">lock_open</span>
                            Revocar el acceso en cualquier momento
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                Puedes revocar el acceso de LucIA a tu cuenta de Google cuando quieras, sin tener que
                                contactar con nosotros, desde:
                            </p>
                            <div className="glass rounded-2xl p-6 flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-blue-500/60">open_in_new</span>
                                <a
                                    href="https://myaccount.google.com/permissions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                                >
                                    myaccount.google.com/permissions
                                </a>
                            </div>
                            <p className="text-sm text-slate-500">
                                Al revocarlo, LucIA deja de poder acceder a Calendar, Gmail y Drive de inmediato.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-400">gavel</span>
                            Más información
                        </h2>
                        <div className="pl-11 space-y-2">
                            <p>
                                LucIA se rige por la{' '}
                                <a href="/privacidad" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    Política de Privacidad
                                </a>{' '}
                                de NexOS. Para cualquier duda, puedes escribir a{' '}
                                <a href="mailto:contacto@nexostudios.digital" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    contacto@nexostudios.digital
                                </a>.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                        © 2026 NexOS · Todos los derechos reservados
                    </p>
                </div>
            </motion.main>
        </div>
    );
};

export default Lucia;
