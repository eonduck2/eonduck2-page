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
      detailStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Notion",
        "Git",
        "GitHub",
        "Visual Studio Code",
      ],

      purpose: `HTML, CSS, JS의 기본기를 학습하고 최초로 진행했던 프로젝트입니다. 

최초의 프로젝트이기에 느껴졌던 최소한의 긴장감과 부담감을 적절히 소화할 수 있는 방법이 필요했고
"내가 최근에 자주 듣는 노래들을 이용해 나만의 음악 추천기를 만들어보면 어떨까?"와 같은 호기심으로 프로젝트를 시작했습니다.

실제 학습한 기본형의 HTML, CSS, JS 기술을 적극적으로 이용하여 나만의 플레이리스트를 표현한다면
프로젝트에 대한 "정"도 자연스럽게 붙이면서 학습 또한 뒤따라온다고 생각하여 
위와 같은 의도로 개발을 진행했습니다.`,
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
      detailStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Notion",
        "Git",
        "GitHub",
        "Visual Studio Code",
      ],

      purpose: `모던 웹 서비스 레이아웃 및 CSS 가상 클래스에 대한 이해도와 사용 능력치 상승을 위해 진행된 프로젝트입니다.

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
        "Visual Studio Code",
      ],

      purpose: `첫 팀 프로젝트이자 Vanilla JavaScript 및 CSS 전처리기에 대한 이해도를 높일 수 있었던 프로젝트입니다.

대중적인 온라인 게임인 "리그 오브 레전드"를 플레이 해 본 경험을 살려
리그 오브 레전드 유저들이 친숙하게 사용 가능한 전적 검색 사이트를 구현하기 하기 위해 진행된 프로젝트이며
기존에 존재하는 롤 전적 검색 사이트의 장점(전적 뿐만 아니라 유저&게임들의 세부 정보 제공)은 흡수하고
단점(복잡도가 높은 레이아웃 구성)은 보완하려는 의도를 가지고 개발을 진행했습니다.

또한 Node.js를 이용해서 서버를 구현하고 위 서버를 이용한 Riot API의 반환 데이터 처리와도 같은 작업을
프레임워크나 라이브러리를 사용하지 않고 Vanilla JavaScript 코딩을 통해 의도적으로 코어에 접근하기 위해 시도했고, 성공적으로 구현했습니다.
`,
      mainTask: `- Semantic Mark-Up을 적용한 HTML5 문서 작성
- SCSS 셋업 및 MixIn과 같은 전처리기의 특징을 이용해 재사용 가능한 스타일 코드 및 모듈 구현
- 스켈레톤 페이지 구현 및 반환(응답) 데이터 브라우저에 표현
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
Vanilla JS 코딩을 통해 JavaScript 코어에 집중하고 들여다봄으로써
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
        "Visual Studio Code",
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
Node.js의 가능성 또한 확인할 수 있었기 때문에 저의 성장 가능성에 있던 자그마한 의심들이 사라졌습니다.`,
    },
  },
  {
    id: 9,
    title: "포켓 북",
    description: "Poke API를 이용한 포켓몬 도감 구현",
    image: "/images/pokebook/poke_main.png",
    images: [
      "/images/pokebook/poke_main.png",
      "/images/pokebook/poke_frame.png",
    ],
    duration: "24.05.12 ~ 24.05.20",
    technologies: ["HTML5", "Less.js", "JavaScript"],
    aboutLink:
      "https://freckle-nasturtium-6d7.notion.site/81da5b16439c41999df391e6da5ee3c8?pvs=73",
    githubLink: "https://github.com/eonduck2/pokemon",
    category: "개인",
    details: {
      detailStack: [
        "HTML5",
        "Less.js",
        "JavaScript",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "Visual Studio Code",
      ],

      purpose: `REST API와 이에 응답하는 프로미스 객체 숙련도를 높이기 위해 진행한 프로젝트이며
SCSS와 같은 CSS 전처리기인 Less.js를 사용하여
SCSS가 왜 다른 전처리기들에 비해 점유율이 높은지 이해하고 비교하려는 의도를 가지고 개발을 진행했습니다.
`,
      mainTask: `- async/await을 통한 비동기 처리
- 재사용성이 보장된 Less.js 스타일 코드 구현`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/41a456e54d3f4ccbb255f714c927600e?pvs=4",
      ],
      report: `유독 다른 개념보다 헷갈렸던 프로미스 객체의 동작 방식과 조작에 있어서 부담감이 사라졌으며
비동기 처리에 있어서 프로미스 객체가 보여주는 강력한 모습과 사용성을 인지하고 사용할 수 있게 되었습니다.
`,
    },
  },
  {
    id: 8,
    title: "Blog",
    description: "개인적으로 사용할 수 있는 블로그 개발",
    image: "/images/blog/blog_post.png",
    images: [
      "/images/blog/blog_main.png",
      "/images/blog/blog_post.png",
      "/images/blog/blog_posted.png",
      "/images/blog/blog_frame.png",
    ],
    duration: "24.05.24 ~ 24.06.06",
    technologies: ["HTML5", "JavaScript"],
    aboutLink:
      "https://freckle-nasturtium-6d7.notion.site/1f74593719284f0f913e16c4ecb90a27?pvs=73",
    githubLink: "https://github.com/eonduck2/Blog",
    category: "개인",
    details: {
      detailStack: [
        "HTML5",
        "JavaScript",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "Visual Studio Code",
      ],

      purpose: `개인적으로 사용할 수 있는 블로그이며 
Node.js를 통한 CRUD 및 프레임워크와 라이브러리에 의지하지 않으며 
HTML 문서 제작과 CSS-IN-JS 스타일링 & 웹 서버 구현을 Vanilla JS로 구현하려는 의도로 개발이 진행됐습니다.
`,
      mainTask: `- DOM API를 이용한 상호작용 Element 생성
- DOM 조작(JS)를 이용한 UI 스타일링
- Node.js를 이용한 포스팅 관련 CRUD`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/41a456e54d3f4ccbb255f714c927600e",
      ],
      report: `Node.js를 이용한 포스팅 관련 CRUD 구현이 프로젝트 전체 구조 파악에 있어서 정말 큰 도움이 되었습니다.
JS로 구현하지 못한다면, 프레임워크나 라이브러리를 사용하는 의미가 없다는 고집이 생겼으며
위 고집이 스스로 잘못된 의도로 작성되는 코드에 대해서 은근한 꼬집음이 작용돼 역치가 증폭됐음을 체감했습니다.
`,
    },
  },
  {
    id: 7,
    title: "Chaining-Tracker",
    description: "Chaining된 값을 추적할 수 있는 VSC 확장 프로그램 개발",
    image: "/images/chainingTracker/ct_main.png",
    images: [
      "/images/chainingTracker/ct_main.png",
      "/images/chainingTracker/ct_published.png",
    ],
    duration: "24.06.07 ~ 24.06.11",
    technologies: ["TypeScript"],
    aboutLink:
      "https://freckle-nasturtium-6d7.notion.site/Chainig-Tracker-8dd5f5ee1ac641b581b938141ceef2b3?pvs=4",
    githubLink: "https://github.com/eonduck2/chaining-tracker",
    category: "개인",
    details: {
      detailStack: [
        "TypeScript",
        "Notion",
        "Git",
        "GitHub",
        "Visual Studio Code",
      ],

      purpose: `기존 RESI API를 이용하며 요청에 따른 응답 데이터 즉, 데이터를 풀어헤칠 수 있게 프로미스 객체를 조작할 때
단계별로 디버깅을하며 반환 데이터를 확인하는데에 있어서 불편함과 번거로움을 느꼈습니다.
그럼에도 예상치 못한 데이터가 반환될 수도 있고, 꼭 프로미스 체이닝이 아닐지라도 단순 문자열 체이닝에 대한 값도
단위별로 추적하면 번거로움을 극복할 수 있을 것이라고 생각했기에 이를 "나만의 확장 프로그램 제작"이라는 의도와 엮어 개발을 진행했습니다.
`,
      mainTask: `- VSC 개발 호스트를 통한 확장 프로그램 개발
- 체이닝 단위별 Console에 Logging 구현
`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/3df3f9c4b6624bd48ebe2ff6600f68fb?pvs=4",
      ],
      report: `"욕심내는만큼 다 만들어낼 수 있는 분야"라는 진취적 마인드가 자리잡았으며
개발자에게 불편함이란 곧, 아이디어란 사실을 깨닫게 되는 계기가 되는 프로젝트였습니다.
`,
    },
  },
  {
    id: 6,
    title: "Dream Vending Machine",
    description: "세상에 없는 신비로운 자판기 구현",
    image: "/images/dvm/dvm_main.png",
    images: ["/images/dvm/dvm_main.png", "/images/dvm/dvm_contents.png"],
    duration: "24.06.21 ~ 24.07.11",
    technologies: ["HTML5", "Tailwind CSS", "TypeScript", "SQLite3"],
    aboutLink:
      "https://kongukjae.notion.site/Rock-Coders-8c86e1ce7ccd4f839e9ce0513e2a6b54",
    githubLink:
      "https://github.com/eonduck2/pre-project-vending-machine-4-RockCoders",
    category: "팀",
    details: {
      detailStack: [
        "HTML5",
        "TypeScript",
        "Tailwind CSS",
        "SQLite3",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "ERD Cloud",
        "Visual Studio Code",
      ],

      purpose: `"세상에 존재하지 않는 자판기를 구현해보자"

기존 자바스크립트 프로젝트들을 진행하면서 프로젝트가 진행 척도에 따라 꾸준히 살이 찌고
이에 맞물려서 자바스크립트의 유연함에 머리가 지끈했던 경우가 적지만 존재했습니다.
아직은 경험치가 낮은 개발자에겐 분명히 좋은 경험이였지만 또 분명하게도 좋은 기억은 아니었습니다.

위 기억을 다시 쌓고 싶지 않아, 타입 안정성이 보장된 타입스크립트를 통한 개발 의사를 밝혔고
CSS 또한 생산성을 확보하기 위해 유틸리티 프레임워크를 사용하기로 합의,
DB를 처음 다뤄보는 입장에서 분명한 긴장감과 부담감이 있었기에 
SQLite를 사용해 가볍게 데이터를 관리하려는 의도를 가지고 개발을 진행했습니다.
`,
      mainTask: `- ERD 제작
- 재사용성 보장된 Interface 파일 정의
- DB CRUD 기능 구현
- DB 백업 기능 구현
- DB Restore 기능 구현
- DB 인덱싱 구현
- 컬럼 재배치 기능 구현
- DB 크기 측정 기능 구현
- SQLite3 제약 조건을 반환 받는 유틸리티 함수 제작
- TCL 관련 기능 구현
- DB 최적화 기능 구현
`,
      workHistory: [
        "https://kongukjae.notion.site/8160ec2d46824609a710ea375cf2b246?v=0fdb3f5e34924d87a88a6010b217517d",
      ],
      report: `서로 다른 기준과 스타일을을 이해하며 진행할 수 있었던 좋은 경험이였습니다.

5인 기준의 팀 단위 작업의 템포를 이해 및 체감할 수 있어서 똑같은 상황이 주어졌을 때
더 좋은 결과를 기대할 수 있다는 생각이 들었습니다.

특히 맡은 바 작업을 진행했던 DB 기능 개발에 있어서, CRUD가 기본기이며
많은 DB 개발자들이 데이터 보안이나 인덱싱같은 최적화 부분에 집중하고 있음을 깨닫게되는 가치있는 프로젝트였습니다.
`,
    },
  },
  {
    id: 5,
    title: "Rock coders - ERP",
    description: "가상의 패스트 푸드 기업의 웹 기반 자원 관리 시스템",
    image: "/images/rcdrs_erp/rcdrs_login.png",
    images: [
      "/images/rcdrs_erp/rcdrs_main.png",
      "/images/rcdrs_erp/rcdrs_login.png",
      "/images/rcdrs_erp/rcdrs_buy.png",
      "/images/rcdrs_erp/rcdrs_my_page.png",
      "/images/rcdrs_erp/rcdrs_get_items.png",
      "/images/rcdrs_erp/rcdrs_items_val.png",
      "/images/rcdrs_erp/rcdrs_check_member.png",
      "/images/rcdrs_erp/ERP.png",
    ],
    duration: "24.07.15 ~ 24.08.11",
    technologies: ["Next.js", "Nest.js", "MongoDB"],
    aboutLink:
      "https://kongukjae.notion.site/Rock-Coders-ERP-c6338f80fca24f3d8b39a759dad839a4?pvs=74",
    githubLink: "https://github.com/eonduck2/KDT-IaaS-2-ProjectA-4team",
    category: "팀",
    details: {
      detailStack: [
        "Next.js",
        "TypeScript",
        "Shadcn UI",
        "Nest.js",
        "Tailwind CSS",
        "MongoDB",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "Visual Studio Code",
      ],

      purpose: `Next와 같은 퍼블릭한 프레임워크 환경에서의 개발에 적응하고
가상의 패스트 푸드 기업의 자원 관리 프로그램을 구현하려는 의도로 개발이 진행되었습니다. 
`,
      mainTask: `- 스켈레톤 제작 관련 깃허브 이슈 제작 및 분배
- 로그인 및 회원가입 입력값 유효성 검사
- 회원 관리 페이지 제작
- PUT Method를 이용한 관리자 추가/삭제 구현
- 라이브러리(KY)를 사용한 Fetch 모듈 구현
- MongoDB 데이터 삽입 기능 구현
- 디렉토리 구조화(리팩토링)
- 정적 자원 분리(리팩토링)
- 모듈 분리(리팩토링)
- 인터페이스 밎 타입 분리(리팩토링)
- AWS Amplify를 이용해 Next.js 프로젝트 배포
- AWS EC2를 이용해 Nest.js 프로젝트 배포
- AWS S3를 이용해 프로젝트 이미지 호스팅
- MongoDB Atlas를 이용해 클라우드 DB 환경 셋업
- 배포 환경 환경 변수 정의
`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/1d717d08815646a2a97d80a2e7e25ce6?pvs=4",
        "https://freckle-nasturtium-6d7.notion.site/f98f4bf5f1c1476383fe9524b77667ac?pvs=4",
        "https://freckle-nasturtium-6d7.notion.site/f27e9490d7a9436ebb52461a0b82f77f?pvs=4",
        "https://freckle-nasturtium-6d7.notion.site/ed00ee9d60f2401f9fef5c10d2d5fe9b?pvs=4",
        "https://freckle-nasturtium-6d7.notion.site/6b488d5eaf5b41be835188917845de57?pvs=4",
      ],
      report: `좁아진 시야를 다시금 넓혀준 고마운 프로젝트입니다.
"자원 관리"라는 단어가 저에게는 돈이나 재료 쯤으로 여기고 깊이있는 생각으로 개발을 진행하지는 않았지만,
설계를 기반으로 개발을 진행하다보니 꽤 오래 잊고있었던 노동자나 시간과 같은 구분되는 자원에 대해서도 다시금 생각하게 되는 계기가 되었습니다.

또 한가지 중요한 점은, 프레임워크나 라이브러리에 부담감이 말끔히 사라졌다는 것을 체감했습니다.
NPM도 생소했던 시기를 생각해보면 Vanilla JS 코딩을 통해 역치를 뚫어놓은 덕을 봤다는 것을 새삼스레 깨닫게됩니다.
`,
    },
  },
  {
    id: 4,
    title: "Workids",
    description:
      "저출산, 고령화에 필요한 첨단 디지털 서비스 개발을 위한 설계 기반 개발 진행",
    image: "/images/workids/workids_first_cont.png",
    images: [
      "/images/workids/workids_first_cont.png",
      "/images/workids/workids_sec_cont.png",
    ],
    duration: "24.08.27 ~ 24.09.06",
    technologies: ["TypeScript", "Python", "SQL"],
    aboutLink:
      "https://kongukjae.notion.site/Workids-7d405d9d9e0a42c4a5c890d6be5493b0?pvs=4",
    githubLink: "https://github.com/eonduck2/",
    category: "팀",
    details: {
      detailStack: [
        "Python",
        "TypeScript",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "Visual Studio Code",
      ],

      purpose: `해커톤 지정 과제로서 저출산, 고령화를 파고들 수 있는 기준점을 "노동"으로 정해두고
팀원 각자의 직장 생활 경험을 상기하며
"노동"환경에서부터 개선해 저출산, 고령화에 간접적 영향력을 행사하는 서비스를 개발하려는 의도로 진행했습니다.
`,
      mainTask: `- 아이디어 수립
- 관련 기사(통계) 스크랩
- 생산형 AI를 이용한 특정 키워드 선별
- IA 제작
- 참가 신청서 및 개발 기획서 작성
`,
      workHistory: [
        "https://kongukjae.notion.site/AI-f6b15c35b55d4a25bd329bb242152e36?pvs=4",
        "https://kongukjae.notion.site/c04b2153d2ea4bba816d849ff07f223b",
      ],
      report: `비록 해커톤에서는 떨어져서 코드는 한 줄도 적지 못 했지만,
가장 원하던 느낌의 개발을 진행했던 프로젝트입니다.

키보드를 몇 번 두드리면 나타날 뿐인 객관적 사실에 불과한 코딩과는 다르게
비구조화된 아이디어를 팀원들끼리 다듬고 쳐내며 개발 기획서까지 작성해서 제출했기에
개발을 시작한 이후로 가장 행복한 개발이 아니였나 싶습니다.
`,
    },
  },
  {
    id: 3,
    title: "Tarantula",
    description:
      "개인 프로젝트에 사용할 유튜브 관련 정보들을 수집하는 크롤러 개발",
    image: "/images/tarantula/tarantula_crawled.png",
    images: [
      "/images/tarantula/tarantula_crawling.png",
      "/images/tarantula/tarantula_crawled.png",
    ],
    duration: "24.09.11 ~ 24.09.11",
    technologies: ["python"],
    aboutLink: "",
    githubLink: "https://github.com/eonduck2/tarantula",
    category: "개인",
    details: {
      detailStack: [
        "Python",
        "Selenium",
        "Git",
        "GitHub",
        "Visual Studio Code",
      ],

      purpose: `개인 프로젝트에 사용할 검색어 기준의 유튜브 데이터들을 크롤링하기 위해 개발했습니다.
`,
      mainTask: `- Selenium을 이용한 YouTube 페이지 크롤러 구현
- 검색어와 검색 시간을 이용한 JSON 고유 파일명 확보
`,
      workHistory: [
        "https://freckle-nasturtium-6d7.notion.site/JSON-12d698aa56b880259555cebe9ec3a7e4?pvs=4",
      ],
      report: `간단한 구현이였어서 그랬던건지, 생각보다 쉽고 간편하게 작업이 완료됐습니다.
"크롤러"라는 단어가 가지는 왜인지 모를 무게감에 조금은 긴장감이 있었는데 연기처럼 사라진 느낌이 듭니다.
이런 체감 난이도와는 다르게 수집된 다량의 데이터는 저에게는 선물처럼 느껴졌고 크롤러가 가진 강력함을 체감할 수 있었습니다.
`,
    },
  },
  {
    id: 2,
    title: "Eco Vision",
    description: "야생 동물 모니터링 및 출몰 알림 서비스",
    image: "/images/ecoVision/ev_warn.png",
    images: [
      "/images/ecoVision/ev_main.png",
      "/images/ecoVision/ev_warn.png",
      "/images/ecoVision/ev_training.jpg",
      "/images/ecoVision/ev_multi_training.jpg",
      "/images/ecoVision/ev_runs.png",
    ],
    duration: "24.09.13 ~ 24.10.08",
    technologies: ["Vue.js", "Python"],
    aboutLink:
      "https://kongukjae.notion.site/Eco-Vision-5fa80f263eed47c5b0976119981c910d?pvs=4",
    githubLink: "https://github.com/eonduck2/KDT-IaaS-2-ProjectB-3team-fe",
    category: "팀",
    details: {
      detailStack: [
        "Vue.js",
        "TypeScript",
        "PrimeVue",
        "Tailwind CSS",
        "Python",
        "Flask",
        "PyTorch",
        "Yolov5",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "Visual Studio Code",
      ],

      purpose: `야생 동물을 분류할 수 있게 모델을 훈련시켜 생태 통로 모니터링 및 피해 방지 시스템을 구현하기 위한 의도로 진행했습니다.
`,
      mainTask: `- Vue.js, Flask 자료 조사 및 정리
- 지도 위치 입력 클래스 구현
- 백엔드 서버 구현
- 블루 프린트 제작 모듈 생성
- 멀티 모델(11개) 훈련
- 신뢰도 기반 야생 동물 구분 기능 구현
`,
      workHistory: [
        "https://kongukjae.notion.site/Flask-85e00fea1b654f3eb302e1965147717d",
        "https://kongukjae.notion.site/Vue-js-0a206f0d6d884343824c1eb0d3a07a7c?pvs=74",
        "https://sharing.clickup.com/9014616582/b/h/5-90143649882-2/329a6075c6e098a",
      ],
      report: `내색은 안 했지만 "머신 러닝" 단어 그 자체에 긴장을 많이 했었습니다.
그렇지만 늘 욕심을 내는 만큼 내껄로 만들 수 있다고 생각했고 
그때문인지 실제 개발을 진행할 때에는 긴장감이 꽤 많이 수그러들었습니다.
그 이유를 혼자서 생각해보니 모델을 훈련하고 훈련한 모델의 동작을 예상하는 그 과정 자체에 생각보다 많이 즐겼던 것 같습니다.

크롤러에게 "데이터"를 선물 받았다면 훈련된 모델에게는 그보다 깊은 "충성도"를 선물받은 느낌이였습니다.

언제 또 이런 시기에 이런 경험과 감정을 가질 수 있을지는 미지수지만 제게는 매우 귀한 경험이였습니다.
`,
    },
  },

  {
    id: 1,
    title: "YouTube 유틸리티 플랫폼",
    description: "유튜브 사용자들에게 상세 데이터들을 제공하는 유틸리티 서비스",
    image: "/images/ytUp/yt_channel.png",
    images: [
      "/images/ytUp/yt_main.png",
      "/images/ytUp/yt_search.png",
      "/images/ytUp/yt_channel.png",
      "/images/ytUp/yt_trending.png",
      "/images/ytUp/yt_figma.png",
    ],
    duration: "24.09.09 ~ ing",
    technologies: ["Qwik", "Go", "Redis"],
    aboutLink: "",
    githubLink: "https://github.com/eonduck2/ioyoa-fe",
    category: "개인",
    details: {
      detailStack: [
        "Qwik",
        "TypeScript",
        "Tailwind CSS",
        "Go",
        "Gin-gonic",
        "Redis",
        "Click Up",
        "Notion",
        "Git",
        "GitHub",
        "Figma",
        "Visual Studio Code",
      ],

      purpose: `미디어 플랫폼 사이트인 "YouTube"의 미디어 컨텐츠들이 아닌
채널의 메타 데이터나 동영상의 상세 정보 같은 유틸리티 컨텐츠들을 제공하고 구현하기 위해 작업을 진행했습니다.

특히 Qwik을 사용해 초기 로딩을 제어했으며
분산된 Go 웹 서버를 사용해 API의 응답 및 요청을 동시다발적으로 처리하고
인 메모리 방식의 Redis를 사용해 사용자 검색어 저장과 인기 검색어를 실시간으로 빠르게 처리하려는 의도로 개발을 진행했습니다.
`,
      mainTask: `- YouTube API 요청에 따른 반환 데이터로 웹 컨텐츠 구현
- Select 옵션에 따른 요청(검색) 구현
- 백엔드 메인 서버 구현
- 백엔드 종류별 서버 구현
- Redis 서버 구현
- Redis-labs를 이용햔 사용자 검색 정보 저장
- Redis 저장 데이터 기반 인기 검색어 구현
- 반환 데이터 기반 채널 상세 데이터 컴포넌트 구현
`,
      workHistory: [
        "https://sharing.clickup.com/9014616582/b/h/5-90143610828-2/d7c39f4c306d275",
      ],
      report: `욕심 나는 무엇이든 내 것으로 만들 수 있다는 것이 이 분야의 가장 큰 매력임을 다시금 깨달았던 프로젝트입니다.
그렇기 때문에 오히려 "의도"에 각별히 집중할 수 있었던 것 같습니다.
"지금 내가 이 기술이 필요한가 ?",
"꼭 이 라이브러리를 사용해서 구현해야하나 ?"와 같은 개발자로서의 이해타산적 시야가 넓어진 것이 깊게 체감되기 때문에
그동안 해온 것들이 무의미하지 않았다는 것 또한 다시금 깨달았습니다.
`,
    },
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
  Database: ["SQLite3", "MongoDB", "Redis"],
  "cloud/deploy": ["AWS", "GCP"],
};
