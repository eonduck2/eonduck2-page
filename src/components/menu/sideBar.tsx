import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    activeSection: "home",
    manuallySelected: false,
    lastScrollTime: 0,
  });

  useVisibleTask$(() => {
    const handleNavClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const sectionId = target.getAttribute("href")?.replace("#", "");
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          state.activeSection = sectionId;
          state.manuallySelected = true;
          state.lastScrollTime = Date.now();
        }
      }
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const timeSinceLastScroll = Date.now() - state.lastScrollTime;
          if (
            entry.isIntersecting &&
            (!state.manuallySelected || timeSinceLastScroll > 1000)
          ) {
            state.activeSection = entry.target.id;
            state.manuallySelected = false;
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
