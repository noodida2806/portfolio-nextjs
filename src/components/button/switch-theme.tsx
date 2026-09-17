"use client";

import { useTheme } from "next-themes";
import React, { useRef } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { runCircularViewTransition } from "@/lib/view-transition";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    runCircularViewTransition(btnRef.current, () => setTheme(next));
  };

  return (
    <div className="relative group/btn">
      <button
        ref={btnRef}
        className="bg-frost-gray w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-silver-whisper rounded-full flex items-center justify-center hover:bg-silver-whisper active:scale-95 transition-all dark:bg-white/8 dark:border-white/10 dark:hover:bg-white/12 dark:active:bg-white/15 overflow-hidden"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <BsSun className="text-amber-500" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <BsMoon className="text-blue-300" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-md bg-jet-black text-white dark:bg-white dark:text-jet-black whitespace-nowrap opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-200">
        {theme === "light" ? "Dark mode" : "Light mode"}
      </span>
    </div>
  );
}
