"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      location: "Charlotte, NC",
      quote: "The only solar luxury brand that actually delivered. From the architectural review to the final install, pristine execution."
    },
    {
      name: "Mark T.",
      location: "Atlanta, GA",
      quote: "GoGreen removed my old faulty panels and installed a fresh array in under 3 days. Unbelievable service and zero mess."
    },
    {
      name: "Arthur Pendelton",
      location: "Richmond, VA",
      quote: "We had a minor inverter performance drop 6 months in. They were out here checking it within 24 hours. Phenomenal."
    }
  ];

  return (
    <section className="w-full bg-white py-32 md:py-40 relative">
      {/* Background Architectural Accent Line */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-slate-100 -z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-slate-100 -z-10 pointer-events-none" />

      <div className="max-w-[90vw] md:max-w-7xl mx-auto w-full relative">
        
        {/* Overlapping Layout Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-0">
          
          {/* Left: Magazine Image Block */}
          <motion.div 
            className="w-full lg:w-5/12 sticky top-32 z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="relative w-full aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden shadow-2xl">
               <Image 
                 src="/images/solar_panels_closeup_1776093470929.png" 
                 alt="Gogreen Pristine Solar Install" 
                 fill 
                 className="object-cover"
               />
               
               {/* Elegant Glass Overlays */}
               <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="text-amber-400 font-serif text-2xl tracking-widest">★★★★★</div>
                 </div>
                 <p className="font-heading text-sm text-white font-medium leading-relaxed">
                   "Consistently rated the standard in residential solar engineering by elite homeowners."
                 </p>
                 <div className="mt-4 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-white/50" />
                    <span className="text-[9px] text-white/70 tracking-[0.2em] font-semibold uppercase">200+ Verified Reviews</span>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Right: The Testimonials cascade */}
          <div className="w-full lg:w-8/12 lg:-ml-12 z-20 pt-16 lg:pt-32 pb-16 hidden lg:block">
             <motion.div 
               className="bg-white p-12 lg:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.05)] rounded-2xl border border-slate-100"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             >
                {/* Section Header */}
                <div className="mb-20">
                   <div className="inline-flex items-center gap-4 mb-6">
                       <div className="w-8 h-[1px] bg-brand-primary/30" />
                       <h2 className="text-[10px] md:text-xs font-bold text-brand-primary tracking-[0.3em] uppercase">What Our Clients Say</h2>
                   </div>
                   <h3 className="text-5xl font-heading font-medium text-slate-900 leading-[1.1] tracking-tight">
                     Refined execution.<br/> Remarkable results.
                   </h3>
                </div>

                {/* Quotes */}
                <div className="flex flex-col gap-16">
                  {testimonials.map((t, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                      className="group"
                    >
                      <div className="text-brand-primary/20 text-6xl font-serif leading-[0] mb-2 font-bold group-hover:text-amber-500 transition-colors duration-500">"</div>
                      <p className="text-2xl lg:text-3xl text-slate-800 italic font-serif leading-snug mb-8">{t.quote}</p>
                      
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-[1px] bg-slate-300" />
                         <div>
                            <h4 className="font-heading font-semibold text-slate-900 text-sm tracking-widest uppercase mb-1">{t.name}</h4>
                            <p className="text-xs text-slate-400 font-sans tracking-[0.2em] uppercase">{t.location}</p>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </motion.div>
          </div>
          
          {/* Mobile representation (Simplified) */}
          <div className="w-full lg:hidden z-20 flex flex-col gap-12 pt-8">
               <div className="mb-4">
                   <div className="inline-flex items-center gap-4 mb-6">
                       <div className="w-8 h-[1px] bg-brand-primary/30" />
                       <h2 className="text-[10px] md:text-xs font-bold text-brand-primary tracking-[0.3em] uppercase">What Our Clients Say</h2>
                   </div>
                   <h3 className="text-4xl font-heading font-medium text-slate-900 leading-[1.1] tracking-tight">
                     Refined execution.<br/> Remarkable results.
                   </h3>
               </div>
               
               {testimonials.map((t, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                      className="group"
                    >
                      <div className="text-brand-primary/20 text-5xl font-serif leading-[0] mb-4 font-bold">"</div>
                      <p className="text-xl text-slate-800 italic font-serif leading-snug mb-6">{t.quote}</p>
                      
                      <div className="flex items-center gap-4">
                         <div className="w-6 h-[1px] bg-slate-300" />
                         <div>
                            <h4 className="font-heading font-semibold text-slate-900 text-xs tracking-widest uppercase mb-1">{t.name}</h4>
                            <p className="text-[10px] text-slate-400 font-sans tracking-[0.2em] uppercase">{t.location}</p>
                         </div>
                      </div>
                    </motion.div>
                ))}
          </div>

        </div>
      </div>
    </section>
  );
}
