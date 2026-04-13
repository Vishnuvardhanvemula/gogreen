"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTACloserSection() {
  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden bg-slate-950">
      
      {/* Cinematic Abstract Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_abstract_solar_macro.png"
          alt="Solar Macro Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_90%)]" />
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
             <div className="w-8 h-px bg-amber-500" />
             <h2 className="text-[10px] md:text-xs font-bold text-amber-500 tracking-[0.3em] uppercase">Start The Process</h2>
             <div className="w-8 h-px bg-amber-500" />
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium text-white leading-[1.05] tracking-tight">
            Consult with our <br className="hidden md:block"/> engineering team.
          </h3>
        </motion.div>

        <motion.form 
          className="w-full max-w-3xl bg-slate-900/60 backdrop-blur-2xl p-10 md:p-14 border border-white/10 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Subtle noise texture or highlight inside form */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em] ml-1">Full Name</label>
              <input 
                type="text" 
                className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all font-sans"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em] ml-1">Phone Number</label>
              <input 
                type="tel" 
                className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all font-sans"
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <input 
                type="email" 
                className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all font-sans"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em] ml-1">State / Coverage</label>
              <select defaultValue="" className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all font-sans appearance-none">
                 <option value="" disabled className="text-black">Select Region</option>
                 <option value="NC" className="text-black">North Carolina</option>
                 <option value="SC" className="text-black">South Carolina</option>
                 <option value="GA" className="text-black">Georgia</option>
                 <option value="VA" className="text-black">Virginia</option>
                 <option value="FL" className="text-black">Florida</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em] ml-1">Service Intent</label>
              <select defaultValue="" className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all font-sans appearance-none">
                 <option value="" disabled className="text-black">Select Requirement</option>
                 <option value="EPC" className="text-black">New Installation (Solar EPC)</option>
                 <option value="REPOWER" className="text-black">Removal & Repower</option>
                 <option value="DECOMMISSION" className="text-black">Decommissioning</option>
              </select>
            </div>

          </div>

          <button 
            type="button"
            className="group w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-base tracking-wide font-bold py-5 px-10 rounded-full flex items-center justify-center gap-3 transition-colors duration-300 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          >
            Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-white/30 text-[10px] md:text-xs uppercase tracking-widest mt-8 font-sans font-medium">
            Strictly Confidential • No Sales Pressure
          </p>
        </motion.form>
      </div>
    </section>
  );
}
