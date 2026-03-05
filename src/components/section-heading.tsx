import React from 'react';
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <div className="mb-12">
      <motion.h2
        className="text-4xl font-bold capitalize mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
      <motion.div
        className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-600 to-blue-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SectionHeading;