import { Link } from "react-router-dom";
import { TbPencilPlus, TbSearch, TbArticle } from "react-icons/tb";

function ArticleSearchBar() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-14">
      {/* Search */}

      <div
        className="
          flex-1

          flex
          items-center
          gap-3

          rounded-xl

          border
          border-[#232820]

          bg-[#15180F]

          px-5
          py-4

          transition-all
          duration-300

          focus-within:border-[#8BE17B]
          focus-within:shadow-[0_0_20px_rgba(139,225,123,.08)]
        "
      >
        <TbSearch size={20} className="text-[#5C6358]" />

        <input
          type="text"
          placeholder="Search articles..."
          className="
            flex-1

            bg-transparent

            text-[#E4E6DE]

            placeholder-[#5C6358]

            outline-none
          "
        />
      </div>

      {/* Write Article */}

      <Link
        to="/articles/new"
        className="
          group

          flex
          items-center
          justify-center

          gap-3

          rounded-xl

          border
          border-[#2A3025]

          bg-[#171B12]

          px-6
          py-4

          transition-all
          duration-300

          hover:border-[#8BE17B]
          hover:bg-[#1B2016]
          hover:shadow-[0_0_20px_rgba(139,225,123,.12)]
        "
      >
        <div
          className="
            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-lg

            bg-[#8BE17B]/10

            text-[#8BE17B]

            transition-transform

            duration-300

            group-hover:rotate-12
          "
        >
          <TbPencilPlus size={20} />
        </div>

        <div className="text-left">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#7F8878]">
            Creator
          </p>

          <p className="font-semibold text-[#E4E6DE]">Write Article</p>
        </div>
      </Link>
      <Link
        to="/articles/mine"
        className="
    flex
    items-center
    gap-2
    px-5
    py-2.5
    rounded-xl
    border
    border-[#2A3025]
    bg-[#171B12]
    text-[#D8DDD2]
    hover:border-[#6D8B4E]
    hover:text-white
    transition
    font-medium
  "
      >
        <TbArticle size={18} />
        My Articles
      </Link>
    </div>
  );
}

export default ArticleSearchBar;
