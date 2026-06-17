import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/20 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center sm:text-left">
          {/* Logo */}
          <a href="#home" className="text-white font-bold text-lg sm:text-2xl tracking-tight">
            Vaibhavi<span className="text-primary">.</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[22px] sm:h-[22px]">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.92.43.372.814 1.103.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[22px] sm:h-[22px]">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-white/50 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </div>

        {/* Bottom accent */}
        <div className="mt-4 sm:mt-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <p className="text-center text-white/20 text-xs mt-3 sm:mt-4">
          Designed & built with passion
        </p>
      </div>
    </footer>
  );
}
