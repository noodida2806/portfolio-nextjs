"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <div className="relative group/btn">
      <button
        onClick={toggleLocale}
        className="bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/10 text-sm font-semibold"
        aria-label="Toggle language"
      >
        <motion.span
          key={locale}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent"
        >
          {locale === "en" ? "VI" : "EN"}
        </motion.span>
      </button>
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-200">
        {locale === "en" ? "Tiếng Việt" : "English"}
      </span>
    </div>
  );
}
