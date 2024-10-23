import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import "../styles/routes/index.css";
import type { TProjectCategory } from "~/types/project/projectCategory.type";
import { projects } from "../static/routes";
import { stacks } from "../static/routes";

export default component$(() => {
  const activeSection = useSignal("home");
  const activeCategory = useSignal<TProjectCategory>("전체");

  useVisibleTask$(() => {
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

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("nav a").forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
      observer.disconnect();
    };
  });

  const getFilteredProjects = () => {
    const filteredProjects =
      activeCategory.value === "전체"
        ? [...projects]
        : projects.filter(
            (project) => project.category === activeCategory.value,
          );

    return filteredProjects.sort((a, b) => a.id - b.id);
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation - 모바일에서는 하단에 위치하도록 수정 */}
      <nav class="fixed left-0 z-50 flex h-screen w-20 flex-col items-center justify-center gap-7 space-y-8 bg-transparent md:bottom-auto lg:left-0 lg:h-screen">
        <div class="hidden h-32 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent md:block"></div>
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            href={`#${item}`}
            key={item}
            class={`hover-transform rotate-[-90deg] transform cursor-pointer text-gray-300 transition-all
              ${
                activeSection.value === item
                  ? "font-bold text-purple-400"
                  : "hover:text-purple-400"
              }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
        <div class="hidden h-32 w-1 bg-gradient-to-b from-purple-500 via-transparent to-transparent md:block"></div>
      </nav>

      <section
        id="home"
        class="flex h-screen items-center justify-center pl-4 md:pl-20"
      >
        <div class="relative">
          <div class="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur"></div>
          <div class="card-gradient relative rounded-lg p-6 md:p-12">
            <h1 class="gradient-text mb-4 text-4xl font-bold md:text-7xl">
              이종수
            </h1>
            <p class="animated-border flex justify-center text-xl text-gray-400 md:text-2xl">
              Web Developer
            </p>
          </div>
        </div>
      </section>

      <section id="about" class="min-h-screen px-4 py-10 md:py-20 md:pl-20">
        <div class="mx-auto max-w-6xl">
          <h2 class="gradient-text mb-8 text-3xl font-bold md:mb-12 md:text-4xl">
            About Me
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-11">
            {/* About 텍스트 섹션 */}
            <div class="card-gradient rounded-lg md:col-span-8">
              <p class="p-4 text-base leading-relaxed text-gray-300 md:text-lg">
                의도적이고 명확한 개발을 좋아하는 개발자입니다.
              </p>
            </div>
            {/* 스택 섹션 */}
            <div class="card-gradient mt-6 transform rounded-lg p-6 md:col-span-4 md:mt-0 md:translate-y-12 md:p-8">
              <h3 class="gradient-text mb-4 text-xl font-bold md:mb-6">
                Stack
              </h3>
              <div class="space-y-4 md:space-y-6">
                {Object.entries(stacks).map(([category, items]) => (
                  <div key={category} class="space-y-2">
                    <h4 class="mb-2 capitalize text-purple-400">{category}</h4>
                    <div class="grid grid-cols-2 gap-2">
                      {items.map((skill) => (
                        <div key={skill} class="flex items-center space-x-2">
                          <div class="h-2 w-2 rounded-full bg-purple-400"></div>
                          <span class="text-sm text-gray-300 md:text-base">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="min-h-screen px-4 py-10 md:py-20 md:pl-20">
        <div class="mx-auto max-w-6xl">
          <h2 class="gradient-text mb-8 text-3xl font-bold md:mb-12 md:text-4xl">
            Featured Projects
          </h2>

          <div class="mb-6 flex justify-center space-x-3 md:mb-8 md:space-x-4">
            {["전체", "팀", "개인"].map((category) => (
              <button
                key={category}
                onClick$={() =>
                  (activeCategory.value = category as TProjectCategory)
                }
                class={`rounded-full px-4 py-1.5 text-sm transition-all md:px-6 md:py-2 md:text-base
                  ${
                    activeCategory.value === category
                      ? "bg-purple-600 text-white"
                      : "bg-purple-900/30 text-gray-300 hover:bg-purple-800/50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {getFilteredProjects().map((project) => (
              <div
                key={project.id}
                class="card-gradient project-card overflow-hidden rounded-lg"
              >
                <div class="group relative aspect-video overflow-hidden bg-gradient-to-br from-purple-800 to-pink-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    width={720}
                    height={360}
                  />
                  <div class="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div class="flex space-x-4">
                      <a
                        href={project.aboutLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-lg bg-purple-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-purple-700 md:px-4 md:py-2 md:text-base"
                      >
                        About
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-lg bg-gray-800 px-3 py-1.5 text-sm text-white transition-colors hover:bg-gray-700 md:px-4 md:py-2 md:text-base"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:p-6">
                  <div class="mb-3 flex items-center justify-between md:mb-4">
                    <h3 class="gradient-text text-lg font-bold md:text-xl">
                      {project.title}
                    </h3>
                    <span class="rounded-full bg-purple-900/50 px-2 py-1 text-xs text-purple-300 md:px-3">
                      {project.category}
                    </span>
                  </div>
                  <p class="mb-3 text-sm text-gray-300 md:mb-4 md:text-base">
                    {project.description}
                  </p>
                  <div class="mb-3 flex items-center text-xs text-gray-400 md:mb-4 md:text-sm">
                    <span class="mr-2">📅</span>
                    <span>{project.duration}</span>
                  </div>
                  <div class="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        class="rounded-full bg-purple-900/50 px-2 py-0.5 text-xs text-purple-300 md:px-3 md:py-1 md:text-sm"
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

      <section id="contact" class="min-h-screen px-4 py-10 md:py-20 md:pl-20">
        <div class="mx-auto max-w-4xl">
          <h2 class="gradient-text mb-8 text-3xl font-bold md:mb-12 md:text-4xl">
            Contact
          </h2>
          <div class="card-gradient rounded-lg p-6 md:p-8">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <div class="space-y-3 md:space-y-4">
                  {[
                    { icon: "📧", text: "whdtnxd@gmail.com" },
                    { icon: "🤖", text: "https://github.com/eonduck2" },
                    { icon: "📍", text: "대전 서구" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      class="hover-transform flex items-center space-x-3"
                    >
                      <span class="text-base md:text-lg">{item.icon}</span>
                      <span class="text-sm text-gray-300 md:text-base">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div class="group relative">
                  <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
