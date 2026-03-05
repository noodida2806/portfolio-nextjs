"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <motion.footer
      className="mb-10 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[42rem] mx-auto">
        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/noodida2806"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/dai-ngo-dinh-55a9a6203/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <small className="text-xs text-gray-500 dark:text-white/50">
            &copy; {currentYear} {t.footer.copyright}
          </small>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
