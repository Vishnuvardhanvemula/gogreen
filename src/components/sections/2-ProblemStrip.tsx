"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Custom Counter Component
function AnimatedCounter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    const duration = 2000; // 2 seconds
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(to * easeProgress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to); // Ensure exact final value
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {Number(count).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function ProblemStripSection() {
  const stats = [
    {
      value: 32,
      decimals: 0,
      suffix: "%",
      label: "Average electricity bill increase over the last 5 years.",
    },
    {
      value: 20,
      decimals: 0,
      suffix: "%",
      label: "Degradation of standard mass-market solar systems after 10 years.",
    },
    {
      value: 1.2,
      decimals: 1,
      suffix: "M",
      label: "Homes sitting with faulty or aging panels on their roofs.",
    }
  ];

  return (
    <section className="w-full bg-[#fdfcfb] py-24 md:py-32 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Architectural Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '4rem 4rem' 
        }} 
      />

      {/* Structural Accent Left Bar */}
      <div className="absolute top-0 bottom-0 left-0 w-1.5 md:w-2 bg-gradient-to-b from-brand-primary to-amber-500" />
      
      <div className="max-w-7xl mx-auto px-6 w-full pl-8 md:pl-12 relative z-10">
        
        <div className="mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-6">
               <div className="w-8 h-[1px] bg-brand-primary/40" />
               <h2 className="text-xs font-bold text-brand-primary tracking-[0.2em] uppercase">The Reality</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 leading-[1.1] tracking-tight">
            The standard solar industry is built on volume, not quality.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col relative pt-8">
              
              {/* Animated Top Border */}
              <motion.div 
                 className="absolute top-0 left-0 h-px bg-brand-primary/30"
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                <div className="text-6xl lg:text-7xl xl:text-8xl font-heading font-light text-slate-900 mb-6 tracking-tighter">
                  <span className="text-amber-500 font-bold pr-1">
                    <AnimatedCounter to={stat.value} decimals={stat.decimals} />
                  </span>
                  {stat.suffix}
                </div>
                <p className="text-lg text-slate-600 font-sans leading-relaxed font-light">
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
