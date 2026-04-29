import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";
import { CTACloser } from "@/components/sections/7-CTACloser";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <InnerHero 
        title="Privacy Policy" 
        subtitle="How we protect and manage your data."
      />
      <InnerContent>
        <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">1. Information Collection</h2>
        <p>
          GoGreen Energy collects information that you provide directly to us, such as when you request an assessment, fill out a form, or communicate with our engineering team. This may include your name, email address, phone number, property address, and energy usage data required for feasibility studies.
        </p>

        <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">2. Use of Information</h2>
        <p>
          We use the information we collect to design bespoke solar arrays, communicate with you regarding your project, process transactions, and comply with local permitting and utility interconnection requirements. We do not sell or rent your personal information to third parties.
        </p>

        <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">3. Data Security</h2>
        <p>
          We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All structural and energy data associated with your property is treated with the highest level of confidentiality.
        </p>
      </InnerContent>
      <CTACloser />
    </main>
  );
}
