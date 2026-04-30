"use client";

import { motion } from "framer-motion";

export function SolarPanelGraphic() {
  return (
    <div className="absolute top-[30%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none z-0 opacity-60 mix-blend-screen flex items-center justify-center">
      
      {/* Container with Perspective */}
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        
        {/* Orbiting Technical Ring (Isometric tilt) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-[85%] h-[85%] border-[1px] border-[#D4AF37]/10 rounded-full border-dashed"
            style={{ rotateX: 65 }}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 180, ease: "linear", repeat: Infinity }}
          >
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#D4AF37]" />
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white/50 rounded-full -translate-x-1/2 translate-y-1/2" />
          </motion.div>
          <motion.div 
            className="absolute w-[60%] h-[60%] border-[1px] border-[#D4AF37]/5 rounded-full"
            style={{ rotateX: 65 }}
            animate={{ rotateZ: -360 }}
            transition={{ duration: 240, ease: "linear", repeat: Infinity }}
          />
        </div>

        {/* Isometric Transform Group */}
        <motion.div 
          className="relative w-[280px] h-[460px] md:w-[340px] md:h-[560px]"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ rotateX: 70, rotateZ: -35, y: 50, opacity: 0 }}
          animate={{ rotateX: 65, rotateZ: -30, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Floating animation wrapper */}
          <motion.div
            className="w-full h-full relative"
            animate={{ z: [-10, 10, -10] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          >
            {/* The Solar Panel Frame - High End Aluminum & Glass */}
            <div className="absolute inset-0 border-[3px] border-[#C0C4C8]/40 bg-[#02050A] backdrop-blur-md rounded-xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,1)] ring-1 ring-white/10">
              
              {/* Inner Cells Grid (Realistic Monocrystalline layout) */}
              <div className="absolute inset-2 md:inset-3 grid grid-cols-6 grid-rows-10 gap-[2px] bg-white/5 p-[1px] rounded-[4px]">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div key={i} className="bg-[#050A07] relative w-full h-full rounded-[2px] overflow-hidden group">
                    {/* Busbars (5 thin vertical silver lines) */}
                    <div className="absolute inset-0 flex justify-evenly px-0.5">
                      <div className="w-[1px] h-full bg-white/30" />
                      <div className="w-[1px] h-full bg-white/30" />
                      <div className="w-[1px] h-full bg-white/30" />
                      <div className="w-[1px] h-full bg-white/30" />
                      <div className="w-[1px] h-full bg-white/30" />
                    </div>
                    {/* Fingers (horizontal faint lines via repeating gradient) */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_3px)] pointer-events-none" />
                    
                    {/* Pseudo-square cut corners for monocrystalline realism */}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#02050A] -translate-x-1/2 -translate-y-1/2 rotate-45" />
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#02050A] translate-x-1/2 -translate-y-1/2 rotate-45" />
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#02050A] -translate-x-1/2 translate-y-1/2 rotate-45" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#02050A] translate-x-1/2 translate-y-1/2 rotate-45" />

                    {/* Subtle interaction hover effect */}
                    <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* Advanced Glass Reflection - Sweeping Light */}
              <motion.div 
                className="absolute top-0 left-[-150%] w-[150%] h-[200%] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                style={{ transform: 'rotate(35deg)' }}
                animate={{ x: ['0%', '300%'] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
              />

              {/* Edge Highlights */}
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            </div>

            {/* Technical Annotations (Isometric aligned) */}
            <div className="absolute -left-24 top-16 flex flex-col items-end gap-1 opacity-80">
              <div className="text-[#D4AF37] font-sans text-[8px] md:text-[10px] tracking-[0.25em] uppercase font-bold">Azimuth_180°</div>
              <div className="text-white/50 font-mono text-[7px] md:text-[8px] tracking-widest">OPT: MAXIMUM_YIELD</div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50 mt-1" />
            </div>
            
            <div className="absolute -right-24 bottom-16 flex flex-col items-start gap-1 opacity-80">
              <div className="text-[#D4AF37] font-sans text-[8px] md:text-[10px] tracking-[0.25em] uppercase font-bold">Mono_Perc</div>
              <div className="text-white/50 font-mono text-[7px] md:text-[8px] tracking-widest">EFFICIENCY: 22.8%</div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50 mt-1" />
            </div>

            {/* Connecting Lines from panel to annotations */}
            <div className="absolute top-[72px] md:top-[80px] -left-8 w-8 h-px bg-[#D4AF37]/40 border-l border-[#D4AF37]" />
            <div className="absolute bottom-[72px] md:bottom-[80px] -right-8 w-8 h-px bg-[#D4AF37]/40 border-r border-[#D4AF37]" />

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
