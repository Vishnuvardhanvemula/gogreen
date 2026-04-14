"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    
    const element = containerRef.current;
    if (element) element.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (element) element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      idx: "01",
      title: "Solar EPC",
      target: "For large-scale residential and commercial builds.",
      description: "End-to-end engineering, procurement, and construction. We build precision systems using Tier-1 materials right the first time, ensuring 25 years of uninterrupted output.",
      image: "/images/solar_hero_modern_house_1776093453629.png"
    },
    {
      idx: "02",
      title: "Decommissioning",
      target: "For properties undergoing major structural changes.",
      description: "Safe, compliant removal of obsolete panels, ensuring roof integrity and proper recycling protocols without disrupting the primary estate structure.",
      image: "/images/hero_luxury_solar_8k.png"
    },
    {
      idx: "03",
      title: "Removal & Repower",
      target: "For owners inheriting failed or aging arrays.",
      description: "Complete overhaul of aging arrays. We strip the old infrastructure, rectify structural faults, and install elite high-yield panels for maximum efficiency.",
      image: "/images/solar_panels_closeup_1776093470929.png"
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#0A2A1A] py-20 md:py-32 border-b border-white/5 relative overflow-hidden group/section">
      
      {/* Decorative side panel (Luxury element) */}
      <div className="hidden xl:flex absolute top-0 left-0 h-full w-16 border-r border-white/5 flex-col items-center justify-between py-12 z-0">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="rotate-[-90deg] whitespace-nowrap text-[10px] tracking-[0.5em] text-white/20 font-bold uppercase mix-blend-overlay">
          Tier-1 Operations
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Background textural elements */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#1B5E20]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-[#1B5E20]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      {/* Interactive Magnetic Spotlight */}
      {mousePosition && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover/section:opacity-100"
          style={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.05), transparent 40%)`,
            zIndex: 1
          }}
        />
      )}

      <div className="max-w-[90vw] md:max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Label */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <motion.span 
              className="w-6 md:w-8 lg:w-12 h-px bg-amber-500/80" 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-amber-500/90 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
              Our Expertise
            </span>
            <motion.span 
              className="w-6 md:w-8 lg:w-12 h-px bg-amber-500/80" 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white tracking-tight text-center px-4">
            Specialized Solar Operations
          </h2>
        </motion.div>

        {/* Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:border-y border-white/10 flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/10 last:border-0 transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[450px]"
            >
              {/* Background Image Reveal */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-[#0A2A1A]/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1A] via-[#0A2A1A]/80 to-[#0A2A1A]/40" />
              </div>

              {/* Massive Faint Number */}
              <div className="absolute z-10 top-4 right-4 text-white/[0.03] font-heading font-medium text-8xl md:text-9xl pointer-events-none select-none tracking-tighter transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:text-amber-500/10">
                {service.idx}
              </div>
              
              <div className="relative z-10 pt-8 md:pt-0 mt-auto transition-transform duration-500 group-hover:-translate-y-4">
                <h4 className="text-2xl md:text-3xl font-heading font-medium text-white mb-2 md:mb-3 group-hover:text-amber-500 transition-colors duration-500">
                  {service.title}
                </h4>
                
                {/* Single sentence target */}
                <p className="text-[#6B8E70] text-xs md:text-sm font-sans mb-6 md:mb-8 max-w-[85%] group-hover:text-amber-500/70 transition-colors duration-500">
                  {service.target}
                </p>

                {/* Muted gold rule */}
                <div className="w-full h-px bg-[#D4AF37]/30 mb-6 md:mb-8 group-hover:bg-amber-500/50 transition-colors duration-500" />
                
                <p className="text-white/60 leading-relaxed font-sans font-light mb-8 md:mb-12 text-[14px] md:text-[15px] group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-white font-medium text-xs tracking-[0.2em] uppercase group-hover:text-amber-500 transition-colors">
                   Learn more <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
