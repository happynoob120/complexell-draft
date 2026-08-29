import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, resendVerification } from "../api/auth.api";
import toast from "../utils/toast";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [verificationRequired, setVerificationRequired] = useState(false);
  const [resending, setResending] = useState(false);

  const navigate = useNavigate();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const identifierHandler = (event) => {
    setIdentifier(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setVerificationRequired(false);
    toast.loading("Please Wait...")

    try {
      await login({
        identifier,
        password,
      });

      toast.success("Logged in successfully");

      setIdentifier("");
      setPassword("");

      // Notify other UI parts (Navbar) and navigate without a full reload so toast is visible
      window.dispatchEvent(new Event("authChanged"));
      navigate("/");
    } catch (error) {
      const message = error.response?.data?.message || "Failed to login.";

      if (message.toLowerCase().includes("verify your email")) {
        setVerificationRequired(true);
      }

      toast.error(message);
    }
  };

  const handleResendVerification = async () => {
    const email = identifier.trim();

    if (!email || !email.includes("@")) {
      toast.error("Please enter your email address to resend the verification link.");
      return;
    }

    setResending(true);
    try {
      const response = await resendVerification(email);
      toast.success(response.message || "Verification email sent again.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend verification email.");
    } finally {
      setResending(false);
    }
  };

  return (
    <>

      <div className="min-h-[calc(100vh-200px)] grid grid-cols-1 md:grid-cols-2 font-mono">
        {/* Left — branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#15180F] border-r border-[#232820] px-12">
          <span className="text-[#9FE6A0] text-4xl font-medium mb-4">
            complexell
            <span className="text-[#3A4036] text-2xl">.dev</span>
          </span>

          <p className="text-[#8A9180] text-sm text-center max-w-xs">
            curated, stack-specific fixes for developers who'd rather ship than
            search.
          </p>
        </div>

        {/* Right — form */}
        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">
            <h1 className="text-[#E4E6DE] text-2xl font-medium mb-2">
              log in
            </h1>

            <p className="text-[#8A9180] text-sm mb-8">
              welcome back. enter your details below.
            </p>

            {verificationRequired && (
              <div className="mb-5 rounded-md border border-[#B58A3C] bg-[#1B160F] p-4 text-sm text-[#F0D39A]">
                <p className="font-medium text-[#F7E2B2]">Verify your email to continue</p>
                <p className="mt-2 leading-6 text-[#E7C98A]">
                  We sent a verification link when you signed up. Check your inbox and spam folder, then try again.
                </p>
                <button
                  type="button"
                  onClick={handleResendVerification}
                  disabled={resending}
                  className="mt-3 rounded border border-[#D7A94A] bg-[#2A2013] px-3 py-1.5 text-xs font-medium text-[#F7E2B2] transition hover:bg-[#382b18] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {resending ? "Sending..." : "Resend verification email"}
                </button>
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-[#8A9180] text-xs mb-1.5 block">
                  email
                </label>

                <input
                  value={identifier}
                  onChange={identifierHandler}
                  placeholder="enter email or username"
                  className="w-full bg-[#15180F] border border-[#232820] rounded-md px-4 py-2.5 text-sm text-[#E4E6DE] placeholder-[#5C6358] outline-none focus:border-[#9FE6A0] transition-colors"
                />
              </div>

              <div>
                <label className="text-[#8A9180] text-xs mb-1.5 block">
                  password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={passwordHandler}
                  placeholder="••••••••"
                  className="w-full bg-[#15180F] border border-[#232820] rounded-md px-4 py-2.5 text-sm text-[#E4E6DE] placeholder-[#5C6358] outline-none focus:border-[#9FE6A0] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="bg-[#9FE6A0] text-[#0D0F0C] text-sm font-medium py-2.5 rounded hover:opacity-90 transition-opacity mt-2"
              >
                log in
              </button>
            </form>

            <p className="text-[#5C6358] text-xs mt-6 text-center">
              don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#9FE6A0] hover:underline"
              >
                sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;