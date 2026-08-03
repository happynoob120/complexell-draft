import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  TbArrowLeft,
  TbEye,
  TbBookmark,
  TbShare3,
  TbHeart,
  TbClock,
} from "react-icons/tb";

import ArticleContent from "../components/articles/ArticleContent";
import { ShareArticle } from "../utils/ShareArticle.js";
import { getArticleBySlug } from "../api/article.api";

function Article() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleBySlug(slug);

        setArticle(response.article);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#11140D] flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#11140D] flex items-center justify-center text-white">
        Article not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#11140D] text-[#E4E6DE] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] bg-[#6B8A4A]/10 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Back */}
        <div className="pt-8">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-[#72786E] hover:text-white transition font-mono text-sm"
          >
            <TbArrowLeft size={18} />
            Back to Articles
          </Link>
        </div>

        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_220px] gap-16 items-end">
            {/* Left */}
            <div>
              <h1
                className="
                  font-sans
                  font-black
                  tracking-[-0.05em]
                  leading-[0.95]
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  max-w-5xl
                "
              >
                {article.article_title}
              </h1>

              <p
                className="
                  mt-8
                  text-lg
                  leading-9
                  text-[#9EA59A]
                  max-w-2xl
                "
              >
                {article.article_context}
              </p>

              {/* Metadata */}
              <div className="mt-12 flex flex-wrap gap-10 font-mono text-sm">
                <div>
                  <p className="text-[#697062] uppercase tracking-widest text-xs">
                    Author
                  </p>

                  <p className="mt-2 text-[#E4E6DE]">
                    {article.author.username}
                  </p>
                </div>

                <div>
                  <p className="text-[#697062] uppercase tracking-widest text-xs">
                    Published
                  </p>

                  <p className="mt-2 text-[#E4E6DE]">
                    {new Date(article.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Views */}
            <div className="lg:text-right">
              <p
                className="
                  font-sans
                  font-black
                  text-6xl
                  lg:text-7xl
                  tracking-tight
                  text-white
                "
              >
                {article.views}
              </p>

              <div className="mt-2 flex lg:justify-end items-center gap-2 text-[#80877B] font-mono uppercase tracking-[0.3em] text-xs">
                <TbEye size={16} />
                Views
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#232820]" />

        {/* Content */}
        <div className="relative flex justify-center">
          {/* Floating Buttons */}
          <aside
            className="
              hidden
              xl:flex
              flex-col
              gap-4
              sticky
              top-28
              self-start
              mr-10
              pt-20
            "
          >
            {[TbShare3].map((Icon, index) => (
              <button
                key={index}
                onClick={() => ShareArticle(article)}
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                border-[#232820]
                bg-[#171B12]
                hover:border-[#55664A]
                  hover:-translate-y-1
                  transition
                  flex
                  items-center
                  justify-center
                "
              >
                <Icon size={22} />
              </button>
            ))}
          </aside>

          {/* Article */}
          <article
            className="
              w-full
              max-w-4xl
              py-20
            "
          >
            <ArticleContent content={article.article_content} />
          </article>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div
        className="
          xl:hidden
          fixed
          bottom-5
          left-1/2
          -translate-x-1/2
          flex
          gap-3
          bg-[#171B12]/90
          backdrop-blur
          border
          border-[#232820]
          rounded-full
          px-4
          py-3
        "
      >
        <button
          onClick={() => {
            ShareArticle(article);
          }}
        >
          <TbShare3 size={22} />
        </button>
      </div>
    </main>
  );
}

export default Article;
