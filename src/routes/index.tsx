import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";
import "../styles/routes/index.css";
import Home from "~/components/routes/home";
import About from "~/components/routes/about";
import SideBar from "~/components/menu/sideBar";
import Projects from "~/components/routes/projects";
import Contact from "~/components/routes/contact";

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
    <div class="relative flex min-h-screen">
      <SideBar />

      {/* 메인 컨텐츠 영역 */}
      <main class="flex-1 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pl-20">
        <section id="home" class="flex h-screen items-center justify-center">
          <Home />
        </section>

        <section id="about" class="min-h-screen px-4 py-10 md:py-20">
          <About />
        </section>

        <section id="projects" class="min-h-screen px-4 py-10 md:py-20">
          <Projects />
        </section>

        <section id="contact" class="min-h-screen px-4 py-10 md:py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
});
