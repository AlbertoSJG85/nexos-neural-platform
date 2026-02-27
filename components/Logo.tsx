
import React from 'react';

const Logo: React.FC<{ className?: string; hideText?: boolean }> = ({ className = "h-8", hideText = false }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <svg viewBox="0 0 220 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circuit Icon - Precise reproduction of the image */}
      <g strokeWidth="3.5" strokeLinecap="round">
        {/* Dark paths on the left */}
        <path d="M65 50H85M65 50L55 35H35M65 50L55 65H35M55 35L45 25M55 65L45 75" stroke="#0F172A" />
        
        {/* Blue paths on the right */}
        <path d="M85 50L100 35H115M85 50L100 65H115M85 50H105" stroke="#3b82f6" />
        
        {/* Nodes - Circles */}
        <circle cx="35" cy="35" r="5.5" stroke="#0F172A" fill="white" strokeWidth="3" />
        <circle cx="35" cy="65" r="5.5" stroke="#0F172A" fill="white" strokeWidth="3" />
        <circle cx="20" cy="50" r="5.5" stroke="#0F172A" fill="white" strokeWidth="3" />
        
        <circle cx="125" cy="40" r="5.5" stroke="#3b82f6" fill="white" strokeWidth="3" />
        <circle cx="125" cy="60" r="5.5" stroke="#3b82f6" fill="white" strokeWidth="3" />
        <circle cx="110" cy="50" r="5.5" stroke="#3b82f6" fill="white" strokeWidth="3" />
        
        {/* Connectors to text area */}
        <path d="M20 50H30" stroke="#0F172A" />
      </g>
    </svg>
    
    {!hideText && (
      <div className="flex font-extrabold text-3xl tracking-[-0.04em] items-baseline">
        <span className="text-[#0F172A] dark:text-white">Nex</span>
        <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">OS</span>
      </div>
    )}
  </div>
);

export default Logo;
