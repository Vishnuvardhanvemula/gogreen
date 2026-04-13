"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Background blur and border opacity based on scroll
  const background = useTransform(scrollY, [0, 50], ["rgba(0,0,0,0)", "rgba(15, 23, 42, 0.4)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6"
      style={{ background, backdropFilter, borderBottom: `1px solid rgba(255,255,255,${isScrolled ? 0.1 : 0})` }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 text-white font-heading font-bold text-2xl tracking-widest">
        GOGREEN
      </div>
      <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm tracking-widest uppercase">
         <a href="#" className="hover:text-amber-400 transition-colors">Services</a>
         <a href="#" className="hover:text-amber-400 transition-colors">Guarantee</a>
         <a href="#" className="hover:text-amber-400 transition-colors">Reviews</a>
      </div>
      <button className="text-white font-medium text-sm tracking-widest uppercase hover:text-amber-400 transition-colors border hidden md:block border-white/20 px-6 py-2.5 rounded-full hover:bg-white/5">
        Contact Us
      </button>
    </motion.nav>
  );
}
