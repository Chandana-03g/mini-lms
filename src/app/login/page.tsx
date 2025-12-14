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
    <div className="min-h-screen flex justify-center items-center bg-[#0b1324]">
      <div
        className={`bg-[#162235] p-8 rounded-xl w-full max-w-md ${
          shake ? "animate-shake" : ""
        }`}
      >
        <h2 className="text-2xl text-white font-bold mb-6">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {mode === "signup" && (
          <input
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 rounded bg-[#22304a] text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-[#22304a] text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded bg-[#22304a] text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 py-2 rounded font-semibold text-white"
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        <p
          className="text-sm text-gray-400 mt-4 cursor-pointer"
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
        >
          {mode === "login"
            ? "New user? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
