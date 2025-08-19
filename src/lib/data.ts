import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBuffer, FaComment, FaReact, FaReadme, FaRegCalendarCheck } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Digiplay from "../../public/projects/digiplay.png";
import { IoHome, IoInformation } from "react-icons/io5";
import { SKILLNAME } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(IoHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(IoInformation),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaBuffer),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(FaRegCalendarCheck),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(FaReadme),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(FaComment),
  },
] as const;

export const experiencesData = [
  {
    title: "HCMC University of Technology and Education – HCMUTE",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Majored in Information Technology, where I built a strong foundation in programming, software development, and web technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Completed an internship as a Front-End Developer, gaining hands-on experience with modern web technologies and contributing to real-world projects.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 - 03/2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Currently working as a freelance Full-Stack Developer. My stack includes React, Remix, TypeScript, Tailwind, PostgreSQL and Refine. Open to full-time opportunities to grow and contribute to impactful projects.",
    icon: React.createElement(FaReact),
    date: "08/2024 - 08/2025",
  },
  {
    title: "Front-End Developer",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Worked as a Front-End Developer, focusing on building responsive and user-friendly web applications. During this time, I also expanded my skills toward full-stack development.",
    icon: React.createElement(FaReact),
    date: "08/2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Digiplay",
    link: "https://digiplay.vn/",
    description:
      "Built an online gaming platform with user challenges, rewards, and an admin dashboard for management and monitoring.",
    tags: ["React", "Remix", "Tailwind", "Loopback", "PostgreSQL", "PixiJS"],
    tech: [SKILLNAME.REACT, SKILLNAME.REMIX, SKILLNAME.TYPESCRIPT, SKILLNAME.TAILWIND, SKILLNAME.POSTGRESQL, SKILLNAME.PIXIJS],
    imageUrl: Digiplay,
  },
  {
    title: "Recruitment Website",
    link: "https://github.com/noodida2806/fe-job-application.git",
    description:
      "Build a recruitment website with a user-friendly interface for job seekers and employers, featuring job listings, applications, and company profiles.",
    tech: [SKILLNAME.REACT, SKILLNAME.VITE, SKILLNAME.TAILWIND, SKILLNAME.REDUX, SKILLNAME.TYPESCRIPT, SKILLNAME.MONGODB, SKILLNAME.NESTJS],
    imageUrl: "https://placehold.co/600x400?text=Recruitment+Website",
  },
  {
    title: "Blog Website",
    link: "https://github.com/noodida2806/fe-job-application.git",
    description:
      "Developed a blog website with a clean design, allowing users to read and comment on articles, and an admin panel for content management.",
    tech: [SKILLNAME.NEXTJS, SKILLNAME.TAILWIND, SKILLNAME.TYPESCRIPT, SKILLNAME.POSTGRESQL, SKILLNAME.ZUSTAND, SKILLNAME.NESTJS],
    imageUrl: "https://placehold.co/600x400?text=Blog+Website",
  },
  {
    title: "E-commerce Website",
    link: "https://github.com/noodida2806/fe-job-application.git",
    description:
      "Created an e-commerce website with product listings, a shopping cart, and a secure checkout process, enhancing the online shopping experience.",
    tech: [SKILLNAME.NEXTJS, SKILLNAME.TAILWIND, SKILLNAME.TYPESCRIPT, SKILLNAME.POSTGRESQL, SKILLNAME.ZUSTAND, SKILLNAME.NESTJS],
    imageUrl: "https://placehold.co/600x400?text=E-commerce+Website",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const skillDatas = [
  // ================= FRONTEND =================
  {
    name: "HTML 5",
    image: "/skills/html5.svg",
  },
  {
    name: "PixiJS",
    image: "/skills/pixijs.svg",
  },
  {
    name: "PhaserJS",
    image: "/skills/phaser.svg",
  },
  {
    name: "CSS",
    image: "/skills/css3.svg"
  },
  {
    name: "SASS",
    image: "/skills/sass.svg"
  },
  {
    name: "Tailwind CSS",
    image: "/skills/tailwindcss.svg"
  },
  {
    name: "JavaScript",
    image: "/skills/javascript.svg"
  },
  {
    name: "TypeScript",
    image: "/skills/typescript.svg"
  },
  {
    name: "Java",
    image: "/skills/java.svg"
  },
  {
    name: "React",
    image: "/skills/react.svg"
  },
  {
    name: "Vite",
    image: "/skills/vitejs.svg"
  },
  {
    name: "Redux",
    image: "/skills/redux.svg"
  },
  {
    name: "Zustand",
    image: "/skills/zustand.svg"
  },
  {
    name: "Next.js",
    image: "/skills/nextjs.svg"
  },
  {
    name: "Remix",
    image: "/skills/remix.svg"
  },
  // ================= BACKEND =================
  {
    name: "Node.js",
    image: "/skills/nodejs.svg"
  },
  {
    name: "Express.js",
    image: "/skills/express.svg"
  },
  {
    name: "NestJS",
    image: "/skills/nestjs.svg"
  },
  {
    name: "Spring Boot",
    image: "/skills/spring.svg"
  },
  {
    name: "MongoDB",
    image: "/skills/mongodb.svg"
  },
  {
    name: "MySQL",
    image: "/skills/mysql.svg"
  },
  {
    name: "PostgreSQL",
    image: "/skills/postgresql.svg"
  },

  // ================= MOBILE =================
  {
    name: "React Native",
    image: "/skills/reactnative.svg"
  },

  // ================= DEVOPS =================
  {
    name: "Docker",
    image: "/skills/docker.svg"
  },
  {
    name: "Git",
    image: "/skills/git.svg"
  },
  {
    name: "CI CD",
    image: "/skills/githubactions.svg"
  },
  {
    name: "Jira",
    image: "/skills/jira.svg"
  },
  {
    name: "Postman",
    image: "/skills/postman.svg"
  },
];

export const introLinks = {
  avatar: "/avatar.JPG",
  linkedin: "https://www.linkedin.com/in/dai-ngo-dinh-55a9a6203/",
  github: "https://github.com/noodida2806",
  cv: "/cv/CV_FE_NgoDinhDai.pdf",
}