import ArticleCard from "../components/layout/ArticleCard.jsx";
import ArticleSearchBar from "../components/articles/Articlesearchbar.jsx";
import FeaturedArticle from "../components/articles/FeaturedArticle.jsx";
import ArticlesFeed from "../components/articles/ArticlesFeed.jsx";
import { useEffect, useState, useCallback } from "react";
import { getArticles, getFeaturedArticle } from "../api/article.api";
import ArticleCardSkeleton from "../components/articles/ArticleCardSkeleton.jsx";
import FeaturedArticleSkeleton from "../components/articles/FeaturedArticleSkeleton";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [query, setQuery] = useState("");
  const hasActiveSearch = query.trim().length > 0;

  useEffect(() => {
    const fetchFeatured = async () => {
      if (hasActiveSearch) {
        return;
      }

      try {
        const featuredResponse = await getFeaturedArticle();
        setFeaturedArticle(featuredResponse.article);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeatured();
  }, [hasActiveSearch]);

  const fetchPage = useCallback(
    async (p = 1, q = "", append = false) => {
      setLoading(true);
      try {
        const response = await getArticles(p, 6, q);

        if (append) {
          setArticles((prev) => [...prev, ...response.articles]);
        } else {
          setArticles(response.articles);
        }

        setHasMore(response.hasMore);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    // When query changes, reset to page 1 and fetch
    setPage(1);
    fetchPage(1, query, false);
  }, [query, fetchPage]);
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-8 mb-14">
        <ArticleSearchBar onSearch={setQuery} initialQuery={query} />
      </div>
      {!hasActiveSearch && (
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 mt-8 mb-14">
          {loading ? (
            <FeaturedArticleSkeleton />
          ) : (
            <FeaturedArticle FeaturedArticle={featuredArticle} />
          )}
        </section>
      )}

      <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#73C66C]">
              Explore
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
              Articles
            </h1>

            <p className="mt-2 text-[#7E8577]">
              Engineering, AI, Robotics and Software Development.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-5">
            {[...Array(6)].map((_, index) => (
              <ArticleCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <ArticlesFeed articles={articles} loading={loading} hasMore={hasMore} onLoadMore={async () => {
            const next = page + 1;
            setPage(next);
            await fetchPage(next, query, true);
          }} />
        )}
      </section>
    </>
  );
}

export default Articles;
