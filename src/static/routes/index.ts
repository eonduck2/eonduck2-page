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
      detailStack: ["HTML5", "CSS3", "JavaScript", "Notion", "Git", "GitHub"],

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
      report: `표현하고 싶었던 아이디어를 웹으로 표현할 수 있다는 가능성과 성취감을 활짝 열어준 고마운 프로젝트이며
짧더라도 작업에 대한 기록을 남겨두는 것이 중요하다는 것을 알려준 가치가 높은 프로젝트입니다.`,
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
      detailStack: ["HTML5", "CSS3", "JavaScript", "Notion", "Git", "GitHub"],

      purpose: `모던 레이아웃 및 CSS 가상 클래스에 대한 이해도와 사용 능력치 상승을 위해 진행된 프로젝트입니다.

모던 웹 서비스에서 Flex나 Grid를 적극적으로 이용한 레이아웃을 개발자 도구를 통해 다수 확인하였고,
이를 이해하고 활용해야 모던 웹에서의 기본기를 갖출 수 있다고 판단했습니다.

또한 CSS 가상 클래스에 대한 이해도도 높이고 싶었던 와중이었기에 
가장 잘 어울리는 프로젝트는 "웹 사이트 클론"이라고 생각했고
이에 대한 적절한 사이트인 애플의 "iPhone 15" 소개 및 판매 사이트를 대상으로 페이지 클론 코딩을 진행했습니다.
`,
      mainTask: `- Flex, Grid를 이용한 레이아웃 구성
- CSS Selector를 이용한 스타일 정의
- 공유 가능한 스타일 변수 정의 및 전역 사용`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/1-2c271c59b16245dcb2bd82bb280aea18?pvs=4",
        "https://freckle-nasturtium-6d7.notion.site/2-0fb944fd42e14ed38490092b0dcff8de?pvs=4",
      ],
      report: `특정 스타일 코드에 대한 변수 지정이나 폰트, 레이아웃과 같은 스타일 종류에 따른 CSS 파일 등을 분류하는 등의
"유지 보수 가능한 형태의 코드란 무엇인가"에 대한 간접적인 경험을 습득할 수 있었습니다.`,
    },
  },
  {
    id: 11,
    title: "Team.gg",
    description:
      '온라인 게임 "리그 오브 레전드" 사용자의 전적 검색이 가능한 서비스 구현',
    image: "/images/teamGG/teamGG_search_result.png",
    images: [
      "/images/teamGG/teamGG_searching.png",
      "/images/teamGG/teamGG_no_playing.png",
      "/images/teamGG/teamGG_search_result.png",
      "/images/teamGG/teamGG_no_search_result.png",
      "/images/teamGG/teamGG_api_flow.png",
      "/images/teamGG/teamGG_api_flow2.png",
    ],
    duration: "24.04.15 ~ 24.05.27",
    technologies: ["HTML5", "SCSS", "JavaScript", "Node.js"],
    aboutLink:
      "https://kongukjae.notion.site/Team-gg-2fb51b32fdd644e4b95064b4834c8484?pvs=4",
    githubLink: "https://github.com/eonduck2/Team.gg",
    category: "팀",
    details: {
      detailStack: [
        "HTML5",
        "SCSS",
        "JavaScript",
        "Node.js",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
      ],

      purpose: `첫 팀프로젝트이자 Vanilla JavaScript 및 CSS 전처리기에 대한 이해도를 높일 수 있었던 프로젝트입니다.

대중적인 온라인 게임인 "리그 오브 레전드"를 플레이 해 본 경험을 살려
리그 오브 레전드 유저들이 친숙하게 사용 가능한 전적 검색 사이트를 구현하기 하기 위해 진행된 프로젝트이며
기존에 존재하는 롤 전적 검색 사이트의 장점(전적 뿐만 아니라 유저&게임들의 세부 정보 제공)은 흡수하고
단점(복잡도가 높은 레이아웃 구성)은 케어하려는 의도를 가지고 개발을 진행했습니다.

또한 Node.js를 이용해서 서버를 구현하고 위 서버를 이용한 Riot API의 반환 데이터 처리와도 같은 작업을
프레임워크나 라이브러리를 사용하지 않고 Vanilla JavaScript 코딩을 통해 의도적으로 코어에 접근하기 위해 시도했고, 성공적으로 구현했습니다.
`,
      mainTask: `- Semantic Mark-Up을 통한 의미있는 HTML5 문서 작성
- SCSS 셋업 및 MixIn과 같은 전처리기의 특징을 이용해 재사용 가능한 스타일 코드 및 모듈 작성
- 스켈레톤 페이지 구현 및 반환(응답) 데이터 표현
- Debounce 기법을 적용한 전적 검색 구현
- 사용자 검색 내용 로컬 스토리지에 저장 및 관리
- 사용자 검색 정보 유효성 검사
- LOG 폴더에 API 요청 횟수와 시간 로깅`,
      workHistory: [
        "https://kongukjae.notion.site/bbc5aff5bb1b4cd893e40f36389252e2?pvs=4",
      ],
      report: `Semantic Mark-Up 방식의 HTML5 문서 작성이 강력한 이점을 준다는 생각이 들었습니다.
의미 있는 구조를 작성해 문서를 볼 때 피로도가 상당히 낮아짐을 느꼈고 
이는 업무의 지속성을 상당히 높여줬다는 것을 체감했습니다.
또한 전처리기/후처리기에 대한 개념을 학습하고 슥듭해 생산성을 확보했으며,
Vanilla JS 개발을 통해 코어에 집중하고 들여다봄으로써
프레임워크나 라이브러리에 대한 긴장감은 사라지고 JavaScript의 역치가 늘어났음을 체감했습니다.`,
    },
  },
  {
    id: 10,
    title: "나루토 캐릭터 카드",
    description:
      "narutoDB API를 이용한 가장 좋아하는 나루토 캐릭터 5명의 캐릭터 카드 구현",
    image: "/images/favorite_naruto/fn_obito.png",
    images: [
      "/images/favorite_naruto/fn_main.png",
      "/images/favorite_naruto/fn_itachi.png",
      "/images/favorite_naruto/fn_obito.png",
      "/images/favorite_naruto/fn_madara.png",
    ],
    duration: "24.05.11 ~ 24.05.11",
    technologies: ["HTML5", "SCSS", "JavaScript", "Node.js"],
    aboutLink: "https://eonduck2.github.io/favorite_naruto_character/",
    githubLink: "https://github.com/eonduck2/favorite_naruto_character",
    category: "개인",
    details: {
      detailStack: [
        "HTML5",
        "SCSS",
        "JavaScript",
        "Node.js",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
      ],

      purpose: `의도적인 Vanilla JS 코딩이 JavaScript 역치를 큰 폭으로 늘려준다는 것을 체감했고
API 요청에 따른 이미 만들어져있는 데이터를 반환받아서 개발을 진행하는 데에 큰 매력을 느꼈습니다.
그렇기 때문에, JS 역치를 더 향상시키고 싶어서 
다시 한번 Node.js로 서버를 구현하고 서빙하는 개인 프로젝트를 진행했습니다.

해당 개인 프로젝트는 "개인 만족"이라는 키워드에 집중해서 평소에 좋아하는 무언가를 만들어보고 싶었고
어릴 때 자주 보고 좋아했던 만화인 "나루토"의 API를 이용해서 반환 데이터를 통한 간단한 나루토 캐릭터 카드를 구현했습니다.
`,
      mainTask: `- 프로미스 체이닝을 통한 반환 데이터 처리
- Node.js를 통한 서버 사이드 렌더링 및 서빙`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/950ca3ef0941482fa7a9aa2604f7a16d?pvs=4",
      ],
      report: `JavaScript 프레임워크나 라이브러리에 대한 긴장감이 확실히 사라졌다는 것을 느꼈고
JavaScript의 깊이감 또한 인지하고 방향성을 확인할 수 있었습니다.

또한, "서버"라는 단어 자체 및 구현에 대한 알게 모르게 갖고있는 부담감 또한 사라졌고
Node.js의 가능성 또한 확인할 수 있었기 때문에 저의 성장 한계에 있어서 아주 작은 의심조차 사라졌습니다.`,
    },
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
