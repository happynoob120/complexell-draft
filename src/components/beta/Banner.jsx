import { TbRocket } from "react-icons/tb";

function BetaBanner() {
  return (
    <div className="w-full bg-[#15180F] border-b border-[#232820] px-6 py-2.5 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-[#8A9180]">
        <TbRocket size={13} className="text-[#9FE6A0]" />
        <span>
          complexell is currently in{" "}
          <span className="text-[#9FE6A0]">beta</span> — all features are free
          while we build. no card required.
        </span>
      </div>
    </div>
  );
}

export default BetaBanner;