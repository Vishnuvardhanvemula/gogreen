"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ExplodedSolarArray } from "@/components/ui/ExplodedSolarArray";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const arrayY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] md:min-h-[750px] bg-[#06140b] overflow-hidden flex items-center"
    >
      {/* Dynamic Background Noise & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
           
      {isMounted && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000 opacity-0 group-hover:opacity-100 mix-blend-screen"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.04), transparent 40%)`
          }}
        />
      )}

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/5 to-white/0" />
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
        <div className="absolute top-[85%] left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
      </div>

      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, opacity: bgOpacity }}>
        <motion.div
          className="absolute inset-0 origin-center mix-blend-luminosity opacity-[0.07]"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/images/solar_hero_modern_house_1776093453629.png"
            alt="Solar Installation"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#040e08] via-[#06140b]/95 to-transparent" />
      </motion.div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left Content - Typography */}
        <motion.div 
          style={{ y: textY }}
          className="w-full md:w-[50%] flex flex-col items-start pt-20 md:pt-0 pb-16 md:pb-0 z-30 pointer-events-auto relative"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-white text-[2.75rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[6.5rem] tracking-tight mb-6 md:mb-8"
          >
            Engineered <br />
            <span className="text-white/40">to Outlast.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-white/40 text-sm md:text-base max-w-sm leading-relaxed mb-12"
          >
            Utility-grade performance. Residential scale. Meticulously engineered for luxury estates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="group relative flex items-center gap-6"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/20 hover:border-[#D4AF37] transition-all duration-500 bg-white/5 backdrop-blur-sm group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#D4AF37] transition-colors duration-500" />
              </div>
              <span className="font-sans text-xs tracking-[0.2em] text-white uppercase font-semibold group-hover:text-[#D4AF37] transition-colors duration-500">
                Initiate Project
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Array */}
        <motion.div 
          style={{ y: arrayY }}
          className="absolute inset-0 top-16 md:top-0 md:relative w-full md:w-[65%] h-full flex items-center justify-center md:justify-end pointer-events-none md:translate-x-[15%] lg:translate-x-[20%] z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[120%] lg:w-[130%] h-[80vh] md:h-[120vh] transform scale-[0.8] md:scale-110 lg:scale-125 transform-origin-center pointer-events-auto opacity-15 md:opacity-100 mb-0"
          >
            <ExplodedSolarArray />
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Coordinates */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 z-20 flex flex-col gap-1">
        <span className="font-sans text-[9px] tracking-[0.3em] text-white/30 uppercase">LAT: 34.0522° N</span>
        <span className="font-sans text-[9px] tracking-[0.3em] text-white/30 uppercase">LNG: 118.2437° W</span>
      </div>

    </section>
  );
}
