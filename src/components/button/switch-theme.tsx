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
    <button
      className="fixed bottom-5 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
