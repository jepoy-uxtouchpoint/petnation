'use client';
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "dark" : ""}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition">
        <h1 className="text-5xl font-bold mb-4 dark:text-white">
          Welcome to PetNation 🐾
        </h1>
        <p className="text-lg dark:text-gray-300 text-gray-600 mb-6">
          Your MVP website is now LIVE!
        </p>
        <button
          onClick={() => setDark(!dark)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </main>
  );
}