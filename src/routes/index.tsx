import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="flex justify-center items-center text-6xl font-bold w-screen h-screen overflow-x-hidden">
        <h1>이종수</h1>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "이종수",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
