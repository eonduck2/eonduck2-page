import { TProject } from "~/types/project/project.type";

export const projects: TProject[] = [
  {
    id: 5,
    title: "Eco Vision",
    description: "야생 동물 모니터링 및 출몰 알림 서비스",
    image: "/images/eco_vision.png",
    duration: "24.09.13 ~ 24.10.08",
    technologies: ["Vue.js", "Python"],
    aboutLink:
      "https://kongukjae.notion.site/Eco-Vision-5fa80f263eed47c5b0976119981c910d?pvs=4",
    githubLink: "https://github.com/eonduck2/KDT-IaaS-2-ProjectB-3team-fe",
    category: "팀",
  },
  {
    id: 4,
    title: "Workids",
    description: "저출산, 고령화에 필요한 첨단 디지털 서비스 개발",
    image: "/images/workids.png",
    duration: "24.08.27 ~ 24.09.06",
    technologies: ["TypeScript", "Python", "SQL"],
    aboutLink:
      "https://kongukjae.notion.site/Workids-7d405d9d9e0a42c4a5c890d6be5493b0?pvs=4",
    githubLink: "https://github.com/eonduck2/",
    category: "팀",
  },
  {
    id: 3,
    title: "Rock coders - ERP",
    description: "가상의 패스트 푸드 기업의 웹 기반 자원 관리 시스템",
    image: "/images/crcr_burger.png",
    duration: "24.07.15 ~ 24.08.11",
    technologies: ["Next.js", "Nest.js", "MongoDB"],
    aboutLink:
      "https://kongukjae.notion.site/Rock-Coders-ERP-c6338f80fca24f3d8b39a759dad839a4?pvs=74",
    githubLink:
      "https://github.com/eonduck2/pre-project-vending-machine-4-RockCoders/tree/develop",
    category: "팀",
  },
  {
    id: 2,
    title: "Dream Vending Machine",
    description: "세상에 없는 자판기 구현",
    image: "/images/dream_vending.png",
    duration: "24.06.21 ~ 24.07.11",
    technologies: ["HTML5", "Tailwind CSS", "TypeScript", "SQLite3"],
    aboutLink:
      "https://kongukjae.notion.site/Rock-Coders-8c86e1ce7ccd4f839e9ce0513e2a6b54",
    githubLink:
      "https://github.com/eonduck2/pre-project-vending-machine-4-RockCoders",
    category: "팀",
  },
  {
    id: 1,
    title: "Team.gg",
    description: '온라인 게임 "리그 오브 레전드"의 전적 검색 웹 서비스.',
    image: "/images/teamGG.png",
    duration: "24.04.15 ~ 24.05.27",
    technologies: ["HTML3", "SCSS", "JavaScript", "Node.js"],
    aboutLink:
      "https://kongukjae.notion.site/Team-gg-2fb51b32fdd644e4b95064b4834c8484?pvs=4",
    githubLink: "https://github.com/eonduck2/Team.gg",
    category: "팀",
  },
];

export const stacks = {
  Language: ["JavaScript", "TypeScript", "Go", "Python"],
  "Front-End": [
    "React.js",
    "Vue.js",
    "Next.js",
    "Qwik",
    "Tailwind CSS",
    "Vanilla Extract",
    "SASS",
    "Less.js",
  ],
  "Back-End": ["Node.js", "Express.js", "Nest.js", "Flask", "Gin"],
  Database: ["SQLite3", "MongoDB", "Redis", "Firebase"],
  "cloud/deploy": ["AWS", "GCP"],
};
