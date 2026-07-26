import { Link } from "react-router-dom";
import Banner from "../components/beta/Banner";
import { TbCircleX } from "react-icons/tb";

function VerificationFailed() {
  return (
    <>
      <Banner />

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#0D0F0C] px-6 font-mono">
        <div className="w-full max-w-md bg-[#15180F] border border-[#232820] rounded-xl p-8 text-center">
          <TbCircleX
            size={70}
            className="mx-auto text-red-500 mb-5"
          />

          <h1 className="text-2xl text-[#E4E6DE] font-medium mb-3">
            Verification Failed
          </h1>

          <p className="text-[#8A9180] mb-8">
            This verification link is invalid or has already been used.
          </p>

          <Link
            to="/signup"
            className="block bg-[#9FE6A0] text-[#0D0F0C] font-medium py-3 rounded hover:opacity-90 transition"
          >
            Create Account Again
          </Link>
        </div>
      </div>
    </>
  );
}

export default VerificationFailed;