"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.experience.heading}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.03)",
                boxShadow: `0 0 0 1px ${theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)"}, 0 4px 6px rgba(0, 0, 0, 0.05)`,
                border: "none",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #e5e7eb"
                    : "0.4rem solid rgba(255, 255, 255, 0.15)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {t.experience.items[index]?.title ?? item.title}
              </h3>
              <p className="font-normal !mt-0">
                {t.experience.items[index]?.location ?? item.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {t.experience.items[index]?.description ?? item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
