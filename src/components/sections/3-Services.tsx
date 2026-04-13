"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      idx: "01",
      title: "Solar EPC",
      description: "End-to-end engineering, procurement, and construction. We build precision systems using Tier-1 materials right the first time.",
      tag: "NEW INSTALLS"
    },
    {
      idx: "02",
      title: "Decommissioning",
      description: "Safe, compliant removal of obsolete panels, ensuring roof integrity and proper recycling protocols.",
      tag: "REMOVALS"
    },
    {
      idx: "03",
      title: "Removal & Repower",
      description: "Complete overhaul of aging arrays. We strip the old infrastructure and install elite high-yield panels.",
      tag: "UPGRADES"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-32 border-b border-slate-200">
      <div className="max-w-[90vw] md:max-w-7xl mx-auto w-full">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 px-4 md:px-0">
          <div className="max-w-2xl">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-brand-primary" />
               <h2 className="text-[10px] md:text-xs font-bold text-slate-400 tracking-[0.3em] uppercase">Core Capabilities</h2>
             </div>
             <h3 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-slate-900 leading-[1.05] tracking-tight">
               Concierge-level <br className="hidden md:block" /> engineering.
             </h3>
          </div>
          <button className="group text-slate-800 font-medium flex items-center gap-3 hover:text-amber-500 transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs pb-3 border-b border-slate-300 hover:border-amber-500">
            View Technical Specs <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border-y border-slate-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-[#f8fafc] p-10 lg:p-16 hover:bg-white transition-colors duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Massive Editorial Number */}
              <div className="absolute top-8 right-8 text-[#f1f5f9] group-hover:text-[#e2e8f0] font-heading font-bold text-8xl md:text-9xl -z-0 transition-colors duration-500 pointer-events-none select-none">
                {service.idx}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-2 h-2 rounded-full bg-amber-500" />
                   <div className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">{service.tag}</div>
                </div>
                
                <h4 className="text-3xl font-heading font-medium text-slate-900 mb-6 group-hover:text-amber-600 transition-colors duration-500">{service.title}</h4>
                <p className="text-lg text-slate-500 leading-relaxed font-sans mb-12 font-light max-w-sm">
                  {service.description}
                </p>
                
                <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                   <MoveRight className="w-4 h-4 -rotate-45" />
                </div>
              </div>

              {/* Hover Edge Line */}
              <div className="absolute bottom-0 left-0 w-[0%] h-1 bg-amber-500 group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
