
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const PrivacyPolicy: React.FC = () => {
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
                        Política de <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Privacidad</span>
                    </h1>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-xs mx-auto mt-8 mb-6"></div>
                    <p className="text-slate-500 text-sm font-light">
                        Última actualización: 27 de febrero de 2026
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12 text-base leading-relaxed">

                    {/* 1. Responsable */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">1</span>
                            Responsable del Tratamiento
                        </h2>
                        <div className="pl-11 space-y-2">
                            <p>
                                El responsable del tratamiento de los datos personales recogidos a través de esta plataforma y sus servicios asociados es:
                            </p>
                            <div className="glass rounded-2xl p-6 mt-4 space-y-1 text-sm">
                                <p><span className="text-white font-semibold">Entidad:</span> NexOS</p>
                                <p><span className="text-white font-semibold">Sitio web:</span> nexostudios.digital</p>
                                <p><span className="text-white font-semibold">Contacto:</span> contacto@nexostudios.digital</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Datos recopilados */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">2</span>
                            Datos que Recopilamos
                        </h2>
                        <div className="pl-11 space-y-4">
                            <p>
                                A través de nuestros servicios y la integración con WhatsApp Business API, podemos recopilar los siguientes datos personales:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    { icon: 'phone_android', text: 'Número de teléfono (proporcionado al contactar vía WhatsApp)' },
                                    { icon: 'person', text: 'Nombre y datos de perfil de WhatsApp' },
                                    { icon: 'chat', text: 'Contenido de los mensajes enviados a nuestro servicio' },
                                    { icon: 'image', text: 'Archivos multimedia compartidos (imágenes, documentos, audios)' },
                                    { icon: 'schedule', text: 'Marcas temporales de las interacciones' },
                                    { icon: 'home_work', text: 'Datos operativos relacionados con los servicios contratados (propiedades, reservas, gestión)' },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-blue-500/60 text-lg mt-0.5">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 3. Finalidad */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">3</span>
                            Finalidad del Tratamiento
                        </h2>
                        <div className="pl-11 space-y-4">
                            <p>Los datos recogidos se utilizan exclusivamente para:</p>
                            <ul className="space-y-3">
                                {[
                                    'Gestionar y operar los servicios contratados a través del ecosistema NexOS (RentOS, PilotOS y demás productos).',
                                    'Procesar y responder a las consultas recibidas por WhatsApp mediante nuestro agente operativo GlorIA.',
                                    'Mantener un registro operativo de las interacciones para garantizar la trazabilidad y calidad del servicio.',
                                    'Enviar notificaciones operativas relevantes (avisos de reservas, incidencias, confirmaciones).',
                                    'Mejorar la funcionalidad y experiencia de nuestros servicios.',
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 4. Base legal */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">4</span>
                            Base Legal
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                El tratamiento de sus datos se basa en:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span><strong className="text-white">Consentimiento:</strong> Al contactar con nosotros a través de WhatsApp, usted consiente el tratamiento de sus datos para la prestación del servicio solicitado.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span><strong className="text-white">Ejecución contractual:</strong> Los datos son necesarios para la gestión operativa de los servicios contratados.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                    <span><strong className="text-white">Interés legítimo:</strong> Para la mejora continua de nuestros sistemas y servicios.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Almacenamiento y seguridad */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">5</span>
                            Almacenamiento y Seguridad
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                Sus datos se almacenan en servidores seguros con las siguientes medidas:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    'Cifrado en tránsito (HTTPS/TLS) para todas las comunicaciones.',
                                    'Acceso restringido a los datos solo al personal autorizado.',
                                    'Copias de seguridad periódicas.',
                                    'Los datos se conservan durante el tiempo necesario para la prestación del servicio y el cumplimiento de obligaciones legales.',
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 6. Compartir datos */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">6</span>
                            Compartición de Datos
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p>
                                No vendemos ni compartimos sus datos personales con terceros, salvo:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    'Meta Platforms (WhatsApp Business API): para el envío y recepción de mensajes.',
                                    'Proveedores de infraestructura tecnológica necesarios para la operación del servicio.',
                                    'Cuando sea requerido por ley o autoridad competente.',
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-500/60 font-black text-xs mt-1.5">▸</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 7. Derechos */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">7</span>
                            Sus Derechos
                        </h2>
                        <div className="pl-11 space-y-4">
                            <p>
                                De acuerdo con la normativa vigente en materia de protección de datos, usted tiene derecho a:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    { icon: 'visibility', title: 'Acceso', desc: 'Solicitar una copia de sus datos personales.' },
                                    { icon: 'edit', title: 'Rectificación', desc: 'Corregir datos inexactos o incompletos.' },
                                    { icon: 'delete', title: 'Supresión', desc: 'Solicitar la eliminación de sus datos.' },
                                    { icon: 'block', title: 'Oposición', desc: 'Oponerse al tratamiento de sus datos.' },
                                    { icon: 'download', title: 'Portabilidad', desc: 'Recibir sus datos en formato estructurado.' },
                                    { icon: 'lock', title: 'Limitación', desc: 'Restringir el uso de sus datos.' },
                                ].map((right, i) => (
                                    <div key={i} className="glass rounded-xl p-4 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-blue-500/60">{right.icon}</span>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">{right.title}</h4>
                                            <p className="text-slate-500 text-xs mt-1">{right.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500">
                                Para ejercer cualquiera de estos derechos, puede contactar con nosotros en <a href="mailto:contacto@nexostudios.digital" className="text-blue-400 hover:text-blue-300 transition-colors">contacto@nexostudios.digital</a>.
                            </p>
                        </div>
                    </section>

                    {/* 8. Cambios */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">8</span>
                            Cambios en esta Política
                        </h2>
                        <div className="pl-11">
                            <p>
                                NexOS se reserva el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente.
                            </p>
                        </div>
                    </section>

                    {/* 9. Contacto */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-black">9</span>
                            Contacto
                        </h2>
                        <div className="pl-11">
                            <p>
                                Si tiene cualquier pregunta o inquietud sobre esta política de privacidad o sobre el tratamiento de sus datos personales, puede ponerse en contacto con nosotros a través de:
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

export default PrivacyPolicy;
