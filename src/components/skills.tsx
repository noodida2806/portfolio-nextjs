"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillDatas } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  const { t } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSwiperInit = (swiper: SwiperClass) => {
    const el = swiper.wrapperEl;
    if (el) {
      el.style.transitionTimingFunction = "linear";
    }
  };

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
      <div className="space-y-8">
        {/* First carousel - normal direction */}
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            speed={3000}
            modules={[Autoplay]}
            className="w-full"
            onInit={handleSwiperInit}
            onTransitionEnd={handleSwiperInit}
            breakpoints={{
              640: { slidesPerView: 6, spaceBetween: 24 },
              1024: { slidesPerView: 7, spaceBetween: 28 },
            }}
          >
            {skillDatas.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <motion.div
                  className="relative flex flex-col items-center"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <motion.div
                    className="text-xs font-medium mt-2 text-gray-700 dark:text-white/60 absolute top-full pt-2 whitespace-nowrap"
                    initial={{ opacity: 0, y: -5 }}
                    animate={hoveredSkill === skill.name ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.name}
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Fade gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
        </div>

        {/* Second carousel - reverse direction */}
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            speed={3000}
            modules={[Autoplay]}
            className="w-full"
            onInit={handleSwiperInit}
            onTransitionEnd={handleSwiperInit}
            breakpoints={{
              640: { slidesPerView: 6, spaceBetween: 24 },
              1024: { slidesPerView: 7, spaceBetween: 28 },
            }}
          >
            {skillDatas.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <motion.div
                  className="relative flex flex-col items-center"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <motion.div
                    className="text-xs font-medium mt-2 text-gray-700 dark:text-white/60 absolute top-full pt-2 whitespace-nowrap"
                    initial={{ opacity: 0, y: -5 }}
                    animate={hoveredSkill === skill.name ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.name}
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Fade gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;