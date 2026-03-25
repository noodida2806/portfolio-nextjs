"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiImage } from "react-icons/fi";

type Props = (typeof projectsData)[number] & {
  translatedTitle: string;
  translatedDescription: string;
  viewProjectLabel: string;
};

const ProjectItem = ({
  title,
  translatedTitle,
  translatedDescription,
  imageUrl,
  link,
  tech,
  viewProjectLabel,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
        <div className="h-full flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-500/40 transition-all duration-300">
          {/* Image */}
          <div className="relative overflow-hidden h-48 bg-gray-100 dark:bg-white/5">
            {imgError || !imageUrl ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400 dark:text-white/20">
                <FiImage size={36} />
                <span className="text-xs font-medium">{translatedTitle}</span>
              </div>
            ) : (
              <Image
                src={imageUrl}
                alt={title}
                fill
                quality={95}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {viewProjectLabel} <FiExternalLink size={12} />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {translatedTitle}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white/65 leading-relaxed flex-1">
              {translatedDescription}
            </p>

            {/* Tech icons */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
              {tech.map((t, i) => (
                <div key={i} title={t} className="relative w-5 h-5">
                  <Image src={`/skills/${t}.svg`} alt={t} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
