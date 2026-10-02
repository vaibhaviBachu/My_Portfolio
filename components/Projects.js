import { projects } from "@/data/site";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-primary py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">
            My <span className="text-dark">Projects</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-dark rounded-full mb-8 md:mb-10" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * (i + 1)}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
