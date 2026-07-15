import { Link } from "react-router-dom";
import { TbClock, TbEye } from "react-icons/tb";

function ArticleCard() {
  return (
    <Link
      to={`/`}
      className="block bg-[#15180F] border border-[#232820] rounded-md p-5 hover:border-[#2F362A] transition-colors font-mono"
    >
      <h3 className="text-[#E4E6DE] text-base font-medium mb-2 line-clamp-2">
        Article Title
      </h3>

      <p className="text-[#8A9180] text-sm leading-relaxed mb-4 line-clamp-2">
        This is a brief description of the article. It provides a summary of the
        content and entices readers to click and read more. The description is
        concise and informative, giving readers an idea of what to expect in the
        article.
      </p>

      <div className="flex items-center gap-4 text-xs text-[#5C6358]">
        <span>21/6/2026</span>
        <span className="flex items-center gap-1">
          <TbClock size={13} />
          4:21pm
        </span>
        <span className="flex items-center gap-1">
          <TbEye size={13} />
          5,000
        </span>
      </div>
    </Link>
  );
}

export default ArticleCard;
