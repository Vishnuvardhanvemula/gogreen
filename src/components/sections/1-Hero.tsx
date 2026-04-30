"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue, animate, useScroll } from "framer-motion";
import { useEffect, useState, MouseEvent, useRef } from "react";

// ── Abstracted Solar Cell Component ──
function SolarCell({ 
  mouseX, 
  mouseY, 
  xIndex, 
  yIndex, 
  columns, 
  rows,
  winSize
}: { 
  mouseX: MotionValue<number>; 
  mouseY: MotionValue<number>; 
  xIndex: number; 
  yIndex: number; 
  columns: number; 
  rows: number;
  winSize: { w: number, h: number };
}) {
  const rectX = (xIndex + 0.5) * (winSize.w / columns);
  const rectY = (yIndex + 0.5) * (winSize.h / rows);

  // FIX 1: More dramatic tilt range since perspective is now per-cell
  const rotateX = useTransform(mouseY, (y) => -((y - rectY) / winSize.h) * 52);
  const rotateY = useTransform(mouseX, (x) => ((x - rectX) / winSize.w) * 52);

  // Quadratic falloff for punchy, realistic light drop
  const glareOpacity = useTransform(() => {
    const dx = mouseX.get() - rectX;
    const dy = mouseY.get() - rectY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = winSize.w / 2.2;
    const lin = Math.max(0, 1 - dist / maxDist);
    return lin * lin;
  });

  const borderGlow = useTransform(() => {
    const g = glareOpacity.get();
    return `rgba(212, 175, 55, ${0.08 + g * 0.6})`;
  });

  // FIX 3: Dynamic inset shadow makes gaps look recessed/dimensional
  const cellShadow = useTransform(() => {
    const g = glareOpacity.get();
    const shadowIntensity = Math.round(g * 8);
    return `inset 0 0 ${shadowIntensity}px rgba(251,191,36,0.08), inset 0 1px 0 rgba(255,255,255,${g * 0.12})`;
  });

  return (
    // FIX 1: Each cell has its OWN perspective — makes individual tilt dramatic + visible
    <div style={{ perspective: "550px", width: "100%", height: "100%" }}>
      <motion.div 
        className="relative w-full h-full overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "linear-gradient(155deg, #0a0d0a 0%, #040604 55%, #010201 100%)",
          borderColor: borderGlow,
          border: "0.5px solid",
          borderRadius: "1px",
          boxShadow: cellShadow,
        }}
      >
        {/* Angled static gloss — thick glass look */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(130deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 35%, transparent 55%)"
          }}
        />

        {/* Horizontal silver cell fingers */}
        <div 
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent calc(20% - 0.5px),
              rgba(200, 225, 255, 0.55) calc(20% - 0.5px),
              rgba(200, 225, 255, 0.55) calc(20% + 0.5px)
            )`,
          }}
        />
        {/* Vertical main busbars (3) */}
        <div 
          className="absolute inset-0 opacity-[0.26] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent calc(33.33% - 0.6px),
              rgba(210, 235, 255, 0.8) calc(33.33% - 0.6px),
              rgba(210, 235, 255, 0.8) calc(33.33% + 0.6px)
            )`,
          }}
        />

        {/* FIX 2: Crisper amber-orange specular (not yellow) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            opacity: glareOpacity,
            background: "radial-gradient(ellipse at 35% 30%, rgba(255,140,0,0.38) 0%, rgba(255,100,20,0.15) 40%, rgba(212,175,55,0.06) 70%, transparent 90%)"
          }}
        />

        {/* Sharp specular highlight on top edge of lit cell */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{ 
            opacity: useTransform(glareOpacity, (g) => g * 0.95),
            background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.75) 50%, transparent 95%)"
          }}
        />

        {/* Left edge specular */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-[1px] pointer-events-none"
          style={{ 
            opacity: useTransform(glareOpacity, (g) => g * 0.5),
            background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)"
          }}
        />
      </motion.div>
    </div>
  );
}

// ── Magnetic Premium Button ──
function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, cursor: "none" }}
      className="group relative inline-flex w-[260px] md:w-auto items-center justify-center gap-3 bg-[#0a0a0a] border border-[#D4AF37]/30 text-[#D4AF37] px-10 py-5 font-bold tracking-[0.2em] text-[10px] uppercase overflow-hidden pointer-events-auto transition-colors duration-500 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}

// ── Main Hero Section ──
export function HeroSection() {
  const [winSize, setWinSize] = useState({ w: 1440, h: 900 });
  const [isMounted, setIsMounted] = useState(false);
  const isIdle = useRef(true);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rawX = useMotionValue(720);
  const rawY = useMotionValue(450);

  const mouseX = useSpring(rawX, { stiffness: 80, damping: 25, mass: 0.6 });
  const mouseY = useSpring(rawY, { stiffness: 80, damping: 25, mass: 0.6 });

  const flareX = useTransform(mouseX, (x) => x - winSize.w / 2);
  const flareY = useTransform(mouseY, (y) => y - winSize.h / 2);

  // Parallax fade out on scroll
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);

  // Hoist cursor transforms unconditionally — hooks cannot live inside conditionals
  const cursorX = useTransform(mouseX, (x) => x - 6);
  const cursorY = useTransform(mouseY, (y) => y - 6);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setWinSize({ w, h });
    rawX.set(w / 2);
    rawY.set(h / 2);
    setIsMounted(true);

    // Idle drift — light wanders when mouse is inactive
    const startIdleDrift = () => {
      if (!isIdle.current) return;
      const driftX = w / 2 + (Math.random() - 0.5) * w * 0.45;
      const driftY = h / 2 + (Math.random() - 0.5) * h * 0.45;
      animate(rawX, driftX, { duration: 4.5, ease: "easeInOut" });
      animate(rawY, driftY, { 
        duration: 4.5, ease: "easeInOut",
        onComplete: () => { if (isIdle.current) startIdleDrift(); }
      });
    };
    const driftTimeout = setTimeout(startIdleDrift, 1200);

    const handleResize = () => setWinSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(driftTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [rawX, rawY]);

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    isIdle.current = false;
    rawX.set(e.clientX);
    rawY.set(e.clientY);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => { isIdle.current = true; }, 3000);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    isIdle.current = false;
    if (e.touches.length > 0) {
      rawX.set(e.touches[0].clientX);
      rawY.set(e.touches[0].clientY);
    }
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => { isIdle.current = true; }, 3000);
  };

  const isMobile = winSize.w < 768;
  const columns = isMobile ? 5 : 11;
  const rows = isMobile ? 12 : 7;

  return (
    <section 
      className="relative w-full h-[100dvh] bg-[#030b0f]"
      // FIX 4: hide native cursor so it doesn't clash with the light flare
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 w-full h-full">
        {/* ── Kinetic Solar Panel Grid ── */}
      {/* FIX 1: No perspective on parent — each cell has its own */}
      <div 
        className="absolute inset-[-3vw] z-0"
        style={{ 
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`, 
          gridTemplateRows: `repeat(${rows}, 1fr)`, 
          gap: "3px",
          background: "#010507", // visible gap colour — very dark, recessed look
        }}
      >
        {isMounted && Array.from({ length: columns * rows }).map((_, i) => (
          <SolarCell 
            key={i} 
            mouseX={mouseX} 
            mouseY={mouseY} 
            xIndex={i % columns} 
            yIndex={Math.floor(i / columns)} 
            columns={columns} 
            rows={rows} 
            winSize={winSize}
          />
        ))}
      </div>

      {/* Edge-only vignette — keeps center clear */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, rgba(3,11,15,0.75) 100%)"
        }}
      />

      {/* ── Multi-layer Light Rig ── */}
      {isMounted && (
        <motion.div
          className="absolute top-1/2 left-1/2 pointer-events-none z-20"
          style={{ x: flareX, y: flareY }}
        >
          {/* Bright white specular pinpoint */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[6vw] h-[6vw] max-w-[90px] max-h-[90px] rounded-full blur-[16px] bg-white/40 mix-blend-screen" />
          {/* Tight orange-white inner corona */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[18vw] h-[18vw] max-w-[260px] max-h-[260px] rounded-full blur-[45px] bg-orange-300/30 mix-blend-screen" />
          {/* Main amber corona */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[38vw] h-[38vw] max-w-[560px] max-h-[560px] rounded-full blur-[90px] bg-amber-500/15 mix-blend-screen" />
          {/* Outer warm wash */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-full blur-[130px] bg-amber-700/10 mix-blend-screen" />
        </motion.div>
      )}

      {/* FIX 4: Custom cursor dot — replaces native cursor cleanly */}
      {isMounted && (
        <motion.div
          className="hidden md:block absolute top-0 left-0 pointer-events-none z-50 mix-blend-difference"
          style={{ x: cursorX, y: cursorY }}
        >
          <div className="w-3 h-3 rounded-full bg-white" />
        </motion.div>
      )}

      {/* ── Content Layer ── */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.div className="relative" style={{ opacity: heroOpacity, scale: heroScale }}>
          <h1 
            className="text-4xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-heading font-semibold text-white tracking-[-0.03em] leading-[0.95] mb-7"
            style={{ textShadow: "0 0 60px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)" }}
          >
            <div className="overflow-hidden pb-2">
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
                Solar done right.
              </motion.div>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <span className="text-[#D4AF37]">The first time.</span>
              </motion.div>
            </div>
          </h1>

          <motion.p
            className="text-[#D4AF37] text-[11px] md:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase mb-12"
            style={{ textShadow: "0 0 30px rgba(212,175,55,0.4), 0 1px 3px rgba(0,0,0,0.9)" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            EPC · Decommissioning · Removal & Repower · 7 States
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="/get-assessment">
              Talk to Our Team <span className="text-base leading-none group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </MagneticButton>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 w-[260px] md:w-auto border border-[#D4AF37]/30 text-[#D4AF37]/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/5 px-8 py-5 font-bold tracking-[0.2em] text-[10px] uppercase pointer-events-auto transition-all duration-300 backdrop-blur-sm rounded-sm"
              style={{ cursor: "none" }}
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Stats Strip ── */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full z-40 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <div className="bg-black/55 backdrop-blur-lg border-t border-white/[0.07]">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-3 px-4 py-4 md:py-5">
            {[
              { value: "500+", label: "Projects" },
              { value: "25yr", label: "Warranty" },
              { value: "48hr", label: "Response" },
              { value: "7",    label: "States" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-white text-sm md:text-base font-bold tracking-tight">{stat.value}</span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      </motion.div>
    </section>
  );
}
