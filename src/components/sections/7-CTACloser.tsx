"use client";

import { ArrowRight } from "lucide-react";

export function CTACloserSection() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 bg-[#0D1F0F]">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white leading-[1.1] tracking-tight mb-12">
            Ready to get started?
          </h2>
          
          <ul className="flex flex-col gap-6">
             <li className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B8E70]" />
                <span className="text-[#6B8E70] text-lg font-sans">We respond within 48 hours</span>
             </li>
             <li className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B8E70]" />
                <span className="text-[#6B8E70] text-lg font-sans">No sales pressure</span>
             </li>
             <li className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B8E70]" />
                <span className="text-[#6B8E70] text-lg font-sans">Real assessment, not a generic quote</span>
             </li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
          <form className="w-full flex flex-col gap-8">
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Name</label>
              <input 
                type="text" 
                className="bg-transparent text-white text-lg focus:outline-none placeholder-white/20"
                placeholder="Full Name"
              />
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Email</label>
              <input 
                type="email" 
                className="bg-transparent text-white text-lg focus:outline-none placeholder-white/20"
                placeholder="Email Address"
              />
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Phone</label>
              <input 
                type="tel" 
                className="bg-transparent text-white text-lg focus:outline-none placeholder-white/20"
                placeholder="Phone Number"
              />
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">State</label>
              <select className="bg-transparent text-white text-lg focus:outline-none appearance-none font-sans">
                 <option value="" disabled className="text-black">Select Region</option>
                 <option value="NC" className="text-black">North Carolina</option>
                 <option value="SC" className="text-black">South Carolina</option>
                 <option value="GA" className="text-black">Georgia</option>
                 <option value="VA" className="text-black">Virginia</option>
                 <option value="FL" className="text-black">Florida</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Service Interest</label>
              <select className="bg-transparent text-white text-lg focus:outline-none appearance-none font-sans">
                 <option value="" disabled className="text-black">Select Requirement</option>
                 <option value="EPC" className="text-black">Solar EPC</option>
                 <option value="REPOWER" className="text-black">Removal & Repower</option>
                 <option value="DECOMMISSION" className="text-black">Decommissioning</option>
              </select>
            </div>

            <button 
              type="button"
              className="mt-4 bg-[#0F2A1A] hover:bg-[#16412A] text-white py-5 px-10 font-bold text-sm tracking-widest uppercase transition-colors duration-300 flex justify-between items-center"
            >
              Send us a message <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-[#6B8E70] text-[10px] mt-4 font-sans leading-relaxed">
              GoGreen Solutions operates across Virginia, Maryland, North Carolina, and 4 additional states. All enquiries are handled by our in-house team.
            </p>
            
          </form>
        </div>

      </div>
    </section>
  );
}
