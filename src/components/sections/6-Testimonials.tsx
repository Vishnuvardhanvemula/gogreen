"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNarrative } from "@/components/layout/ScrollNarrative";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const { setHouseState, setIsZoomedOut } = useNarrative();
  const targetRef = useRef(null);
  const inView = useInView(targetRef, { amount: 0.1 });

  useEffect(() => {
    if (inView) {
      setHouseState("glowing");
      setIsZoomedOut(true); // remain zoomed out or fade out
    }
  }, [inView, setHouseState, setIsZoomedOut]);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      city: "Charlotte, NC",
      quote: "The only solar company that didn't feel like a used car dealership. The installation was seamless, and my bill dropped exactly as they promised.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "Mark T.",
      city: "Atlanta, GA",
      quote: "GoGreen removed my old faulty panels and installed a fresh array in under 3 days. Unbelievable service.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "Emily R.",
      city: "Richmond, VA",
      quote: "We had a minor inverter issue 6 months in. They were here in 24 hours. They actually honor their warranty.",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pointer-events-auto">
        <div className="absolute top-[15vh] w-full text-center px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white drop-shadow-md">
            Real People. Real Results.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <div className="flex gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-white text-sm font-medium">4.9/5 from 500+ Google Reviews</span>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-[10vw] mt-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-[85vw] md:w-[600px] shrink-0 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div 
                className="w-full md:w-2/5 h-48 md:h-auto bg-cover bg-center" 
                style={{ backgroundImage: `url(${t.img})` }} 
              />
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex gap-1 text-amber-500 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg text-slate-700 italic mb-6">"{t.quote}"</p>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
