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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
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