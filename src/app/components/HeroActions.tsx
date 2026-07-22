"use client";
import AnimateIn from "./animation/AnimateIn";

export default function HeroActions() {
  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "/Michael_Olomola_Frontend_Engineer_Resume.pdf";
    a.download = "Michael_Olomola_Frontend_Engineer_Resume.pdf";
    a.click();
  };

  const scrollToWork = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimateIn delay={1.3} className="flex items-center gap-6 flex-wrap mt-8">
      <button onClick={scrollToWork} className="cursor-pointer">
        View Work →
      </button>
      <button onClick={downloadCV} className="cursor-pointer">
        Download CV →
      </button>
    </AnimateIn>
  );
}
