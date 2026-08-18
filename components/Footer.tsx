import React from 'react';
import Logo from './Logo';

const ecosistema = [
  { name: 'Qué es NexOS', href: '#que-es' },
  { name: 'Lo que ganas', href: '#antes-despues' },
  { name: 'Productos OS', href: '#ecosistema' },
  { name: 'GlorIA', href: '#hub' },
  { name: 'El núcleo', href: '#nucleo' },
  { name: 'Proyectos', href: '#proyectos' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Logo className="h-10" />
            <p className="text-slate-400 font-light text-lg max-w-sm leading-relaxed">
              NexOS construye sistemas operativos invisibles para negocios reales: productos
              propios, proyectos a medida y una infraestructura común, con GlorIA como cara
              visible.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/34641996450?text=Hola%20GlorIA%2C%20quiero%20estudiar%20mi%20negocio%20con%20NexOS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-light text-slate-400 hover:text-blue-400 transition-colors w-fit"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Hablar con GlorIA por WhatsApp
              </a>
              <a
                href="mailto:info@nexostudios.digital"
                className="flex items-center gap-3 text-sm font-light text-slate-400 hover:text-blue-400 transition-colors w-fit"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                info@nexostudios.digital
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ecosistema</h4>
            <ul className="space-y-4 text-slate-400 font-light text-sm">
              {ecosistema.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Compañía</h4>
            <ul className="space-y-4 text-slate-400 font-light text-sm">
              <li>
                <a href="/privacidad" className="hover:text-blue-400 transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-blue-400 transition-colors">
                  Condiciones del servicio
                </a>
              </li>
              <li>
                <a href="/eliminacion-datos" className="hover:text-blue-400 transition-colors">
                  Eliminación de datos
                </a>
              </li>
              <li>
                <a href="/lucia" className="hover:text-blue-400 transition-colors">
                  LucIA
                </a>
              </li>
              <li>
                <a
                  href="https://rentos.nexostudios.digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  RentOS
                </a>
              </li>
              <li>
                <a
                  href="https://pilotos.nexostudios.digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  PilotOS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <div>© 2026 NexOS</div>
          <div className="text-center md:text-right">Sistemas operativos invisibles para negocios reales</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
