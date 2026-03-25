"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillDatas } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillItem = ({
  skill,
  hoveredSkill,
  setHoveredSkill,
}: {
  skill: (typeof skillDatas)[number];
  hoveredSkill: string | null;
  setHoveredSkill: (name: string | null) => void;
}) => (
  <div
    className="relative flex flex-col items-center mx-3 sm:mx-4 cursor-default"
    onMouseEnter={() => setHoveredSkill(skill.name)}
    onMouseLeave={() => setHoveredSkill(null)}
  >
    <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center">
      <Image
        src={skill.image}
        alt={skill.name}
        fill
        className="object-contain"
      />
    </div>
    <motion.div
      className="text-xs font-medium mt-2 text-gray-700 dark:text-white/60 absolute top-full pt-1 whitespace-nowrap pointer-events-none"
      initial={{ opacity: 0, y: -4 }}
      animate={hoveredSkill === skill.name ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
    >
      {skill.name}
    </motion.div>
  </div>
);

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  const { t } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[55rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.skills.heading}</SectionHeading>

      <div className="space-y-10">
        {/* Row 1 — scroll left */}
        <div className="relative overflow-hidden skills-track">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="skills-inner animate-scroll-left">
            {skillDatas.map((skill, i) => (
              <SkillItem key={`a-${i}`} skill={skill} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
            ))}
            {skillDatas.map((skill, i) => (
              <SkillItem key={`b-${i}`} skill={skill} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="relative overflow-hidden skills-track">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="skills-inner animate-scroll-right">
            {skillDatas.map((skill, i) => (
              <SkillItem key={`c-${i}`} skill={skill} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
            ))}
            {skillDatas.map((skill, i) => (
              <SkillItem key={`d-${i}`} skill={skill} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
