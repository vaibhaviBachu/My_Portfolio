import { projects } from "@/data/site";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

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
              <TiltCard className="flex flex-col rounded-lg sm:rounded-2xl bg-dark p-4 sm:p-6 border border-white/10 h-full">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="font-extrabold text-white text-base sm:text-lg md:text-xl leading-snug">
                    {project.title}
                  </h3>
                  {project.inProgress && (
                    <span className="text-xs bg-primary/20 text-primary font-bold px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-white/70 text-xs sm:text-sm md:text-base font-medium flex-1 mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold bg-primary/15 border border-primary/30 text-primary rounded-full px-2 sm:px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-white hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.92.43.372.814 1.103.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
