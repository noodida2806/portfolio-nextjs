"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import type { SectionName } from "@/lib/types";

const navKeyMap: Record<SectionName, "home" | "about" | "projects" | "skills" | "experience" | "contact"> = {
  Home: "home",
  About: "about",
  Projects: "projects",
  Skills: "skills",
  Experience: "experience",
  Contact: "contact",
};

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-ocean-blue origin-left z-[1000]"
        style={{ scaleX }}
      />
      <motion.nav
        className="fixed top-0 left-1/2 h-[4.5rem] w-full border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-auto sm:w-auto sm:rounded-full dark:bg-gray-950/75 dark:border-black/40 flex items-center justify-center"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-medium-gray sm:w-auto sm:flex-nowrap sm:gap-1 sm:px-2 sm:py-1">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-jet-black transition dark:text-white/50 dark:hover:text-white/90 whitespace-nowrap",
                  {
                    "text-ocean-blue dark:text-ocean-blue":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t.nav[navKeyMap[link.name]]}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-ocean-blue/8 dark:bg-ocean-blue/12"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}

export default Header;
