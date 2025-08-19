import { links } from "./data"

export type SectionName = (typeof links)[number]["name"];

export type IFormData = {
  senderEmail: string;
  message: string;
}

export enum SKILLNAME {
  HTML = "html5",
  PIXIJS = "pixijs",
  CSS = "css3",
  SASS = "sass",
  TAILWIND = "tailwindcss",
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  JAVA = "java",
  REACT = "react",
  VITE = "vitejs",
  REDUX = "redux",
  ZUSTAND = "zustand",
  NEXTJS = "nextjs",
  REMIX = "remix",
  NODEJS = "nodejs",
  EXPRESS = "express",
  NESTJS = "nestjs",
  SPRINGBOOT = "spring",
  MONGODB = "mongodb",
  POSTGRESQL = "postgresql",
  MYSQL = "mysql",
  REACTNATIVE = "reactnative",
  DOCKER = "docker",
  GIT = "git",
  GITHUBACTIONS = "githubactions",
}
