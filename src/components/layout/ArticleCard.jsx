import { Link } from "react-router-dom";
import { TbArrowRight, TbClock, TbEye } from "react-icons/tb";

function ArticleCard({ article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="
        group
        block

        rounded-2xl

        border
        border-transparent

        px-6
        py-7

        transition-all
        duration-300

        hover:bg-[#15180F]
        hover:border-[#2A3025]
      "
    >
      {/* Label */}

      <p className="text-[11px] uppercase tracking-[0.28em] text-[#73C66C]">
        Article
      </p>

      {/* Title */}

      <h3
        className="
          mt-4

          text-2xl

          font-bold

          leading-snug

          text-white

          transition-colors

          group-hover:text-[#DCE6CF]
        "
      >
        {article.article_title}
      </h3>

      {/* Context */}

      <p
        className="
          mt-4

          text-[15px]

          leading-8

          text-[#8C9285]

          line-clamp-3
        "
      >
        {article.article_context}
      </p>

      {/* Divider */}

      <div className="mt-7 h-px bg-[#232820]" />

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#D8DDD2]">
            {article.author?.username || "Unknown"}
          </p>

          <div className="mt-2 flex gap-5 text-sm text-[#6F7668]">
            <span className="flex items-center gap-1">
              <TbClock />
              {new Date(article.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>

            <span className="flex items-center gap-1">
              <TbEye />
              {article.views}
            </span>
          </div>
        </div>

        <TbArrowRight
          size={22}
          className="
            text-[#8BE17B]

            transition-transform

            duration-300

            group-hover:translate-x-2
          "
        />
      </div>
    </Link>
  );
}

export default ArticleCard;
