import AddressBar from "../components/layout/AddressBar.jsx";
import ArticleCard from "../components/layout/ArticleCard.jsx";
import ArticleSearchBar from "../components/articles/Articlesearchbar.jsx";
import Banner from "../components/beta/Banner.jsx";
function Articles() {
  return (
    <>
    
      <AddressBar />
      <Banner />
      <ArticleSearchBar />

      <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
        <div className="flex items-baseline gap-3 mb-10">
          <span className="text-[#9FE6A0] text-2xl">#</span>
          <h1 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
            all <span className="text-[#9FE6A0]">articles</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>
    </>
  );
}

export default Articles;