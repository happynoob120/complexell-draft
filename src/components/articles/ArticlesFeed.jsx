import ArticleCard from "../layout/ArticleCard";
import InfiniteLoader from "./InfiniteLoader";

function ArticlesFeed({
  articles,
  loading,
  hasMore,
  onLoadMore,
}) {
  return (
    <>
      <div
        className="
          grid
          [grid-template-columns:repeat(auto-fit,minmax(520px,1fr))]
          gap-8
          max-w-7xl
          mx-auto
        "
      >
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            article={article}
          />
        ))}
      </div>

      <InfiniteLoader
        loading={loading}
        hasMore={hasMore}
        onLoadMore={onLoadMore}
      />
    </>
  );
}

export default ArticlesFeed;