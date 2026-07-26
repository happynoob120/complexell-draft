import { useState } from "react";
import { TbClockExclamation } from "react-icons/tb";
import { resendVerification } from "../api/auth.api";

function VerificationExpired() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResend = async (e) => {
    e.preventDefault();

    try {
      const data = await resendVerification(email);
      setMessage(data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong."
      );
    }
  };

  return (
    <>

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#0D0F0C] px-6 font-mono">
        <div className="w-full max-w-md bg-[#15180F] border border-[#232820] rounded-xl p-8 text-center">
          <TbClockExclamation
            size={70}
            className="mx-auto text-yellow-400 mb-5"
          />

          <h1 className="text-2xl text-[#E4E6DE] font-medium mb-3">
            Verification Link Expired
          </h1>

          <p className="text-[#8A9180] mb-6">
            Enter your email below and we'll send you a new verification link.
          </p>

          <form onSubmit={handleResend} className="space-y-4">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0D0F0C] border border-[#232820] rounded px-4 py-3 text-[#E4E6DE] outline-none focus:border-[#9FE6A0]"
            />

            <button
              type="submit"
              className="w-full bg-[#9FE6A0] text-[#0D0F0C] font-medium py-3 rounded hover:opacity-90 transition"
            >
              Resend Verification Email
            </button>
          </form>

          {message && (
            <p className="mt-5 text-sm text-[#9FE6A0]">
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default VerificationExpired;