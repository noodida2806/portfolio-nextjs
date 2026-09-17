"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

const navKeyMap: Record<SectionName, "home" | "about" | "projects" | "skills" | "experience" | "contact"> = {
  Home: "home",
  About: "about",
  Projects: "projects",
  Skills: "skills",
  Experience: "experience",
  Contact: "contact",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.footer
      className="mb-10 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[55rem] mx-auto">
        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-silver-whisper dark:via-white/10 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className="text-sm text-medium-gray dark:text-white/50 hover:text-ocean-blue dark:hover:text-ocean-blue transition-colors duration-200"
              >
                {t.nav[navKeyMap[link.name]]}
              </Link>
            ))}
          </nav>

          {/* Social + copyright */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <div className="flex gap-4">
              <a
                href="https://github.com/noodida2806"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium-gray dark:text-white/50 hover:text-jet-black dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/dai-ngo-dinh-55a9a6203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium-gray dark:text-white/50 hover:text-ocean-blue dark:hover:text-ocean-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
            <small className="text-xs text-medium-gray dark:text-white/30">
              &copy; {currentYear} {t.footer.copyright}
            </small>
            <small className="text-[11px] text-medium-gray dark:text-white/25 flex items-center gap-1">
              Press
              <kbd className="px-1.5 py-0.5 rounded border border-frost-gray dark:border-white/15 bg-light-mist dark:bg-white/8 font-sans">⌘K</kbd>
              to navigate
            </small>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
