"use client";

import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Inquiry & Review",
      desc: "Our engineers review your home specs via satellite and respond with a preliminary proposal within 24 hours."
    },
    {
      number: "02",
      title: "System Design",
      desc: "We dispatch a structural surveyor to your property. Our team then designs a bespoke, architecturally integrated solar array."
    },
    {
      number: "03",
      title: "Install & Protect",
      desc: "A meticulous 3-day installation utilizing Tier-1 hardware, followed immediately by our 25-year active protection period."
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-3 mb-6">
             <div className="w-8 h-[1px] bg-slate-300" />
             <h2 className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">The Process</h2>
             <div className="w-8 h-[1px] bg-slate-300" />
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 leading-tight">
            How we operate.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-16 relative">
           {/* Dashed connector line */}
           <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-slate-200" />

           {steps.map((step, idx) => (
             <motion.div 
               key={idx}
               className="relative flex flex-col items-center text-center"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
             >
                <div className="w-14 h-14 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-brand-primary font-bold font-heading mb-8 relative z-10">
                   {step.number}
                </div>
                <h4 className="text-2xl font-heading font-semibold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 font-sans leading-relaxed">{step.desc}</p>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
