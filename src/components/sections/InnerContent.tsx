

interface InnerContentProps {
  children: React.ReactNode;
}

export function InnerContent({ children }: InnerContentProps) {
  return (
    <section className="py-24 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6 font-sans text-lg leading-relaxed text-slate-700">
        <div className="flex flex-col gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
