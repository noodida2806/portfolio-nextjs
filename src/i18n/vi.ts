import type { Dictionary } from "./en";

const vi: Dictionary = {
  // Navigation
  nav: {
    home: "Trang ch\u1ee7",
    about: "Gi\u1edbi thi\u1ec7u",
    projects: "D\u1ef1 \u00e1n",
    skills: "K\u1ef9 n\u0103ng",
    experience: "Kinh nghi\u1ec7m",
    contact: "Li\u00ean h\u1ec7",
  },

  // Intro / Hero
  intro: {
    greeting: "Xin ch\u00e0o, t\u00f4i l\u00e0 Noo DiDa",
    roles: ["L\u1eadp tr\u00ecnh vi\u00ean Web", "L\u1eadp tr\u00ecnh vi\u00ean Mobile"],
    description: {
      prefix: " v\u1edbi 3 n\u0103m kinh nghi\u1ec7m,",
      body: "t\u00f4i \u0111am m\u00ea x\u00e2y d\u1ef1ng",
      highlight1: "website v\u00e0 \u1ee9ng d\u1ee5ng di \u0111\u1ed9ng hi\u1ec7n \u0111\u1ea1i",
      middle: ", t\u1eadp trung v\u00e0o",
      highlight2: "hi\u1ec7u su\u1ea5t v\u00e0 tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng",
      suffix: "\u0111\u1ec3 mang l\u1ea1i gi\u00e1 tr\u1ecb th\u1ef1c s\u1ef1 cho ng\u01b0\u1eddi d\u00f9ng.",
    },
    contactBtn: "Li\u00ean h\u1ec7 v\u1edbi t\u00f4i",
    downloadCv: "T\u1ea3i CV",
  },

  // About
  about: {
    heading: "V\u1ec1 t\u00f4i",
    items: [
      {
        icon: "\u{1F4BB}",
        title: "L\u1eadp tr\u00ecnh vi\u00ean Front-End",
        description:
          "3+ n\u0103m x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web hi\u1ec7n \u0111\u1ea1i, responsive v\u1edbi React, Next.js, TypeScript v\u00e0 Tailwind CSS. T\u1eadp trung v\u00e0o tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng s\u1ea1ch \u0111\u1eb9p v\u00e0 hi\u1ec7u su\u1ea5t cao.",
      },
      {
        icon: "\u{1F527}",
        title: "Ph\u00e1t tri\u1ec3n Back-End",
        description:
          "C\u00f3 kinh nghi\u1ec7m v\u1edbi Node.js, NestJS, Express.js, RESTful APIs v\u00e0 Java Spring Boot. L\u00e0m vi\u1ec7c v\u1edbi MongoDB, MySQL, PostgreSQL v\u00e0 ORM nh\u01b0 Prisma.",
      },
      {
        icon: "\u{1F4F1}",
        title: "Ph\u00e1t tri\u1ec3n Mobile",
        description:
          "X\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng di \u0111\u1ed9ng \u0111a n\u1ec1n t\u1ea3ng b\u1eb1ng React Native, mang l\u1ea1i tr\u1ea3i nghi\u1ec7m m\u01b0\u1ee3t m\u00e0 tr\u00ean c\u1ea3 iOS v\u00e0 Android.",
      },
      {
        icon: "\u{1F433}",
        title: "DevOps & C\u00f4ng c\u1ee5",
        description:
          "Th\u00e0nh th\u1ea1o Docker, Git, GitHub Actions CI/CD, Jira v\u00e0 Postman. C\u00f3 kinh nghi\u1ec7m tri\u1ec3n khai v\u00e0 duy tr\u00ec \u1ee9ng d\u1ee5ng container h\u00f3a.",
      },
    ],
    outro:
      "Ngo\u00e0i l\u1eadp tr\u00ecnh, t\u00f4i th\u00edch kh\u00e1m ph\u00e1 c\u00f4ng ngh\u1ec7 m\u1edbi, \u0111\u00f3ng g\u00f3p cho c\u00e1c d\u1ef1 \u00e1n c\u00e1 nh\u00e2n v\u00e0 c\u1ea3i thi\u1ec7n k\u1ef9 n\u0103ng thi\u1ebft k\u1ebf. Trong th\u1eddi gian r\u1ea3nh, t\u00f4i th\u00edch ch\u01a1i game, xem n\u1ed9i dung c\u00f4ng ngh\u1ec7 v\u00e0 t\u00ecm hi\u1ec3u v\u1ec1",
    outroHighlight: "thi\u1ebft k\u1ebf UI/UX v\u00e0 ph\u00e1t tri\u1ec3n di \u0111\u1ed9ng",
  },

  // Projects
  projects: {
    heading: "D\u1ef1 \u00e1n c\u1ee7a t\u00f4i",
    viewProject: "Xem d\u1ef1 \u00e1n",
    items: [
      {
        title: "Digiplay",
        description:
          "X\u00e2y d\u1ef1ng n\u1ec1n t\u1ea3ng game tr\u1ef1c tuy\u1ebfn v\u1edbi th\u1eed th\u00e1ch, ph\u1ea7n th\u01b0\u1edfng v\u00e0 b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n qu\u1ea3n tr\u1ecb \u0111\u1ec3 qu\u1ea3n l\u00fd v\u00e0 gi\u00e1m s\u00e1t.",
      },
      {
        title: "Website Tuy\u1ec3n d\u1ee5ng",
        description:
          "X\u00e2y d\u1ef1ng website tuy\u1ec3n d\u1ee5ng v\u1edbi giao di\u1ec7n th\u00e2n thi\u1ec7n cho ng\u01b0\u1eddi t\u00ecm vi\u1ec7c v\u00e0 nh\u00e0 tuy\u1ec3n d\u1ee5ng, bao g\u1ed3m danh s\u00e1ch vi\u1ec7c l\u00e0m, \u1ee9ng tuy\u1ec3n v\u00e0 h\u1ed3 s\u01a1 c\u00f4ng ty.",
      },
      {
        title: "Website Blog",
        description:
          "Ph\u00e1t tri\u1ec3n website blog v\u1edbi thi\u1ebft k\u1ebf g\u1ecdn g\u00e0ng, cho ph\u00e9p ng\u01b0\u1eddi d\u00f9ng \u0111\u1ecdc v\u00e0 b\u00ecnh lu\u1eadn b\u00e0i vi\u1ebft, c\u00f9ng trang qu\u1ea3n tr\u1ecb n\u1ed9i dung.",
      },
      {
        title: "Website Th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed",
        description:
          "T\u1ea1o website th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed v\u1edbi danh s\u00e1ch s\u1ea3n ph\u1ea9m, gi\u1ecf h\u00e0ng v\u00e0 quy tr\u00ecnh thanh to\u00e1n an to\u00e0n, n\u00e2ng cao tr\u1ea3i nghi\u1ec7m mua s\u1eafm tr\u1ef1c tuy\u1ebfn.",
      },
    ],
  },

  // Skills
  skills: {
    heading: "K\u1ef9 n\u0103ng",
  },

  // Experience
  experience: {
    heading: "Kinh nghi\u1ec7m",
    items: [
      {
        title: "\u0110\u1ea1i h\u1ecdc S\u01b0 ph\u1ea1m K\u1ef9 thu\u1eadt TP.HCM \u2013 HCMUTE",
        location: "TP. H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
        description:
          "Chuy\u00ean ng\u00e0nh C\u00f4ng ngh\u1ec7 Th\u00f4ng tin, n\u01a1i t\u00f4i x\u00e2y d\u1ef1ng n\u1ec1n t\u1ea3ng v\u1eefng ch\u1eafc v\u1ec1 l\u1eadp tr\u00ecnh, ph\u00e1t tri\u1ec3n ph\u1ea7n m\u1ec1m v\u00e0 c\u00f4ng ngh\u1ec7 web.",
      },
      {
        title: "Th\u1ef1c t\u1eadp sinh Front-End Developer",
        location: "TP. H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
        description:
          "Ho\u00e0n th\u00e0nh k\u1ef3 th\u1ef1c t\u1eadp l\u00e0m Front-End Developer, t\u00edch l\u0169y kinh nghi\u1ec7m th\u1ef1c t\u1ebf v\u1edbi c\u00f4ng ngh\u1ec7 web hi\u1ec7n \u0111\u1ea1i v\u00e0 \u0111\u00f3ng g\u00f3p v\u00e0o c\u00e1c d\u1ef1 \u00e1n th\u1ef1c t\u1ebf.",
      },
      {
        title: "Full-Stack Developer",
        location: "Freelance · TP. H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
        description:
          "L\u00e0m vi\u1ec7c nh\u01b0 Full-Stack Developer freelance, x\u00e2y d\u1ef1ng n\u1ec1n t\u1ea3ng game Digiplay. Stack g\u1ed3m React, Remix, TypeScript, Tailwind, PostgreSQL v\u00e0 Refine.",
      },
      {
        title: "Front-End Developer",
        location: "TP. H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
        description:
          "L\u00e0m vi\u1ec7c nh\u01b0 Front-End Developer, t\u1eadp trung x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web responsive v\u00e0 th\u00e2n thi\u1ec7n. Trong th\u1eddi gian n\u00e0y, t\u00f4i c\u0169ng m\u1edf r\u1ed9ng k\u1ef9 n\u0103ng sang full-stack.",
      },
    ],
  },

  // Contact
  contact: {
    heading: "Li\u00ean h\u1ec7",
    description: "Vui l\u00f2ng li\u00ean h\u1ec7 tr\u1ef1c ti\u1ebfp t\u1ea1i",
    descriptionSuffix: "ho\u1eb7c qua bi\u1ec3u m\u1eabu n\u00e0y.",
    emailLabel: "Email",
    emailPlaceholder: "email@cuaban.com",
    emailRequired: "Vui l\u00f2ng nh\u1eadp email",
    messageLabel: "Tin nh\u1eafn",
    messagePlaceholder: "N\u1ed9i dung tin nh\u1eafn...",
    messageRequired: "Vui l\u00f2ng nh\u1eadp tin nh\u1eafn",
    submitBtn: "G\u1eedi",
    successToast: "G\u1eedi email th\u00e0nh c\u00f4ng!",
  },

  // Footer
  footer: {
    copyright: "Noo DiDa. \u0110\u00e3 \u0111\u0103ng k\u00fd b\u1ea3n quy\u1ec1n.",
  },

  // Meta
  meta: {
    title: "Noo DiDa | Portfolio C\u00e1 nh\u00e2n",
    description:
      "L\u1eadp tr\u00ecnh vi\u00ean full-stack v\u1edbi 3 n\u0103m kinh nghi\u1ec7m x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web.",
  },
};

export default vi;
