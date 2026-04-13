"use client";

import { motion } from "framer-motion";

export function DifferenceSection() {
  const guarantees = [
    {
      idx: "01",
      title: "25-Year Warranty",
      description: "Not a promise. A written guarantee covering parts, labor, and execution."
    },
    {
      idx: "02",
      title: "48-Hour Response",
      description: "If an issue arises, our local engineers verify and respond within 48 hours. Period."
    },
    {
      idx: "03",
      title: "7 State Reach",
      description: "Local presence across the East Coast ensures we do not rely on generic subcontractors."
    },
    {
      idx: "04",
      title: "Elite Certification",
      description: "Fully licensed in every state. Every installer is rigorously trained."
    }
  ];

  return (
    <section className="relative w-full py-32 text-white overflow-hidden bg-slate-950">
      {/* Cinematic Deep Emerald Light */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-emerald-900/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-20">
        
        {/* Left Column: Editorial Intro */}
        <div className="w-full lg:w-1/3 z-10 pt-4">
           <div className="inline-flex items-center gap-4 mb-8">
               <div className="w-8 h-px bg-amber-500" />
               <h2 className="text-[10px] font-bold text-amber-500 tracking-[0.3em] uppercase">The Guarantee</h2>
           </div>
           <h3 className="text-5xl md:text-6xl font-heading font-medium leading-[1.05] tracking-tight mb-8">
             We do not <br/> compromise.
           </h3>
           <p className="text-white/60 text-lg leading-relaxed font-sans font-light">
             Most solar companies disappear the moment the check clears. We believe your investment demands absolute accountability. 
             That is why we offer the most aggressive guarantees in the high-end residential market.
           </p>
        </div>

        {/* Right Column: Architectural Pillars */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 z-10 pt-4">
          {guarantees.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col relative"
            >
              {/* Massive Ghost Number */}
              <div className="absolute -top-10 -left-6 text-white/[0.03] font-heading font-bold text-9xl group-hover:text-amber-500/[0.05] transition-colors duration-700 pointer-events-none select-none">
                {item.idx}
              </div>

              {/* Top Accent Line */}
              <div className="w-full h-px bg-white/10 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[0%] bg-amber-500 group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                 <div className="text-xs font-bold text-amber-500 font-sans">{item.idx}</div>
                 <h4 className="text-2xl font-heading font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-white/50 leading-relaxed font-sans font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
