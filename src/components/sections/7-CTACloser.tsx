"use client";

import { ArrowRight } from "lucide-react";

export function CTACloserSection() {
  return (
    <section className="relative w-full py-16 md:py-32 lg:py-48 px-6 bg-[#0D1F0F]">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white leading-[1.1] tracking-tight mb-8 md:mb-12">
            Ready to get started?
          </h2>
          
          <ul className="flex flex-col gap-4 md:gap-6">
             <li className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#6B8E70]" />
                <span className="text-[#6B8E70] text-base md:text-lg font-sans">We respond within 48 hours</span>
             </li>
             <li className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#6B8E70]" />
                <span className="text-[#6B8E70] text-base md:text-lg font-sans">No sales pressure</span>
             </li>
             <li className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#6B8E70]" />
                <span className="text-[#6B8E70] text-base md:text-lg font-sans">Real assessment, not a generic quote</span>
             </li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <form className="w-full flex flex-col gap-6 md:gap-8">
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Name</label>
              <input 
                type="text" 
                className="bg-transparent text-white text-base md:text-lg focus:outline-none placeholder-white/20"
                placeholder="Full Name"
              />
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Email</label>
              <input 
                type="email" 
                className="bg-transparent text-white text-base md:text-lg focus:outline-none placeholder-white/20"
                placeholder="Email Address"
              />
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Phone</label>
              <input 
                type="tel" 
                className="bg-transparent text-white text-base md:text-lg focus:outline-none placeholder-white/20"
                placeholder="Phone Number"
              />
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">State</label>
              <select className="bg-transparent text-white text-base md:text-lg focus:outline-none appearance-none font-sans">
                 <option value="" disabled className="text-black bg-white">Select Region</option>
                 <option value="NC" className="text-black bg-white">North Carolina</option>
                 <option value="SC" className="text-black bg-white">South Carolina</option>
                 <option value="GA" className="text-black bg-white">Georgia</option>
                 <option value="VA" className="text-black bg-white">Virginia</option>
                 <option value="FL" className="text-black bg-white">Florida</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Service Interest</label>
              <select className="bg-transparent text-white text-base md:text-lg focus:outline-none appearance-none font-sans">
                 <option value="" disabled className="text-black bg-white">Select Requirement</option>
                 <option value="EPC" className="text-black bg-white">Solar EPC</option>
                 <option value="REPOWER" className="text-black bg-white">Removal & Repower</option>
                 <option value="DECOMMISSION" className="text-black bg-white">Decommissioning</option>
              </select>
            </div>

            <button 
              type="button"
              className="mt-4 md:mt-6 bg-[#0F2A1A] border border-[#6B8E70]/30 hover:bg-[#16412A] hover:border-[#6B8E70]/80 text-white py-4 md:py-5 px-6 md:px-10 font-bold text-[10px] md:text-sm tracking-[0.15em] md:tracking-widest uppercase transition-all duration-300 flex justify-between items-center group"
            >
              <span className="group-hover:tracking-[0.2em] md:group-hover:tracking-[0.25em] transition-all">Send us a message</span> 
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <p className="text-[#6B8E70] text-[9px] md:text-[10px] mt-2 md:mt-4 font-sans leading-relaxed text-center lg:text-left">
              GoGreen Solutions operates across Virginia, Maryland, North Carolina, and 4 additional states. All enquiries are handled by our in-house team.
            </p>
            
          </form>
        </div>

      </div>
    </section>
  );
}
