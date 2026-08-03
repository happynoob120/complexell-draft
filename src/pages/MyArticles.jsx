import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbPlus } from "react-icons/tb";

import { getMyArticles, deleteArticle } from "../api/article.api";
import MyArticleCard from "../components/articles/MyArticleCard";

function MyArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getMyArticles();
        setArticles(response.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);

      setArticles((prev) => prev.filter((article) => article._id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete article.");
    }
  };

  return (
    <main className="min-h-screen bg-[#11140D] text-[#E4E6DE] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] bg-[#6B8A4A]/10 blur-[180px] pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="text-[#8BE17B] uppercase tracking-[0.3em] text-xs font-mono">
              Dashboard
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-white">
              My Articles
            </h1>

            <p className="mt-5 max-w-2xl text-[#8A9180] text-lg leading-8">
              Manage your published articles, update content or remove articles
              whenever you need.
            </p>
          </div>

          <Link
            to="/articles/new"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#DCE6CF]
              px-6
              py-3
              font-semibold
              text-[#11140D]
              hover:bg-white
              transition
            "
          >
            <TbPlus size={20} />
            New Article
          </Link>
        </div>

        {/* Articles */}
        {articles.length === 0 ? (
          <div className="py-28 text-center border border-dashed border-[#2A3025] rounded-2xl">
            <h2 className="text-2xl font-semibold text-white">
              No articles yet
            </h2>

            <p className="mt-3 text-[#7E857A]">
              Publish your first article to see it here.
            </p>

            <Link
              to="/articles/new"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                rounded-xl
                bg-[#DCE6CF]
                px-6
                py-3
                font-semibold
                text-[#11140D]
                hover:bg-white
                transition
              "
            >
              <TbPlus size={20} />
              Write Article
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {articles.map((article) => (
              <MyArticleCard
                key={article._id}
                article={article}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default MyArticles;
