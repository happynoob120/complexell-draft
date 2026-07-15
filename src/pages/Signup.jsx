import { Link } from "react-router-dom";
import Banner from "../components/beta/Banner";

function Signup() {
  return (
    <>
    <Banner />
    <div className="min-h-[calc(100vh-200px)] grid grid-cols-1 md:grid-cols-2 font-mono">

      {/* Left — branding */}
      <div className="hidden md:flex flex-col items-center justify-center bg-[#15180F] border-r border-[#232820] px-12">
        <span className="text-[#9FE6A0] text-4xl font-medium mb-4">
          complexell<span className="text-[#3A4036] text-2xl">.dev</span>
        </span>
        <p className="text-[#8A9180] text-sm text-center max-w-xs">
          curated, stack-specific fixes for developers who'd rather ship than search.
        </p>
      </div>

      {/* Right — form */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="text-[#E4E6DE] text-2xl font-medium mb-2">create account</h1>
          <p className="text-[#8A9180] text-sm mb-8">
            it's free. get unstuck faster.
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="text-[#8A9180] text-xs mb-1.5 block">email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#15180F] border border-[#232820] rounded-md px-4 py-2.5 text-sm text-[#E4E6DE] placeholder-[#5C6358] outline-none focus:border-[#9FE6A0] transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8A9180] text-xs mb-1.5 block">password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#15180F] border border-[#232820] rounded-md px-4 py-2.5 text-sm text-[#E4E6DE] placeholder-[#5C6358] outline-none focus:border-[#9FE6A0] transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8A9180] text-xs mb-1.5 block">confirm password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#15180F] border border-[#232820] rounded-md px-4 py-2.5 text-sm text-[#E4E6DE] placeholder-[#5C6358] outline-none focus:border-[#9FE6A0] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium py-2.5 rounded hover:opacity-90 transition-opacity mt-2"
            >
              create account
            </button>
          </form>

          <p className="text-[#5C6358] text-xs mt-6 text-center">
            already have an account?{" "}
            <Link to="/login" className="text-[#9FE6A0] hover:underline">
              log in
            </Link>
          </p>
        </div>
      </div>

    </div>
    </>
  );
}

export default Signup;