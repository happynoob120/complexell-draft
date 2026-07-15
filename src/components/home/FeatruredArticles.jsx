import { Link } from "react-router-dom";
import { TbClock, TbEye } from "react-icons/tb";
import ArticleCard from "../layout/ArticleCard.jsx";

function FeaturedArticles() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          Featured <span className="text-[#9FE6A0]">Articles</span>
        </h2>
      </div>
 
      <div className="bg-[#0D0F0C] grid grid-cols-1 md:grid-cols-3 gap-5">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
}

export default FeaturedArticles;
