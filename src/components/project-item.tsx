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
  ...rest
}: Props) => {
  const isFeatured = "featured" in rest && rest.featured;
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
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
        <div
          className={`h-full flex ${isFeatured ? "flex-col md:flex-row" : "flex-col"} bg-light-mist dark:bg-white/5 border border-frost-gray dark:border-white/8 rounded-[28px] overflow-hidden hover:border-silver-whisper dark:hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30`}
        >
          {/* Image */}
          <div className={`relative z-[2] overflow-hidden bg-frost-gray dark:bg-white/5 ${isFeatured ? "h-56 md:h-auto md:w-1/2" : "h-48 sm:h-56 lg:h-64"}`}>
            {isFeatured && (
              <span className="absolute top-3 left-3 z-[3] bg-ocean-blue text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {imgError || !imageUrl ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-medium-gray dark:text-white/20">
                <FiImage size={36} />
                <span className="text-xs font-medium">{translatedTitle}</span>
              </div>
            ) : (
              <>
                {!imgLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-frost-gray dark:bg-white/8" />
                )}
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  quality={95}
                  className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                />
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 dark:bg-black/60 text-jet-black dark:text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {viewProjectLabel} <FiExternalLink size={12} />
            </div>
          </div>

          {/* Content */}
          <div className={`relative z-[2] flex flex-col flex-1 p-5 ${isFeatured ? "md:justify-center md:p-8" : ""}`}>
            <h3 className={`font-semibold text-jet-black dark:text-white mb-2 ${isFeatured ? "text-2xl" : "text-lg"}`}>
              {translatedTitle}
            </h3>
            <p className={`text-steel-gray dark:text-white/60 leading-relaxed flex-1 ${isFeatured ? "text-base" : "text-sm"}`}>
              {translatedDescription}
            </p>

            {/* Tech icons */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-frost-gray dark:border-white/12">
              {tech.map((t, i) => (
                <div key={i} className="relative group/tech w-6 h-6">
                  <Image src={`/skills/${t}.svg`} alt={t} fill className="object-contain transition-transform duration-150 group-hover/tech:scale-110" />
                  <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded-md bg-jet-black text-white dark:bg-white dark:text-jet-black text-[10px] font-medium whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 z-10">
                    {t}
                  </span>
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
