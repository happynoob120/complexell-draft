import { Link } from "react-router-dom";
import { TbBug, TbSparkles } from "react-icons/tb";

function FinalCTA() {
  return (
    <section className="relative px-6 py-20 max-w-7xl mx-auto font-mono text-center">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[min(820px,94vw)] -translate-x-1/2 rounded-full bg-[#9FE6A0]/12 blur-[150px]"
        aria-hidden="true"
      />

      <h2 className="relative text-[#E4E6DE] text-2xl md:text-3xl font-medium tracking-tight mb-3">
        stop debugging{" "}
        <span className="bg-gradient-to-r from-[#9FE6A0] to-[#6FD3C7] bg-clip-text text-transparent">alone</span>
      </h2>
      <p className="relative text-[#8A9180] text-sm mb-8 max-w-md mx-auto">
        let the ai debugger read your snippet and hand back corrected code, or create a free account to keep every fix you find.
      </p>

      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/codedebug"
          className="home-cta inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-6 py-3 rounded hover:opacity-95"
        >
          <TbBug size={16} />
          try the debugger
        </Link>

        <Link
          to="/signup"
          className="home-cta inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-[#232820] text-[#C4CCC0] hover:text-[#E4E6DE] hover:border-[#9FE6A0]/40 text-sm font-medium px-6 py-3 rounded"
        >
          <TbSparkles size={15} />
          create free account
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;