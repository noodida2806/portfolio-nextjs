"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

const About = () => {
  const { ref } = useSectionInView("About");
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t.about.heading}</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {t.about.items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-300 hover:shadow-md cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{
              y: [0, -6, 0, -3, 0],
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="text-3xl mb-3 inline-block"
              whileHover={{
                scale: 1.15,
                rotate: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-white/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-gray-700 dark:text-white/80 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-lg">🎮</span> {t.about.outro} <strong>{t.about.outroHighlight}</strong>.
      </motion.p>
    </motion.section>
  );
};

export default About;
