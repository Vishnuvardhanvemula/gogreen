"use client";

import { motion } from "framer-motion";

export function MapSection() {
  const network = [
    { abbr: "FL", name: "Florida" },
    { abbr: "GA", name: "Georgia" },
    { abbr: "SC", name: "South Carolina" },
    { abbr: "NC", name: "North Carolina", hq: true },
    { abbr: "VA", name: "Virginia" },
    { abbr: "MD", name: "Maryland" },
    { abbr: "DE", name: "Delaware" }
  ];

  return (
    <section className="relative w-full bg-[#081B0F] py-24 md:py-32 lg:py-48 px-4 sm:px-6 border-t border-white/5 overflow-hidden flex flex-col items-center">
      
      {/* Massive Background Typography - 07 */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80vw] md:text-[45vw] font-heading font-black text-white/[0.02] tracking-tighter pointer-events-none select-none z-0 leading-none">
        07
      </h2>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 md:gap-4 mb-6 md:mb-12"
        >
          <span className="w-6 md:w-8 lg:w-12 h-px bg-amber-500/50" />
          <span className="text-amber-500 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
            Service Network
          </span>
          <span className="w-6 md:w-8 lg:w-12 h-px bg-amber-500/50" />
        </motion.div>

        {/* The single statement */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white leading-tight mb-16 md:mb-32 text-center max-w-3xl px-2"
        >
          Local accountability across <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 block sm:inline">7 states.</span>
        </motion.h3>

        {/* Linear Transit/Network Component */}
        <div className="relative w-full max-w-sm md:max-w-full px-2 sm:px-4 md:px-0 mx-auto">
          
          {/* Base Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-10 right-10 h-px bg-white/10" />
          
          {/* Animated Glow Sweep (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-10 right-10 h-px overflow-hidden">
            <motion.div 
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent blur-[2px]"
              animate={{ x: ['-200%', '400%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Base Connection Line (Mobile) */}
          <div className="block md:hidden absolute left-[31px] sm:left-[39px] top-10 bottom-10 w-px bg-white/10" />
          
          {/* Animated Glow Sweep (Mobile) */}
          <div className="block md:hidden absolute left-[31px] sm:left-[39px] top-10 bottom-10 w-px overflow-hidden">
            <motion.div 
              className="h-1/3 w-full bg-gradient-to-b from-transparent via-amber-500 to-transparent blur-[2px]"
              animate={{ y: ['-200%', '400%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Nodes Container */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 sm:gap-12 md:gap-4 relative z-10 w-full pl-0 sm:pl-0">
            {network.map((state, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex md:flex-col items-center gap-6 md:gap-6 group cursor-default w-full md:w-auto"
              >
                {/* Visual Node */}
                <div className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0 transition-all duration-500
                  ${state.hq 
                    ? 'bg-[#051109] border-[1.5px] border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)] scale-110 md:scale-110' 
                    : 'bg-[#051109] border border-white/20 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]'}
                `}>
                  {/* HQ Pulse */}
                  {state.hq && (
                    <motion.div 
                      className="absolute inset-0 bg-amber-500/20 rounded-full blur-[8px]"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  <span className={`text-lg font-heading font-medium tracking-widest relative z-10 transition-colors duration-300
                    ${state.hq ? 'text-amber-500' : 'text-white/60 group-hover:text-white'}
                  `}>
                    {state.abbr}
                  </span>
                </div>

                {/* State Name */}
                <div className="flex flex-col md:items-center">
                  <span className={`text-lg font-medium tracking-wide transition-colors duration-300
                    ${state.hq ? 'text-amber-500' : 'text-white/80 group-hover:text-white'}
                  `}>
                    {state.name}
                  </span>
                  
                  {/* HQ Tag */}
                  {state.hq && (
                    <span className="mt-1 text-[10px] uppercase font-bold tracking-[0.2em] text-[#081B0F] bg-amber-500 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)] relative z-10">
                      Headquarters
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
