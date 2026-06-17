import { profile, education } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-light py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark mb-2">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-primary rounded-full mb-6 sm:mb-8 md:mb-10" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">
          <ScrollReveal delay={0.15} className="md:col-span-2">
            <div className="text-base sm:text-lg md:text-lg lg:text-xl font-bold text-dark/80 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="bg-dark rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-7 border border-primary/30 w-full">
              <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-3 sm:mb-4">Education</h3>
              <p className="text-base sm:text-lg font-bold text-white">{education.degree}</p>
              <p className="text-white/70 text-sm sm:text-base mb-1">{education.specialization}</p>
              <p className="text-white/70 text-sm sm:text-base">{education.institution}</p>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-primary/20">
                <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-1 sm:mb-2">Location</h3>
                <p className="text-white/70 text-sm sm:text-base">{profile.location}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
