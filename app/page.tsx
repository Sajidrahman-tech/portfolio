import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />

      {/* About + Skills side by side with divider */}
      <div
        className="flex w-full max-w-7xl flex-col gap-12
                   md:flex-row md:items-start md:justify-between md:gap-0 
                   md:divide-x md:divide-teal-300/40
                   dark:md:divide-teal-600/40"
      >
        <div className="flex-1 md:pr-6">
          <About />
        </div>
        <div className="flex-1 md:pl-6">
          <Skills />
        </div>
      </div>

      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
