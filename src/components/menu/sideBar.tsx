import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    activeSection: "home",
    manuallySelected: false,
    lastScrollTime: 0,
  });

  return (
    <nav class="fixed left-0 z-50 flex h-screen w-20 flex-col items-center justify-center gap-7 space-y-8 bg-transparent">
      <div class="hidden h-32 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent md:block"></div>
      {["home", "about", "projects", "contact"].map((item) => (
        <a
          href={`#${item}`}
          key={item}
          class={`hover-transform rotate-[-90deg] transform cursor-pointer text-gray-300 transition-all
              ${
                state.activeSection === item
                  ? "font-bold text-purple-400"
                  : "hover:text-purple-400"
              }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
      <div class="hidden h-32 w-1 bg-gradient-to-b from-purple-500 via-transparent to-transparent md:block"></div>
    </nav>
  );
});
