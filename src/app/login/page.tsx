"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  function triggerError(msg: string) {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 300);
  }

  async function handleSubmit() {
    if (mode === "signup" && !name) return triggerError("Name is required");
    if (!email) return triggerError("Email is required");
    if (!password) return triggerError("Password is required");

    const res = await signIn("credentials", {
      name,
      email,
      password,
      mode,
      callbackUrl,
      redirect: false,
    });

    if (res?.error) {
      const map: any = {
        USER_EXISTS: "User already exists",
        USER_NOT_FOUND: "User not found",
        INVALID_PASSWORD: "Invalid password",
        MISSING_FIELDS: "All fields required",
      };
      triggerError(map[res.error] || "Login failed");
    } else {
      window.location.href = callbackUrl;
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className={`relative z-10 w-full max-w-sm sm:max-w-md rounded-2xl bg-white 
        p-7 sm:p-10 shadow-2xl ${shake ? "animate-shake" : ""}`}
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          {mode === "login" ? "Sign in to your account" : "Create your account"}
        </h2>

        <p className="text-center text-xs sm:text-sm text-gray-600 mb-6">
          Welcome! Please fill in the details to get started.
        </p>

        {error && (
          <p className="mb-4 text-center text-sm text-red-500">
            {error}
          </p>
        )}

        {mode === "signup" && (
          <input
            required
            placeholder="Full name"
            className="w-full mb-4 rounded-lg border border-gray-300 
            px-4 py-2.5 text-sm sm:text-base text-gray-900
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          required
          type="email"
          placeholder="Email address"
          className="w-full mb-4 rounded-lg border border-gray-300 
          px-4 py-2.5 text-sm sm:text-base text-gray-900
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="Password"
          className="w-full mb-6 rounded-lg border border-gray-300 
          px-4 py-2.5 text-sm sm:text-base text-gray-900
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-gray-900 py-2.5 
          text-sm sm:text-base font-semibold text-white 
          hover:bg-gray-800 transition"
        >
          {mode === "login" ? "Continue" : "Create Account"}
        </button>

        <p
          className="mt-5 text-center text-xs sm:text-sm text-gray-600 cursor-pointer"
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
        >
          {mode === "login" ? (
            <>
              New user?{" "}
              <span className="font-medium text-purple-600 hover:underline">
                Create an account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="font-medium text-purple-600 hover:underline">
                Sign in
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
