"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillDatas } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap items-center justify-center gap-10 text-lg text-gray-800">
        {/* {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))} */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
        >
          {skillDatas.map((skill, index) => (
            <SwiperSlide key={index}>
              <div title={skill.name} className="relative w-20 h-20">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
        >
          {skillDatas.map((skill, index) => (
            <SwiperSlide key={index}>
              <div title={skill.name} className="relative w-20 h-20">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default Skills;