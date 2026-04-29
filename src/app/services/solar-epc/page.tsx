"use client";

import { CTACloser } from "@/components/sections/7-CTACloser";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Ruler, ShieldCheck, Zap, Activity, HardHat, Cpu, Hexagon } from "lucide-react";

const anatomyData = [
  {
    id: "array",
    title: "The Photovoltaic Array",
    desc: "We exclusively source Tier-1 monocrystalline panels. Chosen for their superior temperature coefficient and high energy density, ensuring maximum yield even in compromised lighting conditions.",
    icon: Hexagon,
    specs: ["22%+ Efficiency", "Degradation < 0.25%/yr", "All-Black Aesthetic"],
    img: "/images/solar_panels_closeup_1776093470929.png"
  },
  {
    id: "inverters",
    title: "Distributed Architecture",
    desc: "Legacy systems rely on single string inverters. We deploy advanced microinverters at the panel level, eliminating single points of failure and enabling module-level optimization and monitoring.",
    icon: Cpu,
    specs: ["Module-Level MPPT", "Rapid Shutdown Compliant", "97% CEC Efficiency"],
    img: "/images/hero_abstract_solar_macro.png"
  },
  {
    id: "racking",
    title: "Structural Integrity",
    desc: "Our custom racking solutions are engineered to withstand extreme wind loads. We utilize low-profile, skirted mounting hardware that integrates seamlessly with your estate's roofline.",
    icon: HardHat,
    specs: ["Aircraft-Grade Aluminum", "Hidden Conduit Runs", "Zero-Leak Guarantee"],
    img: "/images/macro_solar_texture.png"
  }
];

export default function SolarEPCPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTab, setActiveTab] = useState(anatomyData[0]);

  return (
    <main className="bg-[#0A1A10] min-h-screen">
      
      {/* 1. Bespoke Cinematic Hero */}
      <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden flex flex-col justify-center">
        <motion.div style={{ y: heroY, opacity }} className="absolute inset-0 z-0">
          <Image 
            src="/images/luxury_solar_aerial.png"
            alt="Luxury Solar EPC"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A10]/40 via-[#0A1A10]/80 to-[#0A1A10]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-16 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-sans tracking-[0.3em] text-xs uppercase font-bold">
                EPC Division
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-medium text-white leading-[0.9] tracking-tight mb-8">
              THE ANATOMY <br />
              <span className="text-white/50 italic font-serif text-5xl md:text-7xl lg:text-8xl">of Power.</span>
            </h1>
            
            <p className="text-white/70 font-sans text-lg md:text-xl max-w-2xl leading-relaxed font-light border-l border-[#D4AF37]/30 pl-6 py-2">
              End-to-end engineering, elite procurement, and flawless construction. We don't just install panels; we architect integrated energy assets.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold rotate-90 mb-6">Scroll</span>
          <div className="w-px h-16 bg-white/10 relative overflow-hidden">
            <motion.div animate={{ y: [0, 64] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="w-full h-1/2 bg-[#D4AF37]" />
          </div>
        </motion.div>
      </section>

      {/* 2. Animated KPI Data Visualization */}
      <section className="relative z-20 py-24 bg-[#050B07] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col border-l border-white/10 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold">System Efficiency</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl lg:text-6xl font-heading font-medium text-white">99.8</span>
                <span className="text-white/50 text-xl">%</span>
              </div>
              <p className="text-white/50 text-sm font-light">Uptime guaranteed through module-level optimization.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col border-l border-white/10 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold">Structural Load</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl lg:text-6xl font-heading font-medium text-white">160</span>
                <span className="text-white/50 text-xl">mph</span>
              </div>
              <p className="text-white/50 text-sm font-light">Wind rating on our bespoke low-profile racking systems.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col border-l border-white/10 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold">Asset Protection</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl lg:text-6xl font-heading font-medium text-white">25</span>
                <span className="text-white/50 text-xl">Years</span>
              </div>
              <p className="text-white/50 text-sm font-light">Comprehensive bumper-to-bumper warranty on all parts.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Interactive "System Anatomy" */}
      <section className="py-32 bg-[#0A1A10] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
              The Architecture of <span className="text-[#D4AF37] italic font-serif">Excellence</span>
            </h2>
            <p className="text-white/60 max-w-2xl font-light leading-relaxed">
              Every component is meticulously selected, analyzed, and integrated. Explore the technical anatomy of a GoGreen EPC deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Tab Controls */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {anatomyData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-start gap-6 p-6 text-left transition-all duration-500 border-l-2 ${
                    activeTab.id === tab.id 
                      ? "border-[#D4AF37] bg-white/[0.03]" 
                      : "border-white/10 hover:border-white/30 hover:bg-white/[0.01]"
                  }`}
                >
                  <tab.icon className={`w-8 h-8 shrink-0 transition-colors duration-500 ${activeTab.id === tab.id ? "text-[#D4AF37]" : "text-white/30"}`} />
                  <div>
                    <h3 className={`text-xl font-heading font-medium mb-2 transition-colors duration-500 ${activeTab.id === tab.id ? "text-white" : "text-white/50"}`}>
                      {tab.title}
                    </h3>
                    {activeTab.id === tab.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="text-white/60 text-sm leading-relaxed mb-4 font-light mt-2">
                          {tab.desc}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {tab.specs.map((spec, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
                              <Zap className="w-3 h-3" /> {spec}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Interactive Display Window */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-white/10 bg-[#050B07] group">
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeTab.img}
                    alt={activeTab.title}
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000"
                  />
                  
                  {/* Overlay technical markers */}
                  <div className="absolute top-8 right-8 flex items-center gap-2 z-20">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">Live Telemetry</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <CTACloser />
    </main>
  );
}
