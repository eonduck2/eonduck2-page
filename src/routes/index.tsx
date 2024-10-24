import { component$ } from "@builder.io/qwik";
import "../styles/routes/index.css";
import Home from "~/components/routes/home";
import About from "~/components/routes/about";
import SideBar from "~/components/menu/sideBar";
import Projects from "~/components/routes/projects";
import Contact from "~/components/routes/contact";

export default component$(() => {
  return (
    <div class="relative flex min-h-screen">
      <SideBar />

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
