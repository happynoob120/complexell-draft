import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbCircleCheck } from "react-icons/tb";

function VerificationSuccess() {
  useEffect(() => {
    window.dispatchEvent(new Event("authChanged"));
  }, []);

  return (
    <>

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#0D0F0C] px-6 font-mono">
        <div className="w-full max-w-md bg-[#15180F] border border-[#232820] rounded-xl p-8 text-center">
          <TbCircleCheck
            size={70}
            className="mx-auto text-[#9FE6A0] mb-5"
          />

          <h1 className="text-2xl text-[#E4E6DE] font-medium mb-3">
            Email Verified
          </h1>

          <p className="text-[#8A9180] mb-8">
            Your email has been successfully verified and you are now logged in.
          </p>

          <Link
            to="/"
            className="block bg-[#9FE6A0] text-[#0D0F0C] font-medium py-3 rounded hover:opacity-90 transition"
          >
            Continue to Complexell
          </Link>
        </div>
      </div>
    </>
  );
}

export default VerificationSuccess;