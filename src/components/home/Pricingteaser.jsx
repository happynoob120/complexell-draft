import { TbCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

function PricingTeaser() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          simple <span className="text-[#9FE6A0]">pricing</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">

        {/* Free tier */}
        <div className="bg-[#15180F] border border-[#232820] rounded-md p-6">
          <h3 className="text-[#E4E6DE] text-base font-medium mb-1">free</h3>
          <p className="text-[#8A9180] text-sm mb-5">for getting unstuck</p>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-[#E4E6DE] text-3xl font-medium">$0</span>
            <span className="text-[#5C6358] text-sm">/month</span>
          </div>

          <ul className="space-y-2.5 mb-6">
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              unlimited article reads
            </li>
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              basic search
            </li>
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              5 saved articles
            </li>
          </ul>

          <Link
            to="/signup"
            className="block text-center bg-[#1C1F26] border border-[#232820] text-[#E4E6DE] text-sm font-medium py-2 rounded hover:border-[#2F362A] transition-colors"
          >
            get started
          </Link>
        </div>

        {/* Pro tier */}
        <div className="bg-[#15180F] border-2 border-[#9FE6A0] rounded-md p-6 relative">
          <span className="absolute -top-3 left-6 bg-[#9FE6A0] text-[#0D0F0C] text-[10px] font-medium px-2 py-0.5 rounded">
            most popular
          </span>

          <h3 className="text-[#E4E6DE] text-base font-medium mb-1">pro</h3>
          <p className="text-[#8A9180] text-sm mb-5">for daily debugging</p>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-[#E4E6DE] text-3xl font-medium">$5</span>
            <span className="text-[#5C6358] text-sm">/month</span>
          </div>

          <ul className="space-y-2.5 mb-6">
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              everything in free
            </li>
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              unlimited saved articles
            </li>
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              priority new fixes
            </li>
            <li className="flex items-center gap-2 text-sm text-[#8A9180]">
              <TbCheck size={14} className="text-[#9FE6A0]" />
              early AI assistant access
            </li>
          </ul>

          <Link
            to="/signup"
            className="block text-center bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium py-2 rounded hover:opacity-90 transition-opacity"
          >
            get started
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PricingTeaser;