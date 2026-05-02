"use client";

import { motion, Variants, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useState, useMemo, useEffect, MouseEvent, TouchEvent, useCallback } from "react";

// Memoized single cell texture rendered as a pure CSS pattern — zero child divs
const CELL_BG = `
  linear-gradient(0deg, transparent 90%, rgba(255,255,255,0.04) 90%),
  repeating-linear-gradient(90deg, transparent, transparent 18%, rgba(255,255,255,0.5) 18%, rgba(255,255,255,0.5) 18.3%)
`;

function SolarCellGrid() {
  // Single div with CSS grid pattern instead of 60 individual cells with 600+ DOM nodes
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#050A07]">
      {/* The grid lines (cell gaps) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: 'calc(100% / 6) calc(100% / 10)',
        }}
      />
      {/* Busbars — 5 vertical silver lines per cell, repeating */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-60"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2.8%, rgba(255,255,255,0.7) 2.8%, rgba(255,255,255,0.7) 3.1%)',
          backgroundSize: 'calc(100% / 6) 100%',
        }}
      />
      {/* Horizontal fingers */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 92%, rgba(255,255,255,0.08) 92%)',
          backgroundSize: '100% 4px',
        }}
      />
      {/* Cut-corner diamonds at cell intersections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle 2px at center, white 70%, transparent 70%)`,
          backgroundSize: 'calc(100% / 6) calc(100% / 10)',
          backgroundPosition: '0 0',
        }}
      />
    </div>
  );
}

export function ExplodedSolarArray() {
  const [isAssembled, setIsAssembled] = useState(false);

  // Mouse parallax — all hooks at top level
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const rotateXOffset = useTransform(springY, [-1, 1], [4, -4]);
  const rotateZOffset = useTransform(springX, [-1, 1], [-4, 4]);

  // Compose final rotation values at hook level (not inside JSX)
  const finalRotateX = useTransform(rotateXOffset, (v) => 60 + v);
  const finalRotateZ = useTransform(rotateZOffset, (v) => -45 + v);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }, [mouseX, mouseY]);

  const handleTouchMove = useCallback((e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.touches[0].clientY - rect.top) / rect.height) * 2 - 1);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    setIsAssembled(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Auto-animate on mobile where there's no hover
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) {
      // Start exploded after a short delay so the entry animation completes first
      const t = setTimeout(() => setIsAssembled(false), 800);
      return () => clearTimeout(t);
    }
  }, []);

  // Use translateY for GPU-composited layer separation (better perf than translateZ)
  const floatVariants: Variants = useMemo(() => ({
    exploded: (custom: number) => ({
      y: custom * -35,
      transition: {
        y: { duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: custom * 0.15 }
      }
    }),
    assembled: (custom: number) => ({
      y: custom * -1,
      transition: { type: "spring", stiffness: 200, damping: 18, mass: 0.8, delay: custom * 0.04 }
    })
  }), []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      style={{ perspective: '2000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsAssembled(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsAssembled(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsAssembled(false)}
    >
      <motion.div
        className="relative w-[300px] h-[420px] md:w-[380px] md:h-[540px] lg:w-[420px] lg:h-[600px] will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          rotateX: finalRotateX,
          rotateZ: finalRotateZ,
        }}
      >
        {/* 1. Racking */}
        <motion.div
          custom={0}
          variants={floatVariants}
          animate={isAssembled ? "assembled" : "exploded"}
          className="absolute inset-0 rounded-md will-change-transform"
        >
          <div className="absolute top-[20%] left-[-10%] w-[120%] h-[16px] rounded-sm shadow-2xl"
               style={{ background: "linear-gradient(to bottom, #ccc 0%, #fff 20%, #999 50%, #666 100%)" }} />
          <div className="absolute top-[80%] left-[-10%] w-[120%] h-[16px] rounded-sm shadow-2xl"
               style={{ background: "linear-gradient(to bottom, #ccc 0%, #fff 20%, #999 50%, #666 100%)" }} />
        </motion.div>

        {/* 2. Microinverter */}
        <motion.div
          custom={1}
          variants={floatVariants}
          animate={isAssembled ? "assembled" : "exploded"}
          className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
        >
          <div className="w-[60px] h-[80px] bg-[#111] border border-white/20 rounded-md shadow-2xl relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1/2 flex justify-evenly">
              {[...Array(6)].map((_, i) => <div key={i} className="w-[2px] h-full bg-[#222]" />)}
            </div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
          </div>
        </motion.div>

        {/* 3. Backsheet & Frame */}
        <motion.div
          custom={2}
          variants={floatVariants}
          animate={isAssembled ? "assembled" : "exploded"}
          className="absolute inset-0 bg-white border-[6px] border-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden will-change-transform"
        />

        {/* 4. Solar Cells — single CSS pattern, not 600 divs */}
        <motion.div
          custom={3}
          variants={floatVariants}
          animate={isAssembled ? "assembled" : "exploded"}
          className="absolute inset-[8px] rounded-sm shadow-inner overflow-hidden will-change-transform"
        >
          <SolarCellGrid />
        </motion.div>

        {/* 5. Glass — CSS animation for the flare instead of Framer Motion */}
        <motion.div
          custom={4}
          variants={floatVariants}
          animate={isAssembled ? "assembled" : "exploded"}
          className="absolute inset-0 rounded-lg border border-white/40 overflow-hidden will-change-transform"
          style={{ background: "rgba(200,225,255,0.08)" }}
        >
          <div className="absolute top-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] animate-[glass-flare_5s_ease-in-out_infinite]" />
        </motion.div>

        {/* Corner accents (exploded only) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isAssembled ? 0 : 0.6 }}
          transition={{ duration: 0.4 }}
        >
          {[{ top: 0, left: 0 }, { top: 0, right: 0 }, { bottom: 0, left: 0 }, { bottom: 0, right: 0 }].map((pos, i) => (
            <div key={i} className="absolute w-[1px] h-2 bg-[#D4AF37]/50" style={pos} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
