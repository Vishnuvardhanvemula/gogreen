"use client";

import { motion } from "framer-motion";

interface InnerHeroProps {
  title: string;
  subtitle: string;
}

export function InnerHero({ title, subtitle }: InnerHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 bg-[#0D1F0F] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B5E20]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">
              GoGreen Energy
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[1.1] mb-8">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-sans max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
