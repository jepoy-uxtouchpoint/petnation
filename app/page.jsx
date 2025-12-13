"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function joinWaitlist() {
    setStatus("loading");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus(data.error || "error");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold dark:text-white mb-4">Join PetNation 🐾</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Be the first to experience AI-powered pet wellness. Join our exclusive early access waitlist.
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg border w-full dark:bg-gray-900 dark:text-white"
        />

        <button
          onClick={joinWaitlist}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold transition"
        >
          Join Waitlist
        </button>

        {status === "loading" && (
          <p className="text-gray-500 text-sm mt-3">Submitting…</p>
        )}

        {status === "success" && (
          <p className="text-green-600 text-sm mt-3">You're on the list! 🎉</p>
        )}

        {status !== "" && status !== "loading" && status !== "success" && (
          <p className="text-red-600 text-sm mt-3">{status}</p>
        )}
      </div>
    </main>
  );
}
