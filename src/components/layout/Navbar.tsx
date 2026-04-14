"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { label: "Solar EPC", href: "/services/solar-epc", desc: "New installations, end-to-end" },
  { label: "Decommissioning", href: "/services/decommissioning", desc: "Safe, compliant panel removal" },
  { label: "Removal & Repower", href: "/services/removal-repower", desc: "Overhaul aging arrays" },
];

const navLinks = [
  { label: "Service Areas", href: "/service-areas" },
  { label: "Why GoGreen", href: "/why-us" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const backgroundColor = useTransform(scrollY, [0, 60], ["rgba(13, 31, 15, 0)", "rgba(255, 255, 255, 1)"]);
  const textColor = useTransform(scrollY, [0, 60], ["rgba(255, 255, 255, 1)", "rgba(13, 31, 15, 1)"]);
  const logoColor = useTransform(scrollY, [0, 60], ["rgba(255, 255, 255, 1)", "rgba(27, 94, 32, 1)"]);
  const borderColor = useTransform(scrollY, [0, 60], ["rgba(255,255,255,0)", "rgba(0,0,0,0.06)"]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 60);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5"
        style={{
          backgroundColor,
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: borderColor,
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.04)" : "none",
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="font-heading font-bold text-xl tracking-[0.15em] uppercase shrink-0"
          style={{ color: logoColor }}
        >
          GoGreen
        </motion.a>

        {/* Desktop Links */}
        <motion.div
          className="hidden lg:flex items-center gap-10 font-medium text-[11px] tracking-[0.15em] uppercase"
          style={{ color: textColor }}
        >
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1.5 hover:opacity-60 transition-opacity"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] bg-white border border-slate-100 shadow-2xl shadow-black/10 z-50">
                <div className="py-2">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="flex flex-col px-6 py-4 hover:bg-[#F9F6F0] transition-colors group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-[#1A1A1A] font-semibold text-[12px] tracking-[0.1em] uppercase group-hover:text-[#1B5E20] transition-colors">
                        {s.label}
                      </span>
                      <span className="text-slate-400 text-[11px] font-normal tracking-normal normal-case mt-0.5">
                        {s.desc}
                      </span>
                    </a>
                  ))}
                  <div className="mx-6 pt-2 mt-1 border-t border-slate-100">
                    <a
                      href="/services"
                      className="flex items-center gap-2 py-3 text-[#1B5E20] font-semibold text-[11px] tracking-[0.1em] uppercase hover:opacity-70 transition-opacity"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:opacity-60 transition-opacity whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="/get-assessment"
            className="inline-block font-bold text-[11px] tracking-[0.15em] uppercase px-7 py-3.5 bg-[#1B5E20] text-white hover:bg-[#2E7D32] transition-colors duration-200 whitespace-nowrap"
          >
            Get Assessment
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.div style={{ color: textColor }}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D1F0F] flex flex-col pt-24 px-8 pb-12 overflow-y-auto">
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Services */}
          <div className="mb-8">
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Services</p>
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="block text-white text-xl font-heading font-medium py-3 border-b border-white/10 hover:text-amber-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Nav links */}
          <div className="mb-12">
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Company</p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white text-xl font-heading font-medium py-3 border-b border-white/10 hover:text-amber-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/get-assessment"
            className="block w-full text-center font-bold text-sm tracking-widest uppercase px-8 py-5 bg-[#1B5E20] text-white hover:bg-[#2E7D32] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Assessment
          </a>

          <p className="text-white/30 text-[10px] tracking-[0.1em] text-center mt-6">
            We respond within 48 hours — no spam, ever.
          </p>
        </div>
      )}
    </>
  );
}
