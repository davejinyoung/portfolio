import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Work from "./components/Work";
import ConstellationsBackground from "./components/ConstellationsBackground";
import BlinkingCursor from "./components/BlinkingCursor";
import Command from "./components/Command";

export default function Home() {
  return (
    <>
      <Navbar />
      <ConstellationsBackground />
      <main className="max-w-2xl mx-auto px-4 scroll-smooth text-green-400 font-mono">
        <div
          aria-hidden
          className="absolute inset-0 z-[-1] fixed pointer-events-none
                bg-[radial-gradient(ellipse_40%_100%_at_center,_rgba(0,255,0,0.03)_0%,_transparent_70%)]
                blur-3xl"
        />
        <section id="about" className="pt-25 pb-20 dark:text-neutral-400">
          <div className="text-sm opacity-60 mb-10">
            Last login: {new Date().toLocaleDateString()} on ttys000
          </div>
          <Command command="whoami && cat about.txt" />
          <div className="pl-4">
            <div className="text-4xl mb-4 text-white">Dave Jung</div>
            <div className="mt-4 text-sm">
              I&apos;m a 4th year Software Engineering student at the University of
              Victoria and I seek to innovate at the bleeding edge of
              technology.
              <br />
              <br />
              I approach building with a naive assumption that all ideas are
              viable and that all problems are solvable.
              <br />
              <br />
              Some of my hobbies include endurance sports, fingerstyle guitar,
              exploring new trails and reading.
            </div>
          </div>
        </section>

        <section id="work" className="pb-20">
          <Command command="ls -la WORK | awk '{print $7, $6}" />
          <div className="grid gap-4 pl-4">
            <Work
              company="Copperleaf Technologies"
              dateRange="Jan 2024 - Aug 2024"
              position="Software Developer Co-op"
              link="https://www.copperleaf.com/"
            />
            <Work
              company="D-Wave Systems"
              dateRange="Jan 2023 - Apr 2023"
              position="Software Engineer In-Test Co-op"
              link="https://www.dwavequantum.com/"
            />
            <Work
              company="Pacific Institute for Climate Solutions"
              dateRange="May 2022 - Aug 2022"
              position="Software Engineering Intern"
              link="https://climatesolutions.ca/"
            />
          </div>
        </section>

        <section id="projects" className="pb-20">
          <Command command="ls -la PROJECTS | awk '{print $7, $6}" />
          <div className="grid gap-4 pl-4">
            <ProjectCard
              title="AI Tetris Agent"
              description="An AI agent that plays Tetris better than any human"
              link="https://github.com/davejinyoung/ai-tetris"
            />
            <ProjectCard
              title="Pigeon Post"
              description="Gmail inbox AI summarizer web app"
              link="https://github.com/davejinyoung/pigeon-post"
            />
            <ProjectCard
              title="Looper"
              description="Custom biking and running route auto-generator web app"
              link="https://github.com/davejinyoung/Looper"
            />
          </div>
        </section>

        <section id="contact" className="pb-20">
          <Command command="echo $CONTACT" />
          <div className="mb-20 pl-4">
            <p className="text-gray-300">
              Reach out at{" "}
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="mailto:davejinyoung@gmail.com"
              >
                davejinyoung@gmail.com
              </a>
            </p>
          </div>
          <Command command={<BlinkingCursor />} />
        </section>
      </main>
      <Footer />
    </>
  );
}
