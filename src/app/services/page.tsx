"use client";

import { InnerHero } from "@/components/sections/InnerHero";
import { CTACloser } from "@/components/sections/7-CTACloser";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Solar EPC",
      href: "/services/solar-epc",
      desc: "End-to-end engineering, procurement, and construction for luxury residential solar systems.",
      img: "/images/exquisite_solar_mansion.png",
      tag: "Flagship Service"
    },
    {
      title: "Decommissioning",
      href: "/services/decommissioning",
      desc: "Safe, compliant, and environmentally responsible solar panel removal and recycling.",
      img: "/images/macro_solar_dark.png",
      tag: "Compliance & Safety"
    },
    {
      title: "Removal & Repower",
      href: "/services/removal-repower",
      desc: "Overhaul aging arrays with next-generation, high-efficiency solar technology.",
      img: "/images/apple_style_solar_roof.png",
      tag: "System Upgrade"
    }
  ];

  return (
    <main>
      <InnerHero 
        title="Our Services" 
        subtitle="Comprehensive solar solutions tailored for the modern luxury estate."
      />
      
      <section className="py-24 md:py-32 bg-[#0A1A10] text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
                Engineering <span className="text-[#D4AF37] italic font-serif">Excellence</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                From initial architectural integration to end-of-life component recycling, GoGreen provides an uncompromised suite of solar energy services.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Link href={service.href} className="group block relative w-full h-[500px] rounded-sm overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      fill 
                      className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-[#0A1A10]/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                    <div className="mb-auto mt-2">
                      <span className="bg-[#1B5E20]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/20">
                        {service.tag}
                      </span>
                    </div>
                    
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-heading font-semibold text-white mb-3 tracking-wide">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTACloser />
    </main>
  );
}
