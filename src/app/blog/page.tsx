import { InnerHero } from "@/components/sections/InnerHero";
import { InnerContent } from "@/components/sections/InnerContent";
import { CTACloser } from "@/components/sections/7-CTACloser";

export default function BlogPage() {
  return (
    <main>
      <InnerHero 
        title="Journal & Insights" 
        subtitle="The latest advancements in solar engineering, grid integration, and sustainable luxury."
      />
      <InnerContent>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 mb-6 rounded-full bg-amber-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-heading font-medium text-[#1A1A1A] mb-2">Publishing Soon</h2>
          <p className="text-slate-600 max-w-md">
            Our engineering team is currently compiling extensive case studies and technical insights. Check back soon for our first publication.
          </p>
        </div>
      </InnerContent>
      <CTACloser />
    </main>
  );
}
