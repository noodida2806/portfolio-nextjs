"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate{" "}
        <span className="font-medium">Front-End Developer</span> with
        experience in building modern and responsive web applications. My core
        stack includes{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, and Tailwind CSS
        </span>
        . I enjoy turning ideas into interactive user interfaces and creating{" "}
        <span className="italic">clean, performant, and accessible</span> web
        experiences.
      </p>

      <p className="mb-3">
        In addition to front-end, I have experience with{" "}
        <span className="font-medium">Back-End development</span>, working with{" "}
        <span className="font-medium">Node.js, Express.js, RESTful APIs</span>,
        and <span className="font-medium">Java Spring Boot</span>. I also work
        with different databases such as{" "}
        <span className="font-medium">MongoDB, MySQL, and PostgreSQL</span>,
        along with ORMs like{" "}
        <span className="font-medium">Prisma</span> for efficient data handling.
      </p>

      <p className="mb-3">
        I also work with{" "}
        <span className="font-medium">mobile development using React Native</span>,
        allowing me to create{" "}
        <span className="italic">cross-platform mobile applications</span> with
        a seamless user experience across both iOS and Android.
      </p>

      <p className="mb-3">
        I have a solid understanding of{" "}
        <span className="font-medium">Docker</span> for containerized
        applications and am{" "}
        <span className="font-medium">proficient with Git</span> for version
        control and collaborative development.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy exploring new
        technologies, contributing to personal projects, and improving my design
        skills. In my free time, I like playing video games, watching tech
        content, and learning about{" "}
        <span className="font-medium">UI/UX design and mobile development</span>.
      </p>
    </motion.section>
  );
};

export default About;
