export function TrustBarSection() {
  const stats = [
    "7 States",
    "500+ Projects",
    "25 Years Warranty",
    "48 Hours Response",
    "100% In-House Teams"
  ];

  return (
    <div className="w-full bg-[#1A3020] py-6 relative z-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-white/20">
        {stats.map((stat, idx) => (
          <div key={idx} className="w-full md:w-auto px-6 py-2 md:py-0 text-center font-sans">
             <span className="text-white text-sm tracking-[0.05em]">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
