"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-heading font-medium text-white leading-[1.05] tracking-tight mb-8"
      aria-label="Solar infrastructure, built to last 25 years."
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden pb-2" aria-hidden="true">
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

  // Trigger stats after headline finishes (~2.2s)
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] bg-[#030704] text-white overflow-hidden flex items-center selection:bg-amber-500/30 pt-24 lg:pt-20">
      {/* Ambient elegant glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1B5E20]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid lines */}
      <div className="absolute left-8 md:left-16 xl:left-24 top-0 bottom-0 w-px bg-white/[0.03] pointer-events-none" />
      <div className="absolute right-8 md:right-16 xl:right-24 top-0 bottom-0 w-px bg-white/[0.03] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between relative z-10 h-full pb-12 lg:pb-0">
        
        {/* ── Left Column Text ── */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center relative z-20 pt-8 lg:pt-0">
          
          {/* Label */}
          <motion.div
            className="flex items-center gap-4 mb-8 lg:mb-12"
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
          <div className="relative -ml-2">
            <KineticHeadline />
          </div>

          <motion.div
            className="w-full max-w-lg mt-4 lg:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.3 }}
          >
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
              GoGreen operates across 7 states. Every install is backed by a 25-year warranty and a strictly enforced 48-hour response commitment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="/get-assessment"
                className="group relative inline-flex items-center overflow-hidden border border-white/20 bg-transparent px-8 py-4 font-bold tracking-widest text-xs uppercase text-white hover:border-white transition-colors duration-500"
              >
                <span className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0" />
                <span className="relative group-hover:text-black transition-colors duration-500 delay-75">Free Assessment</span>
              </a>
              <a
                href="/services"
                className="text-white/50 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 relative py-2 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-px after:bg-white/20 after:hover:bg-white after:transition-colors"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column Image & Stats ── */}
        <div className="w-full lg:w-[42%] h-[50vh] lg:h-[70vh] max-h-[800px] relative mt-12 lg:mt-0 flex items-center justify-end">
          
          {/* Framed Image */}
          <motion.div 
            className="relative w-full h-full max-w-[540px] overflow-hidden bg-white/[0.02]"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
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
                className="object-cover"
                quality={90}
                priority
              />
            </motion.div>

            {/* Internal overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030704] via-[#030704]/40 to-transparent h-[60%] top-auto pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />

            {/* Stats carefully positioned inside the frame */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: statsVisible ? 1 : 0, y: statsVisible ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-none drop-shadow-lg">
                      {statsVisible ? <Counter to={stat.value} duration={2} /> : "0"}<span className="text-amber-500 ml-[2px]">{stat.suffix}</span>
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 drop-shadow-md">
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
