import { TbTarget, TbEye, TbCode } from "react-icons/tb";

function Mission() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          our <span className="text-[#9FE6A0]">mission</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <TbTarget size={20} className="text-[#9FE6A0]" />
            <span className="text-[#3A4036] text-xs">01</span>
          </div>
          <h3 className="text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            eliminate debugging frustration
          </h3>
          <p className="text-[#8A9180] text-sm leading-relaxed pl-3">
            no developer should lose hours to one error. we exist to make that two-hour search a two-minute fix.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <TbEye size={20} className="text-[#9FE6A0]" />
            <span className="text-[#3A4036] text-xs">02</span>
          </div>
          <h3 className="text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            keep knowledge current
          </h3>
          <p className="text-[#8A9180] text-sm leading-relaxed pl-3">
            the web is full of outdated answers. every fix on complexell is maintained, versioned, and accurate.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <TbCode size={20} className="text-[#9FE6A0]" />
            <span className="text-[#3A4036] text-xs">03</span>
          </div>
          <h3 className="text-[#E4E6DE] text-base font-medium mb-2 border-l-2 border-[#9FE6A0] pl-3">
            build for the developer first
          </h3>
          <p className="text-[#8A9180] text-sm leading-relaxed pl-3">
            no ads cluttering the answer, no paywalls blocking a fix. developers come first, everything else second.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;