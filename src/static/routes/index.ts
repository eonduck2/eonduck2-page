import type { TProject } from "~/types/project/project.type";

export const projects: TProject[] = [
  {
    id: 13,
    title: "랜덤 음악 추천기",
    description: "최근에 자주 듣는 음악들을 선정해서 랜덤하게 추천",
    image: "/images/random_music/random_music.png",
    images: [
      "/images/random_music/random_music.png",
      "/images/random_music/random_music_olivia.png",
      "/images/random_music/random_music_pomal.png",
    ],
    duration: "24.04.03 ~ 24.04.05",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    aboutLink: "https://eonduck2.github.io/random_music_recommend/",
    githubLink: "https://github.com/eonduck2/random_music_recommend",
    category: "개인",
    details: {
      purpose: `HTML, CSS, JS의 기본기를 학습하고 최초로 진행했던 프로젝트입니다. 

최초의 프로젝트이기에 느껴졌던 최소한의 긴장감과 부담감을 적절히 소화할 수 있는 방법이 필요했고
"내가 최근에 자주 듣는 노래들을 이용해 나만의 음악 추천기를 만들어보면 어떨까?"와 같은 호기심으로 프로젝트를 시작했습니다.
또한 실제 학습한 기본형의 HTML, CSS, JS 기술을 적극적으로 이용하여 나만의 플레이리스트를 표현한다면
프로젝트에 대한 "정"도 자연스럽게 붙이면서 학습 또한 뒤따라온다고 생각하여 
위와 같은 방향으로 개발을 진행했습니다.`,
      mainTask: `- DOM API를 이용한 객체 조작
- 랜덤 난수 발생 후 음악 추천
- 랜덤한 음악(조건)에 따른 가수 상세 정보 처리`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/1-9710f3126298423a9129c31a69f60ef5?pvs=4",
      ],
      detailStack: ["HTML5", "CSS3", "JavaScript", "Notion", "Git", "GitHub"],
    },
  },
  {
    id: 12,
    title: "아이폰 15 클론",
    description: "아이폰 15 클론 페이지 구현",
    image: "/images/iphone15/iphone15_camel.png",
    images: [
      "/images/iphone15/iphone15_main.png",
      "/images/iphone15/iphone15_camel.png",
      "/images/iphone15/iphone15_zoom.png",
      "/images/iphone15/iphone15_charge.png",
      "/images/iphone15/iphone15_layout.png",
    ],
    duration: "24.04.09 ~ 24.04.16",
    technologies: ["HTML5", "CSS3"],
    aboutLink: "https://eonduck2.github.io/iphone15Clone/",
    githubLink: "https://github.com/eonduck2/iphone15Clone",
    category: "개인",
    details: {
      purpose: `HTML, CSS, JS의 기본기를 학습하고 최초로 진행했던 프로젝트입니다. 

최초의 프로젝트이기에 느껴졌던 최소한의 긴장감과 부담감을 적절히 소화할 수 있는 방법이 필요했고
"내가 최근에 자주 듣는 노래들을 이용해 나만의 음악 추천기를 만들어보면 어떨까?"와 같은 호기심으로 프로젝트를 시작했습니다.
또한 실제 학습한 기본형의 HTML, CSS, JS 기술을 적극적으로 이용하여 나만의 플레이리스트를 표현한다면
프로젝트에 대한 "정"도 자연스럽게 붙이면서 학습 또한 뒤따라온다고 생각하여 
위와 같은 방향으로 개발을 진행했습니다.`,
      mainTask: `- DOM API를 이용한 객체 조작
- 랜덤 난수 발생 후 음악 추천
- 랜덤한 음악(조건)에 따른 가수 상세 정보 처리`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/1-9710f3126298423a9129c31a69f60ef5?pvs=4",
      ],
      detailStack: ["HTML5", "CSS3", "JavaScript", "Notion", "Git", "GitHub"],
    },
  },
  {
    id: 11,
    title: "Team.gg",
    description:
      '온라인 게임 "리그 오브 레전드" 사용자의 전적 검색이 가능한 서비스 구현',
    image: "/images/teamGG.png",
    duration: "24.04.15 ~ 24.05.27",
    technologies: ["HTML5", "SCSS", "JavaScript", "Node.js"],
    aboutLink:
      "https://kongukjae.notion.site/Team-gg-2fb51b32fdd644e4b95064b4834c8484?pvs=4",
    githubLink: "https://github.com/eonduck2/Team.gg",
    category: "팀",
  },
  {
    id: 10,
    title: "나루토 캐릭터 카드",
    description:
      "narutoDB API를 이용한 가장 좋아하는 나루토 캐릭터 5명의 캐릭터 카드 구현",
    image: "/images/favorite_naruto.png",
    duration: "24.05.11 ~ 24.05.11",
    technologies: ["HTML5", "SCSS", "JavaScript", "Node.js"],
    aboutLink: "https://eonduck2.github.io/favorite_naruto_character/",
    githubLink: "https://github.com/eonduck2/favorite_naruto_character",
    category: "개인",
  },
  {
    id: 9,
    title: "포켓 북",
    description: "Poke API를 이용한 포켓몬 도감 구현",
    image: "/images/pokemon.png",
    duration: "24.05.12 ~ 24.05.20",
    technologies: ["HTML5", "Less.js", "JavaScript"],
    aboutLink:
      "https://freckle-nasturtium-6d7.notion.site/81da5b16439c41999df391e6da5ee3c8?pvs=73",
    githubLink: "https://github.com/eonduck2/pokemon",
    category: "개인",
  },
  {
    id: 8,
    title: "Blog",
    description: "개인적으로 사용할 수 있는 블로그 개발",
    image: "/images/blog.png",
    duration: "24.05.24 ~ 24.06.06",
    technologies: ["HTML5", "JavaScript"],
    aboutLink:
      "https://freckle-nasturtium-6d7.notion.site/1f74593719284f0f913e16c4ecb90a27?pvs=73",
    githubLink: "https://github.com/eonduck2/Blog",
    category: "개인",
  },
  {
    id: 7,
    title: "Chaining-Tracker",
    description: "Chaining된 값을 추적할 수 있는 VSC 확장 프로그램 개발",
    image: "/images/chaining_tracker.png",
    duration: "24.06.07 ~ 24.06.11",
    technologies: ["TypeScript"],
    aboutLink:
      "https://freckle-nasturtium-6d7.notion.site/Chainig-Tracker-8dd5f5ee1ac641b581b938141ceef2b3?pvs=4",
    githubLink: "https://github.com/eonduck2/chaining-tracker",
    category: "개인",
  },
  {
    id: 6,
    title: "Dream Vending Machine",
    description: "세상에 없는 신비로운 자판기 구현",
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
    id: 5,
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
    id: 4,
    title: "Workids",
    description:
      "저출산, 고령화에 필요한 첨단 디지털 서비스 개발을 위한 설계 기반 개발 진행",
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
    title: "Tarantula",
    description:
      "개인 프로젝트에 사용할 유튜브 관련 정보들을 수집하는 크롤러 개발",
    image: "/images/tarantula.png",
    duration: "24.09.11 ~ 24.09.11",
    technologies: ["python"],
    aboutLink: "",
    githubLink: "https://github.com/eonduck2/tarantula",
    category: "개인",
  },
  {
    id: 2,
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
    id: 1,
    title: "YT-UP",
    description: "유튜브 사용자들에게 상세 데이터들을 제공하는 유틸리티 서비스",
    image: "/images/yt_up.png",
    duration: "24.09.09 ~ ing",
    technologies: ["Qwik", "Go", "Redis"],
    aboutLink:
      "https://sharing.clickup.com/9014616582/b/h/5-90143610828-2/d7c39f4c306d275",
    githubLink: "https://github.com/eonduck2/ioyoa-fe",
    category: "개인",
  },
];

export const stacks = {
  Language: ["JavaScript", "TypeScript", "Go", "Python"],
  "Front-End": [
    "React.js",
    "Next.js",
    "Vue.js",
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
