"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sophisticated staggered text animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full min-h-[100dvh] bg-[#0A0D0B] overflow-hidden flex flex-col lg:flex-row pt-[100px] lg:pt-[120px] pb-12 lg:pb-0">
      
      {/* LEFT SIDE: Clean, Structured Typography */}
      {/* Flawless Alignment: px-6 md:px-12 exactly matches the Navbar's padding */}
      <div className="relative w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 py-16 lg:py-0 z-10">
        
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVars} className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-amber-500" />
            <p className="text-amber-500 font-sans tracking-[0.3em] text-[10px] uppercase font-semibold">
              Utility-Grade Residential
            </p>
          </motion.div>
          
          {/* Headline - Staggered lines, tightened leading */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.0] font-heading font-medium text-white tracking-tight mb-8 max-w-2xl">
            <motion.span className="block" variants={itemVars}>Solar Infrastructure</motion.span>
            <motion.span className="block text-white/90" variants={itemVars}>for the Modern Estate.</motion.span>
          </h1>
          
          {/* Paragraph */}
          <motion.p variants={itemVars} className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-md mb-12">
            We design, install, and maintain premium solar energy systems that seamlessly integrate with high-end architecture. Flawless aesthetics, engineered for absolute power.
          </motion.p>
        </motion.div>

        {/* CTA & Metrics */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Bespoke CTA Button */}
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-sans text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-amber-500 hover:text-white transition-all duration-400"
          >
            <span>Initiate Project</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          {/* Metrics with sophisticated gradient divider */}
          <div className="flex items-center gap-10 relative pt-6 sm:pt-0 border-t sm:border-t-0 w-full sm:w-auto sm:ml-4">
            {/* Gradient Divider Line (Desktop only) */}
            <div className="hidden sm:block absolute left-[-24px] top-1 bottom-1 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            <div className="flex flex-col">
              <span className="text-white font-heading font-medium text-2xl mb-1">25 YR</span>
              <span className="text-white/40 font-sans text-[9px] tracking-[0.1em] uppercase">Warranty</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-medium text-2xl mb-1">100%</span>
              <span className="text-white/40 font-sans text-[9px] tracking-[0.1em] uppercase">In-House</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* RIGHT SIDE: Framed Architectural Imagery */}
      {/* Flawless Alignment: lg:pr-12 aligns the right edge of the image perfectly with the Navbar's right edge */}
      <div className="relative w-full lg:w-[45%] h-[50vh] lg:h-[calc(100dvh-120px)] lg:py-12 lg:pl-6 lg:pr-12 flex items-center justify-center bg-[#0A0D0B] z-0">
        <motion.div 
          className="relative w-full h-full lg:rounded-2xl overflow-hidden bg-[#0A0D0B] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/[0.04]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        >
          {/* Ultra-slow Ken Burns zoom */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1.05, 1] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          >
            <Image 
              src="/images/ultimate_solar_mansion.png"
              alt="Luxury Solar Installation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>
          {/* Subtle gradient overlay to simulate museum glass reflection / vignette */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 pointer-events-none" />
          {/* Inner shadow for physical depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none lg:rounded-2xl" />
        </motion.div>
      </div>

    </section>
  );
}
