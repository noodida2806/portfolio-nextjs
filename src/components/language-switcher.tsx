"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 text-sm font-semibold"
      aria-label="Toggle language"
    >
      <motion.span
        key={locale}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {locale === "en" ? "VI" : "EN"}
      </motion.span>
    </button>
  );
}
