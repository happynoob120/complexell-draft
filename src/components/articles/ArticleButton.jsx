import { TbArrowRight, TbPencilPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

function ArticleButton() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 mb-14">
      <Link
        to="/articles/new"
        className="
    inline-flex
    items-center
    gap-4

    rounded-2xl

    bg-[#DCE6CF]

    px-7
    py-4

    text-[#11140D]

    font-semibold

    transition-all
    duration-300

    hover:scale-[1.03]
    hover:shadow-[0_15px_40px_rgba(139,225,123,.18)]
"
      >
        {/* Background Glow */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#11140D]/10">
          <TbPencilPlus size={24} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] opacity-70">
            Creator
          </p>

          <h3 className="text-lg font-bold">Write New Article</h3>
        </div>

        {/* Text */}
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.28em] text-[#7F8878]">
            Create
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            Write New Article
          </h3>

          <p className="mt-1 text-sm text-[#9CA494]">
            Share ideas, tutorials and research with the community.
          </p>
        </div>

        {/* Arrow */}
        <TbArrowRight
          size={26}
          className="
            ml-6

            text-[#8BE17B]

            transition-all

            group-hover:translate-x-2
          "
        />
      </Link>
    </div>
  );
}

export default ArticleButton;
