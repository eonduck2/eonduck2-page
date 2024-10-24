import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { projects } from "~/static/routes";
import type { TProjectCategory } from "~/types/project/projectCategory.type";

export default component$(() => {
  const activeCategory = useSignal<TProjectCategory>("전체");
  const selectedProject = useSignal<(typeof projects)[0] | null>(null);
  const isModalOpen = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => isModalOpen.value);

    if (isModalOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // 컴포넌트가 언마운트될 때 스크롤을 다시 활성화
    return () => {
      document.body.style.overflow = "auto";
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
                <div class="flex space-x-3">
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
                  <button
                    onClick$={() => {
                      selectedProject.value = project;
                      isModalOpen.value = true;
                    }}
                    class="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-blue-700 md:px-4 md:py-2 md:text-base"
                  >
                    Details
                  </button>
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

      {/* Modal with custom Y scrollbar */}
      {isModalOpen.value && selectedProject.value && (
        <div class="fixed inset-0 z-50 flex items-center justify-center">
          <div
            class="fixed inset-0 bg-black/60"
            onClick$={() => {
              isModalOpen.value = false;
              selectedProject.value = null;
            }}
          ></div>
          <div class="relative z-10 max-h-[90vh] w-[90%] max-w-4xl rounded-lg bg-gray-900 p-6 shadow-xl">
            <div
              class="max-h-[calc(90vh-3rem)] overflow-y-auto overflow-x-hidden pr-6
                [&::-webkit-scrollbar-thumb:hover]:bg-purple-500
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-purple-600
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-800
                [&::-webkit-scrollbar]:w-2"
            >
              <button
                onClick$={() => {
                  isModalOpen.value = false;
                  selectedProject.value = null;
                }}
                class="absolute -right-4 -top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div class="pt-2">
                <img
                  src={selectedProject.value.image}
                  alt={selectedProject.value.title}
                  class="mb-4 h-auto w-full rounded-lg"
                />
                <h2 class="gradient-text mb-2 text-2xl font-bold">
                  {selectedProject.value.title}
                </h2>
                <span class="rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                  {selectedProject.value.category}
                </span>
              </div>

              <div class="mb-6">
                <h3 class="mb-2 text-lg font-semibold text-white">
                  프로젝트 소개
                </h3>
                <p class="text-gray-300">{selectedProject.value.description}</p>
              </div>

              <div class="mb-6">
                <h3 class="mb-2 text-lg font-semibold text-white">개발 기간</h3>
                <p class="text-gray-300">{selectedProject.value.duration}</p>
              </div>

              <div class="mb-6">
                <h3 class="mb-2 text-lg font-semibold text-white">사용 기술</h3>
                <div class="flex flex-wrap gap-2">
                  {selectedProject.value.technologies.map((tech) => (
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
          </div>
        </div>
      )}
    </div>
  );
});
