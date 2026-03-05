const en = {
  // Navigation
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },

  // Intro / Hero
  intro: {
    greeting: "Hello, I'm Noo DiDa",
    roles: ["A Web Developer", "A Mobile Developer"],
    description: {
      prefix: " with 3 years of experience,",
      body: "I'm passionate about building",
      highlight1: "modern websites and mobile applications",
      middle: ", focusing on",
      highlight2: "performance and user experience",
      suffix: "to bring real value to users.",
    },
    contactBtn: "Contact me here",
    downloadCv: "Download CV",
  },

  // About
  about: {
    heading: "About me",
    items: [
      {
        icon: "\u{1F4BB}",
        title: "Front-End Developer",
        description:
          "Building modern and responsive web applications with React, Next.js, TypeScript, and Tailwind CSS. Creating clean, performant, and accessible web experiences.",
      },
      {
        icon: "\u{1F527}",
        title: "Back-End Development",
        description:
          "Experienced with Node.js, Express.js, RESTful APIs, and Java Spring Boot. Working with MongoDB, MySQL, PostgreSQL, and ORMs like Prisma for efficient data handling.",
      },
      {
        icon: "\u{1F4F1}",
        title: "Mobile Development",
        description:
          "Creating cross-platform mobile applications using React Native with seamless user experience across both iOS and Android.",
      },
      {
        icon: "\u{1F433}",
        title: "DevOps & Tools",
        description:
          "Solid understanding of Docker for containerized applications and proficient with Git for version control and collaborative development.",
      },
    ],
    outro:
      "Outside of coding, I enjoy exploring new technologies, contributing to personal projects, and improving my design skills. In my free time, I like playing video games, watching tech content, and learning about",
    outroHighlight: "UI/UX design and mobile development",
  },

  // Projects
  projects: {
    heading: "My projects",
    viewProject: "View Project",
    items: [
      {
        title: "Digiplay",
        description:
          "Built an online gaming platform with user challenges, rewards, and an admin dashboard for management and monitoring.",
      },
      {
        title: "Recruitment Website",
        description:
          "Build a recruitment website with a user-friendly interface for job seekers and employers, featuring job listings, applications, and company profiles.",
      },
      {
        title: "Blog Website",
        description:
          "Developed a blog website with a clean design, allowing users to read and comment on articles, and an admin panel for content management.",
      },
      {
        title: "E-commerce Website",
        description:
          "Created an e-commerce website with product listings, a shopping cart, and a secure checkout process, enhancing the online shopping experience.",
      },
    ],
  },

  // Skills
  skills: {
    heading: "My skills",
  },

  // Experience
  experience: {
    heading: "My experience",
    items: [
      {
        title: "HCMC University of Technology and Education \u2013 HCMUTE",
        location: "Ho Chi Minh City, Vietnam",
        description:
          "Majored in Information Technology, where I built a strong foundation in programming, software development, and web technologies.",
      },
      {
        title: "Front-End Developer Intern",
        location: "Ho Chi Minh City, Vietnam",
        description:
          "Completed an internship as a Front-End Developer, gaining hands-on experience with modern web technologies and contributing to real-world projects.",
      },
      {
        title: "Full-Stack Developer",
        location: "Ho Chi Minh City, Vietnam",
        description:
          "Currently working as a freelance Full-Stack Developer. My stack includes React, Remix, TypeScript, Tailwind, PostgreSQL and Refine. Open to full-time opportunities to grow and contribute to impactful projects.",
      },
      {
        title: "Front-End Developer",
        location: "Ho Chi Minh City, Vietnam",
        description:
          "Worked as a Front-End Developer, focusing on building responsive and user-friendly web applications. During this time, I also expanded my skills toward full-stack development.",
      },
    ],
  },

  // Contact
  contact: {
    heading: "Contact me",
    description: "Please contact me directly at",
    descriptionSuffix: "or through this form.",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    emailRequired: "Email is required",
    messageLabel: "Message",
    messagePlaceholder: "Your message here...",
    messageRequired: "Message is required",
    submitBtn: "Submit",
    successToast: "Email sent successfully!",
  },

  // Footer
  footer: {
    copyright: "Noo DiDa. All rights reserved.",
  },

  // Meta
  meta: {
    title: "Noo DiDa | Personal Portfolio",
    description:
      "A full-stack developer with 3 years of experience in building web applications.",
  },
} as const;

export default en;
export type Dictionary = typeof en;
