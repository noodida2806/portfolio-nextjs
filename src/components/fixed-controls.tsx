"use client";

import { motion } from "framer-motion";
import ScrollToTop from "./button/scroll-to-top";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitch from "./button/switch-theme";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function FixedControls() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 flex flex-col gap-3 z-[998]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <ScrollToTop />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LanguageSwitcher />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ThemeSwitch />
      </motion.div>
    </motion.div>
  );
}
