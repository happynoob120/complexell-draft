import AddressBar from "../components/layout/AddressBar.jsx";
import ArticleCard from "../components/layout/ArticleCard.jsx";
import ArticleSearchBar from "../components/articles/Articlesearchbar.jsx";
import Button from "../components/articles/ArticleButton.jsx";
import FeaturedArticle from "../components/articles/FeaturedArticle.jsx";
import ArticlesFeed from "../components/articles/ArticlesFeed.jsx";
import { useEffect, useState } from "react";
import { getArticles, getFeaturedArticle } from "../api/article.api";
import ArticleCardSkeleton from "../components/articles/ArticleCardSkeleton.jsx";
import FeaturedArticleSkeleton from "../components/articles/FeaturedArticleSkeleton";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        const featuredResponse = await getFeaturedArticle();
        setArticles(response.articles);
        setFeaturedArticle(featuredResponse.article);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-8 mb-14">
        <ArticleSearchBar />
      </div>
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 mt-8 mb-14">
        {loading ? (
          <FeaturedArticleSkeleton />
        ) : (
          <FeaturedArticle FeaturedArticle={featuredArticle} />
        )}
      </section>

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
          <ArticlesFeed articles={articles} />
        )}
      </section>
    </>
  );
}

export default Articles;
