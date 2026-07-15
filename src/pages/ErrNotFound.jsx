import { Link } from "react-router-dom";
import { TbArrowLeft, TbBug, TbTerminal2 } from "react-icons/tb";

function ErrNotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 font-mono">
      <div className="flex items-center gap-3 mb-6">
        <TbBug size={32} className="text-[#9FE6A0]" />
        <span className="text-[#3A4036] text-3xl">/</span>
        <TbTerminal2 size={32} className="text-[#9FE6A0]" />
      </div>

      <span className="text-[#9FE6A0] text-sm mb-4">error 404</span>

      <h1 className="text-[#E4E6DE] text-3xl md:text-4xl font-medium tracking-tight mb-3">
        page not found
      </h1>

      <p className="text-[#8A9180] text-sm mb-2 max-w-sm">
        this route threw an unhandled exception. we looked everywhere — even checked Stack Overflow.
      </p>
      <p className="text-[#5C6358] text-xs mb-8 max-w-sm">
        (the answer was, predictably, marked as duplicate.)
      </p>

      <div className="bg-[#15180F] border border-[#232820] rounded-md px-4 py-2 mb-8 text-xs text-[#5C6358]">
        <span className="text-[#9FE6A0]">$</span> cd /home {">"} <span className="text-[#E4E6DE]">404: directory does not exist</span>
      </div>

      <Link
        to="/"
        className="flex items-center gap-2 bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
      >
        <TbArrowLeft size={16} />
        back to home
      </Link>
    </section>
  );
}

export default ErrNotFound;