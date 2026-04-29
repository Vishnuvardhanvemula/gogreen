"use client";

import { CTACloser } from "@/components/sections/7-CTACloser";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { AlertTriangle, ShieldCheck, Zap, Droplets, Scale, Leaf, RefreshCw } from "lucide-react";

const riskData = [
  {
    id: "electrical",
    title: "High-Voltage Liability",
    icon: Zap,
    risk: "Improper disconnection of DC lines can lead to catastrophic arc faults and severe fire hazards.",
    mitigation: "Certified GoGreen master electricians perform strict lock-out/tag-out procedures, completely neutralizing the array before physical contact."
  },
  {
    id: "structural",
    title: "Roof Membrane Integrity",
    icon: Droplets,
    risk: "Unskilled removal of lag bolts and flashing often results in thousands of dollars of water damage and voided roof warranties.",
    mitigation: "We deploy architectural roofing specialists to meticulously reverse penetrations, applying industrial-grade sealants to restore absolute watertight integrity."
  },
  {
    id: "legal",
    title: "Environmental Compliance",
    icon: Scale,
    risk: "Disposing of photovoltaic panels containing lead and cadmium in standard landfills invites severe EPA fines and legal liability.",
    mitigation: "Full chain-of-custody documentation is provided. 100% of panels are routed to certified e-waste facilities for rare-earth metal recovery."
  }
];

export default function DecommissioningPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [activeRisk, setActiveRisk] = useState<string | null>("electrical");

  return (
    <main className="bg-[#030704] min-h-screen text-white">
      
      {/* 1. Minimalist Dark-Mode Typography Hero */}
      <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image restricted to a sharp box */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
          <div className="relative w-[60vw] h-[80vh] border border-white/5 overflow-hidden">
            <Image 
              src="/images/macro_solar_dark.png" 
              alt="Solar Glass Macro" 
              fill 
              className="object-cover mix-blend-luminosity grayscale" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030704] via-transparent to-[#030704]" />
          </div>
        </motion.div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-bold block mb-8">
              System Decommissioning
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-medium text-white leading-[0.9] tracking-tight mb-8">
              THE <span className="italic font-serif text-white/50">ZERO</span> FOOTPRINT <br/> GUARANTEE.
            </h1>
            <p className="text-white/50 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              Safe, compliant, and environmentally flawless removal of complex solar infrastructure. We leave your property immaculate and legally cleared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Risk Matrix Accordion */}
      <section className="py-24 md:py-32 bg-[#050B07] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-3xl md:text-4xl font-heading font-medium text-white">The Liability Matrix</h2>
              </div>
              <p className="text-white/60 text-base leading-relaxed font-light mb-8">
                Decommissioning a solar array is infinitely more complex than installation. It requires reversing high-voltage connections and structural mounts without causing damage or inviting legal liability.
              </p>
              <div className="p-6 bg-[#0A1A10] border border-[#1B5E20]/30 rounded-sm">
                 <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">GoGreen Protocol</p>
                 <p className="text-white/80 text-sm font-light leading-relaxed">
                   Our mitigation strategies eliminate 100% of client liability. We take full operational and legal ownership of the array from the moment we arrive on site.
                 </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {riskData.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`border transition-all duration-500 rounded-sm overflow-hidden ${activeRisk === item.id ? "border-[#D4AF37]/50 bg-[#0A1A10]" : "border-white/10 bg-[#030704] hover:border-white/30"}`}
              >
                <button 
                  onClick={() => setActiveRisk(activeRisk === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={`w-6 h-6 ${activeRisk === item.id ? "text-[#D4AF37]" : "text-white/30"}`} />
                    <span className="font-heading font-medium text-lg md:text-xl text-white">{item.title}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${activeRisk === item.id ? "border-[#D4AF37] text-[#D4AF37] rotate-180" : "border-white/30 text-white/30"}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeRisk === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-6 pb-6 pt-2 flex flex-col gap-6">
                        <div className="pl-10 border-l-2 border-red-500/50">
                          <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-1">Inherent Risk</p>
                          <p className="text-white/60 text-sm font-light leading-relaxed">{item.risk}</p>
                        </div>
                        <div className="pl-10 border-l-2 border-[#1B5E20]">
                          <p className="text-[10px] text-[#6B8E70] font-bold uppercase tracking-widest mb-1">GoGreen Mitigation</p>
                          <p className="text-white text-sm font-light leading-relaxed">{item.mitigation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Lifecycle Loop Circular Infographic */}
      <section className="py-24 md:py-40 bg-[#030704] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
              The Circular <span className="text-[#1B5E20] italic font-serif">Lifecycle</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We pledge zero landfill impact. Every ounce of silicon, aluminum, and rare-earth metal is accounted for and returned to the industrial manufacturing pipeline.
            </p>
          </motion.div>

          <div className="relative w-full max-w-[600px] mx-auto aspect-square flex items-center justify-center">
            
            {/* Animated dashed ring */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[2px] border-dashed border-[#1B5E20]/30 rounded-full" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-8 border-[1px] border-white/5 rounded-full" />
            
            {/* Center Core */}
            <div className="absolute z-20 w-32 h-32 bg-[#0A1A10] border border-[#1B5E20] rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(27,94,32,0.3)]">
              <Leaf className="w-8 h-8 text-[#D4AF37] mb-2" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">100% Recycled</span>
            </div>

            {/* Nodes */}
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#050B07] border border-white/10 rounded-full flex flex-col items-center justify-center z-10 p-4">
              <span className="text-[#D4AF37] font-serif italic text-2xl mb-1">Glass</span>
              <span className="text-white/50 text-[9px] uppercase tracking-widest text-center">Crushed & Repurposed</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute bottom-[15%] right-[-10%] w-40 h-40 bg-[#050B07] border border-white/10 rounded-full flex flex-col items-center justify-center z-10 p-4">
              <span className="text-[#D4AF37] font-serif italic text-2xl mb-1">Aluminum</span>
              <span className="text-white/50 text-[9px] uppercase tracking-widest text-center">Smelted & Reused</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute bottom-[15%] left-[-10%] w-40 h-40 bg-[#0A2A1A] border border-[#1B5E20]/50 rounded-full flex flex-col items-center justify-center z-10 p-4 shadow-lg">
              <span className="text-[#D4AF37] font-serif italic text-2xl mb-1">Silicon & Copper</span>
              <span className="text-white/80 text-[9px] uppercase tracking-widest text-center">Extracted for Tech Mfg</span>
            </motion.div>

          </div>
        </div>
      </section>

      <CTACloser />
    </main>
  );
}
