import { component$ } from "@builder.io/qwik";
import { stacks } from "~/static/routes";

export default component$(() => {
  return (
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
          <h3 class="gradient-text mb-4 text-xl font-bold md:mb-6">Stack</h3>
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
  );
});
