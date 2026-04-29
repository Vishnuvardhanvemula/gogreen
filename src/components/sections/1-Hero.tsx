"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, MoveDown } from "lucide-react";
import { SolarPanelGraphic } from "@/components/ui/SolarPanelGraphic";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVars: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] bg-[#0A2A1A] overflow-hidden flex flex-col justify-end pb-8 lg:pb-16 group/hero">
      
      {/* MAGNETIC SPOTLIGHT */}
      {isMounted && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500 opacity-0 group-hover/hero:opacity-100"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`
          }}
        />
      )}

      {/* FULL BLEED BACKGROUND */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <motion.div
          className="absolute inset-0 origin-center mix-blend-luminosity opacity-40"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image 
            src="/images/solar_hero_modern_house_1776093453629.png"
            alt="Tier-1 Solar Installation"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>
        
        {/* Deep Green & Gold Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1A] via-[#0A2A1A]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A1A] via-transparent to-[#0A2A1A] pointer-events-none" />
      </motion.div>

      {/* LIGHTWEIGHT 2D SOLAR GRAPHIC */}
      <SolarPanelGraphic />

      {/* FOREGROUND CONTENT (Masterpiece Editorial Grid) */}
      <div className="relative z-20 w-full max-w-[95vw] lg:max-w-[90vw] mx-auto px-4 md:px-0 flex flex-col mt-auto pb-4">
        
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 lg:gap-y-12 items-end w-full mb-10 lg:mb-16"
        >
          {/* Left Column: The Anchor Typography */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col items-start text-left">
            
            {/* Precision Eyebrow */}
            <motion.div variants={textVars} className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]" />
              <p className="text-[#D4AF37] font-sans tracking-[0.4em] text-[9px] md:text-[11px] uppercase font-bold">
                Tier-1 Operations
              </p>
            </motion.div>
            
            {/* The Brand Anchor */}
            <motion.h1 
              variants={textVars}
              className="text-white drop-shadow-2xl flex flex-col w-full"
            >
              <span className="block font-heading font-semibold text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.85] tracking-tighter uppercase drop-shadow-lg">
                GO GREEN.
              </span>
              <span className="block font-serif font-light italic text-white/90 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight mt-3 md:mt-4">
                Solar, done right.
              </span>
            </motion.h1>
          </div>

          {/* Right Column: Tucked Paragraph */}
          <motion.div 
            variants={textVars}
            className="col-span-12 md:col-span-10 lg:col-span-4 xl:col-span-3 flex flex-col lg:pb-3"
          >
            <div className="border-l border-white/10 pl-6 md:pl-8 py-2">
              <p className="text-[#6B8E70] font-sans text-sm md:text-base leading-relaxed font-light group-hover/hero:text-white/80 transition-colors duration-500">
                Flawless aesthetics engineered for absolute power. We design, install, and maintain premium solar energy systems that seamlessly integrate with high-end architecture.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA & Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-0 bg-[#0A2A1A]/80 backdrop-blur-xl border border-white/5 rounded-2xl md:rounded-full p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/bar"
        >
          {/* Subtle gold gradient shine inside the bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* CTA */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 flex items-center justify-center md:justify-start md:border-r border-white/5 md:pr-8 md:pl-4 relative z-10 mb-6 md:mb-0">
            <a 
              href="#contact" 
              className="group relative flex items-center justify-between gap-4 px-8 py-4 md:py-3 bg-[#1B5E20] text-white font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold overflow-hidden rounded-full w-full hover:scale-105 transition-transform duration-500 border border-white/10"
            >
              <span className="relative z-10 group-hover:text-[#0A2A1A] transition-colors duration-300 delay-75">Initiate Project</span>
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full" />
              <div className="relative z-10 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0A2A1A]/10 transition-colors duration-300 delay-75">
                 <ArrowRight className="w-3 h-3 text-white group-hover:text-[#0A2A1A] transform group-hover:translate-x-0.5 transition-all duration-300 delay-75" />
              </div>
            </a>
          </div>

          {/* Metric 1 */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col items-center justify-center md:border-r border-white/5 py-3 md:py-0 relative z-10">
            <span className="text-white font-serif italic text-2xl md:text-3xl lg:text-4xl mb-1">25 Year</span>
            <span className="text-[#D4AF37] font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-center">Comprehensive Warranty</span>
          </div>

          {/* Metric 2 */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col items-center justify-center py-3 md:py-0 relative z-10">
            <span className="text-white font-serif italic text-2xl md:text-3xl lg:text-4xl mb-1">100%</span>
            <span className="text-[#D4AF37] font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-center">In-House Engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
