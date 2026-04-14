"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "GoGreen engineered our 40kW system when two other firms said the roof structure couldn't support the load without major reinforcement. Their structural team designed a custom racking system that preserved the estate perfectly. The execution was flawless.",
    name: "Jonathan Mercer",
    location: "Raleigh, North Carolina",
    role: "Estate Owner",
    image: "/images/solar_hero_modern_house_1776093453629.png"
  },
  {
    quote: "The attention to detail and absolute precision they brought to our commercial site was unparalleled. Our energy overhead dropped by 85% in the first quarter alone, and the installation was completely non-disruptive to our operations.",
    name: "Sarah Jenkins",
    location: "Richmond, Virginia",
    role: "Operations Director",
    image: "/images/solar_panels_closeup_1776093470929.png"
  },
  {
    quote: "What sets GoGreen apart is their aesthetic integration. The panels look like they were meant to be part of the architecture, not an afterthought. They truly understand premium residential design.",
    name: "Marcus Thorne",
    location: "Charleston, South Carolina",
    role: "Architect",
    image: null
  }
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030704] py-20 md:py-32 lg:py-48 px-4 sm:px-6 overflow-hidden">
      {/* Subtle Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] border-[1px] border-white rounded-full animate-[spin_120s_linear_infinite]" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        
        {/* Left: Sticky Context */}
        <div className="lg:col-span-4 flex flex-col relative">
          <div className="lg:sticky lg:top-32 flex flex-col gap-6 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section Label */}
              <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
                <span className="w-6 sm:w-8 lg:w-12 h-px bg-white/30" />
                <span className="text-white/60 text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                  Client Outcomes
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white font-medium leading-[1.1] mb-4 md:mb-6">
                Proven <br/>
                <span className="text-white/50 italic font-serif">Excellence</span>
              </h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
                We don't just install solar. We engineer elegant energy solutions that respect architectural integrity and deliver uncompromising performance. Hear directly from those who have experienced the GoGreen standard.
              </p>
            </motion.div>

            {/* Rotating Star Emblem */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex"
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                    <defs>
                      <path id="textPathOut2" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                    </defs>
                    <text className="text-[8px] uppercase tracking-[0.15em] font-bold fill-white">
                      <textPath href="#textPathOut2" startOffset="0" textLength="224" lengthAdjust="spacing">
                        FIVE STAR REVIEWS • GOGREEN SOLAR • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="text-amber-500 text-2xl drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">★</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Scrolling Testimonial Cards */}
        <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8 md:gap-16 mt-4 md:mt-8 lg:mt-32">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`bg-white/[0.02] border border-white/[0.05] p-6 sm:p-8 md:p-12 backdrop-blur-sm relative group hover:bg-white/[0.04] transition-colors duration-500 w-full lg:w-[85%] ${
                index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              }`}
            >
              <div className="flex gap-1 mb-4 sm:mb-6 md:mb-8 text-amber-500/80">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-xs sm:text-sm">★</span>
                ))}
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading text-white/90 leading-[1.4] mb-8 sm:mb-10 md:mb-12">
                "{test.quote}"
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                <div className="flex flex-col gap-1 border-l focus:outline-none border-white/20 pl-3 sm:pl-4">
                  <p className="font-bold text-xs sm:text-sm tracking-[0.1em] text-white uppercase">{test.name}</p>
                  <p className="text-[10px] sm:text-xs text-white/50 tracking-[0.05em]">{test.role}, {test.location}</p>
                </div>
                
                {test.image && (
                  <div className="relative w-full sm:w-24 md:w-32 h-16 sm:h-20 overflow-hidden grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                    <Image 
                      src={test.image} 
                      alt={`Installation for ${test.name}`} 
                      fill 
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
