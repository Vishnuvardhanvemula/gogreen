import { HeroSection } from "@/components/sections/1-Hero";
import { TrustBarSection } from "@/components/sections/TrustBar";
import { ProblemStripSection } from "@/components/sections/2-ProblemStrip";
import { ServicesSection } from "@/components/sections/3-Services";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { DifferenceSection } from "@/components/sections/4-Difference";
import { TestimonialsSection } from "@/components/sections/5-Testimonials";
import { FounderSection } from "@/components/sections/6-Founder";
import { CTACloserSection } from "@/components/sections/7-CTACloser";

export default function Home() {
  return (
    <main className="w-full relative overflow-x-hidden">
      <HeroSection />
      <TrustBarSection />
      <ProblemStripSection />
      <ServicesSection />
      <HowItWorksSection />
      <DifferenceSection />
      <TestimonialsSection />
      <FounderSection />
      <CTACloserSection />
    </main>
  );
}
