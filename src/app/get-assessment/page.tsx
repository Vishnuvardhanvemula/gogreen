import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";

export default function GetAssessmentPage() {
  return (
    <main>
      <InnerHero 
        title="Request Assessment" 
        subtitle="Initiate your solar feasibility study with our engineering team."
      />
      <InnerContent>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-slate-100 shadow-sm rounded-sm">
          <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mb-6">Project Details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#FAFAFA] border border-slate-200 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#FAFAFA] border border-slate-200 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 bg-[#FAFAFA] border border-slate-200 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Property Address</label>
              <input type="text" className="w-full px-4 py-3 bg-[#FAFAFA] border border-slate-200 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Project Scope</label>
              <select className="w-full px-4 py-3 bg-[#FAFAFA] border border-slate-200 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                <option>New Solar Installation (EPC)</option>
                <option>System Decommissioning</option>
                <option>Removal & Repower</option>
                <option>Other Engineering Inquiry</option>
              </select>
            </div>

            <button type="button" className="w-full py-4 bg-[#1B5E20] text-white font-bold tracking-widest uppercase text-sm hover:bg-[#2E7D32] transition-colors mt-4">
              Submit Request
            </button>
            <p className="text-center text-xs text-slate-500 mt-4 italic">
              Our engineering team reviews all inquiries and responds within 48 hours.
            </p>
          </form>
        </div>
      </InnerContent>
    </main>
  );
}
