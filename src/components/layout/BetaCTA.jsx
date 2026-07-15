import { TbRocket } from "react-icons/tb";
import { Link } from "react-router-dom";

function BetaCTA() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="bg-[#15180F] border border-[#232820] rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-start gap-4">
          <TbRocket size={24} className="text-[#9FE6A0] mt-0.5 shrink-0" />
          <div>
            <h3 className="text-[#E4E6DE] text-base font-medium mb-1">
              we're in beta — everything is free for now.
            </h3>
            <p className="text-[#8A9180] text-sm leading-relaxed max-w-lg">
              pricing hasn't launched yet. while we're in beta, all features are completely free. no card required, no hidden limits. enjoy it while it lasts.
            </p>
          </div>
        </div>

        <Link
          to="/signup"
          className="shrink-0 bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
        >
          join for free
        </Link>

      </div>
    </section>
  );
}

export default BetaCTA;