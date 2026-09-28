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

      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
        {t.about.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center py-5 rounded-[20px] border border-frost-gray dark:border-white/12 bg-light-mist dark:bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl sm:text-3xl font-semibold gradient-iridescent-text">
              {stat.value}
            </span>
            <span className="text-[11px] sm:text-xs text-medium-gray dark:text-white/50 mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {t.about.items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-light-mist dark:bg-white/5 p-6 rounded-[28px] border border-frost-gray dark:border-white/12 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.1 * index, duration: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-[2] text-3xl mb-3 inline-block">
              {item.icon}
            </div>
            <h3 className="relative z-[2] text-lg font-semibold mb-2 text-jet-black dark:text-white">
              {item.title}
            </h3>
            <p className="relative z-[2] text-sm text-steel-gray dark:text-white/60 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-steel-gray dark:text-white/60 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-lg">🎮</span> {t.about.outro} <strong className="text-jet-black dark:text-white">{t.about.outroHighlight}</strong>.
      </motion.p>
    </motion.section>
  );
};

export default About;
