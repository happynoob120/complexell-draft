import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto font-mono text-center">
      <h2 className="text-[#E4E6DE] text-2xl md:text-3xl font-medium tracking-tight mb-3">
        stop debugging <span className="text-[#9FE6A0]">alone</span>
      </h2>
      <p className="text-[#8A9180] text-sm mb-8 max-w-md mx-auto">
        create a free account and get straight to the fix next time.
      </p>

      <Link
        to="/signup"
        className="inline-block bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
      >
        create free account
      </Link>
    </section>
  );
}

export default FinalCTA;