export function Footer() {
  return (
    <footer className="w-full bg-[#064e3b] text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row gap-12 md:gap-20">
        
        {/* Brand Column */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-widest mb-4">
            GOGREEN
          </div>
          <p className="text-white/60 font-sans text-sm mb-8 leading-relaxed max-w-sm">
            High-performance solar systems designed for luxury residences. Solar Done Right.
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-amber-500 tracking-[0.2em] uppercase mb-2">Services</h4>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Solar EPC</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Decommissioning</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Removal & Repower</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-amber-500 tracking-[0.2em] uppercase mb-2">Coverage</h4>
            <ul className="text-white/70 text-sm space-y-3">
              <li>North Carolina</li>
              <li>South Carolina</li>
              <li>Georgia</li>
              <li>Virginia</li>
              <li>Florida</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-amber-500 tracking-[0.2em] uppercase mb-2">Contact</h4>
            <a href="tel:5550192837" className="text-white/70 hover:text-white transition-colors text-sm">(555) 019-2837</a>
            <a href="mailto:engineer@gogreen.com" className="text-white/70 hover:text-white transition-colors text-sm">engineer@gogreen.com</a>
            <p className="text-white/50 text-xs mt-2 italic">Expect a response within 48 hours. Guaranteed.</p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs font-sans">
          © {new Date().getFullYear()} GoGreen Energy. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
