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

        <motion.div style={{ x }} className="flex w-[500vw] h-full relative z-10 pt-[80px]">
          {steps.map((step, idx) => (
            <div key={idx} className="w-[100vw] h-full flex flex-col md:flex-row relative shrink-0">
              
              {/* Left Side: Typography */}
              <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-24 border-r border-white/10 relative">
                 <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-24">
                        <div className="w-12 h-px bg-white/20" />
                        <p className="text-white/50 font-bold tracking-[0.2em] text-[10px] uppercase">Phase 0{idx + 1}</p>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-heading font-medium text-white mb-8 tracking-tight">
                       {step.title}
                    </h2>
                    
                    <p className="text-[#6B8E70] text-lg md:text-xl font-sans font-light leading-relaxed">
                       {step.description}
                    </p>
                 </div>
                 
                 {/* Decorative background number */}
                 <div className="absolute bottom-12 left-12 text-[#163523] opacity-20 font-heading font-medium text-[200px] leading-none pointer-events-none select-none z-0">
                   0{idx + 1}
                 </div>
              </div>

              {/* Right Side: Image Window */}
              <div className="w-full md:w-1/2 h-full p-8 md:p-24 flex items-center justify-center relative">
                  <div className="relative w-full max-w-2xl aspect-square md:aspect-[4/5] bg-[#0F2A1A] overflow-hidden">
                     <Image 
                       src={step.img}
                       alt={step.title}
                       fill
                       sizes="50vw"
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
