export function TrustBarSection() {
  const stats = [
    { label: "1,200+ Installations" },
    { label: "Certified in 7 States" },
    { label: "25-Year Custom Warranty" },
    { label: "48-Hour Response Guarantee" }
  ];

  return (
    <div className="w-full bg-[#064e3b] border-y border-white/5 py-4 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-white text-xs font-semibold tracking-[0.2em] uppercase">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
             <div className="w-1.5 h-1.5 rounded-full bg-amber-500 hidden md:block" />
             {stat.label}
          </div>
        ))}
      </div>
    </div>
  );
}
