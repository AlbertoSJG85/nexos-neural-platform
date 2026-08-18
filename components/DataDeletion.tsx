
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const DataDeletion: React.FC = () => {
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
                        Eliminación de <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Datos</span>
                    </h1>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-xs mx-auto mt-8 mb-6"></div>
                    <p className="text-slate-500 text-sm font-light">
                        Última actualización: 18 de agosto de 2026
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12 text-base leading-relaxed">

                    {/* 1. Qué es esto */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">1</span>
                            Su Derecho a la Eliminación de Datos
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                Si ha interactuado con un negocio a través de nuestra infraestructura de mensajería
                                de WhatsApp o Instagram (NexOS), tiene derecho a solicitar la eliminación de los
                                datos personales que hayamos recopilado sobre usted, de acuerdo con nuestra{' '}
                                <a href="/privacidad" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    Política de Privacidad
                                </a>
                                {' '}y la normativa de protección de datos aplicable.
                            </p>
                        </div>
                    </section>

                    {/* 2. Qué datos se eliminan */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">2</span>
                            Qué Datos Puede Solicitar Eliminar
                        </h2>
                        <div className="pl-11 space-y-4">
                            <ul className="space-y-3">
                                {[
                                    { icon: 'phone_android', text: 'Su número de teléfono y datos de perfil de WhatsApp asociados a las conversaciones.' },
                                    { icon: 'alternate_email', text: 'Su identificador y perfil de Instagram asociados a mensajes o comentarios.' },
                                    { icon: 'chat', text: 'El contenido de los mensajes intercambiados a través de nuestra plataforma.' },
                                    { icon: 'image', text: 'Archivos multimedia compartidos en esas conversaciones.' },
                                    { icon: 'schedule', text: 'Marcas temporales y metadatos operativos de esas interacciones.' },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-blue-500/60 text-lg mt-0.5">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 3. Cómo solicitarlo */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">3</span>
                            Cómo Solicitar la Eliminación
                        </h2>
                        <div className="pl-11 space-y-4">
                            <p>
                                Puede solicitar la eliminación de sus datos personales enviando un correo a la
                                dirección de contacto de abajo. Para poder localizar y eliminar sus datos
                                correctamente, indique:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span>El número de teléfono (WhatsApp) o el usuario de Instagram desde el que contactó.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span>El negocio o producto con el que interactuó (por ejemplo, el nombre de la clínica, alojamiento o servicio).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span>Una dirección de contacto donde podamos confirmarle cuando la solicitud esté completada.</span>
                                </li>
                            </ul>
                            <div className="glass rounded-2xl p-6 mt-4 space-y-2 text-sm">
                                <p className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-500/60">email</span>
                                    <a href="mailto:contacto@nexostudios.digital?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        contacto@nexostudios.digital
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Plazo */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">4</span>
                            Plazo de Respuesta
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                Verificaremos su solicitud y eliminaremos los datos correspondientes de nuestros
                                sistemas en un plazo máximo de 30 días naturales. Le confirmaremos por correo
                                electrónico cuando la eliminación se haya completado. Podremos conservar
                                temporalmente cierta información cuando exista una obligación legal que lo
                                requiera (por ejemplo, registros contables u operativos exigidos por normativa).
                            </p>
                        </div>
                    </section>

                    {/* 5. Alcance */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">5</span>
                            Alcance de la Eliminación
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                Esta solicitud elimina los datos que NexOS, como proveedor de infraestructura de
                                mensajería, tiene almacenados. No cubre datos que Meta Platforms (WhatsApp,
                                Instagram) conserve por su cuenta según sus propias políticas — para ello, consulte
                                las herramientas de privacidad de Meta directamente.
                            </p>
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

export default DataDeletion;
