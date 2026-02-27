
import React from 'react';

const ValueProp: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-[#020408]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2"></div>
          
          {[
            { icon: 'settings_suggest', title: 'Automatiza', desc: 'Nodos de ejecución autónoma que eliminan la fricción operativa y el error humano.' },
            { icon: 'hub', title: 'Conecta', desc: 'Sincronización sináptica total entre cada fragmento de tu arquitectura digital.' },
            { icon: 'visibility', title: 'Controla', desc: 'Supervisión en tiempo real a través de flujos de datos inteligentes y transparentes.' },
          ].map((item, idx) => (
            <div key={idx} className="relative group text-center z-10">
              <div className="w-20 h-20 mx-auto glass-module rounded-full flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-500 border-blue-500/10">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
