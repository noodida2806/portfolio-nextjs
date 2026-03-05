"use client";

import { Fragment } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import ProjectItem from "./project-item";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.projects.heading}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectItem
              {...project}
              translatedTitle={t.projects.items[index]?.title ?? project.title}
              translatedDescription={t.projects.items[index]?.description ?? project.description}
              viewProjectLabel={t.projects.viewProject}
            />
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
