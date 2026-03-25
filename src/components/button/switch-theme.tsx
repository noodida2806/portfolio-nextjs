"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <div className="relative group/btn">
      <button
        className="bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/10"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <BsSun className="text-amber-500" /> : <BsMoon className="text-blue-300" />}
      </button>
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-200">
        {theme === "light" ? "Dark mode" : "Light mode"}
      </span>
    </div>
  );
}
