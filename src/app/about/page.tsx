import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";
import { CTACloser } from "@/components/sections/7-CTACloser";

export default function AboutPage() {
  return (
    <main>
      <InnerHero 
        title="About Us" 
        subtitle="Pioneers of the luxury solar movement."
      />
      <InnerContent>
        <h2 className="text-3xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">Our Heritage</h2>
        <p>
          GoGreen was established by a collective of elite engineers and master electricians who recognized a glaring void in the renewable energy sector: a lack of bespoke, high-performance solar solutions tailored for the luxury residential market.
        </p>
        <p>
          Headquartered in the Southeast, we have grown from a boutique engineering firm into the region's premier solar EPC contractor. Our team comprises industry veterans who possess a deep understanding of complex roof structures, advanced grid-tie systems, and architectural aesthetics.
        </p>
        <p>
          We don't employ salespeople. When you engage with GoGreen, you interface directly with project managers and systems engineers who prioritize the long-term viability and performance of your solar asset.
        </p>
      </InnerContent>
      <CTACloser />
    </main>
  );
}
