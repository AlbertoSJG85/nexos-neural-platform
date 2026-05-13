import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const NavbarV2: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Qué es NexOS', href: '#hero' },
    { name: 'Productos', href: '#ecosistema' },
    { name: 'GlorIA', href: '#hub' },
    { name: 'Cómo funciona', href: '#metrics' }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-8 md:px-6">
      <motion.div 
        animate={{ 
          y: scrolled ? 10 : 0,
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0)',
          padding: scrolled ? '12px 24px' : '20px 0px',
          borderRadius: scrolled ? '100px' : '0px',
          border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)'
        }}
        className="max-w-7xl mx-auto flex justify-between items-center transition-all duration-500"
      >
        <a href="#" className="cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Logo className="h-9 md:h-11" />
        </a>
        
        <div className="hidden 2xl:flex items-center gap-10">
          {navLinks.map(item => (
            <a key={item.name} href={item.href} className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </div>

        <motion.a 
          href="https://wa.me/34641996450?text=Hola%20GlorIA%2C%20quiero%20ver%20c%C3%B3mo%20NexOS%20podr%C3%ADa%20ayudar%20a%20mi%20negocio"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="mr-14 flex shrink-0 items-center gap-2.5 px-4 py-3 md:px-5 md:py-3.5 2xl:mr-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-[11px] md:text-[12px] font-black tracking-widest rounded-full shadow-lg transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>GlorIA</span>
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default NavbarV2;
