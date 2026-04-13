"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useNarrative } from "@/components/layout/ScrollNarrative";

export function FounderSection() {
  const { setHouseState } = useNarrative();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) {
      // The house shouldn't matter as much here, it could be hidden behind the dark green background
      setHouseState("glowing");
    }
  }, [inView, setHouseState]);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-brand-secondary z-30 flex items-center justify-center py-24 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16">
        
        {/* Quote Left */}
        <motion.div 
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-amber-500 text-6xl font-serif mb-6 leading-none">"</div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white leading-tight mb-8">
            I started GoGreen because I believed solar should be done properly — installed right, backed for 25 years, and supported within 48 hours. That hasn't changed.
          </h2>
          <p className="text-xl text-emerald-400 font-medium tracking-wide">
            — Madan, Founder
          </p>
        </motion.div>

        {/* Photo Right */}
        <motion.div 
          className="w-full md:w-2/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Real photo overlayed over placeholder */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800')` }}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
