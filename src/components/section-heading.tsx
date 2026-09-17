import React from 'react';
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <div className="mb-12 text-center">
      <motion.h2
        className="text-4xl font-semibold capitalize mb-4 text-jet-black dark:text-white tracking-tight inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
      <motion.div
        className="h-px w-12 mx-auto bg-silver-whisper dark:bg-white/20"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SectionHeading;
