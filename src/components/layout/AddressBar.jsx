import { Link, useLocation } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";

function AddressBar({ overrideLastLabel }) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, " ");
    return { label, path };
  });

  return (
    <div className="bg-[#0D0F0C] border-b border-[#1A1D16] px-6 py-2.5 font-mono">
      <div className="flex items-center gap-2 text-xs">
        <Link to="/" className="text-[#8A9180] hover:text-[#9FE6A0] transition-colors">
          home
        </Link>

        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          const label = isLast && overrideLastLabel ? overrideLastLabel : crumb.label;

          return (
            <span key={crumb.path} className="flex items-center gap-2">
              <TbChevronRight size={12} className="text-[#3A4036]" />

              {isLast ? (
                <span className="text-[#E4E6DE]">{label}</span>
              ) : (
                <Link to={crumb.path} className="text-[#8A9180] hover:text-[#9FE6A0] transition-colors">
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default AddressBar;