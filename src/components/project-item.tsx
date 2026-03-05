"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-6 sm:mb-12 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 dark:hover:bg-white/15 transition-all duration-300 sm:group-even:pl-8 dark:text-white dark:bg-white/5 shadow-sm hover:shadow-md">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{translatedTitle}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {translatedDescription}
            </p>
            <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tech.map((tech, index) => (
                <div title={tech} className="relative w-6 h-6" key={index}>
                  <Image
                    src={`/skills/${tech}.svg`}
                    alt={tech}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute hidden sm:block top-8 -right-40 group-even:right-[initial] group-even:-left-40 overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              width={600}
              height={400}
              priority
              className="w-[28.25rem] rounded-xl shadow-2xl transition-all duration-300 group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              {viewProjectLabel} ↗
            </div>
          </div>
        </section>
      </motion.div>
    </Link>
  );
};
export default ProjectItem;
