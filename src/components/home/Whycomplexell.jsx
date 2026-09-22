import { TbFilter, TbStack2, TbRefresh } from "react-icons/tb";

function WhyComplexell() {
  return (
    <section className="relative px-6 py-16 max-w-7xl mx-auto font-mono">
      <div
        className="pointer-events-none absolute left-1/2 top-4 h-64 w-[min(760px,90vw)] -translate-x-1/2 rounded-full bg-[#6B8A4A]/12 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          why <span className="text-[#9FE6A0]">complexell</span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="home-card group bg-[#0F130F]/80 border border-[#1F231C] rounded-md p-6 hover:border-[#9FE6A0]/40">
          <div className="pointer-events-none absolute -top-24 -right-16 h-44 w-44 rounded-full bg-[#9FE6A0]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex items-center gap-3 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded border border-[#232820] bg-[#15180F] text-[#9FE6A0]">
              <TbFilter size={18} />
            </span>
            <span className="text-[#3A4036] text-xs">01</span>
          </div>
          <h3 className="relative text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            curated, not crowdsourced
          </h3>
          <p className="relative text-[#8A9180] text-sm leading-relaxed pl-3">
            Every fix is written and verified, not buried under years of conflicting answers and dead threads.
          </p>
        </div>

        <div className="home-card group bg-[#0F130F]/80 border border-[#1F231C] rounded-md p-6 hover:border-[#9FE6A0]/40">
          <div className="pointer-events-none absolute -top-24 -right-16 h-44 w-44 rounded-full bg-[#9FE6A0]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex items-center gap-3 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded border border-[#232820] bg-[#15180F] text-[#9FE6A0]">
              <TbStack2 size={18} />
            </span>
            <span className="text-[#3A4036] text-xs">02</span>
          </div>
          <h3 className="relative text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            stack-specific
          </h3>
          <p className="relative text-[#8A9180] text-sm leading-relaxed pl-3">
            Solutions organized by your exact stack, so you're not wading through fixes for a setup you don't use.
          </p>
        </div>

        <div className="home-card group bg-[#0F130F]/80 border border-[#1F231C] rounded-md p-6 hover:border-[#9FE6A0]/40">
          <div className="pointer-events-none absolute -top-24 -right-16 h-44 w-44 rounded-full bg-[#9FE6A0]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex items-center gap-3 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded border border-[#232820] bg-[#15180F] text-[#9FE6A0]">
              <TbRefresh size={18} />
            </span>
            <span className="text-[#3A4036] text-xs">03</span>
          </div>
          <h3 className="relative text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            always current
          </h3>
          <p className="relative text-[#8A9180] text-sm leading-relaxed pl-3">
            Articles get updated as libraries change, instead of rotting like a six-year-old forum post.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyComplexell;