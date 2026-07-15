import { TbFilter, TbStack2, TbRefresh } from "react-icons/tb";

function WhyComplexell() {
  return (
    <section className="bg-[#0D0F0C] px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          why <span className="text-[#9FE6A0]">complexell</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <TbFilter size={20} className="text-[#9FE6A0]" />
            <span className="text-[#3A4036] text-xs">01</span>
          </div>
          <h3 className="text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            curated, not crowdsourced
          </h3>
          <p className="text-[#8A9180] text-sm leading-relaxed pl-3">
            Every fix is written and verified, not buried under years of conflicting answers and dead threads.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <TbStack2 size={20} className="text-[#9FE6A0]" />
            <span className="text-[#3A4036] text-xs">02</span>
          </div>
          <h3 className="text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            stack-specific
          </h3>
          <p className="text-[#8A9180] text-sm leading-relaxed pl-3">
            Solutions organized by your exact stack, so you're not wading through fixes for a setup you don't use.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <TbRefresh size={20} className="text-[#9FE6A0]" />
            <span className="text-[#3A4036] text-xs">03</span>
          </div>
          <h3 className="text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            always current
          </h3>
          <p className="text-[#8A9180] text-sm leading-relaxed pl-3">
            Articles get updated as libraries change, instead of rotting like a six-year-old forum post.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyComplexell;