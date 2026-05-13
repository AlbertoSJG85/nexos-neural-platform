
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Logo className="h-10" />
            <p className="text-slate-500 font-light text-lg max-w-sm">
              NexOS crea productos OS conectados por GlorIA para automatizar
              negocios concretos con menos carga operativa.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 cursor-pointer transition-all">
                  <span className="material-symbols-outlined text-sm">share</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ecosistema</h4>
            <ul className="space-y-4 text-slate-500 font-light text-sm">
              {['RentOS', 'IngresOS', 'PilotOS'].map(item => (
                <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Compañía</h4>
            <ul className="space-y-4 text-slate-500 font-light text-sm">
              {['Sobre Nosotros', 'Contactar GlorIA', 'Privacidad', 'Protocolos'].map(item => (
                <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <div>© 2024 NexOS Neural Platforms</div>
          <div className="flex gap-12">
            <span className="hover:text-white cursor-pointer transition-colors">Estado del Sistema: Óptimo</span>
            <span className="hover:text-white cursor-pointer transition-colors">v4.9.2 STABLE</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
