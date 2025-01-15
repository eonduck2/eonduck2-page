import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative">
      <div class="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur"></div>
      <div class="card-gradient relative rounded-lg p-6 md:p-12">
        <h1 class="gradient-text mb-4 text-4xl font-bold md:text-7xl">
          이종수
        </h1>
        <p class="animated-border flex justify-center text-xl text-gray-400 md:text-2xl">
          Developer
        </p>
      </div>
    </div>
  );
});
