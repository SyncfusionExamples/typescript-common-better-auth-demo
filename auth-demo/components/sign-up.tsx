"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await authClient.signUp.email(
      { email, password, name },
      {
        onSuccess: () => router.push("/dashboard"),
        onError: (ctx) => alert(ctx.error.message),
      }
    );
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-black text-white p-2 rounded">
        Sign Up
      </button>
    </form>
  );
}