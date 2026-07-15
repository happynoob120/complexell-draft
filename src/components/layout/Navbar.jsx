import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TbFileText,
  TbTag,
  TbInfoCircle,
  TbSearch,
  TbMenu2,
  TbX,
} from "react-icons/tb";
import logoIcon from "../../assets/logo-icon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0D0F0C] border-b border-[#1F231C] font-mono">
      {/* Top tier — text (left) + centered icon + auth (right) */}
      <div className="relative flex items-center justify-between px-6 pt-5 pb-3.5">
        <Link to="/" className="flex items-baseline gap-0.5">
          <span className="text-[#9FE6A0] text-lg font-medium">complexell</span>
          <span className="text-[#3A4036] text-sm">.souel.in</span>
        </Link>

        {/* Centered icon — absolutely positioned so it stays centered regardless of side content width */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <img src={logoIcon} alt="Complexell logo" className="h-10 w-10 rounded-4xl" />
        </Link>

        <div className="hidden md:flex items-center gap-3.5">
          <Link
            to="/login"
            className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors"
          >
            login
          </Link>
          <Link
            to="/signup"
            className="bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-4 py-1.5 rounded hover:opacity-90 transition-opacity"
          >
            signup
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E4E6DE]"
          aria-label="Toggle menu"
        >
          {isOpen ? <TbX size={20} /> : <TbMenu2 size={20} />}
        </button>
      </div>

      {/* Bottom tier — nav links + search (desktop) */}
      <div className="hidden md:flex items-center justify-between px-6 py-2.5 border-t border-[#1A1D16]">
        <div className="flex items-center gap-5 text-sm">
          <Link
            to="/articles"
            className="flex items-center gap-1.5 text-[#E4E6DE]"
          >
            <TbFileText size={14} />
            articles
          </Link>
          <Link
            to="/pricing"
            className="flex items-center gap-1.5 text-[#8A9180] hover:text-[#E4E6DE] transition-colors"
          >
            <TbTag size={14} />
            pricing
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1.5 text-[#8A9180] hover:text-[#E4E6DE] transition-colors"
          >
            <TbInfoCircle size={14} />
            about
          </Link>
        </div>

        <button className="flex items-center gap-2 bg-[#15180F] border border-[#232820] rounded px-2.5 py-1.5 text-xs text-[#5C6358] hover:border-[#2F362A] transition-colors">
          <TbSearch size={14} />
          <span>search errors</span>
          <span className="ml-2 border border-[#2A2F25] rounded text-[10px] px-1.5 py-0.5 text-[#4A5042]">
            ⌘K
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 border-t border-[#1A1D16] pt-3 text-sm">
          <button className="flex items-center gap-2 bg-[#15180F] border border-[#232820] rounded px-2.5 py-2 text-xs text-[#5C6358] mb-3">
            <TbSearch size={14} />
            <span>search errors</span>
          </button>

          <Link
            to="/articles"
            className="flex items-center gap-2 text-[#E4E6DE] py-2"
          >
            <TbFileText size={14} />
            articles
          </Link>
          <Link
            to="/pricing"
            className="flex items-center gap-2 text-[#8A9180] py-2"
          >
            <TbTag size={14} />
            pricing
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-[#8A9180] py-2"
          >
            <TbInfoCircle size={14} />
            about
          </Link>

          <div className="flex items-center gap-3 pt-3 mt-1 border-t border-[#1A1D16]">
            <Link to="/login" className="text-[#8A9180] text-sm">
              login
            </Link>
            <Link
              to="/signup"
              className="bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-4 py-1.5 rounded"
            >
              signup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;