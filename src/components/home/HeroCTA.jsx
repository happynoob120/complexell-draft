import { Link } from "react-router-dom";
import { TbArrowRight, TbBug, TbSparkles } from "react-icons/tb";

function HeroCTA() {
  return (
    <section className="relative px-6 pt-24 pb-16 max-w-7xl mx-auto font-mono text-center">
      <div className="home-glow-ring" aria-hidden="true" />

      <span className="home-fade-up inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9FE6A0] border border-[#9FE6A0]/25 bg-[#9FE6A0]/5 rounded-full px-3 py-1.5 mb-6">
        <TbSparkles size={13} className="animate-pulse" />
        new · ai debugger for developers
      </span>

      <h1
        className="home-fade-up text-[#E4E6DE] text-3xl md:text-5xl font-medium tracking-tight mb-5 leading-tight"
        style={{ animationDelay: "120ms" }}
      >
        stop losing hours to{" "}
        <span className="bg-gradient-to-r from-[#9FE6A0] via-[#7FD9A8] to-[#9FE6A0] bg-clip-text text-transparent">
          one error.
        </span>
      </h1>

      <p
        className="home-fade-up text-[#8A9180] text-base md:text-lg mb-8 max-w-xl mx-auto"
        style={{ animationDelay: "220ms" }}
      >
        paste the code that keeps breaking and get it diagnosed and fixed in seconds — or dig into curated fixes for your exact
        stack.
      </p>

      <div className="home-fade-up flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: "320ms" }}>
        <Link
          to="/codedebug"
          className="home-cta inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-6 py-3 rounded hover:opacity-95"
        >
          <TbBug size={16} />
          open ai debugger
          <TbArrowRight size={15} />
        </Link>

        <Link
          to="/articles"
          className="home-cta inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-[#232820] text-[#C4CCC0] hover:text-[#E4E6DE] hover:border-[#9FE6A0]/40 text-sm font-medium px-6 py-3 rounded"
        >
          browse fixes
        </Link>
      </div>

      <p className="home-fade-up text-[#5C6358] text-xs mt-4" style={{ animationDelay: "420ms" }}>
        no install · runs in your browser · bring your own gemini key
      </p>
    </section>
  );
}

export default HeroCTA;