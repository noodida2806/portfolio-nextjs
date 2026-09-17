"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/language-context";
import { motion, AnimatePresence } from "framer-motion";
import { runCircularViewTransition } from "@/lib/view-transition";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    runCircularViewTransition(btnRef.current, toggleLocale);
  };

  return (
    <div className="relative group/btn">
      <button
        ref={btnRef}
        onClick={handleToggle}
        className="bg-frost-gray w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-silver-whisper rounded-full flex items-center justify-center hover:bg-silver-whisper active:scale-95 transition-all dark:bg-white/8 dark:border-white/10 dark:hover:bg-white/12 dark:active:bg-white/15 text-sm font-semibold overflow-hidden"
        aria-label="Toggle language"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={locale}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-steel-gray dark:text-white/80"
          >
            {locale === "en" ? "VI" : "EN"}
          </motion.span>
        </AnimatePresence>
      </button>
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-md bg-jet-black text-white dark:bg-white dark:text-jet-black whitespace-nowrap opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-200">
        {locale === "en" ? "Tiếng Việt" : "English"}
      </span>
    </div>
  );
}
