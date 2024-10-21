// routes/index.tsx
import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

// 프로젝트 타입 정의
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

// 프로젝트 더미 데이터
const projects: Project[] = [
  {
    id: 1,
    title: "AI Chat Application",
    description:
      "실시간 채팅 애플리케이션으로 AI를 활용한 자동 응답 시스템 구현. WebSocket을 통한 실시간 통신과 OpenAI API를 활용한 지능형 챗봇 서비스.",
    image: "/projects/chat-app.jpg",
    technologies: ["React", "TypeScript", "WebSocket", "OpenAI"],
    demoLink: "https://demo.example.com/chat",
    githubLink: "https://github.com/yourusername/chat-app",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "현대적인 디자인의 전자상거래 플랫폼. Stripe 결제 시스템 통합 및 실시간 재고 관리 기능을 갖춘 풀스택 이커머스 솔루션.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Redux", "Stripe", "TailwindCSS"],
    demoLink: "https://demo.example.com/shop",
    githubLink: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "드래그 앤 드롭 기능을 갖춘 직관적인 작업 관리 시스템. 실시간 협업 기능과 자동화된 작업 할당 시스템 구현.",
    image: "/projects/task-manager.jpg",
    technologies: ["Vue.js", "Vuex", "DnD", "Firebase"],
    demoLink: "https://demo.example.com/tasks",
    githubLink: "https://github.com/yourusername/task-manager",
  },
];

export default component$(() => {
  const activeSection = useSignal("home");

  // Intersection Observer 및 스크롤 이벤트 설정
  useVisibleTask$(() => {
    // 커스텀 커서 생성

    // 스무스 스크롤 구현
    const handleNavClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const sectionId = target.getAttribute("href")?.replace("#", "");
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          activeSection.value = sectionId;
        }
      }
    };

    // 네비게이션 링크에 이벤트 리스너 추가
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    // 섹션 감지를 위한 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      { threshold: 0.5 },
    );

    // 모든 섹션 관찰 시작
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // 클린업 함수
    return () => {
      document.querySelectorAll("nav a").forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
      observer.disconnect();
    };
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* 스타일 정의 */}
      <style>{`
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid #fff;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: all 0.1s ease;
        }
        
        .hover-transform {
          transition: transform 0.3s ease;
        }
        
        .hover-transform:hover {
          transform: translateX(10px);
        }

        .gradient-text {
          background: linear-gradient(to right, #fff, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-gradient {
          background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1));
          backdrop-filter: blur(10px);
        }

        .animated-border {
          position: relative;
          overflow: hidden;
        }

        .animated-border::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(to right, transparent, #a78bfa, transparent);
          transform: translateX(-100%);
          animation: borderAnimation 3s infinite;
        }

        @keyframes borderAnimation {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .project-card {
          transition: all 0.3s ease-in-out;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* 네비게이션 */}
      <nav class="fixed left-0 z-50 flex h-screen w-20 flex-col items-center justify-center space-y-8 bg-transparent">
        <div class="h-32 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            href={`#${item}`}
            key={item}
            class={`hover-transform rotate-[-90deg] transform cursor-pointer text-gray-300 transition-all
              ${activeSection.value === item ? "font-bold text-purple-400" : "hover:text-purple-400"}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
        <div class="h-32 w-1 bg-gradient-to-b from-purple-500 via-transparent to-transparent"></div>
      </nav>

      {/* 히어로 섹션 */}
      <section
        id="home"
        class="flex h-screen items-center justify-center pl-20"
      >
        <div class="relative">
          <div class="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur"></div>
          <div class="card-gradient relative rounded-lg p-12">
            <h1 class="gradient-text mb-4 text-7xl font-bold">Your Name</h1>
            <p class="animated-border inline-block text-2xl text-gray-400">
              Creative Developer
            </p>
          </div>
        </div>
      </section>

      {/* 어바웃 섹션 */}
      <section id="about" class="min-h-screen py-20 pl-20">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="gradient-text mb-12 text-4xl font-bold">About Me</h2>
          <div class="grid grid-cols-12 gap-6">
            <div class="card-gradient col-span-8 rounded-lg p-8">
              <p class="text-lg leading-relaxed text-gray-300">
                Passionate developer crafting digital experiences through code
                and creativity. Specialized in building modern web applications
                with cutting-edge technologies.
              </p>
            </div>
            <div class="card-gradient col-span-4 translate-y-12 transform rounded-lg p-8">
              <h3 class="gradient-text mb-4 text-xl font-bold">Skills</h3>
              <div class="space-y-2">
                {["React", "Qwik", "TypeScript", "Node.js", "UI/UX Design"].map(
                  (skill) => (
                    <div key={skill} class="flex items-center space-x-2">
                      <div class="h-2 w-2 rounded-full bg-purple-400"></div>
                      <span class="text-gray-300">{skill}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" class="min-h-screen py-20 pl-20">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="gradient-text mb-12 text-4xl font-bold">
            Featured Projects
          </h2>
          <div class="grid grid-cols-12 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                class={`card-gradient project-card overflow-hidden rounded-lg
                  ${index === 0 ? "col-span-8" : "col-span-6"} 
                  ${index === 2 ? "translate-y-12 transform" : ""}`}
              >
                <div class="group relative aspect-video overflow-hidden bg-gradient-to-br from-purple-800 to-pink-800">
                  <div class="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div class="flex space-x-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="gradient-text mb-2 text-xl font-bold">
                    {project.title}
                  </h3>
                  <p class="mb-4 text-gray-300">{project.description}</p>
                  <div class="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        class="rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 컨택트 섹션 */}
      <section id="contact" class="min-h-screen py-20 pl-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="gradient-text mb-12 text-4xl font-bold">Let's Connect</h2>
          <div class="card-gradient rounded-lg p-8">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 class="gradient-text mb-4 text-2xl font-bold">
                  Get in Touch
                </h3>
                <p class="mb-6 text-gray-300">
                  Have a project in mind? Let's create something amazing
                  together.
                </p>
                <div class="space-y-4">
                  {[
                    { icon: "📧", text: "your.email@example.com" },
                    { icon: "📱", text: "Available for freelance" },
                    { icon: "📍", text: "Based in Your Location" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      class="hover-transform flex items-center space-x-3"
                    >
                      <span>{item.icon}</span>
                      <span class="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div class="group relative">
                  <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
                  <button class="relative rounded-lg bg-black px-8 py-4 font-medium text-white">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
