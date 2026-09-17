"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="my-24 hidden sm:block"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: 0.125, duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto w-px h-16 rounded-full bg-gradient-to-b from-transparent via-silver-whisper dark:via-white/20 to-transparent" />
    </motion.div>
  );
};

export default SectionDivider;