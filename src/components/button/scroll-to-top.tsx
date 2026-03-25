"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="relative group/btn">
          <motion.button
            onClick={scrollToTop}
            className="bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <BsArrowUp className="text-violet-600 dark:text-blue-400" />
          </motion.button>
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-200">
            Scroll to top
          </span>
        </div>
      )}
    </AnimatePresence>
  );
}
