"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BatteryCharging, Sun } from "lucide-react";

export function HeroSection() {
  
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[750px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. Full Bleed Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <Image
          src="/images/hero_abstract_solar_macro.png"
          alt="Luxury Solar Array on modern home"
          fill
          className="object-cover object-[center_70%] opacity-90"
          priority
        />
        
        {/* Subtle Architectural Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/50 sm:to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-slate-950 to-transparent" />
      </motion.div>

      {/* --- UNIQUE ELEMENT: Live System Telemetry Widget --- */}
      <motion.div 
        className="absolute right-6 lg:right-12 xl:right-16 top-1/4 z-20 hidden md:flex flex-col w-72 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
         {/* Header */}
         <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-white/5">
            <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-semibold">Live Telemetry</span>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
               <span className="text-[9px] text-emerald-400 tracking-wider">OPTIMAL</span>
            </div>
         </div>
         {/* Body */}
         <div className="p-6 flex flex-col gap-6">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-2 text-white/40 mb-1">
                  <Sun className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-wider font-medium">Array Yield</span>
               </div>
               <div className="text-3xl font-heading text-white font-medium flex items-baseline gap-1">
                 14.2 <span className="text-sm text-brand-primary font-bold">kW</span>
               </div>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-2 text-white/40 mb-1">
                  <BatteryCharging className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-wider font-medium">Powerwall Reserves</span>
               </div>
               <div className="w-full h-1.5 bg-black/40 rounded-full mt-2 overflow-hidden border border-white/5">
                  <motion.div className="h-full bg-amber-500 rounded-full" initial={{ width: "0%" }} animate={{ width: "94%" }} transition={{ delay: 1.5, duration: 2, ease: "easeOut" }} />
               </div>
               <div className="flex justify-between text-[10px] mt-1.5 text-white/60 font-medium">
                  <span>Capacity</span>
                  <span className="text-white">94%</span>
               </div>
            </div>
         </div>
      </motion.div>
      {/* --------------------------------------------------- */}

      {/* Content Container - Bottom-Left Anchored */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-20 sm:pb-32 pt-32 pointer-events-none">
        <motion.div
           variants={containerVars}
           initial="hidden"
           animate="show"
           className="max-w-3xl pointer-events-auto"
        >
          {/* Subtle Label */}
          <motion.div variants={itemVars} className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-8 h-[1px] bg-amber-500" />
            <span className="text-amber-500 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Architectural Solar Integration
            </span>
          </motion.div>
          
          {/* Elegant Readable Headline */}
          <motion.h1 variants={itemVars} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-heading font-medium text-white leading-[1.05] tracking-tight mb-6 md:mb-8 text-shadow-xl">
             Power your estate <br className="hidden sm:block"/>
             with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">absolute precision.</span>
          </motion.h1>
          
          {/* Sophisticated Paragraph */}
          <motion.p variants={itemVars} className="text-lg md:text-xl text-white/70 font-sans leading-relaxed mb-10 max-w-xl font-light">
            High-performance energy systems engineered specifically for luxury residences. Fully integrated. Protected for 25 years.
          </motion.p>
          
          {/* Action Area */}
          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="group relative bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-[15px] tracking-wide flex items-center justify-center gap-3 transition-colors duration-300 w-full sm:w-auto shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              Request a Blueprint
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-4 md:py-5 rounded-full font-semibold text-sm md:text-[15px] tracking-wide transition-colors duration-300">
              Technical Specs
            </button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
