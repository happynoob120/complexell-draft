import { TbSearch } from "react-icons/tb";

function ArticleSearchBar() {
  return (
    <div className="flex items-center gap-3 bg-[#15180F] border border-[#232820] rounded-lg px-5 py-4 mb-10 font-mono focus-within:border-[#9FE6A0] transition-colors">
      <TbSearch size={20} className="text-[#5C6358]" />
      <input
        type="text"
        placeholder="search for an error, e.g. 'CORS blocked' or 'too many connections'"
        className="bg-transparent text-[#E4E6DE] text-sm placeholder-[#5C6358] flex-1 outline-none"
      />
    </div>
  );
}

export default ArticleSearchBar;