import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FounderSection() {
  return (
    <section className="w-full bg-[#0F2A1A] flex flex-col md:flex-row min-h-[400px]">
      
      {/* Left: Bleed-edge Photo */}
      <div className="w-full md:w-1/3 relative min-h-[300px] md:min-h-full">
        <Image 
          src="/images/founder_portrait_1776093487726.png"
          alt="Madan, Founder of GoGreen"
          fill
          sizes="33vw"
          className="object-cover object-top grayscale"
        />
      </div>

      {/* Right: The Strip */}
      <div className="w-full md:w-2/3 flex items-center p-12 md:p-24 lg:p-32">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium leading-[1.3] text-white mb-10">
            "GoGreen was founded on one belief: solar infrastructure should be built properly, backed completely, and supported personally."
          </h2>
          
          <div className="flex flex-col gap-1 mb-12">
            <p className="text-sm font-bold tracking-[0.2em] text-white uppercase">Madan</p>
            <p className="text-xs text-[#6B8E70] tracking-[0.1em] uppercase">Founder & CEO</p>
          </div>
          
          <button className="flex items-center gap-2 text-white font-medium text-xs tracking-[0.2em] uppercase hover:text-amber-500 transition-colors">
            Our story <ArrowRight className="w-4 h-4 hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </section>
  );
}
