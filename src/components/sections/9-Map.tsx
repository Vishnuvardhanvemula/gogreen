"use client";

import { motion } from "framer-motion";

export function MapSection() {
  const states = [
    "North Carolina",
    "South Carolina",
    "Georgia",
    "Virginia",
    "Florida",
    "Maryland",
    "Delaware"
  ];

  return (
    <section className="w-full bg-white py-32 md:py-48 px-6 border-t border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* The single statement */}
        <h2 className="text-3xl md:text-5xl font-heading font-medium text-slate-900 leading-tight mb-24 text-center max-w-3xl">
          Local teams. Local knowledge. Local accountability — across 7 states.
        </h2>

        {/* Abstract Map UI Element */}
        <div className="relative w-full max-w-2xl aspect-[2/1] mb-24 border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50 flex items-center justify-center">
           {/* Abstract grid background */}
           <div 
             className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
               backgroundSize: '24px 24px' 
             }} 
           />
           
           {/* Abstract Nodes representing operation hubs */}
           <div className="relative w-full h-full">
              {/* Fake coordinates mapped abstractly to US East coast layout */}
              <div className="absolute top-[20%] left-[60%] w-3 h-3 bg-[#0D1F0F] rounded-full shadow-[0_0_0_8px_rgba(13,31,15,0.05)]" /> {/* MD */}
              <div className="absolute top-[30%] left-[55%] w-3 h-3 bg-[#0D1F0F] rounded-full shadow-[0_0_0_8px_rgba(13,31,15,0.05)]" /> {/* VA */}
              <div className="absolute top-[45%] left-[50%] w-3 h-3 bg-[#0D1F0F] rounded-full shadow-[0_0_0_8px_rgba(13,31,15,0.1)]" /> {/* NC */}
              <div className="absolute top-[55%] left-[45%] w-3 h-3 bg-[#0D1F0F] rounded-full shadow-[0_0_0_8px_rgba(13,31,15,0.05)]" /> {/* SC */}
              <div className="absolute top-[65%] left-[40%] w-3 h-3 bg-[#0D1F0F] rounded-full shadow-[0_0_0_8px_rgba(13,31,15,0.05)]" /> {/* GA */}
              <div className="absolute top-[85%] left-[48%] w-3 h-3 bg-[#0D1F0F] rounded-full shadow-[0_0_0_8px_rgba(13,31,15,0.05)]" /> {/* FL */}
              
           {/* Connecting lines — use viewBox coords, NOT % in path d */}
           <svg
             className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 200 100"
             preserveAspectRatio="none"
           >
             <path
               d="M 120 20 L 110 30 L 100 45 L 90 55 L 80 65 L 96 85"
               fill="none"
               stroke="#0D1F0F"
               strokeWidth="1"
               strokeDasharray="3 3"
             />
           </svg>
        </div>
        </div>

        {/* State Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {states.map((state, idx) => (
            <button 
              key={idx} 
              className="px-6 py-3 border border-slate-200 hover:border-[#0D1F0F] text-slate-600 hover:text-[#0D1F0F] hover:bg-slate-50 rounded-full font-medium text-xs tracking-[0.1em] uppercase transition-all duration-300"
            >
              {state}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
