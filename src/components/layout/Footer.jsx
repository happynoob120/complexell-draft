import { Link } from "react-router-dom";
import { TbBrandX, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import logoIcon from "../../assets/logo-icon.png";

function Footer() {
  return (
    <footer className="bg-[#0D0F0C] border-t border-[#1F231C] font-mono">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={logoIcon} alt="Complexell logo" className="h-7 w-7" />
              <span className="flex items-baseline gap-0.5">
                <span className="text-[#9FE6A0] text-lg font-medium">complexell</span>
                <span className="text-[#3A4036] text-sm">.dev</span>
              </span>
            </Link>
            <p className="text-[#8A9180] text-sm leading-relaxed max-w-xs">
              curated, stack-specific fixes for developers who'd rather ship than search.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[#E4E6DE] text-xs font-medium mb-4">product</h4>
            <ul className="space-y-2.5">
              <li><Link to="/articles" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">articles</Link></li>
              <li><Link to="/pricing" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">pricing</Link></li>
              <li><Link to="/assistant" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">ai assistant</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#E4E6DE] text-xs font-medium mb-4">company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">about</Link></li>
              <li><Link to="/contact" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#E4E6DE] text-xs font-medium mb-4">legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">privacy</Link></li>
              <li><Link to="/terms" className="text-[#8A9180] hover:text-[#E4E6DE] text-sm transition-colors">terms</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1A1D16]">
          <span className="text-[#5C6358] text-xs">
            © 2026 complexell. all rights reserved.
          </span>

          <div className="flex items-center gap-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-[#8A9180] hover:text-[#9FE6A0] transition-colors">
              <TbBrandX size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8A9180] hover:text-[#9FE6A0] transition-colors">
              <TbBrandGithub size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8A9180] hover:text-[#9FE6A0] transition-colors">
              <TbBrandLinkedin size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;