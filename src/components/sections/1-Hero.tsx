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
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-medium text-white leading-[1.05] tracking-tight mb-8">
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          {line.words.map((word, wi) => (
            <motion.span
              key={wi}
              className="inline-block mr-[0.25em]"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
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
  { value: 500, suffix: "+",  label: "Projects" },
  { value: 25,  suffix: "yr", label: "Warranty" },
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
    <section className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden flex items-center">

      {/* ── LAYER 1: Full-bleed aerial background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_luxury_solar_8k.png"
          alt="Aerial solar installation"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
        />

        {/* Dark overlay that "lifts" on load — from ~96% to ~55% */}
        <motion.div
          className="absolute inset-0 bg-[#080F09]"
          initial={{ opacity: 0.96 }}
          animate={{ opacity: 0.58 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
        />

        {/* Permanent gradient: left side always darker for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A0B]/80 via-[#0A1A0B]/30 to-transparent" />

        {/* Bottom fade for clean section transition */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0D1F0F] to-transparent" />
      </div>

      {/* ── LAYER 2: Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-28 pb-28 md:pb-36 flex flex-col justify-center h-full">

        {/* Pre-headline label */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="w-8 h-px bg-amber-500" />
          <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            Solar EPC · Decommissioning · Removal & Repower
          </span>
        </motion.div>

        {/* Kinetic headline */}
        <KineticHeadline />

        {/* Sub-copy */}
        <motion.p
          className="text-white/60 text-lg md:text-xl font-sans font-light leading-relaxed mb-14 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.3 }}
        >
          GoGreen operates across 7 states. Every install backed by a 25-year warranty and a 48-hour response commitment — in writing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.6 }}
        >
          <a
            href="/get-assessment"
            className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white px-10 py-5 font-bold text-sm tracking-widest uppercase transition-colors duration-300"
          >
            Get a Free Assessment
          </a>
          <a
            href="/services"
            className="text-white/70 hover:text-white border-b border-white/30 hover:border-white pb-0.5 font-medium text-sm tracking-widest uppercase transition-colors duration-300"
          >
            See Our Services →
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0A1A0B]/70 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: statsVisible ? 1 : 0, y: statsVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-6 px-4 gap-0.5">
                <span className="text-2xl md:text-3xl font-heading font-medium text-white">
                  {statsVisible && <Counter to={stat.value} suffix={stat.suffix} duration={1.8} />}
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── LAYER 3: subtle grid texture ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
