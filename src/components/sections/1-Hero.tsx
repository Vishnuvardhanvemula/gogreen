"use client";

import { motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, MouseEvent } from "react";

// --- Animated counter component ---
function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [to, duration, count, rounded]);

  return <span>{display}{suffix}</span>;
}

// --- Word-by-word reveal ---
const lines = [
  { words: ["Solar", "infrastructure,"], delay: 0.3 },
  { words: ["built", "to", "last"], delay: 0.9 },
  { words: ["25", "years."], delay: 1.5 },
];

function KineticHeadline() {
  return (
    <h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-heading font-medium text-white leading-[1.05] tracking-tight mb-4 md:mb-8"
      aria-label="Solar infrastructure, built to last 25 years."
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden pb-1 md:pb-2" aria-hidden="true">
          {line.words.map((word, wi) => (
            <motion.span
              key={wi}
              className="inline-block mr-[0.25em]"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: line.delay + wi * 0.12,
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

const stats = [
  { value: 7,   suffix: "",   label: "States" },
  { value: 25,  suffix: "yr", label: "Warranty" },
  { value: 500, suffix: "+",  label: "Projects" },
  { value: 48,  suffix: "hr", label: "Response" },
];

export function HeroSection() {
  const [statsVisible, setStatsVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // 3D Rotation based on mouse
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Trigger stats after headline finishes (~2.2s)
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 2400);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] bg-[#030704] text-white overflow-hidden flex items-center selection:bg-amber-500/30 pt-20 lg:pt-20 perspective-[2000px]">
      
      {/* Ambient elegant glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] md:w-[50%] md:h-[50%] bg-[#1B5E20]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Dawn Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[200%] h-[30%] bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent origin-top-left mix-blend-screen blur-[40px]"
          initial={{ rotate: 30 }}
          animate={{ rotate: [30, 40, 30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[-10%] left-[-5%] w-[180%] h-[25%] bg-gradient-to-r from-white/10 via-amber-400/5 to-transparent origin-top-left mix-blend-screen blur-[30px]"
          initial={{ rotate: 20 }}
          animate={{ rotate: [20, 25, 20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-[-30%] left-[-20%] w-[150%] h-[40%] bg-gradient-to-r from-amber-600/5 via-transparent to-transparent origin-top-left mix-blend-screen blur-[50px]"
          initial={{ rotate: 45 }}
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Dynamic sunlight flare that follows mouse on X-axis slightly */}
      <motion.div 
        className="absolute top-[-20%] right-[-10%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] bg-gradient-to-bl from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
        style={{
          x: useTransform(x, [-0.5, 0.5], [-50, 50]),
          y: useTransform(y, [-0.5, 0.5], [-25, 25]),
        }}
      />

      {/* ── Background Abstract Solar Blueprint ── */}
      <motion.div 
        className="absolute top-[10%] left-[-50vw] md:left-[-15vw] w-[150vw] h-[150vw] md:w-[100vh] md:h-[100vh] max-h-[1200px] max-w-[1200px] opacity-[0.04] pointer-events-none mix-blend-screen text-amber-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer dotted rings */}
          <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Axis Lines */}
          <path d="M 250 10 L 250 490 M 10 250 L 490 250" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 80 80 L 420 420 M 80 420 L 420 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          
          {/* Inner details */}
          <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" />
          <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="60" stroke="currentColor" strokeWidth="2" strokeDasharray="10 15" />
          <circle cx="250" cy="250" r="20" stroke="currentColor" strokeWidth="1" />

          {/* Abstract Solar Cell rings */}
          <g transform="translate(250 250)">
            {Array.from({ length: 24 }).map((_, i) => (
              <rect key={i} x="-8" y="-195" width="16" height="30" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 15})`} />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={i} x="-15" y="-140" width="30" height="35" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${i * 30})`} />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Subtle architectural grid lines */}
      <div className="absolute left-8 md:left-16 xl:left-24 top-0 bottom-0 w-px bg-white/[0.03] pointer-events-none" />
      <div className="absolute right-8 md:right-16 xl:right-24 top-0 bottom-0 w-px bg-white/[0.03] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between relative z-10 h-full pb-8 lg:pb-0 gap-8 lg:gap-0">
        
        {/* ── Left Column Text ── */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center relative z-20 pt-4 lg:pt-0">
          
          {/* Label */}
          <motion.div
            className="flex items-center gap-4 mb-4 lg:mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="w-8 lg:w-12 h-px bg-amber-500/80" />
            <span className="text-amber-500/90 text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase">
              Solar EPC · Repower
            </span>
          </motion.div>

          {/* Headline */}
          <div className="relative -ml-1 md:-ml-2">
            <KineticHeadline />
          </div>

          <motion.div
            className="w-full max-w-lg mt-2 lg:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.3 }}
          >
            <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8 pr-4 lg:pr-0">
              GoGreen operates across 7 states. Every install is backed by a 25-year warranty and a strictly enforced 48-hour response commitment.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              <a
                href="/get-assessment"
                className="group relative inline-flex items-center overflow-hidden border border-white/20 bg-transparent px-6 py-3 sm:px-8 sm:py-4 font-bold tracking-[0.15em] sm:tracking-widest text-[10px] sm:text-xs uppercase text-white hover:border-white transition-colors duration-500"
              >
                <span className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0" />
                <span className="relative group-hover:text-black transition-colors duration-500 delay-75 whitespace-nowrap">Free Assessment</span>
              </a>
              <a
                href="/services"
                className="text-white/50 hover:text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-colors duration-500 relative py-2 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-px after:bg-white/20 after:hover:bg-white after:transition-colors whitespace-nowrap"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column Image & Stats ── */}
        <div 
          className="w-full lg:w-[42%] h-[45vh] sm:h-[50vh] lg:h-[70vh] max-h-[800px] relative flex items-center justify-center lg:justify-end perspective-[1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Framed Image */}
          <motion.div 
            className="relative w-full h-full max-w-[100%] sm:max-w-[480px] lg:max-w-[540px] overflow-hidden bg-white/[0.02] transform-style-3d origin-center"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{
              rotateX,
              rotateY,
              scale: 1.02 // slight bump so edges don't show
            }}
          >
            {/* Spotlight Glare */}
            <motion.div 
              className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: useTransform(() => {
                  const posX = (x.get() + 0.5) * 100;
                  const posY = (y.get() + 0.5) * 100;
                  return `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
                })
              }}
            />

            <motion.div
              className="w-full h-full relative"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
            >
              <Image
                src="/images/hero_luxury_solar_8k.png"
                alt="Luxury Solar Installation"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover relative z-0"
                quality={90}
                priority
              />
              
              {/* High-Tech Viewfinder Corners (Alternative to the sheen) */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-[1px] border-l-[1px] border-amber-500/50 pointer-events-none z-20" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-[1px] border-r-[1px] border-amber-500/50 pointer-events-none z-20" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-[1px] border-l-[1px] border-amber-500/50 pointer-events-none z-20" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-[1px] border-r-[1px] border-amber-500/50 pointer-events-none z-20" />
            </motion.div>

            {/* Internal overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030704] via-[#030704]/40 to-transparent h-[70%] lg:h-[60%] top-auto pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />

            {/* Stats carefully positioned inside the frame */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 lg:p-12 z-10">
              <div className="grid grid-cols-2 gap-y-6 md:gap-y-10 gap-x-4 md:gap-x-8 text-center sm:text-left">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col gap-1 md:gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: statsVisible ? 1 : 0, y: statsVisible ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-none drop-shadow-lg">
                      {statsVisible ? <Counter to={stat.value} duration={2} /> : "0"}<span className="text-amber-500 ml-[2px]">{stat.suffix}</span>
                    </span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/60 drop-shadow-md">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Decorative vertical badge */}
          <div className="hidden xl:flex absolute top-1/2 -right-16 -translate-y-1/2 flex-col items-center gap-6 -rotate-90 origin-center text-white/20 select-none">
            <span className="text-[9px] tracking-[0.5em] uppercase font-bold">Est 2026</span>
            <div className="w-16 h-px bg-white/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
