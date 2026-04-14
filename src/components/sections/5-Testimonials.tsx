"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[#F9F6F0] py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left: Cinematic Testimonial */}
        <div className="w-full md:w-1/2 flex flex-col">
           <div className="flex items-center gap-2 mb-8 text-[#0D1F0F]">
              <span className="text-lg">★</span><span className="text-lg">★</span><span className="text-lg">★</span><span className="text-lg">★</span><span className="text-lg">★</span>
           </div>
           
           <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-slate-900 leading-[1.3] mb-12">
             "GoGreen engineered our 40kW system when two other firms said the roof structure couldn't support the load without major reinforcement. Their structural team designed a custom racking system that preserved the estate perfectly. The execution was flawless."
           </h3>
           
           <div className="flex flex-col gap-1 border-l-2 border-[#0D1F0F] pl-4">
              <p className="font-bold text-sm tracking-[0.1em] text-[#0D1F0F] uppercase">Jonathan Mercer</p>
              <p className="text-xs text-slate-500 tracking-[0.05em]">Raleigh, North Carolina</p>
           </div>
        </div>

        {/* Right: Stacked Evidence */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
           <div className="w-full flex justify-end">
              <div className="w-4/5 flex flex-col gap-3">
                 <div className="relative w-full aspect-[16/9] bg-slate-200 overflow-hidden">
                    <Image 
                       src="/images/solar_panels_closeup_1776093470929.png" 
                       alt="Commercial installation" 
                       fill 
                       sizes="40vw"
                       className="object-cover grayscale mix-blend-multiply opacity-80"
                    />
                 </div>
                 <p className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold">Commercial installation, Maryland, 2024</p>
              </div>
           </div>
           
           <div className="w-full flex justify-start">
              <div className="w-4/5 flex flex-col gap-3">
                 <div className="relative w-full aspect-[16/9] bg-slate-200 overflow-hidden">
                    <Image 
                       src="/images/solar_hero_modern_house_1776093453629.png" 
                       alt="Residential R&R" 
                       fill 
                       sizes="40vw"
                       className="object-cover grayscale opacity-90"
                    />
                 </div>
                 <p className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold">Residential R&R, Virginia, 2023</p>
              </div>
           </div>
           
           {/* Navigation Dots */}
           <div className="flex justify-center mt-12 gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0D1F0F]" />
              <div className="w-2 h-2 rounded-full bg-slate-300" />
           </div>
        </div>

      </div>
    </section>
  );
}
