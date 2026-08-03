import { Link } from "react-router-dom";
import {
  TbEye,
  TbClock,
  TbPencil,
  TbTrash,
  TbExternalLink,
} from "react-icons/tb";

function MyArticleCard({ article, onDelete }) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[#232820]
        bg-[#15180F]
        p-7
        transition-all
        duration-300
        hover:border-[#3A4334]
        hover:-translate-y-1
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white leading-snug">
            {article.article_title}
          </h2>

          <p className="mt-4 text-[#8D9587] leading-7 line-clamp-2">
            {article.article_context}
          </p>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-[#2F3829]
            bg-[#171B12]
            px-3
            py-1
            text-[11px]
            uppercase
            tracking-[0.22em]
            text-[#8BE17B]
          "
        >
          Published
        </span>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-[#232820]" />

      {/* Footer */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6 text-sm text-[#777F74]">
          <span className="flex items-center gap-2">
            <TbClock size={17} />
            {new Date(article.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>

          <span className="flex items-center gap-2">
            <TbEye size={17} />
            {Intl.NumberFormat("en", {
              notation: "compact",
            }).format(article.views)}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to={`/articles/${article.slug}`}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#2B3226]
              bg-[#171B12]
              px-4
              py-2.5
              text-sm
              text-[#DCE6CF]
              hover:border-[#55664A]
              transition
            "
          >
            <TbExternalLink size={18} />
            Preview
          </Link>

          <Link
            to={`/articles/edit/${article._id}`}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-[#DCE6CF]
              px-4
              py-2.5
              text-sm
              font-semibold
              text-[#11140D]
              hover:bg-white
              transition
            "
          >
            <TbPencil size={18} />
            Edit
          </Link>

          <button
            onClick={() => onDelete(article._id)}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#5B2A2A]
              bg-[#241515]
              px-4
              py-2.5
              text-sm
              text-[#FF9A9A]
              hover:bg-[#321818]
              hover:border-[#7A3434]
              transition
            "
          >
            <TbTrash size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyArticleCard;