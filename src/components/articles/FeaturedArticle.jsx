import { Link } from "react-router-dom";
import { TbArrowUpRight, TbClock, TbEye } from "react-icons/tb";

function FeaturedArticle({ FeaturedArticle }) {
  return (
    <Link
      to={`/articles/${FeaturedArticle.slug}`}
      className="
        group
        relative
        overflow-hidden
        block

        rounded-3xl

        border
        border-[#2A3025]

        bg-gradient-to-br
        from-[#171B12]
        to-[#12150E]

        p-10

        transition-all
        duration-300

        hover:border-[#8BE17B]
        hover:-translate-y-1
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-20
          right-0

          h-64
          w-64

          rounded-full

          bg-[#8BE17B]/10

          blur-3xl
        "
      />

      <span
        className="
          inline-flex
          items-center

          rounded-full

          border
          border-[#8BE17B]/20

          bg-[#8BE17B]/10

          px-4
          py-1.5

          text-xs

          uppercase

          tracking-[0.25em]

          text-[#8BE17B]
        "
      >
        Featured Article
      </span>

      <h2
        className="
          mt-6

          max-w-4xl

          text-4xl

          font-bold

          leading-tight

          text-white

          transition

          group-hover:text-[#DCE6CF]
        "
      >
        {FeaturedArticle.article_title}
      </h2>

      <p
        className="
          mt-5

          max-w-3xl

          text-lg

          leading-8

          text-[#A5AD9E]
        "
      >
        {FeaturedArticle.article_context}
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#79806F]">
        <span>By {FeaturedArticle.author?.username || "Unknown"}</span>

        <span className="flex items-center gap-2">
          <TbClock />
          {new Date(FeaturedArticle.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <span className="flex items-center gap-2">
          <TbEye />
          {FeaturedArticle.views}
        </span>
      </div>

      <div
        className="
          mt-10

          inline-flex

          items-center

          gap-2

          font-semibold

          text-[#DCE6CF]
        "
      >
        Read Article
        <TbArrowUpRight
          size={20}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </Link>
  );
}

export default FeaturedArticle;
