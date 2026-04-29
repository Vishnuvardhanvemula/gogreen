import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";
import { CTACloser } from "@/components/sections/7-CTACloser";

export default function ServiceAreasPage() {
  return (
    <main>
      <InnerHero 
        title="Service Areas" 
        subtitle="Bringing high-performance solar to the Southeast's most prestigious estates."
      />
      <InnerContent>
        <h2 className="text-3xl font-heading font-medium text-[#1A1A1A] mt-8 mb-4">Regional Expertise, Local Precision</h2>
        <p>
          GoGreen Energy operates across the Southeastern United States, providing bespoke solar engineering and installation services to discerning homeowners. Our regional focus allows us to navigate local grid requirements and climatic challenges with unmatched expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm">
            <h3 className="font-bold text-[#1B5E20] mb-2">North Carolina</h3>
            <p className="text-sm text-slate-600">Charlotte, Raleigh, Asheville, and surrounding luxury enclaves.</p>
          </div>
          <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm">
            <h3 className="font-bold text-[#1B5E20] mb-2">South Carolina</h3>
            <p className="text-sm text-slate-600">Charleston, Greenville, Hilton Head Island.</p>
          </div>
          <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm">
            <h3 className="font-bold text-[#1B5E20] mb-2">Georgia</h3>
            <p className="text-sm text-slate-600">Atlanta Metro, Savannah, Alpharetta.</p>
          </div>
          <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm">
            <h3 className="font-bold text-[#1B5E20] mb-2">Florida & Virginia</h3>
            <p className="text-sm text-slate-600">Select premium coastal and historic districts.</p>
          </div>
        </div>
      </InnerContent>
      <CTACloser />
    </main>
  );
}
