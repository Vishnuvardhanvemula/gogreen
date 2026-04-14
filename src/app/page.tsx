import { HeroSection } from "@/components/sections/1-Hero";

import { ServicesSection } from "@/components/sections/3-Services";
import { ProcessSection } from "@/components/sections/HorizontalScroll";
import { GuaranteeSection } from "@/components/sections/8-Guarantee";
import { MapSection } from "@/components/sections/9-Map";
import { TestimonialsSection } from "@/components/sections/5-Testimonials";
import { FounderSection } from "@/components/sections/6-Founder";
import { CTACloserSection } from "@/components/sections/7-CTACloser";

export default function Home() {
  return (
    <main className="w-full relative">
      <HeroSection />

      <ServicesSection />
      <ProcessSection />
      <GuaranteeSection />
      <MapSection />
      <TestimonialsSection />
      <FounderSection />
      <CTACloserSection />
    </main>
  );
}
