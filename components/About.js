import { profile, education } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-2">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mb-10" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <ScrollReveal delay={0.15} className="md:col-span-2">
            <div className="text-lg md:text-xl font-bold text-dark/80 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="bg-dark rounded-2xl shadow-xl p-7 border border-primary/30">
              <h3 className="text-xl font-extrabold text-primary mb-4">Education</h3>
              <p className="text-lg font-bold text-white">{education.degree}</p>
              <p className="text-white/70 text-base mb-1">{education.specialization}</p>
              <p className="text-white/70 text-base">{education.institution}</p>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <h3 className="text-xl font-extrabold text-primary mb-2">Location</h3>
                <p className="text-white/70 text-base">{profile.location}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
