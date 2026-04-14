"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export function FounderSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of the image container (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="w-full bg-[#0F2A1A] flex flex-col md:flex-row min-h-[500px] md:min-h-[400px] overflow-hidden">
      
      {/* Left: Bleed-edge Photo */}
      <div className="w-full md:w-1/3 relative min-h-[350px] sm:min-h-[400px] md:min-h-full perspective-[1000px]">
        <motion.div 
           className="w-full h-full absolute inset-0 transform-style-3d origin-center"
           initial={{ scale: 1.1, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           style={{
             rotateX,
             rotateY,
             scale: 1.05 // slightly bumped so edges don't show when rotating
           }}
        >
          {/* Subtle lighting glare that follows the mouse */}
          <motion.div 
            className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(() => {
                const posX = (x.get() + 0.5) * 100;
                const posY = (y.get() + 0.5) * 100;
                return `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
              })
            }}
          />
          <Image 
            src="/images/founder_portrait_1776093487726.png"
            alt="Madan, Founder of GoGreen"
            fill
            sizes="33vw"
            className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0 shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Right: The Strip */}
      <motion.div 
        className="w-full md:w-2/3 flex items-center p-8 sm:p-12 md:p-16 lg:p-32"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          
          {/* Section Label */}
          <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-12">
            <span className="w-6 md:w-8 lg:w-12 h-px bg-amber-500/80" />
            <span className="text-amber-500/90 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
              Our Ethos
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium leading-[1.3] md:leading-[1.4] text-white mb-8 md:mb-10">
            "GoGreen was founded on one belief: solar infrastructure should be built properly, backed completely, and supported personally."
          </h2>
          
          <div className="flex flex-col gap-1 md:gap-2 mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] text-white uppercase">Madan</p>
            <p className="text-[10px] md:text-xs text-[#6B8E70] tracking-[0.05em] md:tracking-[0.1em] uppercase">Founder & CEO</p>
          </div>
          
          <button className="flex items-center gap-2 text-white font-medium text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-amber-500 transition-colors group">
            Our story <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

    </section>
  );
}
