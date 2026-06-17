import { experience } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-2">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mb-10" />
        </ScrollReveal>

        <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={0.15 * (i + 1)}>
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-light" />
                <p className="text-base md:text-lg text-primary font-bold mb-1">{job.duration}</p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-dark">{job.role}</h3>
                <p className="text-lg md:text-xl text-dark/70 font-semibold mb-3">{job.company}</p>
                <ul className="list-disc list-inside space-y-1 text-dark/70 text-base md:text-lg font-medium">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
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
