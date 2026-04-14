"use client";

import { motion } from "framer-motion";

export function GuaranteeSection() {
  return (
    <section className="w-full bg-[#051109] py-20 sm:py-32 md:py-64 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* --- Premium Aurora Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-[100px] rounded-full"
        />
        <motion.div
           animate={{ 
             scale: [1.2, 1, 1.2],
             opacity: [0.15, 0.05, 0.15]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-[-30%] right-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)] blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-[#051109]/40 backdrop-blur-[20px]" />
      </div>

      {/* --- Top Gradient Vignette --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#051109_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 px-4 md:px-0">
        
        {/* Section Label */}
        <motion.div 
          className="flex items-center gap-2 md:gap-4 mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-6 md:w-8 lg:w-12 h-px bg-white/30" />
          <span className="text-white/60 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-center">
            The GoGreen Guarantee
          </span>
          <span className="w-6 md:w-8 lg:w-12 h-px bg-white/30" />
        </motion.div>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white leading-[1.3] md:leading-[1.2] tracking-tight mb-8 md:mb-16 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We guarantee our workmanship for 25 years.<br className="hidden lg:block"/>
          And we respond to every issue within 48 hours.<br className="hidden lg:block"/>
          In writing.
        </motion.h2>

        {/* Signature SVG */}
        <motion.div 
          className="mb-6 mix-blend-screen mix-blend-plus-lighter"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M40 50 C 40 20, 60 10, 70 30 C 80 50, 70 70, 50 60 C 30 50, 10 40, 20 20 C 30 0, 50 0, 60 20 C 70 40, 90 60, 110 50 C 130 40, 140 20, 120 10 C 100 0, 80 20, 90 40 C 100 60, 130 70, 150 50 C 170 30, 160 10, 140 10 C 120 10, 140 50, 160 60 C 180 70, 190 50, 180 40" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </motion.div>
        
        <motion.p 
          className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          Madan
        </motion.p>
        <motion.p 
          className="text-xs text-slate-500 tracking-[0.1em] uppercase mt-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          Founder & CEO
        </motion.p>

      </div>
      
    </section>
  );
}
