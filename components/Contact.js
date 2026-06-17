import { profile } from "@/data/site";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-dark py-24 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(226,52,14,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-primary mb-3">
            Let&apos;s work together
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            Get In <span className="text-primary" style={{ textShadow: "0 0 32px rgba(226,52,14,0.6)" }}>Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mb-8 shadow-[0_0_12px_rgba(226,52,14,0.8)]" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12">
            I&apos;m always open to discussing new projects, opportunities, or just
            connecting. Feel free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-full transition-colors shadow-[0_0_20px_rgba(226,52,14,0.4)] hover:shadow-[0_0_30px_rgba(226,52,14,0.7)] w-full sm:w-auto text-center"
            >
              Email Me
            </MagneticButton>
            <MagneticButton
              href={profile.linkedin}
              className="border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold text-lg px-10 py-4 rounded-full transition-all w-full sm:w-auto text-center"
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              className="border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold text-lg px-10 py-4 rounded-full transition-all w-full sm:w-auto text-center"
            >
              GitHub
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-white/30 text-sm mt-14 tracking-wide">{profile.email}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
