"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// The CSS-only solar cell grid
function SolarCellGrid() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#040a0e]">
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.12) 1px, transparent 1px)`, backgroundSize: 'calc(100% / 6) calc(100% / 10)' }} />
      <div className="absolute inset-0 mix-blend-screen opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent calc(20% - 1px), rgba(255,255,255,0.5) calc(20% - 1px), rgba(255,255,255,0.5) 20%)', backgroundSize: 'calc(100% / 6) 100%' }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 4px)', backgroundSize: '100% 4px' }} />
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle 2px at center, white 70%, transparent 70%)`, backgroundSize: 'calc(100% / 6) calc(100% / 10)', backgroundPosition: '0 0' }} />
    </div>
  );
}

// Removed HudSpec component for cleaner aesthetic

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.5 });

  // Mouse tracking for interactive flashlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  }, [mouseX, mouseY]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      mouseX.set(e.touches[0].clientX / window.innerWidth);
      mouseY.set(e.touches[0].clientY / window.innerHeight);
    }
  }, [mouseX, mouseY]);

  // ── PHASE 1: ASSEMBLY (0.0 to 0.4) ──
  const rotateX = useTransform(smoothProgress, [0, 0.4], [65, 0]);
  const rotateZ = useTransform(smoothProgress, [0, 0.4], [-40, 0]);
  const scale = useTransform(smoothProgress, [0, 0.4], [0.8, 1]);

  const zGlass = useTransform(smoothProgress, [0, 0.4], [350, 4]);
  const zCells = useTransform(smoothProgress, [0, 0.4], [180, 2]);
  const zInverter = useTransform(smoothProgress, [0, 0.4], [-180, -2]);
  const zRacking = useTransform(smoothProgress, [0, 0.4], [-350, -4]);

  const introOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const introY = useTransform(smoothProgress, [0, 0.15], [0, -40]);

  // Dynamic Glare sweeping across glass
  const glareX = useTransform(smoothProgress, [0, 0.4], ["-200%", "200%"]);

  // ── PHASE 2: TRANSLATE & REVEAL (0.5 to 0.9) ──
  const assemblyX = useTransform(smoothProgress, [0.5, 0.9], ["0%", "28vw"]);
  const assemblyYMobile = useTransform(smoothProgress, [0, 0.5, 0.9], ["-8vh", "-8vh", "-20vh"]);
  const assemblyYDesktop = useTransform(smoothProgress, [0.5, 0.9], [0, 40]);
  
  const specOpacity = useTransform(smoothProgress, [0.6, 0.9], [0, 1]);
  const specX = useTransform(smoothProgress, [0.6, 0.9], [-60, 0]);

  // Background and Lighting fading
  const lightOpacity = useTransform(smoothProgress, [0, 0.4, 0.9], [0.03, 0.15, 0.08]);
  const bgImageOpacity = useTransform(smoothProgress, [0.5, 0.9], [0.05, 0.25]);

  // Flashlight transforms (using vw/vh to avoid window SSR issues)
  const lightX = useTransform(mouseX, [0, 1], ["0vw", "100vw"]);
  const lightY = useTransform(mouseY, [0, 1], ["0vh", "100vh"]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#020503]">
      
      {/* Sticky Viewport */}
      <div 
        className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col md:flex-row items-center justify-center pt-0 lg:pt-28 perspective-[2500px]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        
        {/* ── BACKGROUND AMBIENCE (Breathing Ken Burns) ── */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none mix-blend-luminosity"
          style={{ opacity: bgImageOpacity }}
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <Image 
            src="/premium_estate_bg.png"
            alt="Premium Estate Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020503] via-[#020503]/70 to-[#020503]" />
        </motion.div>

        {/* Noise Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        {/* ── INTERACTIVE FLASHLIGHT ── */}
        <motion.div 
          className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-[#D4AF37] blur-[180px] rounded-full pointer-events-none mix-blend-screen z-0 -translate-x-1/2 -translate-y-1/2"
          style={{ 
            opacity: mounted ? lightOpacity : 0, 
            x: lightX,
            y: lightY
          }}
        />

        {/* ── INTRO TEXT ── */}
        <motion.div 
          className="absolute top-24 lg:top-1/2 lg:-translate-y-1/2 lg:left-24 text-center lg:text-left z-20 pointer-events-none flex flex-col items-center lg:items-start w-full lg:w-auto px-6"
          style={{ opacity: introOpacity, y: introY }}
        >
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="flex items-center gap-4 mb-4 lg:mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent lg:hidden" />
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-semibold">Bespoke Energy Architecture</p>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-none mb-8">
            Scroll to<br className="hidden lg:block"/> Assemble
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="relative flex flex-col items-center lg:items-start gap-3">
            <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">Engage</span>
            <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden ml-0 lg:ml-4">
              <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#D4AF37]" animate={{ y: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
            </div>
          </motion.div>
        </motion.div>

        {/* ── SPEC TEXT (Left side) ── */}
        <motion.div 
          className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 w-full max-w-lg z-20 pointer-events-none hidden md:flex flex-col"
          style={{ opacity: specOpacity, x: specX }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Utility-Grade Luxury</span>
          </div>
          <h2 className="font-heading font-black text-white text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6 drop-shadow-2xl">
            Architected<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">For Autonomy.</span>
          </h2>
          <p className="font-sans text-white/50 text-sm lg:text-base leading-relaxed mb-10 max-w-sm font-light">
            Utility-grade power in a precision-machined 35mm profile. Zero visible conduits. Zero compromise.
          </p>
          <div className="flex items-center gap-10 mb-12 border-l border-white/10 pl-6 backdrop-blur-sm bg-white/[0.01] py-4 rounded-r-xl">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase mb-1">Peak Yield</p>
              <p className="font-heading font-bold text-white text-2xl tracking-tight">420W MAX</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase mb-1">Cell Architecture</p>
              <p className="font-heading font-bold text-white text-2xl tracking-tight">N-Type TOPCon</p>
            </div>
          </div>
          <a href="#contact" className="pointer-events-auto group relative flex items-center justify-between w-[260px] p-4 rounded-full border border-white/20 bg-white/5 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 font-mono text-[10px] tracking-[0.2em] text-white uppercase font-bold group-hover:text-[#020503] transition-colors ml-4">Commission Estate</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#020503]/20 flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#020503]" />
            </div>
          </a>
        </motion.div>

        {/* ── THE 3D ASSEMBLY ── */}
        <motion.div 
          className="relative w-[280px] h-[420px] md:w-[360px] md:h-[540px] lg:w-[420px] lg:h-[630px] transform-style-3d z-10 hidden md:block drop-shadow-[0_0_100px_rgba(0,0,0,0.8)]"
          style={{ rotateX, rotateZ, scale, x: assemblyX }}
        >
          {/* Layer 1: Racking */}
          <motion.div style={{ z: zRacking }} className="absolute inset-0 rounded-lg transform-style-3d shadow-2xl">
            <div className="absolute top-[15%] left-[-5%] w-[110%] h-[20px] rounded-sm bg-gradient-to-b from-[#888] via-[#eee] to-[#444] shadow-lg" />
            <div className="absolute top-[85%] left-[-5%] w-[110%] h-[20px] rounded-sm bg-gradient-to-b from-[#888] via-[#eee] to-[#444] shadow-lg" />
            <div className="absolute -bottom-20 left-0 w-full h-[40px] bg-black/60 blur-xl rounded-[100%]" />
          </motion.div>

          {/* Layer 2: Microinverter */}
          <motion.div style={{ z: zInverter }} className="absolute inset-0 flex items-center justify-center pointer-events-none transform-style-3d">
            <div className="w-[80px] h-[100px] bg-[#111] border border-white/20 rounded-lg shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-x-0 bottom-0 h-1/2 flex justify-evenly px-2">
                {[...Array(5)].map((_, i) => <div key={i} className="w-[3px] h-full bg-gradient-to-b from-[#444] to-[#222] rounded-t-sm" />)}
              </div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.9)] animate-pulse" />
            </div>
          </motion.div>

          {/* Layer 3: Backsheet & Frame */}
          <motion.div style={{ z: 0 }} className="absolute inset-0 bg-[#f0f0f0] border-[8px] border-[#161616] rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden transform-style-3d" />

          {/* Layer 4: Solar Cells */}
          <motion.div style={{ z: zCells }} className="absolute inset-[10px] rounded-sm shadow-inner overflow-hidden transform-style-3d">
            <SolarCellGrid />
          </motion.div>

          {/* Layer 5: Glass Reflection with Parallax Glare */}
          <motion.div style={{ z: zGlass }} className="absolute inset-0 rounded-xl border border-white/30 overflow-hidden transform-style-3d bg-white/[0.04]">
            <motion.div 
              className="absolute top-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg]" 
              style={{ x: glareX }}
            />
          </motion.div>
        </motion.div>

        {/* Mobile version of spec text */}
        <motion.div 
          className="absolute bottom-12 left-6 right-6 md:hidden z-20 flex flex-col items-center text-center pointer-events-none"
          style={{ opacity: specOpacity }}
        >
          <h2 className="font-heading font-black text-white text-4xl leading-[1] tracking-tight mb-3">
            Architected For Autonomy.
          </h2>
          <p className="font-sans text-white/50 text-xs leading-relaxed mb-6 font-light max-w-[260px]">
            Utility-grade power in a 35mm profile. Zero compromise.
          </p>
          <a href="#contact" className="pointer-events-auto bg-[#D4AF37] text-[#020503] rounded-full font-mono text-[10px] tracking-[0.2em] uppercase font-bold px-8 py-4 w-full shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            Commission Estate
          </a>
        </motion.div>

        {/* Mobile Assembly */}
        <motion.div 
          className="relative w-[230px] h-[345px] transform-style-3d z-10 md:hidden drop-shadow-2xl"
          style={{ rotateX, rotateZ, scale, y: assemblyYMobile }}
        >
          <motion.div style={{ z: zRacking }} className="absolute inset-0 rounded-lg transform-style-3d shadow-2xl">
            <div className="absolute top-[15%] left-[-5%] w-[110%] h-[20px] rounded-sm bg-gradient-to-b from-[#888] via-[#eee] to-[#444]" />
            <div className="absolute top-[85%] left-[-5%] w-[110%] h-[20px] rounded-sm bg-gradient-to-b from-[#888] via-[#eee] to-[#444]" />
          </motion.div>
          <motion.div style={{ z: zInverter }} className="absolute inset-0 flex items-center justify-center pointer-events-none transform-style-3d">
            <div className="w-[60px] h-[80px] bg-[#111] border border-white/20 rounded-md shadow-2xl relative">
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
          <motion.div style={{ z: 0 }} className="absolute inset-0 bg-[#f0f0f0] border-[6px] border-[#161616] rounded-xl shadow-2xl overflow-hidden transform-style-3d" />
          <motion.div style={{ z: zCells }} className="absolute inset-[8px] rounded-sm shadow-inner overflow-hidden transform-style-3d">
            <SolarCellGrid />
          </motion.div>
          <motion.div style={{ z: zGlass }} className="absolute inset-0 rounded-xl border border-white/20 overflow-hidden transform-style-3d bg-white/[0.04]">
            <motion.div className="absolute top-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg]" style={{ x: glareX }} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
