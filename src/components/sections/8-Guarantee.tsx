export function GuaranteeSection() {
  return (
    <section className="w-full bg-white py-40 md:py-56 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-slate-900 leading-[1.2] tracking-tight mb-16">
          We guarantee our workmanship for 25 years.<br className="hidden md:block"/>
          And we respond to every issue within 48 hours.<br className="hidden md:block"/>
          In writing.
        </h2>

        {/* Signature SVG */}
        <div className="mb-6 opacity-80">
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 50 C 40 20, 60 10, 70 30 C 80 50, 70 70, 50 60 C 30 50, 10 40, 20 20 C 30 0, 50 0, 60 20 C 70 40, 90 60, 110 50 C 130 40, 140 20, 120 10 C 100 0, 80 20, 90 40 C 100 60, 130 70, 150 50 C 170 30, 160 10, 140 10 C 120 10, 140 50, 160 60 C 180 70, 190 50, 180 40" stroke="#0D1F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <p className="text-sm font-bold tracking-[0.2em] text-[#0D1F0F] uppercase">Madan</p>
        <p className="text-xs text-slate-500 tracking-[0.1em] uppercase mt-1">Founder & CEO</p>

      </div>
      
    </section>
  );
}
