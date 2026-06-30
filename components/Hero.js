import TypingText from "./TypingText";
import IntroVideo from "./IntroVideo";
import ParticleNetwork from "./ParticleNetwork";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-16 sm:pt-24 pb-12 sm:pb-16"
    >
      {/* Neural network particle animation */}
      <ParticleNetwork />

      {/* Decorative background shapes */}
      <div className="absolute -top-40 -right-40 sm:-top-24 sm:-right-24 w-56 sm:w-96 h-56 sm:h-96 bg-white/10 rounded-full blur-3xl" style={{ zIndex: 0 }} />
      <div className="absolute -bottom-20 -left-20 sm:bottom-0 sm:left-0 w-48 sm:w-72 h-48 sm:h-72 bg-dark/20 rounded-full blur-3xl" style={{ zIndex: 0 }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center w-full" style={{ zIndex: 2 }}>
        {/* Text content */}
        <div className="order-2 md:order-1 text-white">
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-widest text-dark mb-3 sm:mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4">
            Hi, I&apos;m {profile.firstName}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-dark mb-4 sm:mb-6 [text-shadow:3px_3px_8px_rgba(0,0,0,0.5)]">
            {profile.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white/90 max-w-md mb-6 sm:mb-8">{profile.tagline}</p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 lg:gap-4">
            <MagneticButton
              href="#projects"
              className="bg-dark hover:bg-surface text-white font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-colors text-center w-full xs:w-auto"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-colors text-center w-full xs:w-auto"
            >
              Contact Me
            </MagneticButton>
            <MagneticButton
              href="/vaibhavi_Resume.pdf"
              download="Vaibhavi_Bachu_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-colors text-center w-full xs:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </MagneticButton>
          </div>
        </div>

        {/* Intro video with speech bubble */}
        <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-4 sm:gap-6 w-full">
          {/* Speech bubble */}
          <div className="relative bg-dark text-white rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl max-w-xs sm:max-w-sm md:max-w-none text-xs sm:text-sm md:text-base lg:text-lg text-center md:text-left">
            <TypingText text={`Hello, I'm Vaibhavi, I'm an AI/ML Engineer 👋`} />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 w-3 sm:w-4 h-3 sm:h-4 bg-dark rotate-45" />
          </div>

          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg">
            <IntroVideo src="/intro-video.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
