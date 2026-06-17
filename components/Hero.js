import TypingText from "./TypingText";
import IntroVideo from "./IntroVideo";
import ParticleNetwork from "./ParticleNetwork";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-24 pb-16"
    >
      {/* Neural network particle animation */}
      <ParticleNetwork />

      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" style={{ zIndex: 0 }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-dark/20 rounded-full blur-3xl" style={{ zIndex: 0 }} />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full" style={{ zIndex: 2 }}>
        {/* Text content */}
        <div className="order-2 md:order-1 text-white">
          <p className="text-lg md:text-2xl font-bold uppercase tracking-widest text-dark mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I&apos;m {profile.firstName}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-dark mb-6 [text-shadow:3px_3px_8px_rgba(0,0,0,0.5)]">
            {profile.title}
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white/90 max-w-md mb-8">{profile.tagline}</p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton
              href="#projects"
              className="bg-dark hover:bg-surface text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
            >
              Contact Me
            </MagneticButton>
          </div>
        </div>

        {/* Intro video with speech bubble */}
        <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-6 w-full">
          {/* Speech bubble */}
          <div className="relative bg-dark text-white rounded-2xl px-5 py-3 shadow-xl max-w-[320px] text-base md:text-lg text-center md:text-left">
            <TypingText text={`Hello, I'm Vaibhavi, I'm an AI/ML Engineer 👋`} />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 w-4 h-4 bg-dark rotate-45" />
          </div>

          <div className="w-full max-w-lg">
            <IntroVideo src="/intro-video.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
