import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth.api";
import toast from "react-hot-toast";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const identifierHandler = (event) => {
    setIdentifier(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Please Wait...")

    try {
      await login({
        identifier,
        password,
      });

      toast.success("Logged in successfully");

      setIdentifier("");
      setPassword("");

      // Force refresh so Navbar fetches the current user
      window.location.href = "/";
      // OR (after implementing AuthContext later)
      // navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to login."
      );
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