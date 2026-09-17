"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links, introLinks } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SectionName } from "@/lib/types";

const navKeyMap: Record<SectionName, "home" | "about" | "projects" | "skills" | "experience" | "contact"> = {
  Home: "home",
  About: "about",
  Projects: "projects",
  Skills: "skills",
  Experience: "experience",
  Contact: "contact",
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const goTo = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    document.querySelector(links.find((l) => l.name === name)?.hash ?? "")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1001] flex items-start justify-center pt-[15vh] px-4 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-md bg-white-canvas dark:bg-[#242426] border border-frost-gray dark:border-white/12 rounded-[20px] shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-frost-gray dark:border-white/10 text-xs text-medium-gray dark:text-white/40">
              Jump to…
            </div>
            <div className="py-2 max-h-[60vh] overflow-y-auto">
              {links.map((link) => (
                <button
                  key={link.hash}
                  onClick={() => goTo(link.name)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-jet-black dark:text-white/80 hover:bg-light-mist dark:hover:bg-white/8 transition-colors duration-150 text-left"
                >
                  <span className="text-medium-gray dark:text-white/40">{link.icon}</span>
                  {t.nav[navKeyMap[link.name]]}
                </button>
              ))}

              <div className="my-2 h-px bg-frost-gray dark:bg-white/10" />

              <button
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-jet-black dark:text-white/80 hover:bg-light-mist dark:hover:bg-white/8 transition-colors duration-150 text-left"
              >
                <span className="text-medium-gray dark:text-white/40">
                  {theme === "light" ? <BsMoon /> : <BsSun />}
                </span>
                {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              </button>

              <a
                href={introLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-jet-black dark:text-white/80 hover:bg-light-mist dark:hover:bg-white/8 transition-colors duration-150"
              >
                <span className="text-medium-gray dark:text-white/40"><FaGithub /></span>
                Open GitHub
              </a>
              <a
                href={introLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-jet-black dark:text-white/80 hover:bg-light-mist dark:hover:bg-white/8 transition-colors duration-150"
              >
                <span className="text-medium-gray dark:text-white/40"><FaLinkedin /></span>
                Open LinkedIn
              </a>
            </div>
            <div className="px-4 py-2 border-t border-frost-gray dark:border-white/10 text-[11px] text-medium-gray dark:text-white/30 flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 rounded bg-light-mist dark:bg-white/8 border border-frost-gray dark:border-white/10">Esc</kbd>
              to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
