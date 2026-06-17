import { experience } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-light py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark mb-2">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-primary rounded-full mb-8 md:mb-10" />
        </ScrollReveal>

        <div className="relative border-l-2 border-primary/30 pl-5 sm:pl-8 space-y-8 sm:space-y-10">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={0.15 * (i + 1)}>
              <div className="relative">
                <span className="absolute -left-[25px] sm:-left-[39px] top-0.5 sm:top-1 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary border-3 sm:border-4 border-light flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base text-primary font-bold mb-1">{job.duration}</p>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-dark">{job.role}</h3>
                <p className="text-sm sm:text-lg md:text-xl text-dark/70 font-semibold mb-2 sm:mb-3">{job.company}</p>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-dark/70 text-xs sm:text-base md:text-lg font-medium">
                  {job.points.map((point) => (
                    <li key={point} className="break-words">{point}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
