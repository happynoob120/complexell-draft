import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TbFileText,
  TbTag,
  TbInfoCircle,
  TbSearch,
  TbMenu2,
  TbX,
  TbUserCircle,
  TbLogout,
} from "react-icons/tb";

import logoIcon from "../../assets/logo-icon.png";
import { getCurrentUser, logout } from "../../api/auth.api";

function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetchCurrentUser();

    const updateUser = () => {
      fetchCurrentUser();
    };

    window.addEventListener("authChanged", updateUser);

    return () => {
      window.removeEventListener("authChanged", updateUser);
    };
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data.user);
    } catch {
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();

      setUser(null);
      setShowMenu(false);
      setIsOpen(false);

      window.dispatchEvent(new Event("authChanged"));

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0D0F0C] border-b border-[#1F231C] font-mono">
      {/* Top */}
      <div className="relative flex items-center justify-between px-5 md:px-6 pt-5 pb-3.5">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <img
            src={logoIcon}
            alt="Complexell"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full"
          />

          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[#9FE6A0] text-base md:text-lg font-medium">complexell</span>
              <span className="text-[#3A4036] text-xs md:text-sm">.souel.in</span>
            </div>
            <span className="text-[#DCE6CF] font-semibold uppercase tracking-[0.22em] text-[11px] md:text-xs mt-0.5">an enterprise of Souel</span>
          </div>
        </Link>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div
              className="relative pb-2"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#232820] hover:border-[#9FE6A0] transition">
                <TbUserCircle size={22} className="text-[#9FE6A0]" />

                <span className="text-[#E4E6DE] text-sm">{user.username}</span>
              </button>

              {showMenu && (
                <div className="absolute right-0 top-full w-44 rounded-lg overflow-hidden border border-[#232820] bg-[#15180F] shadow-xl z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-3 text-[#E4E6DE] hover:bg-[#232820] transition"
                  >
                    <TbLogout />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="text-[#8A9180] hover:text-[#E4E6DE]">
                login
              </Link>

              <Link
                to="/signup"
                className="bg-[#9FE6A0] text-[#0D0F0C] px-4 py-1.5 rounded text-sm font-medium hover:opacity-90"
              >
                signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E4E6DE]"
        >
          {isOpen ? <TbX size={22} /> : <TbMenu2 size={22} />}
        </button>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-6 py-2.5 border-t border-[#1A1D16]">
        <div className="flex gap-5 text-sm">
          <Link
            to="/articles"
            className="flex items-center gap-1.5 text-[#E4E6DE]"
          >
            <TbFileText size={14} />
            articles
          </Link>

          <Link
            to="/pricing"
            className="flex items-center gap-1.5 text-[#8A9180] hover:text-[#E4E6DE]"
          >
            <TbTag size={14} />
            pricing
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-1.5 text-[#8A9180] hover:text-[#E4E6DE]"
          >
            <TbInfoCircle size={14} />
            about
          </Link>
        </div>
      </div>{" "}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#1A1D16] bg-[#0D0F0C]">
          <div className="px-5 py-4 flex flex-col gap-2">
            {/* Search */}

            {/* Navigation */}
            <Link
              to="/articles"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-2 py-3 rounded text-[#E4E6DE] hover:bg-[#15180F]"
            >
              <TbFileText size={18} />
              <span>Articles</span>
            </Link>

            <Link
              to="/pricing"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-2 py-3 rounded text-[#E4E6DE] hover:bg-[#15180F]"
            >
              <TbTag size={18} />
              <span>Pricing</span>
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-2 py-3 rounded text-[#E4E6DE] hover:bg-[#15180F]"
            >
              <TbInfoCircle size={18} />
              <span>About</span>
            </Link>

            <div className="border-t border-[#232820] mt-3 pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <TbUserCircle size={32} className="text-[#9FE6A0]" />

                    <div>
                      <p className="text-[#E4E6DE] font-medium">
                        {user.username}
                      </p>

                      <p className="text-[#6F756A] text-xs">{user.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-md py-3 transition"
                  >
                    <TbLogout size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="text-center border border-[#232820] rounded-md py-3 text-[#E4E6DE] hover:border-[#9FE6A0]"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className="text-center bg-[#9FE6A0] text-[#0D0F0C] rounded-md py-3 font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
