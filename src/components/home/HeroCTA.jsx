import { Link } from "react-router-dom";

function HeroCTA() {
  return (
    <section className="px-6 pt-24 pb-16 max-w-7xl mx-auto font-mono text-center">
      <h1 className="text-[#E4E6DE] text-3xl md:text-5xl font-medium tracking-tight mb-5 leading-tight">
        stop losing hours to <span className="text-[#9FE6A0]">one error.</span>
      </h1>

      <p className="text-[#8A9180] text-base md:text-lg mb-8 max-w-xl mx-auto">
        curated fixes for your exact stack — no digging through six-year-old threads.
      </p>

      <Link
        to="/articles"
        className="inline-block bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
      >
        browse fixes
      </Link>
    </section>
  );
}

export default HeroCTA;