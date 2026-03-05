"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { introLinks } from "@/lib/data";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t, locale } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={introLinks.avatar}
                alt="NooDiDa"
                width="384"
                height="384"
                quality="95"
                priority={true}
                className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="">
          <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent font-bold">
            {t.intro.greeting}
          </span>
          <br></br>
          <TypeAnimation
            key={locale}
            sequence={t.intro.roles.flatMap((role) => [role, 1000])}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
        <span className="font-semibold">{t.intro.description.prefix}</span> {t.intro.description.body} <strong>{t.intro.description.highlight1}</strong>{t.intro.description.middle} <strong>{t.intro.description.highlight2}</strong> {t.intro.description.suffix}
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          staggerChildren: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-violet-600 to-blue-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:from-violet-500 hover:to-blue-400 active:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t.intro.contactBtn}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer borderBlack dark:bg-white/10 shadow-sm hover:shadow-md"
          href={introLinks.cv}
          download
        >
          {t.intro.downloadCv}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white shadow-sm hover:shadow-md"
          href={introLinks.linkedin}
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all duration-300 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white shadow-sm hover:shadow-md"
          href={introLinks.github}
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
