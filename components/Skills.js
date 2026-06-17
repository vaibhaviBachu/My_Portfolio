import { skills } from "@/data/site";
import NeuralNetworkBg from "./NeuralNetworkBg";
import ScrollReveal from "./ScrollReveal";

const FEATURED = new Set([
  "Python (NumPy, Pandas, Scikit-learn)",
  "TensorFlow",
  "PyTorch",
  "CNN",
  "Large Language Model fundamentals",
  "Prompt Engineering",
  "Docker",
  "Git/GitHub",
]);

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

function HexCell({ label }) {
  const featured = FEATURED.has(label);
  const match = label.match(/^(.+?)\s*\((.+)\)$/);
  const main = match ? match[1] : label;
  const detail = match ? match[2] : null;

  return (
    <div
      className={`hover:scale-105 sm:hover:scale-110 cursor-default transition-transform ${
        featured ? "hex-glow-featured" : "hex-glow"
      }`}
    >
      <div
        className={`w-[100px] h-[115px] sm:w-[130px] sm:h-[150px] md:w-[160px] md:h-[185px] flex items-center justify-center flex-shrink-0 ${
          featured ? "bg-dark" : "bg-primary"
        }`}
        style={{ clipPath: HEX_CLIP }}
      >
        <div
          className={`w-[94px] h-[109px] sm:w-[124px] sm:h-[144px] md:w-[154px] md:h-[179px] flex flex-col items-center justify-center text-center px-2 sm:px-3 ${
            featured ? "bg-primary" : "bg-surface"
          }`}
          style={{ clipPath: HEX_CLIP }}
        >
          <span className="text-xs sm:text-sm md:text-base font-extrabold text-white leading-tight">
            {main}
          </span>
          {detail && (
            <span className="text-[7px] sm:text-[9px] md:text-[10px] font-semibold text-white/60 mt-0.5 sm:mt-1 leading-tight">
              {detail}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-dark py-24 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(226,52,14,0.04) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <NeuralNetworkBg />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-primary/6 blur-[100px]" />
      </div>

      <ScrollReveal className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-primary mb-2 sm:mb-3">
          What I work with
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
          My{" "}
          <span
            className="text-primary"
            style={{
              textShadow:
                "0 0 32px rgba(226,52,14,0.7), 0 0 80px rgba(226,52,14,0.3)",
            }}
          >
            Skills
          </span>
        </h2>
        <div className="mt-3 sm:mt-4 w-12 sm:w-20 h-0.5 sm:h-1 rounded-full bg-primary shadow-[0_0_16px_rgba(226,52,14,0.9)]" />
        <p className="mt-3 sm:mt-5 text-white/50 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-xl">
          Technologies, frameworks, and tools I use to build intelligent systems.
        </p>
      </ScrollReveal>

      <div className="relative flex flex-col gap-10 sm:gap-14 max-w-5xl mx-auto px-4 sm:px-6">
        {skills.map((group, i) => (
          <ScrollReveal key={group.category} delay={0.1 * (i + 1)}>
            <div className="flex items-center gap-2 sm:gap-4 mb-5 sm:mb-7">
              <div className="h-px flex-1 bg-white/8" />
              <span
                className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.15em] px-3 sm:px-5 py-1 sm:py-1.5 rounded-full border border-primary/40 text-primary whitespace-nowrap"
                style={{ textShadow: "0 0 14px rgba(226,52,14,0.5)" }}
              >
                {group.category}
              </span>
              <div className="h-px flex-1 bg-white/8" />
            </div>

            <div className="flex justify-center gap-2 sm:gap-4 md:gap-5 overflow-x-auto pb-2 scrollbar-hide">
              {group.items.map((item) => (
                <HexCell key={item} label={item} />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
