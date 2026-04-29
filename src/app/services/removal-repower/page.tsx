"use client";

import { CTACloser } from "@/components/sections/7-CTACloser";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Battery, Zap, AlertTriangle, ArrowRight, ShieldCheck, TrendingDown, TrendingUp, RefreshCw } from "lucide-react";

export default function RemovalRepowerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Chart animations
  const chartRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: chartProgress } = useScroll({
    target: chartRef,
    offset: ["start end", "center center"]
  });
  const pathLength = useTransform(chartProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-[#050B07] min-h-screen text-white">
      
      {/* 1. Bespoke Split Visual Hero */}
      <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Legacy (Dark, Muted) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-24 z-10 border-b md:border-b-0 md:border-r border-white/10">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <Image src="/images/apple_style_solar_roof.png" alt="Legacy System" fill className="object-cover grayscale opacity-20" priority />
            <div className="absolute inset-0 bg-[#0A1A10]/90" />
          </motion.div>
          <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start w-full max-w-md">
            <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">The Past</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white/50 mb-4">
              Degrading Yield.
            </h1>
            <p className="text-white/40 font-light text-sm md:text-base leading-relaxed">
              Aging string-inverter arrays rapidly lose efficiency and present single points of failure.
            </p>
          </div>
        </div>

        {/* Right Side: Next-Gen (Vibrant, Illuminated) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-24 z-10">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <Image src="/images/hero_abstract_solar_macro.png" alt="Next-Gen System" fill className="object-cover opacity-60" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1A] via-transparent to-[#0A2A1A]/30" />
          </motion.div>
          <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start w-full max-w-md">
            <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">The Future</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-4">
              Absolute <span className="italic font-serif text-[#D4AF37]">Power.</span>
            </h1>
            <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
              Next-generation microinverter architectures that unlock maximum potential and energy resilience.
            </p>
          </div>
        </div>
        
        {/* Center Divider/Emblem */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#050B07] border border-white/10 rounded-full z-20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <RefreshCw className="w-6 h-6 text-[#D4AF37]" />
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-24 md:py-32 bg-[#0A1A10]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
              The Evolution Paradigm
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Early solar adoption often meant compromising on aesthetics and dealing with the severe limitations of single-point-of-failure string inverters. Our Repower protocol is a comprehensive upgrade pathway designed for luxury estates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Comparison Matrix */}
      <section className="py-24 bg-[#050B07]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col mb-16 items-center text-center">
             <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Architecture Comparison</span>
             <h3 className="text-3xl md:text-4xl font-heading text-white font-medium">Why Repower?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 relative">
            
            {/* VS Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0A2A1A] rounded-full z-20 items-center justify-center border border-[#D4AF37]/30 text-[10px] font-bold tracking-widest text-[#D4AF37]">
              VS
            </div>

            {/* Legacy Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#0A1A10] p-8 md:p-12 lg:pr-20 border border-white/5 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
            >
              <div className="flex items-center gap-3 mb-8 opacity-50">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h4 className="text-xl font-heading font-medium text-white">Legacy String Systems</h4>
              </div>
              <ul className="space-y-6">
                <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Failure Point</span>
                  <span className="text-white/70 font-light">One shaded panel drags down the entire array's output.</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Aesthetics</span>
                  <span className="text-white/70 font-light">Bulky mounting hardware with exposed conduits.</span>
                </li>
                <li className="flex flex-col gap-1 pb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Battery Integration</span>
                  <span className="text-white/70 font-light">Often incompatible with modern smart-storage (Tesla/Enphase).</span>
                </li>
              </ul>
            </motion.div>

            {/* Next-Gen Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0A2A1A] p-8 md:p-12 lg:pl-20 border border-[#1B5E20]/30 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                <h4 className="text-xl font-heading font-medium text-white">GoGreen Repower Protocol</h4>
              </div>
              <ul className="space-y-6 relative z-10">
                <li className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Distributed Power</span>
                  <span className="text-white font-light">Microinverters ensure each panel operates at absolute peak independence.</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Architectural Harmony</span>
                  <span className="text-white font-light">Low-profile skirted racking and hidden wire management.</span>
                </li>
                <li className="flex flex-col gap-1 pb-4">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Future-Proof</span>
                  <span className="text-white font-light">Native readiness for whole-home battery backup and EV integration.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Degradation vs Yield Chart */}
      <section className="py-24 md:py-32 bg-[#0A1A10] overflow-hidden" ref={chartRef}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
             <h3 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
               Recover Lost <span className="text-[#D4AF37] italic font-serif">Yield</span>
             </h3>
             <p className="text-white/60 text-lg leading-relaxed font-light mb-8">
               Standard tier-2 panels degrade significantly over their first 10 years. By upgrading to GoGreen's Tier-1 monocrystalline arrays paired with intelligent microinverters, clients routinely see a 25% to 40% immediate jump in energy production from the exact same roof footprint.
             </p>
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 bg-[#050B07] p-4 border border-white/5">
                 <TrendingDown className="w-8 h-8 text-red-400/70" />
                 <div>
                   <p className="text-white text-sm font-bold">Legacy Output Drop</p>
                   <p className="text-white/50 text-xs font-light">Up to -2% annual degradation</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 bg-[#0A2A1A] p-4 border border-[#1B5E20]/30">
                 <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                 <div>
                   <p className="text-white text-sm font-bold">GoGreen Output Stability</p>
                   <p className="text-[#D4AF37]/80 text-xs font-light">&lt; 0.25% annual degradation</p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Animated Chart SVG */}
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-[#050B07] border border-white/10 rounded-sm p-6 md:p-10 flex flex-col justify-end">
            {/* Chart Grid */}
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '10% 20%' }} />
            
            <div className="relative z-10 w-full h-full flex items-end">
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible preserve-3d" preserveAspectRatio="none">
                 {/* Y Axis Labels */}
                 <text x="-5" y="10" className="text-[3px] fill-white/30 font-sans">100%</text>
                 <text x="-5" y="50" className="text-[3px] fill-white/30 font-sans">80%</text>
                 <text x="-5" y="90" className="text-[3px] fill-white/30 font-sans">60%</text>
                 
                 {/* X Axis Labels */}
                 <text x="10" y="105" className="text-[3px] fill-white/30 font-sans">Year 1</text>
                 <text x="50" y="105" className="text-[3px] fill-white/30 font-sans">Year 10</text>
                 <text x="90" y="105" className="text-[3px] fill-white/30 font-sans">Year 25</text>

                 {/* Legacy Line (Dropping steeply) */}
                 <motion.path 
                   d="M 0 10 Q 50 30, 100 60" 
                   fill="none" 
                   stroke="rgba(248, 113, 113, 0.4)" 
                   strokeWidth="1.5"
                   strokeDasharray="2 2"
                   style={{ pathLength }}
                 />
                 
                 {/* GoGreen Line (Stable, high) */}
                 <motion.path 
                   d="M 0 10 Q 50 12, 100 15" 
                   fill="none" 
                   stroke="#D4AF37" 
                   strokeWidth="2"
                   style={{ pathLength }}
                 />
                 
                 {/* Area under GoGreen line */}
                 <motion.path 
                   d="M 0 10 Q 50 12, 100 15 L 100 100 L 0 100 Z" 
                   fill="url(#goldGradient)" 
                   opacity="0.2"
                   style={{ opacity: useTransform(chartProgress, [0.5, 1], [0, 0.2]) }}
                 />

                 <defs>
                   <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#D4AF37" />
                     <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
            
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 bg-[#D4AF37]" />
                <span className="text-white text-[10px] font-sans">GoGreen Tier-1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 border-t border-dashed border-red-400/70" />
                <span className="text-white text-[10px] font-sans">Legacy String System</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTACloser />
    </main>
  );
}
