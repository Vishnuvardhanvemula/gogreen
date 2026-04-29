import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";
import { CTACloser } from "@/components/sections/7-CTACloser";

export default function TermsOfServicePage() {
  return (
    <main>
      <InnerHero 
        title="Terms of Service" 
        subtitle="The operational agreement for GoGreen clients."
      />
      <InnerContent>
        <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">1. Engineering Agreements</h2>
        <p>
          All solar EPC, decommissioning, and repowering services provided by GoGreen Energy are subject to a formalized Engineering, Procurement, and Construction (EPC) agreement. The terms outlined in the specific EPC contract supersede these general terms of service.
        </p>

        <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">2. Site Access & Feasibility</h2>
        <p>
          By requesting an assessment, you grant GoGreen Energy personnel permission to access your property for the purpose of conducting structural, electrical, and shading analyses. All assessments are conducted with the utmost respect for your privacy and property.
        </p>

        <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">3. Warranties & Guarantees</h2>
        <p>
          GoGreen guarantees the structural integrity of our mounting hardware and roof penetrations for a period defined in your contract. Hardware warranties for panels and inverters are provided directly by the Tier-1 manufacturers, with GoGreen facilitating any necessary service claims.
        </p>
      </InnerContent>
      <CTACloser />
    </main>
  );
}
