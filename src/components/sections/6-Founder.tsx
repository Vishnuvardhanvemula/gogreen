"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FounderSection() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center py-32 overflow-hidden bg-slate-950">
      
      {/* Background Cinematic Integration */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/founder_portrait_1776093487726.png"
          alt="Madan, Founder of GoGreen"
          fill
          className="object-cover object-top opacity-30 blur-[2px] scale-105"
        />
        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_80%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Accent */}
          <div className="flex justify-center mb-8">
             <div className="w-px h-16 bg-gradient-to-b from-transparent to-amber-500/50" />
          </div>

          <div className="text-amber-500 text-8xl font-serif leading-[0] mt-10 mb-8 font-bold">"</div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.1] mb-12 text-white">
            I started GoGreen because I believed solar should be done properly — installed right, backed for 25 years, and supported within 48 hours. That hasn't changed.
          </h2>
          
          <div className="flex flex-col items-center gap-6 mt-12">
             <div className="flex flex-col items-center gap-2">
               <p className="text-xl md:text-2xl text-white font-medium tracking-[0.2em] uppercase font-heading">
                 Madan
               </p>
               <p className="text-[10px] md:text-xs text-white/50 tracking-[0.3em] uppercase">
                 Founder & Lead Engineer
               </p>
             </div>
             
             {/* Divider */}
             <div className="w-12 h-px bg-white/20" />

             {/* Minimal Credentials Strip */}
             <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] md:text-xs text-white/40 tracking-widest uppercase mt-4">
                <span className="flex items-center gap-2"><span className="text-amber-500">•</span> 15+ years engineering</span>
                <span className="flex items-center gap-2"><span className="text-amber-500">•</span> 7 state licensure</span>
                <span className="flex items-center gap-2"><span className="text-amber-500">•</span> 1,000+ flawless installs</span>
             </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
