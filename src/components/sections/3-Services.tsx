"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      idx: "01",
      title: "Solar EPC",
      target: "For large-scale residential and commercial builds.",
      description: "End-to-end engineering, procurement, and construction. We build precision systems using Tier-1 materials right the first time, ensuring 25 years of uninterrupted output."
    },
    {
      idx: "02",
      title: "Decommissioning",
      target: "For properties undergoing major structural changes.",
      description: "Safe, compliant removal of obsolete panels, ensuring roof integrity and proper recycling protocols without disrupting the primary estate structure."
    },
    {
      idx: "03",
      title: "Removal & Repower",
      target: "For owners inheriting failed or aging arrays.",
      description: "Complete overhaul of aging arrays. We strip the old infrastructure, rectify structural faults, and install elite high-yield panels for maximum efficiency."
    }
  ];

  return (
    <section className="w-full bg-[#0A2A1A] py-32 border-b border-white/5">
      <div className="max-w-[90vw] md:max-w-7xl mx-auto w-full">
        
        {/* Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-[#0E3524] transition-colors duration-500 overflow-hidden"
            >
              {/* Massive Faint Number */}
              <div className="absolute top-8 right-8 text-white/[0.03] font-heading font-medium text-9xl pointer-events-none select-none tracking-tighter">
                {service.idx}
              </div>
              
              <div className="relative z-10">
                <h4 className="text-3xl font-heading font-medium text-white mb-3">
                  {service.title}
                </h4>
                
                {/* Single sentence target */}
                <p className="text-[#6B8E70] text-sm font-sans mb-8">
                  {service.target}
                </p>

                {/* Muted gold rule */}
                <div className="w-full h-px bg-[#D4AF37]/30 mb-8" />
                
                <p className="text-white/60 leading-relaxed font-sans font-light mb-12 text-[15px]">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-white font-medium text-xs tracking-[0.2em] uppercase group-hover:text-amber-500 transition-colors">
                   Learn more <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
