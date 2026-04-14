"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ProcessSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]); // 5 items = 500% width. -80% translates to show the 5th item.

  const steps = [
    { title: "Site Assessment", description: "Detailed structural, shading, and electrical analysis. We measure the underlying geometry of your property.", img: "/images/solar_panels_closeup_1776093470929.png" },
    { title: "System Engineering", description: "Built specifically for your load profile. Permit-ready blueprints, mapped to the millimeter.", img: "/images/hero_abstract_solar_macro.png" },
    { title: "Procurement", description: "Certified equipment only. No shortcuts, no substitutions. Tier-1 monocrystalline panels.", img: "/images/hero_luxury_solar_8k.png" },
    { title: "Installation", description: "In-house certified crew. Clean worksite. Strictly on schedule.", img: "/images/solar_hero_modern_house_1776093453629.png" },
    { title: "Handoff", description: "25-year warranty activated immediately. 48-hour access line open to you directly.", img: "/images/solar_panels_closeup_1776093470929.png" }
  ];

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#0A1A10]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#0A1A10]">
        
        {/* Sticky Header */}
        <div className="absolute top-0 left-0 w-full border-b border-white/10 z-20 flex items-center justify-between px-6 md:px-12 py-8 bg-[#0A1A10]/80 backdrop-blur-md">
           <span className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Standard Operating Procedure</span>
           <span className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">01 — 05</span>
        </div>

        <motion.div style={{ x }} className="flex w-[500vw] h-[100dvh] relative z-10 pt-[80px]">
          {steps.map((step, idx) => (
            <div key={idx} className="w-[100vw] h-full flex flex-col lg:flex-row relative shrink-0">
              
              {/* Left Side: Typography */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10 relative z-10 bg-[#0A1A10]">
                 
                 {/* Rotating Tech HUD Element */}
                 <div className="hidden lg:flex absolute top-12 right-12 opacity-30 select-none z-0 items-center justify-center mix-blend-screen text-amber-500">
                    <motion.svg 
                      viewBox="0 0 100 100" 
                      className="w-24 h-24"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" />
                      <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="1" />
                      <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
                      <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="1" />
                      <line x1="85" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" />
                    </motion.svg>
                 </div>

                 <div className="max-w-xl relative w-full h-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8 sm:mb-12 lg:mb-24">
                        <div className="w-8 sm:w-12 h-px bg-white/20" />
                        <p className="text-white/50 font-bold tracking-[0.2em] text-[9px] sm:text-[10px] uppercase whitespace-nowrap">Phase 0{idx + 1}</p>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-medium text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight">
                       {step.title}
                    </h2>
                    
                    <p className="text-[#6B8E70] text-sm sm:text-base md:text-lg lg:text-xl font-sans font-light leading-relaxed max-w-sm lg:max-w-none">
                       {step.description}
                    </p>
                 </div>
                 
                 {/* Decorative background number */}
                 <div className="absolute bottom-4 left-4 lg:bottom-12 lg:left-12 text-[#163523] opacity-[0.15] font-heading font-medium text-[120px] sm:text-[150px] lg:text-[200px] leading-none pointer-events-none select-none z-0">
                   0{idx + 1}
                 </div>
              </div>

              {/* Right Side: Image Window */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-4 sm:p-8 lg:p-24 flex items-center justify-center relative bg-[#0A1A10]">
                  <div className="relative w-full h-full max-w-2xl max-h-[300px] sm:max-h-[400px] lg:max-h-none lg:aspect-[4/5] bg-[#0F2A1A] overflow-hidden">
                     <Image 
                       src={step.img}
                       alt={step.title}
                       fill
                       sizes="(max-width: 1024px) 100vw, 50vw"
                       className="object-cover opacity-60 grayscale hover:scale-105 transition-transform duration-1000 ease-out"
                     />
                     <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                  </div>
              </div>

            </div>
          ))}
        </motion.div>
        
        {/* Progress Tracker Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20">
           <motion.div 
             className="h-full bg-amber-500"
             style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
           />
        </div>
        
      </div>
    </section>
  );
}
