import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";
import { CTACloser } from "@/components/sections/7-CTACloser";

export default function WhyUsPage() {
  return (
    <main>
      <InnerHero 
        title="Why GoGreen" 
        subtitle="Uncompromising quality in an industry of shortcuts."
      />
      <InnerContent>
        <h2 className="text-3xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">The GoGreen Difference</h2>
        <p>
          We founded GoGreen with a singular vision: to elevate the standard of residential solar. While the industry races to the bottom with aggressive sales tactics and subpar equipment, we have built our reputation on engineering excellence, aesthetic perfection, and white-glove service.
        </p>
        <h3 className="text-xl font-heading font-semibold text-[#1A1A1A] mt-8 mb-2">Architectural Integration</h3>
        <p>
          A GoGreen system is designed to complement your home's architecture, not detract from it. We utilize low-profile mounting hardware, skirted arrays, and hidden conduit runs to ensure your solar installation looks intentional and premium.
        </p>
        <h3 className="text-xl font-heading font-semibold text-[#1A1A1A] mt-8 mb-2">Tier-1 Technology</h3>
        <p>
          We refuse to compromise on hardware. We strictly source Tier-1 monocrystalline panels, elite microinverters, and robust racking systems proven to withstand extreme weather events and deliver decades of uncompromised power generation.
        </p>
      </InnerContent>
      <CTACloser />
    </main>
  );
}
