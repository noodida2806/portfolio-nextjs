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

const orbitingSkills = [
  { icon: "/skills/react.svg", className: "top-0 left-2 sm:left-4", delay: 0 },
  { icon: "/skills/nextjs.svg", className: "top-8 right-0 sm:top-10", delay: 0.6 },
  { icon: "/skills/typescript.svg", className: "bottom-6 left-0", delay: 1.2 },
  { icon: "/skills/nodejs.svg", className: "bottom-0 right-4 sm:right-8", delay: 1.8 },
];

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t, locale } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-28 w-full max-w-[74rem] sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-6">
        {/* Left: text content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-frost-gray dark:border-white/15 bg-light-mist dark:bg-white/5 text-xs font-medium text-steel-gray dark:text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verdant-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-verdant-green" />
              </span>
              {t.intro.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="mb-8 mt-4 !leading-[1.3]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-semibold text-jet-black dark:text-white tracking-tight mb-3">
              <span className="gradient-iridescent-text">
                {t.intro.greeting}
              </span>
              <br />
              <TypeAnimation
                key={locale}
                sequence={t.intro.roles.flatMap((role) => [role, 1000])}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </h1>
            <motion.p
              className="mt-4 text-lg sm:text-xl text-steel-gray dark:text-white/70 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <span className="font-semibold text-jet-black dark:text-white">{t.intro.description.prefix}</span>{" "}
              {t.intro.description.body}{" "}
              <strong className="text-jet-black dark:text-white">{t.intro.description.highlight1}</strong>
              {t.intro.description.middle}{" "}
              <strong className="text-jet-black dark:text-white">{t.intro.description.highlight2}</strong>{" "}
              {t.intro.description.suffix}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-base font-medium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              href="#contact"
              className="group bg-ocean-blue text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-sky-link hover:shadow-lg hover:shadow-ocean-blue/30 active:scale-95 transition-all duration-200"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              {t.intro.contactBtn}{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group border border-silver-whisper dark:border-white/20 text-jet-black dark:text-white/80 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:border-medium-gray dark:hover:border-white/40 active:scale-95 transition-all duration-200 cursor-pointer"
              href={introLinks.cv}
              download
            >
              {t.intro.downloadCv}{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-frost-gray dark:bg-white/8 p-4 text-steel-gray hover:text-jet-black dark:text-white/50 dark:hover:text-white flex items-center gap-2 rounded-full active:scale-95 transition-all duration-200 cursor-pointer"
              href={introLinks.linkedin}
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              className="bg-frost-gray dark:bg-white/8 p-4 text-steel-gray hover:text-jet-black dark:text-white/50 dark:hover:text-white flex items-center gap-2 text-[1.35rem] rounded-full active:scale-95 transition-all duration-200 cursor-pointer"
              href={introLinks.github}
              target="_blank"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>

        {/* Right: avatar visual */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72">
            {/* Glow blob */}
            <div className="absolute inset-6 rounded-full bg-ocean-blue/20 dark:bg-ocean-blue/25 blur-3xl" aria-hidden="true" />

            {/* Rotating dashed ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-ocean-blue/25 dark:border-ocean-blue/35"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            {/* Avatar */}
            <motion.div
              className="absolute inset-8 rounded-full overflow-hidden border-[0.35rem] border-white dark:border-white/20 shadow-xl dark:shadow-ocean-blue/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={introLinks.avatar}
                alt="NooDiDa"
                fill
                quality={95}
                priority={true}
                className="object-cover"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-6 right-2 text-3xl z-[2]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            >
              👋
            </motion.span>

            {/* Orbiting tech badges */}
            {orbitingSkills.map((skill) => (
              <motion.div
                key={skill.icon}
                className={`absolute z-[2] w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-full bg-white dark:bg-[#242426] border border-frost-gray dark:border-white/15 shadow-lg ${skill.className}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: skill.delay }}
              >
                <Image src={skill.icon} alt="" fill className="object-contain p-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex justify-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5 text-medium-gray dark:text-white/30"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] tracking-wide uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-silver-whisper dark:border-white/20 flex justify-center pt-1.5">
            <span className="w-1 h-1.5 rounded-full bg-medium-gray dark:bg-white/30" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
